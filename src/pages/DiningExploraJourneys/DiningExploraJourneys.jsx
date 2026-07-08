import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  Minus,
  Plus,
  ArrowRight,
  Star,
  Sparkles,
  Ship,
  Home,
  Coffee,
  Wine,
  ChefHat,
  Globe,
  GlassWater,
  Beef,
  Soup,
  UtensilsCrossed,
  Salad,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/HowAdvanceShouldBookExplora/Luxury-Explora-Journeys.webp";
import HeroImage2 from "../../assets/IsExploraGoodForFamilies/Fine-Dining.webp";
import HeroImage4 from "../../assets/ExploraIVGuide/greenland-expedition-cruise-arctic-luxury-voyage.jpg";
import ExploraPool from "../../assets/HowAdvanceShouldBookExplora/onboard-experience.webp";
import ExploraDest1 from "../../assets/WhichMediterraneanItineraryIsBest/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import ExploraDest2 from "../../assets/ExploraIVGuide/explora-III-helios-pool-luxury-sundeck-retreat.jpg";
import ExploraDest3 from "../../assets/ExploraIVGuide/authentic-japanese-ramen-food-experience-tokyo-japan.jpg";
import ExploraDest4 from "../../assets/ExploraIVGuide/explora-journeys-ocean-grand-terrace-suite-balcony.jpg";
import ExploraService from "../../assets/WhichExploraShipChoose/EXPLORA-III-IV-Anthology.jpg";
import LuxuryOceanfront from "../../assets/WhichExploraSuiteWorthUpgrade/explora-luxury-dining.jpg";
import LuxuryOceanfront1 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-luxury-dining2.jpg";
import ExploraShip from "../../assets/IsExploraGoodForFamilies/ExploraCruise.webp";

