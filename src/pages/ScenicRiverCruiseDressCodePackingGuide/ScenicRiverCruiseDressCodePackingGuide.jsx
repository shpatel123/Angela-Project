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
    Crown,
    Eye,
    Shirt,
    Footprints,
    Umbrella,
    Luggage,
    Sun,
    Snowflake,
    CloudRain,
    Leaf,
    Backpack,
    Camera,
    Plug,
    FileText,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic dress code / packing photography
   once available. Paths assume a new
   /assets/ScenicDressCodePacking folder. */
// import HeroImage from "../../assets/ScenicDressCodePacking/scenic-packing-hero.jpg";
// import DiningAttireImage from "../../assets/ScenicDressCodePacking/scenic-dinner-attire.jpg";
// import ExcursionImage from "../../assets/ScenicDressCodePacking/scenic-excursion-shoes.jpg";
// import LuggageImage from "../../assets/ScenicDressCodePacking/scenic-luggage.jpg";
// import ChristmasMarketImage from "../../assets/ScenicDressCodePacking/scenic-christmas-market.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";
import "../VikingCruises/VikingCruises.css";

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
            "@id": "https://tripsandships.com/scenic-river-cruises/dress-code-packing/#webpage",
            name: "Scenic River Cruise Dress Code & Packing Guide (2026) | What to Wear",
            url: "https://tripsandships.com/scenic-river-cruises/dress-code-packing",
            description:
                "Wondering what to wear on a Scenic River Cruise? Learn the dress code for daytime, evenings, excursions, and discover the ultimate Scenic River Cruise packing list for every season.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/dress-code-packing/#article",
            headline: "Scenic River Cruise Dress Code & Packing Guide",
            description:
                "A complete guide to Scenic River Cruise attire and packing, including daytime wear, dinner dress code, seasonal packing tips, and a full packing checklist.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/dress-code-packing/#breadcrumb",
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
                    name: "Scenic River Cruise Dress Code & Packing Guide",
                    item: "https://tripsandships.com/scenic-river-cruises/dress-code-packing",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/dress-code-packing/#itemlist",
            name: "Scenic River Cruise Dress Code & Packing Guide — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Scenic Dress Code at a Glance" },
                { "@type": "ListItem", position: 3, name: "Is There a Formal Night?" },
                { "@type": "ListItem", position: 4, name: "What to Wear During the Day, Excursions & Dinner" },
                { "@type": "ListItem", position: 5, name: "Seasonal Packing Guide" },
                { "@type": "ListItem", position: 6, name: "Essential Packing Checklist" },
                { "@type": "ListItem", position: 7, name: "Laundry Onboard" },
                { "@type": "ListItem", position: 8, name: "Luggage Tips" },
                { "@type": "ListItem", position: 9, name: "Common Packing Mistakes" },
                { "@type": "ListItem", position: 10, name: "Scenic vs. Ocean Cruise Dress Codes" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 12, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/dress-code-packing/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the dress code on a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic follows a smart casual dress code. Guests typically wear comfortable clothing during the day and slightly dressier attire for dinner.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are there formal nights?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Scenic River Cruises do not have mandatory formal nights.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I wear jeans?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Neat, dark jeans are generally acceptable during the day and may be suitable for some evening occasions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What shoes should I pack?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Comfortable walking shoes are essential due to cobblestone streets, walking tours, and historic sites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do I need a jacket for dinner?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A jacket is optional. Most men wear collared shirts or polos, while women choose dresses or smart casual separates.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should I pack for a Christmas Market cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Warm clothing including a winter coat, gloves, hat, waterproof boots, scarves, and thermal layers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is there laundry service onboard?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many Scenic ships offer laundry services, allowing guests to pack fewer clothes for longer itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I bring a universal power adapter?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A universal adapter is highly recommended for European river cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I wear shorts onboard?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Shorts are appropriate during warm-weather daytime activities but are less common at dinner.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much luggage should I bring?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most travelers only need one medium suitcase and one carry-on for a 7 to 10-night Scenic River Cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What shouldn't I pack?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avoid packing formal gowns, tuxedos, too many shoes, or bulky clothing that you are unlikely to wear.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you choose the right itinerary, explain seasonal weather, provide packing advice, and coordinate every aspect of your trip.",
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
            q: "What is the dress code on a Scenic River Cruise?",
            a: "Scenic follows a smart casual dress code. Guests typically wear comfortable clothing during the day and slightly dressier attire for dinner.",
        },
        {
            q: "Are there formal nights?",
            a: "No. Scenic River Cruises do not have mandatory formal nights.",
        },
        {
            q: "Can I wear jeans?",
            a: "Yes. Neat, dark jeans are generally acceptable during the day and may be suitable for some evening occasions.",
        },
        {
            q: "What shoes should I pack?",
            a: "Comfortable walking shoes are essential due to cobblestone streets, walking tours, and historic sites.",
        },
        {
            q: "Do I need a jacket for dinner?",
            a: "A jacket is optional. Most men wear collared shirts or polos, while women choose dresses or smart casual separates.",
        },
        {
            q: "What should I pack for a Christmas Market cruise?",
            a: "Warm clothing including a winter coat, gloves, hat, waterproof boots, scarves, and thermal layers.",
        },
        {
            q: "Is there laundry service onboard?",
            a: "Many Scenic ships offer laundry services, allowing guests to pack fewer clothes for longer itineraries.",
        },
        {
            q: "Should I bring a universal power adapter?",
            a: "Yes. A universal adapter is highly recommended for European river cruises.",
        },
        {
            q: "Can I wear shorts onboard?",
            a: "Yes. Shorts are appropriate during warm-weather daytime activities but are less common at dinner.",
        },
        {
            q: "How much luggage should I bring?",
            a: "Most travelers only need one medium suitcase and one carry-on for a 7 to 10-night Scenic River Cruise.",
        },
        {
            q: "What shouldn't I pack?",
            a: "Avoid packing formal gowns, tuxedos, too many shoes, or bulky clothing that you are unlikely to wear.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help you choose the right itinerary, explain seasonal weather, provide packing advice, and coordinate every aspect of your trip.",
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
    "Smart casual dress code",
    "Comfortable walking shoes essential",
    "No tuxedos or formal gowns required",
    "Evenings elegant but relaxed",
    "Pack layers for changing weather",
    "Bring lightweight luggage",
];

