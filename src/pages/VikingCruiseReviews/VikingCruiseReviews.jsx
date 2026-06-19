import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Users,
  Ship,
  Globe,
  Waves,
  Mountain,
  Quote,
  Gem,
  Landmark,
  Home,
  Heart,
  Moon,
  FerrisWheel,
  BadgeDollarSign,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import { Helmet } from "react-helmet-async";
import HeroImage1 from "../../assets/VikingCruiseReviews/flam-norway-fjord-cruise.jpg";
import HeroImage2 from "../../assets/VikingCruiseReviews/viking-expedition-ship-antarctica-cruise.jpg";
import HeroImage3 from "../../assets/VikingCruiseReviews/Viking-Octanis-with-Viking-Star-and-Viking-Sea.jpg";

import VikingExp1 from "../../assets/VikingCruiseReviews/viking-Exterior.jpg";
import VikingRiver from "../../assets/VikingCruiseReviews/Viking-River-Cruise.jpg";
import VikingOcean from "../../assets/VikingCruiseReviews/viking-Tromso-Norway.jpg";
import VikingExpedition from "../../assets/VikingCruiseReviews/Expedition-Ship-Antarctica4.jpg";
import VikingExp2 from "../../assets/VikingCruiseReviews/avignon-france-river-cruise-view.jpg";
import VikingExp3 from "../../assets/VikingCruiseReviews/Viking-Aquavit-Terrace.jpg";
import VikingExp4 from "../../assets/VikingCruiseReviews/viking-expedition-cruise-antarctica-suite-view.jpg";
import VikingExp5 from "../../assets/VikingCruiseReviews/Aquavit-Terrace-Waiter.jpg";
import Vikingcta from "../../assets/VikingCruiseReviews/lofoten-islands-norway-cruise.jpg";



const travelerTypeData = [
  {
    key: "couples",
    accent: "adg-accent-blue",
    image: VikingExp2,
    imageAlt: "Couple enjoying a Viking cruise experience",
    icon: "❤",
    eyebrow: "Traveler Type #1",
    title: "Couples",
    items: [
      "Romantic Atmosphere",
      "Relaxed Environment",
      "Cultural Experiences",
      "Excellent Service",
    ],
    description:
      "Many couples become repeat Viking guests because of the cruise line's destination-focused experiences, adult-only atmosphere, and consistently high level of service.",
  },
  {
    key: "retirees",
    accent: "adg-accent-gold",
    image: VikingExp3,
    imageAlt: "Retired travelers enjoying a Viking cruise",
    icon: "★",
    eyebrow: "Traveler Type #2",
    title: "Retirees",
    items: [
      "Educational Experiences",
      "Comfortable Pace",
      "Destination Immersion",
      "Adult-Only Atmosphere",
    ],
    description:
      "Retirees represent one of Viking's most loyal customer groups, appreciating the relaxed pace, cultural enrichment, and immersive travel experiences.",
  },
  {
    key: "solo",
    accent: "adg-accent-green",
    image: VikingExp4,
    imageAlt: "Solo traveler exploring a Viking cruise destination",
    icon: "✓",
    eyebrow: "Traveler Type #3",
    title: "Solo Travelers",
    items: [
      "Friendly Environment",
      "Easy Social Interaction",
      "Organized Excursions",
      "Comfortable Independent Travel",
    ],
    description:
      "Many solo travelers report feeling welcomed and included thanks to Viking's friendly atmosphere, organized activities, and destination-focused excursions.",
  },
];

