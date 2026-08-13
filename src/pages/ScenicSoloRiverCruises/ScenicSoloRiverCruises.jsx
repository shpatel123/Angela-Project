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
    Calendar,
    Landmark,
    X,
    FileText,
    Wallet,
    BadgePercent,
    Leaf,
    Wine,
    Utensils,
    CheckCircle,
    Heart,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic solo-traveler photography once
   available. Paths assume a new /assets/ScenicSoloTravel folder. */
// import HeroImage from "../../assets/ScenicSoloTravel/scenic-solo-hero.jpg";
// import SoloDiningImage from "../../assets/ScenicSoloTravel/scenic-solo-dining.jpg";
// import BalconySuiteImage from "../../assets/ScenicSoloTravel/scenic-balcony-suite.jpg";
// import ExcursionImage from "../../assets/ScenicSoloTravel/scenic-solo-excursion.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";
import "../VikingCruises/VikingCruises.css";
import "../AzamaraDiningGuide/AzamaraDiningGuide.css";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.tripsandships.com/#organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com/",
            logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        },
        {
            "@type": "TravelAgency",
            "@id": "https://www.tripsandships.com/#travelagency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com/",
            description:
                "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences.",
        },
        {
            "@type": "Person",
            "@id": "https://www.tripsandships.com/#person",
            name: "Angela Hughes",
            jobTitle: "CEO of Trips & Ships Luxury Travel",
            description:
                "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#webpage",
            name: "Scenic Solo River Cruises & Single Supplement Guide (2026)",
            url: "https://www.tripsandships.com/scenic-river-cruises/solo-travel",
            description:
                "Thinking about taking a Scenic River Cruise alone? Learn about solo travel, single supplements, cabin options, safety, costs, and tips for booking the best Scenic solo cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#article",
            headline: "Scenic Solo River Cruises & Single Supplement Guide",
            description:
                "A complete guide to solo travel on Scenic River Cruises, including single supplements, cabin recommendations, best itineraries, safety, dining, and money-saving tips.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#breadcrumb",
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
                    name: "Riverside Luxury Cruises",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Scenic Solo River Cruises & Single Supplement Guide",
                    item: "https://www.tripsandships.com/scenic-river-cruises/solo-travel",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#itemlist",
            name: "Scenic Solo River Cruises & Single Supplement Guide — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Is Scenic Good for Solo Travelers?" },
                { "@type": "ListItem", position: 3, name: "What Is a Single Supplement?" },
                { "@type": "ListItem", position: 4, name: "How to Save Money as a Solo Traveler" },
                { "@type": "ListItem", position: 5, name: "Which Cabin Should Solo Travelers Choose?" },
                { "@type": "ListItem", position: 6, name: "Best Scenic Itineraries for Solo Travelers" },
                { "@type": "ListItem", position: 7, name: "Who Should Take a Solo Scenic Cruise?" },
                { "@type": "ListItem", position: 8, name: "Included Excursions Make Solo Travel Easy" },
                { "@type": "ListItem", position: 9, name: "Dining & Safety for Solo Travelers" },
                { "@type": "ListItem", position: 10, name: "Common Solo Travel Mistakes" },
                { "@type": "ListItem", position: 11, name: "Scenic vs. Other River Cruise Lines for Solo Travelers" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 13, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic good for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic's small ships, personalized service, and included excursions make it an excellent option for solo travelers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic charge a single supplement?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Usually yes. Most solo travelers pay a single supplement because cabins are designed for double occupancy.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic ever waive the single supplement?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic occasionally offers reduced or waived single supplements on select sailings and promotional departures.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic itinerary is best for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhine and Danube are excellent choices thanks to their popular itineraries, cultural attractions, and welcoming onboard atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Will I feel awkward dining alone?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Scenic offers flexible dining and many solo travelers naturally meet others during meals and excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic safe for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Guided excursions, organized transportation, secure ships, and experienced staff provide a comfortable and safe travel experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cabin should a solo traveler choose?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A Balcony Suite offers excellent comfort and Scenic's signature Sun Lounge, while a Standard Suite is a more budget-friendly option.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a travel advisor help me find solo promotions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Luxury travel advisors often know about reduced single supplement offers and can help you compare available departures.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I arrive before embarkation day?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Arriving at least one day early helps reduce stress caused by international flight delays.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic's included Scenic Freechoice excursions and Scenic Enrich experiences are available to all guests.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic better than an ocean cruise for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many travelers prefer Scenic because of its smaller ships, easier social atmosphere, and destination-focused experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book my Scenic solo cruise through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A travel advisor can help you compare itineraries, identify solo promotions, coordinate travel arrangements, and maximize the value of your cruise.",
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
            q: "Is Scenic good for solo travelers?",
            a: "Yes. Scenic's small ships, personalized service, and included excursions make it an excellent option for solo travelers.",
        },
        {
            q: "Does Scenic charge a single supplement?",
            a: "Usually yes. Most solo travelers pay a single supplement because cabins are designed for double occupancy.",
        },
        {
            q: "Does Scenic ever waive the single supplement?",
            a: "Scenic occasionally offers reduced or waived single supplements on select sailings and promotional departures.",
        },
        {
            q: "Which Scenic itinerary is best for solo travelers?",
            a: "The Rhine and Danube are excellent choices thanks to their popular itineraries, cultural attractions, and welcoming onboard atmosphere.",
        },
        {
            q: "Will I feel awkward dining alone?",
            a: "No. Scenic offers flexible dining and many solo travelers naturally meet others during meals and excursions.",
        },
        {
            q: "Is Scenic safe for solo travelers?",
            a: "Yes. Guided excursions, organized transportation, secure ships, and experienced staff provide a comfortable and safe travel experience.",
        },
        {
            q: "Which cabin should a solo traveler choose?",
            a: "A Balcony Suite offers excellent comfort and Scenic's signature Sun Lounge, while a Standard Suite is a more budget-friendly option.",
        },
        {
            q: "Can a travel advisor help me find solo promotions?",
            a: "Yes. Luxury travel advisors often know about reduced single supplement offers and can help you compare available departures.",
        },
        {
            q: "Should I arrive before embarkation day?",
            a: "Yes. Arriving at least one day early helps reduce stress caused by international flight delays.",
        },
        {
            q: "Are excursions included for solo travelers?",
            a: "Yes. Scenic's included Scenic Freechoice excursions and Scenic Enrich experiences are available to all guests.",
        },
        {
            q: "Is Scenic better than an ocean cruise for solo travelers?",
            a: "Many travelers prefer Scenic because of its smaller ships, easier social atmosphere, and destination-focused experiences.",
        },
        {
            q: "Should I book my Scenic solo cruise through a travel advisor?",
            a: "Yes. A travel advisor can help you compare itineraries, identify solo promotions, coordinate travel arrangements, and maximize the value of your cruise.",
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

/* ── Quick Answer Emphasis Data ────────────────────────────────────── */
const quickAnswerEmphasis = [
    "Small luxury ships",
    "Friendly, social atmosphere",
    "Included excursions",
    "Butler service",
    "Safe European destinations",
    "Flexible dining",
];

/* ── Solo Travel at a Glance Data ──────────────────────────────────── */
const glanceData = [
    { key: "ships", occasion: "Ship Size", attire: "Boutique Space-Ships, typically around 150 guests" },
    { key: "atmosphere", occasion: "Atmosphere", attire: "Intimate and social, easy to meet fellow travelers" },
    { key: "service", occasion: "Service", attire: "Personalized butler service for every guest" },
    { key: "supplement", occasion: "Single Supplement", attire: "Usually applies, though occasionally reduced or waived on select sailings" },
];

/* ── Single Supplement Factors Data ────────────────────────────────── */
const supplementFactors = ["Itinerary", "Travel season", "Cabin category", "Promotional offers", "Availability"];

/* ── Balcony Suite Benefits Data ───────────────────────────────────── */
const balconySuiteBenefits = ["Scenic Sun Lounge", "Comfortable seating", "Beautiful river views", "Plenty of natural light", "Excellent value"];

/* ── Best Scenic Itineraries for Solo Travelers Data ───────────────── */
const soloItineraries = [
    {
        id: "rhine-river",
        title: "Rhine River — Best Overall",
        badge: "Rhine River",
        icon: Compass,
        desc: "Why? Iconic scenery, popular itinerary, excellent mix of guests, charming villages, castles, and easy-paced sightseeing.",
        columns: [
            {
                label: "Why Choose the Rhine?",
                items: [
                    "Iconic scenery and historic castles",
                    "Extremely popular itinerary",
                    "Excellent mix of guests",
                    "Charming villages and easy-paced sightseeing"
                ],
            },
        ],
    },
    {
        id: "danube-river",
        title: "Danube River — Perfect for Culture",
        badge: "Danube River",
        icon: Ship,
        desc: "Perfect for: History lovers, first-time visitors to Europe, cultural experiences, and classical music.",
        columns: [
            {
                label: "Perfect for:",
                items: [
                    "History lovers",
                    "First-time visitors to Europe",
                    "Cultural experiences",
                    "Classical music"
                ],
            },
        ],
    },
    {
        id: "rhone-river",
        title: "Rhône River — Ideal for Food & Wine",
        badge: "Rhône River",
        icon: Wine,
        desc: "Ideal for: Food lovers, wine enthusiasts, and French culture.",
        columns: [
            {
                label: "Ideal for:",
                items: [
                    "Food lovers",
                    "Wine enthusiasts",
                    "French culture"
                ],
            },
        ],
    },
    {
        id: "douro-river",
        title: "Douro River — Best for Relaxation",
        badge: "Douro River",
        icon: Leaf,
        desc: "Best for: Relaxation, boutique experiences, and scenic landscapes.",
        columns: [
            {
                label: "Best for:",
                items: [
                    "Relaxation",
                    "Boutique experiences",
                    "Scenic landscapes"
                ],
            },
        ],
    },
];

;

/* ── Common Solo Travel Mistakes Data ──────────────────────────────── */
const commonMistakes = [
    "Waiting too long to book reduced single supplement offers",
    "Assuming every departure has the same pricing",
    "Choosing solely based on the lowest fare",
    "Skipping travel insurance",
    "Not arriving one day before embarkation",
    "Forgetting to compare itineraries",
];

/* ── Scenic vs Other River Cruise Lines Data ───────────────────────── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "Small luxury ships, butler service, occasional solo promotions" },
    { key: "viking", scenic: "Viking", ocean: "Popular with solo travelers, limited solo offers" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Frequent solo promotions on select sailings" },
    { key: "riverside", scenic: "Riverside", ocean: "Boutique luxury atmosphere" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Elegant ships and immersive cultural experiences" },
    { key: "tauck", scenic: "Tauck", ocean: "Inclusive guided travel with smaller groups" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicSoloRiverCruisesSingleSupplement = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("rhine-river");

    const currentItinerary =
        soloItineraries.find((f) => f.id === activeItinerary) || soloItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Solo River Cruises &amp; Single Supplement Guide</title>
                <meta name="title" content="Scenic Solo River Cruises | Single Supplement Guide" />
                <meta
                    name="description"
                    content="Thinking about taking a Scenic River Cruise alone? Learn about solo travel, single supplements, cabin options, safety, costs, and tips for booking the best Scenic solo cruise."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Solo River Cruises <br /> &amp; Single Supplement Guide</h1>

                    <p>
                        Traveling solo has become one of the fastest-growing
                        trends in luxury travel, and river cruising offers
                        one of the easiest and safest ways to explore Europe
                        independently. If you're considering a Scenic River
                        Cruise as a solo traveler, you may be wondering
                        whether it's worth the investment, how single
                        supplements work, and whether you'll feel
                        comfortable traveling on your own.
                    </p>

                    {readMore && (
                        <p>
                            The good news is that Scenic's intimate ships,
                            personalized service, included excursions, and
                            welcoming atmosphere make it an excellent option
                            for independent travelers. Whether you're
                            celebrating a milestone, recently retired, or
                            simply enjoy traveling at your own pace, Scenic
                            offers a relaxed and enriching experience
                            without the crowds of larger ocean ships. This
                            guide explains everything solo travelers should
                            know before booking a Scenic River Cruise.
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
                            Start Planning Your Solo Scenic Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Solo Travel: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time — Scenic is an excellent choice for solo travelers
                        </p>

                        <ul className="rlc-qa-list">
                            {quickAnswerEmphasis.map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Single supplements usually apply, although
                            Scenic occasionally offers reduced or waived
                            single supplement promotions on select sailings.
                            Our Recommendation: Book early and work with a
                            luxury travel advisor to find itineraries with
                            the lowest single supplement or special solo
                            traveler offers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC GOOD FOR SOLO TRAVELERS? ────────────────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="is-scenic-good-solo">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Is Scenic Good for Solo Travelers?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Absolutely. Unlike large ocean cruise ships carrying thousands of guests, Scenic's boutique-sized Space-Ships typically welcome around 150 guests. This creates a more intimate atmosphere where it's easy to meet fellow travelers while still enjoying your independence.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Personalized butler service",
                                "Smaller group excursions",
                                "Relaxed onboard atmosphere",
                                "Flexible dining",
                                "Friendly crew who quickly learn your preferences",
                                "Comfortable public lounges for socializing or relaxing"
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
                                        Whether you prefer joining group activities or enjoying quiet time with a book and a river view, Scenic offers plenty of flexibility.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '200px' }}>
                                <Users size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Scenic Boutique Space-Ships
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS A SINGLE SUPPLEMENT? ──────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="single-supplement" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">What Is a Single Supplement?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                A single supplement is an additional charge
                                applied when one person occupies a cabin
                                designed for two guests. River cruise cabins
                                are generally priced based on double
                                occupancy, so solo travelers often pay more
                                than half the cruise fare. The exact
                                supplement varies depending on:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {supplementFactors.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <FileText size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Scenic occasionally offers reduced or
                                    waived single supplements on select
                                    sailings, making solo travel more
                                    affordable.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={SoloDiningImage}
                                    alt="Solo traveler enjoying a river view aboard a Scenic ship"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Independent Travel • Made Easy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW TO SAVE MONEY AS A SOLO TRAVELER ──────────────────────── */}
            <section className="scenic-diff-section" id="how-to-save-money-solo" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-diff-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">How to Save Money as a <br /> Solo Traveler</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            There are several ways to reduce the cost of traveling alone:
                        </p>
                    </div>

                    <div className="scenic-diff-grid">
                        {[
                            {
                                id: "book-early",
                                title: "Book Early",
                                icon: Calendar,
                                desc: "The best promotions and cabin availability are often available well in advance.",
                            },
                            {
                                id: "promotions",
                                title: "Watch for Single Supplement Promotions",
                                icon: BadgePercent,
                                desc: "These promotions are especially valuable on select departures.",
                                listTitle: "Scenic periodically offers:",
                                items: [
                                    "Reduced supplements",
                                    "Waived supplements",
                                    "Limited-time solo traveler offers",
                                ],
                            },
                            {
                                id: "shoulder-season",
                                title: "Consider Shoulder Season",
                                icon: Leaf,
                                desc: "Traveling during spring or fall may provide better pricing and more promotional availability than peak summer departures.",
                            },
                            {
                                id: "advisor",
                                title: "Work With a Luxury Travel Advisor",
                                icon: Users,
                                desc: "A travel advisor can help find and compare available departures to secure the best value.",
                                listTitle: "A travel advisor can help identify:",
                                items: [
                                    "Solo traveler offers",
                                    "Best-value itineraries",
                                    "Cabin recommendations",
                                    "Current promotions",
                                ],
                            },
                        ].map((item) => {
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
                                                            <CheckCircle size={14} className="Asc-icon-green" style={{ color: "var(--navy)" }} />
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
                        <h3 className="scenic-inline-cta-title-dark">Wondering About Single Supplements?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you find reduced or waived single supplement offers on select Scenic sailings.
                        </p>
                    </div>
                    <div className="scenic-inline-cta-action-dark">
                        <Link to="/contact" className="scenic-inline-cta-btn-dark" style={{ textDecoration: "none" }}>
                            Get a Custom Quote
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>



            {/* ── BEST SCENIC ITINERARIES FOR SOLO TRAVELERS ────────────────── */}
            <section className="luc-destinations-section" id="solo-itineraries">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Itineraries for Solo Travelers</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            These river cruise routes offer exceptional experiences and welcoming environments for independent guests.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {soloItineraries.map((item) => {
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
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveItineraryIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
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
                                {currentItinerary.columns.map((col, cIdx) => (
                                    <div key={cIdx} className="luc-dest-info-col">
                                        <span className="luc-dest-info-label">{col.label}</span>
                                        <div className="luc-dest-items-grid">
                                            {col.items.map((bullet, bIdx) => (
                                                <div key={bIdx} className="luc-dest-item">
                                                    <div className="luc-dest-item-dot"></div>
                                                    <span className="luc-dest-item-text">{bullet}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                 {/* ── DINING & ACTIVITIES FOR SOLO TRAVELERS ───────────────────── */}
            <section
                className="dve-winner-section"
                id="dining-activities-solo"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Dining &amp; Excursions for Solo Travelers
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            Scenic is designed to make solo travel natural, welcoming, and completely hassle-free.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Dining as a Solo Traveler */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Utensils size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Dining onboard
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Dining as a Solo Traveler
                                </h3>

                                <p className="dve-winner-intro">
                                    One of the biggest concerns for first-time solo cruisers is dining alone. Fortunately, Scenic creates a welcoming atmosphere.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">
                                    You'll Find:
                                </h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Flexible dining",
                                        "Friendly staff",
                                        "Opportunities to dine with other guests",
                                        "Comfortable tables for solo diners",
                                        "Relaxed conversation",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="dve-winner-intro" style={{ marginTop: "20px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
                                    Many solo travelers report making new friends during meals and excursions.
                                </p>
                            </div>
                        </div>

                        {/* Included Excursions */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Compass size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Daily Excursions
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Included Excursions Make Solo Travel Easy
                                </h3>

                                <p className="dve-winner-intro">
                                    Because Scenic includes many daily excursions, you don't need to worry about arranging independent sightseeing.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">
                                    Popular Experiences Include:
                                </h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Walking tours",
                                        "Wine tastings",
                                        "Castle visits",
                                        "Museums",
                                        "Scenic drives",
                                        "Local cultural performances",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="dve-winner-intro" style={{ marginTop: "20px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
                                    These excursions provide natural opportunities to meet fellow travelers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH CABIN SHOULD SOLO TRAVELERS CHOOSE? ─────────────────── */}
            <section className="rlc-lc-worth-section" id="cabin-choice">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Which Cabin Should Solo Travelers Choose?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Many solo travelers choose a Balcony Suite because it offers:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {balconySuiteBenefits.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    If your budget is more important than
                                    extra space, a Standard Suite can also
                                    be a comfortable choice.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={BalconySuiteImage}
                                    alt="Balcony Suite with Scenic Sun Lounge aboard a Scenic river cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Balcony Suite • Scenic Sun Lounge</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Solo Travel, Simplified</span>
                            <h3 className="scenic-inline-cta-title-light">Included Excursions Make Solo Travel Easy</h3>
                            <p className="scenic-inline-cta-text-light">
                                Because Scenic includes many daily excursions—walking tours, wine tastings, castle visits, museums, scenic drives, and local cultural performances—you don't need to worry about arranging independent sightseeing, and you'll have natural opportunities to meet fellow travelers.
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

            {/* ── IS SCENIC SAFE FOR SOLO TRAVELERS? ────────────────────────── */}
            <section
                className="ugt-components-section"
                id="is-scenic-safe"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Is Scenic Safe for Solo Travelers?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "340px", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)" }}>
                                    <ShieldCheck size={64} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "20px" }} strokeWidth={1.2} />
                                    <span style={{ fontFamily: "var(--font-display)", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px" }}>
                                        Safe &amp; Secure Travel
                                    </span>
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Scenic is considered one of the safest ways to explore Europe independently because:
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Why Scenic is safe:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Guided excursions",
                                            "Organized transportation",
                                            "Secure ship access",
                                            "Experienced crew",
                                            "English-speaking staff",
                                            "Carefully planned itineraries",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <CheckCircle size={16} className="ugt-question-icon" style={{ color: "var(--navy)" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="ugt-component-text" style={{ marginTop: "20px", fontStyle: "italic", color: "var(--text-muted)", fontSize: "14.5px" }}>
                                    Many guests feel more comfortable traveling solo on a river cruise than organizing multiple hotels and transportation independently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD TAKE A SOLO SCENIC CRUISE? ─────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: 'var(--bg-soft)' }} id="who-should-go">
                <div className="adg-container">
                    <div className="adg-section-header" style={{ marginBottom: "60px" }}>
                        <h2 className="adg-h2">Who Should Take a Solo Scenic Cruise?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div
                        className="adg-split-layout"
                        style={{ alignItems: "flex-start" }}
                    >
                        <div className="adg-content-card-side">
                            <div className="adg-side-image" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "470px", border: '1px solid var(--navy-border)', borderRadius: 'var(--radius-lg)', marginBottom: "20px" }}>
                                <Users size={56} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                            </div>

                            <div className="adg-info-card">
                                <div className="adg-card-meta">
                                    <Heart size={28} style={{ color: "var(--navy)" }} />
                                    <span className="adg-meta-label">
                                        Solo Luxury River Cruising
                                    </span>
                                </div>

                                <p className="adg-card-lead">
                                    If you value cultural experiences, personalized service, and a relaxed pace, Scenic is an excellent choice.
                                </p>
                            </div>
                        </div>

                        <div className="adg-list-side">
                            {[
                                {
                                    title: "Retirees",
                                    icon: <Users size={20} />,
                                },
                                {
                                    title: "Empty nesters",
                                    icon: <Home size={20} />,
                                },
                                {
                                    title: "Widows and widowers",
                                    icon: <Heart size={20} />,
                                },
                                {
                                    title: "Professionals",
                                    icon: <Award size={20} />,
                                },
                                {
                                    title: "Luxury travelers",
                                    icon: <Sparkles size={20} />,
                                },
                                {
                                    title: "Food and wine enthusiasts",
                                    icon: <Wine size={20} />,
                                },
                                {
                                    title: "First-time solo international travelers",
                                    icon: <Plane size={20} />,
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

            {/* ── COMMON SOLO TRAVEL MISTAKES ───────────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Solo Travel Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Planning ahead can help you maximize value and
                            minimize stress. Avoid these common errors.
                        </p>
                    </div>

                    <div className="scenic-exclusions-grid">
                        {commonMistakes.map((item, i) => (
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

            
            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Solo Travel, Elevated</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Explore the World Independently?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us help you find the best single supplement promotions, select the ideal cabin, and coordinate a seamless luxury river cruise.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Plan Your Solo Scenic Cruise
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">Solo Cruise Expert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC VS OTHER RIVER CRUISE LINES ────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="cruise-line-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs. Other River Cruise <br /> Lines for Solo Travelers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Scenic stands out for its personalized service
                            and intimate onboard atmosphere, though solo
                            travelers should compare current promotions
                            across cruise lines.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Solo Traveler Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.scenic}</strong>
                                        </td>
                                        <td>{row.ocean}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Solo Travelers Benefit Even More From Professional Guidance
                            </h3>
                            <p className="Avr-planning-left-body">
                                Solo travelers often benefit even more from
                                professional guidance. A luxury travel
                                advisor can help you find reduced single
                                supplement offers, recommend the best
                                itinerary, compare cabin categories,
                                coordinate flights and hotels, arrange
                                airport transfers, explain cancellation
                                policies, and match you with the best
                                departure dates.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    This can save both money and time while
                                    reducing travel stress.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Wallet size={18} />, label: "Find reduced single supplement offers" },
                                    { icon: <MapPinned size={18} />, label: "Recommend the best itinerary" },
                                    { icon: <Ship size={18} />, label: "Compare cabin categories" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and hotels" },
                                    { icon: <Home size={18} />, label: "Arrange airport transfers" },
                                    { icon: <FileText size={18} />, label: "Explain cancellation policies" },
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
                            Everything solo travelers need to know before
                            booking a Scenic River Cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={ExcursionImage}
                        alt="Solo traveler exploring a European village on a Scenic river cruise excursion"
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
                                    A Comfortable, Enriching <br /> Way to Travel Alone
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic is one of the best luxury
                                        river cruise lines for solo
                                        travelers seeking comfort, safety,
                                        and enriching experiences. While
                                        single supplements can increase the
                                        overall cost, the cruise line's
                                        intimate ships, exceptional service,
                                        and included excursions make
                                        traveling alone both enjoyable and
                                        rewarding.

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
                                                If you're planning your first
                                                solo river cruise, the Rhine
                                                or Danube itineraries paired
                                                with a Balcony Suite provide
                                                an excellent introduction to
                                                Scenic's luxury experience.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Booking early and working
                                                with a knowledgeable travel
                                                advisor can also help you
                                                secure the best value. At
                                                Trips &amp; Ships Luxury
                                                Travel, we'll help you plan
                                                every detail of your solo
                                                Scenic cruise.
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
                                            Start Planning Your Solo Scenic Cruise
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
                                            "Find reduced single supplement offers",
                                            "Recommend the best itinerary",
                                            "Compare cabin categories",
                                            "Coordinate flights and hotels",
                                            "Arrange airport transfers",
                                            "Explain cancellation policies",
                                            "Match you with the best departure dates",
                                            "Compare Scenic with other luxury lines",
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

export default ScenicSoloRiverCruisesSingleSupplement;