/* ── Scenic Dress Code at a Glance Data ─────────────────────────────── */
const dressCodeGlance = [
    { key: "breakfast", occasion: "Breakfast", attire: "Casual" },
    { key: "excursions", occasion: "Excursions", attire: "Comfortable walking clothes" },
    { key: "lunch", occasion: "Lunch", attire: "Casual to Smart Casual" },
    { key: "afternoon", occasion: "Afternoon", attire: "Casual" },
    { key: "dinner", occasion: "Dinner", attire: "Smart Casual" },
    { key: "special", occasion: "Special Events", attire: "Elegant Smart Casual" },
];

/* ── What You Won't Need Data ───────────────────────────────────────── */
const noFormalNeeded = ["Tuxedos", "Dinner jackets", "Ball gowns", "Cocktail dresses (unless you enjoy dressing up)"];

/* ── What to Wear Tabs Data ─────────────────────────────────────────── */
const wearFactors = [
    {
        id: "daytime",
        title: "What to Wear During the Day",
        badge: "Daytime",
        icon: Sun,
        desc: "Daytime attire depends largely on your excursions. You'll spend much of your day exploring cities, villages, vineyards, and historic sites, so comfort is key.",
        columns: [
            {
                label: "Recommended clothing:",
                items: [
                    "Polo shirts",
                    "Lightweight sweaters",
                    "Blouses",
                    "Comfortable pants",
                    "Jeans (without excessive distressing)",
                    "Shorts in warm weather",
                    "Casual dresses",
                    "Light jackets",
                ],
            },
        ],
    },
    {
        id: "excursions",
        title: "What to Wear for Excursions",
        badge: "Excursions",
        icon: Footprints,
        desc: "European river cruise excursions often include walking on cobblestone streets, historic town centers, castle grounds, vineyards, museums, and churches. The most important item you'll pack is a pair of comfortable walking shoes.",
        columns: [
            {
                label: "Recommended:",
                items: ["Walking shoes", "Comfortable sneakers", "Supportive sandals (summer)"],
            },
            {
                label: "Avoid:",
                items: ["High heels", "New shoes that haven't been broken in"],
            },
        ],
    },
    {
        id: "dinner",
        title: "What to Wear at Dinner",
        badge: "Dinner",
        icon: Shirt,
        desc: "Dinner attire is generally Smart Casual. While jackets are optional, many guests enjoy dressing up slightly for dinner without becoming overly formal.",
        columns: [
            {
                label: "Women:",
                items: ["Dresses", "Skirts", "Dress pants", "Blouses", "Stylish sweaters"],
            },
            {
                label: "Men:",
                items: ["Collared shirts", "Polo shirts", "Button-down shirts", "Slacks", "Dark jeans (where appropriate)"],
            },
        ],
    },
];

