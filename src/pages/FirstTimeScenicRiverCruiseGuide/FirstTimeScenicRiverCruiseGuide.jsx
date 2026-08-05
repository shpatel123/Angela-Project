import { useState } from "react";
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
    Compass,
    Sparkles,
    Ship,
    Plane,
    MapPinned,
    Home,
    ShieldCheck,
    Wine,
    Calendar,
    Wallet,
    Gem,
    BadgePercent,
    Landmark,
    X,
    CheckCircle,
    Backpack,
    Shirt,
    Sun,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real First-Time Scenic River Cruise Guide
   photography once available. Paths assume a new
   /assets/ScenicFirstTimeGuide folder. */
// import HeroImage from "../../assets/ScenicFirstTimeGuide/scenic-first-time-hero.jpg";
// import SuiteImage from "../../assets/ScenicFirstTimeGuide/scenic-first-time-suite.jpg";
// import RhineImage from "../../assets/ScenicFirstTimeGuide/scenic-first-time-rhine.jpg";
// import EveningImage from "../../assets/ScenicFirstTimeGuide/scenic-first-time-evening.jpg";
// import ShipImage from "../../assets/ScenicFirstTimeGuide/scenic-first-time-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";

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
                "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/first-time-guide/#webpage",
            name: "First-Time Scenic River Cruise Guide (2026)",
            url: "https://tripsandships.com/scenic-river-cruises/first-time-guide",
            description:
                "Planning your first Scenic River Cruise? Learn what to expect, what's included, how to choose the right itinerary, cabins, excursions, costs, and expert tips before you book.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/first-time-guide/#article",
            headline: "First-Time Scenic River Cruise Guide | Tips, Costs & What to Expect",
            description:
                "A complete beginner's guide to Scenic River Cruises covering itineraries, cabins, what's included, a typical day onboard, packing tips, and common first-time mistakes to avoid.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/first-time-guide/#breadcrumb",
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
                    name: "Riverside Luxury Cruises",
                    item: "https://tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic River Cruises",
                    item: "https://tripsandships.com/scenic-river-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "First-Time Scenic River Cruise Guide",
                    item: "https://tripsandships.com/scenic-river-cruises/first-time-guide",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/first-time-guide/#itemlist",
            name: "First-Time Scenic River Cruise Guide — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer: Is Scenic Good for First-Timers?" },
                { "@type": "ListItem", position: 2, name: "Why Choose Scenic for Your First River Cruise?" },
                { "@type": "ListItem", position: 3, name: "What Makes Scenic Different?" },
                { "@type": "ListItem", position: 4, name: "Which Itinerary Is Best for First-Time Travelers?" },
                { "@type": "ListItem", position: 5, name: "Which Cabin Should First-Time Guests Book?" },
                { "@type": "ListItem", position: 6, name: "What's Included and What's Not" },
                { "@type": "ListItem", position: 7, name: "What Is a Typical Day Like?" },
                { "@type": "ListItem", position: 8, name: "How Formal Is Scenic?" },
                { "@type": "ListItem", position: 9, name: "Who Is Scenic Best For?" },
                { "@type": "ListItem", position: 10, name: "Common First-Time Mistakes & Packing Tips" },
                { "@type": "ListItem", position: 11, name: "Should You Book Through a Travel Advisor?" },
                { "@type": "ListItem", position: 12, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/first-time-guide/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic a good choice for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic's all-inclusive experience, personalized service, and included excursions make it one of the easiest luxury river cruise lines for first-time travelers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic itinerary is best for beginners?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhine and Danube are generally considered the best choices because they visit iconic European destinations and offer a well-rounded introduction to river cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cabin should I book on my first Scenic cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Balcony Suite is the most popular recommendation because it includes Scenic's signature Sun Lounge and offers an excellent balance of comfort and value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included on Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Most premium beverages, including wine, beer, and spirits, are included during your cruise. Check your specific itinerary for details.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes Scenic Freechoice excursions and exclusive Scenic Enrich experiences on most itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do I need to dress formally?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Smart casual attire is appropriate for most evenings, making packing simpler than on many ocean cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is butler service included for every cabin?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Butler service is available in every Scenic suite, regardless of cabin category.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What isn't included in the cruise fare?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "International airfare, travel insurance, spa treatments, personal shopping, and some optional experiences may cost extra.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How far in advance should I book?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For the best choice of cabins and departure dates, booking 9–18 months in advance is recommended, especially for popular itineraries and seasonal sailings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic worth the higher price?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many travelers feel Scenic offers excellent value because it includes premium beverages, excursions, butler service, gratuities, and luxury accommodations in one fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I arrive before embarkation day?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Arriving at least one day early helps reduce travel stress and provides extra time to explore your embarkation city.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you compare itineraries, select the best cabin, explain promotions, and coordinate every aspect of your vacation.",
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
            q: "Is Scenic a good choice for first-time river cruisers?",
            a: "Yes. Scenic's all-inclusive experience, personalized service, and included excursions make it one of the easiest luxury river cruise lines for first-time travelers.",
        },
        {
            q: "Which Scenic itinerary is best for beginners?",
            a: "The Rhine and Danube are generally considered the best choices because they visit iconic European destinations and offer a well-rounded introduction to river cruising.",
        },
        {
            q: "Which cabin should I book on my first Scenic cruise?",
            a: "The Balcony Suite is the most popular recommendation because it includes Scenic's signature Sun Lounge and offers an excellent balance of comfort and value.",
        },
        {
            q: "Are drinks included on Scenic River Cruises?",
            a: "Yes. Most premium beverages, including wine, beer, and spirits, are included during your cruise. Check your specific itinerary for details.",
        },
        {
            q: "Are excursions included?",
            a: "Yes. Scenic includes Scenic Freechoice excursions and exclusive Scenic Enrich experiences on most itineraries.",
        },
        {
            q: "Do I need to dress formally?",
            a: "No. Smart casual attire is appropriate for most evenings, making packing simpler than on many ocean cruises.",
        },
        {
            q: "Is butler service included for every cabin?",
            a: "Yes. Butler service is available in every Scenic suite, regardless of cabin category.",
        },
        {
            q: "What isn't included in the cruise fare?",
            a: "International airfare, travel insurance, spa treatments, personal shopping, and some optional experiences may cost extra.",
        },
        {
            q: "How far in advance should I book?",
            a: "For the best choice of cabins and departure dates, booking 9–18 months in advance is recommended, especially for popular itineraries and seasonal sailings.",
        },
        {
            q: "Is Scenic worth the higher price?",
            a: "Many travelers feel Scenic offers excellent value because it includes premium beverages, excursions, butler service, gratuities, and luxury accommodations in one fare.",
        },
        {
            q: "Should I arrive before embarkation day?",
            a: "Yes. Arriving at least one day early helps reduce travel stress and provides extra time to explore your embarkation city.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help you compare itineraries, select the best cabin, explain promotions, and coordinate every aspect of your vacation.",
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
                    {open === i && <p className="Asc-faq-a">{item.a}</p>}
                </div>
            ))}
        </div>
    );
}