// ─── SCHEMA DATA ─────────────────────────────────────────────────────────────
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
        "Luxury travel experts helping travelers understand Viking cruise reviews, guest experiences, and whether Viking river, ocean, or expedition cruises are the right fit.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/viking-cruise-reviews",
      url: "https://www.tripsandships.com/viking-cruise-reviews",
      name: "Viking Cruise Reviews | What Travelers Really Think About Viking Cruises",
      description:
        "Read Viking Cruise reviews and discover what travelers love about Viking River, Ocean, and Expedition Cruises. Learn the pros, cons, and common guest experiences to determine if Viking is the right cruise line for you.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/viking-cruise-reviews#breadcrumb",
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
          name: "Viking Cruises",
          item: "https://www.tripsandships.com/viking-cruises",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Viking Cruise Reviews",
          item: "https://www.tripsandships.com/viking-cruise-reviews",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/viking-cruise-reviews#itemlist",
      name: "What Travelers Love About Viking Cruises",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Exceptional Service" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Destination-Focused Itineraries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Included Shore Excursions",
        },
        { "@type": "ListItem", position: 4, name: "Elegant Ship Design" },
        { "@type": "ListItem", position: 5, name: "Educational Enrichment" },
        {
          "@type": "ListItem",
          position: 6,
          name: "High Overall Guest Satisfaction",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/viking-cruise-reviews#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are Viking Cruises highly rated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking consistently receives strong ratings across river, ocean, and expedition cruise categories.",
          },
        },
        {
          "@type": "Question",
          name: "What do travelers like most about Viking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Service, destinations, included excursions, educational programming, and ship design are frequently praised in Viking cruise reviews.",
          },
        },
        {
          "@type": "Question",
          name: "What are common complaints about Viking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some travelers mention premium pricing, limited nightlife, and fewer onboard attractions compared to mainstream cruise lines.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking River Cruises worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many guests consider Viking River Cruises among the best river cruise experiences available.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Ocean Cruises worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, particularly for travelers seeking destination-focused and adult-oriented travel experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Do Viking guests tend to cruise again?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers become repeat Viking customers after their first voyage — Viking earns some of the highest repeat-guest rates in the cruise industry.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking good for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many solo travelers appreciate the organized excursions, friendly environment, and welcoming atmosphere aboard Viking ships.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking is designed for adult travelers and generally requires guests to be at least 18 years old.",
          },
        },
        {
          "@type": "Question",
          name: "Why do people love Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers frequently cite meaningful experiences, cultural immersion, exceptional service, and high-quality itineraries as the primary reasons.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Cruises worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For destination-focused travelers, many guests believe Viking provides excellent value despite the higher price point.",
          },
        },
        {
          "@type": "Question",
          name: "Who gives Viking the highest reviews?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking tends to receive its strongest reviews from couples, retirees, empty nesters, history enthusiasts, cultural travelers, and experienced cruisers.",
          },
        },
        {
          "@type": "Question",
          name: "What do reviewers say about Viking River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "River cruise guests frequently praise easy access to city centers, scenic cruising, intimate atmosphere, and cultural immersion as highlights.",
          },
        },
        {
          "@type": "Question",
          name: "What do reviewers say about Viking Expedition Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Expedition guests often describe their voyages as life-changing experiences, frequently highlighting Antarctica, wildlife encounters, and expert-led programs.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking better than mainstream cruise lines in reviews?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking receives higher marks from travelers who prioritize destinations, cultural enrichment, and adult-focused travel. Travelers seeking family attractions and entertainment typically prefer mainstream cruise lines.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/viking-cruise-reviews#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking Cruises",
      },
      reviewBody:
        "Viking Cruise reviews consistently highlight exceptional service, destination-focused itineraries, included shore excursions, elegant ship design, and meaningful cultural enrichment programs. The cruise line earns some of the highest guest satisfaction ratings in the industry.",
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
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/viking-cruise-reviews#touristtrip",
      name: "Viking Cruises — River, Ocean & Expedition Guest Experiences",
      description:
        "Viking river, ocean, and expedition cruises reviewed by travelers — covering service, destinations, enrichment, design, and overall guest satisfaction.",
      touristType: [
        "Cultural Travelers",
        "Couples",
        "Retirees",
        "Lifelong Learners",
        "Solo Travelers",
        "History Enthusiasts",
      ],
    },
  ],
};

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Are Viking Cruises highly rated?",
      a: "Yes. Viking consistently receives strong ratings across river, ocean, and expedition cruise categories.",
    },
    {
      q: "What do travelers like most about Viking?",
      a: "Service, destinations, included excursions, educational programming, and ship design are frequently praised in Viking cruise reviews.",
    },
    {
      q: "What are common complaints about Viking?",
      a: "Some travelers mention premium pricing, limited nightlife, and fewer onboard attractions compared to mainstream cruise lines.",
    },
    {
      q: "Are Viking River Cruises worth it?",
      a: "Many guests consider Viking River Cruises among the best river cruise experiences available.",
    },
    {
      q: "Are Viking Ocean Cruises worth it?",
      a: "Yes, particularly for travelers seeking destination-focused and adult-oriented travel experiences.",
    },
    {
      q: "Do Viking guests tend to cruise again?",
      a: "Many travelers become repeat Viking customers after their first voyage — Viking earns some of the highest repeat-guest rates in the cruise industry.",
    },
    {
      q: "Is Viking good for solo travelers?",
      a: "Yes. Many solo travelers appreciate the organized excursions, friendly environment, and welcoming atmosphere aboard Viking ships.",
    },
    {
      q: "Is Viking family-friendly?",
      a: "No. Viking is designed for adult travelers and generally requires guests to be at least 18 years old.",
    },
    {
      q: "Why do people love Viking Cruises?",
      a: "Travelers frequently cite meaningful experiences, cultural immersion, exceptional service, and high-quality itineraries as the primary reasons.",
    },
    {
      q: "Are Viking Cruises worth the money?",
      a: "For destination-focused travelers, many guests believe Viking provides excellent value despite the higher price point.",
    },
    {
      q: "Who gives Viking the highest reviews?",
      a: "Viking tends to receive its strongest reviews from couples, retirees, empty nesters, history enthusiasts, cultural travelers, and experienced cruisers.",
    },
    {
      q: "What do reviewers say about Viking River Cruises?",
      a: "River cruise guests frequently praise easy access to city centers, scenic cruising, intimate atmosphere, and cultural immersion as highlights.",
    },
    {
      q: "What do reviewers say about Viking Expedition Cruises?",
      a: "Expedition guests often describe their voyages as life-changing experiences, frequently highlighting Antarctica, wildlife encounters, and expert-led programs.",
    },
    {
      q: "Is Viking better than mainstream cruise lines in reviews?",
      a: "Viking receives higher marks from travelers who prioritize destinations, cultural enrichment, and adult-focused travel. Travelers seeking family attractions and entertainment typically prefer mainstream cruise lines.",
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

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const VikingCruiseReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const [hovered, setHovered] = useState(null);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [activeReasonTab, setActiveReasonTab] = useState(5);



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
          Viking Cruise Reviews | What Travelers Really Think About Viking
          Cruises
        </title>
        <meta name="title" content="Viking Cruise Reviews" />
        <meta
          name="description"
          content="Read Viking Cruise reviews and discover what travelers love about Viking River, Ocean, and Expedition Cruises. Learn the pros, cons, and common guest experiences to determine if Viking is the right cruise line for you."
        />
        <meta
          property="og:title"
          content="Viking Cruise Reviews | What Travelers Really Think About Viking Cruises"
        />
        <meta
          property="og:description"
          content="An honest summary of Viking River, Ocean, and Expedition cruise reviews — covering what guests love, what they don't, and who Viking is best suited for."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/viking-cruise-reviews"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/viking-cruise-reviews"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
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
          <h1>Viking Cruise Reviews: What Travelers Really Think</h1>
          <p>
            Before booking a cruise, most travelers ask the same question: what
            do actual guests think about Viking Cruises?
          </p>
          <p>
            With Viking consistently ranked among the world's leading river,
            ocean, and expedition cruise brands, traveler reviews often
            highlight exceptional service, destination-focused itineraries, and
            cultural enrichment.
          </p>
          {readMore && (
            <>
              <p>
                However, Viking isn't designed for everyone. Understanding both
                the positive feedback and common criticisms can help determine
                whether Viking aligns with your travel style and expectations.
              </p>
              <p>
                This guide summarizes the experiences many travelers share after
                sailing with Viking River Cruises, Viking Ocean Cruises, and
                Viking Expedition Cruises.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers cut
                through the noise to find cruise experiences that genuinely
                match their priorities.
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

      {/* ══ OVERALL VIKING RATINGS OVERVIEW ══════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">Overall Viking Cruise Ratings</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp1}
                    alt="Viking cruise guests on cultural shore excursion European city"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Across travel publications, cruise review platforms, and guest
                  surveys, Viking consistently receives high marks from
                  destination-focused travelers who value cultural immersion and
                  meaningful experiences over onboard entertainment.
                </p>
                <p className="ugt-component-text">
                  Many guests describe Viking as a cruise line that focuses on
                  meaningful travel rather than onboard entertainment — a
                  philosophy that resonates deeply with its core audience.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Viking Consistently Earns High Marks For:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Service",
                      "Destination Experiences",
                      "Educational Enrichment",
                      "Ship Design",
                      "Dining Quality",
                      "Included Excursions",
                      "Adult-Only Atmosphere",
                      "Overall Guest Satisfaction",
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

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Explore Viking Longships and River Cruise Suites
            </h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover Viking's elegant, award-winning Longships and the
              innovative design features that have helped redefine modern river
              cruising.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/Y9xTbSH1tb4"
                title="Viking Longships and River Cruise Suites"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT TRAVELERS LOVE ABOUT VIKING CRUISES ═══════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-viking-reviews">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              What Travelers Love About Viking Cruises
            </span>

            <h2 className="adg-c-h2">
              The Most Common Themes Found <br /> in Viking Cruise Reviews
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Several themes appear repeatedly throughout Viking cruise reviews.
              Guests consistently praise the cruise line's service,
              destination-focused approach, included experiences, elegant ships,
              and educational enrichment programs.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "What Travelers Love #1",
                name: "Exceptional Service",
                highlight:
                  "One of Viking's Most Consistently Praised Strengths",
                items: [
                  "Friendly Crew Members",
                  "Personalized Experiences",
                  "Consistent Quality",
                  "Professional & Attentive Staff",
                  "Memorable Guest Interactions",
                ],
                callout:
                  "Many guests describe the crew as one of the highlights of their journey. Viking earns consistent praise for attentive service, professionalism, and creating personalized experiences across river, ocean, and expedition voyages.",
              },
              {
                id: 2,
                eyebrow: "What Travelers Love #2",
                name: "Destination-Focused Itineraries",
                highlight: "Exploration Takes Center Stage",
                items: [
                  "More Time in Port",
                  "Well-Planned Itineraries",
                  "Cultural Experiences",
                  "Historical Sites",
                  "Scenic Routes",
                ],
                callout:
                  "Travelers appreciate that Viking prioritizes destinations over onboard distractions. Reviews frequently highlight immersive itineraries, meaningful cultural experiences, and opportunities to explore iconic locations in depth.",
              },
              {
                id: 3,
                eyebrow: "What Travelers Love #3",
                name: "Included Shore Excursions",
                highlight: "Strong Value Through Included Experiences",
                items: [
                  "Guided City Tours",
                  "Historical Excursions",
                  "Cultural Experiences",
                  "Local Insights",
                  "Included in Most Ports",
                ],
                callout:
                  "Viking's included excursions are regularly mentioned as a major value-add. Guests enjoy having organized sightseeing opportunities included throughout their voyage without feeling pressured to purchase additional tours.",
              },
              {
                id: 4,
                eyebrow: "What Travelers Love #4",
                name: "Elegant Ship Design",
                highlight: "Boutique Hotel Atmosphere at Sea",
                items: [
                  "Modern Design",
                  "Sophisticated Interiors",
                  "Comfortable Spaces",
                  "Spacious Public Areas",
                  "Relaxing Scandinavian Style",
                ],
                callout:
                  "Guests frequently describe Viking ships as elegant, comfortable, and refined. The Scandinavian-inspired design creates a calm atmosphere that feels more like a luxury boutique hotel than a traditional cruise ship.",
              },
              {
                id: 5,
                eyebrow: "What Travelers Love #5",
                name: "Educational Enrichment",
                highlight: "Learning While Traveling",
                items: [
                  "Expert Lectures",
                  "Destination Presentations",
                  "Cultural Programs",
                  "Historical Insights",
                  "Expedition Specialists",
                ],
                callout:
                  "Educational enrichment is one of Viking's biggest differentiators. Travelers consistently praise the lectures, guest speakers, destination briefings, and cultural programs that deepen their understanding of the places they visit.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 5) + 1}`}
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

      {/* ══ VIKING CRUISE REVIEW TYPES ══════════════════════════════ */}
      <section
        className="dac-reasons-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">
              Viking Guest Experiences
            </span>
            <h2 className="dac-reasons-title">Viking Reviews by Cruise Type</h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Reviews vary slightly depending on the type of Viking voyage, but
              guests consistently praise destination-focused travel, cultural
              enrichment, and exceptional service.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 5 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Ship size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">
                  Viking River Cruise Reviews
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 6 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Waves size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">
                  Viking Ocean Cruise Reviews
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 7 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Mountain size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">
                  Viking Expedition Cruise Reviews
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — River Reviews */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">
                      Viking River Cruise Reviews
                    </h3>

                    <p className="dac-reasons-row-desc">
                      River cruise guests frequently praise easy access to
                      destinations, scenic cruising, intimate ship atmospheres,
                      and meaningful cultural immersion.
                    </p>

                    <div className="dac-reasons-includes-grid">
                      {[
                        "Easy Access to Destinations",
                        "Scenic Cruising",
                        "Intimate Atmosphere",
                        "Cultural Immersion",
                      ].map((item, idx) => (
                        <div key={idx} className="dac-reasons-include-tag">
                          <Check size={12} className="dac-reasons-check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="dac-reasons-callout"
                      style={{ marginTop: "20px" }}
                    >
                      <Quote size={18} className="dac-reasons-callout-icon" />
                      <p>
                        "A wonderful way to see Europe." • "Every day brought a
                        new cultural experience." • "Much more immersive than a
                        traditional cruise."
                      </p>
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingRiver}
                        alt="Viking river cruise scenic European waterway"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — Ocean Reviews */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingOcean}
                        alt="Viking ocean cruise ship at sea"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>

                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Viking Ocean Cruise Reviews
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Ocean cruise guests frequently highlight Viking's smaller
                      ships, relaxed atmosphere, destination variety, and
                      high-quality dining experiences.
                    </p>

                    <div className="dac-reasons-bullets">
                      {[
                        "Smaller Ship Experience",
                        "Relaxed Environment",
                        "Mediterranean",
                        "Scandinavia",
                        "Alaska",
                        "Asia",
                        "Australia",
                        "High-Quality Dining",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Check
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="dac-reasons-callout"
                      style={{ marginTop: "20px" }}
                    >
                      <Quote size={18} className="dac-reasons-callout-icon" />
                      <p>
                        "Elegant but not pretentious." • "Perfect for travelers
                        who want culture and relaxation." • "The destinations
                        were the true highlight."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 7 — Expedition Reviews */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      Viking Expedition Cruise Reviews
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Expedition guests often describe their voyages as
                      life-changing experiences featuring extraordinary scenery,
                      wildlife encounters, and expert-led educational programs.
                    </p>

                    <div className="dac-reasons-pills">
                      {[
                        "Antarctica",
                        "Arctic Exploration",
                        "Wildlife Encounters",
                        "Expert-Led Programs",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Mountain size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>

                    <div
                      className="dac-reasons-callout"
                      style={{ marginTop: "20px" }}
                    >
                      <Quote size={18} className="dac-reasons-callout-icon" />
                      <p>
                        "An unforgettable experience." • "The expedition team
                        was outstanding." • "Every day felt like a discovery."
                      </p>
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExpedition}
                        alt="Viking expedition cruise Antarctica wildlife"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">
              What Travelers Don't Like About Viking
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Leg-subtitle">
              While Viking receives overwhelmingly positive reviews, some
              travelers note a few drawbacks depending on their travel style and
              expectations.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "blue",
                icon: Moon,
                title: "Limited Nightlife",
                description:
                  "Guests seeking high-energy entertainment may find Viking's atmosphere too quiet compared to mainstream cruise lines.",
                pills: ["No Casinos", "No Nightclubs", "No Party Atmosphere"],
                highlight:
                  "Viking intentionally focuses on a relaxed and sophisticated onboard experience.",
              },

              {
                id: 2,
                accent: "gold",
                icon: FerrisWheel,
                title: "Fewer Onboard Attractions",
                description:
                  "Travelers accustomed to large resort-style ships sometimes miss the attractions found on family-oriented cruise lines.",
                pills: [
                  "No Water Slides",
                  "No Entertainment Complexes",
                  "No Amusement Attractions",
                ],
                highlight:
                  "For Viking's target audience, the absence of these attractions is often viewed as a benefit.",
              },

              {
                id: 3,
                accent: "green",
                icon: BadgeDollarSign,
                title: "Premium Pricing",
                description:
                  "Some travelers feel Viking cruises are expensive compared to mainstream cruise options.",
                pills: [
                  "Higher Fares",
                  "Luxury Positioning",
                  "Premium Experience",
                ],
                highlight:
                  "Many guests believe included amenities and excursions help justify the overall value.",
              },

              {
                id: 4,
                accent: "purple",
                icon: Users,
                title: "Adult-Only Environment",
                description:
                  "Families with young children often discover that Viking is not designed for family-focused cruising.",
                pills: [
                  "No Kids Clubs",
                  "No Children's Programs",
                  "No Family Entertainment",
                ],
                highlight:
                  "Families typically find better value with cruise lines specifically designed for children and multigenerational travel.",
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

      <section
        className="adg-section"
        id="adg-dining"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        {" "}
        <div className="adg-container">
          {" "}
          {/* HEADER */}{" "}
          <div className="adg-header">
            {" "}
            <h2 className="adg-h2"> Viking Reviews by Traveler Type </h2>{" "}
            <div className="adg-accent-line"></div>{" "}
            <p className="adg-intro">
              {" "}
              Viking appeals to a wide range of travelers, but certain guest
              groups consistently give the cruise line especially strong
              reviews. Here's what different types of travelers commonly say
              about their Viking experience.{" "}
            </p>{" "}
          </div>{" "}
          {/* CARDS GRID */}{" "}
          <div className="adgs-grid">
            {" "}
            {travelerTypeData.map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                {" "}
                <div className="adg-card-image-wrap">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="adg-card-img"
                  />{" "}
                  <div className="adg-card-image-overlay"></div>{" "}
                  <div className="adg-card-eyebrow-wrap">
                    {" "}
                    <span className="adg-card-eyebrow-icon">
                      {item.icon}
                    </span>{" "}
                    <span className="adg-card-eyebrow-label">
                      {" "}
                      {item.eyebrow}{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="adg-card-body">
                  {" "}
                  <h3 className="adg-card-title">{item.title}</h3>{" "}
                  <ul className="adg-card-list">
                    {" "}
                    {item.items.map((point, idx) => (
                      <li key={idx} className="adg-card-list-item">
                        {" "}
                        <span className="adg-card-list-dot"></span>{" "}
                        <span className="adg-card-list-text">{point}</span>{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                  <p
                    className="adg-card-description"
                    style={{ color: "var(--navy)", fontSize: "16px" }}
                  >
                    {" "}
                    {item.description}{" "}
                  </p>{" "}
                </div>{" "}
                <div className="adg-card-bar"></div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* ══ COMPARISON TABLE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Is Viking Better Than Mainstream Cruise Lines?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking</th>
                  <th>Mainstream Cruise Lines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Adult-Only</strong>
                  </td>
                  <td>✔ Yes</td>
                  <td>Usually No</td>
                </tr>
                <tr>
                  <td>
                    <strong>Cultural Focus</strong>
                  </td>
                  <td>Very High</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Included Excursions</strong>
                  </td>
                  <td>Often Included</td>
                  <td>Usually Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Casinos</strong>
                  </td>
                  <td>✖ No</td>
                  <td>Often ✔</td>
                </tr>
                <tr>
                  <td>
                    <strong>Kids Programs</strong>
                  </td>
                  <td>✖ No</td>
                  <td>✔ Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Water Parks</strong>
                  </td>
                  <td>✖ No</td>
                  <td>Often ✔</td>
                </tr>
                <tr>
                  <td>
                    <strong>Educational Programs</strong>
                  </td>
                  <td>Extensive</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Relaxed & Refined</td>
                  <td>Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              See the Viking Cruise Experience for Yourself
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Discover Viking's intuitive and engaging 360° ship tours, allowing
              you to step inside the award-winning ocean and river fleet from
              the comfort of home.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/lh_jb_y_hik"
                title="Viking 360 Degree Virtual Ship Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO GIVES VIKING THE HIGHEST REVIEWS? ═════════════════════════════ */}
      <section className="dbf-fleet-breakdown-section">
        <div className="dbf-fleet-container">
          <div className="dbf-fleet-header">
            <h2 className="dbf-fleet-title">
              Who Gives Viking the Highest Reviews?
            </h2>
            <div className="dbf-fleet-accent"></div>
          </div>

          <div className="dbf-fleet-grid">
            {[
              {
                name: "Couples",
                desc: "Couples frequently praise Viking's romantic atmosphere, exceptional service, and destination-focused experiences.",
                icon: Heart,
              },
              {
                name: "Retirees",
                desc: "Retirees appreciate the comfortable pace, educational opportunities, and immersive travel experiences.",
                icon: Users,
              },
              {
                name: "Empty Nesters",
                desc: "Many empty nesters enjoy Viking's adult-only environment and meaningful cultural exploration.",
                icon: Home,
              },
              {
                name: "History Enthusiasts",
                desc: "Historical sites, lectures, and destination insights make Viking especially appealing to history lovers.",
                icon: Landmark,
              },
              {
                name: "Cultural Travelers",
                desc: "Guests seeking authentic local experiences often rank Viking among their favorite cruise lines.",
                icon: Globe,
              },
              {
                name: "Luxury Travelers",
                desc: "Luxury-minded travelers appreciate Viking's elegant ships, attentive service, and refined atmosphere.",
                icon: Gem,
              },
              {
                name: "Experienced Cruisers",
                desc: "Many seasoned cruisers value Viking's destination-first philosophy and smaller ship experience.",
                icon: Ship,
              },
            ].map((traveler, idx) => {
              const IconComponent = traveler.icon;

              return (
                <div key={idx} className="dbf-ship-overview-card">
                  <div className="dbf-ship-card-icon-wrap">
                    <IconComponent size={22} />
                  </div>

                  <h3 className="dbf-ship-card-name">{traveler.name}</h3>

                  <p className="dbf-ship-card-desc">{traveler.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

        {/* ════════════════════════════════════════
  2. REVIEW OVERVIEW
  ════════════════════════════════════════ */}

        <section className="adg-c-section adg-c-bg-white">
          <div className="adg-c-container">
            <div className="adg-c-section-header">
              <h2 className="adg-c-h2">Is Viking Worth the Positive Reviews?</h2>
              <div className="adg-c-accent-line"></div>
            </div>

            <div className="adg-c-overview-layout">
              {/* LEFT — list */}
              <div className="adg-c-overview-icons">
                <div className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">✔</span>
                  <span className="adg-c-overview-label">Service</span>
                </div>

                <div className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">✔</span>
                  <span className="adg-c-overview-label">Destinations</span>
                </div>

                <div className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">✔</span>
                  <span className="adg-c-overview-label">Cultural Immersion</span>
                </div>

                <div className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">✔</span>
                  <span className="adg-c-overview-label">Comfort</span>
                </div>

                <div className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">✔</span>
                  <span className="adg-c-overview-label">
                    Educational Enrichment
                  </span>
                </div>

                <div className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">✔</span>
                  <span className="adg-c-overview-label">
                    Thoughtful Itineraries
                  </span>
                </div>

                <div className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">✔</span>
                  <span className="adg-c-overview-label">
                    Smaller Ship Experiences
                  </span>
                </div>
              </div>

              {/* RIGHT — callout card + image */}
              <div className="adg-c-overview-right">
                <div className="adg-c-overview-callout">
                  <div className="adg-c-overview-callout-inner">
                    <Star size={28} className="adg-c-callout-star" />
                    <p className="adg-c-callout-text">
                      Many guests believe Viking delivers on its reputation
                      because it consistently focuses on exceptional service,
                      enriching destinations, cultural immersion, comfort,
                      educational programs, and thoughtfully designed itineraries.
                      For travelers who value these qualities, Viking frequently
                      exceeds expectations.
                    </p>
                  </div>
                </div>

                <div className="adg-c-overview-image-wrap">
                  <img
                    src={VikingExp5}
                    alt="Viking cruise guest experience"
                    className="adg-c-overview-img"
                  />
                  <div className="adg-c-overview-img-overlay">
                    <span className="adg-c-overview-img-label">
                      Viking Reviews
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
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>
            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>
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
                      label: "Over 40 years in the travel industry",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveled to more than 121 countries",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly travel industry columnist",
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
                        "Named one of the Most Influential Women in Travel in 2026",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, safaris, expeditions, and premium travel",
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

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Viking cruise reviews and guest
              experiences.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={Vikingcta}
            alt="Viking cruise fleet multiple ships scenic destination"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Viking Cruise Reviews</span>
                <h2 className="Asc-help-h2">
                  The Best Travel Experiences <br /> Help You See the World
                  Differently
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking Cruise reviews reveal a clear pattern across river,
                    ocean, and expedition categories.
                  </p>
                  <p className="Asc-help-intro">
                    Travelers who value culture, learning, exploration, and
                    meaningful experiences consistently rank Viking among the
                    best cruise brands in the world.
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
                      While Viking may not appeal to families, nightlife
                      seekers, or travelers looking for resort-style
                      attractions, it continues to earn strong praise from
                      couples, retirees, solo travelers, and lifelong learners.
                      <br />
                      <br />
                      For those seeking a cruise that prioritizes the world
                      beyond the ship, Viking's reputation is well-earned.
                      <br />
                      <br />
                      <strong>
                        Because the best travel experiences don't just take you
                        somewhere new — they help you see the world differently.
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
                      Explore Viking Cruise Options
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    What Reviewers Praise Most:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Exceptional Service",
                      "Destination-Focused Itineraries",
                      "Included Shore Excursions",
                      "Elegant Ship Design",
                      "Educational Enrichment Programs",
                      "Adult-Only Atmosphere",
                      "High Overall Guest Satisfaction",
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
                      Contact Trips &amp; Ships Luxury Travel to explore whether
                      Viking is the right cruise experience for you.
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

export default VikingCruiseReviews;
