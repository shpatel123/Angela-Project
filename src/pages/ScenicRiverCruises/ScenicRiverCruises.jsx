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
    Church,
    Waves,
    Wine,
    Flower2,
    Wind,
    Building2,
    Camera,
    MapPinned,
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
    Heart,
    Map,
    CheckCircle,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic River Cruises Guide
   photography once available. Paths assume a new
   /assets/ScenicRiverCruisesGuide folder. */
// import HeroImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-hero.jpg";
// import ShipsImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-ship.jpg";
// import SuiteImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-suite.jpg";
// import DiningImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-dining.jpg";
// import DiningPlateImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-plate.jpg";
// import WineImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-wine.jpg";
// import DanubeImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-danube.jpg";
// import RhineImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-rhine.jpg";
// import RhoneImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-rhone.jpg";
// import SeineImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-seine.jpg";
// import DouroImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-douro.jpg";
// import MekongImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-mekong.jpg";
// import LoungeImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-lounge.jpg";
// import WorthItImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-evening.jpg";
// import CTAImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../../pages/RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "./ScenicRiverCruises.css";

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
            "@id": "https://tripsandships.com/scenic-river-cruises-guide/#webpage",
            name: "Scenic River Cruises: The Complete Guide | Luxury River Cruising in Europe & Southeast Asia",
            url: "https://tripsandships.com/scenic-river-cruises-guide",
            description:
                "Discover everything you need to know about Scenic River Cruises. Explore luxury ships, destinations, all-inclusive amenities, itineraries, dining, suites, pricing, and whether Scenic is the right river cruise line for you.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises-guide/#article",
            headline: "Scenic River Cruises Guide | Ships, Destinations, Inclusions & Reviews",
            description:
                "A complete guide to Scenic Luxury Cruises & Tours covering ships, suites, dining, destinations, Scenic Freechoice, Scenic Enrich, pricing, pros and cons, and who should sail.",
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
            "@type": "Review",
            "@id": "https://tripsandships.com/scenic-river-cruises-guide/#review",
            itemReviewed: {
                "@type": "Product",
                name: "Scenic Luxury Cruises & Tours",
            },
            author: {
                "@type": "Person",
                name: "Angela Hughes",
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
            },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://tripsandships.com/scenic-river-cruises-guide/#breadcrumb",
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
                    name: "Scenic River Cruises: The Complete Guide",
                    item: "https://tripsandships.com/scenic-river-cruises-guide",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises-guide/#itemlist",
            name: "What This Scenic River Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Overview" },
                { "@type": "ListItem", position: 2, name: "Why Choose Scenic River Cruises?" },
                { "@type": "ListItem", position: 3, name: "What Makes Scenic Different?" },
                { "@type": "ListItem", position: 4, name: "Scenic Destinations" },
                { "@type": "ListItem", position: 5, name: "Scenic River Ships" },
                { "@type": "ListItem", position: 6, name: "Suites & Accommodations" },
                { "@type": "ListItem", position: 7, name: "Dining Experience" },
                { "@type": "ListItem", position: 8, name: "Scenic Freechoice & Scenic Enrich" },
                { "@type": "ListItem", position: 9, name: "Who Should Sail Scenic?" },
                { "@type": "ListItem", position: 10, name: "Is Scenic Worth the Price?" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises-guide/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic an all-inclusive river cruise line?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes many premium amenities, such as butler service, beverages, gratuities, excursions, and airport transfers, creating a comprehensive luxury experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which rivers does Scenic sail?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic operates on the Danube, Rhine, Rhône, Seine, Douro, and Mekong rivers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Its all-inclusive approach and attentive service make it an excellent choice for travelers new to river cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Premium beverages are generally included throughout the cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is butler service included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Butler service is available for every suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is Scenic Freechoice?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic Freechoice allows guests to select excursions based on their interests rather than following a single scheduled tour.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is Scenic Enrich?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic Enrich consists of exclusive cultural events and experiences created specifically for Scenic guests.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic suitable for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic is especially popular with couples seeking a luxurious, romantic river cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Scenic compare with Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is known for its comprehensive all-inclusive experience, while Riverside emphasizes boutique luxury, spacious suites, and personalized hospitality. The best choice depends on your travel preferences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare itineraries, recommend the best suite, explain promotions, and coordinate every aspect of your vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code onboard Scenic river cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The onboard dress code is casual and comfortable during the day, and smart casual in the evenings. There are no formal nights, so formal wear like suits and evening gowns are not required.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are laundry services available on Scenic ships?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic offers onboard laundry services. Depending on your suite category, complimentary laundry service (ranging from a limited number of items to unlimited daily laundry) is provided by your butler.",
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
            q: "Is Scenic an all-inclusive river cruise line?",
            a: "Yes. Scenic includes many premium amenities, such as butler service, beverages, gratuities, excursions, and airport transfers, creating a comprehensive luxury experience.",
        },
        {
            q: "Which rivers does Scenic sail?",
            a: "Scenic operates on the Danube, Rhine, Rhône, Seine, Douro, and Mekong rivers.",
        },
        {
            q: "Is Scenic good for first-time river cruisers?",
            a: "Absolutely. Its all-inclusive approach and attentive service make it an excellent choice for travelers new to river cruising.",
        },
        {
            q: "Are drinks included?",
            a: "Yes. Premium beverages are generally included throughout the cruise.",
        },
        {
            q: "Is butler service included?",
            a: "Yes. Butler service is available for every suite.",
        },
        {
            q: "What is Scenic Freechoice?",
            a: "Scenic Freechoice allows guests to select excursions based on their interests rather than following a single scheduled tour.",
        },
        {
            q: "What is Scenic Enrich?",
            a: "Scenic Enrich consists of exclusive cultural events and experiences created specifically for Scenic guests.",
        },
        {
            q: "Is Scenic suitable for couples?",
            a: "Yes. Scenic is especially popular with couples seeking a luxurious, romantic river cruise.",
        },
        {
            q: "How does Scenic compare with Riverside?",
            a: "Scenic is known for its comprehensive all-inclusive experience, while Riverside emphasizes boutique luxury, spacious suites, and personalized hospitality. The best choice depends on your travel preferences.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can compare itineraries, recommend the best suite, explain promotions, and coordinate every aspect of your vacation.",
        },
        {
            q: "What is the dress code onboard Scenic river cruises?",
            a: "The onboard dress code is casual and comfortable during the day, and smart casual in the evenings. There are no formal nights, so formal wear like suits and evening gowns are not required.",
        },
        {
            q: "Are laundry services available on Scenic ships?",
            a: "Yes. Scenic offers onboard laundry services. Depending on your suite category, complimentary laundry service (ranging from a limited number of items to unlimited daily laundry) is provided by your butler.",
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

/* ── Quick Overview Data ──────────────────────────────────────── */
const quickVerdictData = [
    { key: "cruiseline", label: "Cruise Line", value: "Scenic Luxury Cruises & Tours" },
    { key: "style", label: "Cruise Style", value: "Ultra-Luxury River Cruises" },
    { key: "bestfor", label: "Best For", value: "Couples, Luxury Travelers, Food & Wine Enthusiasts" },
    { key: "destinations", label: "Destinations", value: "Europe & Southeast Asia" },
    { key: "fleet", label: "Fleet", value: "Modern Luxury River Ships" },
    { key: "dining", label: "Dining", value: "Multiple Gourmet Dining Venues" },
    { key: "butler", label: "Butler Service", value: "Included" },
    { key: "overall", label: "Overall Rating", value: "★★★★★" },
];

/* ── Destinations & Itineraries Data ───────────────────────────── */
const riverItineraries = [
    {
        id: "danube",
        title: "The Danube",
        badge: "Danube",
        icon: Landmark,
        // image: DanubeImage,
        desc: "Scenic's Danube sailings glide past grand imperial capitals and quiet vineyard villages, making it one of the line's most popular classic European itineraries.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Budapest", "Vienna", "Bratislava", "Passau", "Wachau Valley"],
            },
        ],
    },
    {
        id: "rhine",
        title: "The Rhine",
        badge: "Rhine",
        icon: Building2,
        // image: RhineImage,
        desc: "Sailing the Rhine takes guests past storybook riverside towns, vineyard-covered hillsides, and some of Europe's most walkable historic city centers.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Amsterdam", "Cologne", "Strasbourg", "Basel", "Rüdesheim"],
            },
        ],
    },
    {
        id: "rhone",
        title: "The Rhône",
        badge: "Rhône",
        icon: Wine,
        // image: RhoneImage,
        desc: "Scenic's Rhône itineraries lean into Provençal light, lavender-scented countryside, and some of France's most celebrated vineyards.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Lyon", "Avignon", "Arles", "Provence", "Rhône Valley vineyards"],
            },
        ],
    },
    {
        id: "seine",
        title: "The Seine",
        badge: "Seine",
        icon: Camera,
        // image: SeineImage,
        desc: "Cruising the Seine pairs the romance of Paris with the quiet charm of Normandy, blending world-class art and history with the French countryside.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Paris", "Rouen", "Vernon & Giverny", "Normandy Beaches", "Les Andelys"],
            },
        ],
    },
    {
        id: "douro",
        title: "The Douro",
        badge: "Douro",
        icon: Flower2,
        // image: DouroImage,
        desc: "Portugal's Douro Valley unfolds in terraced vineyards and sun-soaked hillsides, offering one of Europe's most scenic and intimate river journeys.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Porto", "Douro Valley", "Régua", "Pinhão", "Salamanca (Spain)"],
            },
        ],
    },
    {
        id: "mekong",
        title: "The Mekong",
        badge: "Mekong",
        icon: Waves,
        // image: MekongImage,
        desc: "Scenic's Southeast Asia sailings combine luxury river cruising with immersive culture along the Mekong, connecting vibrant cities with rural village life.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Ho Chi Minh City", "Cai Be", "Phnom Penh", "Angkor Wat", "Siem Reap"],
            },
        ],
    },
];

