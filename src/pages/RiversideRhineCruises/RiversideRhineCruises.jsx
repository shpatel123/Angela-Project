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
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Rhine Cruises photography once
   available. Paths assume a new /assets/RiversideRhineCruises folder. */
// import HeroImage from "../../assets/RiversideRhineCruises/riverside-rhine-gorge-hero.jpg";
// import RavelImage from "../../assets/RiversideRhineCruises/riverside-ravel-rhine.jpg";
// import AmsterdamImage from "../../assets/RiversideRhineCruises/riverside-rhine-amsterdam.jpg";
// import CologneImage from "../../assets/RiversideRhineCruises/riverside-rhine-cologne.jpg";
// import KoblenzImage from "../../assets/RiversideRhineCruises/riverside-rhine-koblenz.jpg";
// import RudesheimImage from "../../assets/RiversideRhineCruises/riverside-rhine-rudesheim.jpg";
// import StrasbourgImage from "../../assets/RiversideRhineCruises/riverside-rhine-strasbourg.jpg";
// import BaselImage from "../../assets/RiversideRhineCruises/riverside-rhine-basel.jpg";
// import SuiteImage from "../../assets/RiversideRhineCruises/riverside-rhine-suite.jpg";
// import DiningImage from "../../assets/RiversideRhineCruises/riverside-rhine-dining.jpg";
// import ExcursionImage from "../../assets/RiversideRhineCruises/riverside-rhine-excursion.jpg";
// import WorthItImage from "../../assets/RiversideRhineCruises/riverside-rhine-evening-lounge.jpg";
// import CTAImage from "../../assets/RiversideRhineCruises/riverside-rhine-ship-exterior.jpg";

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
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#webpage",
            name: "Riverside Rhine Cruises | Luxury Rhine River Cruise Guide",
            url: "https://tripsandships.com/riverside-rhine-cruises",
            description:
                "Explore Riverside Rhine Cruises through Germany, France, Switzerland, and the Netherlands. Discover castles, vineyards, charming villages, luxury suites, gourmet dining, and personalized service.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#article",
            headline: "Riverside Rhine Cruises | Luxury European River Cruises",
            description:
                "A complete guide to Riverside Rhine Cruises, covering destinations, the Riverside Ravel, accommodations, dining, excursions, and whether a Riverside Rhine Cruise is worth booking.",
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
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#breadcrumb",
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
                    name: "Riverside Rhine Cruises",
                    item: "https://tripsandships.com/riverside-rhine-cruises",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#touristtrip",
            name: "Riverside Rhine Cruise",
            touristType: "Couples, luxury travelers, first-time European visitors",
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Amsterdam, Netherlands" },
                    { "@type": "ListItem", position: 2, name: "Cologne, Germany" },
                    { "@type": "ListItem", position: 3, name: "Koblenz, Germany" },
                    { "@type": "ListItem", position: 4, name: "Rüdesheim, Germany" },
                    { "@type": "ListItem", position: 5, name: "Strasbourg, France" },
                    { "@type": "ListItem", position: 6, name: "Basel, Switzerland" },
                ],
            },
        },
        {
            "@type": "Cruise",
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#cruise",
            name: "Riverside Rhine Cruise",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
            departurePort: {
                "@type": "BoatTerminal",
                name: "Amsterdam, Netherlands",
            },
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Amsterdam, Netherlands" },
                    { "@type": "ListItem", position: 2, name: "Cologne, Germany" },
                    { "@type": "ListItem", position: 3, name: "Koblenz, Germany" },
                    { "@type": "ListItem", position: 4, name: "Rüdesheim, Germany" },
                    { "@type": "ListItem", position: 5, name: "Strasbourg, France" },
                    { "@type": "ListItem", position: 6, name: "Basel, Switzerland" },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#destinations",
            name: "Riverside Rhine Cruise Destinations",
            itemListElement: [
                { "@type": "Place", position: 1, name: "Amsterdam, Netherlands" },
                { "@type": "Place", position: 2, name: "Cologne, Germany" },
                { "@type": "Place", position: 3, name: "Koblenz, Germany" },
                { "@type": "Place", position: 4, name: "Rüdesheim, Germany" },
                { "@type": "Place", position: 5, name: "Strasbourg, France" },
                { "@type": "Place", position: 6, name: "Basel, Switzerland" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#service",
            serviceType: "Luxury Rhine River Cruise Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning support to help travelers compare Rhine itineraries and choose the best sailing, ship, and suite for their trip.",
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#itemlist",
            name: "What This Riverside Rhine Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Overview" },
                { "@type": "ListItem", position: 2, name: "Why Cruise the Rhine?" },
                { "@type": "ListItem", position: 3, name: "Why Choose Riverside Luxury Cruises?" },
                { "@type": "ListItem", position: 4, name: "Destinations Along the Rhine" },
                { "@type": "ListItem", position: 5, name: "Riverside Ravel" },
                { "@type": "ListItem", position: 6, name: "Luxury Accommodations" },
                { "@type": "ListItem", position: 7, name: "Gourmet Dining" },
                { "@type": "ListItem", position: 8, name: "Included Shore Excursions" },
                { "@type": "ListItem", position: 9, name: "Life Onboard" },
                { "@type": "ListItem", position: 10, name: "Best Time to Cruise the Rhine" },
                { "@type": "ListItem", position: 11, name: "Is a Riverside Rhine Cruise Worth It?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/riverside-rhine-cruises/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Riverside ship sails the Rhine?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside Ravel is commonly featured on Rhine River itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which countries does the Rhine cruise visit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most itineraries include the Netherlands, Germany, France, and Switzerland.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long are Riverside Rhine Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most sailings range from 7 to 14 nights.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are shore excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Most itineraries include selected guided excursions, with optional premium experiences available.",
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
                        text: "Yes. Complimentary Wi-Fi is typically included throughout the voyage.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Rhine good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. The Rhine is one of Europe's most popular and scenic river cruise destinations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best time to cruise the Rhine?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring, fall, and Christmas Market season are especially popular thanks to pleasant weather and seasonal experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside's boutique atmosphere, luxurious suites, and personalized service make it an excellent choice for romantic getaways.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help compare itineraries, recommend the best suite, and coordinate every detail of your trip.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code onboard Riverside Ravel?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The dress code is elegant casual during the day and smart casual in the evenings, with no formal wear required.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are gratuities included in the fare for a Riverside Rhine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, all onboard gratuities for the crew and local guides during included excursions are covered in your cruise fare.",
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
            q: "Which Riverside ship sails the Rhine?",
            a: "Riverside Ravel is commonly featured on Rhine River itineraries.",
        },
        {
            q: "Which countries does the Rhine cruise visit?",
            a: "Most itineraries include the Netherlands, Germany, France, and Switzerland.",
        },
        {
            q: "How long are Riverside Rhine Cruises?",
            a: "Most sailings range from 7 to 14 nights.",
        },
        {
            q: "Are shore excursions included?",
            a: "Yes. Most itineraries include selected guided excursions, with optional premium experiences available.",
        },
        {
            q: "Are drinks included?",
            a: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals.",
        },
        {
            q: "Is Wi-Fi included?",
            a: "Yes. Complimentary Wi-Fi is typically included throughout the voyage.",
        },
        {
            q: "Is the Rhine good for first-time river cruisers?",
            a: "Absolutely. The Rhine is one of Europe's most popular and scenic river cruise destinations.",
        },
        {
            q: "What is the best time to cruise the Rhine?",
            a: "Spring, fall, and Christmas Market season are especially popular thanks to pleasant weather and seasonal experiences.",
        },
        {
            q: "Is Riverside suitable for couples?",
            a: "Yes. Riverside's boutique atmosphere, luxurious suites, and personalized service make it an excellent choice for romantic getaways.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help compare itineraries, recommend the best suite, and coordinate every detail of your trip.",
        },
        {
            q: "What is the dress code onboard Riverside Ravel?",
            a: "The dress code is elegant casual during the day and smart casual in the evenings, with no formal wear required.",
        },
        {
            q: "Are gratuities included in the fare for a Riverside Rhine cruise?",
            a: "Yes, all onboard gratuities for the crew and local guides during included excursions are covered in your cruise fare.",
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
    { key: "bestfor", label: "Best For", value: "Couples, Luxury Travelers, First-Time European Visitors" },
    { key: "river", label: "Main River", value: "Rhine" },
    { key: "ship", label: "Featured Ship", value: "Riverside Ravel" },
    { key: "destinations", label: "Popular Countries", value: "Netherlands, Germany, France, Switzerland" },
    { key: "style", label: "Cruise Style", value: "Boutique Luxury" },
    { key: "length", label: "Cruise Length", value: "Typically 7–14 nights" },
];

/* ── Destinations Along the Rhine ─────────────────────────────── */
const rhineDestinations = [
    {
        id: "amsterdam",
        title: "Amsterdam, Netherlands",
        badge: "Amsterdam",
        icon: Landmark,
        // image: AmsterdamImage,
        desc: "Many Rhine cruises begin or end in Amsterdam, offering the perfect introduction to Northern Europe with its historic canals and world-famous museums.",
        columns: [
            {
                label: "Highlights:",
                items: ["Historic canals", "Rijksmuseum", "Anne Frank House", "Flower markets", "World-famous museums"],
            },
        ],
    },
    {
        id: "cologne",
        title: "Cologne, Germany",
        badge: "Cologne",
        icon: Church,
        // image: CologneImage,
        desc: "One of Germany's oldest cities, Cologne is home to an impressive Gothic cathedral — one of Europe's most recognizable landmarks.",
        columns: [
            {
                label: "Highlights:",
                items: ["Cologne Cathedral", "Rhine promenade", "Historic Old Town", "Local breweries", "Roman history"],
            },
        ],
    },
    {
        id: "koblenz",
        title: "Koblenz, Germany",
        badge: "Koblenz",
        icon: Waves,
        // image: KoblenzImage,
        desc: "Located where the Rhine and Moselle Rivers meet, Koblenz offers scenic river views and historic squares steeped in centuries of history.",
        columns: [
            {
                label: "Highlights:",
                items: ["Deutsches Eck", "Ehrenbreitstein Fortress", "Historic squares", "Scenic river views", "Charming cafés"],
            },
        ],
    },
    {
        id: "rhine-gorge",
        title: "The Legendary Rhine Gorge",
        badge: "Rhine Gorge",
        icon: Waves,
        // image: GorgeImage,
        desc: "The highlight of many itineraries is cruising through the UNESCO-listed Upper Middle Rhine Valley. Many consider this one of Europe's most beautiful river cruising experiences.",
        columns: [
            {
                label: "Guests enjoy breathtaking views of:",
                items: [
                    "Hilltop castles",
                    "Medieval villages",
                    "Steep vineyards",
                    "Forested hills",
                    "The famous Lorelei Rock",
                ],
            },
        ],
    },
    {
        id: "rudesheim",
        title: "Rüdesheim, Germany",
        badge: "Rüdesheim",
        icon: Grape,
        // image: RudesheimImage,
        desc: "This picturesque wine town is a favorite stop on Rhine itineraries, set among terraced vineyards and medieval streets.",
        columns: [
            {
                label: "Guests Enjoy:",
                items: ["Vineyards", "Wine tastings", "Medieval streets", "Local music", "Cable car views"],
            },
        ],
    },
    {
        id: "strasbourg",
        title: "Strasbourg, France",
        badge: "Strasbourg",
        icon: Sparkles,
        // image: StrasbourgImage,
        desc: "Blending French and German influences, Strasbourg charms visitors with its cathedral, canals, and celebrated Alsatian cuisine.",
        columns: [
            {
                label: "Highlights:",
                items: ["Strasbourg Cathedral", "Petite France district", "Alsatian cuisine", "Historic architecture", "Charming canals"],
            },
        ],
    },
    {
        id: "basel",
        title: "Basel, Switzerland",
        badge: "Basel",
        icon: MapPin,
        // image: BaselImage,
        desc: "Many Riverside Rhine Cruises conclude in Basel, a refined city of art museums, historic squares, and a beautiful Rhine waterfront.",
        columns: [
            {
                label: "Highlights:",
                items: ["Old Town", "Rhine waterfront", "Art museums", "Historic squares", "Swiss cuisine"],
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
        items: ["Blooming vineyards", "Comfortable temperatures", "Fewer crowds"],
    },
    {
        key: "summer",
        icon: Sun,
        title: "Summer",
        range: "June – August",
        items: ["Long daylight hours", "Outdoor festivals", "Vibrant cities"],
    },
    {
        key: "fall",
        icon: Leaf,
        title: "Fall",
        range: "September – October",
        items: ["Harvest season", "Wine festivals", "Autumn foliage"],
    },
    {
        key: "winter",
        icon: Snowflake,
        title: "Winter",
        range: "November – December",
        items: ["Christmas Markets", "Holiday lights", "Festive traditions"],
    },
];


/* ── Main Component ──────────────────────────────────────────────── */
const RiversideRhineCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuites, setReadMoreSuites] = useState(false);
    const [readMoreHeritage, setReadMoreHeritage] = useState(false);
    const [activeDestination, setActiveDestination] = useState("amsterdam");

    const currentDestination =
        rhineDestinations.find((d) => d.id === activeDestination) || rhineDestinations[0];

    const ActiveIcon = currentDestination.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Riverside Rhine Cruises | Luxury Rhine River Cruise Guide</title>
                <meta name="title" content="Riverside Rhine Cruises | Luxury European River Cruises" />
                <meta
                    name="description"
                    content="Explore Riverside Rhine Cruises through Germany, France, Switzerland, and the Netherlands. Discover castles, vineyards, charming villages, luxury suites, gourmet dining, and personalized service."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Riverside Rhine Cruises</h1>

                    <p>
                        A Riverside Rhine Cruise offers one of Europe's most scenic and
                        culturally rich travel experiences. Flowing through Switzerland,
                        France, Germany, and the Netherlands, the Rhine River is famous
                        for its fairy-tale castles, vineyard-covered hillsides, medieval
                        towns, and vibrant cities.
                    </p>

                    {readMore && (
                        <p>
                            With Riverside Luxury Cruises, you'll experience this legendary
                            river aboard an elegant boutique ship featuring spacious
                            suites, exceptional dining, and personalized service. Every day
                            brings a new destination, while every evening offers the
                            comfort and sophistication of a luxury floating hotel. Whether
                            you're cruising past the castles of the Rhine Gorge or
                            exploring charming villages known for wine and history, a
                            Riverside Rhine Cruise combines breathtaking scenery with
                            refined luxury.
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
                            Start Planning Your Rhine Cruise
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

            {/* ── WHY CRUISE THE RHINE ─────────────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="why-cruise-the-rhine"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Why Cruise the Rhine?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={HeroImage}
                                        alt="Riverside Rhine Cruise sailing past castles and vineyards"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    The <strong>Rhine</strong> is often considered Europe's
                                    most picturesque river. The combination of natural
                                    beauty and cultural history makes it one of the world's
                                    premier river cruise destinations.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Highlights Include:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Medieval castles",
                                            "UNESCO World Heritage sites",
                                            "Famous wine regions",
                                            "Fairytale villages",
                                            "Historic cities",
                                            "Scenic vineyards",
                                            "Riverfront promenades",
                                            "Beautiful mountain landscapes",
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
                                        Start Planning Your Rhine Cruise
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
                            Riverside delivers a boutique luxury experience centered on
                            comfort and personalized service. Instead of large crowds,
                            Riverside focuses on creating meaningful travel experiences
                            with attentive service and luxurious accommodations.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Spacious luxury suites",
                                "Gourmet dining",
                                "Exceptional hospitality",
                                "Elegant contemporary design",
                                "Relaxed atmosphere",
                                "Carefully curated itineraries",
                                "Intimate onboard environment",
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
                                    // src={RavelImage}
                                    alt="Boutique atmosphere aboard Riverside Ravel"
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

            {/* ── DESTINATIONS ALONG THE RHINE ─────────────────────────────── */}
            <section className="luc-destinations-section" id="luc-destinations">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Destinations Along the Rhine</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Every stop along the Rhine reveals a different side of Europe
                            — from historic capitals to medieval river towns and
                            UNESCO-listed wine country.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {rhineDestinations.map((item) => {
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



            {/* ── RIVERSIDE RAVEL ───────────────────────────────────────────── */}
            <section
                className="rlc-inc-section"
                id="riverside-ravel"
            >
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Riverside Ravel</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: '15px' }}></div>

                            <p className="rlc-inc-intro" style={{ margin: '0px', marginBottom: '30px' }}>
                                The Riverside Ravel is the featured ship for many Rhine
                                itineraries. Its boutique atmosphere makes it ideal for
                                travelers seeking a peaceful and refined vacation.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Spacious luxury suites",
                                    "Panoramic observation lounge",
                                    "Gourmet dining",
                                    "Elegant interiors",
                                    "Wellness facilities",
                                    "Sun deck for scenic cruising",
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
                                    With thoughtfully designed onboard venues and attentive
                                    service, the Ravel offers a truly personalized luxury
                                    experience.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={RavelImage}
                                        alt="Riverside Ravel Ship"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={CologneImage}
                                            alt="Cologne scenery"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={RudesheimImage}
                                            alt="Rüdesheim vineyard scenery"
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
                        <h2 className="azs-section-title">Included Shore Excursions &amp; Life Onboard</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Riverside Luxury Cruises includes guided experiences and
                            enriching onboard moments that complement your journey along
                            the Rhine.
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
                                    <h3 className="azs-dining-title">Included Shore Excursions</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Many itineraries include guided experiences that
                                    showcase the region's rich history and culture.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Popular experiences include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Walking tours",
                                            "Castle visits",
                                            "Wine tastings",
                                            "Cathedral tours",
                                            "Museum visits",
                                            "Cultural demonstrations",
                                            "Local market visits",
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
                                            Optional premium excursions allow guests to enjoy
                                            even deeper cultural immersion.
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
                                    Between ports, guests can relax in an atmosphere that is
                                    elegant, peaceful, and designed for travelers who value
                                    relaxation.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Activities may include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Live piano music",
                                            "Destination talks",
                                            "Wine tastings",
                                            "Scenic cruising",
                                            "Cocktail hours",
                                            "Quiet reading lounges",
                                            "Panoramic river views",
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
                                            The onboard atmosphere is elegant, peaceful, and
                                            designed for travelers who value relaxation.
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
                                alt="Luxury suite aboard Riverside Ravel"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Luxury Accommodations</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            Riverside suites provide exceptional comfort. Many
                            accommodations are among the largest found on European river
                            cruises.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "King-size beds",
                                "Marble bathrooms",
                                "Luxury linens",
                                "Spacious sitting areas",
                                "Premium amenities",
                                "River views",
                                "Climate control",
                                "Elegant contemporary décor",
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
                                Start Planning Your Rhine Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHO SHOULD CHOOSE A RIVERSIDE RHINE CRUISE ──────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="who-should-choose">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Who Should Choose a Riverside Rhine Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Its combination of iconic landmarks and breathtaking scenery
                            appeals to a wide range of travelers.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {[
                            "Couples",
                            "First-time European travelers",
                            "Castle lovers",
                            "History enthusiasts",
                            "Wine lovers",
                            "Luxury travelers",
                            "Photography enthusiasts",
                            "Anniversary celebrations",
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

            {/* ── GOURMET DINING ────────────────────────────────────────────── */}
            <section className="rdd-dining-section" id="gourmet-dining">
                <div className="rdd-dining-container">
                    <div className="rdd-dining-header">
                        <h2 className="rdd-dining-title">Gourmet Dining</h2>
                        <div className="rdd-dining-accent"></div>

                    </div>

                    <div className="rdd-dining-split">
                        <div className="rdd-dining-image-col">
                            <div className="rdd-dining-image-wrapper">
                                <img
                                    // src={DiningImage}
                                    alt="Gourmet dining aboard a Riverside Rhine Cruise"
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
                                Dining showcases the culinary traditions of the Rhine
                                region. Meals are thoughtfully prepared using fresh local
                                ingredients whenever possible.
                            </p>

                            <div className="rdd-dining-grid">
                                {[
                                    { label: "German specialties", icon: Sparkles },
                                    { label: "French cuisine", icon: Sparkles },
                                    { label: "Dutch influences", icon: Sparkles },
                                    { label: "Seasonal ingredients", icon: Leaf },
                                    { label: "Fresh pastries", icon: Sparkles },
                                    { label: "Regional cheeses", icon: Sparkles },
                                    { label: "Local wines", icon: Wine },
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




            {/* ── BEST TIME TO CRUISE THE RHINE ───────────────────────────── */}
            <section className="rdd-seasons-section" id="best-time-to-cruise">
                <div className="rdd-seasons-container">
                    <div className="rdd-seasons-header">
                        <h2 className="rdd-seasons-title">Best Time to Cruise the Rhine</h2>
                        <div className="rdd-seasons-accent"></div>
                        <p className="rdd-seasons-intro">
                            Each season offers a unique perspective on the Rhine River.
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

            {/* ── IS A RIVERSIDE RHINE CRUISE WORTH IT ────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-it">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is a Riverside Rhine Cruise Worth It?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                For travelers who appreciate elegant accommodations,
                                exceptional cuisine, and immersive European experiences, a
                                Riverside Rhine Cruise delivers outstanding value.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The combination of historic cities, dramatic
                                    landscapes, world-famous wine regions, and Riverside's
                                    personalized service creates a vacation that's both
                                    relaxing and culturally enriching.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Rhine Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={WorthItImage}
                                    alt="Elegant evening lounge aboard a Riverside Rhine Cruise"
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
                                Plan Every Detail of Your Rhine Journey
                            </h3>
                            <p className="Avr-planning-left-body">
                                An experienced luxury travel advisor can help you compare
                                Rhine itineraries, select the ideal suite, coordinate
                                flights, arrange hotels, plan private transfers, and
                                recommend shore excursions — so every aspect of your Rhine
                                cruise is tailored to your travel style.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional guidance ensures every aspect of your Rhine
                                    cruise is tailored to your travel style.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <MapPinned size={18} />, label: "Compare Rhine itineraries" },
                                    { icon: <Home size={18} />, label: "Select the ideal suite" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights" },
                                    { icon: <Hotel size={18} />, label: "Arrange hotels" },
                                    { icon: <Anchor size={18} />, label: "Plan private transfers" },
                                    { icon: <Compass size={18} />, label: "Recommend shore excursions" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions" },
                                    { icon: <Globe size={18} />, label: "Customize your vacation" },
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
                            Rhine Cruise.
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
                        alt="Riverside Ravel sailing the Rhine River"
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
                                    A Journey Through the Heart <br /> of Europe
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        A Riverside Rhine Cruise combines some of Europe's
                                        most iconic landscapes with boutique luxury and
                                        personalized service. From Amsterdam's canals and
                                        Cologne's Gothic cathedral to the vineyards of
                                        Rüdesheim and the castles of the Rhine Gorge, every
                                        destination offers unforgettable experiences.

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
                                                Whether you're celebrating a special occasion,
                                                planning your first European river cruise, or
                                                simply looking to travel in comfort and style,
                                                Riverside delivers an exceptional journey through
                                                the heart of Europe.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">


                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you compare Rhine itineraries,
                                                select the ideal suite aboard Riverside Ravel, and
                                                create a customized luxury river cruise tailored
                                                to your interests.
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
                                            "Compare Rhine itineraries",
                                            "Select the ideal suite",
                                            "Coordinate flights",
                                            "Arrange hotels",
                                            "Plan private transfers",
                                            "Recommend shore excursions",
                                            "Explain promotions",
                                            "Customize your vacation",
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

export default RiversideRhineCruises;