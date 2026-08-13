import { useState } from "react";
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
    Sparkles,
    Ship,
    Landmark,
    Wine,
    Wind,
    Camera,
    Home,
    Hotel,
    Plane,
    BadgePercent,
    ShieldCheck,
    Compass,
    Anchor,
    Utensils,
    Sun,
    Gem,
    Coffee,
    Wifi,
    HandCoins,
    Music2,
    Dumbbell,
    Bed,
    CheckCircle,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic River Cruises Included Guide
   photography once available. Paths assume a new
   /assets/ScenicRiverCruisesIncludedGuide folder. */
// import HeroImage from "../../assets/ScenicRiverCruisesIncludedGuide/scenic-included-hero.jpg";
// import SuiteImage from "../../assets/ScenicRiverCruisesIncludedGuide/scenic-included-suite.jpg";
// import ButlerImage from "../../assets/ScenicRiverCruisesIncludedGuide/scenic-included-butler.jpg";
// import DiningImage from "../../assets/ScenicRiverCruisesIncludedGuide/scenic-included-dining.jpg";
// import WineImage from "../../assets/ScenicRiverCruisesIncludedGuide/scenic-included-wine.jpg";
// import ExcursionImage from "../../assets/ScenicRiverCruisesIncludedGuide/scenic-included-excursion.jpg";
// import CTAImage from "../../assets/ScenicRiverCruisesIncludedGuide/scenic-included-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../../pages/RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../../pages/ScenicRiverCruises/ScenicRiverCruises.css";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#webpage",
            name: "What Is Included on a Scenic River Cruise? | Complete Guide (2026)",
            url: "https://www.tripsandships.com/scenic-river-cruises/what-is-included",
            description:
                "Discover what's included on a Scenic River Cruise, from butler service and gourmet dining to premium drinks, excursions, airport transfers, gratuities, and luxury amenities.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#article",
            headline: "What Is Included on a Scenic River Cruise? | All-Inclusive Luxury Guide",
            description:
                "A complete breakdown of everything included on a Scenic River Cruise — suites, butler service, dining, beverages, excursions, transfers, gratuities, and more.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#breadcrumb",
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
                    name: "What Is Included on a Scenic River Cruise?",
                    item: "https://www.tripsandships.com/scenic-river-cruises/what-is-included",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#itemlist",
            name: "What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "What's Included at a Glance" },
                { "@type": "ListItem", position: 3, name: "Luxury Suite Accommodations" },
                { "@type": "ListItem", position: 4, name: "Butler Service" },
                { "@type": "ListItem", position: 5, name: "Gourmet Dining" },
                { "@type": "ListItem", position: 6, name: "Premium Beverages" },
                { "@type": "ListItem", position: 7, name: "Scenic Freechoice & Scenic Enrich" },
                { "@type": "ListItem", position: 8, name: "Airport Transfers & Wi-Fi" },
                { "@type": "ListItem", position: 9, name: "Gratuities" },
                { "@type": "ListItem", position: 10, name: "Entertainment & Wellness" },
                { "@type": "ListItem", position: 11, name: "What's Not Usually Included" },
                { "@type": "ListItem", position: 12, name: "Is Scenic Really All-Inclusive?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Are drinks included on Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Premium wines, beer, spirits, cocktails, coffee, tea, soft drinks, and bottled water are generally included throughout your cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is butler service included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Every Scenic suite includes personalized butler service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic Freechoice excursions and Scenic Enrich experiences are included on most itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Wi-Fi included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Complimentary Wi-Fi is available throughout the ship.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are gratuities included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Onboard gratuities are included in your cruise fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are airport transfers included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, on eligible itineraries and qualifying flight arrangements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are specialty restaurants included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes gourmet dining and specialty culinary experiences available on your ship.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do I need to pay extra onboard?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most major expenses are already included, though optional spa treatments, premium shopping, and certain specialty experiences may cost extra.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic more inclusive than other river cruise lines?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is considered one of the most all-inclusive luxury river cruise lines, with more amenities included than many competitors.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are laundry services included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Complimentary laundry service is included for select suite categories (such as Royal Suites and Balcony Suites) on Scenic River Cruises, and laundry arrangements can be handled directly by your butler.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are bicycles or e-bikes included for exploring ports?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic space-ships carry a fleet of complimentary electronically-assisted bicycles (e-bikes) for guests to use either on guided excursions or for independent exploration.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can explain inclusions, compare itineraries, recommend the best suite, and ensure you receive the best available value.",
                    },
                },
            ],
        },
    ],
};

