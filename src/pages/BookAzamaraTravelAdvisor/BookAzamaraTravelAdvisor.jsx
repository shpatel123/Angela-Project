import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  X,
  Minus,
  Plus,
  ArrowRight,
  Star,
  Ship,
  MapPinned,
  Home,
  BadgePercent,
  ShieldCheck,
  CalendarClock,
  TrendingDown,
  Luggage,
  HeartHandshake,
  MessageCircle,
  ClipboardCheck,
  BadgeCheck,
  AlertTriangle,
  Gift,
  PhoneCall,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import Hero1 from "../../assets/AzamaraCruisesGuide/Hero1.webp";
import Hero2 from "../../assets/AzamaraCruisesGuide/Hero2.webp";
import Hero3 from "../../assets/AzamaraCruisesGuide/Hero3.webp";

import AdvisorMattersImage from "../../assets/AzamaraCruisesGuide/Azamara_operates.webp";
import DistinctiveVoyagesImage from "../../assets/AzamaraCruisesGuide/Cultural_Integration.webp";
import CabinSelectionImage from "../../assets/AzamaraCabinsGuide/Cruise_balcony_view.webp";
import AzamaraShipImage from "../../assets/AzamaraCruisesGuide/Small_Ship.webp";

import GlobalExploration1 from "../../assets/AzamaraCruisesGuide/image.png";
import GlobalExploration2 from "../../assets/AzamaraCruisesGuide/image (1).png";
import GlobalExploration3 from "../../assets/AzamaraCruisesGuide/image (2).png";
import GlobalExploration4 from "../../assets/AzamaraCruisesGuide/image (3).png";

