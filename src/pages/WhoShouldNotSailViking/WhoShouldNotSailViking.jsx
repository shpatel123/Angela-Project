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
  Mountain,
  Quote,
  X,
  Compass,
  Zap,
  Info,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import { Helmet } from "react-helmet-async";

import HeroImage1 from "../../assets/WhoShouldNotSailViking/Sydney-Australia.jpg";
import HeroImage2 from "../../assets/WhoShouldNotSailViking/flam-norway-fjord-cruise.jpg";
import HeroImage3 from "../../assets/WhoShouldNotSailViking/lofoten-islands-norway-cruise.jpg";

import VikingExp1 from "../../assets/WhoShouldNotSailViking/Sun-Terrace-with_br_Infinity-Plunge-Pool.jpg";
import VikingExp2 from "../../assets/WhoShouldNotSailViking/budapest-hungary-river-cruise-danube.jpg";
import VikingExp3 from "../../assets/WhoShouldNotSailViking/Aquavit-dinig.jpg";
import VikingExp4 from "../../assets/WhoShouldNotSailViking/Guests-in-Antarctica2.jpg";
import VikingExp5 from "../../assets/WhoShouldNotSailViking/Lofoten-Islands-Norway.jpg";
import VikingExp6 from "../../assets/WhoShouldNotSailViking/Guests-in-Antarctica3.jpg";
import VikingExp7 from "../../assets/WhoShouldNotSailViking/viking-infinity-pool-ocean-view.jpg";

import VikingExp8 from "../../assets/WhoShouldNotSailViking/viking-ocean-cruise-aquavit-terrace-outdoor-dining.jpg";
import VikingExp9 from "../../assets/WhoShouldNotSailViking/viking-aquavit-terrace-ocean-dining.jpg";
import VikingExp10 from "../../assets/WhoShouldNotSailViking/viking-mamsens-scandinavian-deli.jpg";
import VikingExp11 from "../../assets/WhoShouldNotSailViking/viking-river-cruise-outdoor-dining-sunset-deck-experience.jpg";