/* ── Seasonal Packing Guide Data ───────────────────────────────────── */
const seasonalData = [
    {
        key: "spring",
        icon: <CloudRain size={22} strokeWidth={1.6} />,
        eyebrow: "March–May",
        title: "Spring",
        imageAlt: "Spring layers for a Scenic river cruise",
        items: ["Layers", "Rain jacket", "Sweater", "Comfortable walking shoes", "Light scarf"],
        accent: "adg-accent-teal",
    },
    {
        key: "summer",
        icon: <Sun size={22} strokeWidth={1.6} />,
        eyebrow: "June–August",
        title: "Summer",
        imageAlt: "Summer clothing for a Scenic river cruise",
        items: ["Lightweight clothing", "Sun hat", "Sunglasses", "Sunscreen", "Breathable fabrics", "Comfortable sandals"],
        accent: "adg-accent-gold",
    },
    {
        key: "fall",
        icon: <Leaf size={22} strokeWidth={1.6} />,
        eyebrow: "September–November",
        title: "Fall",
        imageAlt: "Fall packing essentials for a Scenic river cruise",
        items: ["Medium-weight jacket", "Sweaters", "Long sleeves", "Waterproof shoes"],
        accent: "adg-accent-rose",
    },
    {
        key: "christmas",
        icon: <Snowflake size={22} strokeWidth={1.6} />,
        eyebrow: "Christmas Markets",
        title: "Winter Sailings",
        imageAlt: "Winter clothing for a Christmas Market cruise",
        items: ["Heavy coat", "Gloves", "Hat", "Warm socks", "Waterproof boots", "Thermal layers"],
        accent: "adg-accent-teal",
    },
];

/* ── Essential Packing Checklist Data ──────────────────────────────── */
const packingChecklist = [
    {
        key: "documents",
        icon: FileText,
        title: "Documents",
        items: ["Passport", "Cruise documents", "Travel insurance information", "Credit cards", "Copies of important documents"],
    },
    {
        key: "clothing",
        icon: Shirt,
        title: "Clothing",
        items: ["Smart casual outfits", "Casual sightseeing clothes", "Walking shoes", "Evening attire", "Light jacket", "Sleepwear", "Undergarments", "Socks"],
    },
    {
        key: "electronics",
        icon: Plug,
        title: "Electronics",
        items: ["Smartphone", "Camera", "Chargers", "Universal travel adapter", "Power bank"],
    },
    {
        key: "toiletries",
        icon: Sparkles,
        title: "Toiletries",
        items: ["Prescription medications", "Sunscreen", "Lip balm", "Toothbrush", "Personal toiletries"],
    },
    {
        key: "miscellaneous",
        icon: Backpack,
        title: "Miscellaneous",
        items: ["Day backpack", "Reusable water bottle", "Sunglasses", "Umbrella", "Binoculars"],
    },
];