import { Helmet } from "react-helmet-async";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/book-azamara-travel-advisor/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does it cost more to book Azamara through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Cruise lines pay travel advisors a commission, not the traveler, so your fare through Trips & Ships is identical to booking directly with Azamara.",
          },
        },
        {
          "@type": "Question",
          name: "What perks do I get booking Azamara through Trips & Ships instead of direct?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Select sailings include the Distinctive Voyages collection — a hosted onboard welcome reception, a private shore excursion, exclusive onboard credit, and a dedicated host for your sailing.",
          },
        },
        {
          "@type": "Question",
          name: "Can a travel advisor get me a better price on an Azamara cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The published fare is the same everywhere, but an advisor actively monitors your booking and can rebook you at a lower rate if the price drops before your final payment date — something that rarely happens automatically if you book direct.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if the price drops after I book my Azamara cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your Trips & Ships advisor monitors pricing on your behalf and will apply the new, lower rate to your booking if it drops before final payment, at no action required from you.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I use a travel advisor instead of booking Azamara myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get expert ship and cabin guidance, exclusive perks unavailable booking direct, price-drop monitoring, and a single point of contact for every detail — all at the same price you'd pay booking it yourself.",
          },
        },
        {
          "@type": "Question",
          name: "Is Trips & Ships an authorized Azamara travel agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Trips & Ships Luxury Travel is a member of Internova/Travel Leaders Network, CLIA, ASTA, and PATH, with an established booking relationship with Azamara.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Distinctive Voyages collection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Distinctive Voyages is a Travel Leaders Network exclusive perks program offered on select cruise sailings, including Azamara, available only when booking through a participating advisor like Trips & Ships.",
          },
        },
        {
          "@type": "Question",
          name: "Can my travel advisor help with flights and hotels around my Azamara cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — your advisor can coordinate international flights, travel insurance, and pre- or post-cruise hotel stays alongside your Azamara booking, all through one point of contact.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to have cruised before to use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — advisors are especially valuable for first-time Azamara cruisers, helping you choose the right ship, cabin, and itinerary before you've built that knowledge yourself.",
          },
        },
        {
          "@type": "Question",
          name: "What is onboard credit and how do I get it through an advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Onboard credit is money applied directly to your shipboard account for spa treatments, specialty dining, shore excursions, and more. Advisors booking through programs like Distinctive Voyages can secure onboard credit that isn't available booking direct.",
          },
        },
        {
          "@type": "Question",
          name: "Can I transfer an existing Azamara booking to Trips & Ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, yes, within a certain window after the original booking — contact Trips & Ships directly to confirm eligibility for your specific reservation.",
          },
        },
        {
          "@type": "Question",
          name: "How do I contact Angela Hughes to book an Azamara cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Schedule a complimentary consultation through the contact form on this page, or reach the Trips & Ships team directly at sales@tripsandships.com.",
          },
        },
        {
          "@type": "Question",
          name: "What if I have special requests for my Azamara cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Special requests — accessibility needs, celebration arrangements, connecting cabins, dietary requirements — are exactly where an advisor adds the most value, handling the details directly with Azamara on your behalf.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a fee to use a Trips & Ships travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Trips & Ships is compensated by commission from the cruise line, not by fees charged to travelers, so there is no added cost to you.",
          },
        },
        {
          "@type": "Question",
          name: "What ongoing support do I get after booking through an advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your advisor remains your point of contact from booking through final payment, pre-departure preparation, and while you're traveling — including handling any issues that come up during your cruise.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ocean Cruises",
          item: "https://www.tripsandships.com/ocean-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Azamara Cruises",
          item: "https://www.tripsandships.com/azamara-cruises-guide-2026-2027",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Book Azamara Through a Travel Advisor",
          item: "https://www.tripsandships.com/book-azamara-travel-advisor",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      sameAs: [
        "https://www.facebook.com/tripsandships/",
        "https://www.instagram.com/tripsandshipsluxurytravel",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-603-860-3274",
        email: "sales@tripsandships.com",
        contactType: "customer service",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle:
        "CEO, Trips & Ships Luxury Travel; Founder, Luxury Travel University",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      description:
        "Luxury travel expert with 40+ years in the travel industry and personal travel to 121+ countries. Global luxury travel speaker and trainer, weekly industry columnist, Travel Leaders Network Advisory Board member, 2024 Luxury Travel Influencer of the Year, and named one of the Most Influential Women in Travel in 2026 by TravelPulse.",
      award: [
        "2024 Luxury Travel Influencer of the Year — Travel Leaders Network",
        "2026 Most Influential Women in Travel — TravelPulse",
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/book-azamara-travel-advisor/#webpage",
      name: "Book Azamara Through a Travel Advisor | Trips & Ships Luxury Travel",
      description:
        "Booking Azamara? Get exclusive perks, expert guidance, and price protection at no extra cost by booking through Angela Hughes and Trips & Ships Luxury Travel.",
      url: "https://www.tripsandships.com/book-azamara-travel-advisor",
      author: { "@type": "Person", name: "Angela Hughes" },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      datePublished: "2026-08-01",
      dateModified: "2026-08-01",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      image: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      founder: { "@type": "Person", name: "Angela Hughes" },
      areaServed: "Worldwide",
      priceRange: "$$$$",
      telephone: "+1-603-860-3274",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US"
      },
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Azamara Cruise Booking & Advisory",
        },
      },
    },
  ],
};

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Does it cost more to book Azamara through a travel advisor?",
      a: "No. Cruise lines pay travel advisors a commission, not the traveler, so your fare through Trips & Ships is identical to booking directly with Azamara.",
    },
    {
      q: "What perks do I get booking Azamara through Trips & Ships instead of direct?",
      a: "Select sailings include the Distinctive Voyages collection — a hosted onboard welcome reception, a private shore excursion, exclusive onboard credit, and a dedicated Distinctive Voyages host for your sailing. None of these are available booking direct.",
    },
    {
      q: "Can a travel advisor get me a better price on an Azamara cruise?",
      a: "The published fare is the same everywhere, but an advisor actively monitors your booking and can rebook you at a lower rate if the price drops before your final payment date — something that rarely happens automatically if you book direct.",
    },
    {
      q: "What happens if the price drops after I book my Azamara cruise?",
      a: "Your Trips & Ships advisor monitors pricing on your behalf and will apply the new, lower rate to your booking if it drops before final payment, at no action required from you.",
    },
    {
      q: "Why should I use a travel advisor instead of booking Azamara myself?",
      a: "You get expert ship and cabin guidance, exclusive perks unavailable booking direct, price-drop monitoring, and a single point of contact for every detail — all at the same price you'd pay booking it yourself.",
    },
    {
      q: "Is Trips & Ships an authorized Azamara travel agency?",
      a: "Yes. Trips & Ships Luxury Travel is a member of Internova/Travel Leaders Network, CLIA, ASTA, and PATH, with an established booking relationship with Azamara.",
    },
    {
      q: "What is the Distinctive Voyages collection?",
      a: "Distinctive Voyages is a Travel Leaders Network exclusive perks program offered on select cruise sailings, including Azamara, available only when booking through a participating advisor like Trips & Ships.",
    },
    {
      q: "Can my travel advisor help with flights and hotels around my Azamara cruise?",
      a: "Yes — your advisor can coordinate international flights, travel insurance, and pre- or post-cruise hotel stays alongside your Azamara booking, all through one point of contact.",
    },
    {
      q: "Do I need to have cruised before to use a travel advisor?",
      a: "No — advisors are especially valuable for first-time Azamara cruisers, helping you choose the right ship, cabin, and itinerary before you've built that knowledge yourself.",
    },
    {
      q: "What is onboard credit and how do I get it through an advisor?",
      a: "Onboard credit is money applied directly to your shipboard account for spa treatments, specialty dining, shore excursions, and more. Advisors booking through programs like Distinctive Voyages can secure onboard credit that isn't available booking direct.",
    },
    {
      q: "Can I transfer an existing Azamara booking to Trips & Ships?",
      a: "In many cases, yes, within a certain window after the original booking — contact Trips & Ships directly to confirm eligibility for your specific reservation.",
    },
    {
      q: "How do I contact Angela Hughes to book an Azamara cruise?",
      a: "Schedule a complimentary consultation through the contact form on this page, or reach the Trips & Ships team directly at sales@tripsandships.com.",
    },
    {
      q: "What if I have special requests for my Azamara cruise?",
      a: "Special requests — accessibility needs, celebration arrangements, connecting cabins, dietary requirements — are exactly where an advisor adds the most value, handling the details directly with Azamara on your behalf.",
    },
    {
      q: "Is there a fee to use a Trips & Ships travel advisor?",
      a: "No. Trips & Ships is compensated by commission from the cruise line, not by fees charged to travelers, so there is no added cost to you.",
    },
    {
      q: "What ongoing support do I get after booking through an advisor?",
      a: "Your advisor remains your point of contact from booking through final payment, pre-departure preparation, and while you're traveling — including handling any issues that come up during your cruise.",
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

/* ── What a Travel Advisor Actually Does ─────────────────────────── */
const advisorRoles = [
  {
    id: "ship",
    title: "Recommend the Right Ship",
    badge: "Ship Selection",
    icon: Ship,
    desc: "Not every Azamara itinerary is the same. We'll recommend the ship and voyage that best matches your interests.",
    columns: [
      {
        label: "We Consider:",
        items: [
          "Your travel style",
          "Preferred regions",
          "Length of voyage",
          "Onboard atmosphere",
        ],
      },
    ],
    themeLabel: "Matched to You",
    themeText:
      "The right ship depends on more than the destination — it depends on how you like to travel.",
  },
  {
    id: "cabin",
    title: "Help Choose the Best Cabin",
    badge: "Cabin Guidance",
    icon: Home,
    desc: "Cabin location can affect motion, noise, views, convenience, and overall comfort. We'll help you avoid cabins that may not suit your preferences.",
    columns: [
      {
        label: "We Help You Avoid:",
        items: [
          "Excess motion",
          "Noisy locations",
          "Obstructed views",
          "Inconvenient placement",
        ],
      },
    ],
    themeLabel: "Comfort First",
    themeText:
      "A lower-priced cabin isn't always the best value once location is factored in.",
  },
  {
    id: "pricing",
    title: "Monitor Cruise Pricing",
    badge: "Price Monitoring",
    icon: TrendingDown,
    desc: "If Azamara reduces your fare before final payment, we'll monitor eligible pricing and help you secure a lower rate whenever possible.",
    columns: [
      {
        label: "We Track:",
        items: [
          "Published fare changes",
          "Eligible promotions",
          "Final payment deadlines",
          "Rebooking opportunities",
        ],
      },
    ],
    themeLabel: "Ongoing Value",
    themeText:
      "Without someone monitoring your reservation, you may miss opportunities to save before final payment.",
  },
  {
    id: "vacation",
    title: "Coordinate Your Entire Vacation",
    badge: "Full Coordination",
    icon: Luggage,
    desc: "Beyond the cruise, we can arrange international flights, luxury hotels, private transfers, travel insurance, pre- and post-cruise stays, and shore excursions.",
    columns: [
      {
        label: "We Arrange:",
        items: [
          "International flights",
          "Luxury hotels",
          "Private transfers",
          "Travel insurance",
          "Pre- & post-cruise stays",
          "Shore excursions",
        ],
      },
    ],
    themeLabel: "One Trusted Advisor",
    themeText:
      "Everything is coordinated through one trusted advisor, rather than juggling multiple bookings yourself.",
  },
  {
    id: "advocate",
    title: "Advocate for You",
    badge: "Ongoing Support",
    icon: HeartHandshake,
    desc: "If plans change or issues arise before or during your vacation, you have one dedicated contact working on your behalf.",
    columns: [
      {
        label: "We're Here For:",
        items: [
          "Itinerary changes",
          "Onboard concerns",
          "Documentation questions",
          "Unexpected disruptions",
        ],
      },
    ],
    themeLabel: "Someone in Your Corner",
    themeText:
      "You're never left navigating a travel issue alone — your advisor advocates for you every step of the way.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const BookAzamaraTravelAdvisor = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [ctaReadMore, setCtaReadMore] = useState(false);
  const [activeRole, setActiveRole] = useState("ship");
  const currentRole =
    advisorRoles.find((r) => r.id === activeRole) || advisorRoles[0];
  const ActiveIcon = currentRole.icon;

  const images = [Hero1, Hero2, Hero3];

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
          Book Azamara Through a Travel Advisor | Trips &amp; Ships Luxury
          Travel
        </title>
        <meta
          name="title"
          content="Azamara Travel Agent | Book With an Azamara Specialist"
        />
        <meta
          name="description"
          content="Booking Azamara? Get exclusive perks, expert guidance, and price protection at no extra cost by booking through Angela Hughes and Trips & Ships Luxury Travel."
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
          <h1>
            Book Azamara Through a Travel Advisor <br /> At No Extra Cost
          </h1>

          <p>
            Booking an Azamara cruise is about more than choosing a
            destination—it's about selecting the right itinerary, the best
            cabin, and taking advantage of exclusive benefits that aren't always
            available when booking directly.
          </p>

          {readMore && (
            <>
              <p>
                When you book through Trips &amp; Ships Luxury Travel, you pay
                the same cruise fare as booking directly with Azamara, while
                gaining expert guidance, exclusive advisor-only perks, price
                monitoring, and personalized service before, during, and after
                your voyage.
              </p>

              <p>
                With more than 40 years of luxury travel experience, Angela
                Hughes helps travelers maximize every Azamara vacation while
                providing a level of personal attention that simply isn't
                available through an online booking engine.
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

      {/* ── QUICK ANSWER: DOES IT COST MORE? ─────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="quick-answer-cost">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Quick Answer</span>
            <h2 className="adg-c-h2">
              Does It Cost More to Book Azamara <br /> Through a Travel Advisor?
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              No. Booking through Trips &amp; Ships Luxury Travel costs exactly
              the same as booking directly with Azamara. Cruise lines compensate
              travel advisors through commissions—not through additional charges
              to travelers.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Expert ship recommendations",
                "Cabin selection guidance",
                "Price-drop monitoring",
                "Exclusive advisor-only amenities",
                "Personalized vacation planning",
                "One dedicated point of contact",
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
                    There is no additional booking fee for using a Trips &amp;
                    Ships luxury travel advisor.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={AdvisorMattersImage}
                  alt="Azamara cruise advisor consultation"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Same Fare. More Value.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BOOKING THROUGH A TRAVEL ADVISOR MATTERS ─────────────── */}
      <section
        className="ugt-components-section"
        id="why-booking-matters"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Booking Through a <br /> Travel Advisor Matters
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={CabinSelectionImage}
                    alt="Azamara boutique ship itinerary and cabin planning"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  <strong>Azamara</strong> specializes in immersive travel
                  experiences aboard boutique ships. Choosing the right
                  itinerary, cabin location, and sailing date can dramatically
                  influence your vacation. An experienced Azamara specialist
                  helps you avoid common mistakes while ensuring you receive
                  every available benefit.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Working with a travel advisor means you have someone who
                    understands:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Which ship best matches your travel style",
                      "The advantages of different cabin categories",
                      "Which itineraries offer longer port stays",
                      "Advisor-only promotions",
                      "Shore excursion recommendations",
                      "Cruise line policies",
                      "Travel logistics before and after your voyage",
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
                  Instead of spending hours researching, you receive expert
                  recommendations tailored specifically to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── WHAT A TRAVEL ADVISOR ACTUALLY DOES ──────────────────────── */}
      <section className="luc-destinations-section" id="luc-advisor-role">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              What a Travel Advisor Actually Does
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Many travelers assume travel advisors simply make reservations. In
              reality, they serve as your personal travel advocate throughout
              the entire planning process.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {advisorRoles.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeRole === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveRole(item.id)}
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
            <div className="luc-dest-panel" key={activeRole}>
              {/* Image */}
              <div className="luc-dest-img-wrap" style={{ height: "auto" }}>
                <div
                  className="luc-dest-img-overlay"
                  style={{ position: "static", background: "var(--navy)" }}
                >
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentRole.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentRole.desc}</p>

              {/* Columns */}
              <div className="luc-dest-columns">
                {currentRole.columns.map((col, cIdx) => (
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

              {/* Theme / Highlight */}
              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>

                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    {currentRole.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentRole.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE DISTINCTIVE VOYAGES BENEFITS ───────────────────── */}
      <section className="adg-section" id="adg-distinctive-voyages">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Exclusive Distinctive Voyages Benefits</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Trips &amp; Ships Luxury Travel is affiliated with Travel Leaders
              Network, giving eligible guests access to Distinctive Voyages on
              select Azamara sailings. These exclusive amenities are only
              available when booking through participating luxury travel
              advisors.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={DistinctiveVoyagesImage}
                alt="Distinctive Voyages exclusive Azamara amenities"
                className="adg-side-image"
                style={{ height: "29vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Gift size={28} />
                  <span className="adg-meta-label">
                    Eligible Sailings May Include
                  </span>
                </div>

                <p className="adg-card-lead">
                  Availability varies by sailing. These amenities are not
                  available when booking directly with Azamara.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Private Welcome Reception",
                "Exclusive Shore Event",
                "Dedicated Distinctive Voyages Host",
                "Exclusive Onboard Credit",
                "Additional VIP Experiences",
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



      {/* ── COMMON MISTAKES TRAVELERS MAKE BOOKING DIRECT ───────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="common-booking-mistakes"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              <AlertTriangle
                size={14}
                style={{ display: "inline", marginRight: 6 }}
              />
              Booking Online Is Easy — Booking Wisely Requires Experience
            </span>

            <h2 className="adg-c-h2">
              Common Mistakes Travelers Make Booking Direct
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div
            className="adg-c-venues-grid1"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {/* Wrong Cabin */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Home
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Cabin Selection
                </span>

                <h3 className="adg-c-venue-name">Choosing the Wrong Cabin</h3>

                <p className="adg-c-venue-highlight">
                  Lower Price Isn't Always Better Value
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "More ship movement",
                  "Increased noise",
                  "Obstructed views",
                  "Less desirable locations",
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
                  A lower-priced cabin isn't always the best value once these
                  factors are considered.
                </p>
              </div>
            </div>

            {/* Missing Advisor-Only Perks */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Gift
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Missed Perks
                </span>

                <h3 className="adg-c-venue-name">Missing Advisor-Only Perks</h3>

                <p className="adg-c-venue-highlight">Not Promoted Directly</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Distinctive Voyages amenities",
                  "Onboard credit opportunities",
                  "Exclusive shore events",
                  "Dedicated host access",
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
                  Many travelers never learn about programs like Distinctive
                  Voyages because they're not promoted during direct bookings.
                </p>
              </div>
            </div>

            {/* Missing Price Drops */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <TrendingDown
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Pricing
                </span>

                <h3 className="adg-c-venue-name">Missing Price Drops</h3>

                <p className="adg-c-venue-highlight">
                  No One Monitoring Your Fare
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Fare reductions before final payment",
                  "Rebooking opportunities",
                  "Eligible promotions",
                  "Final payment deadlines",
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
                  Without someone monitoring your reservation, you may miss
                  opportunities to save money before final payment.
                </p>
              </div>
            </div>

            {/* Wrong Itinerary */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <MapPinned
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Itinerary
                </span>

                <h3 className="adg-c-venue-name">
                  Booking the Wrong Itinerary
                </h3>

                <p className="adg-c-venue-highlight">Similar Isn't the Same</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Port timing",
                  "Overnight stays",
                  "Sea days",
                  "Shore excursion opportunities",
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
                  Two Mediterranean cruises may look similar but provide
                  completely different experiences. Choosing the right itinerary
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* ===== MODERN BENTO GRID GALLERY SHOWCASE ===== */}
      <section className="senianta-gallery-section" style={{ backgroundColor: "var(--bg-white)" }}>
        <div className="senianta-gallery-inner">
          <div className="senianta-gallery-header">
            <h2 className="senianta-gallery-h2">Global Explorations</h2>
            <div className="senianta-gallery-divider"></div>
            <p className="senianta-gallery-p">
              From sun-drenched Mediterranean coastlines to the historic charm
              of Northern Europe, experience the world's most breathtaking
              destinations in absolute luxury.
            </p>
          </div>

          <div className="senianta-gallery-bento-grid">
            {/* 01: Large Featured Item - Dubrovnik */}
            <div className="senianta-gallery-item senianta-gallery-feature">
              <div className="senianta-gallery-image-box">
                <img
                  src={GlobalExploration4}
                  alt="Azamara cruise ship sailing past Dubrovnik medieval walls in Croatia"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Adriatic Splendor
                  </span>
                  <h3 className="senianta-gallery-h3">Dubrovnik's Historic Walls</h3>
                  <p className="senianta-gallery-item-p">
                    Glide past the medieval stone ramparts and orange-tiled roofs of Dubrovnik, where ancient history meets the shimmering blue Adriatic.
                  </p>
                </div>
              </div>
            </div>

            {/* 02: Vertical Item - Suite Life */}
            <div className="senianta-gallery-item senianta-gallery-tall">
              <div className="senianta-gallery-image-box">
                <img
                  src={GlobalExploration3}
                  alt="Luxury cruise stateroom balcony cabin overlooking scenic ocean cliffs"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">Suite Life</span>
                  <h3 className="senianta-gallery-h3">Luxury Verandas</h3>
                </div>
              </div>
            </div>

            {/* 03: Standard Item - Kotor */}
            <div className="senianta-gallery-item">
              <div className="senianta-gallery-image-box">
                <img
                  src={GlobalExploration2}
                  alt="Azamara cruise ship docked in Kotor Montenegro scenic harbor"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Scenic Fjords
                  </span>
                  <h3 className="senianta-gallery-h3">
                    Kotor &amp; Montenegro
                  </h3>
                </div>
              </div>
            </div>

            {/* 04: Standard Item - Bespoke Planning */}
            <div className="senianta-gallery-item">
              <div className="senianta-gallery-image-box">
                <img
                  src={GlobalExploration1}
                  alt="Travel advisor consulting a couple planning a luxury cruise"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Expert Guidance
                  </span>
                  <h3 className="senianta-gallery-h3">Bespoke Cruise Planning</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── BEST FOR / NOT BEST FOR ───────────────────────────────────── */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Is Booking Through a Travel Advisor Right for You?
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Even if it may matter less for some travelers, there is generally
              no downside, since your cruise fare remains the same while advisor
              support is still available.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                Booking Through a Travel Advisor Is Ideal If You:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Are sailing Azamara for the first time",
                  "Want personalized recommendations",
                  "Appreciate exclusive perks",
                  "Have a complex itinerary",
                  "Need flights and hotels arranged",
                  "Value ongoing support",
                  "Prefer a single point of contact",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">It May Matter Less If You:</h3>
              <ul className="Asc-who-list">
                {[
                  "Already know the exact sailing and cabin you want",
                  "Frequently cruise Azamara",
                  "Don't need assistance planning",
                ].map((item, i) => (
                  <li key={i}>
                    <X size={16} className="Asc-icon-red" />
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
            Even then, there is generally no downside, since your cruise fare
            remains the same while advisor support is still available.
          </p>
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
            <h2 className="Asc-h2">Azamara Forward: A New Era for the Fleet</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover how Azamara Forward has transformed the fleet with
              refreshed public spaces, modernized staterooms, upgraded dining
              venues, and an enhanced onboard experience while maintaining the
              cruise line's signature destination-focused style.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/NXyEGR_i3T0"
                title="Azamara Forward: A New Era for the Fleet"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW BOOKING WORKS ─────────────────────────────────────────── */}
      <section className="ugt-advantage-section">
        <div className="Asc-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Six Simple Steps</span>

            <h2 className="ugt-advantage-title">How Booking Works</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              From your first consultation to ongoing support throughout your
              voyage, here's exactly what to expect when you book your Azamara
              cruise through Trips &amp; Ships Luxury Travel.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Step 1: Schedule a Consultation
              </h4>

              <p className="ugt-card-desc">
                Schedule a complimentary consultation to get started.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <MessageCircle size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Step 2: Tell Us About Your Trip
              </h4>

              <p className="ugt-card-desc">
                Share your travel style, preferred destinations, budget, travel
                dates, and special requests.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <ClipboardCheck size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Step 3: Receive Recommendations
              </h4>

              <p className="ugt-card-desc">
                Get personalized recommendations for ship, cabin, itinerary,
                promotions, and Distinctive Voyages eligibility.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <BadgeCheck size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Step 4: Confirm Your Reservation
              </h4>

              <p className="ugt-card-desc">
                Confirm your reservation at the same published fare as booking
                directly.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Luggage size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Step 5: Relax While We Coordinate
              </h4>

              <p className="ugt-card-desc">
                We handle cruise documentation, flights, hotels, transfers,
                excursions, and travel insurance.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <PhoneCall size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Step 6: Enjoy Ongoing Support</h4>

              <p className="ugt-card-desc">
                Receive continued support before departure and throughout your
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET ANGELA HUGHES ────────────────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>
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
              <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
                Booking luxury travel is about relationships, experience, and
                knowledge. Angela specializes in luxury cruises, river cruises,
                expedition cruises, safaris, private journeys, and custom luxury
                vacations—allowing clients to benefit from decades of industry
                relationships and destination expertise.
              </p>

              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Luxury Travel Expertise You Can Trust
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
                      label:
                        "Luxury travel advisor with over 40 years of experience",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveler to more than 121 countries",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly travel industry columnist",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "International luxury travel speaker",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Travel Leaders Network Advisory Board member",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Named 2024 Luxury Travel Influencer of the Year",
                    },
                    {
                      icon: <Star size={16} />,
                      label:
                        "Recognized among TravelPulse's Most Influential Women in Travel (2026)",
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

      {/* ── WHY TRAVELERS CHOOSE TRIPS & SHIPS ───────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="why-choose-trips-and-ships"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Why Travelers Choose Trips &amp; Ships
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Rather than simply selling a cruise, we help design the best
              overall vacation experience.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <ShieldCheck size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Our Clients Appreciate</h3>
              </div>

              <p className="Ejvs-card-intro">
                Decades of relationships and independent recommendations, built
                around your priorities.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Personalized luxury travel planning",
                  "Independent cruise recommendations",
                  "Long-term industry relationships",
                  "Access to exclusive promotions",
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
                  Independent recommendations mean advice built around what's
                  right for you, not a sales quota.
                </p>
              </div>
            </div>

            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <BadgePercent size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  A Complete Vacation Experience
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Comprehensive planning and ongoing support from booking through
                your return home.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Comprehensive vacation planning",
                  "Ongoing support",
                  "Luxury travel expertise",
                  "One dedicated point of contact",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Booking directly gives you a reservation. Booking through
                  Trips &amp; Ships gives you a trusted advisor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-soft" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about booking Azamara through a luxury
              travel advisor.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={AzamaraShipImage}
            alt="Azamara cruise ship sailing at sea"
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
                <h2 className="Asc-help-h2">
                  Ready to Book <br /> Your Azamara Cruise?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Booking directly gives you a reservation.
                    <br />
                    <p className="Asc-help-intro">
                      Booking through Trips &amp; Ships Luxury Travel gives you
                      a trusted advisor, personalized recommendations, exclusive
                      amenities, ongoing support, and decades of luxury travel
                      expertise—all at the same cruise fare.
                    </p>
                    {!ctaReadMore && (
                      <button
                        onClick={() => setCtaReadMore(true)}
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

                  {ctaReadMore && (
                    <>
                      <p className="Asc-help-intro">
                        Whether you're planning your first Azamara voyage or
                        returning for another destination-intensive adventure,
                        Angela Hughes and the Trips &amp; Ships team are here to
                        help you choose the right ship, the ideal itinerary, and
                        every detail that transforms a great cruise into an
                        unforgettable luxury vacation.
                        <button
                          onClick={() => setCtaReadMore(false)}
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
                      Schedule Your Complimentary Consultation
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Discover how booking through a luxury travel advisor can
                    add:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "More value at the same cruise fare",
                      "More confidence in your ship and cabin choice",
                      "More personalized service before and during your voyage",
                      "Access to exclusive Distinctive Voyages amenities",
                      "Price-drop monitoring before final payment",
                      "One dedicated point of contact throughout",
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
                  Explore More Azamara Guides
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
                      label: "Azamara Cruises Guide",
                      path: "/azamara-cruises-guide",
                    },
                    {
                      label: "Azamara vs. Oceania Cruises",
                      path: "/azamara-vs-oceania-cruises",
                    },
                    {
                      label: "Azamara Ship Comparison",
                      path: "/azamara-ship-comparison",
                    },
                    {
                      label: "Azamara Cabins Guide",
                      path: "/azamara-cabins-guide",
                    },
                    {
                      label: "Azamara Dining Guide",
                      path: "/azamara-dining-guide",
                    },
                    {
                      label: "Luxury Ocean Cruises",
                      path: "/luxury-ocean-cruises",
                    },
                    {
                      label: "Small Ship Cruises",
                      path: "/small-ship-cruises",
                    },
                    {
                      label: "Why Use a Luxury Travel Advisor",
                      path: "/why-use-a-luxury-travel-advisor",
                    },
                    {
                      label: "Our Story",
                      path: "/our-story",
                    },
                    {
                      label: "Contact Trips & Ships",
                      path: "/contact",
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

export default BookAzamaraTravelAdvisor;