/* ── Itinerary Comparison Data ─────────────────────────────────── */
const itineraryData = [
    {
        key: "rhine",
        river: "Rhine River",
        badge: "Best Overall",
        highlights: "Castles, vineyards, charming villages",
        cities: "Amsterdam, Strasbourg, Basel",
        bestFor: "Classic European scenery",
    },
    {
        key: "danube",
        river: "Danube River",
        badge: "Iconic Route",
        highlights: "Historic cities, music, architecture",
        cities: "Budapest, Vienna, Bratislava",
        bestFor: "History and culture lovers",
    },
    {
        key: "rhone",
        river: "Rhône River",
        badge: "Food & Wine",
        highlights: "French cuisine, Provence, wine, culture",
        cities: "Lyon, Avignon, Arles",
        bestFor: "Culinary and wine enthusiasts",
    },
    {
        key: "douro",
        river: "Douro River",
        badge: "Relaxed Pace",
        highlights: "Vineyards, boutique experiences",
        cities: "Porto, Régua, Pinhão",
        bestFor: "A slower-paced introduction",
    },
];

/* ── First-Time Itineraries Data ───────────────────────────────────── */
const firstTimeItineraries = [
    {
        id: "rhine",
        title: "Rhine River",
        badge: "Rhine River",
        icon: MapPinned,
        desc: "Perfect for travelers seeking classic European scenery.",
        listTitle: "You'll experience:",
        items: ["Castles", "Vineyards", "Charming villages", "Amsterdam", "Strasbourg", "Basel"],
    },
    {
        id: "danube",
        title: "Danube River",
        badge: "Danube River",
        icon: Landmark,
        desc: "One of Europe's most iconic river cruise routes.",
        listTitle: "Ideal for:",
        items: ["Historic cities", "Music lovers", "Architecture", "Budapest", "Vienna", "Bratislava"],
    },
    {
        id: "rhone",
        title: "Rhône River",
        badge: "Rhône River",
        icon: Wine,
        desc: "",
        listTitle: "Best for:",
        items: ["French cuisine", "Provence", "Wine", "Culture"],
    },
    {
        id: "douro",
        title: "Douro River",
        badge: "Douro River",
        icon: Compass,
        desc: "",
        listTitle: "Perfect for:",
        items: ["Portugal", "Vineyards", "Relaxed pace", "Boutique experiences"],
    },
];