/* ── Pros Data ─────────────────────────────────────────────────── */
const prosData = [
    {
        key: "allinclusive",
        icon: Home,
        title: "Truly All-Inclusive",
        range: "Value",
        items: ["Butler service, beverages, gratuities, excursions, and transfers are already included"],
    },
    {
        key: "butler",
        icon: Users,
        title: "Butler Service",
        range: "Hospitality",
        items: ["Every suite receives personalized butler service throughout the voyage"],
    },
    {
        key: "dining",
        icon: Utensils,
        title: "Outstanding Dining",
        range: "Cuisine",
        items: ["Gourmet, destination-inspired menus across multiple dining venues"],
    },
    {
        key: "freechoice",
        icon: Star,
        title: "Scenic Freechoice",
        range: "Excursions",
        items: ["Flexible excursion choices let guests personalize each day ashore"],
    },
    {
        key: "itineraries",
        icon: MapPin,
        title: "Beautiful Itineraries",
        range: "Destinations",
        items: ["Iconic European rivers plus immersive Southeast Asia sailings on the Mekong"],
    },
    {
        key: "ships",
        icon: Ship,
        title: "Modern Fleet",
        range: "Design",
        items: ["Contemporary ships with spacious suites and panoramic Sun Lounges"],
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuites, setReadMoreSuites] = useState(false);
    const [activeRiver, setActiveRiver] = useState("danube");

    const currentRiver =
        riverItineraries.find((d) => d.id === activeRiver) || riverItineraries[0];

    const ActiveIcon = currentRiver.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruises: The Complete Guide | Luxury River Cruising in Europe & Southeast Asia</title>
                <meta name="title" content="Scenic River Cruises Guide | Ships, Destinations, Inclusions & Reviews" />
                <meta
                    name="description"
                    content="Discover everything you need to know about Scenic River Cruises. Explore luxury ships, destinations, all-inclusive amenities, itineraries, dining, suites, pricing, and whether Scenic is the right river cruise line for you."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruises <br /> The Complete Guide</h1>

                    <p>
                        Scenic Luxury Cruises &amp; Tours has earned a reputation
                        as one of the world's leading ultra-luxury river cruise
                        lines, known for its truly all-inclusive philosophy,
                        elegant ships, spacious suites, personalized butler
                        service, and immersive cultural experiences.
                    </p>

                    {readMore && (
                        <p>
                            Whether you're planning your first river cruise or
                            comparing Scenic with other luxury brands like
                            Riverside, Uniworld, AmaWaterways, or Tauck, this
                            complete guide covers everything you need to know —
                            from ships and destinations to onboard experiences,
                            pricing, and who should choose Scenic to explore
                            Europe's most iconic waterways and Southeast Asia's
                            legendary rivers.
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

            {/* ── QUICK OVERVIEW ───────────────────────────────────────────── */}
            <section className="adg-section" id="quick-overview" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Quick Overview</h2>
                        <div className="adg-accent-line"></div>
                    
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickVerdictData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.label}</strong>
                                        </td>
                                        <td>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE SCENIC RIVER CRUISES? ─────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-scenic">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose Scenic River Cruises?</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Scenic is designed for travelers who want a seamless luxury
                            experience with very few additional expenses once onboard.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Truly all-inclusive luxury",
                                "Butler service for every suite",
                                "Spacious accommodations",
                                "Premium beverages",
                                "Fine dining",
                                "Included excursions",
                                "Airport transfers",
                                "Luxury coaches",
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
                                        Instead of worrying about additional charges
                                        throughout the trip, Scenic focuses on providing an
                                        effortless vacation experience from arrival through
                                        departure.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: '420px' }}>
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

            {/* ── WHY CHOOSE SCENIC / WHAT MAKES SCENIC DIFFERENT ──────────── */}
            <section
                className="ugt-components-section"
                id="what-makes-scenic-different"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">What Makes Scenic Different?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={HeroImage}
                                        alt="Scenic river cruise ship sailing along a European river"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Scenic is designed for travelers who want a
                                    seamless luxury experience with very few
                                    additional expenses once onboard. Unlike many
                                    cruise lines that offer optional upgrades,{" "}
                                    <strong>Scenic includes many premium
                                        experiences in the cruise fare</strong>,
                                    making budgeting much easier for travelers.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Often included in the fare:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Butler service",
                                            "Premium beverages",
                                            "Specialty dining",
                                            "Wi-Fi",
                                            "Gratuities",
                                            "Included excursions",
                                            "Airport transfers",
                                            "Scenic Freechoice experiences",
                                            "Scenic Enrich exclusive events",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <Check size={16} className="ugt-question-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rlc-page-cta-container rlc-align-left">
                                    <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                        Start Planning Your Scenic Cruise
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC DESTINATIONS ───────────────────────────────────────── */}
            <section className="scenic-destinations-section" id="scenic-destinations">
                <div className="scenic-destinations-container">
                    <h2 className="scenic-destinations-title">Scenic Destinations</h2>
                    <div className="scenic-destinations-accent"></div>
                    <p className="scenic-destinations-subtitle">
                        Scenic offers itineraries across some of the world's most beautiful waterways.
                    </p>

                    <div className="scenic-destinations-grid">
                        {/* Europe Card */}
                        <div className="scenic-destinations-card">
                            <div className="scenic-card-header">
                                <Compass className="scenic-card-icon" />
                                <h3>Europe</h3>
                            </div>
                            
                            <div className="scenic-card-image-container">
                                <img
                                //  src={DanubeImage} 
                                alt="Europe River Cruise" className="scenic-card-img" />
                            </div>
                            
                            <div className="scenic-card-body">
                                <div className="scenic-card-subgroup">
                                    <h4>Popular Rivers</h4>
                                    <ul className="scenic-river-list">
                                        <li><Waves className="scenic-list-icon" /> Danube</li>
                                        <li><Waves className="scenic-list-icon" /> Rhine</li>
                                        <li><Waves className="scenic-list-icon" /> Rhône</li>
                                        <li><Waves className="scenic-list-icon" /> Seine</li>
                                        <li><Waves className="scenic-list-icon" /> Douro</li>
                                    </ul>
                                </div>

                                <div className="scenic-card-subgroup">
                                    <h4>Key Destinations</h4>
                                    <div className="scenic-destinations-badge-container">
                                        {[
                                            "Amsterdam",
                                            "Budapest",
                                            "Vienna",
                                            "Strasbourg",
                                            "Cologne",
                                            "Basel",
                                            "Lyon",
                                            "Bordeaux",
                                            "Porto",
                                            "Paris",
                                        ].map((city) => (
                                            <span key={city} className="scenic-dest-badge">
                                                <MapPin size={12} className="scenic-badge-icon" />
                                                {city}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Southeast Asia Card */}
                        <div className="scenic-destinations-card">
                            <div className="scenic-card-header">
                                <Sparkles className="scenic-card-icon" />
                                <h3>Southeast Asia</h3>
                            </div>
                            
                            <div className="scenic-card-image-container">
                                <img 
                                // src={MekongImage} 
                                alt="Mekong River Cruise" className="scenic-card-img" />
                            </div>
                            
                            <div className="scenic-card-body">
                                <p className="scenic-card-intro">
                                    Scenic also operates luxury cruises on the Mekong River.
                                </p>

                                <div className="scenic-card-subgroup">
                                    <h4>Popular Destinations</h4>
                                    <div className="scenic-destinations-badge-container">
                                        {[
                                            "Vietnam",
                                            "Cambodia",
                                            "Ho Chi Minh City",
                                            "Phnom Penh",
                                            "Siem Reap",
                                        ].map((dest) => (
                                            <span key={dest} className="scenic-dest-badge">
                                                <MapPin size={12} className="scenic-badge-icon" />
                                                {dest}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="scenic-card-outro">
                                    These itineraries combine luxury river cruising with rich cultural experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITES & ACCOMMODATIONS ──────────────────────────────────── */}
            <section className="luc-why-section" id="suites-and-accommodations">
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
                                alt="Spacious suite aboard a Scenic river cruise ship"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Suites &amp; Accommodations</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            Scenic suites are among the finest in river cruising.
                            Many suites feature Scenic's signature Sun Lounge,
                            allowing guests to enjoy fresh air and panoramic
                            views regardless of the weather.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "Butler service",
                                "Luxury bedding",
                                "Marble bathrooms",
                                "Walk-in showers",
                                "Espresso machines",
                                "Mini-bars",
                                "Large televisions",
                                "Climate control",
                            ]
                                .slice(0, readMoreSuites ? 8 : 4)
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
                                onClick={() => setReadMoreSuites(!readMoreSuites)}
                            >
                                {readMoreSuites ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ── SCENIC FREECHOICE & SCENIC ENRICH ────────────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }} id="freechoice-and-enrich">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Scenic Freechoice &amp; Scenic Enrich</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Two of Scenic's signature features that help guests
                            personalize their vacation and go beyond traditional
                            sightseeing.
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
                                    Rather than following a single excursion
                                    schedule, guests can choose activities based
                                    on their interests — this flexibility allows
                                    travelers to personalize their vacation.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Options may include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Walking tours",
                                            "Culinary experiences",
                                            "Museum visits",
                                            "Wine tastings",
                                            "Cycling tours",
                                            "Local villages",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="azs-dining-divider"></div>

                                    <div className="azs-dining-highlight-box azs-seabourn-highlight">
                                        <p className="azs-dining-highlight-text">
                                            This flexibility allows travelers to personalize their vacation.
                                        </p>
                                    </div>
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
                                    Scenic Enrich offers exclusive cultural
                                    events unavailable to most travelers,
                                    designed to create memorable moments beyond
                                    traditional sightseeing.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Examples may include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Private palace concerts",
                                            "Historic castle dinners",
                                            "Classical music performances",
                                            "Cultural ceremonies",
                                            "Exclusive local events",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Star size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="azs-dining-divider"></div>

                                    <div className="azs-dining-highlight-box azs-azamara-highlight">
                                        <p className="azs-dining-highlight-text">
                                            These experiences are designed to create memorable moments beyond traditional sightseeing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING EXPERIENCE ────────────────────────────────────────── */}
            <section className="scenic-dining-section" id="dining-experience">
                <div className="scenic-dining-container">
                    <div className="scenic-dining-grid">
                        <div className="scenic-dining-content">
                            <h2 className="scenic-dining-title">Dining Experience</h2>
                            <div className="scenic-dining-accent"></div>
                            
                            <p className="scenic-dining-intro">
                                Dining is one of Scenic's strongest features.
                            </p>

                            <div className="scenic-dining-highlights">
                                <h3>Guests enjoy:</h3>
                                <ul className="scenic-dining-list">
                                    {[
                                        "Gourmet cuisine",
                                        "Regional specialties",
                                        "Multi-course dinners",
                                        "Fresh local ingredients",
                                        "Premium wines",
                                        "Specialty restaurants",
                                        "Chef's Table experiences",
                                    ].map((item, index) => (
                                        <li key={index} className="scenic-dining-item">
                                            <Utensils size={18} className="scenic-dining-item-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="scenic-dining-outro">
                                Menus are inspired by the destinations visited, providing an authentic culinary journey.
                            </p>
                        </div>

                        <div className="scenic-dining-image-wrap">
                            <div className="scenic-dining-image-frame">
                                <img
                                    // src={DiningImage}
                                    alt="Dining Experience onboard Scenic"
                                    className="scenic-dining-img"
                                />
                                <div className="scenic-dining-image-overlay">
                                    <span>Gourmet Onboard Dining</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WELLNESS & RELAXATION / ENTERTAINMENT ONBOARD ─────────────────── */}
            <section
                className="dve-winner-section"
                id="wellness-entertainment"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Wellness &amp; Relaxation
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            Scenic river ships make it easy to maintain your wellness routine while enjoying a relaxing luxury cruise experience.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Wellness & Relaxation */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap">
                                <img
                                    // src={WellnessImage}
                                    alt="Wellness facilities aboard a Scenic river ship"
                                    className="dve-winner-img"
                                />
                                <span className="dve-winner-badge">
                                    Wellness & Relaxation
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Stay Active & Recharge
                                </h3>

                                <p className="dve-winner-intro">
                                    Guests can maintain their wellness routines while traveling
                                    with thoughtfully designed fitness and relaxation spaces
                                    available onboard.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">
                                    Amenities Often Include:
                                </h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Fitness center",
                                        "Wellness area",
                                        "Walking track",
                                        "Healthy dining options",
                                        "Spa treatments (additional charge where applicable)",
                                        "Relaxation lounges",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Check size={18} className="dve-advantage-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Entertainment Onboard */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap">
                                <img
                                    // src={EntertainmentImage}
                                    alt="Evening entertainment aboard a Scenic river ship"
                                    className="dve-winner-img"
                                />
                                <span className="dve-winner-badge">
                                    Entertainment Onboard
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Elegant Evening Experiences
                                </h3>

                                <p className="dve-winner-intro">
                                    Evenings aboard Scenic are elegant and relaxed, with
                                    entertainment designed to complement the destinations
                                    rather than overshadow them.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">
                                    Guests Enjoy:
                                </h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Live music",
                                        "Destination lectures",
                                        "Cocktail hours",
                                        "Cultural performances",
                                        "Wine tastings",
                                        "Social lounges",
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

            
            {/* ── WHO SHOULD SAIL SCENIC? ───────────────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="adg-container">
                    <div className="adg-section-header" style={{ marginBottom: "60px" }}>
                        <h2 className="adg-h2">Who Should Sail Scenic?</h2>
                        <div className="Asc-accent-line"></div>

                        <div
                            className="adg-split-layout"
                            style={{ alignItems: "flex-start" }}
                        >
                            <div className="adg-content-card-side">
                                <img
                                    // src={ConciergeImage}
                                    alt="Couples enjoying a luxury Scenic river cruise"
                                    className="adg-side-image"
                                    style={{ height: "55vh", border: '1px solid' }}
                                />

                                <div className="adg-info-card">
                                    <div className="adg-card-meta">
                                        <Heart size={28} />
                                        <span className="adg-meta-label">
                                            Luxury River Cruising in Europe &amp; Southeast Asia
                                        </span>
                                    </div>

                                    <p className="adg-card-lead">
                                        Scenic's combination of luxury, convenience,
                                        and exceptional service appeals to travelers
                                        who prefer a worry-free, all-inclusive
                                        vacation. Many guests describe the
                                        experience as effortless, refined, and
                                        exceptionally comfortable.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-list-side">
                                {[
                                    {
                                        title: "Luxury Travelers",
                                        icon: <Gem size={20} />,
                                    },
                                    {
                                        title: "Couples",
                                        icon: <Heart size={20} />,
                                    },
                                    {
                                        title: "Retired Travelers",
                                        icon: <Users size={20} />,
                                    },
                                    {
                                        title: "Food & Wine Enthusiasts",
                                        icon: <Wine size={20} />,
                                    },
                                    {
                                        title: "First-Time River Cruisers",
                                        icon: <Ship size={20} />,
                                    },
                                    {
                                        title: "Cultural Explorers",
                                        icon: <Landmark size={20} />,
                                    },
                                    {
                                        title: "Anniversary Celebrations",
                                        icon: <Sparkles size={20} />,
                                    },
                                    {
                                        title: "All-Inclusive Seekers",
                                        icon: <Compass size={20} />,
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
                </div>
            </section>

            {/* ── SCENIC RIVER SHIPS ─────────────────────────────────────────── */}
            <section className="rlc-inc-section" id="scenic-river-ships" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Scenic River Ships</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: "15px" }}></div>

                            <p
                                className="rlc-inc-intro"
                                style={{ margin: "0px", marginBottom: "30px" }}
                            >
                                Scenic's fleet features modern river ships designed with
                                contemporary luxury in mind, combining elegant design,
                                spacious accommodations, and exceptional onboard amenities
                                for a refined river cruising experience.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Spacious suites",
                                    "Private balconies (on many suites)",
                                    "Elegant lounges",
                                    "Multiple dining venues",
                                    "Observation decks",
                                    "Wellness facilities",
                                    "Fitness centers",
                                    "Modern technology",
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

                            <div className="rlc-inc-outro-box">
                                <p className="rlc-inc-outro-text">
                                    Every Scenic river ship emphasizes comfort, generous
                                    space, and panoramic river views, creating a luxurious
                                    environment for exploring Europe's most beautiful
                                    waterways.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={ScenicShipImage}
                                        alt="Luxury Scenic river ship sailing through Europe"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>

                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={ScenicSuiteImage}
                                            alt="Spacious Scenic river cruise suite"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>

                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={ScenicLoungeImage}
                                            alt="Elegant lounge aboard a Scenic river ship"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── SCENIC VS OTHER LUXURY LINES ─────────────────────────────── */}
            <section className="scenic-comparison-section" id="scenic-vs-competitors">
                <div className="scenic-comparison-container">
                    <h2 className="scenic-comparison-title">Scenic vs. Other Luxury River Cruise Lines</h2>
                    <div className="scenic-comparison-accent"></div>
                    <p className="scenic-comparison-subtitle">
                        Compared with competitors, Scenic stands out for:
                    </p>

                    <div className="scenic-comparison-grid">
                        {[
                            {
                                title: "Truly All-Inclusive Experience",
                                desc: "Many premium services are already included in the fare.",
                                icon: <BadgePercent className="scenic-comp-icon" />,
                            },
                            {
                                title: "Butler Service",
                                desc: "Every suite receives personalized butler service.",
                                icon: <Users className="scenic-comp-icon" />,
                            },
                            {
                                title: "Scenic Freechoice",
                                desc: "Guests enjoy flexibility when selecting excursions.",
                                icon: <Compass className="scenic-comp-icon" />,
                            },
                            {
                                title: "Scenic Enrich",
                                desc: "Exclusive cultural events provide deeper destination immersion.",
                                icon: <Sparkles className="scenic-comp-icon" />,
                            },
                            {
                                title: "Modern Fleet",
                                desc: "Elegant contemporary ships with spacious accommodations.",
                                icon: <Ship className="scenic-comp-icon" />,
                            },
                        ].map((item, index) => (
                            <div key={index} className="scenic-comp-card">
                                <div className="scenic-comp-card-icon-wrap">
                                    {item.icon}
                                </div>
                                <div className="scenic-comp-card-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC WORTH THE PRICE ─────────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-the-price" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Scenic Worth the Price?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                Although Scenic commands premium pricing, many
                                travelers find excellent value because so many
                                services are already included — excursions,
                                drinks, butler service, gratuities, and airport
                                transfers.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Guests enjoy a more predictable vacation
                                    budget, making Scenic an outstanding value
                                    for travelers seeking convenience and luxury.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Scenic Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={LoungeImage}
                                    alt="Elegant evening lounge aboard a Scenic river cruise ship"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>
                                <div className="rlc-lc-worth-media-badge">
                                    <span>All-Inclusive • Elegant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-a-luxury-travel-advisor"
            >
                <div className="Asc-container">
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
                                Let an Expert Handle Every Detail
                            </h3>
                            <p className="Avr-planning-left-body">
                                Booking with an experienced luxury travel advisor
                                can enhance your Scenic experience by helping you
                                compare itineraries, choose the right ship,
                                select the ideal suite, explain Scenic Freechoice
                                options, coordinate airfare, arrange hotels, and
                                organize private transfers — an advisor can also
                                help determine whether Scenic is the best fit
                                compared with other luxury river cruise lines.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional guidance helps ensure you choose
                                    the itinerary that best matches your travel
                                    style.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Waves size={18} />, label: "Compare Scenic itineraries" },
                                    { icon: <Ship size={18} />, label: "Choose the right ship" },
                                    { icon: <Home size={18} />, label: "Select the ideal suite" },
                                    { icon: <Compass size={18} />, label: "Explain Scenic Freechoice options" },
                                    { icon: <Plane size={18} />, label: "Coordinate airfare" },
                                    { icon: <Hotel size={18} />, label: "Arrange hotels" },
                                    { icon: <Anchor size={18} />, label: "Organize private transfers" },
                                    { icon: <BadgePercent size={18} />, label: "Recommend pre- and post-cruise experiences" },
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
                            Everything travelers need to know before booking a
                            Scenic River Cruise.
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
                                    One of the Most Comprehensive <br /> Ultra-Luxury River Cruise Experiences
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic River Cruises delivers one of the
                                        most comprehensive luxury river cruise
                                        experiences available today. Its
                                        combination of elegant ships, personalized
                                        butler service, gourmet dining, enriching
                                        excursions, and truly all-inclusive
                                        pricing makes it an outstanding option
                                        for travelers who want to explore Europe
                                        or Southeast Asia in exceptional comfort.

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
                                                Whether you're cruising the Danube,
                                                Rhine, Rhône, Seine, Douro, or
                                                Mekong, Scenic provides a
                                                sophisticated and immersive
                                                journey that combines world-class
                                                hospitality with unforgettable
                                                destinations.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you compare
                                                Scenic with other leading luxury
                                                river cruise lines, recommend the
                                                perfect itinerary, choose the
                                                ideal suite, and create a
                                                customized river cruise tailored
                                                to your travel style.
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
                                            "Compare Scenic with other luxury river cruise lines",
                                            "Recommend the right itinerary",
                                            "Select the ideal suite",
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

export default ScenicRiverCruisesGuide;