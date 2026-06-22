import { useState, useEffect } from "react";
import {
  Ship,
  Users,
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Compass,
  Wine,
  Quote,
  Sparkles,
  LayoutGrid,
  Tag,
  Clock,
  HandCoins,
  Shield,
  MapPinned,
  Plane,
  Wifi,
  BookOpen,
  Clock3,
  Bed,
  Calendar,
  Waves,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import VikingRiverImg from "../../assets/VikingCruises/budapest-hungary-river-cruise-danube.jpg";
import VikingOceanImg from "../../assets/VikingCruiseCost/viking-Tromso-Norway.jpg";
import VikingExpeditionImg from "../../assets/VikingCruises/viking-expedition-ship-antarctica-cruise.jpg";
import "../VikingCruises/VikingCruises.css";
// import CTAImage from "../../assets/VikingCruiseCost/viking-river-cruise-exterior.webp";

import HeroImage1 from "../../assets/VikingCruiseCost/lofoten-islands-norway-cruise.jpg";
import HeroImage2 from "../../assets/VikingCruiseCost/Expedition-Ship-Antarctica6.jpg";
import HeroImage4 from "../../assets/VikingCruiseCost/viking-Dubrovnik-Croatia.jpg";
import VikingDining from "../../assets/VikingCruiseCost/Viking-Explorer-Suite.jpg";
import VikingSuite from "../../assets/VikingCruiseCost/Viking-Aquavit-Terrace-Dining.jpg";
import VikingExperience1 from "../../assets/VikingCruiseCost/Viking-Aquavit-Terrace.jpg";
import VikingExperience2 from "../../assets/VikingCruiseCost/viking-aquavit-terrace-ocean-dining.jpg";
import VikingExperience3 from "../../assets/VikingCruiseCost/viking-explorer-suite-balcony-view.jpg";
import VikingExperience4 from "../../assets/VikingCruiseCost/Guests-in-Antarctica3.jpg";
import VikingExperience5 from "../../assets/VikingCruiseCost/Aquavit-dinig.jpg";
import VikingCabin from "../../assets/VikingCruiseCost/viking-deluxe-veranda-stateroom.jpg";
import VikingCruise from "../../assets/VikingCruiseCost/viking-expedition-ship-welland-canal.jpg";
import VikingAnta from "../../assets/VikingCruiseCost/Antarctica.jpg";
import VikingAlaska from "../../assets/VikingCruiseCost/alaska-family-glacier-view-hiking-vacation.jpg";
import VikingCta from "../../assets/VikingCruiseCost/flam-norway-fjord-cruise.jpg";

import { Helmet } from "react-helmet-async";

const vikingPricingFactors = [
  {
    id: "destination",
    title: "Destination",
    badge: "Destination",
    icon: MapPinned,
    image: VikingAnta,

    desc: "The destination is one of the biggest factors influencing Viking cruise pricing. More remote and specialized itineraries typically command higher fares.",

    columns: [
      {
        label: "Lower-Priced Examples",
        items: ["Rhine River", "Danube River", "Select European Cruises"],
      },
      {
        label: "Higher-Priced Examples",
        items: ["Antarctica", "Arctic", "Remote Expedition Destinations"],
      },
    ],

    themeLabel: "Pricing Insight",
    themeText:
      "The more specialized and remote the destination, the higher the overall cruise cost tends to be.",
  },

  {
    id: "season",
    title: "Season",
    badge: "Season",
    icon: Calendar,
    image: VikingAlaska,

    desc: "Travel timing significantly impacts cruise pricing. High-demand sailing dates generally come with premium fares.",

    columns: [
      {
        label: "Peak Season",
        items: [
          "Summer Europe Cruises",
          "Holiday Sailings",
          "Prime Alaska Season",
          "Highest Demand Periods",
        ],
      },
      {
        label: "Shoulder Season",
        items: [
          "Spring Departures",
          "Fall Departures",
          "Early-Season Sailings",
          "Better Value Opportunities",
        ],
      },
    ],

    themeLabel: "Pricing Insight",
    themeText:
      "Traveling during shoulder seasons often provides a better balance between pricing, weather, and crowd levels.",
  },

  {
    id: "cabin",
    title: "Cabin Category",
    badge: "Cabin",
    icon: Bed,
    image: VikingCabin,

    desc: "Accommodation selection can dramatically influence the total cruise fare, especially on longer voyages.",

    columns: [
      {
        label: "Cabin Options",
        items: [
          "Standard Staterooms",
          "Veranda Staterooms",
          "Suites",
          "Premium Accommodations",
        ],
      },
    ],

    themeLabel: "Pricing Insight",
    themeText:
      "As cabin size, location, and amenities increase, pricing rises accordingly.",
  },

  {
    id: "length",
    title: "Cruise Length",
    badge: "Cruise Length",
    icon: Clock3,
    image: VikingCruise,

    desc: "The duration of the voyage directly affects the overall cruise cost and value proposition.",

    columns: [
      {
        label: "Shorter Voyages",
        items: [
          "Lower Overall Cost",
          "Fewer Travel Days",
          "Popular Introductory Cruises",
        ],
      },
      {
        label: "Extended Voyages",
        items: [
          "Higher Total Fare",
          "More Destinations",
          "Better Value Per Day",
        ],
      },
    ],

    themeLabel: "Pricing Insight",
    themeText:
      "Longer itineraries cost more overall but often deliver a lower average cost per day.",
  },
];
const bookingTips = [
  { icon: Clock, label: "Book early for the best value" },
  { icon: Tag, label: "Watch for airfare promotions" },
  { icon: LayoutGrid, label: "Travel during shoulder seasons" },
  { icon: Star, label: "Choose standard staterooms" },
];

const advisorHelps = [
  "Access early booking promotions",
  "Monitor pricing and value windows",
  "Select the right cabin category",
  "Optimize itinerary combinations",
  "Build complete Viking travel experiences",
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
        "Luxury travel experts helping travelers find the best value and pricing for Viking river, ocean, and expedition cruises.",
    },

    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/about-angela-hughes#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years in the travel industry.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/viking-cruise-cost-guide",
      url: "https://www.tripsandships.com/viking-cruise-cost-guide",
      name: "Viking Cruise Cost Guide | River, Ocean & Expedition Cruise Pricing",
      description:
        "Discover how much Viking Cruises cost, including Viking River Cruises, Ocean Cruises, and Expedition Cruises. Learn what affects pricing, what's included, and how to find the best value for your Viking vacation.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/viking-cruise-cost-guide#breadcrumb",
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
          name: "Viking Cruise Cost Guide",
          item: "https://www.tripsandships.com/viking-cruise-cost-guide",
        },
      ],
    },

    {
      "@type": "PriceSpecification",
      "@id":
        "https://www.tripsandships.com/viking-cruise-cost-guide#pricespecification",
      name: "Viking Cruise Pricing",
      description:
        "Average starting prices for Viking River Cruises, Ocean Cruises, and Expedition Cruises.",
      priceCurrency: "USD",
      minPrice: "2500",
      maxPrice: "100000",
    },

    {
      "@type": "TouristTrip",
      "@id":
        "https://www.tripsandships.com/viking-cruise-cost-guide#touristtrip",
      name: "Viking Cruises — River, Ocean & Expedition Voyages",
      description:
        "Award-winning Viking cruises spanning rivers, oceans, and remote expedition destinations — designed for culturally curious adult travelers seeking destination-focused experiences.",
      touristType: [
        "Cultural Travelers",
        "Couples",
        "Retirees",
        "Luxury Travelers",
        "Solo Travelers",
      ],
    },

    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/viking-cruise-cost-guide#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking Cruises",
      },
      reviewBody:
        "Viking Cruises deliver strong destination-focused value across river, ocean, and expedition voyages — combining included amenities, smaller ships, and cultural enrichment that often justify the premium price point.",
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
      "@id": "https://www.tripsandships.com/viking-cruise-cost-guide#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a Viking Cruise cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prices typically range from approximately $2,500 per person for some river cruises to $25,000+ per person for premium expedition voyages.",
          },
        },

        {
          "@type": "Question",
          name: "Are Viking Cruises all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not completely, but many amenities such as excursions, Wi-Fi, dining, and enrichment programs are included.",
          },
        },

        {
          "@type": "Question",
          name: "Why are Viking Cruises expensive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing reflects smaller ships, included experiences, premium service, educational programming, and destination-focused itineraries.",
          },
        },

        {
          "@type": "Question",
          name: "Are Viking River Cruises cheaper than Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, yes. River cruises often have lower starting prices.",
          },
        },

        {
          "@type": "Question",
          name: "What is the cheapest Viking Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shorter European river cruises are often among Viking's most affordable options.",
          },
        },

        {
          "@type": "Question",
          name: "Are shore excursions included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most itineraries include at least one complimentary excursion in each port.",
          },
        },

        {
          "@type": "Question",
          name: "Is airfare included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sometimes. Viking frequently offers airfare promotions.",
          },
        },

        {
          "@type": "Question",
          name: "Are drinks included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beer and wine with lunch and dinner are typically included.",
          },
        },

        {
          "@type": "Question",
          name: "Is Viking worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe Viking provides excellent value due to its inclusions, service, and destination experiences.",
          },
        },

        {
          "@type": "Question",
          name: "When is the best time to book a Viking Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking early and monitoring promotional offers often provides the best value.",
          },
        },

        {
          "@type": "Question",
          name: "Do Viking Cruises offer discounts for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solo travelers typically pay a single supplement fee, though Viking occasionally runs promotions with reduced single supplements on select itineraries.",
          },
        },

        {
          "@type": "Question",
          name: "Are gratuities included in the Viking cruise price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gratuities are not included in the base fare for most bookings. They are usually charged daily to your onboard account or can be prepaid.",
          },
        },

        {
          "@type": "Question",
          name: "Can I pay for my Viking cruise in installments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After paying the initial deposit to secure your booking, you can make partial payments leading up to the final payment due date.",
          },
        },

        {
          "@type": "Question",
          name: "Is travel insurance included, and how much does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel insurance is not included. You can purchase Viking's Travel Protection Plan or a third-party policy, typically costing 7% to 12% of your trip cost.",
          },
        },

        {
          "@type": "Question",
          name: "Are there hidden fees on a Viking Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking has a highly transparent pricing model. Extra costs like optional premium excursions, spa treatments, specialty drinks, and gratuities are clearly detailed upfront.",
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
      q: "How much does a Viking Cruise cost?",
      a: "Prices typically range from approximately $2,500 per person for some river cruises to $25,000+ per person for premium expedition voyages.",
    },
    {
      q: "Are Viking Cruises all-inclusive?",
      a: "Not completely, but many amenities such as excursions, Wi-Fi, dining, and enrichment programs are included.",
    },
    {
      q: "Why are Viking Cruises expensive?",
      a: "Pricing reflects smaller ships, included experiences, premium service, educational programming, and destination-focused itineraries.",
    },
    {
      q: "Are Viking River Cruises cheaper than Viking Ocean Cruises?",
      a: "Generally, yes. River cruises often have lower starting prices.",
    },
    {
      q: "What is the cheapest Viking Cruise?",
      a: "Shorter European river cruises are often among Viking's most affordable options.",
    },
    {
      q: "Are shore excursions included on Viking Cruises?",
      a: "Most itineraries include at least one complimentary excursion in each port.",
    },
    {
      q: "Is airfare included on Viking Cruises?",
      a: "Sometimes. Viking frequently offers airfare promotions.",
    },
    {
      q: "Are drinks included on Viking Cruises?",
      a: "Beer and wine with lunch and dinner are typically included.",
    },
    {
      q: "Is Viking worth the money?",
      a: "Many travelers believe Viking provides excellent value due to its inclusions, service, and destination experiences.",
    },
    {
      q: "When is the best time to book a Viking Cruise?",
      a: "Booking early and monitoring promotional offers often provides the best value.",
    },
    {
      q: "Do Viking Cruises offer discounts for solo travelers?",
      a: "Solo travelers typically pay a single supplement fee, though Viking occasionally runs promotions with reduced single supplements on select itineraries.",
    },
    {
      q: "Are gratuities included in the Viking cruise price?",
      a: "Gratuities are not included in the base fare for most bookings. They are usually charged daily to your onboard account or can be prepaid.",
    },
    {
      q: "Can I pay for my Viking cruise in installments?",
      a: "Yes. After paying the initial deposit to secure your booking, you can make partial payments leading up to the final payment due date.",
    },
    {
      q: "Is travel insurance included, and how much does it cost?",
      a: "Travel insurance is not included. You can purchase Viking's Travel Protection Plan or a third-party policy, typically costing 7% to 12% of your trip cost.",
    },
    {
      q: "Are there hidden fees on a Viking Cruise?",
      a: "No. Viking has a highly transparent pricing model. Extra costs like optional premium excursions, spa treatments, specialty drinks, and gratuities are clearly detailed upfront.",
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

const VikingCruiseCost = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDest, setActiveDest] = useState("destination");
  const currentDest =
    vikingPricingFactors.find((d) => d.id === activeDest) ||
    vikingPricingFactors[0];

  const ActiveIcon = currentDest.icon;

  const images = [HeroImage1, HeroImage2, HeroImage4];

  const [activeCostIndex, setActiveCostIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCostIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Viking Cruise Cost Guide | River, Ocean & Expedition Cruise Pricing
        </title>
        <meta name="title" content="Viking Cruise Cost Guide" />
        <meta
          name="description"
          content="Discover how much Viking Cruises cost, including Viking River Cruises, Ocean Cruises, and Expedition Cruises. Learn what affects pricing, what's included, and how to find the best value for your Viking vacation."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* HERO */}
      <section className="aac_hero_section">
        {/* ── Background slideshow ── */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`aac_hero_bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* ── Layered overlays ── */}
        <div className="aac_hero_overlay" />
        <div className="aac_hero_overlay_gradient" />
        <div className="aac_hero_noise" />

        {/* ── Main content ── */}
        <div className="aac_hero_content">
          {/* Heading */}
          <h1>
            How Much Does a <br /> Viking Cruise Cost?
          </h1>

          <p className="aac_hero_subtitle">
            Understanding true Viking value beyond the advertised fare
          </p>

          <p className="aac_hero_text">
            One of the first questions travelers ask when researching Viking is:{" "}
            <strong>"How much does a Viking Cruise cost?"</strong>
          </p>

          {/* ── Expandable content ── */}
          <div className={`aac_expandable ${readMore ? "open" : ""}`}>
            <p className="aac_hero_text">
              The answer depends on several factors — cruise type, destination,
              cabin category, sailing season, trip length, and included
              promotions. While Viking is generally more expensive than many
              mainstream cruise lines, it also includes amenities and
              experiences that often cost extra elsewhere.
            </p>

            <p className="aac_list_intro">
              For many travelers, understanding the complete value — not just
              the advertised fare — is key to determining whether Viking is
              worth the investment:
            </p>

            <ul className="aac_hero_list">
              {[
                "Destination-focused itineraries",
                "Included shore excursions in most ports",
                "Beer and wine with lunch and dinner",
                "Smaller, more intimate ships",
                "Cultural enrichment programs",
                "Complimentary Wi-Fi",
                "Inclusive pricing without hidden surprises",
              ].map((item) => (
                <li key={item}>
                  <span className="aac_list_dot" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="aac_hero_text">
              According to <strong>Angela Hughes</strong> — CEO of Trips &amp;
              Ships Luxury Travel, founder of Luxury Travel University, global
              luxury travel speaker, and one of the most influential women in
              travel — understanding cruise value matters far more than simply
              comparing fares.
            </p>

            <div className="aac_bio_card">
              <div className="aac_bio_avatar">A</div>
              <div className="aac_bio_body">
                <p className="aac_hero_text">
                  After more than 40 years in the travel industry and visiting
                  over 121 countries, Angela has helped travelers evaluate what
                  truly creates a premium cruise experience.
                </p>
                <p className="aac_hero_text">
                  And Viking is positioned very differently from many mainstream
                  cruise brands.
                </p>
              </div>
            </div>
          </div>

          {/* Read more toggle */}
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

      {/* AVERAGE VIKING CRUISE COSTS TABLE */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Average Viking Cruise Costs</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Cruise Type</th>
                  <th>Typical Starting Price (Per Person)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Viking River Cruises</strong>
                  </td>
                  <td>$2,500 – $8,000+</td>
                </tr>

                <tr>
                  <td>
                    <strong>Viking Ocean Cruises</strong>
                  </td>
                  <td>$3,000 – $12,000+</td>
                </tr>

                <tr>
                  <td>
                    <strong>Viking Expedition Cruises</strong>
                  </td>
                  <td>$8,000 – $25,000+</td>
                </tr>

                <tr>
                  <td>
                    <strong>Grand Voyages & World Cruises</strong>
                  </td>
                  <td>$15,000 – $100,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "25px" }}>
            <p
              className="Asc-card-subtext"
              style={{ color: "var(--navy)", textAlign: "center" }}
            >
              Actual pricing depends heavily on itinerary, season, and
              accommodation category.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS INCLUDED IN VIKING CRUISE PRICING */}
      <section className="wnf-section wnf-bg-white" id="wnf-viking-pricing">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              What Is Included in Viking Cruise Pricing?
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column: Images */}
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={VikingSuite}
                    alt="Viking cruise ship sailing through scenic destination"
                    className="wnf-photo"
                  />
                </div>

                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={VikingDining}
                    alt="Guests enjoying dining and onboard Viking amenities"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  One reason Viking's prices may appear higher than some cruise
                  competitors is because many amenities are already included in
                  the fare, helping reduce onboard spending.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Accommodations",
                    "Dining",
                    "Wi-Fi",
                    "Port Charges",
                    "Cultural Enrichment Programs",
                    "Destination Lectures",
                    "Shore Excursion in Most Ports",
                    "Beer & Wine with Lunch and Dinner",
                    "Access to Fitness Facilities",
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
                  These inclusions provide strong overall value and help
                  minimize unexpected onboard expenses throughout the voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIKING CRUISE COSTS SECTION — SLIDER VERSION ═══════════════════ */}
      <section className="vcc-costs-section" id="vcc-cruise-costs">
        <div className="vcc-costs-container">
          <div className="vcc-costs-header">
            <span className="vcc-costs-eyebrow">Cost Breakdown</span>
            <h2 className="vcc-costs-title">Viking Cruise Costs</h2>
            <div className="vcc-costs-accent"></div>
            <p className="vcc-costs-lead">
              Discover average pricing, popular itineraries, and what determines
              the cost of Viking's award-winning river, ocean, and expedition
              voyages.
            </p>
          </div>

          {/* Navigation Title Bar (clickable tabs) */}
          <div className="vcc-slider-nav">
            {[
              { title: "River Cruises", icon: Waves },
              { title: "Ocean Cruises", icon: Ship },
              { title: "Expedition Cruises", icon: Compass },
            ].map((tab, idx) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={idx}
                  className={`vcc-slider-nav-btn ${activeCostIndex === idx ? "active" : ""}`}
                  onClick={() => setActiveCostIndex(idx)}
                >
                  <span className="vcc-slider-nav-num">0{idx + 1}</span>
                  <TabIcon size={18} className="vcc-slider-nav-icon" />
                  <span className="vcc-slider-nav-text">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Slider Window */}
          <div className="vcc-slider-viewport">
            <div
              className="vcc-slider-track"
              style={{
                transform: `translateX(-${(activeCostIndex * 100) / 3}%)`,
              }}
            >
              {/* Slide 1 - River Cruises */}
              <div className="vcc-slider-slide">
                <div className="vcc-slide-row">
                  {/* Left content */}
                  <div className="vcc-slide-content">
                    <span className="vcc-slide-number">01</span>
                    <span className="vcc-slide-badge river">
                      River Cruising
                    </span>
                    <h3 className="vcc-slide-card-title">
                      Viking River Cruise Costs
                    </h3>
                    <p className="vcc-slide-card-desc">
                      River cruises are often the most affordable way to
                      experience the Viking brand, allowing you to sail directly
                      into the heart of historic European cities.
                    </p>

                    <div className="vcc-slide-details-grid">
                      <div className="vcc-details-column">
                        <h4 className="vcc-details-title">
                          Popular Itineraries
                        </h4>
                        <div className="vcc-itineraries-list">
                          <div className="vcc-itinerary-item">
                            <strong className="vcc-itinerary-name">
                              Rhine River Cruises
                            </strong>
                            <span className="vcc-itinerary-detail">
                              Typically among Viking's most popular options.
                            </span>
                          </div>
                          <div className="vcc-itinerary-item">
                            <strong className="vcc-itinerary-name">
                              Danube River Cruises
                            </strong>
                            <span className="vcc-itinerary-detail">
                              A favorite for first-time river cruisers.
                            </span>
                          </div>
                          <div className="vcc-itinerary-item">
                            <strong className="vcc-itinerary-name">
                              Seine River Cruises
                            </strong>
                            <span className="vcc-itinerary-detail">
                              Popular among travelers interested in France.
                            </span>
                          </div>
                          <div className="vcc-itinerary-item">
                            <strong className="vcc-itinerary-name">
                              Douro River Cruises
                            </strong>
                            <span className="vcc-itinerary-detail">
                              Known for beautiful scenery and wine regions.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="vcc-details-column">
                        <h4 className="vcc-details-title">
                          Typical River Cruise Pricing
                        </h4>
                        <div className="vcc-pricing-table">
                          <div className="vcc-pricing-row">
                            <span className="vcc-pricing-label">
                              <Clock3 size={14} className="vcc-pricing-icon" />{" "}
                              7–8 Night Cruises
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">
                                $2,500 – $5,500
                              </span>
                              <span className="vcc-price-sub">per person</span>
                            </div>
                          </div>
                          <div className="vcc-pricing-row">
                            <span className="vcc-pricing-label">
                              <Clock3 size={14} className="vcc-pricing-icon" />{" "}
                              10–15 Night Cruises
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">
                                $4,000 – $8,000+
                              </span>
                              <span className="vcc-price-sub">per person</span>
                            </div>
                          </div>
                          <div className="vcc-pricing-row premium">
                            <span className="vcc-pricing-label">
                              <Award size={14} className="vcc-pricing-icon" />{" "}
                              Premium Suites
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">$10,000+</span>
                              <span className="vcc-price-sub">per person</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right media */}
                  <div className="vcc-slide-media">
                    <div className="vcc-media-container">
                      <img
                        src={VikingRiverImg}
                        alt="Viking River Cruise scenic itinerary on the Danube River"
                        className="vcc-media-img"
                      />
                      <div className="vcc-media-overlay"></div>
                      <div className="vcc-media-badge river">
                        <Waves size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Ocean Cruises */}
              <div className="vcc-slider-slide">
                <div className="vcc-slide-row">
                  {/* Left content */}
                  <div className="vcc-slide-content">
                    <span className="vcc-slide-number">02</span>
                    <span className="vcc-slide-badge ocean">Ocean Voyages</span>
                    <h3 className="vcc-slide-card-title">
                      Viking Ocean Cruise Costs
                    </h3>
                    <p className="vcc-slide-card-desc">
                      Ocean cruises typically cost more than river cruises due
                      to larger ships, longer itineraries, more destinations,
                      and extended voyages.
                    </p>

                    <div className="vcc-slide-details-grid">
                      <div className="vcc-details-column">
                        <h4 className="vcc-details-title">
                          Why They Cost More
                        </h4>
                        <div className="vcc-bullets-list">
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>Larger ships with premium amenities</span>
                          </div>
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>Longer port-to-port itineraries</span>
                          </div>
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>More remote destinations visited</span>
                          </div>
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>Extended ocean-crossing voyages</span>
                          </div>
                        </div>

                        <h4
                          className="vcc-details-title"
                          style={{ marginTop: "1.25rem" }}
                        >
                          Popular Ocean Destinations
                        </h4>
                        <div className="vcc-tags-group">
                          <span className="vcc-dest-tag">Mediterranean</span>
                          <span className="vcc-dest-tag">Northern Europe</span>
                          <span className="vcc-dest-tag">Alaska</span>
                          <span className="vcc-dest-tag">Caribbean</span>
                          <span className="vcc-dest-tag">Australia & NZ</span>
                          <span className="vcc-dest-tag">Asia</span>
                        </div>
                      </div>

                      <div className="vcc-details-column">
                        <h4 className="vcc-details-title">
                          Typical Ocean Cruise Pricing
                        </h4>
                        <div className="vcc-pricing-table">
                          <div className="vcc-pricing-row">
                            <span className="vcc-pricing-label">
                              <Clock3 size={14} className="vcc-pricing-icon" />{" "}
                              7–10 Night Cruises
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">
                                $3,000 – $6,000
                              </span>
                              <span className="vcc-price-sub">per person</span>
                            </div>
                          </div>
                          <div className="vcc-pricing-row">
                            <span className="vcc-pricing-label">
                              <Clock3 size={14} className="vcc-pricing-icon" />{" "}
                              11–15 Night Cruises
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">
                                $5,000 – $10,000+
                              </span>
                              <span className="vcc-price-sub">per person</span>
                            </div>
                          </div>
                          <div className="vcc-pricing-row premium">
                            <span className="vcc-pricing-label">
                              <Award size={14} className="vcc-pricing-icon" />{" "}
                              Suites & Premium
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">$15,000+</span>
                              <span className="vcc-price-sub">per person</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right media */}
                  <div className="vcc-slide-media">
                    <div className="vcc-media-container">
                      <img
                        src={VikingOceanImg}
                        alt="Viking Ocean Cruise ship with infinity pool overlooking the ocean"
                        className="vcc-media-img"
                      />
                      <div className="vcc-media-overlay"></div>
                      <div className="vcc-media-badge ocean">
                        <Ship size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 - Expedition Cruises */}
              <div className="vcc-slider-slide">
                <div className="vcc-slide-row">
                  {/* Left content */}
                  <div className="vcc-slide-content">
                    <span className="vcc-slide-number">03</span>
                    <span className="vcc-slide-badge expedition">
                      Remote Exploration
                    </span>
                    <h3 className="vcc-slide-card-title">
                      Viking Expedition Cruise Costs
                    </h3>
                    <p className="vcc-slide-card-desc">
                      Expedition cruises represent Viking's most premium travel
                      experiences, combining extreme adventure with luxury and
                      science-led education.
                    </p>

                    <div className="vcc-slide-details-grid">
                      <div className="vcc-details-column">
                        <h4 className="vcc-details-title">
                          What These Voyages Include
                        </h4>
                        <div className="vcc-bullets-list">
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>Remote, hard-to-reach destinations</span>
                          </div>
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>World-class expert expedition teams</span>
                          </div>
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>
                              Specialized equipment (kayaks, zodiacs, subs)
                            </span>
                          </div>
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>Advanced ice-strengthened polar ships</span>
                          </div>
                          <div className="vcc-bullet-item">
                            <Check size={14} className="vcc-bullet-icon" />
                            <span>Unique landings and field operations</span>
                          </div>
                        </div>

                        <h4
                          className="vcc-details-title"
                          style={{ marginTop: "1.25rem" }}
                        >
                          Popular Expedition Destinations
                        </h4>
                        <div className="vcc-tags-group">
                          <span className="vcc-dest-tag">Antarctica</span>
                          <span className="vcc-dest-tag">Arctic</span>
                          <span className="vcc-dest-tag">Greenland</span>
                          <span className="vcc-dest-tag">Great Lakes</span>
                          <span className="vcc-dest-tag">Remote Coasts</span>
                        </div>
                      </div>

                      <div className="vcc-details-column">
                        <h4 className="vcc-details-title">
                          Typical Expedition Pricing
                        </h4>
                        <div className="vcc-pricing-table">
                          <div className="vcc-pricing-row">
                            <span className="vcc-pricing-label">
                              <Clock3 size={14} className="vcc-pricing-icon" />{" "}
                              10–14 Night Voyages
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">
                                $8,000 – $18,000+
                              </span>
                              <span className="vcc-price-sub">per person</span>
                            </div>
                          </div>
                          <div className="vcc-pricing-row">
                            <span className="vcc-pricing-label">
                              <Clock3 size={14} className="vcc-pricing-icon" />{" "}
                              Extended Voyages
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">
                                $20,000 – $30,000+
                              </span>
                              <span className="vcc-price-sub">per person</span>
                            </div>
                          </div>
                          <div className="vcc-pricing-row premium">
                            <span className="vcc-pricing-label">
                              <Award size={14} className="vcc-pricing-icon" />{" "}
                              Luxury Suites
                            </span>
                            <div className="vcc-pricing-value">
                              <span className="vcc-price-amount">
                                Premium Rates
                              </span>
                              <span className="vcc-price-sub">
                                Substantially more
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right media */}
                  <div className="vcc-slide-media">
                    <div className="vcc-media-container">
                      <img
                        src={VikingExpeditionImg}
                        alt="Viking Expedition Cruise ship sailing in polar waters of Antarctica"
                        className="vcc-media-img"
                      />
                      <div className="vcc-media-overlay"></div>
                      <div className="vcc-media-badge expedition">
                        <Compass size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider dots indicator */}
          <div className="vcc-slider-dots">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                className={`vcc-slider-dot ${activeCostIndex === idx ? "active" : ""}`}
                onClick={() => setActiveCostIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: What Costs Extra on a Viking Cruise? ── */}
      <section className="Ecc-section Ecc-section--white">
        <div className="Ecc-container">
          <div className="Ecc-header">
            <h2 className="Ecc-title">
              What Costs Extra <br /> on a Viking Cruise?
            </h2>

            <div className="adg-accent-line"></div>

            <p className="Ecc-subtitle">
              While Viking includes many amenities in its cruise fares,
              travelers should still budget for certain optional expenses that
              may not be covered by the base price.
            </p>
          </div>

          <div className="Ecc-drivers-grid">
            {[
              {
                title: "Airfare",
                desc: "Airfare is sometimes included through promotional offers, but it is often priced separately depending on the itinerary and booking package.",
                icon: Plane,
              },
              {
                title: "Premium Excursions",
                desc: "While many shore excursions are included, upgraded and specialty experiences may require an additional fee.",
                icon: MapPinned,
              },
              {
                title: "Specialty Beverages",
                desc: "Premium wines, spirits, cocktails, and certain beverage packages may not be included in the standard fare.",
                icon: Wine,
              },
              {
                title: "Travel Insurance",
                desc: "Travel protection is strongly recommended but is generally purchased separately from the cruise fare.",
                icon: Shield,
              },
              {
                title: "Spa Treatments",
                desc: "Massages, beauty services, and other wellness treatments typically carry additional charges.",
                icon: Sparkles,
              },
              {
                title: "Gratuities",
                desc: "Depending on the booking and promotion, gratuities may either be prepaid or added to the onboard account.",
                icon: HandCoins,
              },
            ].map((d, i) => {
              const Icon = d.icon;

              return (
                <div key={i} className="Ecc-driver-card">
                  <div className="Ecc-driver-icon-wrap">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div className="Ecc-driver-content">
                    <h3 className="Ecc-driver-title">{d.title}</h3>

                    <p className="Ecc-driver-desc">{d.desc}</p>
                  </div>

                  <div className="Ecc-driver-number">0{i + 1}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Discover the Viking Expedition Experience
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Small enough to navigate remote polar regions, yet large enough to
              provide superior handling and stability, Viking's purpose-built
              expedition vessels are designed for profound voyages of discovery.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/dsGbTFuU5Fc"
                title="Viking Expedition Ships Designed for Discovery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTORS THAT AFFECT VIKING CRUISE PRICING ───── */}
      <section className="luc-destinations-section">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Factors That Affect Viking Cruise Pricing
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Several variables influence the final cost of a Viking cruise.
              Destination, season, cabin category, and cruise length all play
              important roles in determining the overall fare.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar Navigation */}
            <nav className="luc-dest-nav">
              {vikingPricingFactors.map((item) => {
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

            {/* Active Panel */}
            <div className="luc-dest-panel" key={currentDest.id}>
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

      {/* IS VIKING MORE EXPENSIVE THAN OTHER CRUISE LINES? */}
      <section className="adg-section" id="adg-food-itineraries">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Is Viking More Expensive Than Other Cruise Lines?
            </h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                src={VikingExperience1}
                alt="Viking cruise ship and premium travel experience"
                className="adg-side-image"
                style={{ height: "30vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Viking Pricing Comparison
                  </span>
                </div>

                <p className="adg-card-lead">Generally, yes.</p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Compared to many mainstream cruise lines, Viking typically
                  costs more because it operates in the premium cruise segment
                  and includes a variety of amenities within the fare.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  When travelers compare what's included versus what costs extra
                  elsewhere, the overall value proposition often becomes much
                  more competitive than the initial price suggests.
                </p>
              </div>
            </div>

            {/* Right Inclusions Grid Column */}
            <div className="adg-list-side">
              {[
                {
                  title: "Included Excursions",
                  icon: <Check size={20} />,
                },
                {
                  title: "Complimentary Wi-Fi",
                  icon: <Wifi size={20} />,
                },
                {
                  title: "Beer & Wine with Meals",
                  icon: <Wine size={20} />,
                },
                {
                  title: "Educational Programming",
                  icon: <BookOpen size={20} />,
                },
                {
                  title: "Smaller Ship Experience",
                  icon: <Ship size={20} />,
                },
                {
                  title: "Adult-Only Environment",
                  icon: <Star size={20} />,
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

      {/* COST PER DAY COMPARISON */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Cost Per Day Comparison</h2>

            <div className="Asc-accent-line"></div>

            <p
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "20px auto 0",
                color: "var(--navy)",
              }}
            >
              Many travelers evaluate cruise vacations using a cost-per-day
              approach. This method often provides a more accurate picture of
              overall value than looking only at the total cruise fare.
            </p>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Cruise Type</th>
                  <th>Approximate Daily Cost</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>River Cruise</strong>
                  </td>
                  <td>$300 – $700+</td>
                </tr>

                <tr>
                  <td>
                    <strong>Ocean Cruise</strong>
                  </td>
                  <td>$350 – $900+</td>
                </tr>

                <tr>
                  <td>
                    <strong>Expedition Cruise</strong>
                  </td>
                  <td>$700 – $2,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
   REVIEW OVERVIEW
═════════════════════════════════════════ */}

      <section className="adg-c-section adg-c-bg-soft">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is Viking Worth the Cost?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Destination Immersion
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Included Experiences
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Educational Enrichment
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Smaller Ships</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Personalized Service
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Adult-Oriented Atmosphere
                </span>
              </div>
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    Many travelers believe Viking delivers strong value because
                    of its destination-focused approach, included experiences,
                    educational enrichment, smaller ships, personalized service,
                    and sophisticated adult-oriented atmosphere. Ultimately,
                    whether Viking is worth the cost depends on what you
                    prioritize most during a vacation.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={VikingExperience2}
                  alt="Viking cruise value and onboard experience"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Viking Cruise Value
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explore the Viking Cruise Experience</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover the craftsmanship, comfort, and destination-focused
              design behind Viking's river, ocean, and expedition ships through
              this look at what makes the Viking experience genuinely different.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/7cqxJbsBKsQ"
                title="Viking Cruises Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: Ways to Save Money ── */}
      <section className="Ecc-bt-section">
        <div className="Ecc-bt-container">
          <div className="Ecc-bt-header">
            <h2 className="Ecc-bt-title">
              Ways to Save Money on a Viking Cruise
            </h2>
            <div className="adg-accent-line"></div>
            <p className="Ecc-bt-subtitle">
              Cabins and itineraries can sell out surprisingly early. Timing
              your booking strategically makes a significant difference.
            </p>
          </div>

          <div className="Ecc-bt-layout">
            {/* Left — image + timing pills */}
            <div className="Ecc-bt-left">
              <div className="Ecc-bt-img-wrap">
                <img
                  src={VikingExperience3}
                  alt="Viking cruise booking timing Mediterranean port"
                  className="Ecc-bt-img"
                />
                <div className="Ecc-bt-img-label">
                  <Compass
                    size={16}
                    strokeWidth={1.8}
                    className="Ecc-bt-img-label-icon"
                  />
                  <span>Best pricing strategies</span>
                </div>
              </div>

              <div className="Ecc-bt-timing-grid">
                {bookingTips.map((tip, i) => {
                  const TipIcon = tip.icon;
                  return (
                    <div key={i} className="Ecc-bt-timing-item">
                      <div className="Ecc-bt-timing-icon">
                        <TipIcon size={15} strokeWidth={1.8} />
                      </div>
                      <span className="Ecc-bt-timing-label">{tip.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — advisor card */}
            <div className="Ecc-bt-right">
              <div className="Ecc-bt-advisor-card">
                <div className="Ecc-bt-advisor-top">
                  <div className="Ecc-bt-advisor-badge">
                    <Star size={13} strokeWidth={2} />
                    <span>Viking Travel Partner</span>
                  </div>
                  <h3 className="Ecc-bt-advisor-name">
                    Trips & Ships Luxury Travel
                  </h3>
                  <p className="Ecc-bt-advisor-intro">
                    Working with an experienced advisor helps clients navigate
                    pricing windows, availability, and cabin selection —
                    maximizing value on every voyage.
                  </p>
                </div>

                <div className="Ecc-bt-advisor-divider"></div>

                <p className="Ecc-bt-helps-label">How we help clients:</p>
                <ul className="Ecc-bt-helps-list">
                  {advisorHelps.map((help, i) => (
                    <li key={i} className="Ecc-bt-helps-item">
                      <div className="Ecc-bt-helps-dot"></div>
                      <span>{help}</span>
                    </li>
                  ))}
                </ul>

                <div className="Ecc-bt-advisor-cta">
                  <span className="Ecc-bt-cta-text">
                    Ready to plan your voyage?
                  </span>
                  <button className="Ecc-bt-cta-btn">
                    Connect with an Advisor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIKING CRUISE COST BY TRAVELER TYPE ══════════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Viking Cruise Cost by Traveler Type
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Couples",
                    desc: "Viking offers excellent value for couples seeking cultural enrichment, destination-focused travel, and a relaxing adult-only atmosphere.",
                  },
                  {
                    title: "Retirees",
                    desc: "Many retirees appreciate Viking's combination of educational experiences, destination immersion, comfort, and inclusive amenities.",
                  },
                  {
                    title: "Solo Travelers",
                    desc: "Pricing can vary significantly for solo travelers due to single supplement policies, although occasional promotions may reduce costs.",
                  },
                  {
                    title: "Luxury Travelers",
                    desc: "Many luxury travelers consider Viking a strong value compared to ultra-luxury cruise lines because of its inclusions, service, and destination-focused approach.",
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
                    src={VikingExperience4}
                    alt="Couple enjoying a Viking cruise experience"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Viking Couples Experience
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={VikingExperience5}
                    alt="Luxury Viking cruise travelers enjoying onboard amenities"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Viking Luxury Travel Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>

            <h2 className="Adg-expert-title">
              Why Travelers Trust Angela Hughes
            </h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE: Portrait + Name */}
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
              {/* INTRO */}
              <div className="Adg-expert-quote-box">
                <div className="Adg-expert-quote-icon">
                  <Quote size={36} />
                </div>

                <blockquote className="Adg-expert-quote-text">
                  "Angela Hughes is one of the travel industry's most respected
                  luxury travel advisors and cruise experts."
                </blockquote>
              </div>

              {/* CREDENTIALS */}
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
                      label: "Travel industry expert with 40+ years experience",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveler to more than 121 countries",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly luxury travel columnist",
                    },
                    {
                      icon: <Award size={16} />,
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

              {/* SPECIALTIES */}
              <div
                className="Adg-expert-credentials-box"
                style={{ marginTop: "24px" }}
              >
                <h4 className="Adg-expert-credentials-title">
                  <Star size={16} />
                  Angela Specializes In
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "River cruises",
                    "Ocean cruises",
                    "Expedition travel",
                    "Safaris",
                    "Premium custom journeys",
                    "Luxury travel planning",
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">
                        <Star size={16} />
                      </span>

                      <span className="Adg-expert-list-label">{item}</span>
                    </div>
                  ))}
                </div>

                <p
                  className="Adg-expert-list-label"
                  style={{ marginTop: "20px" }}
                >
                  Her expertise has been featured across major global travel
                  publications and luxury travel media outlets.
                </p>
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
              Everything you need to know about Viking Cruise pricing.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={VikingCta}
            alt="Viking river cruise exterior scenic view"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Viking Cruise Planning
                </span>

                <h2 className="Asc-help-h2">
                  Planning a Viking Cruise the Right Way
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking cruise planning is about far more than choosing
                    dates.
                  </p>

                  <p className="Asc-help-intro">
                    Trips & Ships Luxury Travel helps travelers build highly
                    personalized Viking vacations tailored to their travel
                    style, preferences, and long-term travel goals.
                  </p>

                  <p className="Asc-help-intro">
                    For travelers investing significantly in a Viking voyage,
                    expert planning can dramatically improve the overall
                    experience.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Viking Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Trips & Ships Luxury Travel helps clients:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Compare river, ocean & expedition itineraries",
                      "Select ideal cabin categories",
                      "Coordinate flights",
                      "Arrange private transfers",
                      "Extend journeys with hotels",
                      "Access exclusive promotions",
                      "Build fully personalized Viking vacations",
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VikingCruiseCost;