/* ── Scenic Different Features Data ───────────────────────────────── */
const scenicDifferentFeatures = [
    {
        id: "freechoice",
        title: "Scenic Freechoice",
        icon: Compass,
        desc: "Choose from multiple included excursions each day based on your interests.",
        listTitle: "Examples may include:",
        items: ["Walking tours", "Wine tastings", "Castle visits", "Cycling excursions", "Museum tours"],
    },
    {
        id: "enrich",
        title: "Scenic Enrich",
        icon: Sparkles,
        desc: "Exclusive cultural experiences designed specifically for Scenic guests.",
        listTitle: "Examples may include:",
        items: ["Private concerts", "Historic venues", "After-hours museum access", "Local performances"],
    },
    {
        id: "butler",
        title: "Butler Service",
        icon: Users,
        desc: "Every suite includes personalized butler service—a feature that distinguishes Scenic from many competitors.",
    },
    {
        id: "sunlounge",
        title: "Scenic Sun Lounge",
        icon: Sun,
        desc: "Most Balcony Suites include Scenic's enclosed Sun Lounge with floor-to-ceiling windows, allowing guests to enjoy panoramic river views regardless of the weather.",
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const FirstTimeScenicRiverCruiseGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("rhine");

    const currentItinerary =
        firstTimeItineraries.find((i) => i.id === activeItinerary) || firstTimeItineraries[0];

    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>First-Time Scenic River Cruise Guide | Everything You Need to Know</title>
                <meta name="title" content="First-Time Scenic River Cruise Guide | Tips, Costs & What to Expect" />
                <meta
                    name="description"
                    content="Planning your first Scenic River Cruise? Learn what to expect, what's included, how to choose the right itinerary, cabins, excursions, costs, and expert tips before you book."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>First-Time Scenic <br /> River Cruise Guide</h1>

                    <p>
                        Planning your first Scenic River Cruise is exciting
                        — but it can also feel overwhelming. Which river
                        should you choose? What's included? Which cabin is
                        best? How do excursions work? Is Scenic worth the
                        premium price?
                    </p>

                    {readMore && (
                        <p>
                            The good news is that Scenic is designed to make
                            luxury river cruising easy. With elegant
                            Space-Ships, personalized butler service,
                            included excursions, fine dining, premium
                            beverages, and immersive cultural experiences,
                            Scenic offers one of the most comprehensive
                            all-inclusive experiences in Europe. This guide
                            answers the most important questions first-time
                            guests have, helping you book with confidence and
                            make the most of your vacation.
                        </p>
                    )}

                    <div className="Scenic_readmore_wrapper">
                        <button
                            className="Scenic_readmore_btn"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Scenic Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER (AI OVERVIEW) ───────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is Scenic Good for First-Time River Cruisers?</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time, here's the quick answer:
                            Scenic is one of the best luxury river cruise
                            lines for first-time travelers. You'll enjoy:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Luxury accommodations in every suite category",
                                "Butler service for every suite",
                                "Included dining and premium drinks",
                                "Scenic Freechoice excursions",
                                "Scenic Enrich exclusive experiences",
                                "Airport transfers (on many itineraries)",
                                "Gratuities included",
                                "Complimentary Wi-Fi",
                            ].map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            For most first-time guests, we recommend a{" "}
                            <strong>Rhine River Cruise</strong> or{" "}
                            <strong>Danube River Cruise</strong>, paired with
                            a <strong>Balcony Suite</strong>, for the classic
                            Scenic experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE SCENIC ─────────────────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-scenic">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose Scenic for Your First River Cruise?</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Scenic stands out because it removes much of the
                            uncertainty that comes with planning a luxury
                            vacation. Instead of worrying about hidden costs
                            or arranging multiple tours, Scenic includes many
                            of the essentials in one seamless experience.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Butler service",
                                "Premium dining",
                                "Complimentary beverages",
                                "Daily excursions",
                                "Airport transfers (select itineraries)",
                                "Luxury accommodations",
                                "Personalized service",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <CheckCircle size={16} strokeWidth={2.5} />
                                    </span>

                                    <span className="adg-c-overview-label">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="adg-c-overview-right">
                            <div className="adg-c-overview-callout">
                                <div className="adg-c-overview-callout-inner">
                                    <Star
                                        size={28}
                                        className="adg-c-callout-star"
                                    />

                                    <p className="adg-c-callout-text">
                                        This allows you to focus on enjoying
                                        the destinations rather than managing
                                        logistics — a welcome relief for
                                        anyone stepping onto a river cruise
                                        for the first time.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="adg-c-overview-image-wrap"
                                style={{ height: "280px" }}
                            >
                                <img
                                    // src={SuiteImage}
                                    alt="Butler service and luxury suite aboard a Scenic river cruise"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Seamless Luxury • Zero Guesswork
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES SCENIC DIFFERENT ──────────────────────────────── */}
            <section className="scenic-diff-section" id="what-makes-scenic-different">
                <div className="scenic-diff-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">What Makes Scenic Different?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Scenic isn't simply a transportation provider—it delivers an immersive luxury travel experience.
                            Some signature features include:
                        </p>
                    </div>

                    <div className="scenic-diff-grid">
                        {scenicDifferentFeatures.map((item) => {
                            const CardIcon = item.icon;
                            return (
                                <div key={item.id} className="scenic-diff-card">
                                    <div className="scenic-diff-card-header">
                                        <div className="scenic-diff-icon-wrap">
                                            <CardIcon size={24} strokeWidth={1.8} />
                                        </div>
                                        <h3 className="scenic-diff-card-title">{item.title}</h3>
                                    </div>
                                    <div className="scenic-diff-card-body">
                                        <p className="scenic-diff-card-text">{item.desc}</p>
                                        {item.items && (
                                            <>
                                                <span className="scenic-diff-card-subtitle">{item.listTitle}</span>
                                                <ul className="scenic-diff-list">
                                                    {item.items.map((listItem) => (
                                                        <li key={listItem}>
                                                            <Check size={14} className="Asc-icon-green" />
                                                            <span>{listItem}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Ready to Book Your First Scenic Cruise?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you choose the right river, suite, and sailing date for a stress-free first river cruise.
                        </p>
                    </div>
                    <div className="scenic-inline-cta-action-dark">
                        <Link to="/contact" className="scenic-inline-cta-btn-dark" style={{ textDecoration: "none" }}>
                            Get Personalized Advice
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHICH ITINERARY IS BEST FOR FIRST-TIME TRAVELERS ─────────── */}
            <section className="luc-destinations-section" id="best-itineraries">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Which Scenic Itinerary Is Best <br /> for First-Time Travelers?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Scenic offers several routes in Europe, but some are better suited for your very first river cruise.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {firstTimeItineraries.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeItinerary === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveItinerary(item.id)}
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

                        <div className="luc-dest-panel" key={activeItinerary}>
                            <div className="luc-dest-img-wrap">
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveItineraryIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentItinerary.title}</span>
                                </div>
                            </div>

                            {currentItinerary.desc && (
                                <p className="luc-dest-panel-desc">{currentItinerary.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                <div className="luc-dest-info-col">
                                    <span className="luc-dest-info-label">{currentItinerary.listTitle}</span>
                                    <div className="luc-dest-items-grid">
                                        {currentItinerary.items.map((item) => (
                                            <div key={item} className="luc-dest-item">
                                                <div className="luc-dest-item-dot"></div>
                                                <span className="luc-dest-item-text">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHAT'S INCLUDED & NOT INCLUDED ───────────────────────────── */}
            <section className="scenic-inout-section" id="whats-included-and-not">
                <div className="scenic-inout-container">
                    <div className="adg-header" style={{ marginBottom: "48px" }}>
                        <h2 className="adg-h2">What's Included & What's Not?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Understanding what's covered in your cruise fare helps you plan your vacation with complete confidence.
                        </p>
                    </div>

                    <div className="scenic-inout-grid">
                        {/* Left Column: What's Included */}
                        <div className="scenic-inout-col scenic-inout-col--inc">
                            <h3 className="scenic-inout-col-title">What's Included</h3>
                            <p className="scenic-inout-col-subtitle">One of Scenic's biggest strengths is its all-inclusive philosophy.</p>
                            <div className="scenic-inout-list">
                                {[
                                    "Luxury accommodations",
                                    "Butler service",
                                    "Breakfast, lunch, and dinner",
                                    "Complimentary premium beverages",
                                    "Scenic Freechoice excursions",
                                    "Scenic Enrich experiences",
                                    "Wi-Fi",
                                    "Gratuities",
                                    "Airport transfers on many itineraries",
                                ].map((item, i) => (
                                    <div key={i} className="scenic-inout-item">
                                        <div className="scenic-inout-icon-wrap scenic-inout-icon-wrap--inc">
                                            <CheckCircle size={18} strokeWidth={2.5} />
                                        </div>
                                        <span className="scenic-inout-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: What's Not Included */}
                        <div className="scenic-inout-col scenic-inout-col--exc">
                            <h3 className="scenic-inout-col-title">What's Not Included</h3>
                            <p className="scenic-inout-col-subtitle">Knowing these costs in advance helps you budget more accurately.</p>
                            <div className="scenic-inout-list">
                                {[
                                    "International airfare",
                                    "Travel insurance",
                                    "Spa treatments",
                                    "Personal shopping",
                                    "Optional experiences beyond included excursions",
                                ].map((item, i) => (
                                    <div key={i} className="scenic-inout-item">
                                        <div className="scenic-inout-icon-wrap scenic-inout-icon-wrap--exc">
                                            <X size={18} strokeWidth={2.5} />
                                        </div>
                                        <span className="scenic-inout-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="Asc-section-intro" style={{ marginTop: "40px", textAlign: "center", fontSize: "14px", color: "var(--text-muted)" }}>
                        *Always review your specific itinerary and sailing date for complete, up-to-date inclusions.
                    </p>
                </div>
            </section>

            {/* ── WHICH CABIN SHOULD FIRST-TIME GUESTS BOOK ────────────────── */}
            <section className="rlc-lc-worth-section" id="which-cabin" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <span className="scenic-inline-cta-eyebrow-light" style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "13px", color: "var(--navy-light)" }}>
                                Our Recommendation
                            </span>
                            <h2 className="rlc-lc-worth-title">Which Cabin Should <br /> First-Time Guests Book?</h2>
                            <div className="rlc-lc-worth-accent"></div>

                            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--navy)", fontSize: "28px", fontWeight: "500", marginBottom: "8px" }}>
                                Balcony Suite
                            </h3>
                            <p className="rlc-lc-worth-lead" style={{ marginBottom: "20px" }}>
                                Why?
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "Scenic Sun Lounge",
                                    "River views",
                                    "Excellent value",
                                    "Comfortable seating area",
                                    "Butler service"
                                ].map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box" style={{ marginTop: "24px" }}>
                                <p className="rlc-lc-worth-conclusion-text">
                                    While Standard Suites offer excellent value, the Balcony Suite delivers the signature Scenic experience most first-time guests are looking for.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={SuiteImage}
                                    alt="Scenic river cruise suite interior with river views"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Balcony Suite • Onboard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── TYPICAL DAY ──────────────────────────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="typical-day">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">What Is a Typical Day Like?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            The pace onboard is relaxed compared with large
                            ocean cruise ships.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Time of Day</th>
                                    <th>What to Expect</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { key: "morning", time: "Morning", activity: "Breakfast while sailing or before an excursion" },
                                    { key: "midmorning", time: "Mid-Morning", activity: "Guided Scenic Freechoice excursion" },
                                    { key: "afternoon", time: "Afternoon", activity: "Lunch onboard followed by additional sightseeing or free time" },
                                    { key: "evening", time: "Evening", activity: "Cocktails, gourmet dinner, entertainment, and overnight cruising" },
                                ].map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.time}</strong>
                                        </td>
                                        <td>{row.activity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── HOW FORMAL IS SCENIC ──────────────────────────────────────── */}
            <section className="rlc-inc-section" id="how-formal" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">How Formal Is Scenic?</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: "15px" }}></div>

                            <p
                                className="rlc-inc-intro"
                                style={{ margin: "0px", marginBottom: "30px" }}
                            >
                                Most evenings are considered smart casual.
                                You won't need tuxedos or evening gowns.
                                Comfort and elegance are the norm. Recommended
                                attire includes:
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Dresses",
                                    "Polo shirts",
                                    "Button-down shirts",
                                    "Slacks",
                                    "Comfortable walking shoes",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Shirt
                                                size={16}
                                                strokeWidth={3}
                                                className="rlc-inc-check-icon"
                                            />
                                        </span>
                                        <span className="rlc-inc-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={EveningImage}
                                        alt="Smart casual evening attire aboard a Scenic river cruise"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" >
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">First-Time Guest Guidance</span>
                            <h3 className="scenic-inline-cta-title-light">Booking Your First Scenic Cruise?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Take advantage of exclusive travel advisor promotions, complimentary cabin upgrades, and expert itinerary advice today.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Contact Angela Hughes
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">40+ Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO IS SCENIC BEST FOR ────────────────────────────────────── */}
            <section className="Asc-section" id="who-is-scenic-best-for" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Is Scenic Best For?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Scenic is ideal for travelers who enjoy a
                            particular style of vacation — but that doesn't
                            mean it's only for one type of traveler.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Scenic Is an Excellent Fit If You Enjoy...</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Luxury accommodations",
                                    "Personalized service",
                                    "Cultural experiences",
                                    "Fine dining",
                                    "Small ships",
                                    "Relaxed travel",
                                    "European history",
                                    "Wine and food",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Is Scenic Good for Younger Travelers?</h3>

                            <p style={{ marginBottom: "12px" }}>
                                Although many guests are retirees, Scenic
                                also attracts:
                            </p>

                            <ul className="Asc-who-list">
                                {[
                                    "Professionals",
                                    "Couples",
                                    "Honeymooners",
                                    "Multi-generational families",
                                    "Empty nesters",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p style={{ marginTop: "12px" }}>
                                If you appreciate luxury over nightlife,
                                you'll likely enjoy Scenic regardless of age.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PACKING TIPS ──────────────────────────────────────────────── */}
            <section className="scenic-bento-section" id="packing-tips">
                <div className="scenic-bento-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Packing Tips</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Packing light makes moving between destinations easier. Bring:
                        </p>
                    </div>

                    <div className="scenic-bento-grid">
                        {/* Card 1: List of Packing Items */}
                        <div className="scenic-bento-card">
                            <div>
                                <h3 className="scenic-bento-items-title">Essential Gear & Clothing</h3>
                                <div className="scenic-bento-items-grid">
                                    {[
                                        "Comfortable walking shoes",
                                        "Layers for changing weather",
                                        "Lightweight rain jacket",
                                        "Daypack",
                                        "Passport",
                                        "Universal power adapter",
                                        "Casual evening attire",
                                        "Sunglasses and sunscreen",
                                    ].map((item, i) => (
                                        <div key={i} className="scenic-bento-item">
                                            <span className="scenic-bento-item-icon-wrap">
                                                <CheckCircle size={16} strokeWidth={2.5} />
                                            </span>
                                            <span className="scenic-bento-item-label">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Animated CSS Image Placeholder Card */}
                        <div className="scenic-bento-image-placeholder">
                            <div className="scenic-bento-placeholder-icon-wrap">
                                <Backpack size={36} strokeWidth={1.5} />
                            </div>
                            <div className="scenic-bento-placeholder-text">
                                <span className="scenic-bento-placeholder-eyebrow">Essentials</span>
                                <h4 className="scenic-bento-placeholder-title">Pack Light • Travel Easy</h4>
                            </div>
                        </div>

                        {/* Card 3: Bottom Callout Card */}
                        <div className="scenic-bento-card scenic-bento-bottom-card">
                            <div className="scenic-bento-callout-content">
                                <div className="scenic-bento-callout-icon-wrap">
                                    <Shirt size={22} strokeWidth={2} />
                                </div>
                                <p className="scenic-bento-callout-text">
                                    Since most evenings are smart casual rather than formal, first-time guests can pack noticeably lighter than they might expect for a luxury vacation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMMON FIRST-TIME MISTAKES ────────────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes">
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common First-Time Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            A little planning goes a long way toward creating
                            a memorable experience. Avoid these common
                            errors:
                        </p>
                    </div>

                    <div className="scenic-exclusions-grid">
                        {[
                            "Waiting too long to book premium cabins",
                            "Choosing based only on price",
                            "Underestimating walking during excursions",
                            "Forgetting travel insurance",
                            "Packing formal wear you won't need",
                            "Ignoring seasonal differences",
                            "Not comparing itineraries",
                        ].map((item, i) => (
                            <div key={i} className="scenic-exclusion-card">
                                <div className="scenic-exclusion-icon-wrap">
                                    <X size={16} strokeWidth={2.5} className="scenic-exclusion-icon" />
                                </div>
                                <span className="scenic-exclusion-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ─────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">First-Time Guest Guidance</span>
                        <h2 className="Avr-planning-title">
                            Should You Book Through <br /> a Travel Advisor?
                        </h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Make Your First Cruise Smoother
                            </h3>
                            <p className="Avr-planning-left-body">
                                For many first-time guests, the answer is
                                yes. A luxury travel advisor can help you
                                compare itineraries, choose the best cabin,
                                explain promotions, recommend travel dates,
                                coordinate flights and hotels, arrange pre-
                                and post-cruise stays, and answer questions
                                before departure. Professional guidance can
                                make your first Scenic cruise smoother and
                                more enjoyable.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional guidance often saves both
                                    time and money.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Compass size={18} />, label: "Compare itineraries" },
                                    { icon: <Home size={18} />, label: "Choose the best cabin" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions" },
                                    { icon: <Calendar size={18} />, label: "Recommend travel dates" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and hotels" },
                                    { icon: <Landmark size={18} />, label: "Arrange pre- and post-cruise stays" },
                                    { icon: <Gem size={18} />, label: "Answer questions before departure" },
                                ].map((item, i) => (
                                    <div key={i} className="Avr-planning-benefit-card">
                                        <span className="Avr-planning-benefit-icon">{item.icon}</span>
                                        <span className="Avr-planning-benefit-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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
                                <p className="Adg-expert-role">CEO of Trips &amp; Ships Luxury Travel</p>
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
                                        { icon: <Award size={16} />, label: "CEO of Trips & Ships Luxury Travel" },
                                        { icon: <Star size={16} />, label: "Over 40 years in the travel industry" },
                                        { icon: <MapPin size={16} />, label: "Traveled to more than 121 countries" },
                                        { icon: <Award size={16} />, label: "Founder of Luxury Travel University" },
                                        { icon: <Users size={16} />, label: "Global luxury travel speaker and trainer" },
                                        { icon: <Users size={16} />, label: "Weekly industry columnist" },
                                        { icon: <Users size={16} />, label: "Travel Leaders Network Advisory Board member" },
                                        { icon: <Award size={16} />, label: "2024 Luxury Travel Influencer of the Year" },
                                        {
                                            icon: <Star size={16} />,
                                            label: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                                        },
                                        { icon: <Award size={16} />, label: "Featured in major travel publications globally" },
                                        {
                                            icon: <Ship size={16} />,
                                            label: "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
                                        },
                                    ].map((item, i) => (
                                        <div className="Adg-expert-list-item" key={i}>
                                            <span className="Adg-expert-list-icon">{item.icon}</span>
                                            <span className="Adg-expert-list-label">{item.label}</span>
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
                            Everything first-time travelers need to know
                            about Scenic River Cruises before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={ShipImage}
                        alt="Scenic ship sailing along a European river at dusk"
                        className="Asc-help-bg-img"
                    />
                    <div className="Asc-help-overlay"></div>
                </div>

                <div className="Asc-container">
                    <div className="Asc-help-card">
                        <div className="Asc-help-content">
                            <div className="Asc-help-header">
                                <span className="Asc-help-eyebrow">Final Verdict</span>
                                <h2 className="Asc-help-h2">
                                    A Confident Start <br /> to River Cruising
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        A Scenic River Cruise is one of the
                                        best introductions to luxury river
                                        cruising.

                                        {!readMoreVerdict && (
                                            <button
                                                onClick={() => setReadMoreVerdict(true)}
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

                                    {readMoreVerdict && (
                                        <>
                                            <br />
                                            <p className="Asc-help-intro">
                                                The combination of
                                                all-inclusive pricing,
                                                personalized butler service,
                                                elegant accommodations,
                                                immersive excursions, and
                                                exceptional dining creates a
                                                stress-free experience that's
                                                ideal for first-time
                                                travelers.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                If you're unsure where to
                                                begin, start with a Rhine or
                                                Danube itinerary and book a
                                                Balcony Suite. These options
                                                provide the classic Scenic
                                                experience and are
                                                consistently recommended for
                                                travelers new to river
                                                cruising.
                                                <button
                                                    onClick={() => setReadMoreVerdict(false)}
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
                                            Start Planning Your Scenic Cruise
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="Asc-help-list-box">
                                    <h3 className="Asc-help-list-title">
                                        Our first-time planning services include:
                                    </h3>

                                    <ul className="Asc-help-bullets">
                                        {[
                                            "Compare Scenic itineraries for beginners",
                                            "Recommend the best suite for your first cruise",
                                            "Explain promotions and limited-time offers",
                                            "Recommend the best travel dates",
                                            "Arrange flights and hotels",
                                            "Coordinate pre- and post-cruise stays",
                                            "Answer every question before departure",
                                            "Help you avoid common first-time mistakes",
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

export default FirstTimeScenicRiverCruiseGuide;