/* ── FAQ Accordion ─────────────────────────────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "Are drinks included on Scenic River Cruises?",
            a: "Yes. Premium wines, beer, spirits, cocktails, coffee, tea, soft drinks, and bottled water are generally included throughout your cruise.",
        },
        {
            q: "Is butler service included?",
            a: "Yes. Every Scenic suite includes personalized butler service.",
        },
        {
            q: "Are excursions included?",
            a: "Yes. Scenic Freechoice excursions and Scenic Enrich experiences are included on most itineraries.",
        },
        {
            q: "Is Wi-Fi included?",
            a: "Yes. Complimentary Wi-Fi is available throughout the ship.",
        },
        {
            q: "Are gratuities included?",
            a: "Yes. Onboard gratuities are included in your cruise fare.",
        },
        {
            q: "Are airport transfers included?",
            a: "Yes, on eligible itineraries and qualifying flight arrangements.",
        },
        {
            q: "Are specialty restaurants included?",
            a: "Yes. Scenic includes gourmet dining and specialty culinary experiences available on your ship.",
        },
        {
            q: "Do I need to pay extra onboard?",
            a: "Most major expenses are already included, though optional spa treatments, premium shopping, and certain specialty experiences may cost extra.",
        },
        {
            q: "Is Scenic more inclusive than other river cruise lines?",
            a: "Scenic is considered one of the most all-inclusive luxury river cruise lines, with more amenities included than many competitors.",
        },
        {
            q: "Are laundry services included?",
            a: "Yes. Complimentary laundry service is included for select suite categories (such as Royal Suites and Balcony Suites) on Scenic River Cruises, and laundry arrangements can be handled directly by your butler.",
        },
        {
            q: "Are bicycles or e-bikes included for exploring ports?",
            a: "Yes. Scenic space-ships carry a fleet of complimentary electronically-assisted bicycles (e-bikes) for guests to use either on guided excursions or for independent exploration.",
        },
        {
            q: "Should I use a travel advisor?",
            a: "Yes. A luxury travel advisor can explain inclusions, compare itineraries, recommend the best suite, and ensure you receive the best available value.",
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

/* ── What's Included at a Glance Data ────────────────────────────── */
const glanceData = [
    { key: "suite", label: "Luxury Suite" },
    { key: "butler", label: "Butler Service" },
    { key: "dining", label: "Gourmet Dining" },
    { key: "meals", label: "Breakfast, Lunch & Dinner" },
    { key: "bev", label: "Premium Beverages" },
    { key: "coffee", label: "Coffee & Tea" },
    { key: "wifi", label: "Wi-Fi" },
    { key: "grat", label: "Gratuities" },
    { key: "freechoice", label: "Scenic Freechoice Excursions" },
    { key: "enrich", label: "Scenic Enrich Experiences" },
    { key: "transfers", label: "Airport Transfers" },
    { key: "fitness", label: "Fitness Center" },
    { key: "entertainment", label: "Daily Entertainment" },
];

/* ── Not Usually Included Data ───────────────────────────────────── */
const notIncludedData = [
    "Travel insurance",
    "Spa treatments",
    "Personal shopping",
    "Premium shore excursions beyond the included program",
    "Independent sightseeing expenses",
    "Passport and visa fees",
];