import { Helmet } from "react-helmet-async";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      "@id": "https://tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      "@id": "https://tripsandships.com/dining-on-explora-journeys/#webpage",
      name: "Dining on Explora Journeys",
      url: "https://tripsandships.com/dining-on-explora-journeys",
      description:
        "Discover everything about dining on Explora Journeys, including restaurants, specialty dining, room service, flexible meal times, bars, cafés, and whether the culinary experience is worth it.",
    },
    {
      "@type": "Article",
      "@id": "https://tripsandships.com/dining-on-explora-journeys/#article",
      headline:
        "Dining on Explora Journeys | Restaurants, Cuisine & Everything You Need to Know",
      description:
        "A complete guide to dining aboard Explora Journeys, covering flexible dining, signature restaurants, Anthology, room service, cafés, the wine program, healthy options, and dietary accommodations.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tripsandships.com/dining-on-explora-journeys/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Explora Journeys",
          item: "https://tripsandships.com/luxury-explora-journeys-guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dining on Explora Journeys",
          item: "https://tripsandships.com/dining-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://tripsandships.com/dining-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys sailings, including guidance on dining venues, specialty restaurant reservations, and onboard experiences.",
    },
    {
      "@type": "Review",
      "@id": "https://tripsandships.com/dining-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Dining Experience",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Dining is widely considered one of Explora Journeys' greatest strengths, with flexible schedules, multiple restaurants, and a signature specialty venue in Anthology.",
    },
    {
      "@type": "HowTo",
      "@id": "https://tripsandships.com/dining-on-explora-journeys/#howto",
      name: "How Dining Works Aboard Explora Journeys",
      description:
        "A simple overview of how flexible dining functions on an Explora Journeys sailing.",
      step: [
        {
          "@type": "HowToStep",
          name: "Skip the fixed dining time",
          text: "There are no assigned dinner seatings or tables, so guests can dine whenever it suits their schedule.",
        },
        {
          "@type": "HowToStep",
          name: "Choose a restaurant",
          text: "Select from Mediterranean, Asian-inspired, steakhouse, international, or casual poolside venues.",
        },
        {
          "@type": "HowToStep",
          name: "Reserve specialty dining",
          text: "Book a table at Anthology, the ship's signature tasting-menu restaurant, for an elevated evening.",
        },
        {
          "@type": "HowToStep",
          name: "Order in-suite dining",
          text: "Request room service for breakfast, light lunches, late-night snacks, or a full dinner in your suite.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://tripsandships.com/dining-on-explora-journeys/#itemlist",
      name: "What This Dining on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "A Culinary Philosophy Built Around Luxury",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Flexible Dining Without Fixed Seating",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Restaurants on Explora Journeys",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Anthology: Explora's Signature Culinary Experience",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Breakfast, Lunch & Elegant Evening Dining",
        },
        { "@type": "ListItem", position: 6, name: "In-Suite Dining" },
        { "@type": "ListItem", position: 7, name: "Cafés & Bars" },
        {
          "@type": "ListItem",
          position: 8,
          name: "Healthy Dining & Dietary Accommodations",
        },
        { "@type": "ListItem", position: 9, name: "Is Dining Included?" },
        {
          "@type": "ListItem",
          position: 10,
          name: "Who Will Love Dining on Explora?",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/dining-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the food good on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dining is widely considered one of Explora Journeys' greatest strengths, with multiple restaurants serving high-quality international cuisine.",
          },
        },
        {
          "@type": "Question",
          name: "Are meals included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most restaurants, casual dining venues, and room service are included in your cruise fare. Some specialty dining experiences may have an additional charge.",
          },
        },
        {
          "@type": "Question",
          name: "Is there flexible dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests are not assigned dining times or tables, allowing complete flexibility throughout the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have specialty dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Anthology is the ship's signature specialty restaurant, offering an elevated fine dining experience.",
          },
        },
        {
          "@type": "Question",
          name: "Can dietary restrictions be accommodated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Vegetarian, vegan, gluten-free, and many other dietary requirements can typically be accommodated with advance notice.",
          },
        },
        {
          "@type": "Question",
          name: "Is room service available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests can enjoy meals, snacks, and beverages in the privacy of their suite.",
          },
        },
        {
          "@type": "Question",
          name: "Are there healthy dining options?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Fresh seafood, vegetables, lean proteins, plant-based dishes, and wellness-focused meals are available throughout the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a dress code for restaurants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The atmosphere is elegant but relaxed. Smart casual attire is appropriate for most dining venues.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need reservations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some specialty restaurants and popular dining times may require reservations, while many venues offer flexible seating.",
          },
        },
        {
          "@type": "Question",
          name: "Is dining one of the highlights of Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Without question. Along with spacious suites and exceptional service, the culinary experience is consistently ranked among the top reasons guests choose Explora Journeys.",
          },
        },
        {
          "@type": "Question",
          name: "Is wine and alcohol pairing included with meals on Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A wide selection of premium fine wines, beers, spirits, Champagnes, and soft drinks is fully included with your meals at all dining venues and bars throughout the ship.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of dining at Anthology on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While most dining venues are complimentary, Anthology requires a specialty dining cover charge (typically around €140 to €190 per person, depending on the featured guest chef's menu) plus an optional wine pairing fee.",
          },
        },
        {
          "@type": "Question",
          name: "Can I dine on my private suite balcony terrace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Explora Journeys offers complimentary 24-hour in-suite dining, allowing you to order multi-course meals or snacks to enjoy on your private oceanfront terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Are there cooking classes or culinary demonstrations onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora features the Chef's Kitchen, an interactive culinary space where guests can participate in hands-on cooking classes, wine tastings, and chef-led demonstrations for a nominal fee.",
          },
        },
        {
          "@type": "Question",
          name: "How does Explora Journeys source its ingredients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sourcing focuses on local, sustainable, and high-quality seasonal ingredients. The culinary team regularly sources fresh seafood, local cheeses, and regional produce at ports of call to feature destination-inspired dishes on the menus.",
          },
        },
      ],
    },
  ],
};

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Is the food good on Explora Journeys?",
      a: "Yes. Dining is widely considered one of Explora Journeys' greatest strengths, with multiple restaurants serving high-quality international cuisine.",
    },
    {
      q: "Are meals included?",
      a: "Most restaurants, casual dining venues, and room service are included in your cruise fare. Some specialty dining experiences may have an additional charge.",
    },
    {
      q: "Is there flexible dining?",
      a: "Yes. Guests are not assigned dining times or tables, allowing complete flexibility throughout the voyage.",
    },
    {
      q: "Does Explora have specialty dining?",
      a: "Yes. Anthology is the ship's signature specialty restaurant, offering an elevated fine dining experience.",
    },
    {
      q: "Can dietary restrictions be accommodated?",
      a: "Yes. Vegetarian, vegan, gluten-free, and many other dietary requirements can typically be accommodated with advance notice.",
    },
    {
      q: "Is room service available?",
      a: "Yes. Guests can enjoy meals, snacks, and beverages in the privacy of their suite.",
    },
    {
      q: "Are there healthy dining options?",
      a: "Absolutely. Fresh seafood, vegetables, lean proteins, plant-based dishes, and wellness-focused meals are available throughout the voyage.",
    },
    {
      q: "Is there a dress code for restaurants?",
      a: "The atmosphere is elegant but relaxed. Smart casual attire is appropriate for most dining venues.",
    },
    {
      q: "Do I need reservations?",
      a: "Some specialty restaurants and popular dining times may require reservations, while many venues offer flexible seating.",
    },
    {
      q: "Is dining one of the highlights of Explora Journeys?",
      a: "Without question. Along with spacious suites and exceptional service, the culinary experience is consistently ranked among the top reasons guests choose Explora Journeys.",
    },
    {
      q: "Is wine and alcohol pairing included with meals on Explora?",
      a: "Yes. A wide selection of premium fine wines, beers, spirits, Champagnes, and soft drinks is fully included with your meals at all dining venues and bars throughout the ship.",
    },
    {
      q: "What is the price of dining at Anthology on Explora Journeys?",
      a: "While most dining venues are complimentary, Anthology requires a specialty dining cover charge (typically around €140 to €190 per person, depending on the featured guest chef's menu) plus an optional wine pairing fee.",
    },
    {
      q: "Can I dine on my private suite balcony terrace?",
      a: "Absolutely. Explora Journeys offers complimentary 24-hour in-suite dining, allowing you to order multi-course meals or snacks to enjoy on your private oceanfront terrace.",
    },
    {
      q: "Are there cooking classes or culinary demonstrations onboard?",
      a: "Yes. Explora features the Chef's Kitchen, an interactive culinary space where guests can participate in hands-on cooking classes, wine tastings, and chef-led demonstrations for a nominal fee.",
    },
    {
      q: "How does Explora Journeys source its ingredients?",
      a: "Sourcing focuses on local, sustainable, and high-quality seasonal ingredients. The culinary team regularly sources fresh seafood, local cheeses, and regional produce at ports of call to feature destination-inspired dishes on the menus.",
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

const exploraRestaurants = [
  {
    id: "mediterranean",
    title: "Mediterranean Cuisine",
    badge: "Mediterranean",
    icon: UtensilsCrossed,
    image: ExploraDest1,

    desc: "Mediterranean flavors are at the heart of the Explora Journeys experience. Inspired by the coastal regions of Europe, each dish celebrates fresh, seasonal ingredients prepared with exceptional care.",

    columns: [
      {
        label: "Expect:",
        items: [
          "Fresh seafood",
          "Handmade pasta",
          "Seasonal vegetables",
          "Premium olive oils",
          "Artisan breads",
          "Regional specialties",
        ],
      },
    ],

    themeLabel: "Mediterranean Excellence",
    themeText:
      "Simple ingredients, authentic recipes, and elegant presentation create one of the signature dining experiences aboard Explora Journeys.",
  },

  {
    id: "asian",
    title: "Asian-Inspired Restaurant",
    badge: "Asian Dining",
    icon: Soup,
    image: ExploraDest3,

    desc: "Guests looking for bold flavors will appreciate the ship's elegant Asian-inspired restaurant, where traditional favorites meet contemporary culinary techniques.",

    columns: [
      {
        label: "Menu Highlights:",
        items: [
          "Sushi",
          "Sashimi",
          "Dim sum",
          "Noodle dishes",
          "Seafood specialties",
          "Contemporary Asian cuisine",
        ],
      },
    ],

    themeLabel: "Bold Asian Flavors",
    themeText:
      "An elegant yet welcoming atmosphere makes this venue ideal for everything from relaxed dinners to special occasions.",
  },

  {
    id: "steakhouse",
    title: "European Steakhouse Experience",
    badge: "Steakhouse",
    icon: Beef,
    image: LuxuryOceanfront,

    desc: "Premium cuts of meat, expertly prepared seafood, and attentive service create one of the ship's most sophisticated dining venues.",

    columns: [
      {
        label: "Guests Can Expect:",
        items: [
          "Prime beef",
          "Fresh seafood",
          "Signature sauces",
          "Extensive wine selections",
          "Elegant service",
        ],
      },
    ],

    themeLabel: "Classic Fine Dining",
    themeText:
      "Perfect for celebrations, anniversaries, or anyone seeking an exceptional steakhouse experience at sea.",
  },

  {
    id: "international",
    title: "International Dining",
    badge: "International",
    icon: Globe,
    image: ExploraDest4,

    desc: "Several restaurants feature globally inspired menus that showcase flavors from around the world using fresh seasonal ingredients.",

    columns: [
      {
        label: "Featured:",
        items: [
          "Contemporary cuisine",
          "International flavors",
          "Seasonal ingredients",
          "Creative presentations",
        ],
      },
    ],

    themeLabel: "Global Culinary Journey",
    themeText:
      "With multiple restaurants onboard, guests can enjoy a different culinary experience every evening.",
  },

  {
    id: "poolside",
    title: "Casual Poolside Dining",
    badge: "Poolside",
    icon: GlassWater,
    image: ExploraDest2,

    desc: "Luxury doesn't always require formal dining. Throughout the day, casual poolside venues serve fresh, flavorful meals in a relaxed outdoor setting.",

    columns: [
      {
        label: "Favorites Include:",
        items: [
          "Fresh salads",
          "Gourmet sandwiches",
          "Pizza",
          "Grilled specialties",
          "Light snacks",
          "Refreshing beverages",
        ],
      },
    ],

    themeLabel: "Relaxed Outdoor Dining",
    themeText:
      "Perfect for leisurely lunches, afternoon snacks, and enjoying spectacular ocean views between activities.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const DiningOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDest, setActiveDest] = useState("mediterranean");
  const [hovered, setHovered] = useState(null);
  const currentDest =
    exploraRestaurants.find((d) => d.id === activeDest) ||
    exploraRestaurants[0];

  const ActiveIcon = currentDest.icon;

  const images = [HeroImage2, HeroImage1, HeroImage4];

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
          Dining on Explora Journeys | Restaurants, Cuisine &amp; Everything You
          Need to Know
        </title>
        <meta name="title" content="Dining on Explora Journeys" />
        <meta
          name="description"
          content="Discover everything about dining on Explora Journeys, including restaurants, specialty dining, room service, flexible meal times, bars, cafés, and whether the culinary experience is worth it."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />
      {/* ── HERO ───────────────────────────────────────────────────── */}
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
          <h1>Dining on Explora Journeys</h1>

          <p>
            For many luxury travelers, exceptional dining is just as important
            as the destinations they visit. On Explora Journeys, food is more
            than simply a daily necessity — it's an essential part of the
            overall travel experience.
          </p>

          <p>
            From elegant Mediterranean cuisine and authentic Asian flavors to
            relaxed poolside lunches and refined tasting menus, every restaurant
            reflects the same philosophy that defines the entire brand: quality
            over quantity, flexibility over schedules, and memorable experiences
            over routine meals.
          </p>

          {readMore && (
            <>
              <p>
                Unlike traditional cruise lines with fixed dining times and
                assigned tables, Explora Journeys offers a more relaxed approach
                that allows guests to dine when, where, and how they choose.
              </p>

              <p>
                This guide covers every dining venue, the signature Anthology
                experience, room service, dietary accommodations, and whether
                the culinary program is right for your next voyage.
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

      {/* ── CULINARY PHILOSOPHY ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="culinary-philosophy"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              A Culinary Philosophy <br /> Built Around Luxury
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Elegant dining atmosphere aboard Explora Journeys"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  <strong>Explora Journeys</strong> approaches dining much like
                  a luxury resort rather than a conventional cruise ship. Meals
                  are designed to be enjoyed without feeling rushed, allowing
                  guests to savor both the cuisine and the company.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    The emphasis is on:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Fresh seasonal ingredients",
                      "International culinary influences",
                      "Beautiful presentation",
                      "Flexible dining hours",
                      "Personalized service",
                      "Relaxed atmosphere",
                      "High-quality wines and beverages",
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
                  Unlike traditional cruise lines with fixed dining times and
                  assigned tables, Explora Journeys offers a relaxed approach
                  that allows guests to dine when, where, and how they choose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DINING EXPERIENCES ABOARD EXPLORA JOURNEYS ─────────────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">
              Dining Experiences Aboard Explora Journeys
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Leg-subtitle">
              Explora Journeys offers a variety of dining and lounge experiences
              throughout the day, from elegant multi-course dinners to relaxed
              cafés and private in-suite dining. Every meal is designed around
              flexibility, exceptional ingredients, and personalized service.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: UtensilsCrossed,
                title: "Elegant Evening Dining",
                description:
                  "Dinner is where Explora Journeys truly shines, offering refined cuisine in a sophisticated yet relaxed atmosphere without fixed dining schedules.",
                pills: [
                  "Multiple Restaurants",
                  "Flexible Dining",
                  "Refined Cuisine",
                ],
                highlight: "Enjoy dinner whenever it fits your evening plans.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Home,
                title: "In-Suite Dining",
                description:
                  "Room service allows guests to enjoy beautifully prepared meals from the comfort of their private oceanfront suite or terrace.",
                pills: [
                  "Breakfast in Bed",
                  "Full Dinner Service",
                  "Late-Night Snacks",
                ],
                highlight: "Private dining with spectacular ocean views.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Coffee,
                title: "Cafés & Lounges",
                description:
                  "Elegant cafés and lounges serve specialty coffee, afternoon tea, pastries, cocktails, and light desserts throughout the day.",
                pills: ["Espresso Drinks", "Afternoon Tea", "Fresh Pastries"],
                highlight: "Favorite gathering places from morning to evening.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Wine,
                title: "Bars & Wine Program",
                description:
                  "From signature cocktails to premium wines and Champagne, the beverage program complements every dining experience onboard.",
                pills: ["Premium Wines", "Champagne", "Signature Cocktails"],
                highlight:
                  "Perfect for celebrations and unforgettable sunsets.",
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
        </div>
      </section>

      {/* ── IS DINING INCLUDED? ────────────────────────────────────── */}
      <section className="adg-section" id="adg-dining-included">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is Dining Included?</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              One of the advantages of sailing with Explora Journeys is that
              most dining venues are included in your cruise fare.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={LuxuryOceanfront1}
                alt="Included dining venues aboard Explora Journeys"
                className="adg-side-image"
                style={{ height: "36vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">
                    Generous Dining Inclusions
                  </span>
                </div>

                <p className="adg-card-lead">
                  Depending on your voyage, some premium specialty experiences
                  may carry an additional charge, while the vast majority of
                  dining is included.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Multiple restaurants",
                "Breakfast, lunch, and dinner",
                "Room service",
                "Casual dining venues",
                "Cafés",
                "Snacks throughout the day",
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">
                    <Check size={18} strokeWidth={2.5} />
                  </div>

                  <h4 className="adg-list-item-label">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORA JOURNEYS FLEET HIGHLIGHTS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              The Explora Journeys Luxury Fleet
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              From the pioneering design of Explora I to the forward-looking
              innovation of Explora IV, each ship in the fleet offers an
              intimate, sophisticated small-ship atmosphere designed to connect
              you beautifully with the ocean and world-class destinations.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {exploraRestaurants.map((item) => {
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

      {/* ── DIETARY ACCOMMODATIONS & SERVICE ───────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="dietary-accommodations"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Dietary Accommodations &amp; Service
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora Journeys is committed to creating an exceptional dining
              experience for every guest, offering flexible dietary
              accommodations alongside attentive, personalized service.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Dietary Accommodations */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Salad size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Dietary Accommodations</h3>
              </div>

              <p className="Ejvs-card-intro">
                Explora Journeys works to accommodate a wide variety of dietary
                preferences and food sensitivities, helping every guest enjoy
                their meals with confidence.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Vegetarian meals",
                  "Vegan selections",
                  "Gluten-free dishes",
                  "Dairy-free alternatives",
                  "Food allergy accommodations",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <div className="Ejvs-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Guests are encouraged to communicate dietary requirements
                  before sailing to ensure the best possible dining experience.
                </p>
              </div>
            </div>

            {/* Service */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Users size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Service That Elevates Every Meal
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Exceptional food deserves exceptional service, and Explora
                Journeys delivers warm, attentive hospitality throughout every
                dining venue.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Professional yet relaxed hospitality",
                  "Knowledgeable servers",
                  "Personalized recommendations",
                  "Attention to detail",
                  "Comfortable pacing",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Meals are never rushed, allowing guests to fully enjoy every
                  course and every conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANTHOLOGY & BREAKFAST ───────────────────────────────────────── */}
      <section
        className="dve-winner-section"
        id="anthology"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Anthology: Explora's Signature Culinary Experience
            </h2>

            <div className="dve-section-accent"></div>

            <p className="dve-section-subtitle">
              From unforgettable fine dining at Anthology to leisurely
              breakfasts overlooking the ocean, Explora Journeys delivers
              exceptional culinary experiences throughout the day.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Anthology */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={ExploraService}
                  alt="Anthology signature restaurant aboard Explora Journeys"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Signature Fine Dining</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Anthology Specialty Restaurant
                </h3>

                <p className="dve-winner-intro">
                  Among the most talked-about dining experiences aboard Explora
                  Journeys is <strong>Anthology</strong>. Designed as the ship's
                  signature specialty restaurant, it features carefully curated
                  tasting menus created in collaboration with acclaimed chefs.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Highlights Include:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Seasonal tasting menus",
                    "Premium ingredients",
                    "Artistic presentation",
                    "Exceptional wine pairings",
                    "Intimate atmosphere",
                  ].map((item, i) => (
                    <li key={i}>
                      <ChefHat size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="dve-winner-intro" style={{ marginTop: "1rem" }}>
                  For travelers who enjoy fine dining, Anthology is often
                  considered one of the culinary highlights of the voyage.
                </p>
              </div>
            </div>

            {/* Breakfast */}
            <div className="dve-winner-card dve-seabourn-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={HeroImage2}
                  alt="Elegant breakfast aboard Explora Journeys"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Relaxed Morning Dining</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Breakfast on Explora Journeys
                </h3>

                <p className="dve-winner-intro">
                  Breakfast is designed to be both elegant and relaxed, allowing
                  guests to begin each day at their own pace while enjoying
                  fresh, high-quality ingredients.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests Can Enjoy:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Fresh pastries",
                    "Seasonal fruit",
                    "Eggs prepared to order",
                    "Artisan breads",
                    "Smoked salmon",
                    "Yogurt and granola",
                  ].map((item, i) => (
                    <li key={i}>
                      <Coffee size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="dve-winner-intro" style={{ marginTop: "1rem" }}>
                  Whether dining on your private terrace or in one of the ship's
                  elegant restaurants, mornings begin in complete comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUNCH OPTIONS & HEALTHY DINING ───────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="lunch-options">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Fresh • Flexible • Flavorful</span>

            <h2 className="adg-c-h2">Lunch Options &amp; Healthy Dining</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              From leisurely Mediterranean lunches to wellness-focused cuisine,
              Explora Journeys offers fresh, flavorful meals that suit every
              appetite and lifestyle.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {/* Lunch Options */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">Midday Dining</span>

                <h3 className="adg-c-venue-name">Lunch Options</h3>

                <p className="adg-c-venue-highlight">
                  Fresh Choices Throughout the Day
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Mediterranean specialties",
                  "International cuisine",
                  "Fresh seafood",
                  "Light healthy meals",
                  "Poolside favorites",
                  "Fresh salads",
                  "Grilled dishes",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Guests often enjoy leisurely lunches before returning to the
                  pool or heading ashore to explore their destination.
                </p>
              </div>
            </div>

            {/* Healthy Dining */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">Wellness at Sea</span>

                <h3 className="adg-c-venue-name">Healthy Dining Choices</h3>

                <p className="adg-c-venue-highlight">
                  Nutritious Meals Without Compromise
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Fresh seafood",
                  "Seasonal vegetables",
                  "Lean proteins",
                  "Plant-based meals",
                  "Gluten-free selections",
                  "Vegetarian dishes",
                  "Fresh fruit",
                  "Nutritious breakfasts",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Guests can enjoy indulgent dining while still maintaining
                  healthy eating habits throughout their voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEXIBLE DINING WITHOUT FIXED SEATING ───────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="adg-c-flexible-dining"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Flexible Dining Without Fixed Seating</h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              One of the most appreciated aspects of dining aboard Explora
              Journeys is the flexibility. Instead of traditional assigned
              dining times, guests can choose when and where they wish to eat
              throughout the day.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "No fixed dinner seating",
                "No assigned dining tables",
                "Greater flexibility for shore excursions",
                "Relaxed vacation schedule",
                "Easier planning for couples and families",
                "Multiple dining venues to choose from",
                "A personalized dining experience every day",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Guests enjoy complete freedom to dine at their preferred
                    time and venue, creating a more relaxed, personalized, and
                    luxurious onboard experience.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={LuxuryOceanfront}
                  alt="Flexible dining experience aboard Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Dine When You Choose
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW EXPLORA DINING COMPARES ─────────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="dining-comparison"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              How Explora Dining Compares <br /> to Other Luxury Cruise Lines
            </h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-body-text">
              Rather than relying on one formal dining room, Explora offers a
              collection of unique culinary experiences.
            </p>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Explora Journeys</th>
                </tr>
              </thead>

              <tbody>
                {[
                  "Flexible Dining",
                  "Multiple Restaurants",
                  "All-Day Dining",
                  "Fine Dining",
                  "Specialty Restaurant",
                  "Room Service",
                  "Healthy Options",
                  "Personalized Service",
                ].map((item, i) => (
                  <tr key={i}>
                    <td>{item}</td>
                    <td>✔</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="Asc-body-text"
            style={{
              maxWidth: "760px",
              margin: "30px auto 0",
              textAlign: "center",
            }}
          >
            Food lovers consistently rank dining among the strongest aspects of
            the Explora experience.
          </p>
        </div>
      </section>

      {/* ── EXPLORA I BARS & LOUNGES ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-bars-lounges"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">EXPLORA I – Our Bars and Lounges</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover the elegant bars and lounges aboard Explora I, where
              handcrafted cocktails, premium wines, Champagne, specialty
              coffees, and inviting social spaces create the perfect atmosphere
              throughout your voyage.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/ZOEMyGj0g_c"
                title="EXPLORA I - Our Bars and Lounges | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WILL LOVE DINING ON EXPLORA ─────────────────── */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Will Love Dining on Explora?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Explora's culinary program is especially appealing for travelers
              who enjoy gourmet cuisine, fine wines, and relaxed luxury.
            </p>
          </div>

          <div
            className="Asc-who-grid"
            style={{
              gridTemplateColumns: "1fr",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                You Will Love Dining on Explora If You Enjoy:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Gourmet cuisine",
                  "Flexible schedules",
                  "Fine wines",
                  "Fresh seafood",
                  "International flavors",
                  "Elegant presentation",
                  "Personalized service",
                  "Relaxed luxury",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="Asc-body-text"
            style={{
              maxWidth: "760px",
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            Food lovers consistently rank dining among the strongest aspects of
            the Explora experience.
          </p>
        </div>
      </section>

      {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>
            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
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
                  CEO of Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  Traveled to more than 121 countries
                </p>
              </div>
            </div>

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
                      icon: <Star size={16} />,
                      label: "Over 40 years in the travel industry",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveled to more than 121 countries",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly industry columnist",
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
                        "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
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

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything travelers need to know about dining aboard Explora
              Journeys.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExploraShip}
            alt="Elegant dining aboard Explora Journeys"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Cruise Planning
                </span>
                <h2 className="Asc-help-h2">Taste the Ocean State of Mind</h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Dining on Explora Journeys reflects the same philosophy that
                    defines the entire brand — modern luxury without unnecessary
                    formality. Every restaurant emphasizes fresh ingredients,
                    thoughtful preparation, exceptional service, and the freedom
                    to dine on your own schedule.
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

                  {readMore && (
                    <>
                      <br />
                      <p className="Asc-help-intro">
                        Whether you're enjoying breakfast on your private
                        terrace, a leisurely Mediterranean lunch by the pool, or
                        an unforgettable tasting menu at Anthology, every meal
                        becomes part of the journey itself.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers who believe that great vacations are
                        remembered as much for the food as the destinations,
                        Explora Journeys delivers one of the finest dining
                        experiences at sea.
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
                    </>
                  )}

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Explora Journeys Cruise
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Our luxury planning services include:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Recommend the ideal sailing for your travel style",
                      "Advise on which restaurants and specialty dining to reserve",
                      "Coordinate dietary requirements before you sail",
                      "Select the right suite",
                      "Compare promotional offers",
                      "Arrange flights, transfers, and pre/post hotels",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Suggested Internal Links */}
              <div
                className="Asc-internal-links-section"
                style={{
                  marginTop: "60px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  paddingTop: "40px",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: "400",
                    marginBottom: "20px",
                  }}
                >
                  Explore More Explora Journeys Guides
                </h3>
                <div
                  className="Asc-internal-links-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "15px",
                  }}
                >
                  {[
                    {
                      label: "Explora Journeys Review",
                      path: "/explora-journeys-review",
                    },
                    {
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
                    },
                    {
                      label: "Is Explora Journeys Luxury?",
                      path: "/is-explora-journeys-luxury",
                    },
                    {
                      label: "Is Anthology Worth It?",
                      path: "/is-anthology-worth-it",
                    },
                    {
                      label: "What Is Included on Explora Journeys?",
                      path: "/what-is-included-on-explora-journeys",
                    },
                    {
                      label: "Which Explora Suite Is Worth the Upgrade?",
                      path: "/which-explora-suite-is-worth-the-upgrade",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
                    },
                    {
                      label: "Explora I Review",
                      path: "/explora-i-review",
                    },
                    {
                      label: "Explora II Review",
                      path: "/explora-ii-review",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "Should You Book Through a Travel Advisor?",
                      path: "/should-you-book-through-a-travel-advisor",
                    },
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "16px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      <ArrowRight size={14} style={{ flexShrink: 0 }} />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiningOnExploraJourneys;
