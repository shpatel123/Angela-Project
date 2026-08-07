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
    Home,
    ShieldCheck,
    Calendar,
    Landmark,
    X,
    FileText,
    BadgePercent,
    Wine,
    Utensils,
    CheckCircle,
    Heart,
    Footprints,
    Building2,
    Camera,
    Music,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Freechoice/Enrich photography once
   available. Paths assume a new /assets/ScenicFreechoiceEnrich folder. */
// import HeroImage from "../../assets/ScenicFreechoiceEnrich/scenic-excursion-hero.jpg";
// import FreechoiceImage from "../../assets/ScenicFreechoiceEnrich/scenic-freechoice.jpg";
// import EnrichImage from "../../assets/ScenicFreechoiceEnrich/scenic-enrich.jpg";
// import ExcursionImage from "../../assets/ScenicFreechoiceEnrich/scenic-excursion.jpg";

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
            "@id": "https://tripsandships.com/scenic-river-cruises/freechoice-enrich/#webpage",
            name: "Scenic Freechoice Excursions & Scenic Enrich Experiences (2026)",
            url: "https://tripsandships.com/scenic-river-cruises/freechoice-enrich/",
            description:
                "Discover Scenic Freechoice excursions and Scenic Enrich experiences. Learn how Scenic excursions work, what's included, the best activities, and how to choose experiences on your river cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/freechoice-enrich/#article",
            headline: "Scenic Freechoice Excursions & Scenic Enrich Experiences",
            description:
                "A complete guide to Scenic Freechoice excursions and Scenic Enrich experiences, including how they work, examples, and how to choose the right activities for your travel style.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/freechoice-enrich/#breadcrumb",
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
                    name: "Scenic Freechoice & Enrich",
                    item: "https://tripsandships.com/scenic-river-cruises/freechoice-enrich/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/freechoice-enrich/#itemlist",
            name: "Scenic Freechoice & Scenic Enrich — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "What Is Scenic Freechoice?" },
                { "@type": "ListItem", position: 3, name: "How Does Scenic Freechoice Work?" },
                { "@type": "ListItem", position: 4, name: "What Is Scenic Enrich?" },
                { "@type": "ListItem", position: 5, name: "Scenic Freechoice Examples" },
                { "@type": "ListItem", position: 6, name: "Scenic Enrich Examples" },
                { "@type": "ListItem", position: 7, name: "Are Freechoice & Enrich Included?" },
                { "@type": "ListItem", position: 8, name: "Freechoice vs Traditional Shore Excursions" },
                { "@type": "ListItem", position: 9, name: "Scenic Freechoice vs Scenic Enrich" },
                { "@type": "ListItem", position: 10, name: "Best Excursions By Travel Style" },
                { "@type": "ListItem", position: 11, name: "How Active Are Scenic Excursions?" },
                { "@type": "ListItem", position: 12, name: "Common Excursion Mistakes" },
                { "@type": "ListItem", position: 13, name: "How to Choose the Right Excursions" },
                { "@type": "ListItem", position: 14, name: "Why a Travel Advisor Can Help" },
                { "@type": "ListItem", position: 15, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/freechoice-enrich/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is Scenic Freechoice?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic Freechoice is Scenic's selection of included excursion options that allows guests to personalize their sightseeing and activities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is Scenic Enrich?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic Enrich refers to exclusive experiences created specifically for Scenic guests, designed to provide distinctive cultural and destination experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic Freechoice excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic promotes Freechoice activities as part of its all-inclusive river cruise offering. Exact activities vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic Enrich experiences included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic describes Enrich events as included exclusive experiences on its river cruises, with availability varying by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I choose between different Scenic excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. That's the purpose of Freechoice. Available choices depend on the specific itinerary and sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do all Scenic cruises have the same excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Excursions and Enrich experiences vary according to the destination and itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic excursions suitable for seniors?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic offers different types of experiences, but travelers should check the walking and mobility requirements of each activity.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic excursions good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Freechoice can be particularly useful for multigenerational families because different travelers can choose activities that match their interests and abilities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between Freechoice and Enrich?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Freechoice emphasizes choice and personalization, while Enrich emphasizes exclusive experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do I have to participate in excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Guests can choose to relax onboard instead of participating in an excursion.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic excursions guided?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many Scenic excursions use expert local guides, depending on the experience and destination.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic excursions are best for first-time cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Historic city tours, cultural experiences, food and wine activities, and Scenic Enrich events are excellent starting points.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I choose an active excursion?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "If you enjoy walking, cycling, or exploring independently, active options can add another dimension to your cruise. Always check the specific activity requirements first.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a travel advisor help me choose Scenic excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. An experienced advisor can help match your itinerary and excursion choices to your interests, mobility, and travel style.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic Freechoice and Enrich unique to Scenic?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The specific Scenic programs and branding are part of Scenic's product offering. Their combination of included excursion choices and exclusive Enrich experiences is a major part of how Scenic differentiates its river cruises.",
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
            q: "What is Scenic Freechoice?",
            a: "Scenic Freechoice is Scenic's selection of included excursion options that allows guests to personalize their sightseeing and activities.",
        },
        {
            q: "What is Scenic Enrich?",
            a: "Scenic Enrich refers to exclusive experiences created specifically for Scenic guests, designed to provide distinctive cultural and destination experiences.",
        },
        {
            q: "Are Scenic Freechoice excursions included?",
            a: "Scenic promotes Freechoice activities as part of its all-inclusive river cruise offering. Exact activities vary by itinerary.",
        },
        {
            q: "Are Scenic Enrich experiences included?",
            a: "Scenic describes Enrich events as included exclusive experiences on its river cruises, with availability varying by itinerary.",
        },
        {
            q: "Can I choose between different Scenic excursions?",
            a: "Yes. That's the purpose of Freechoice. Available choices depend on the specific itinerary and sailing.",
        },
        {
            q: "Do all Scenic cruises have the same excursions?",
            a: "No. Excursions and Enrich experiences vary according to the destination and itinerary.",
        },
        {
            q: "Are Scenic excursions suitable for seniors?",
            a: "Yes. Scenic offers different types of experiences, but travelers should check the walking and mobility requirements of each activity.",
        },
        {
            q: "Are Scenic excursions good for families?",
            a: "Yes. Freechoice can be particularly useful for multigenerational families because different travelers can choose activities that match their interests and abilities.",
        },
        {
            q: "What is the difference between Freechoice and Enrich?",
            a: "Freechoice emphasizes choice and personalization, while Enrich emphasizes exclusive experiences.",
        },
        {
            q: "Do I have to participate in excursions?",
            a: "No. Guests can choose to relax onboard instead of participating in an excursion.",
        },
        {
            q: "Are Scenic excursions guided?",
            a: "Many Scenic excursions use expert local guides, depending on the experience and destination. Scenic specifically highlights expert local guides as part of its river cruise experience.",
        },
        {
            q: "Which Scenic excursions are best for first-time cruisers?",
            a: "Historic city tours, cultural experiences, food and wine activities, and Scenic Enrich events are excellent starting points.",
        },
        {
            q: "Should I choose an active excursion?",
            a: "If you enjoy walking, cycling, or exploring independently, active options can add another dimension to your cruise. Always check the specific activity requirements first.",
        },
        {
            q: "Can a travel advisor help me choose Scenic excursions?",
            a: "Yes. An experienced advisor can help match your itinerary and excursion choices to your interests, mobility, and travel style.",
        },
        {
            q: "Are Scenic Freechoice and Enrich unique to Scenic?",
            a: "The specific Scenic programs and branding are part of Scenic's product offering. Their combination of included excursion choices and exclusive Enrich experiences is a major part of how Scenic differentiates its river cruises.",
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

/* ── Quick Answer Table Data ───────────────────────────────────────── */
const quickAnswerRows = [
    { feature: "Main purpose", freechoice: "Choose your preferred activity", enrich: "Exclusive destination experience" },
    { feature: "Experience style", freechoice: "Variety and flexibility", enrich: "Special-access cultural experiences" },
    { feature: "Best for", freechoice: "Travelers who want choices", enrich: "Travelers seeking something unique" },
    { feature: "Included?", freechoice: "Included experiences on eligible itineraries", enrich: "Included exclusive experiences on eligible itineraries" },
    { feature: "Examples", freechoice: "Walking tours, museums, food & wine", enrich: "Private cultural events, performances, special venues" },
];

/* ── Freechoice Interest Categories Data ───────────────────────────── */
const freechoiceInterests = [
    "History",
    "Architecture",
    "Art",
    "Food",
    "Wine",
    "Local culture",
    "Active exploration",
    "Walking",
    "Scenic sightseeing",
];

/* ── How Freechoice Works Steps Data ───────────────────────────────── */
const freechoiceSteps = [
    { icon: <FileText size={18} />, label: "Review your available activities for your itinerary" },
    { icon: <Compass size={18} />, label: "Consider your travel style — relaxed, food-focused, active, or cultural" },
    { icon: <Check size={18} />, label: "Select the experience that appeals most to you" },
    { icon: <Sparkles size={18} />, label: "Enjoy your destination while Scenic handles the logistics" },
];

/* ── Enrich Highlights Data ────────────────────────────────────────── */
const enrichHighlights = [
    "Private cultural venues",
    "Exclusive performances",
    "Historic locations",
    "Special evening events",
    "Local traditions",
    "Unique access that isn't part of a typical sightseeing tour",
];

/* ── Freechoice Examples Tab Data ──────────────────────────────────── */
const freechoiceExamples = [
    {
        id: "history-culture",
        title: "History & Culture",
        badge: "History & Culture",
        icon: Landmark,
        desc: "Perfect for travelers interested in Europe's past.",
        columns: [
            {
                label: "Possible experiences include:",
                items: ["Historic city tours", "Castles", "Cathedrals", "Museums", "UNESCO-listed sites"],
            },
        ],
    },
    {
        id: "food-wine",
        title: "Food & Wine",
        badge: "Food & Wine",
        icon: Wine,
        desc: "Ideal for culinary travelers.",
        columns: [
            {
                label: "Depending on the itinerary, experiences can include:",
                items: ["Wine tasting", "Regional food experiences", "Culinary demonstrations", "Local markets", "Winery visits"],
            },
        ],
    },
    {
        id: "active",
        title: "Active Experiences",
        badge: "Active",
        icon: Footprints,
        desc: "Some itineraries provide more active options for travelers who want to move beyond traditional sightseeing.",
        columns: [
            {
                label: "Potential activities may include:",
                items: ["Guided walks", "Cycling", "Hiking", "More active exploration"],
            },
        ],
    },
    {
        id: "sightseeing",
        title: "Scenic Sightseeing",
        badge: "Sightseeing",
        icon: Compass,
        desc: "Not every traveler wants a strenuous excursion.",
        columns: [
            {
                label: "Relaxed options may include:",
                items: ["Panoramic tours", "Scenic drives", "Guided sightseeing", "Village visits"],
            },
        ],
    },
];

/* ── Enrich Examples Data ──────────────────────────────────────────── */
const enrichExamples = [
    { title: "Exclusive Performances", icon: <Music size={20} />, desc: "Enjoy cultural performances in distinctive settings." },
    { title: "Historic Venues", icon: <Building2 size={20} />, desc: "Visit locations that provide a deeper connection to the destination." },
    { title: "Private Cultural Experiences", icon: <Sparkles size={20} />, desc: "Experience local traditions in a more intimate environment." },
    { title: "Special Evening Events", icon: <Star size={20} />, desc: "Some Enrich experiences are particularly memorable because they take place outside the normal tourist schedule." },
];

/* ── Freechoice vs Traditional Excursions Table Data ───────────────── */
const traditionalVsFreechoice = [
    { key: "options", traditional: "Often one primary group option", freechoice: "Multiple choices" },
    { key: "group", traditional: "Larger group structure possible", freechoice: "More personalized" },
    { key: "fees", traditional: "May have additional fees", freechoice: "Included options" },
    { key: "style", traditional: "Standard sightseeing", freechoice: "Variety of interests" },
    { key: "flexibility", traditional: "Less flexibility", freechoice: "Greater choice" },
];

/* ── Best Excursions By Travel Style Tab Data ──────────────────────── */
const travelStyles = [
    {
        id: "couples",
        title: "Best Excursions for Couples",
        badge: "Couples",
        icon: Heart,
        desc: "Couples often enjoy experiences they'll remember together, rather than trying to see everything.",
        columns: [
            {
                label: "Popular choices include:",
                items: ["Wine experiences", "Culinary activities", "Historic villages", "Scenic walks", "Private-feeling cultural experiences", "Scenic Enrich events"],
            },
        ],
    },
    {
        id: "families",
        title: "Best Excursions for Families",
        badge: "Families",
        icon: Users,
        desc: "Multigenerational groups should consider different activity levels, then meet back onboard for dinner.",
        columns: [
            {
                label: "For example:",
                items: ["Grandparents: relaxed city tour", "Parents: food and wine", "Teenagers: active excursion"],
            },
        ],
    },
    {
        id: "solo",
        title: "Best Excursions for Solo Travelers",
        badge: "Solo Travelers",
        icon: Compass,
        desc: "Solo travelers can use Freechoice excursions as an easy way to meet fellow guests, enjoying independent time with plenty of opportunities to socialize.",
        columns: [
            {
                label: "Consider:",
                items: ["Walking tours", "Food experiences", "Cultural activities", "Small-group excursions", "Scenic Enrich events"],
            },
        ],
    },
];

/* ── First-Time Traveler Excursions Data ───────────────────────────── */
const firstTimeExcursions = [
    { title: "Historic City Tours", desc: "Great for understanding the destination.", icon: <Landmark size={18} /> },
    { title: "Food & Wine Experiences", desc: "Ideal for experiencing local culture through cuisine.", icon: <Wine size={18} /> },
    { title: "Castle & Palace Visits", desc: "Particularly memorable on Rhine and Danube itineraries.", icon: <Building2 size={18} /> },
    { title: "Scenic Enrich Experiences", desc: "Take advantage of exclusive experiences you couldn't easily arrange independently.", icon: <Sparkles size={18} /> },
    { title: "Active Excursions", desc: "A good option if you want to balance sightseeing with exercise.", icon: <Footprints size={18} /> },
];

/* ── Activity Level Data ───────────────────────────────────────────── */
const activityFactors = [
    "Extended walking",
    "Stairs",
    "Uneven surfaces",
    "Cycling",
    "Hiking",
    "Steep inclines",
    "Cobblestone streets",
];

/* ── Common Mistakes Data ──────────────────────────────────────────── */
const commonMistakes = [
    "Trying to do everything",
    "Choosing only based on the title",
    "Ignoring walking requirements",
    "Forgetting your interests",
    "Missing Enrich opportunities",
];

/* ── Choose the Right Excursions Framework Data ────────────────────── */
const chooseFramework = [
    { title: "If You Love History", choice: "Castles + museums + historic walking tours", icon: <Landmark size={18} /> },
    { title: "If You Love Food", choice: "Markets + culinary experiences + wine", icon: <Utensils size={18} /> },
    { title: "If You Love Nature", choice: "Walking + cycling + countryside", icon: <Footprints size={18} /> },
    { title: "If You Want Luxury", choice: "Scenic Enrich + exclusive cultural experiences", icon: <Sparkles size={18} /> },
    { title: "If You Want Relaxation", choice: "Panoramic sightseeing + slower-paced tours", icon: <Compass size={18} /> },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicFreechoiceEnrich = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeExample, setActiveExample] = useState("history-culture");
    const [activeStyle, setActiveStyle] = useState("couples");

    const currentExample =
        freechoiceExamples.find((f) => f.id === activeExample) || freechoiceExamples[0];
    const ActiveExampleIcon = currentExample.icon;

    const currentStyle =
        travelStyles.find((f) => f.id === activeStyle) || travelStyles[0];
    const ActiveStyleIcon = currentStyle.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Freechoice Excursions & Scenic Enrich Experiences</title>
                <meta name="title" content="Scenic Freechoice & Enrich | Excursions & Experiences Guide" />
                <meta
                    name="description"
                    content="Discover Scenic Freechoice excursions and Scenic Enrich experiences. Learn how Scenic excursions work, what's included, the best activities, and how to choose experiences on your river cruise."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Freechoice Excursions <br /> &amp; Scenic Enrich Experiences</h1>

                    <p>
                        One of the biggest advantages of a Scenic River
                        Cruise is that the experience doesn't end when the
                        ship reaches port. Scenic is designed around
                        destination immersion, giving travelers
                        opportunities to explore cities, villages, historic
                        landmarks, food and wine regions, and cultural
                        attractions through a choice of included activities.
                    </p>

                    {readMore && (
                        <p>
                            Two names you'll encounter frequently when
                            researching a Scenic cruise are Scenic
                            Freechoice and Scenic Enrich. Scenic Freechoice
                            gives you a selection of included excursions and
                            activities, allowing you to personalize your
                            day, while Scenic Enrich focuses on exclusive
                            experiences designed specifically for Scenic
                            guests. This guide explains how both work, what
                            types of experiences you can expect, and how to
                            choose the right activities for your travel
                            style.
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
            <section className="adg-section" id="quick-answer" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Freechoice vs Scenic Enrich: The Quick Answer</h2>
                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Scenic Freechoice gives you a selection of
                            included excursions and activities, allowing you
                            to personalize your day. Scenic Enrich focuses
                            on exclusive experiences designed specifically
                            for Scenic guests.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Scenic Freechoice</th>
                                    <th>Scenic Enrich</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickAnswerRows.map((row, i) => (
                                    <tr key={i}>
                                        <td><strong>{row.feature}</strong></td>
                                        <td>{row.freechoice}</td>
                                        <td>{row.enrich}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="Asc-section-intro" style={{ marginTop: "24px", textAlign: "center" }}>
                        The easiest way to remember it: Freechoice =
                        choose your experience. Enrich = experience
                        something you couldn't easily arrange yourself.
                    </p>
                </div>
            </section>

            {/* ── WHAT IS SCENIC FREECHOICE? ───────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="what-is-freechoice">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">What Is Scenic Freechoice?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Scenic Freechoice is Scenic's system for
                                giving guests a selection of activities and
                                excursions. Instead of requiring everyone to
                                follow exactly the same shore excursion,
                                guests can often choose an experience that
                                better matches their interests and activity
                                level. Depending on the itinerary, choices
                                can include experiences focused on:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {freechoiceInterests.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The exact choices vary by itinerary and
                                    departure, with expert local guides
                                    leading many included activities.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={FreechoiceImage}
                                    alt="Travelers choosing a Scenic Freechoice excursion in a European city"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Personalize Every Port Day</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW DOES SCENIC FREECHOICE WORK? ─────────────────────────── */}
            <section
                className="Avr-planning-section"
                id="how-freechoice-works"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Simple By Design</span>
                        <h2 className="Avr-planning-title">How Does Scenic <br /> Freechoice Work?</h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                A Personalized Vacation, Even in a Group
                            </h3>
                            <p className="Avr-planning-left-body">
                                This flexibility is particularly valuable
                                when traveling with a spouse, family, or
                                multigenerational group because not everyone
                                has to have exactly the same interests.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Scenic handles the logistics while you
                                    concentrate on the experience.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                The process is relatively simple:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {freechoiceSteps.map((item, i) => (
                                    <div key={i} className="Avr-planning-benefit-card">
                                        <span className="Avr-planning-benefit-icon">{item.icon}</span>
                                        <span className="Avr-planning-benefit-label">
                                            <strong>Step {i + 1}: </strong>
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Excursions Are Right for You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you match your Scenic itinerary to the Freechoice and Enrich experiences that fit your travel style.
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

            {/* ── WHAT IS SCENIC ENRICH? ───────────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="what-is-enrich" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={EnrichImage}
                                    alt="Exclusive Scenic Enrich cultural performance for river cruise guests"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Exclusive to Scenic Guests</span>
                                </div>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">What Is Scenic Enrich?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Scenic Enrich is different from a standard
                                excursion. These are exclusive experiences
                                designed to provide guests with access to
                                distinctive cultural or destination
                                experiences. Depending on the itinerary,
                                these experiences can involve:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {enrichHighlights.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The goal isn't simply to see a
                                    destination. It's to experience it in a
                                    way that feels special, personal, and
                                    difficult to replicate independently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC FREECHOICE EXAMPLES ───────────────────────────────── */}
            <section className="luc-destinations-section" id="freechoice-examples">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Scenic Freechoice Examples</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            The exact excursions vary by itinerary, but
                            Scenic Freechoice can cover a broad range of
                            interests.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {freechoiceExamples.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeExample === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveExample(item.id)}
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

                        <div className="luc-dest-panel" key={activeExample}>
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveExampleIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveExampleIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentExample.title}</span>
                                </div>
                            </div>

                            {currentExample.desc && (
                                <p className="luc-dest-panel-desc">{currentExample.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                {currentExample.columns.map((col, cIdx) => (
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

            {/* ── SCENIC ENRICH EXAMPLES ───────────────────────────────────── */}
            <section
                className="adg-section"
                style={{ backgroundColor: "var(--bg-soft)" }}
                id="enrich-examples"
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Enrich Examples</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Scenic Enrich experiences are designed around
                            the destination rather than a standard
                            sightseeing checklist. Depending on your cruise,
                            you may experience:
                        </p>
                    </div>

                    <div className="sfe-enrich-grid">
                        {enrichExamples.map((item, i) => (
                            <div key={i} className="sfe-enrich-card">
                                <div className="sfe-enrich-icon-wrap">{item.icon}</div>
                                <h4 className="sfe-enrich-title">{item.title}</h4>
                                <p className="sfe-enrich-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rlc-lc-worth-conclusion-box" style={{ marginTop: "40px" }}>
                        <p className="rlc-lc-worth-conclusion-text">
                            Important: Enrich experiences vary by itinerary
                            and departure. Review your specific cruise
                            itinerary for the experiences available on your
                            sailing.
                        </p>
                    </div>
                </div>
            </section>


            {/* ── ARE THEY INCLUDED? ─────────────────────────────────────── */}
            <section className="adg-section" id="are-they-included" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Are Freechoice &amp; Enrich Included?</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-inclusions-grid">
                        {/* Freechoice Inclusions Card */}
                        <div className="sfe-inclusions-card">
                            <div className="sfe-inclusions-card-header">
                                <span className="sfe-inclusions-icon-wrap">
                                    <CheckCircle size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-inclusions-card-title">Are Scenic Freechoice Excursions Included?</h3>
                            </div>
                            <p className="sfe-inclusions-text">
                                Yes, Scenic's river cruise program promotes included excursion choices as part of its all-inclusive offering. Scenic's published materials specifically describe Scenic Freechoice activities and Scenic Enrich events as included elements of its river cruise experience.
                            </p>
                            <div className="sfe-inclusions-alert">
                                <p className="sfe-inclusions-alert-text">
                                    However, the exact number and type of experiences vary by itinerary. Don't assume that an excursion available on one Rhine sailing will necessarily be available on every Rhine departure.
                                </p>
                            </div>
                        </div>

                        {/* Enrich Inclusions Card */}
                        <div className="sfe-inclusions-card">
                            <div className="sfe-inclusions-card-header">
                                <span className="sfe-inclusions-icon-wrap sfe-enrich-icon-style">
                                    <Sparkles size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-inclusions-card-title">Are Scenic Enrich Experiences Included?</h3>
                            </div>
                            <p className="sfe-inclusions-text">
                                Scenic markets Enrich as part of its included luxury river cruise experience, with exclusive events available depending on the itinerary.
                            </p>
                            <p className="sfe-inclusions-text">
                                The important distinction is that Enrich is not simply another optional shore excursion. It is designed as a special, exclusive experience for Scenic guests.
                            </p>
                            <div className="sfe-inclusions-alert sfe-enrich-alert-style">
                                <p className="sfe-inclusions-alert-text">
                                    Always check the current itinerary because experiences can change.
                                </p>
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
                            <span className="scenic-inline-cta-eyebrow-light">Choice Meets Exclusivity</span>
                            <h3 className="scenic-inline-cta-title-light">Combine Freechoice and Enrich on Your Cruise</h3>
                            <p className="scenic-inline-cta-text-light">
                                A great Scenic itinerary combines both — personalized activities and exclusive Enrich experiences created just for Scenic guests.
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

            {/* ── FREECHOICE VS TRADITIONAL SHORE EXCURSIONS ───────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="freechoice-vs-traditional">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Freechoice vs <br /> Traditional Shore Excursions</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            For travelers who don't enjoy being forced into
                            the same tour as everyone else, Freechoice can
                            be a major advantage.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Traditional Cruise Excursion</th>
                                    <th>Scenic Freechoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {traditionalVsFreechoice.map((row) => (
                                    <tr key={row.key}>
                                        <td>{row.traditional}</td>
                                        <td><strong>{row.freechoice}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── SCENIC FREECHOICE VS SCENIC ENRICH ───────────────────────── */}
            <section
                className="dve-winner-section"
                id="freechoice-vs-enrich"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Scenic Freechoice vs Scenic Enrich
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            This is one of the most important distinctions
                            to understand.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Choose Freechoice When */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Compass size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Choose Freechoice When
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    You Want Flexibility
                                </h3>

                                <p className="dve-winner-intro">
                                    For example: "I'd rather visit a winery
                                    than take a traditional city tour," or
                                    "I'd prefer a more active excursion."
                                </p>

                                <div className="dve-winner-divider"></div>

                                <p className="dve-winner-intro">
                                    Freechoice is about personalization —
                                    choosing the experience that matches
                                    your interests on any given day.
                                </p>
                            </div>
                        </div>

                        {/* Look Forward to Enrich When */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Sparkles size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Look Forward to Enrich When
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    You Want Exclusive Access
                                </h3>

                                <p className="dve-winner-intro">
                                    For example: "I want to experience
                                    something that goes beyond a standard
                                    tourist excursion."
                                </p>

                                <div className="dve-winner-divider"></div>

                                <p className="dve-winner-intro">
                                    Enrich is about exclusivity — special
                                    experiences created specifically for
                                    Scenic guests.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rlc-lc-worth-conclusion-box" style={{ marginTop: "40px" }}>
                        <p className="rlc-lc-worth-conclusion-text">
                            Which is better? Neither is necessarily better —
                            they serve different purposes. A great Scenic
                            itinerary combines both: you choose experiences
                            that match your interests while also enjoying
                            special experiences created specifically for
                            Scenic guests.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── BEST EXCURSIONS FOR FIRST-TIME TRAVELERS ─────────────────── */}
            {/* ── BEST EXCURSIONS FOR FIRST-TIME TRAVELERS ─────────────────── */}
            <section className="adg-section" id="first-time-travelers" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Best Scenic Excursions for First-Time Travelers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            If this is your first Scenic cruise, prioritize
                            experiences that give you a strong introduction
                            to the destination.
                        </p>
                    </div>

                    <div className="sfe-first-layout">
                        <div className="sfe-first-banner">
                            <Landmark size={64} className="sfe-first-banner-icon" strokeWidth={1.2} />
                            <h3 className="sfe-first-banner-label">A Strong Introduction to Europe</h3>
                            <span className="sfe-first-banner-sub">First-Time Guide</span>
                        </div>

                        <div className="sfe-first-list">
                            {firstTimeExcursions.map((item, idx) => (
                                <div key={idx} className="sfe-first-card">
                                    <div className="sfe-first-badge-wrap">
                                        <span className="sfe-first-number">{String(idx + 1).padStart(2, '0')}</span>
                                        <span className="sfe-first-icon">{item.icon}</span>
                                    </div>
                                    <div className="sfe-first-content">
                                        <h4 className="sfe-first-title">{item.title}</h4>
                                        <p className="sfe-first-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST EXCURSIONS BY TRAVEL STYLE ──────────────────────────── */}
            <section className="dac-reasons-section" id="best-by-travel-style" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="dac-reasons-container">
                    <div className="dac-reasons-header">
                        <span className="dac-reasons-eyebrow">
                            Best Excursions by Travel Style
                        </span>
                        <h2 className="dac-reasons-title">
                            Best Excursions by Travel Style
                        </h2>
                        <div className="dac-reasons-accent"></div>
                        <p className="dac-reasons-lead">
                            Whether you're traveling as a couple, a family,
                            or on your own, there are Freechoice and Enrich
                            experiences suited to your style.
                        </p>
                    </div>

                    <div className="dac-reasons-tabs-nav">
                        {travelStyles.map((item, idx) => {
                            const NavIcon = item.icon;
                            const isActive = activeStyle === item.id;

                            return (
                                <button
                                    key={item.id}
                                    className={`dac-reasons-tab-btn ${isActive ? "active" : ""}`}
                                    onClick={() => setActiveStyle(item.id)}
                                >
                                    <span className="dac-reasons-tab-icon-wrap">
                                        <NavIcon size={18} />
                                    </span>
                                    <div className="dac-reasons-tab-text-wrap">
                                        <span className="dac-reasons-tab-num">0{idx + 1}</span>
                                        <span className="dac-reasons-tab-title">{item.badge}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="dac-reasons-tabs-content">
                        {travelStyles.map((item, idx) => {
                            if (activeStyle !== item.id) return null;
                            const NavIcon = item.icon;

                            return (
                                <div key={item.id} className="dac-reasons-tab-panel fade-in">
                                    <div className={`dac-reasons-row ${idx % 2 === 0 ? "dac-reasons-row--left-content" : "dac-reasons-row--right-content"}`}>
                                        <div className="dac-reasons-content">
                                            <span className="dac-reasons-row-number">0{idx + 1}</span>
                                            <h3 className="dac-reasons-row-title">{item.title}</h3>
                                            {item.desc && <p className="dac-reasons-row-desc">{item.desc}</p>}
                                            
                                            {item.columns.map((col, cIdx) => (
                                                <div key={cIdx} style={{ marginTop: "24px" }}>
                                                    <span style={{ display: "block", marginBottom: "12px", fontWeight: "600", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--navy)" }}>
                                                        {col.label}
                                                    </span>
                                                    <div className="dac-reasons-bullets">
                                                        {col.items.map((bullet, bIdx) => (
                                                            <div key={bIdx} className="dac-reasons-bullet-item">
                                                                 <CheckCircle size={16} className="dac-reasons-bullet-icon" />
                                                                 <span>{bullet}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="dac-reasons-media">
                                            <div className="dac-reasons-img-container" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", height: "380px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)" }}>
                                                <NavIcon size={48} className="scenic-firsttime-placeholder-icon" strokeWidth={1.2} />
                                                <span className="scenic-firsttime-placeholder-text" style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--text-muted)", marginTop: "16px" }}>
                                                    {item.title} Placeholder
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Move at Your Own Pace</span>
                            <h3 className="scenic-inline-cta-title-light">How Active Do You Want Your Cruise to Be?</h3>
                            <p className="scenic-inline-cta-text-light">
                                From relaxed panoramic tours to cycling and hiking, Scenic offers excursions for every activity level.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Plan Your Scenic Cruise
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">River Cruise Expert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW ACTIVE ARE SCENIC EXCURSIONS? / CAN YOU SKIP ONE? ─────── */}
            <section className="adg-c-section adg-c-bg-white" id="activity-levels" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">How Active Are Scenic Excursions?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            It varies considerably. Some experiences are
                            relaxed. Others require more effort. Read the
                            activity description carefully before selecting
                            an excursion — this is particularly important
                            for travelers with mobility concerns.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {activityFactors.map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <Footprints size={16} strokeWidth={2.5} />
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
                                    <Compass
                                        size={28}
                                        className="adg-c-callout-star"
                                    />
                                    <p className="adg-c-callout-text">
                                        Can you skip an excursion?
                                        Absolutely. You don't need to
                                        participate in every activity. A
                                        river cruise should also give you
                                        time to enjoy your suite, the river
                                        views, the wellness facilities, the
                                        lounges, and the dining venues.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '240px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Sometimes the Best Excursion Is Staying Onboard
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SKIP EXCURSIONS & IMPORTANCE ───────────────────────────── */}
            <section className="adg-section" id="skip-and-value" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Excursion Flexibility &amp; Value</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-inclusions-grid">
                        {/* Can You Skip Card */}
                        <div className="sfe-inclusions-card">
                            <div className="sfe-inclusions-card-header">
                                <span className="sfe-inclusions-icon-wrap">
                                    <Ship size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-inclusions-card-title">Can You Skip an Excursion?</h3>
                            </div>
                            <p className="sfe-inclusions-text" style={{ fontWeight: "600", color: "var(--navy)" }}>
                                Absolutely. You don't need to participate in every activity.
                            </p>
                            <p className="sfe-inclusions-text" style={{ marginBottom: "12px" }}>
                                A river cruise should also give you time to enjoy:
                            </p>
                            <div className="dac-reasons-bullets" style={{ marginBottom: "24px" }}>
                                {[
                                    "Your suite",
                                    "The river views",
                                    "The wellness facilities",
                                    "The lounges",
                                    "The dining venues",
                                    "The ship itself",
                                ].map((item, idx) => (
                                    <div key={idx} className="dac-reasons-bullet-item" style={{ fontSize: "14px" }}>
                                        <CheckCircle size={14} className="dac-reasons-bullet-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="sfe-inclusions-alert">
                                <p className="sfe-inclusions-alert-text">
                                    Sometimes the best excursion is simply staying onboard and watching Europe pass by.
                                </p>
                            </div>
                        </div>

                        {/* Why Excursions Matter Card */}
                        <div className="sfe-inclusions-card">
                            <div className="sfe-inclusions-card-header">
                                <span className="sfe-inclusions-icon-wrap sfe-enrich-icon-style">
                                    <Compass size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-inclusions-card-title">Why Scenic Excursions Matter</h3>
                            </div>
                            <p className="sfe-inclusions-text">
                                The real value of a river cruise isn't simply transportation between cities. It's the ability to experience each destination.
                            </p>
                            <div className="sfe-inclusions-text" style={{ borderLeft: "2px solid var(--navy-border)", paddingLeft: "16px", margin: "16px 0", fontStyle: "italic" }}>
                                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "4px" }}>From:</p>
                                <p style={{ fontWeight: "500", color: "var(--text-body)" }}>"I visited six European cities."</p>
                                <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "8px 0 4px" }}>Into:</p>
                                <p style={{ fontWeight: "600", color: "var(--navy)" }}>"I tasted wine in a historic region, explored medieval villages, visited remarkable cultural sites, and experienced local traditions."</p>
                            </div>
                            <div className="sfe-inclusions-alert sfe-enrich-alert-style">
                                <p className="sfe-inclusions-alert-text">
                                    That's the difference between sightseeing and destination immersion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── COMMON SCENIC EXCURSION MISTAKES ─────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Scenic Excursion Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when planning your
                            Freechoice and Enrich experiences.
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

            {/* ── HOW TO CHOOSE THE RIGHT SCENIC EXCURSIONS ────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="choose-the-right-excursions">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">How to Choose the Right <br /> Scenic Excursions</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            Use this simple framework to match your
                            interests to the right activities.
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {chooseFramework.map((item, idx) => {
                            const CardIcon = item.icon;
                            const choiceItems = item.choice.split("+").map(s => {
                                const trimmed = s.trim();
                                return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
                            });

                            return (
                                <div key={idx} className="adg-card">
                                    <div
                                        className="adg-card-image-wrap"
                                        style={{
                                            background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            minHeight: "120px",
                                        }}
                                    >
                                        <div className="adg-card-eyebrow-wrap">
                                            <span className="adg-card-eyebrow-icon">
                                                {CardIcon}
                                            </span>
                                            <span className="adg-card-eyebrow-label">Excursion Guide</span>
                                        </div>
                                    </div>

                                    <div className="adg-card-body">
                                        <h3 className="adg-card-title">{item.title}</h3>

                                        <ul className="adg-card-list">
                                            {choiceItems.map((point, pIdx) => (
                                                <li key={pIdx} className="adg-card-list-item">
                                                    <span className="adg-card-list-dot"></span>
                                                    <span className="adg-card-list-text">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="adg-card-bar"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WHY A TRAVEL ADVISOR CAN HELP ────────────────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why a Travel Advisor <br /> Can Help
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                More Than Just the Destinations
                            </h3>
                            <p className="Avr-planning-left-body">
                                A knowledgeable luxury travel advisor can
                                help you evaluate an itinerary based on more
                                than just the destinations — this is
                                particularly useful when comparing multiple
                                Scenic itineraries.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Don't evaluate an itinerary solely by
                                    its ports — look at the experiences.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                They can help you understand:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Compass size={18} />, label: "Which itineraries offer the experiences you want" },
                                    { icon: <Footprints size={18} />, label: "Which excursions may involve significant walking" },
                                    { icon: <Calendar size={18} />, label: "Which departures are best for your travel style" },
                                    { icon: <Ship size={18} />, label: "Which cabin category makes sense" },
                                    { icon: <Plane size={18} />, label: "How to coordinate flights and transfers" },
                                    { icon: <Home size={18} />, label: "How to add pre- and post-cruise stays" },
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
                            Everything you need to know before choosing your
                            Scenic Freechoice excursions and Scenic Enrich
                            experiences.
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
                        alt="Scenic river cruise guests enjoying an exclusive Scenic Enrich cultural experience"
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
                                    Look at the Experiences, <br /> Not Just the Ports
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Freechoice and Scenic Enrich
                                        are two of the strongest components
                                        of the Scenic River Cruise
                                        experience. Freechoice gives
                                        travelers flexibility to select
                                        activities based on their interests,
                                        while Enrich adds exclusive cultural
                                        experiences that go beyond
                                        conventional sightseeing.

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
                                                Scenic's published materials
                                                describe both as important
                                                elements of its all-inclusive
                                                river cruise offering. For
                                                travelers considering Scenic,
                                                don't evaluate an itinerary
                                                solely by its ports.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                The right combination of
                                                Freechoice excursions and
                                                Enrich events can turn an
                                                already luxurious river
                                                cruise into a much more
                                                personal and memorable
                                                journey. At Trips &amp; Ships
                                                Luxury Travel, we'll help you
                                                plan every detail of your
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
                                            "Compare Scenic itineraries by experiences, not just ports",
                                            "Match Freechoice excursions to your interests",
                                            "Highlight exclusive Scenic Enrich opportunities",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Explain Scenic promotions",
                                            "Handle travel logistics from start to finish",
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

export default ScenicFreechoiceEnrich;