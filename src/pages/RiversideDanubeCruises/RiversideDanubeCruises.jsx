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
    Sparkles,
    Ship,
    Landmark,
    Music,
    Church,
    Waves,
    Grape,
    Wine,
    Snowflake,
    Flower2,
    Sun,
    Leaf,
    MapPinned,
    Home,
    Hotel,
    Plane,
    BadgePercent,
    ShieldCheck,
    Compass,
    Anchor,
    Globe,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Danube Cruises photography once
   available. Paths assume a new /assets/RiversideDanubeCruises folder. */
// import HeroImage from "../../assets/RiversideDanubeCruises/riverside-danube-vienna-hero.jpg";
// import MozartImage from "../../assets/RiversideDanubeCruises/riverside-mozart-danube.jpg";
// import BudapestImage from "../../assets/RiversideDanubeCruises/riverside-danube-budapest.jpg";
// import ViennaImage from "../../assets/RiversideDanubeCruises/riverside-danube-vienna.jpg";
// import BratislavaImage from "../../assets/RiversideDanubeCruises/riverside-danube-bratislava.jpg";
// import MelkImage from "../../assets/RiversideDanubeCruises/riverside-danube-melk.jpg";
// import PassauImage from "../../assets/RiversideDanubeCruises/riverside-danube-passau.jpg";
// import WachauImage from "../../assets/RiversideDanubeCruises/riverside-danube-wachau-valley.jpg";
// import SuiteImage from "../../assets/RiversideDanubeCruises/riverside-danube-suite.jpg";
// import DiningImage from "../../assets/RiversideDanubeCruises/riverside-danube-dining.jpg";
// import ExcursionImage from "../../assets/RiversideDanubeCruises/riverside-danube-excursion.jpg";
// import WorthItImage from "../../assets/RiversideDanubeCruises/riverside-danube-evening-lounge.jpg";
// import CTAImage from "../../assets/RiversideDanubeCruises/riverside-danube-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../../pages/RiversideLuxuryCruises/RiversideLuxuryCruises.css";

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
            "@id": "https://tripsandships.com/riverside-danube-cruises/#webpage",
            name: "Riverside Danube Cruises | Luxury Danube River Cruise Guide",
            url: "https://tripsandships.com/riverside-danube-cruises",
            description:
                "Discover Riverside Danube Cruises featuring luxury suites, gourmet dining, and unforgettable journeys through Budapest, Vienna, Bratislava, and the Wachau Valley. Learn what to expect before you book.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/riverside-danube-cruises/#article",
            headline: "Riverside Danube Cruises | Luxury River Cruises Through Europe",
            description:
                "A complete guide to Riverside Danube Cruises, covering destinations, the Riverside Mozart, accommodations, dining, excursions, and whether a Riverside Danube Cruise is worth booking.",
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
            "@id": "https://tripsandships.com/riverside-danube-cruises/#breadcrumb",
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
                    name: "River Cruise Guides",
                    item: "https://tripsandships.com/river-cruise-guides",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Riverside Luxury Cruises",
                    item: "https://tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Riverside Danube Cruises",
                    item: "https://tripsandships.com/riverside-danube-cruises",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://tripsandships.com/riverside-danube-cruises/#touristtrip",
            name: "Riverside Danube Cruise",
            touristType: "Couples, luxury travelers, first-time river cruisers",
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Budapest, Hungary" },
                    { "@type": "ListItem", position: 2, name: "Vienna, Austria" },
                    { "@type": "ListItem", position: 3, name: "Bratislava, Slovakia" },
                    { "@type": "ListItem", position: 4, name: "Melk, Austria" },
                    { "@type": "ListItem", position: 5, name: "Passau, Germany" },
                    { "@type": "ListItem", position: 6, name: "Wachau Valley, Austria" },
                ],
            },
        },
        {
            "@type": "Cruise",
            "@id": "https://tripsandships.com/riverside-danube-cruises/#cruise",
            name: "Riverside Danube Cruise",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
            departurePort: {
                "@type": "BoatTerminal",
                name: "Budapest, Hungary",
            },
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Budapest, Hungary" },
                    { "@type": "ListItem", position: 2, name: "Bratislava, Slovakia" },
                    { "@type": "ListItem", position: 3, name: "Vienna, Austria" },
                    { "@type": "ListItem", position: 4, name: "Wachau Valley, Austria" },
                    { "@type": "ListItem", position: 5, name: "Melk, Austria" },
                    { "@type": "ListItem", position: 6, name: "Passau, Germany" },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/riverside-danube-cruises/#destinations",
            name: "Riverside Danube Cruise Destinations",
            itemListElement: [
                { "@type": "Place", position: 1, name: "Budapest, Hungary" },
                { "@type": "Place", position: 2, name: "Vienna, Austria" },
                { "@type": "Place", position: 3, name: "Bratislava, Slovakia" },
                { "@type": "Place", position: 4, name: "Melk, Austria" },
                { "@type": "Place", position: 5, name: "Passau, Germany" },
                { "@type": "Place", position: 6, name: "Wachau Valley, Austria" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://tripsandships.com/riverside-danube-cruises/#service",
            serviceType: "Luxury Danube River Cruise Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning support to help travelers compare Danube itineraries and choose the best sailing, ship, and suite for their trip.",
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/riverside-danube-cruises/#itemlist",
            name: "What This Riverside Danube Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Overview" },
                { "@type": "ListItem", position: 2, name: "Why Cruise the Danube?" },
                { "@type": "ListItem", position: 3, name: "Why Choose Riverside Luxury Cruises?" },
                { "@type": "ListItem", position: 4, name: "Destinations Along the Danube" },
                { "@type": "ListItem", position: 5, name: "Riverside Mozart" },
                { "@type": "ListItem", position: 6, name: "Luxury Accommodations" },
                { "@type": "ListItem", position: 7, name: "Dining on the Danube" },
                { "@type": "ListItem", position: 8, name: "Shore Excursions" },
                { "@type": "ListItem", position: 9, name: "Life Onboard" },
                { "@type": "ListItem", position: 10, name: "Best Time to Cruise the Danube" },
                { "@type": "ListItem", position: 11, name: "Is a Riverside Danube Cruise Worth It?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/riverside-danube-cruises/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Riverside ship sails the Danube?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside Mozart is the primary ship offering Danube River itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What countries do Riverside Danube Cruises visit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the itinerary, cruises may visit Hungary, Austria, Slovakia, Germany, and additional Central European destinations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long are Riverside Danube Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most itineraries range from 7 to 14 nights.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most cruises include selected guided shore excursions, with optional premium experiences available.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Wi-Fi included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Complimentary Wi-Fi is typically available throughout the voyage.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Danube good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. It offers iconic cities, diverse cultures, and beautiful scenery, making it one of Europe's best introductory river cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best time to cruise the Danube?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring, fall, and Christmas Market season are particularly popular, though every season offers unique experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside family friendly?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While families are welcome, Riverside primarily caters to adult travelers seeking a refined and relaxed luxury experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can recommend the best itinerary, explain promotions, and coordinate every aspect of your Danube cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code onboard Riverside Mozart?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The onboard dress code is generally elegant casual during the day and smart casual in the evenings, with no formal nights required.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are gratuities included in the cruise fare?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, onboard gratuities for the crew and local guides are generally included in your cruise fare, ensuring a seamless luxury experience.",
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
            q: "Which Riverside ship sails the Danube?",
            a: "Riverside Mozart is the primary ship offering Danube River itineraries.",
        },
        {
            q: "What countries do Riverside Danube Cruises visit?",
            a: "Depending on the itinerary, cruises may visit Hungary, Austria, Slovakia, Germany, and additional Central European destinations.",
        },
        {
            q: "How long are Riverside Danube Cruises?",
            a: "Most itineraries range from 7 to 14 nights.",
        },
        {
            q: "Are excursions included?",
            a: "Most cruises include selected guided shore excursions, with optional premium experiences available.",
        },
        {
            q: "Are drinks included?",
            a: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals.",
        },
        {
            q: "Is Wi-Fi included?",
            a: "Yes. Complimentary Wi-Fi is typically available throughout the voyage.",
        },
        {
            q: "Is the Danube good for first-time river cruisers?",
            a: "Absolutely. It offers iconic cities, diverse cultures, and beautiful scenery, making it one of Europe's best introductory river cruises.",
        },
        {
            q: "What is the best time to cruise the Danube?",
            a: "Spring, fall, and Christmas Market season are particularly popular, though every season offers unique experiences.",
        },
        {
            q: "Is Riverside family friendly?",
            a: "While families are welcome, Riverside primarily caters to adult travelers seeking a refined and relaxed luxury experience.",
        },
        {
            q: "Should I use a travel advisor?",
            a: "Yes. A luxury travel advisor can recommend the best itinerary, explain promotions, and coordinate every aspect of your Danube cruise.",
        },
        {
            q: "What is the dress code onboard Riverside Mozart?",
            a: "The onboard dress code is generally elegant casual during the day and smart casual in the evenings, with no formal nights required.",
        },
        {
            q: "Are gratuities included in the cruise fare?",
            a: "Yes, onboard gratuities for the crew and local guides are generally included in your cruise fare, ensuring a seamless luxury experience.",
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
const quickOverviewData = [
    { key: "bestfor", label: "Best For", value: "Couples, Luxury Travelers, First-Time River Cruisers" },
    { key: "river", label: "Main River", value: "Danube" },
    { key: "ship", label: "Signature Ship", value: "Riverside Mozart" },
    { key: "destinations", label: "Popular Destinations", value: "Budapest, Vienna, Bratislava, Passau, Melk" },
    { key: "style", label: "Cruise Style", value: "Boutique Luxury" },
    { key: "length", label: "Cruise Length", value: "Typically 7–14 nights" },
];

/* ── Destinations Along the Danube ────────────────────────────── */
const danubeDestinations = [
    {
        id: "budapest",
        title: "Budapest, Hungary",
        badge: "Budapest",
        icon: Landmark,
        // image: BudapestImage,
        desc: "Often called the \"Pearl of the Danube,\" Budapest is famous for its stunning Parliament building, thermal baths, grand boulevards, and historic Buda Castle.",
        columns: [
            {
                label: "Popular Experiences:",
                items: ["Fisherman's Bastion", "Hungarian Parliament", "Danube riverfront", "Thermal spas", "Local markets"],
            },
        ],
    },
    {
        id: "vienna",
        title: "Vienna, Austria",
        badge: "Vienna",
        icon: Music,
        // image: ViennaImage,
        desc: "Austria's elegant capital offers a blend of imperial history and world-famous music.",
        columns: [
            {
                label: "Highlights:",
                items: ["Schönbrunn Palace", "St. Stephen's Cathedral", "Vienna State Opera", "Coffee houses", "Classical concerts"],
            },
        ],
    },
    {
        id: "bratislava",
        title: "Bratislava, Slovakia",
        badge: "Bratislava",
        icon: MapPin,
        // image: BratislavaImage,
        desc: "A charming capital featuring a medieval Old Town, historic castle, cobblestone streets, and welcoming local cafés.",
        columns: [
            {
                label: "Highlights:",
                items: ["Medieval Old Town", "Bratislava Castle", "Cobblestone streets", "Historic cafés", "Local cuisine"],
            },
        ],
    },
    {
        id: "melk",
        title: "Melk, Austria",
        badge: "Melk",
        icon: Church,
        // image: MelkImage,
        desc: "Home to one of Europe's most impressive monasteries, Melk sits at the gateway to the scenic Wachau Valley.",
        columns: [
            {
                label: "Don't Miss:",
                items: ["Melk Abbey", "Wachau Valley", "Vineyards", "Scenic river views"],
            },
        ],
    },
    {
        id: "passau",
        title: "Passau, Germany",
        badge: "Passau",
        icon: Waves,
        // image: PassauImage,
        desc: "Known as the \"City of Three Rivers,\" Passau combines baroque architecture with rich history.",
        columns: [
            {
                label: "Popular Attractions:",
                items: ["St. Stephen's Cathedral", "Historic Old Town", "River promenades", "Local bakeries"],
            },
        ],
    },
    {
        id: "wachau",
        title: "The Beautiful Wachau Valley",
        badge: "Wachau Valley",
        icon: Grape,
        // image: WachauImage,
        desc: "One of the most scenic sections of the Danube is Austria's UNESCO-listed Wachau Valley. Many travelers consider this the highlight of their entire cruise.",
        columns: [
            {
                label: "Guests Enjoy:",
                items: ["Vineyards", "Historic castles", "Apricot orchards", "Charming villages", "Rolling hills", "Spectacular river scenery"],
            },
        ],
    },
];

/* ── Seasons Data ──────────────────────────────────────────────── */
const seasonsData = [
    {
        key: "spring",
        icon: Flower2,
        title: "Spring",
        range: "March – May",
        items: ["Blooming landscapes", "Mild weather", "Fewer crowds"],
    },
    {
        key: "summer",
        icon: Sun,
        title: "Summer",
        range: "June – August",
        items: ["Long daylight hours", "Festivals", "Warm temperatures"],
    },
    {
        key: "fall",
        icon: Leaf,
        title: "Fall",
        range: "September – October",
        items: ["Wine harvest season", "Colorful foliage", "Comfortable weather"],
    },
    {
        key: "winter",
        icon: Snowflake,
        title: "Winter",
        range: "November – December",
        items: ["Christmas markets", "Holiday decorations", "Festive atmosphere"],
    },
];


/* ── Main Component ──────────────────────────────────────────────── */
const RiversideDanubeCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuites, setReadMoreSuites] = useState(false);
    const [readMoreHeritage, setReadMoreHeritage] = useState(false);
    const [activeDestination, setActiveDestination] = useState("budapest");

    const currentDestination =
        danubeDestinations.find((d) => d.id === activeDestination) || danubeDestinations[0];

    const ActiveIcon = currentDestination.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Riverside Danube Cruises | Luxury Danube River Cruise Guide</title>
                <meta name="title" content="Riverside Danube Cruises | Luxury River Cruises Through Europe" />
                <meta
                    name="description"
                    content="Discover Riverside Danube Cruises featuring luxury suites, gourmet dining, and unforgettable journeys through Budapest, Vienna, Bratislava, and the Wachau Valley. Learn what to expect before you book."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Riverside Danube Cruises</h1>

                    <p>
                        The Danube River is one of Europe's most iconic waterways, flowing
                        through grand capitals, medieval villages, UNESCO World Heritage
                        sites, and breathtaking wine regions. A Riverside Danube Cruise
                        offers an elegant way to experience these destinations while
                        enjoying the comfort of a boutique luxury hotel on the water.
                    </p>

                    {readMore && (
                        <p>
                            Known for spacious suites, attentive service, gourmet dining,
                            and immersive itineraries, Riverside Luxury Cruises combines
                            relaxed sophistication with unforgettable European travel.
                            Whether you're visiting the Danube for the first time or
                            returning to discover new destinations, these voyages offer an
                            exceptional balance of culture, history, cuisine, and scenic
                            beauty.
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
                            Start Planning Your Danube Cruise
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
                                {quickOverviewData.map((row) => (
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

            {/* ── WHY CRUISE THE DANUBE ────────────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="why-cruise-the-danube"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Why Cruise the Danube?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={HeroImage}
                                        alt="Riverside Danube Cruise sailing past a European capital"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Stretching across Central Europe, the{" "}
                                    <strong>Danube</strong> connects some of the continent's
                                    most fascinating cities and landscapes. Every day brings
                                    a new destination, while every evening you return to the
                                    comfort of your luxury river ship.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Highlights Include:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Imperial capitals",
                                            "Historic castles",
                                            "UNESCO World Heritage sites",
                                            "Charming medieval towns",
                                            "Scenic vineyards",
                                            "Classical music heritage",
                                            "Rich culinary traditions",
                                            "Beautiful countryside",
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
                                        Start Planning Your Danube Cruise
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE RIVERSIDE LUXURY CRUISES ─────────────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="why-choose-riverside">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose Riverside Luxury Cruises?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Riverside delivers a refined river cruise experience focused on
                            quality rather than quantity. With only a small fleet of luxury
                            ships, Riverside creates an intimate experience that feels far
                            more personal than larger cruise lines.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Spacious luxury suites",
                                "Personalized service",
                                "Gourmet dining",
                                "Elegant contemporary interiors",
                                "Relaxed onboard atmosphere",
                                "Boutique hospitality",
                                "Carefully curated itineraries",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <Sparkles size={16} strokeWidth={2.5} />
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
                                        A boutique fleet creates an experience that feels far
                                        more personal than larger cruise lines.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: "310px" }}>
                                <img
                                    // src={MozartImage}
                                    alt="Boutique atmosphere aboard Riverside Mozart"
                                    className="adg-c-overview-img"
                                />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Boutique • Personalized • Elegant
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ALONG THE DANUBE ───────────────────────────── */}
            <section className="luc-destinations-section" id="luc-destinations">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Destinations Along the Danube</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Every stop along the Danube reveals a different side of Central
                            Europe's rich heritage — from imperial capitals to medieval
                            river towns and UNESCO-listed wine country.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {danubeDestinations.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeDestination === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveDestination(item.id)}
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

                        <div className="luc-dest-panel" key={activeDestination}>
                            <div className="luc-dest-img-wrap">
                                <img
                                    // src={currentDestination.image}
                                    alt={currentDestination.title}
                                    className="luc-dest-img"
                                />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentDestination.title}</span>
                                </div>
                            </div>

                            <p className="luc-dest-panel-desc">{currentDestination.desc}</p>

                            <div className="luc-dest-columns">
                                {currentDestination.columns.map((col, cIdx) => (
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
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RIVERSIDE MOZART ─────────────────────────────────────────── */}
            <section
                className="rlc-inc-section"
                id="riverside-mozart"
            >
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Riverside Mozart</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: '15px' }}></div>

                            <p className="rlc-inc-intro" style={{ margin: '0px', marginBottom: '30px' }}>
                                The flagship for many Danube itineraries is Riverside Mozart,
                                one of the most spacious luxury river ships sailing Europe. Its
                                generous size and thoughtful design create an exceptionally
                                comfortable onboard experience.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Large suites",
                                    "Elegant lounges",
                                    "Gourmet restaurants",
                                    "Sun deck",
                                    "Wellness facilities",
                                    "Personalized hospitality",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Check size={16} strokeWidth={3} className="rlc-inc-check-icon" />
                                        </span>
                                        <span className="rlc-inc-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rlc-inc-outro-box">
                                <p className="rlc-inc-outro-text">
                                    With custom-designed onboard venues and high staff-to-guest ratios, the Mozart offers a truly personalized luxury experience.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={MozartImage}
                                        alt="Riverside Mozart Ship"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={BudapestImage}
                                            alt="Budapest scenery"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={ViennaImage}
                                            alt="Vienna scenery"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS & LIFE ONBOARD ─────────────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }} id="onboard-experience">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">What's Included Onboard</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Riverside Luxury Cruises includes daily excursions and enriching onboard experiences that complement your journey along the Danube.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Shore Excursions */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Compass size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Shore Excursions</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Included excursions often showcase the region's rich history and culture.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Popular experiences include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Guided city tours",
                                            "Palace visits",
                                            "Abbey tours",
                                            "Wine tastings",
                                            "Local markets",
                                            "Cultural performances",
                                            "Scenic countryside drives",
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
                                            Optional premium excursions offer deeper exploration for travelers seeking unique experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Life Onboard */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Ship size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Life Onboard</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Between destinations, guests enjoy a relaxed and sophisticated atmosphere.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Activities may include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Destination lectures",
                                            "Live music",
                                            "Wine tastings",
                                            "Scenic cruising",
                                            "Cocktail hours",
                                            "Cooking demonstrations",
                                            "Quiet time on the sun deck",
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
                                            Rather than nonstop entertainment, Riverside emphasizes meaningful travel and relaxation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LUXURY ACCOMMODATIONS ────────────────────────────────────── */}
            <section className="luc-why-section" id="luxury-accommodations">
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
                                marginTop: "105px"
                            }}
                        >
                            <img
                                // src={SuiteImage}
                                alt="Luxury suite aboard Riverside Mozart"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Luxury Accommodations</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            Riverside's suites are among the largest in European river
                            cruising, designed for travelers who value comfort throughout
                            their journey.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "King-size beds",
                                "Marble bathrooms",
                                "Sitting areas",
                                "Luxury linens",
                                "Premium bath amenities",
                                "River views",
                                "Climate control",
                                "Spacious storage",
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

                        <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "30px" }}>
                            <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                Start Planning Your Danube Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHO SHOULD CHOOSE A RIVERSIDE DANUBE CRUISE ─────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="who-should-choose">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Who Should Choose a Riverside Danube Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Its combination of iconic cities and beautiful scenery makes
                            the Danube one of Europe's most popular river cruises.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {[
                            "First-time river cruisers",
                            "Couples",
                            "Luxury travelers",
                            "History enthusiasts",
                            "Food and wine lovers",
                            "Cultural explorers",
                            "Anniversary celebrations",
                            "Multi-generational adult family vacations",
                        ].map((label, i) => (
                            <div key={i} className="adg-c-overview-item">
                                <span className="adg-c-overview-icon">
                                    <Check size={16} strokeWidth={2.5} />
                                </span>
                                <span className="adg-c-overview-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DINING ON THE DANUBE ─────────────────────────────────────── */}
            <section className="rdd-dining-section" id="dining-on-the-danube">
                <div className="rdd-dining-container">
                    <div className="rdd-dining-header">
                        <h2 className="rdd-dining-title">Dining on the Danube</h2>
                        <div className="rdd-dining-accent"></div>

                    </div>

                    <div className="rdd-dining-split">
                        <div className="rdd-dining-image-col">
                            <div className="rdd-dining-image-wrapper">
                                <img
                                    // src={DiningImage}
                                    alt="Gourmet dining aboard a Riverside Danube Cruise"
                                    className="rdd-dining-img"
                                />
                                <div className="rdd-dining-img-overlay">
                                    <span className="rdd-dining-img-label">
                                        Gourmet • Regional • Elegant
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rdd-dining-content-col">
                            <p className="rdd-dining-intro">
                                A Danube river cruise is as much a culinary journey as it is a visual one. As you sail past vineyards and historic towns, the menus onboard change to showcase the rich culinary heritage of Central Europe.
                            </p>

                            <div className="rdd-dining-grid">
                                {[
                                    { label: "Austrian specialties", icon: Sparkles },
                                    { label: "Hungarian cuisine", icon: Sparkles },
                                    { label: "German classics", icon: Sparkles },
                                    { label: "Seasonal ingredients", icon: Leaf },
                                    { label: "Fresh pastries", icon: Sparkles },
                                    { label: "Local cheeses", icon: Sparkles },
                                    { label: "Regional wines", icon: Wine },
                                    { label: "Gourmet desserts", icon: Sparkles },
                                ].map((item, i) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={i} className="rdd-dining-card">
                                            <span className="rdd-dining-icon-wrap">
                                                <IconComponent size={18} strokeWidth={2.2} />
                                            </span>
                                            <span className="rdd-dining-card-label">{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* ── BEST TIME TO CRUISE THE DANUBE ──────────────────────────── */}
            <section className="rdd-seasons-section" id="best-time-to-cruise">
                <div className="rdd-seasons-container">
                    <div className="rdd-seasons-header">
                        <h2 className="rdd-seasons-title">Best Time to Cruise the Danube</h2>
                        <div className="rdd-seasons-accent"></div>
                        <p className="rdd-seasons-intro">
                            Each season offers a unique perspective on the Danube.
                        </p>
                    </div>

                    <div className="rdd-seasons-grid">
                        {seasonsData.map((season) => {
                            const SeasonIcon = season.icon;
                            return (
                                <div key={season.key} className="rdd-seasons-card">
                                    <div className="rdd-seasons-card-body">
                                        <span className="rdd-seasons-icon-wrap">
                                            <SeasonIcon size={22} strokeWidth={1.6} />
                                        </span>
                                        <h3 className="rdd-seasons-card-title">{season.title}</h3>
                                        <p className="rdd-seasons-card-range">
                                            {season.range}
                                        </p>
                                        <ul className="rdd-seasons-card-list">
                                            {season.items.map((point, idx) => (
                                                <li key={idx} className="rdd-seasons-card-list-item">
                                                    <span className="rdd-seasons-card-list-dot"></span>
                                                    <span className="rdd-seasons-card-list-text">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rdd-seasons-card-bar"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── IS A RIVERSIDE DANUBE CRUISE WORTH IT ───────────────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-it">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is a Riverside Danube Cruise Worth It?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                For travelers seeking a luxury European vacation with
                                exceptional service, spacious accommodations, and immersive
                                cultural experiences, the answer is yes.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The Danube combines some of Europe's most famous cities
                                    with charming villages and breathtaking scenery, while
                                    Riverside enhances the journey through boutique
                                    hospitality and refined onboard experiences.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Danube Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={WorthItImage}
                                    alt="Elegant evening lounge aboard a Riverside Danube Cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>
                                <div className="rlc-lc-worth-media-badge">
                                    <span>Understated • Elegant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
                id="Asc-luxury-travel-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
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
                                Plan Every Detail of Your Danube Journey
                            </h3>
                            <p className="Avr-planning-left-body">
                                An experienced luxury travel advisor can help you compare
                                Danube itineraries, choose the best sailing date, select the
                                ideal suite, and coordinate flights, hotels, transfers, and
                                excursions — so every detail of your journey is carefully
                                planned.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Expert guidance ensures every detail of your journey is
                                    carefully planned.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <MapPinned size={18} />, label: "Compare Danube itineraries" },
                                    { icon: <Ship size={18} />, label: "Choose the best sailing date" },
                                    { icon: <Home size={18} />, label: "Select the ideal suite" },
                                    { icon: <Plane size={18} />, label: "Arrange flights" },
                                    { icon: <Hotel size={18} />, label: "Coordinate hotels" },
                                    { icon: <Anchor size={18} />, label: "Organize private transfers" },
                                    { icon: <Compass size={18} />, label: "Recommend excursions" },
                                    { icon: <BadgePercent size={18} />, label: "Explain available promotions" },
                                    { icon: <Globe size={18} />, label: "Provide ongoing travel support" },
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
                            Everything travelers need to know before booking a Riverside
                            Danube Cruise.
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
                        alt="Riverside Mozart sailing the Danube River"
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
                                    A Journey Through Central <br /> Europe's Finest Heritage
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        A Riverside Danube Cruise is one of the finest ways to
                                        experience Central Europe. From Budapest's grand
                                        architecture and Vienna's imperial elegance to the
                                        vineyards of the Wachau Valley and the medieval charm
                                        of Passau, every stop reveals a different side of
                                        Europe's rich heritage.

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
                                                Combined with Riverside's spacious suites, exceptional
                                                cuisine, and personalized boutique service, the Danube
                                                becomes more than a river cruise — it becomes a
                                                luxurious journey through some of the continent's most
                                                unforgettable destinations.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">


                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you compare itineraries, select the
                                                perfect suite aboard Riverside Mozart, and create a
                                                personalized Danube River vacation designed around your
                                                travel style.
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
                                            Start Planning Your Riverside Cruise
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
                                            "Compare Danube itineraries",
                                            "Choose the best sailing date",
                                            "Select the ideal suite",
                                            "Arrange flights",
                                            "Coordinate hotels",
                                            "Organize private transfers",
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

export default RiversideDanubeCruises;