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
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Ships & Suites photography once
   available. Paths assume a new
   /assets/ScenicShipsSuites folder. */
// import HeroImage from "../../assets/ScenicShipsSuites/scenic-ships-hero.jpg";
// import SuiteImage from "../../assets/ScenicShipsSuites/scenic-ships-suite.jpg";
// import SunLoungeImage from "../../assets/ScenicShipsSuites/scenic-ships-sun-lounge.jpg";
// import ShipExteriorImage from "../../assets/ScenicShipsSuites/scenic-ships-exterior.jpg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#webpage",
            name: "Scenic River Cruise Ships & Suites Guide (2026) | Compare Every Ship & Suite",
            url: "https://www.tripsandships.com/scenic-river-cruises/ships-suites",
            description:
                "Explore every Scenic River Cruise ship and suite category. Compare Scenic's Space-Ships, Royal Suites, balcony suites, amenities, deck plans, and find the best cabin for your luxury river cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#article",
            headline: "Scenic River Cruise Ships & Suites | Complete Luxury Guide",
            description:
                "A complete guide to the Scenic Space-Ship fleet and suite categories, covering itineraries by river, suite features, the Scenic Sun Lounge, and how to choose the right ship and cabin.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#breadcrumb",
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
                    name: "Scenic River Cruise Ships & Suites Guide",
                    item: "https://www.tripsandships.com/scenic-river-cruises/ships-suites",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#itemlist",
            name: "Scenic River Cruise Ships & Suites Guide — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Scenic Ships & Suites: The Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Scenic Fleet at a Glance" },
                { "@type": "ListItem", position: 3, name: "Which Scenic Ship Is Best?" },
                { "@type": "ListItem", position: 4, name: "Scenic Ships by Destination" },
                { "@type": "ListItem", position: 5, name: "Scenic Suite Categories Explained" },
                { "@type": "ListItem", position: 6, name: "What Is the Scenic Sun Lounge?" },
                { "@type": "ListItem", position: 7, name: "Which Suite Offers the Best Value?" },
                { "@type": "ListItem", position: 8, name: "Which Suite Should You Choose?" },
                { "@type": "ListItem", position: 9, name: "Scenic Ships vs. Other Luxury River Cruise Lines" },
                { "@type": "ListItem", position: 10, name: "Common Mistakes When Choosing a Suite" },
                { "@type": "ListItem", position: 11, name: "Which Scenic Ship Is Best for First-Time Cruisers?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 13, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Scenic River Cruise ship is the best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There isn't a single \"best\" ship. Scenic maintains a consistent luxury standard across its fleet, so your itinerary and destination are usually more important than the specific vessel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the Scenic Sun Lounge?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It's Scenic's signature enclosed balcony featuring floor-to-ceiling windows that can be lowered electronically, allowing guests to enjoy river views in any weather.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does every Scenic suite include butler service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Personalized butler service is available for every suite category.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic suite offers the best value?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many travelers consider the Balcony Suite with Scenic Sun Lounge to offer the best balance of luxury, views, and price.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the most luxurious suite on Scenic?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Royal Owner's Suite is typically the largest and most luxurious accommodation available onboard.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic ships all the same?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While the overall luxury experience is consistent, ships vary slightly in décor, artwork, and itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic ship sails the Danube?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Several Scenic Space-Ships operate Danube itineraries, depending on the season and schedule.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic ship sails the Rhine?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Multiple Scenic ships cruise the Rhine throughout the year, especially during spring, summer, and Christmas Market seasons.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I choose my ship or my itinerary first?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For Scenic, choosing the right itinerary usually has a greater impact on your vacation than selecting a specific ship.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic ships adults-only?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic primarily caters to adult travelers, though age policies may vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How far in advance should I book the best suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Booking 9–18 months in advance typically provides the best selection, especially for Balcony Suites and Royal Suites on popular departures.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book a Scenic River Cruise through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can recommend the best ship, compare suite categories, explain promotions, and help you choose the itinerary that best fits your travel style.",
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
            q: "Which Scenic River Cruise ship is the best?",
            a: "There isn't a single \"best\" ship. Scenic maintains a consistent luxury standard across its fleet, so your itinerary and destination are usually more important than the specific vessel.",
        },
        {
            q: "What is the Scenic Sun Lounge?",
            a: "It's Scenic's signature enclosed balcony featuring floor-to-ceiling windows that can be lowered electronically, allowing guests to enjoy river views in any weather.",
        },
        {
            q: "Does every Scenic suite include butler service?",
            a: "Yes. Personalized butler service is available for every suite category.",
        },
        {
            q: "Which Scenic suite offers the best value?",
            a: "Many travelers consider the Balcony Suite with Scenic Sun Lounge to offer the best balance of luxury, views, and price.",
        },
        {
            q: "What is the most luxurious suite on Scenic?",
            a: "The Royal Owner's Suite is typically the largest and most luxurious accommodation available onboard.",
        },
        {
            q: "Are Scenic ships all the same?",
            a: "While the overall luxury experience is consistent, ships vary slightly in décor, artwork, and itineraries.",
        },
        {
            q: "Which Scenic ship sails the Danube?",
            a: "Several Scenic Space-Ships operate Danube itineraries, depending on the season and schedule.",
        },
        {
            q: "Which Scenic ship sails the Rhine?",
            a: "Multiple Scenic ships cruise the Rhine throughout the year, especially during spring, summer, and Christmas Market seasons.",
        },
        {
            q: "Should I choose my ship or my itinerary first?",
            a: "For Scenic, choosing the right itinerary usually has a greater impact on your vacation than selecting a specific ship.",
        },
        {
            q: "Are Scenic ships adults-only?",
            a: "Scenic primarily caters to adult travelers, though age policies may vary by itinerary.",
        },
        {
            q: "How far in advance should I book the best suites?",
            a: "Booking 9–18 months in advance typically provides the best selection, especially for Balcony Suites and Royal Suites on popular departures.",
        },
        {
            q: "Should I book a Scenic River Cruise through a travel advisor?",
            a: "Yes. A luxury travel advisor can recommend the best ship, compare suite categories, explain promotions, and help you choose the itinerary that best fits your travel style.",
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

/* ── Scenic Fleet Data ─────────────────────────────────────────────── */
const fleetShips = [
    "Scenic Jasper",
    "Scenic Opal",
    "Scenic Amber",
    "Scenic Crystal",
    "Scenic Diamond",
    "Scenic Sapphire",
    "Scenic Pearl",
    "Scenic Ruby",
    "Scenic Jewel",
    "Scenic Azure",
    "Scenic Gem",
    "Scenic Jade",
];

/* ── What Makes Ships Different Data ──────────────────────────────── */
const shipDifferences = [
    "River itinerary",
    "Sailing region",
    "Seasonal experiences",
    "Deck layout",
    "Public space décor",
];

/* ── Scenic Ships by Destination Data ─────────────────────────────── */
const destinationFactors = [
    {
        id: "rhine",
        title: "Rhine River",
        badge: "Rhine River",
        icon: MapPinned,
        desc: "Ideal for first-time river cruisers who want castles, vineyards, Christmas Markets, and a Switzerland & Netherlands itinerary.",
        columns: [
            {
                label: "Popular ports include:",
                items: ["Amsterdam", "Cologne", "Strasbourg", "Basel"],
            },
        ],
    },
    {
        id: "danube",
        title: "Danube River",
        badge: "Danube River",
        icon: Landmark,
        desc: "Perfect for travelers interested in historic cities, imperial architecture, music, and UNESCO World Heritage sites.",
        columns: [
            {
                label: "Popular ports:",
                items: ["Budapest", "Vienna", "Bratislava", "Passau"],
            },
        ],
    },
    {
        id: "rhone",
        title: "Rhône River",
        badge: "Rhône River",
        icon: Wine,
        desc: "Known for wine regions, Provence, French cuisine, and lavender landscapes.",
        columns: [
            {
                label: "Known for:",
                items: ["Wine regions", "Provence", "French cuisine", "Lavender landscapes"],
            },
        ],
    },
    {
        id: "douro",
        title: "Douro River",
        badge: "Douro River",
        icon: Compass,
        desc: "Best for Portugal, wine lovers, scenic vineyards, and boutique experiences.",
        columns: [
            {
                label: "Best for:",
                items: ["Portugal", "Wine lovers", "Scenic vineyards", "Boutique experiences"],
            },
        ],
    },
    {
        id: "seine",
        title: "Seine River",
        badge: "Seine River",
        icon: Sparkles,
        desc: "Ideal for Paris, Normandy, history, and art lovers.",
        columns: [
            {
                label: "Ideal for:",
                items: ["Paris", "Normandy", "History", "Art lovers"],
            },
        ],
    },
];

/* ── Scenic Suite Categories Data ─────────────────────────────────── */
const suiteFactors = [
    {
        id: "standard",
        title: "Standard Suite",
        badge: "Standard Suite",
        icon: Home,
        desc: "Best for budget-conscious luxury travelers and guests who plan to spend most of their time exploring destinations rather than in their cabin.",
        columns: [
            {
                label: "Features include:",
                items: [
                    "Comfortable accommodations",
                    "Luxury bedding",
                    "Elegant bathroom",
                    "Butler service",
                    "Complimentary Wi-Fi",
                ],
            },
        ],
    },
    {
        id: "balcony",
        title: "Balcony Suite (Scenic Sun Lounge)",
        badge: "Balcony Suite",
        icon: Sparkles,
        desc: "One of Scenic's signature accommodations, and the most popular suite category on the fleet.",
        columns: [
            {
                label: "Features:",
                items: [
                    "Scenic Sun Lounge",
                    "Floor-to-ceiling windows",
                    "Private sitting area",
                    "Luxury bathroom",
                    "Butler service",
                ],
            },
        ],
    },
    {
        id: "junior",
        title: "Junior Suite",
        badge: "Junior Suite",
        icon: Gem,
        desc: "Offers additional living space—ideal for longer cruises, couples, and anniversary trips.",
        columns: [
            {
                label: "Additional benefits often include:",
                items: ["Larger seating area", "More storage", "Premium location"],
            },
        ],
    },
    {
        id: "royalbalcony",
        title: "Royal Balcony Suite",
        badge: "Royal Balcony",
        icon: Award,
        desc: "A premium luxury option, excellent for milestone celebrations.",
        columns: [
            {
                label: "Features:",
                items: [
                    "Larger suite",
                    "Expanded living area",
                    "Enhanced butler service",
                    "Premium furnishings",
                    "Additional amenities",
                ],
            },
        ],
    },
    {
        id: "royalowners",
        title: "Royal Owner's Suite",
        badge: "Royal Owner's",
        icon: Star,
        desc: "The most luxurious accommodation onboard—perfect for travelers who want the highest level of comfort.",
        columns: [
            {
                label: "Features may include:",
                items: [
                    "Separate living room",
                    "Spacious bedroom",
                    "Luxury bathroom",
                    "Premium location",
                    "Personalized service",
                    "Butler assistance",
                    "Panoramic river views",
                ],
            },
        ],
    },
];

/* ── Sun Lounge Benefits Data ─────────────────────────────────────── */
const sunLoungeBenefits = [
    "Comfortable in all weather",
    "Larger usable living space",
    "Better privacy",
    "Excellent river views",
    "Climate-controlled environment",
];

const ShipData = [
    {
        key: "standard-suite",
        icon: <Wallet size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Standard Suite",
        // image: StandardSuite,
        imageAlt: "Scenic Standard Suite",
        items: [
            "Budget matters most",
            "You're rarely in your cabin",
            "This is your first river cruise",
        ],
        accent: "adg-accent-rose",
    },
    {
        key: "balcony-suite",
        icon: <Eye size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Balcony Suite",
        // image: BalconySuite,
        imageAlt: "Scenic Balcony Suite",
        items: [
            "You enjoy relaxing in your room",
            "You want river views",
            "You appreciate natural light",
        ],
        accent: "adg-accent-teal",
    },
    {
        key: "junior-suite",
        icon: <Sparkles size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Junior Suite",
        // image: JuniorSuite,
        imageAlt: "Scenic Junior Suite",
        items: [
            "You're celebrating a special occasion",
            "You're sailing for 10+ nights",
            "You prefer additional space",
        ],
        accent: "adg-accent-gold",
    },
    {
        key: "royal-suite",
        icon: <Crown size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Royal Suite",
        // image: RoyalSuite,
        imageAlt: "Scenic Royal Suite",
        items: [
            "Luxury is your priority",
            "You're celebrating a milestone",
            "You enjoy premium accommodations",
        ],
        accent: "adg-accent-rose",
    },
];
/* ── Scenic Ships vs Other Luxury River Cruise Lines Data ─────────── */
const comparisonData = [
    { key: "scenic", line: "Scenic", strength: "Butler service & Sun Lounge suites" },
    { key: "riverside", line: "Riverside", strength: "Larger suites & boutique feel" },
    { key: "viking", line: "Viking", strength: "Scandinavian simplicity" },
    { key: "ama", line: "AmaWaterways", strength: "Active excursions" },
    { key: "uniworld", line: "Uniworld", strength: "Unique décor" },
    { key: "tauck", line: "Tauck", strength: "Guided land experiences" },
];

/* ── Common Mistakes Data ─────────────────────────────────────────── */
const commonMistakes = [
    "Choose based only on price",
    "Ignore itinerary",
    "Book late and lose the best suite selection",
    "Don't compare deck locations",
    "Overlook current promotions",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruiseShipsSuites = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeDestination, setActiveDestination] = useState("rhine");
    const [activeSuite, setActiveSuite] = useState("standard");

    const currentDestination =
        destinationFactors.find((f) => f.id === activeDestination) || destinationFactors[0];
    const ActiveDestinationIcon = currentDestination.icon;

    const currentSuite =
        suiteFactors.find((f) => f.id === activeSuite) || suiteFactors[0];
    const ActiveSuiteIcon = currentSuite.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruise Ships & Suites Guide | Compare Every Ship & Suite</title>
                <meta name="title" content="Scenic River Cruise Ships & Suites | Complete Luxury Guide" />
                <meta
                    name="description"
                    content="Explore every Scenic River Cruise ship and suite category. Compare Scenic's Space-Ships, Royal Suites, balcony suites, amenities, deck plans, and find the best cabin for your luxury river cruise."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruise <br /> Ships & Suites Guide</h1>

                    <p>
                        Choosing the right Scenic River Cruise ship and
                        suite is one of the biggest decisions you'll make
                        when planning your vacation. While Scenic's fleet
                        shares the same commitment to luxury, each ship has
                        its own atmosphere, itinerary, and suite options
                        that can shape your overall experience.
                    </p>

                    {readMore && (
                        <p>
                            Whether you're planning a Danube, Rhine, Rhône,
                            Douro, or Seine cruise, this guide explains the
                            Scenic fleet, compares suite categories,
                            highlights the best cabins, and helps you decide
                            which ship is the right fit for your travel
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

            {/* ── 60-SECOND ANSWER ─────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Scenic Ships & Suites: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're looking for the quick answer:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Best Overall Ship: Depends on the itinerary rather than the ship itself—Scenic maintains a consistent luxury standard across the fleet",
                                "Best Suite: Royal Owner's Suite for maximum space and exclusive amenities",
                                "Best Value: Balcony Suites offer an excellent balance of comfort and price",
                                "Best for First-Time Guests: Any Scenic Space-Ship on the Rhine or Danube",
                                "Luxury Level: Five-star",
                                "Service: Butler service included for every suite",
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
                            For most travelers, choosing the right itinerary
                            matters more than choosing a specific ship—but
                            your suite category can make just as big a
                            difference to your experience onboard.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SCENIC FLEET AT A GLANCE ─────────────────────────────────── */}
            <section className="scenic-fleet-section" id="scenic-fleet-at-a-glance">
                <div className="scenic-fleet-container">
                    <div className="scenic-fleet-header">
                        <h2 className="scenic-fleet-title">Scenic Fleet at a Glance</h2>
                        <div className="scenic-fleet-divider"></div>
                        <p className="scenic-fleet-intro">
                            Scenic's modern Space-Ships sail some of
                            Europe's most iconic rivers. Although the décor
                            and artwork vary slightly, guests enjoy a
                            consistent luxury experience across the fleet.
                        </p>
                    </div>

                    <div className="scenic-fleet-grid">
                        {fleetShips.map((ship, i) => (
                            <div key={i} className="scenic-fleet-card">
                                <div className="scenic-fleet-icon-box">
                                    <Ship size={18} strokeWidth={2} />
                                </div>
                                <span className="scenic-fleet-name">{ship}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHICH SCENIC SHIP IS BEST? ───────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="which-ship-is-best">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Which Scenic Ship Is Best?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Unlike many ocean cruise lines where ships
                                vary significantly, Scenic focuses on
                                delivering the same luxury standard
                                throughout its river fleet. The biggest
                                differences are usually:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {shipDifferences.map((item, idx) => (
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
                                    For most travelers, choosing the right
                                    itinerary is more important than
                                    choosing a specific ship.
                                </p>
                            </div>

                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={ShipExteriorImage}
                                    alt="Scenic Space-Ship sailing along a European river"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Consistent Luxury • Across the Fleet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC SHIPS BY DESTINATION ──────────────────────────────── */}
            <section className="luc-destinations-section" id="ships-by-destination">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Scenic River Cruise Ships by Destination</h2>
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

            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Itinerary Fits You Best?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic's rivers, ships, and suite categories to plan the ideal cruise.
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

            {/* ── SCENIC SUITE CATEGORIES EXPLAINED ────────────────────────── */}
            <section className="dac-reasons-section" id="suite-categories-explained" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="dac-reasons-container">
                    <div className="dac-reasons-header">
                        <span className="dac-reasons-eyebrow">
                            Scenic Suite Categories Explained
                        </span>
                        <h2 className="dac-reasons-title">
                            Scenic Suite Categories Explained
                        </h2>
                        <div className="dac-reasons-accent"></div>
                        <p className="dac-reasons-lead">
                            Choosing the right suite is often more important than choosing the ship.
                        </p>
                    </div>

                    <div className="dac-reasons-tabs-nav">
                        {suiteFactors.map((item, idx) => {
                            const NavIcon = item.icon;
                            const isActive = activeSuite === item.id;

                            return (
                                <button
                                    key={item.id}
                                    className={`dac-reasons-tab-btn ${isActive ? "active" : ""}`}
                                    onClick={() => setActiveSuite(item.id)}
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
                        {suiteFactors.map((item, idx) => {
                            if (activeSuite !== item.id) return null;
                            const NavIcon = item.icon;

                            return (
                                <div key={item.id} className="dac-reasons-tab-panel fade-in">
                                    <div className={`dac-reasons-row ${idx % 2 === 0 ? "dac-reasons-row--left-content" : "dac-reasons-row--right-content"}`}>
                                        <div className="dac-reasons-content">
                                            <span className="dac-reasons-row-number">0{idx + 1}</span>
                                            <h3 className="dac-reasons-row-title">{item.title}</h3>
                                            <p className="dac-reasons-row-desc">{item.desc}</p>
                                            
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
                                                <span className="scenic-firsttime-placeholder-text" style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--text-muted)" }}>
                                                    {item.title} Placeholder
                                                </span>
                                                <img
                                                    // src={SuiteImage}
                                                    alt={item.title}
                                                    style={{ display: "none" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WHAT IS THE SCENIC SUN LOUNGE? ───────────────────────────── */}
            <section className="rlc-lc-worth-section" id="what-is-the-sun-lounge">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">What Is the Scenic Sun Lounge?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Unlike a traditional balcony, Scenic's
                                signature Sun Lounge uses floor-to-ceiling
                                windows that can be lowered at the touch of
                                a button. It's one of Scenic's most
                                recognizable design features. Benefits
                                include:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {sunLoungeBenefits.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={SunLoungeImage}
                                    alt="Scenic Sun Lounge floor-to-ceiling windows in a suite"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Signature Feature • Scenic Sun Lounge</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH SUITE OFFERS THE BEST VALUE? ───────────────────────── */}
            <section className="scenic-expensive-comparison-section" id="best-value-suite">
                <div className="scenic-expensive-comparison-container">
                    <div className="scenic-expensive-card-wrapper">
                        <div className="scenic-expensive-card-content">
                            <h2 className="scenic-expensive-card-title">Which Suite Offers the Best Value?</h2>
                            <div className="scenic-expensive-card-accent"></div>

                            <p className="scenic-expensive-card-intro">
                                Best Overall Value: the Balcony Suite.
                            </p>

                            <p className="scenic-expensive-card-desc">
                                Most travelers feel this category provides
                                the best balance between luxury and price,
                                thanks to the combination of the Scenic Sun
                                Lounge, butler service, and spacious layout.
                            </p>
                        </div>

                        <div className="scenic-expensive-card-sidebar">
                            <h4 style={{ marginBottom: "12px" }}>Why?</h4>
                            <div className="scenic-expensive-list">
                                {[
                                    "Scenic Sun Lounge",
                                    "Butler service",
                                    "Spacious layout",
                                    "Luxury amenities",
                                    "Excellent river views",
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
                            // src={SuiteImage}
                            alt="Scenic Balcony Suite with Sun Lounge"
                            className="scenic-expensive-image"
                        />
                        <div className="scenic-expensive-image-overlay">
                            <span className="scenic-expensive-image-label">Balcony Suite</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH SUITE SHOULD YOU CHOOSE? ────────────────────────── */}
            <section
                className="adg-section"
                id="choosing-itinerary"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    {/* HEADER */}
                    <div className="adg-header">
                        <h2 className="adg-h2">Which Suite Should You Choose?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Scenic offers a variety of suite categories to suit different travel
                            styles, budgets, and occasions. Use this guide to find the best option
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
                            <h3 className="scenic-inline-cta-title-light">Ready to Choose Your Ship and Suite?</h3>
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

            {/* ── SCENIC SHIPS VS OTHER LUXURY RIVER CRUISE LINES ──────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="ships-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Ships vs. Other Luxury River Cruise Lines</h2>
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
                                    <th>Strength</th>
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

            {/* ── COMMON MISTAKES WHEN CHOOSING A SUITE ────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Mistakes When <br /> Choosing a Suite</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Many first-time guests run into the same
                            avoidable pitfalls. Working with a luxury
                            travel advisor can help you avoid these common
                            booking mistakes.
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

            {/* ── BEST FOR FIRST-TIME CRUISERS ─────────────────────────────── */}
            <section className="scenic-firsttime-section" id="best-for-first-time-cruisers">
                <div className="scenic-firsttime-container">
                    <div className="scenic-firsttime-grid">
                        <div className="scenic-firsttime-content">
                            <h2 className="scenic-firsttime-title">Which Scenic Ship Is Best for First-Time Cruisers?</h2>
                            <div className="scenic-firsttime-divider"></div>

                            <p className="scenic-firsttime-intro">
                                Most first-time guests love:
                            </p>

                            <div className="scenic-firsttime-grid-items">
                                {[
                                    { text: "Rhine itineraries", icon: <MapPin size={20} /> },
                                    { text: "Danube itineraries", icon: <Compass size={20} /> },
                                    { text: "Balcony Suites", icon: <Home size={20} /> },
                                    { text: "7–10 night cruises", icon: <Calendar size={20} /> },
                                ].map((item, i) => (
                                    <div key={i} className="scenic-firsttime-card-item">
                                        <div className="scenic-firsttime-card-icon">
                                            {item.icon}
                                        </div>
                                        <span className="scenic-firsttime-card-text">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="scenic-firsttime-outro">
                                These itineraries offer iconic European
                                destinations and a comfortable introduction to
                                river cruising.
                            </p>
                        </div>

                        <div className="scenic-firsttime-media">
                            <div className="scenic-firsttime-image-wrapper">
                                <Ship size={48} className="scenic-firsttime-placeholder-icon" strokeWidth={1.2} />
                                <span className="scenic-firsttime-placeholder-text">
                                    Scenic Space-Ship exterior
                                </span>
                                <img
                                    // src={ShipExteriorImage}
                                    alt="Scenic Space-Ship exterior sailing down a European river"
                                    style={{ display: "none" }}
                                />
                                <div className="scenic-firsttime-badge">Recommended for Beginners</div>
                            </div>
                        </div>
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
                        <span className="Avr-planning-eyebrow">Personalized Ship & Suite Guidance</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Choosing the Right Ship Is Only Part of Planning
                            </h3>
                            <p className="Avr-planning-left-body">
                                Expert advice can help you maximize the
                                value of your vacation. A luxury travel
                                advisor can compare Scenic ships, recommend
                                the best suite, explain promotions, compare
                                Scenic with Viking, Riverside,
                                AmaWaterways, and Uniworld, coordinate
                                flights and hotels, and match your cruise
                                to your travel style and budget.
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
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Ship size={18} />, label: "Compare Scenic ships" },
                                    { icon: <Home size={18} />, label: "Recommend the best suite" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions" },
                                    { icon: <Gem size={18} />, label: "Compare Scenic with Viking, Riverside, AmaWaterways, and Uniworld" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and hotels" },
                                    { icon: <Wallet size={18} />, label: "Match your cruise to your travel style and budget" },
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
                            ships and suites before booking.
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
                                    Consistent Luxury, <br /> Personalized to You
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic's fleet is designed around
                                        consistency, luxury, and
                                        personalized service. Rather than
                                        focusing on one "best" ship, Scenic
                                        delivers a similar high-end
                                        experience across its Space-Ships,
                                        allowing travelers to choose based
                                        on destination and itinerary.

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
                                                For most guests, the Balcony
                                                Suite provides the best
                                                combination of comfort,
                                                river views, and value,
                                                while those seeking the
                                                ultimate luxury experience
                                                will appreciate the
                                                spacious Royal Owner's
                                                Suite.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                compare ships, itineraries,
                                                and suite categories to find
                                                the best option for your
                                                travel style and budget.
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
                                            "Compare Scenic ships and itineraries",
                                            "Recommend the best suite for your budget",
                                            "Explain promotions and limited-time offers",
                                            "Arrange flights and hotels",
                                            "Coordinate private transfers",
                                            "Compare Scenic with other luxury lines",
                                            "Identify available promotions",
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

export default ScenicRiverCruiseShipsSuites;