/* ── Luggage Tips Data ─────────────────────────────────────────────── */
const luggageTips = [
    "Choose versatile clothing",
    "Pack layers",
    "Limit shoes to two or three pairs",
    "Leave room for souvenirs",
];

/* ── Common Packing Mistakes Data ─────────────────────────────────── */
const commonMistakes = [
    "Packing formalwear you won't wear",
    "Bringing uncomfortable shoes",
    "Forgetting a rain jacket",
    "Ignoring seasonal weather",
    "Overpacking \"just in case\"",
    "Forgetting a universal power adapter",
    "Not leaving space for purchases made during the trip",
];

/* ── Scenic vs Ocean Cruise Dress Codes Data ───────────────────────── */
const comparisonData = [
    { key: "smart-casual", scenic: "Smart Casual", ocean: "Often includes formal nights" },
    { key: "relaxed", scenic: "Relaxed luxury", ocean: "Multiple dress codes" },
    { key: "comfortable", scenic: "Comfortable attire", ocean: "Jackets may be required" },
    { key: "walking", scenic: "Walking-focused", ocean: "More onboard-focused" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruiseDressCodePacking = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeWear, setActiveWear] = useState("daytime");

    const currentWear =
        wearFactors.find((f) => f.id === activeWear) || wearFactors[0];
    const ActiveWearIcon = currentWear.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruise Dress Code & Packing Guide | What to Wear</title>
                <meta name="title" content="Scenic River Cruise Dress Code | What to Pack for Your Cruise" />
                <meta
                    name="description"
                    content="Wondering what to wear on a Scenic River Cruise? Learn the dress code for daytime, evenings, excursions, and discover the ultimate Scenic River Cruise packing list for every season."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruise <br /> Dress Code &amp; Packing Guide</h1>

                    <p>
                        One of the biggest questions first-time Scenic
                        guests ask is: "What should I wear on a Scenic River
                        Cruise?" The good news is that Scenic embraces a
                        relaxed luxury atmosphere. Unlike many ocean cruise
                        lines, there are no formal nights, tuxedos, or
                        evening gowns required.
                    </p>

                    {readMore && (
                        <p>
                            Instead, the dress code is elegant but
                            comfortable, allowing guests to focus on
                            enjoying Europe's beautiful destinations rather
                            than worrying about what to wear. Packing smart
                            also means you'll be prepared for guided walking
                            tours, changing European weather, and onboard
                            evenings—all without overpacking. This guide
                            explains Scenic's dress code, what to wear during
                            the day and at dinner, seasonal packing tips,
                            and the essential items experienced river
                            cruisers never leave home without.
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

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Scenic Dress Code: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time — Dress Code: Smart Casual
                        </p>

                        <ul className="rlc-qa-list">
                            {quickAnswerEmphasis.map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Shirt size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Our Recommendation: Pack versatile clothing that
                            can easily transition from daytime sightseeing to
                            evening dining.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SCENIC DRESS CODE AT A GLANCE ─────────────────────────────── */}
            <section className="adg-section" id="dress-code-glance" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Dress Code at a Glance</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Unlike some luxury ocean cruises, Scenic keeps
                            the atmosphere relaxed throughout the voyage.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Occasion</th>
                                    <th>Recommended Attire</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dressCodeGlance.map((row) => (
                                    <tr key={row.key}>
                                        <td><strong>{row.occasion}</strong></td>
                                        <td>{row.attire}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── IS THERE A FORMAL NIGHT? ──────────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="formal-night">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is There a Formal Night?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                No. One of Scenic's biggest advantages is
                                that there are no mandatory formal nights.
                                Most guests prefer polished but comfortable
                                clothing suitable for a luxury hotel or
                                upscale restaurant. You won't need:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {noFormalNeeded.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <X size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Scenic's relaxed approach lets you enjoy
                                    beautifully prepared dinners without
                                    packing a single tuxedo or gown.
                                </p>
                            </div>

                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={DiningAttireImage}
                                    alt="Guests in smart casual attire at dinner aboard a Scenic river cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Relaxed Elegance • Onboard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Not Sure What to Pack?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you prepare the perfect packing list for your Scenic itinerary and travel season.
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

            {/* ── WHAT TO WEAR: DAYTIME / EXCURSIONS / DINNER ──────────────── */}
            <section className="luc-destinations-section" id="what-to-wear">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <span className="scenic-drinks-eyebrow" style={{ display: "block", textAlign: "center", marginBottom: "8px" }}>What to Wear, Day and Night</span>
                        <h2 className="luc-destinations-title">What to Wear, Day and Night</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            From morning excursions to elegant evenings, here's exactly what to pack for each part of your day.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {wearFactors.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeWear === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveWear(item.id)}
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

                        <div className="luc-dest-panel" key={activeWear}>
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveWearIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveWearIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentWear.title}</span>
                                </div>
                            </div>

                            {currentWear.desc && (
                                <p className="luc-dest-panel-desc">{currentWear.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                {currentWear.columns.map((col, cIdx) => (
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

                        {/* ── ESSENTIAL PACKING CHECKLIST ───────────────────────────────── */}
            <section className="scenic-avoid-section" id="packing-checklist">
                <div className="scenic-avoid-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Essential Packing Checklist</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            A category-by-category checklist to make sure
                            you don't forget the essentials.
                        </p>
                    </div>

                    <div className="scenic-avoid-grid">
                        {packingChecklist.map((cat) => {
                            const CatIcon = cat.icon;
                            return (
                                <div className="scenic-avoid-card" key={cat.key}>
                                    <div className="scenic-avoid-card-header">
                                        <div className="scenic-avoid-icon-wrap">
                                            <CatIcon size={20} className="scenic-avoid-card-icon" />
                                        </div>
                                        <h3 className="scenic-avoid-card-title">{cat.title}</h3>
                                    </div>
                                    <div className="scenic-avoid-card-body">
                                        <ul className="scenic-avoid-list">
                                            {cat.items.map((thing, i) => (
                                                <li key={i}>
                                                    <Check size={14} className="Asc-icon-red" />
                                                    <span>{thing}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section
                className="adg-section"
                id="seasonal-packing-guide"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Seasonal Packing Guide</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            European weather changes with the seasons—here's
                            what to pack no matter when you sail.
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {seasonalData.map((item) => (
                            <div key={item.key} className={`adg-card ${item.accent}`}>
                                <div className="adg-card-image-wrap">
                                    <img
                                        src={item.image}
                                        alt={item.imageAlt}
                                        className="adg-card-img"
                                    />

                                    <div className="adg-card-image-overlay"></div>

                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">{item.icon}</span>
                                        <span className="adg-card-eyebrow-label">
                                            {item.eyebrow}
                                        </span>
                                    </div>
                                </div>

                                <div className="adg-card-body">
                                    <h3 className="adg-card-title">{item.title}</h3>

                                    <ul className="adg-card-list">
                                        {item.items.map((point, idx) => (
                                            <li key={idx} className="adg-card-list-item">
                                                <span className="adg-card-list-dot"></span>
                                                <span className="adg-card-list-text">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="adg-card-bar"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Christmas Market Cruises</span>
                            <h3 className="scenic-inline-cta-title-light">Planning a Winter Sailing?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us help you choose the right itinerary and pack for the season with expert advisor guidance.
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

            {/* ── LAUNDRY & LUGGAGE TIPS ───────────────────────────────────── */}
            <section className="scenic-laundry-luggage-section" id="laundry-luggage">
                <div className="scenic-laundry-luggage-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Laundry Onboard &amp; Luggage Tips</h2>
                        <div className="adg-accent-line"></div>
                    </div>
                    
                    <div className="scenic-laundry-luggage-cards">
                        {/* Laundry Onboard */}
                        <div className="scenic-laundry-card">
                            <div className="scenic-laundry-card-header">
                                <Luggage size={20} className="scenic-laundry-card-icon" />
                                <h3>Laundry Onboard</h3>
                            </div>
                            <p className="scenic-laundry-card-intro">
                                Scenic offers laundry services on many ships.
                            </p>
                            <ul className="scenic-laundry-list">
                                {[
                                    "Pack lighter",
                                    "Refresh clothing during longer cruises",
                                    "Reduce luggage requirements"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={14} className="scenic-laundry-list-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="scenic-laundry-card-footer">
                                Check your specific ship for available services.
                            </p>
                        </div>

                        {/* Luggage Tips */}
                        <div className="scenic-luggage-card">
                            <div className="scenic-laundry-card-header">
                                <Sparkles size={20} className="scenic-laundry-card-icon" />
                                <h3>Luggage Tips</h3>
                            </div>
                            <p className="scenic-laundry-card-intro">
                                One of the most common mistakes first-time guests make is bringing too much luggage. Instead:
                            </p>
                            <ul className="scenic-laundry-list">
                                {[
                                    "Choose versatile clothing",
                                    "Pack layers",
                                    "Limit shoes to two or three pairs",
                                    "Leave room for souvenirs"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={14} className="scenic-laundry-list-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="scenic-laundry-card-footer">
                                Most travelers find one medium suitcase and one carry-on sufficient for a 7–10-night cruise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMMON PACKING MISTAKES ────────────────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Packing <br /> Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Many first-time guests run into the same
                            avoidable pitfalls. Working with a luxury travel
                            advisor can help you avoid these common packing
                            mistakes.
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

            {/* ── SCENIC VS OCEAN CRUISE DRESS CODES ────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="dress-code-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs. Ocean Cruise <br /> Dress Codes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Scenic's relaxed approach is one reason many
                            travelers prefer river cruising over large ocean
                            ships.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Scenic River Cruises</th>
                                    <th>Traditional Ocean Cruises</th>
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
                style={{ backgroundColor: "var(--bg-white)" }}
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
                                Preparing Well Starts Long Before Departure
                            </h3>
                            <p className="Avr-planning-left-body">
                                A luxury travel advisor can help you prepare
                                well before departure by recommending the
                                best travel season, explaining destination
                                weather, advising what to pack, coordinating
                                flights and luggage, arranging pre- and
                                post-cruise hotels, and answering last-minute
                                travel questions.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional guidance helps reduce stress
                                    and ensures you're fully prepared.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Calendar size={18} />, label: "Recommend the best travel season" },
                                    { icon: <CloudRain size={18} />, label: "Explain destination weather" },
                                    { icon: <Luggage size={18} />, label: "Advise what to pack" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and luggage" },
                                    { icon: <Home size={18} />, label: "Arrange pre- and post-cruise hotels" },
                                    { icon: <ShieldCheck size={18} />, label: "Answer last-minute travel questions" },
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
                            Everything travelers need to know before packing
                            for their Scenic River Cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={LuggageImage}
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
                                    Refreshingly Simple <br /> Packing for Refined Travel
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Packing for a Scenic River Cruise is
                                        refreshingly simple. The relaxed
                                        smart casual dress code means you can
                                        leave formalwear at home and focus
                                        instead on comfortable, versatile
                                        clothing suited to sightseeing and
                                        elegant onboard dining.

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
                                                For most itineraries, the key
                                                is packing layers,
                                                comfortable walking shoes,
                                                and a few polished evening
                                                outfits.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                With thoughtful preparation,
                                                you'll be ready to enjoy
                                                every destination in comfort
                                                and style. At Trips &amp;
                                                Ships Luxury Travel, we'll
                                                help you plan every detail of
                                                your Scenic cruise, including
                                                what to pack.
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
                                            "Recommend the best travel season",
                                            "Explain destination weather and packing needs",
                                            "Compare Scenic itineraries and ships",
                                            "Coordinate flights and luggage",
                                            "Arrange pre- and post-cruise hotels",
                                            "Coordinate private transfers",
                                            "Compare Scenic with other luxury lines",
                                            "Answer last-minute travel questions",
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

export default ScenicRiverCruiseDressCodePacking;