// import Vikingriver from "../../assets/WhoShouldNotSailViking/viking-river-ship-european-waterway.jpg";
// import Vikingocean from "../../assets/WhoShouldNotSailViking/viking-ocean-ship-scenic-destination.jpg";
// import Vikinganta from "../../assets/WhoShouldNotSailViking/viking-expedition-ship-remote-region.jpg";
import Vikingcta from "../../assets/WhoShouldNotSailViking/viking-river-cruise-exterior-st-louis.jpg";

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
        "Luxury travel experts helping travelers determine whether Viking River, Ocean, and Expedition Cruises are the right fit for their travel style.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/who-should-not-sail-viking",
      url: "https://www.tripsandships.com/who-should-not-sail-viking",
      name: "Who Should Not Sail Viking? | When Viking Cruises May Not Be the Right Choice",
      description:
        "Viking Cruises are highly rated, but they're not for everyone. Discover who may not enjoy Viking River, Ocean, or Expedition Cruises and what types of travelers should consider alternative cruise options.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/who-should-not-sail-viking#breadcrumb",
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
          name: "Who Should Not Sail Viking?",
          item: "https://www.tripsandships.com/who-should-not-sail-viking",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.tripsandships.com/who-should-not-sail-viking#itemlist",
      name: "Who Should Not Sail Viking",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Families with Young Children",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Travelers Looking for Disney-Style Experiences",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Travelers Who Love Water Parks and Attractions",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Travelers Seeking Nightlife",
        },
        { "@type": "ListItem", position: 5, name: "Casino Enthusiasts" },
        {
          "@type": "ListItem",
          position: 6,
          name: "Travelers Wanting Constant Entertainment",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Budget-Conscious Travelers",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Travelers Who Prioritize the Ship Over the Destination",
        },
      ],
    },
    {
      "@type": "Audience",
      "@id":
        "https://www.tripsandships.com/who-should-not-sail-viking#audience",
      audienceType:
        "Families with Children, Nightlife Seekers, Casino Enthusiasts, Budget Travelers, Attraction-Focused Travelers, Large Ship Lovers",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/who-should-not-sail-viking#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who should avoid Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families with children, nightlife seekers, casino enthusiasts, and travelers looking for onboard attractions may prefer other cruise lines.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking is designed for adults and generally requires guests to be at least 18 years old.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking have casinos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking ships do not feature casinos.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking have water slides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking focuses on destinations rather than amusement-style attractions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking boring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers find Viking intellectually engaging and culturally enriching, but travelers seeking nonstop entertainment may prefer another cruise line.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking expensive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is generally priced above many mainstream cruise brands, although numerous amenities are included.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking good for party travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking maintains a quieter and more sophisticated atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking offer children's programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking does not provide kids clubs or youth activities.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking worth it for destination-focused travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many travelers choose Viking specifically because of its destination-first philosophy.",
          },
        },
        {
          "@type": "Question",
          name: "What travelers usually love Viking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Couples, retirees, solo travelers, history enthusiasts, and cultural explorers consistently rank Viking among their favorite cruise experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking suitable for travelers who prefer large ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking operates smaller ships with fewer passengers. Travelers seeking massive resort-style ships with thousands of passengers will find Viking too intimate.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking a good fit for travelers seeking highly active vacations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not typically. While expedition cruises include adventure elements, Viking generally emphasizes cultural discovery and exploration over extreme sports or adrenaline activities.",
          },
        },
        {
          "@type": "Question",
          name: "Who usually loves Viking instead?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Couples, retirees, empty nesters, solo travelers, cultural explorers, history enthusiasts, lifelong learners, and luxury travelers seeking meaningful experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking a good fit for travelers who dislike guided tours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Highly independent travelers who prefer to explore entirely on their own may not fully appreciate one of Viking's biggest strengths — its organized, expert-led excursions.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/who-should-not-sail-viking#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking Cruises",
      },
      reviewBody:
        "Viking isn't trying to be everything to everyone. Understanding who Viking is not designed for is just as important as understanding who it serves exceptionally well — families with children, nightlife seekers, casino enthusiasts, and attraction-focused travelers will find better options elsewhere.",
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
      "@id":
        "https://www.tripsandships.com/who-should-not-sail-viking#touristtrip",
      name: "Viking Cruises — Understanding Who It Is and Isn't Designed For",
      description:
        "An honest assessment of who should not sail Viking — helping families, nightlife seekers, and attraction-focused travelers understand when a different cruise line may be a better fit.",
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
      q: "Who should avoid Viking Cruises?",
      a: "Families with children, nightlife seekers, casino enthusiasts, and travelers looking for onboard attractions may prefer other cruise lines.",
    },
    {
      q: "Is Viking good for families?",
      a: "No. Viking is designed for adults and generally requires guests to be at least 18 years old.",
    },
    {
      q: "Does Viking have casinos?",
      a: "No. Viking ships do not feature casinos.",
    },
    {
      q: "Does Viking have water slides?",
      a: "No. Viking focuses on destinations rather than amusement-style attractions.",
    },
    {
      q: "Is Viking boring?",
      a: "Many travelers find Viking intellectually engaging and culturally enriching, but travelers seeking nonstop entertainment may prefer another cruise line.",
    },
    {
      q: "Is Viking expensive?",
      a: "Viking is generally priced above many mainstream cruise brands, although numerous amenities are included.",
    },
    {
      q: "Is Viking good for party travelers?",
      a: "No. Viking maintains a quieter and more sophisticated atmosphere.",
    },
    {
      q: "Does Viking offer children's programs?",
      a: "No. Viking does not provide kids clubs or youth activities.",
    },
    {
      q: "Is Viking worth it for destination-focused travelers?",
      a: "Yes. Many travelers choose Viking specifically because of its destination-first philosophy.",
    },
    {
      q: "What travelers usually love Viking?",
      a: "Couples, retirees, solo travelers, history enthusiasts, and cultural explorers consistently rank Viking among their favorite cruise experiences.",
    },
    {
      q: "Is Viking suitable for travelers who prefer large ships?",
      a: "No. Viking operates smaller ships with fewer passengers. Travelers seeking massive resort-style ships with thousands of passengers will find Viking too intimate.",
    },
    {
      q: "Is Viking a good fit for travelers seeking highly active vacations?",
      a: "Not typically. While expedition cruises include adventure elements, Viking generally emphasizes cultural discovery and exploration over extreme sports or adrenaline activities.",
    },
    {
      q: "Who usually loves Viking instead?",
      a: "Couples, retirees, empty nesters, solo travelers, cultural explorers, history enthusiasts, lifelong learners, and luxury travelers seeking meaningful experiences.",
    },
    {
      q: "Is Viking a good fit for travelers who dislike guided tours?",
      a: "Highly independent travelers who prefer to explore entirely on their own may not fully appreciate one of Viking's biggest strengths — its organized, expert-led excursions.",
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
const WhoShouldNotSailViking = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeReasonTab, setActiveReasonTab] = useState(5);

  const images = [HeroImage1, HeroImage2, HeroImage3];

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
          Who Should Not Sail Viking? | When Viking Cruises May Not Be the Right
          Choice
        </title>
        <meta name="title" content="Who Should Not Sail Viking?" />
        <meta
          name="description"
          content="Viking Cruises are highly rated, but they're not for everyone. Discover who may not enjoy Viking River, Ocean, or Expedition Cruises and what types of travelers should consider alternative cruise options."
        />
        <meta
          property="og:title"
          content="Who Should Not Sail Viking? | When Viking Cruises May Not Be the Right Choice"
        />
        <meta
          property="og:description"
          content="An honest look at who Viking Cruises is not designed for — helping families, nightlife seekers, and attraction-focused travelers make the right cruise choice."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/who-should-not-sail-viking"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/who-should-not-sail-viking"
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
          <h1>Who Should NOT Sail Viking?</h1>
          <p>
            Viking Cruises consistently earns high ratings from travelers
            seeking cultural enrichment, destination-focused itineraries, and
            adult-oriented experiences.
          </p>
          <p>
            However, even the best cruise line is not the right fit for every
            traveler. In fact, one of the reasons Viking has such a loyal
            following is because it focuses on a very specific type of guest.
          </p>
          {readMore && (
            <>
              <p>
                If your vacation priorities don't align with Viking's
                philosophy, you may find better value and greater satisfaction
                with another cruise line.
              </p>
              <p>
                Before booking a Viking River Cruise, Ocean Cruise, or
                Expedition Cruise, it's worth understanding who may not enjoy
                the experience.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers make
                honest decisions — including when another cruise line is simply
                the better fit.
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

      {/* ══ UNDERSTANDING VIKING'S TRAVEL PHILOSOPHY ══════════════════════════════════ */}

      <section
        className="Asc-section Asc-alt-bg"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2>Understanding Viking's Travel Philosophy</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-content-wrapper">
            <p
              className="Asc-faq-intro"
              style={{
                marginBottom: "30px",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              To understand who shouldn't sail Viking, it's important to
              understand what Viking is designed to provide.
            </p>

            <div className="Asc-who-grid">
              <div className="Asc-who-card Asc-who-yes">
                <h3 className="Asc-who-title">What Viking Emphasizes</h3>

                <ul className="Asc-who-list">
                  {[
                    "Cultural immersion",
                    "Historical exploration",
                    "Educational enrichment",
                    "Smaller ships",
                    "Adult-focused travel",
                    "Destination experiences",
                    "Relaxation",
                    "Thoughtful luxury",
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
                  What Viking Does Not Emphasize
                </h3>

                <ul className="Asc-who-list">
                  {[
                    "Theme-park attractions",
                    "Family entertainment",
                    "Nightlife",
                    "Casinos",
                    "Water parks",
                    "High-energy activities",
                  ].map((item, i) => (
                    <li key={i}>
                      <X size={16} className="Asc-icon-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                marginTop: "30px",
                textAlign: "center",
                maxWidth: "900px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "var(--navy)",
                }}
              >
                For some travelers, that's exactly why they choose Viking.
              </p>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "var(--navy)",
                }}
              >
                For others, it may be why they choose a different cruise line.
              </p>
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
              See What Viking Actually Is — Before Deciding
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Understanding what Viking's ships look and feel like helps clarify
              whether the experience matches your travel expectations — for
              those who align with Viking's philosophy, it's exceptional. For
              those who don't, another cruise line will serve you better.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/3eVrJWoWJko"
                title="Viking Longships River Cruise Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO SHOULD NOT SAIL — 5-CARD GRID ═══════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-not-for-you">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Honest Assessment</span>
            <h2 className="adg-c-h2">
              Five Types of Travelers <br /> Who May Not Enjoy Viking
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Viking isn't the right fit for every traveler. These five groups
              consistently report finding better value and satisfaction with
              other cruise lines.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Not Ideal For #1",
                name: "Families with Young Children",
                highlight: "Viking Is Adults-Only (18+)",
                items: [
                  "No Kids Clubs",
                  "No Children's Programming",
                  "No Family Entertainment",
                  "No Character Experiences",
                  "No Teen Lounges or Water Slides",
                ],
                callout:
                  "Parents traveling with children will usually find significantly more value on family-focused cruise lines like Disney, Royal Caribbean, or Norwegian.",
              },
              {
                id: 2,
                eyebrow: "Not Ideal For #2",
                name: "Travelers Seeking Nightlife",
                highlight: "Viking Is Intentionally Quiet",
                items: [
                  "No Nightclubs",
                  "No Casino",
                  "No Late-Night Parties",
                  "No Bar-Hopping Culture",
                  "No High-Energy Evening Entertainment",
                ],
                callout:
                  "The atmosphere is intentionally relaxed and refined. Many guests specifically choose Viking because it avoids these elements — but if you want them, Viking will disappoint.",
              },
              {
                id: 3,
                eyebrow: "Not Ideal For #3",
                name: "Attraction-Focused Travelers",
                highlight: "No Water Parks or Mega-Ship Attractions",
                items: [
                  "No Water Slides",
                  "No Surf Simulators",
                  "No Roller Coasters",
                  "No Zip Lines or Adventure Parks",
                  "No Large-Scale Sports Complexes",
                ],
                callout:
                  "Viking focuses on the destination rather than onboard attractions. If your ideal cruise revolves around onboard activities, Viking may feel too quiet.",
              },
              {
                id: 4,
                eyebrow: "Not Ideal For #4",
                name: "Budget-Conscious Travelers",
                highlight: "Viking Carries a Premium Price",
                items: [
                  "Higher Per-Person Base Fares",
                  "Not Positioned as a Budget Option",
                  "Premium Pricing Reflects Inclusions & Service",
                  "Better Value Elsewhere for Budget Travelers",
                ],
                callout:
                  "Viking includes many amenities that cost extra elsewhere, but travelers focused primarily on the lowest price will find more suitable options on mainstream cruise lines.",
              },
              {
                id: 5,
                eyebrow: "Not Ideal For #5",
                name: "Travelers Who Prefer Large Ships",
                highlight: "Viking's Ships Are Smaller & More Intimate",
                items: [
                  "Fewer Passengers Than Mega-Ships",
                  "No Multiple Entertainment Districts",
                  "No Floating Resort Atmosphere",
                  "No Thousands of Fellow Passengers",
                  "More Intimate Rather Than Expansive",
                ],
                callout:
                  "Guests seeking the excitement of a massive floating city — with thousands of passengers and multiple entertainment districts — may find Viking too intimate.",
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

      {/* ══ MORE NOT-RIGHT-FOR TYPES — TABS ══════════════════════════════════ */}
      <section
        className="dac-reasons-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">More Honest Assessments</span>
            <h2 className="dac-reasons-title">
              Other Travelers Who May Prefer a Different Cruise Line
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Beyond its five core non-fit traveler types, several other groups
              also tend to find better satisfaction with alternative cruise
              lines.
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
                <Zap size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">
                  Travelers Wanting Constant Entertainment
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
                <Ship size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">
                  Travelers Who Prioritize the Ship Over Destination
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
                  Travelers Seeking Highly Active Vacations
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 8 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(8)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Compass size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">04</span>
                <span className="dac-reasons-tab-title">
                  Highly Independent Travelers Who Dislike Guided Excursions
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — Constant Entertainment */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">
                      Travelers Wanting Constant Entertainment
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Some guests enjoy having activities available every hour
                      of the day. Viking takes a different approach — offering
                      lectures, destination talks, cultural performances, and
                      educational programming rather than game shows, trivia
                      marathons, and attraction-based entertainment. Travelers
                      who prefer nonstop entertainment may find the pace too
                      relaxed.
                    </p>
                    <div className="dac-reasons-includes-grid">
                      {[
                        "No Game Shows",
                        "No Trivia Marathons",
                        "No High-Energy Productions",
                        "No Attraction-Based Entertainment",
                        "Quieter by Design",
                        "Cultural Focus Instead",
                      ].map((item, idx) => (
                        <div key={idx} className="dac-reasons-include-tag">
                          <X
                            size={12}
                            className="dac-reasons-check-icon"
                            style={{ color: "var(--gold)" }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExp1}
                        alt="Viking quiet expedition suite calm atmosphere"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — Ship Over Destination */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExp2}
                        alt="Viking river cruise European cultural destination immersion"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Travelers Who Prioritize the Ship Over the Destination
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Some travelers choose cruises because they love the ship
                      itself — spending most of their time onboard and entire
                      sea days enjoying onboard amenities. Viking's philosophy
                      is the opposite. The destination is the centerpiece of the
                      experience. If your primary interest is the ship rather
                      than the places you visit, Viking may not be the ideal
                      match.
                    </p>
                    <div className="dac-reasons-callout">
                      <Quote size={18} className="dac-reasons-callout-icon" />
                      <p>
                        Viking builds itineraries around exploration — more time
                        in port, fewer sea days. Guests who prefer spending most
                        of their vacation onboard will find Viking's philosophy
                        doesn't align with their priorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 7 — Highly Active Vacations */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      Travelers Seeking Highly Active Vacations
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Viking itineraries often involve walking tours, cultural
                      sightseeing, historical attractions, and scenic
                      exploration. While expedition voyages include adventure
                      elements, Viking generally emphasizes discovery over
                      adrenaline. Travelers seeking extreme sports, adventure
                      attractions, or action-packed activities may prefer
                      alternative vacation styles.
                    </p>
                    <div className="dac-reasons-includes-grid">
                      {[
                        "No Extreme Sports",
                        "No Adventure Attractions",
                        "No Action-Packed Itineraries",
                        "Discovery Over Adrenaline",
                        "Cultural Focus",
                        "Expedition Has Some Adventure",
                      ].map((item, idx) => (
                        <div key={idx} className="dac-reasons-include-tag">
                          <X
                            size={12}
                            className="dac-reasons-check-icon"
                            style={{ color: "var(--gold)" }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExp3}
                        alt="Viking Aquavit Terrace scenic relaxed outdoor dining"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8 — Independent Travelers */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExp4}
                        alt="Viking guests on expedition organized destination experience"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">
                      Highly Independent Travelers Who Dislike Guided Excursions
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Many Viking guests love organized tours, expert guides,
                      historical context, and structured exploration. However,
                      highly independent travelers who prefer to explore
                      entirely on their own may not fully appreciate one of
                      Viking's biggest strengths. If guided exploration feels
                      restrictive rather than enriching, Viking's excursion
                      model may not be the right fit.
                    </p>
                    <div className="dac-reasons-callout">
                      <Quote size={18} className="dac-reasons-callout-icon" />
                      <p>
                        Included excursions are one of Viking's most praised
                        features — but for travelers who strongly prefer
                        completely independent exploration at every port, this
                        structure may feel constraining rather than valuable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ IMAGE GALLERY ════════════════════════════════════════════════════ */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <h2 className="dfg-gallery-title">
              The Viking Experience: Dining, <br /> Relaxation & Destination Views
            </h2>
            <div className="dfg-gallery-accent"></div>
            <p className="dfg-gallery-intro">
              Thoughtfully Designed Spaces for Adult Travelers
            </p>
            <p className="dfg-gallery-description">
              From scenic outdoor dining venues and
              Scandinavian-inspired culinary offerings to peaceful gathering
              spaces overlooking iconic destinations, Viking ships are designed
              for travelers who appreciate culture, comfort, and meaningful
              exploration.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp8}
                alt="Aquavit Terrace outdoor dining area aboard a Viking Ocean Cruise"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Aquavit Terrace — Outdoor Dining with Ocean Views
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp9}
                alt="Guests enjoying dining at Viking Aquavit Terrace"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Casual Al Fresco Dining — Relaxed Scandinavian Style
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp10}
                alt="Mamsen's Scandinavian Deli aboard Viking Cruises"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Mamsen's — Authentic Scandinavian Specialties
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp11}
                alt="Guests dining outdoors on a Viking River Cruise at sunset"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  River Cruise Dining — Scenic Views at Sunset
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="Ejv-verdict-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejv-verdict-container">
          {/* Header */}
          <div className="Ejv-verdict-header">
            <span className="Ejv-verdict-eyebrow">Who Viking May Not Suit</span>

            <h2 className="Ejv-verdict-title">
              Travelers Who Don't Enjoy Learning While Traveling
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* Main card */}
          <div className="Ejv-verdict-card">
            {/* Left — Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={VikingExp5}
                alt="Viking destination lecture and enrichment experience"
                className="Ejv-verdict-img"
              />

              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">
                  Educational Enrichment
                </span>

                <span className="Ejv-verdict-badge-sub">
                  A Core Part of Viking
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                Education is woven throughout the Viking experience. Rather than
                focusing primarily on entertainment, Viking places significant
                emphasis on helping guests better understand the destinations
                they visit.
              </p>

              <ul className="Ejv-verdict-list">
                {[
                  "Destination Lectures",
                  "Historical Presentations",
                  "Expert Speakers",
                  "Cultural Insights",
                  "Expedition Briefings",
                ].map((item) => (
                  <li key={item} className="Ejv-verdict-list-item">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="Ejv-verdict-check"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejv-verdict-outcome">
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="Ejv-verdict-outcome-icon"
                />

                <p className="Ejv-verdict-outcome-text">
                  For lifelong learners, these enrichment opportunities are
                  often one of the most rewarding aspects of the Viking
                  experience.
                </p>
              </div>

              <div className="Ejv-verdict-divider"></div>

              <div className="Ejv-verdict-note">
                <Info
                  size={15}
                  strokeWidth={1.8}
                  className="Ejv-verdict-note-icon"
                />

                <p className="Ejv-verdict-note-text">
                  Travelers who simply want to relax without educational
                  programming may find Viking more structured and
                  enrichment-focused than they prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRAVELERS WHO WANT A TRADITIONAL FAMILY CRUISE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Travelers Who Want a Traditional Family Cruise
            </h2>
            <div className="Asc-accent-line"></div>

            <p
              className="Asc-faq-intro"
              style={{
                marginTop: "15px",
                marginBottom: "30px",
                fontSize: "1.1rem",
              }}
            >
              Viking is often compared to cruise lines that cater to families.
              The experiences are fundamentally different.
            </p>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking</th>
                  <th>Family Cruise Lines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Kids Clubs</strong>
                  </td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <strong>Water Slides</strong>
                  </td>
                  <td>No</td>
                  <td>Often</td>
                </tr>

                <tr>
                  <td>
                    <strong>Character Experiences</strong>
                  </td>
                  <td>No</td>
                  <td>Some</td>
                </tr>

                <tr>
                  <td>
                    <strong>Adult-Only</strong>
                  </td>
                  <td>Yes</td>
                  <td>No</td>
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
                    <strong>Educational Programs</strong>
                  </td>
                  <td>Extensive</td>
                  <td>Limited</td>
                </tr>

                <tr>
                  <td>
                    <strong>Casinos</strong>
                  </td>
                  <td>No</td>
                  <td>Often</td>
                </tr>

                <tr>
                  <td>
                    <strong>Family Entertainment</strong>
                  </td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "25px" }}>
            <p
              className="Asc-card-subtext"
              style={{
                color: "var(--navy)",
                textAlign: "center",
              }}
            >
              Families should carefully consider these differences before
              booking.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHO USUALLY LOVES VIKING INSTEAD? ══════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">Who Usually Loves Viking Instead?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp6}
                    alt="Couples and travelers enjoying a Viking cruise experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  While Viking may not appeal to everyone, it tends to receive
                  outstanding reviews from travelers who value cultural
                  immersion, destination-focused experiences, enrichment, and
                  thoughtful luxury.
                </p>

                <p className="ugt-component-text">
                  These travelers often appreciate exactly the qualities that
                  others may view as limitations.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Travelers Who Commonly Love Viking:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Couples",
                      "Retirees",
                      "Empty Nesters",
                      "Solo Travelers",
                      "Cultural Explorers",
                      "History Enthusiasts",
                      "Lifelong Learners",
                      "Luxury Travelers Seeking Meaningful Experiences",
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

      <section className="azs-video-section">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2>Why Travelers Continue to Choose Viking</h2>
            <div className="Asc-accent-line"></div>

            <p className="azs-video-intro">
              Viking continues to earn recognition from travelers around the
              world for its destination-focused approach, enriching experiences,
              and exceptional service.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/OS6QIt8zumg"
                title="Viking Wins Top Honors from Travel + Leisure Readers"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE MOST IMPORTANT QUESTION — afc section ════════════════════════ */}
      <section
        className="afc-section afc-bg-white"
        id="most-important-question"
      >
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">
              The Most Important Question to Ask Yourself
            </h2>
            <div className="afc-accent-line"></div>
          </div>

          <div className="afc-split-layout">
            {/* Left Content */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Before booking Viking, ask yourself: "What do I want most
                    from this vacation?"
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">
                    If Your Answer Includes These, Viking May NOT Be Right:
                  </span>
                  <p className="afc-why-text">
                    Water slides, casinos, nightlife, family activities,
                    theme-park attractions, or constant entertainment.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">
                  These Priorities Point Away from Viking:
                </h3>
                <div className="afc-rec-grid">
                  {[
                    "Water Parks",
                    "Casinos",
                    "Nightlife",
                    "Family Activities",
                  ].map((item, i) => (
                    <div key={i} className="afc-rec-card">
                      <div className="afc-rec-icon">
                        <X size={18} />
                      </div>
                      <span className="afc-rec-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="afc-media-side">
              <div className="afc-image-wrapper">
                <img
                  src={VikingExp7}
                  alt="Mainstream cruise ship family water park large attractions"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box">
                <p className="afc-strategy-lead">
                  But if your answer includes these, Viking may be perfect:
                </p>
                <div className="afc-strategy-tags">
                  {[
                    "Learning & History",
                    "Exploration",
                    "Culture",
                    "Smaller Ships",
                    "Adult Atmosphere",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      ✔ {tag}
                    </span>
                  ))}
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
              Everything you need to know about who should — and shouldn't —
              sail Viking.
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
            alt="Viking cruise destination cultural scenic voyage"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Who Should Not Sail Viking
                </span>
                <h2 className="Asc-help-h2">
                  Sometimes Choosing the Right Cruise <br /> Is About What a
                  Line Leaves Out
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking Cruises isn't designed to be the perfect cruise line
                    for everyone.
                  </p>
                  <p className="Asc-help-intro">
                    Instead, it focuses on serving a specific type of traveler
                    exceptionally well — those who value cultural immersion,
                    destination-focused itineraries, and meaningful travel
                    experiences.
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
                      If you want family entertainment, casinos, nightlife,
                      water parks, or resort-style attractions, you'll likely
                      find better options elsewhere.
                      <br />
                      <br />
                      But if you value culture, learning, exploration, smaller
                      ships, and meaningful travel experiences, Viking may be
                      one of the best cruise choices available.
                      <br />
                      <br />
                      <strong>
                        Sometimes choosing the right cruise isn't about finding
                        what a cruise line offers. It's about understanding what
                        it intentionally leaves out.
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
                      Find the Right Cruise for You
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Viking Is NOT Right If You Want:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Family Entertainment & Kids Clubs",
                      "Casinos & Nightlife",
                      "Water Parks & Mega-Ship Attractions",
                      "Budget Cruise Pricing",
                      "Large Resort-Style Ships",
                      "Constant Nonstop Entertainment",
                      "Children's Programming",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <X size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="Asc-help-intro" style={{ marginTop: "20px" }}>
                    <strong>
                      Contact Trips &amp; Ships Luxury Travel to find the cruise
                      line that genuinely fits your travel style.
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

export default WhoShouldNotSailViking;