/* ── Main Component ──────────────────────────────────────────────── */
const WhatsIncludedScenicRiverCruise = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuite, setReadMoreSuite] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>What Is Included on a Scenic River Cruise? | Complete Guide</title>
                <meta name="title" content="What Is Included on Scenic River Cruises? | All-Inclusive Luxury Guide" />
                <meta
                    name="description"
                    content="Discover what's included on a Scenic River Cruise, from butler service and gourmet dining to premium drinks, excursions, airport transfers, gratuities, and luxury amenities."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>What Is Included on <br /> a Scenic River Cruise?</h1>

                    <p>
                        One of the biggest reasons travelers choose Scenic
                        River Cruises is its truly all-inclusive luxury
                        experience. Unlike many cruise lines that charge extra
                        for beverages, gratuities, excursions, or airport
                        transfers, Scenic includes most of these amenities in
                        the upfront cruise fare.
                    </p>

                    {readMore && (
                        <p>
                            This means you can relax and enjoy your vacation
                            without constantly thinking about additional
                            costs. If you're wondering exactly what's
                            included — and what may cost extra — this guide
                            covers everything you need to know before booking
                            your Scenic River Cruise.
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

            {/* ── QUICK ANSWER ─────────────────────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="quick-answer">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Quick Answer</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            A Scenic River Cruise typically includes the
                            following amenities in the upfront fare.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Luxury suite accommodations",
                                "Butler service for every suite",
                                "Gourmet dining",
                                "Premium alcoholic and non-alcoholic beverages",
                                "Scenic Freechoice excursions",
                                "Scenic Enrich exclusive experiences",
                                "Airport transfers",
                                "Wi-Fi",
                                "Gratuities",
                                "Daily entertainment",
                                "Fitness facilities",
                                "Luxury coach transportation during included excursions",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <CheckCircle size={16} strokeWidth={2.5} />
                                    </span>
                                    <span>{label}</span>
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
                                        Scenic is widely regarded as one of the most comprehensive all-inclusive luxury river cruise lines available today.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: '78vh' }}>
                                <img
                                    // src={ScenicShipLuxury}
                                    alt="Luxury Scenic river cruise ship and suite"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        All-Inclusive Luxury • Seamless Travel
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED AT A GLANCE ──────────────────────────────── */}
            <section className="adg-section" id="glance" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">What's Included at a Glance</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Included Feature</th>
                                    <th>Included?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.label}</strong>
                                        </td>
                                        <td>
                                            <Check size={16} strokeWidth={3} style={{ color: "var(--accent, var(--navy))" }} /> Yes
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── LUXURY SUITE ACCOMMODATIONS ──────────────────────────────── */}
            <section className="luc-why-section" id="luxury-suite-accommodations">
                <div className="luc-why-container">
                    <div className="luc-why-images luc-why-images-custom" style={{ height: "auto" }}>
                        <div
                            className="luc-why-img-main-wrap luc-why-img-main-wrap-custom"
                            style={{
                                color: "#fff",
                                position: "relative",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "380px",
                                marginTop: "105px",
                            }}
                        >
                            <img
                                // src={SuiteImage}
                                alt="Luxury suite aboard a Scenic river cruise ship"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Luxury Suite Accommodations</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            Every Scenic River Cruise includes elegant
                            accommodations designed for comfort and
                            relaxation. Scenic suites are among the most
                            spacious and comfortable in European river
                            cruising.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "Scenic Sun Lounge",
                                "King-size Scenic Slumber Bed",
                                "Marble bathroom",
                                "Rain shower",
                                "Premium bath amenities",
                                "Flat-screen television",
                                "Mini-bar",
                                "Climate control",
                                "Luxury linens",
                                "Complimentary bottled water",
                            ]
                                .slice(0, readMoreSuite ? 10 : 4)
                                .map((label, i) => (
                                    <div key={i} className="luc-why-feature">
                                        <div className="luc-why-feature-num">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <div className="luc-why-feature-body">
                                            <p className="luc-why-feature-desc">{label}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div
                            className="Scenic_readmore_wrapper"
                            style={{ marginTop: "25px", textAlign: "left" }}
                        >
                            <button
                                className="Scenic_readmore_btn"
                                onClick={() => setReadMoreSuite(!readMoreSuite)}
                            >
                                {readMoreSuite ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUTLER SERVICE ────────────────────────────────────────────── */}
            <section className="rlc-inc-section" id="butler-service" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Butler Service</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: "15px" }}></div>

                            <p
                                className="rlc-inc-intro"
                                style={{ margin: "0px", marginBottom: "30px" }}
                            >
                                One of Scenic's signature luxury features is
                                complimentary butler service for every suite.
                                This personalized service helps create a
                                seamless luxury experience from embarkation
                                to disembarkation.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Morning coffee or tea delivery",
                                    "In-suite breakfast",
                                    "Laundry arrangements",
                                    "Restaurant reservations",
                                    "Shoe shining",
                                    "Special requests",
                                    "Beverage service",
                                    "Daily itinerary assistance",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Check
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
                                        // src={ButlerImage}
                                        alt="Scenic butler assisting guests in their suite"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GOURMET DINING ────────────────────────────────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-soft)" }} id="gourmet-dining">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Gourmet Dining</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            All meals are included throughout your cruise,
                            with dining that emphasizes fresh ingredients
                            inspired by the destinations visited.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Breakfast */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Coffee size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Breakfast</h3>
                                </div>
                                <div className="azs-dining-body">
                                    <ul className="azs-dining-list">
                                        {[
                                            "Fresh pastries",
                                            "Eggs cooked to order",
                                            "Seasonal fruit",
                                            "Artisan breads",
                                            "Fresh juices",
                                            "Specialty coffee",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Lunch */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Utensils size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Lunch</h3>
                                </div>
                                <div className="azs-dining-body">
                                    <ul className="azs-dining-list">
                                        {[
                                            "Soups",
                                            "Salads",
                                            "Seafood",
                                            "Regional cuisine",
                                            "Desserts",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Dinner */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Wine size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Dinner</h3>
                                </div>
                                <div className="azs-dining-body">
                                    <ul className="azs-dining-list">
                                        {[
                                            "Multi-course gourmet meals",
                                            "Local specialties",
                                            "Premium wines",
                                            "Chef-crafted menus",
                                            "Vegetarian options",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
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

            {/* ── PREMIUM BEVERAGES ─────────────────────────────────────────── */}
            <section className="rlc-inc-section" id="premium-beverages" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-right" style={{ order: 0 }}>
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={WineImage}
                                        alt="Premium wine service aboard a Scenic river cruise"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Premium Beverages</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: "15px" }}></div>

                            <p
                                className="rlc-inc-intro"
                                style={{ margin: "0px", marginBottom: "30px" }}
                            >
                                Unlike many cruise lines, Scenic includes
                                premium beverages throughout your voyage.
                                Whether you're enjoying dinner, relaxing in
                                the lounge, or celebrating a special
                                occasion, drinks are generally included
                                without additional charges.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Wine",
                                    "Beer",
                                    "Premium spirits",
                                    "Cocktails",
                                    "Soft drinks",
                                    "Specialty coffee",
                                    "Tea",
                                    "Bottled water",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Check
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
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Confused About What's Included?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you break down Scenic's all-inclusive packages, beverage options, and excursion choices to plan your ideal cruise.
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

            {/* ── SCENIC FREECHOICE & SCENIC ENRICH ────────────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-soft)" }} id="freechoice-and-enrich">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Scenic Freechoice &amp; Scenic Enrich</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Two signature programs that let guests
                            personalize their vacation and go beyond
                            traditional sightseeing.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Scenic Freechoice */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Compass size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Scenic Freechoice</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Scenic's Freechoice program allows guests
                                    to personalize their vacation by
                                    selecting excursions that match their
                                    interests, letting every traveler
                                    experience each destination differently.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Options may include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Walking tours",
                                            "Wine tastings",
                                            "Cycling adventures",
                                            "Culinary experiences",
                                            "Museum visits",
                                            "Castle tours",
                                            "Local market visits",
                                            "Nature excursions",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Scenic Enrich */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Sparkles size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Scenic Enrich</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Scenic Enrich provides exclusive cultural
                                    experiences that are unavailable to most
                                    travelers — a highlight for many guests
                                    on many itineraries.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Examples include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Private palace concerts",
                                            "Historic castle receptions",
                                            "Classical music performances",
                                            "Cultural ceremonies",
                                            "Exclusive evening events",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Star size={14} className="azs-dining-list-icon" />
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


{/* ── ENTERTAINMENT & ENRICHMENT / WELLNESS & FITNESS ─────────────────── */}
<section
    className="dve-winner-section"
    id="wellness-entertainment"
    style={{ backgroundColor: "var(--bg-white)" }}
>
    <div className="dve-container">
        <div className="dve-section-header">
            <h2 className="dve-section-title">
                Entertainment &amp; Enrichment
            </h2>
            <div className="dve-section-accent"></div>
            <p className="dve-section-subtitle">
                Scenic offers elegant, destination-focused entertainment alongside
                wellness facilities that help guests stay active and relaxed
                throughout their river cruise.
            </p>
        </div>

        <div className="dve-winner-grid">
            {/* Entertainment & Enrichment */}
            <div className="dve-winner-card dve-disney-winner">
                <div className="dve-winner-image-wrap">
                    <img
                        // src={EntertainmentImage}
                        alt="Entertainment and enrichment aboard a Scenic river ship"
                        className="dve-winner-img"
                    />
                    <span className="dve-winner-badge">
                        Entertainment &amp; Enrichment
                    </span>
                </div>

                <div className="dve-winner-content">
                    <h3 className="dve-winner-title">
                        Elegant Destination-Focused Evenings
                    </h3>

                    <p className="dve-winner-intro">
                        Evenings aboard Scenic are elegant and destination-focused,
                        offering enriching experiences that showcase the culture,
                        history, and traditions of the regions you visit.
                    </p>

                    <div className="dve-winner-divider"></div>

                    <h4 className="dve-advantages-title">
                        Included Entertainment Often Features:
                    </h4>

                    <ul className="dve-advantages-list">
                        {[
                            "Live piano music",
                            "Local performers",
                            "Destination lectures",
                            "Cocktail receptions",
                            "Cultural presentations",
                            "Wine tastings",
                        ].map((item, i) => (
                            <li key={i}>
                                <Check
                                    size={18}
                                    className="dve-advantage-icon"
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Wellness & Fitness */}
            <div className="dve-winner-card dve-viking-winner">
                <div className="dve-winner-image-wrap">
                    <img
                        // src={WellnessImage}
                        alt="Wellness and fitness facilities aboard a Scenic river ship"
                        className="dve-winner-img"
                    />
                    <span className="dve-winner-badge">
                        Wellness &amp; Fitness
                    </span>
                </div>

                <div className="dve-winner-content">
                    <h3 className="dve-winner-title">
                        Stay Active While You Cruise
                    </h3>

                    <p className="dve-winner-intro">
                        Guests also enjoy access to wellness facilities designed to
                        help them stay active and maintain healthy routines while
                        exploring Europe's rivers.
                    </p>

                    <div className="dve-winner-divider"></div>

                    <h4 className="dve-advantages-title">
                        Wellness Facilities Include:
                    </h4>

                    <ul className="dve-advantages-list">
                        {[
                            "Fitness center",
                            "Walking deck",
                            "Wellness programs",
                            "Healthy dining options",
                            "Spa treatments (additional charge on select ships)",
                        ].map((item, i) => (
                            <li key={i}>
                                <ShieldCheck
                                    size={18}
                                    className="dve-advantage-icon"
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

            {/* ── IS SCENIC REALLY ALL-INCLUSIVE? ──────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="really-all-inclusive">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Is Scenic Really All-Inclusive?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Compared with many luxury river cruise lines,
                            yes. Scenic includes significantly more than
                            most competitors by bundling butler service,
                            excursions, beverages, gratuities, transfers,
                            and premium dining into one fare. This makes
                            budgeting easier and allows travelers to focus
                            on enjoying the journey instead of managing
                            onboard expenses.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC WORTH THE PRICE? ───────────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="worth-the-price">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Is Scenic Worth the Price?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Although Scenic's upfront fares are higher than
                            some competitors, many travelers feel the value
                            is excellent because so many premium services
                            are already included. Rather than paying
                            separately for drinks, tips, excursions,
                            transfers, and butler service, most guests can
                            simply relax and enjoy the experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light">
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Exclusive Promotions</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Experience All-Inclusive Luxury?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Take advantage of exclusive travel advisor promotions, complimentary cabin upgrades, and expert advice on Scenic's included packages.
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

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ─────────────────── */}
            <section className="Avr-planning-section" id="why-book-through-advisor" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="Avr-planning-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Itinerary Planning</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Maximize the Value of Your Scenic Cruise
                            </h3>
                            <p className="Avr-planning-left-body">
                                A luxury travel advisor can help you compare
                                Scenic itineraries, choose the best suite,
                                explain exactly what's included, identify
                                current promotions, arrange airfare,
                                coordinate hotels, recommend pre- and
                                post-cruise stays, and plan private transfers
                                and custom experiences.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    An advisor ensures you maximize the value
                                    of your Scenic River Cruise.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Compass size={18} />, label: "Compare Scenic itineraries" },
                                    { icon: <Home size={18} />, label: "Choose the best suite" },
                                    { icon: <ShieldCheck size={18} />, label: "Explain exactly what's included" },
                                    { icon: <BadgePercent size={18} />, label: "Identify current promotions" },
                                    { icon: <Plane size={18} />, label: "Arrange airfare" },
                                    { icon: <Hotel size={18} />, label: "Coordinate hotels" },
                                    { icon: <Sun size={18} />, label: "Recommend pre- and post-cruise stays" },
                                    { icon: <Anchor size={18} />, label: "Plan private transfers & custom experiences" },
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
                            Everything travelers need to know about what's
                            included on a Scenic River Cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>



            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={CTAImage}
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
                                    Truly All-Inclusive <br /> Luxury River Cruising
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        One of Scenic River Cruises' greatest
                                        strengths is its commitment to truly
                                        all-inclusive luxury. From butler
                                        service and gourmet dining to premium
                                        beverages, guided excursions, airport
                                        transfers, and gratuities, nearly
                                        every aspect of your vacation is
                                        thoughtfully included.

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
                                                For travelers who value
                                                convenience, personalized
                                                service, and predictable
                                                vacation costs, Scenic offers
                                                one of the most comprehensive
                                                luxury river cruise
                                                experiences available.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                compare Scenic itineraries,
                                                explain what's included with
                                                each sailing, recommend the
                                                ideal suite, and create a
                                                customized luxury river
                                                cruise tailored to your
                                                travel style.
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
                                        Our luxury planning services include:
                                    </h3>

                                    <ul className="Asc-help-bullets">
                                        {[
                                            "Compare Scenic itineraries",
                                            "Explain exactly what's included",
                                            "Recommend the ideal suite",
                                            "Arrange flights",
                                            "Coordinate hotels",
                                            "Plan private transfers",
                                            "Recommend excursions",
                                            "Explain available promotions",
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

export default WhatsIncludedScenicRiverCruise;