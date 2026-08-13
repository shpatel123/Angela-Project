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
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic itinerary photography once
   available. Paths assume a new
   /assets/ScenicItineraries folder. */
// import HeroImage from "../../assets/ScenicItineraries/scenic-itineraries-hero.jpg";
// import RhineImage from "../../assets/ScenicItineraries/scenic-rhine.jpg";
// import DanubeImage from "../../assets/ScenicItineraries/scenic-danube.jpg";
// import ShipExteriorImage from "../../assets/ScenicItineraries/scenic-ship-exterior.jpg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#webpage",
            name: "Best Scenic River Cruise Itineraries (2026) | Top Routes in Europe",
            url: "https://www.tripsandships.com/scenic-river-cruises/best-itineraries",
            description:
                "Discover the best Scenic River Cruise itineraries for 2026, including the Danube, Rhine, Douro, Rhône, Seine, Christmas Markets, and Tulip cruises. Compare destinations, highlights, and find the perfect luxury river cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#article",
            headline: "Best Scenic River Cruise Itineraries",
            description:
                "A complete comparison of Scenic's most popular river cruise itineraries, including the Rhine, Danube, Douro, Rhône, Seine, Christmas Markets, and Tulip cruises, and how to choose the right route for your travel style.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#breadcrumb",
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
                    name: "Best Scenic River Cruise Itineraries",
                    item: "https://www.tripsandships.com/scenic-river-cruises/best-itineraries",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#itemlist",
            name: "Best Scenic River Cruise Itineraries Guide — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Best Scenic River Cruise Itineraries: The Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Quick Comparison of Scenic's Best Itineraries" },
                { "@type": "ListItem", position: 3, name: "Best Overall: Rhine River Cruise" },
                { "@type": "ListItem", position: 4, name: "Scenic Itineraries by River" },
                { "@type": "ListItem", position: 5, name: "Which Itinerary Offers the Best Value?" },
                { "@type": "ListItem", position: 6, name: "Best for First-Time Travelers: Danube River Cruise" },
                { "@type": "ListItem", position: 7, name: "Which Itinerary Should You Choose?" },
                { "@type": "ListItem", position: 8, name: "Scenic vs. Other River Cruise Itineraries" },
                { "@type": "ListItem", position: 9, name: "Common Mistakes When Choosing an Itinerary" },
                { "@type": "ListItem", position: 10, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 11, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Scenic River Cruise itinerary is the best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhine River Cruise is widely considered Scenic's best overall itinerary because it combines castles, vineyards, charming villages, and historic cities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic itinerary is best for first-time travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Danube and Rhine are both excellent choices for first-time river cruisers thanks to their iconic destinations and diverse experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is Scenic's most popular river cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhine River and Danube River itineraries are among Scenic's most popular European cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic cruise is best for wine lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Douro River Cruise through Portugal is ideal for wine enthusiasts, offering vineyard visits and Port wine tastings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic itinerary is best for Christmas?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic's Christmas Market cruises along the Rhine and Danube are among the most popular seasonal itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic cruise is best for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many couples enjoy the Rhine, Rhône, and Douro itineraries for their romantic scenery, fine dining, and intimate atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best Scenic cruise for food lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhône River Cruise is known for its gourmet cuisine, French wines, and culinary experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When is the best time to take a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring and fall are popular for pleasant weather, while December is ideal for Christmas Market cruises and spring is perfect for Tulip cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes Scenic Freechoice excursions and Scenic Enrich experiences on most itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long are most Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most itineraries range from 7 to 15 nights, with some Grand Journeys lasting even longer.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I choose my itinerary or ship first?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Your itinerary usually has a greater impact on your overall experience than the specific Scenic ship, as the fleet maintains a consistent luxury standard.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book a Scenic itinerary through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare itineraries, recommend the best sailing for your interests, explain promotions, and coordinate your complete vacation.",
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
            q: "Which Scenic River Cruise itinerary is the best?",
            a: "The Rhine River Cruise is widely considered Scenic's best overall itinerary because it combines castles, vineyards, charming villages, and historic cities.",
        },
        {
            q: "Which Scenic itinerary is best for first-time travelers?",
            a: "The Danube and Rhine are both excellent choices for first-time river cruisers thanks to their iconic destinations and diverse experiences.",
        },
        {
            q: "What is Scenic's most popular river cruise?",
            a: "The Rhine River and Danube River itineraries are among Scenic's most popular European cruises.",
        },
        {
            q: "Which Scenic cruise is best for wine lovers?",
            a: "The Douro River Cruise through Portugal is ideal for wine enthusiasts, offering vineyard visits and Port wine tastings.",
        },
        {
            q: "Which Scenic itinerary is best for Christmas?",
            a: "Scenic's Christmas Market cruises along the Rhine and Danube are among the most popular seasonal itineraries.",
        },
        {
            q: "Which Scenic cruise is best for couples?",
            a: "Many couples enjoy the Rhine, Rhône, and Douro itineraries for their romantic scenery, fine dining, and intimate atmosphere.",
        },
        {
            q: "What is the best Scenic cruise for food lovers?",
            a: "The Rhône River Cruise is known for its gourmet cuisine, French wines, and culinary experiences.",
        },
        {
            q: "When is the best time to take a Scenic River Cruise?",
            a: "Spring and fall are popular for pleasant weather, while December is ideal for Christmas Market cruises and spring is perfect for Tulip cruises.",
        },
        {
            q: "Are Scenic excursions included?",
            a: "Yes. Scenic includes Scenic Freechoice excursions and Scenic Enrich experiences on most itineraries.",
        },
        {
            q: "How long are most Scenic River Cruises?",
            a: "Most itineraries range from 7 to 15 nights, with some Grand Journeys lasting even longer.",
        },
        {
            q: "Should I choose my itinerary or ship first?",
            a: "Your itinerary usually has a greater impact on your overall experience than the specific Scenic ship, as the fleet maintains a consistent luxury standard.",
        },
        {
            q: "Should I book a Scenic itinerary through a travel advisor?",
            a: "Yes. A luxury travel advisor can compare itineraries, recommend the best sailing for your interests, explain promotions, and coordinate your complete vacation.",
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

/* ── Best Overall (Rhine) Highlights Data ──────────────────────────── */
const rhineHighlights = [
    "Medieval castles",
    "Charming villages",
    "Vineyards",
    "Scenic river valleys",
    "UNESCO World Heritage sites",
    "Historic cities",
];

/* ── Scenic Itineraries by River Data ──────────────────────────────── */
const destinationFactors = [
    {
        id: "rhine",
        title: "Rhine River",
        badge: "Rhine River",
        icon: MapPinned,
        desc: "Scenic's most popular itinerary—and for good reason. Sailing past medieval castles, charming villages, and vineyards, it's ideal for first-time river cruisers, couples, and history lovers.",
        columns: [
            {
                label: "Popular ports:",
                items: ["Amsterdam", "Cologne", "Koblenz", "Strasbourg", "Basel"],
            },
            {
                label: "Best for:",
                items: [
                    "First-time river cruisers",
                    "Couples",
                    "History lovers",
                    "Photography enthusiasts",
                ],
            },
        ],
    },
    {
        id: "danube",
        title: "Danube River",
        badge: "Danube River",
        icon: Landmark,
        desc: "If you've never taken a river cruise before, the Danube is hard to beat, with imperial architecture, classical music, and grand European cities.",
        columns: [
            {
                label: "Popular ports:",
                items: ["Vienna", "Budapest", "Bratislava", "Passau"],
            },
            {
                label: "Best for:",
                items: [
                    "European history",
                    "Christmas Markets",
                    "Food lovers",
                    "First-time luxury travelers",
                ],
            },
        ],
    },
    {
        id: "douro",
        title: "Douro River",
        badge: "Douro River",
        icon: Wine,
        desc: "Portugal's Douro Valley is one of Europe's most beautiful wine regions, with terraced vineyards and authentic Portuguese villages.",
        columns: [
            {
                label: "Expect:",
                items: [
                    "Terraced vineyards",
                    "Port wine tastings",
                    "Family-owned wineries",
                    "Scenic valleys",
                    "Authentic Portuguese villages",
                ],
            },
            {
                label: "Best for:",
                items: [
                    "Wine enthusiasts",
                    "Couples",
                    "Slow-paced travel",
                    "Boutique experiences",
                ],
            },
        ],
    },
    {
        id: "rhone",
        title: "Rhône River",
        badge: "Rhône River",
        icon: Sparkles,
        desc: "France's Rhône River combines world-famous cuisine with stunning Provençal scenery—perfect for culinary and wine travelers.",
        columns: [
            {
                label: "Highlights:",
                items: [
                    "Provence",
                    "Lyon",
                    "Avignon",
                    "Châteauneuf-du-Pape",
                    "Lavender fields",
                    "Gourmet dining",
                ],
            },
            {
                label: "Best for:",
                items: ["Culinary travelers", "Wine lovers", "French culture", "Luxury vacations"],
            },
        ],
    },
    {
        id: "seine",
        title: "Seine River",
        badge: "Seine River",
        icon: Eye,
        desc: "The Seine offers a wonderful combination of Parisian elegance and historic landmarks, ideal for travelers interested in art, architecture, and World War II history.",
        columns: [
            {
                label: "Popular attractions:",
                items: [
                    "Paris",
                    "Monet's Gardens",
                    "Normandy",
                    "Historic cathedrals",
                    "Museums",
                    "French villages",
                ],
            },
        ],
    },
    {
        id: "christmas",
        title: "Christmas Markets",
        badge: "Christmas Markets",
        icon: Calendar,
        desc: "Scenic's Christmas Market cruises are among the most sought-after departures, sailing the Rhine and Danube during the festive season. Because these sailings sell out quickly, booking well in advance is highly recommended.",
        columns: [
            {
                label: "You'll experience:",
                items: [
                    "Festive villages",
                    "Christmas lights",
                    "Traditional markets",
                    "Seasonal foods",
                    "Mulled wine",
                    "Holiday concerts",
                ],
            },
        ],
    },
    {
        id: "tulip",
        title: "Tulip Cruises",
        badge: "Tulip Cruises",
        icon: Compass,
        desc: "Tulip cruises operate during the famous Dutch flower season—perfect for photographers and spring travelers.",
        columns: [
            {
                label: "Highlights:",
                items: ["Keukenhof Gardens", "Amsterdam", "Windmills", "Flower fields", "Canal towns"],
            },
        ],
    },
];

/* ── Best for First-Time Travelers (Danube) Data ───────────────────── */
const danubeFirstTimeItems = [
    { text: "Vienna & Budapest", icon: <MapPin size={20} /> },
    { text: "Classical music & imperial architecture", icon: <Landmark size={20} /> },
    { text: "UNESCO World Heritage sites", icon: <Compass size={20} /> },
    { text: "Christmas Markets", icon: <Calendar size={20} /> },
];

/* ── Which Itinerary Should You Choose Data ────────────────────────── */
const ShipData = [
    {
        key: "rhine",
        icon: <MapPinned size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Rhine River Cruise",
        imageAlt: "Scenic Rhine River Cruise castles and vineyards",
        items: ["You love castles", "Scenic landscapes", "Charming villages", "First-time European cruising"],
        accent: "adg-accent-gold",
    },
    {
        key: "danube",
        icon: <Landmark size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Danube River Cruise",
        imageAlt: "Scenic Danube River Cruise Vienna and Budapest",
        items: ["You enjoy history", "Music", "Grand European cities", "Christmas Markets"],
        accent: "adg-accent-teal",
    },
    {
        key: "rhone",
        icon: <Wine size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Rhône River Cruise",
        imageAlt: "Scenic Rhône River Cruise Provence",
        items: ["You love food", "French wine", "Provence"],
        accent: "adg-accent-rose",
    },
    {
        key: "douro",
        icon: <Compass size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Douro River Cruise",
        imageAlt: "Scenic Douro River Cruise Portugal vineyards",
        items: ["You enjoy wine", "Boutique destinations", "Portugal"],
        accent: "adg-accent-gold",
    },
    {
        key: "seine",
        icon: <Eye size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Seine River Cruise",
        imageAlt: "Scenic Seine River Cruise Paris and Normandy",
        items: ["Paris is on your bucket list", "You enjoy art and museums", "You're interested in Normandy"],
        accent: "adg-accent-teal",
    },
    {
        key: "christmas",
        icon: <Calendar size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Christmas Markets",
        imageAlt: "Scenic Christmas Market Cruise",
        items: ["You love holiday travel", "Seasonal experiences", "Festive traditions"],
        accent: "adg-accent-rose",
    },
    {
        key: "tulip",
        icon: <Sparkles size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Tulip Cruises",
        imageAlt: "Scenic Tulip Cruise Netherlands flower fields",
        items: ["You're visiting Europe in spring", "You enjoy gardens", "Photography"],
        accent: "adg-accent-gold",
    },
];

/* ── Quick Comparison of Scenic's Best Itineraries Data ────────────── */
const itineraryComparison = [
    { key: "rhine", itinerary: "Rhine River", bestFor: "First-time cruisers, castles, scenery", duration: "7–15 nights", rating: 5 },
    { key: "danube", itinerary: "Danube River", bestFor: "Historic cities & culture", duration: "7–15 nights", rating: 5 },
    { key: "douro", itinerary: "Douro River", bestFor: "Wine lovers", duration: "8–11 nights", rating: 5 },
    { key: "rhone", itinerary: "Rhône River", bestFor: "Food & Provence", duration: "8–11 nights", rating: 5 },
    { key: "seine", itinerary: "Seine River", bestFor: "Paris & Normandy", duration: "8–11 nights", rating: 5 },
    { key: "christmas", itinerary: "Christmas Markets", bestFor: "Holiday travel", duration: "7–11 nights", rating: 5 },
    { key: "tulip", itinerary: "Tulip Cruises", bestFor: "Spring flowers", duration: "8–10 nights", rating: 5 },
];

/* ── Scenic vs Other River Cruise Itineraries Data ─────────────────── */
const comparisonData = [
    { key: "scenic", line: "Scenic", strength: "All-inclusive luxury" },
    { key: "viking", line: "Viking", strength: "Destination-focused itineraries" },
    { key: "ama", line: "AmaWaterways", strength: "Active excursions" },
    { key: "riverside", line: "Riverside", strength: "Boutique luxury" },
    { key: "uniworld", line: "Uniworld", strength: "Elegant themed experiences" },
    { key: "tauck", line: "Tauck", strength: "Land and river combinations" },
];

/* ── Common Mistakes Data ─────────────────────────────────────────── */
const commonMistakes = [
    "Choosing based only on price",
    "Ignoring seasonal differences",
    "Booking without considering weather",
    "Underestimating the value of included excursions",
    "Waiting too long to reserve popular departures like Christmas Markets or Tulip season",
];

/* ── Main Component ──────────────────────────────────────────────── */
const BestScenicRiverCruiseItineraries = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeDestination, setActiveDestination] = useState("rhine");

    const currentDestination =
        destinationFactors.find((f) => f.id === activeDestination) || destinationFactors[0];
    const ActiveDestinationIcon = currentDestination.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Best Scenic River Cruise Itineraries | Top Routes in Europe</title>
                <meta name="title" content="Best Scenic River Cruise Itineraries | Which Cruise Should You Choose?" />
                <meta
                    name="description"
                    content="Discover the best Scenic River Cruise itineraries for 2026, including the Danube, Rhine, Douro, Rhône, Seine, Christmas Markets, and Tulip cruises. Compare destinations, highlights, and find the perfect luxury river cruise."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Best Scenic River Cruise <br /> Itineraries</h1>

                    <p>
                        One of the biggest reasons travelers choose Scenic
                        River Cruises is the opportunity to explore
                        Europe's most iconic rivers in true all-inclusive
                        luxury. From sailing past fairy-tale castles on the
                        Rhine to enjoying wine tastings in Portugal's Douro
                        Valley, every Scenic itinerary offers a unique
                        blend of culture, history, cuisine, and
                        breathtaking scenery.
                    </p>

                    {readMore && (
                        <p>
                            But with so many routes available, many
                            travelers ask: which Scenic River Cruise
                            itinerary is the best? The answer depends on
                            your travel style. Some itineraries are perfect
                            for first-time river cruisers, while others
                            appeal to food lovers, wine enthusiasts,
                            history buffs, or travelers celebrating a
                            special occasion. This guide compares the most
                            popular Scenic River Cruise itineraries,
                            explains who each route is best suited for, and
                            helps you choose the right journey for your
                            next luxury vacation.
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

            {/* ── BEST SCENIC RIVER CRUISE ITINERARIES: THE QUICK ANSWER ─────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Best Scenic River Cruise Itineraries: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Best Overall Scenic Itinerary: Rhine River Cruise",
                                "Best for First-Time River Cruisers: Danube River Cruise",
                                "Best for Wine Lovers: Douro River Cruise",
                                "Best for Castles & Scenery: Rhine River Cruise",
                                "🇫🇷 Best for Food & Culture: Rhône River Cruise",
                                "Best Seasonal Cruise: Christmas Market Cruise",
                                "Best Spring Cruise: Tulip Cruise",
                            ].map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Ship size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Our Recommendation: If this is your first
                            Scenic River Cruise, start with either the
                            Rhine or Danube. These itineraries showcase
                            Europe's most famous cities, picturesque
                            landscapes, and Scenic's signature
                            all-inclusive experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── QUICK COMPARISON OF SCENIC'S BEST ITINERARIES ────────────── */}
            <section className="adg-section" id="quick-itinerary-comparison" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Quick Comparison of Scenic's <br /> Best Itineraries</h2>  
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            A side-by-side look at Scenic's most popular
                            routes before you dive into the details.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">   
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Itinerary</th>
                                    <th>Best For</th>
                                    <th>Duration</th>
                                    <th>Luxury Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itineraryComparison.map((row) => (
                                    <tr key={row.key}>
                                        <td><strong>{row.itinerary}</strong></td>
                                        <td>{row.bestFor}</td>
                                        <td>{row.duration}</td>
                                        <td>{"⭐".repeat(row.rating)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── BEST OVERALL: RHINE RIVER CRUISE ─────────────────────────── */}
            <section className="rlc-lc-worth-section" id="best-overall-rhine">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Best Overall: Rhine River Cruise</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                The Rhine River is Scenic's most popular
                                itinerary—and for good reason. Why it's our
                                top pick:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {rhineHighlights.map((item, idx) => (
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
                                    Best for first-time river cruisers,
                                    couples, history lovers, photography
                                    enthusiasts, and travelers wanting
                                    iconic European scenery. Popular ports
                                    include Amsterdam, Cologne, Koblenz,
                                    Strasbourg, and Basel.
                                </p>
                            </div>

                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={RhineImage}
                                    alt="Scenic Rhine River Cruise castles and vineyards"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Most Popular • Rhine River</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Itinerary Fits You Best?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic's rivers and seasonal departures to plan the ideal cruise.
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

            {/* ── SCENIC ITINERARIES BY RIVER ──────────────────────────────── */}
            <section className="luc-destinations-section" id="itineraries-by-river">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Scenic Itineraries by River</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Each river offers a distinct atmosphere and set
                            of experiences. Here's what to expect from
                            Scenic's most popular itineraries.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {destinationFactors.map((item) => {
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
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveDestinationIcon size={22} strokeWidth={1.6} />
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

            {/* ── WHICH ITINERARY OFFERS THE BEST VALUE? ───────────────────── */}
            <section className="scenic-expensive-comparison-section" id="best-value-itinerary">
                <div className="scenic-expensive-comparison-container">
                    <div className="scenic-expensive-card-wrapper">
                        <div className="scenic-expensive-card-content">
                            <h2 className="scenic-expensive-card-title">Which Itinerary Offers the Best Value?</h2>
                            <div className="scenic-expensive-card-accent"></div>

                            <p className="scenic-expensive-card-intro">
                                Best Overall Value: the Rhine and Danube.
                            </p>

                            <p className="scenic-expensive-card-desc">
                                While every itinerary includes Scenic's
                                all-inclusive luxury experience, many
                                travelers feel the Rhine and Danube offer
                                the greatest overall value due to their
                                combination of iconic destinations,
                                cultural experiences, and scenic cruising.
                            </p>
                        </div>

                        <div className="scenic-expensive-card-sidebar">
                            <h4 style={{ marginBottom: "12px" }}>Why?</h4>
                            <div className="scenic-expensive-list">
                                {[
                                    "Iconic destinations",
                                    "Cultural experiences",
                                    "Scenic cruising",
                                    "All-inclusive luxury",
                                    "UNESCO World Heritage sites",
                                ].map((item, i) => (
                                    <div key={i} className="scenic-expensive-list-item">
                                        <Check size={14} className="scenic-expensive-item-icon" />
                                        <span className="scenic-expensive-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="scenic-expensive-image-wrap">
                        <img
                            // src={RhineImage}
                            alt="Scenic Rhine and Danube River Cruise itineraries"
                            className="scenic-expensive-image"
                        />
                        <div className="scenic-expensive-image-overlay">
                            <span className="scenic-expensive-image-label">Rhine & Danube</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHICH ITINERARY SHOULD YOU CHOOSE? ───────────────────────── */}
            <section
                className="adg-section"
                id="choosing-itinerary"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    {/* HEADER */}
                    <div className="adg-header">
                        <h2 className="adg-h2">Which Itinerary Should <br /> You Choose?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Scenic offers a variety of itineraries to suit different travel
                            styles, budgets, and occasions. Use this guide to find the best route
                            for your next luxury river cruise.
                        </p>
                    </div>

                    {/* CARDS GRID */}
                    <div className="adgs-grid">
                        {ShipData.map((item) => (
                            <div key={item.key} className={`adg-card ${item.accent}`}>
                                {/* IMAGE */}
                                <div className="adg-card-image-wrap">
                                    <img
                                        src={item.image}
                                        alt={item.imageAlt}
                                        className="adg-card-img"
                                    />

                                    <div className="adg-card-image-overlay"></div>

                                    {/* FLOATING EYEBROW ON IMAGE */}
                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">{item.icon}</span>
                                        <span className="adg-card-eyebrow-label">
                                            {item.eyebrow}
                                        </span>
                                    </div>
                                </div>

                                {/* BODY */}
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

                                {/* BOTTOM ACCENT BAR */}
                                <div className="adg-card-bar"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light">
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Exclusive Promotions</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Choose Your Itinerary?</h3>
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

            {/* ── SCENIC VS OTHER RIVER CRUISE ITINERARIES ─────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="itineraries-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs. Other River Cruise Itineraries</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Each cruise line brings a different strength to
                            the table—here's how Scenic compares.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.line}</strong>
                                        </td>
                                        <td>{row.strength}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── COMMON MISTAKES WHEN CHOOSING AN ITINERARY ───────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Mistakes When <br /> Choosing an Itinerary</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            A luxury travel advisor can help you compare
                            itineraries and choose the best departure for
                            your interests and budget.
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

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Itinerary Guidance</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Choosing the Right Itinerary Is About More Than Selecting a River
                            </h3>
                            <p className="Avr-planning-left-body">
                                Professional guidance ensures you maximize
                                the value of your vacation. A luxury travel
                                advisor can compare Scenic itineraries,
                                explain what's included, recommend the best
                                travel season, select the right suite
                                category, coordinate flights and hotels,
                                and compare Scenic with Viking, Riverside,
                                AmaWaterways, and Uniworld.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional guidance ensures you
                                    maximize the value of your vacation.
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
                                    { icon: <Ship size={18} />, label: "Explain what's included" },
                                    { icon: <Calendar size={18} />, label: "Recommend the best travel season" },
                                    { icon: <Home size={18} />, label: "Select the right suite category" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and hotels" },
                                    { icon: <BadgePercent size={18} />, label: "Identify available promotions" },
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
                            Everything travelers need to know about Scenic's
                            itineraries before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={ShipExteriorImage}
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
                                    An Impressive Collection <br /> of Luxury Itineraries
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic offers one of the most
                                        impressive collections of luxury
                                        river cruise itineraries in Europe.
                                        Whether you're exploring medieval
                                        castles on the Rhine, tasting
                                        world-class wines in Portugal's
                                        Douro Valley, wandering Christmas
                                        Markets along the Danube, or
                                        enjoying gourmet cuisine in
                                        Provence, every itinerary combines
                                        immersive destinations with
                                        Scenic's signature all-inclusive
                                        service.

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
                                                For first-time guests, the
                                                Rhine and Danube remain the
                                                best overall choices.
                                                Returning travelers may
                                                enjoy exploring the Rhône,
                                                Douro, Seine, or one of
                                                Scenic's seasonal holiday
                                                itineraries.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                compare itineraries and
                                                departures to find the best
                                                option for your travel
                                                style and budget.
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
                                            "Recommend the best travel season",
                                            "Explain promotions and included excursions",
                                            "Select the right suite category",
                                            "Arrange flights and hotels",
                                            "Coordinate private transfers",
                                            "Compare Scenic with other luxury lines",
                                            "Help you avoid common booking mistakes",
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

export default BestScenicRiverCruiseItineraries;