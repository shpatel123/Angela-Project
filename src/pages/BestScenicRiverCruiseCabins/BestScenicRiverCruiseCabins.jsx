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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#webpage",
            name: "Best Scenic River Cruise Cabins (and Cabins to Avoid) | 2026 Guide",
            url: "https://www.tripsandships.com/scenic-river-cruises/best-cabins",
            description:
                "Discover the best Scenic River Cruise cabins for couples, first-time cruisers, luxury travelers, and milestone trips. Learn which cabins offer the best value, which to avoid, and how to choose the perfect suite.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#article",
            headline: "Best Scenic River Cruise Cabins (and Cabins to Avoid)",
            description:
                "A complete comparison of every Scenic River Cruise cabin category, including which suites offer the best value, the best cabins for couples and first-timers, and which cabins to avoid.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#breadcrumb",
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
                    name: "Best Scenic River Cruise Cabins",
                    item: "https://www.tripsandships.com/scenic-river-cruises/best-cabins",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#itemlist",
            name: "Best Scenic River Cruise Cabins Guide — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Best Scenic River Cruise Cabins: The Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Quick Cabin Comparison" },
                { "@type": "ListItem", position: 3, name: "What Makes a Great Scenic Cabin?" },
                { "@type": "ListItem", position: 4, name: "Best Scenic Cabin For Every Traveler" },
                { "@type": "ListItem", position: 5, name: "Are There Any Scenic Cabins to Avoid?" },
                { "@type": "ListItem", position: 6, name: "Which Deck Is Best?" },
                { "@type": "ListItem", position: 7, name: "Scenic Sun Lounge: Worth It?" },
                { "@type": "ListItem", position: 8, name: "Common Cabin Booking Mistakes" },
                { "@type": "ListItem", position: 9, name: "Scenic vs. Other Luxury River Cruise Cabins" },
                { "@type": "ListItem", position: 10, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 11, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best cabin on a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Deluxe Balcony Suite is widely regarded as the best overall choice thanks to its combination of space, Scenic Sun Lounge, premium location, and value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic cabin offers the best value?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Balcony Suite provides the best balance of comfort, luxury, and price for most travelers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are there any cabins to avoid on Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There are no truly bad cabins. However, travelers who prioritize expansive views may prefer Balcony Suites over lower-deck Standard Suites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Scenic Sun Lounge worth paying for?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Many guests consider it one of Scenic's signature features, providing panoramic river views and additional living space in all weather conditions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cabin is best for first-time Scenic guests?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A Balcony Suite is an excellent choice for first-time cruisers because it offers the classic Scenic experience at a reasonable upgrade.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cabin is best for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Deluxe Balcony Suite is a favorite among couples seeking comfort, privacy, and beautiful river views.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic suite is the most luxurious?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Royal Owner's Suite is the largest and most luxurious accommodation onboard, offering premium amenities and personalized service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which deck is best on a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many travelers prefer the middle or upper decks for convenient access to public areas and excellent views, though the best deck depends on your cabin category and preferences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is it worth upgrading from a Standard Suite?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "If you enjoy relaxing in your cabin and want Scenic's signature Sun Lounge, many travelers find the upgrade worthwhile.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How early should I book the best Scenic cabins?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Booking 9 to 18 months before departure usually provides the widest choice of cabin categories and deck locations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a travel advisor help me choose the best cabin?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can recommend the best cabin based on your itinerary, budget, travel style, and current promotions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should I consider before choosing a Scenic cabin?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Think about your budget, preferred views, cruise length, deck location, and how much time you expect to spend relaxing in your suite.",
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
            q: "What is the best cabin on a Scenic River Cruise?",
            a: "The Deluxe Balcony Suite is widely regarded as the best overall choice thanks to its combination of space, Scenic Sun Lounge, premium location, and value.",
        },
        {
            q: "Which Scenic cabin offers the best value?",
            a: "The Balcony Suite provides the best balance of comfort, luxury, and price for most travelers.",
        },
        {
            q: "Are there any cabins to avoid on Scenic River Cruises?",
            a: "There are no truly bad cabins. However, travelers who prioritize expansive views may prefer Balcony Suites over lower-deck Standard Suites.",
        },
        {
            q: "Is the Scenic Sun Lounge worth paying for?",
            a: "Yes. Many guests consider it one of Scenic's signature features, providing panoramic river views and additional living space in all weather conditions.",
        },
        {
            q: "Which cabin is best for first-time Scenic guests?",
            a: "A Balcony Suite is an excellent choice for first-time cruisers because it offers the classic Scenic experience at a reasonable upgrade.",
        },
        {
            q: "Which cabin is best for couples?",
            a: "The Deluxe Balcony Suite is a favorite among couples seeking comfort, privacy, and beautiful river views.",
        },
        {
            q: "Which Scenic suite is the most luxurious?",
            a: "The Royal Owner's Suite is the largest and most luxurious accommodation onboard, offering premium amenities and personalized service.",
        },
        {
            q: "Which deck is best on a Scenic River Cruise?",
            a: "Many travelers prefer the middle or upper decks for convenient access to public areas and excellent views, though the best deck depends on your cabin category and preferences.",
        },
        {
            q: "Is it worth upgrading from a Standard Suite?",
            a: "If you enjoy relaxing in your cabin and want Scenic's signature Sun Lounge, many travelers find the upgrade worthwhile.",
        },
        {
            q: "How early should I book the best Scenic cabins?",
            a: "Booking 9 to 18 months before departure usually provides the widest choice of cabin categories and deck locations.",
        },
        {
            q: "Can a travel advisor help me choose the best cabin?",
            a: "Yes. A luxury travel advisor can recommend the best cabin based on your itinerary, budget, travel style, and current promotions.",
        },
        {
            q: "What should I consider before choosing a Scenic cabin?",
            a: "Think about your budget, preferred views, cruise length, deck location, and how much time you expect to spend relaxing in your suite.",
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

/* ── What Makes a Great Scenic Cabin? Data ─────────────────────────── */
const cabinFactorItems = [
    "River views",
    "Natural light",
    "Living space",
    "Privacy",
    "Deck location",
    "Budget",
    "Cruise length",
    "Time spent in your suite",
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
        title: "Balcony Suite — Best Value",
        badge: "Balcony Suite",
        icon: Sparkles,
        desc: "If you're looking for the highest value without upgrading to premium suites, the Balcony Suite is difficult to beat. It introduces Scenic's signature Sun Lounge, replacing a traditional balcony with a private enclosed space featuring floor-to-ceiling windows.",
        columns: [
            {
                label: "Why travelers love it:",
                items: [
                    "Scenic Sun Lounge",
                    "Plenty of natural light",
                    "Comfortable living space",
                    "Elegant design",
                    "Butler service",
                    "Excellent price-to-value ratio",
                ],
            },
        ],
    },
    {
        id: "deluxebalcony",
        title: "Deluxe Balcony Suite — Best Overall",
        badge: "Deluxe Balcony",
        icon: Award,
        desc: "For most guests, the Deluxe Balcony Suite offers the ideal combination of comfort, space, and value. It's especially well suited to couples taking 7–14-night European river cruises.",
        columns: [
            {
                label: "Why we recommend it:",
                items: [
                    "Scenic Sun Lounge",
                    "Butler service",
                    "Excellent river views",
                    "Comfortable seating area",
                    "Premium deck location",
                    "Spacious layout",
                ],
            },
        ],
    },
    {
        id: "junior",
        title: "Junior Suite",
        badge: "Junior Suite",
        icon: Gem,
        desc: "For 10–15-night itineraries, the additional living space of a Junior Suite becomes more valuable—perfect for anniversary trips, retirement celebrations, and longer voyages.",
        columns: [
            {
                label: "Features:",
                items: [
                    "Spacious living area",
                    "Larger bathroom",
                    "Scenic Sun Lounge",
                    "Butler service",
                    "Additional storage",
                    "Premium furnishings",
                ],
            },
        ],
    },
    {
        id: "royal",
        title: "Royal Suite",
        badge: "Royal Suite",
        icon: Crown,
        desc: "Travelers seeking a more exclusive experience—and extra room on longer cruises—often choose the Royal Suite, which provides a boutique hotel atmosphere while cruising Europe's rivers.",
        columns: [
            {
                label: "Highlights include:",
                items: [
                    "Separate sitting area",
                    "Luxury furnishings",
                    "Prime ship location",
                    "Enhanced butler attention",
                    "Spacious bathroom",
                    "Premium amenities",
                ],
            },
        ],
    },
    {
        id: "royalowners",
        title: "Royal Owner's Suite — Best Luxury",
        badge: "Royal Owner's",
        icon: Star,
        desc: "The Royal Owner's Suite represents the highest level of Scenic luxury—ideal for milestone celebrations and once-in-a-lifetime vacations.",
        columns: [
            {
                label: "Features:",
                items: [
                    "Largest accommodation onboard",
                    "Separate living room",
                    "Premium furnishings",
                    "Panoramic river views",
                    "Luxury bathroom",
                    "Personalized butler service",
                ],
            },
        ],
    },
];

/* ── Scenic Sun Lounge Benefits Data ───────────────────────────────── */
const sunLoungeBenefits = [
    "Floor-to-ceiling windows",
    "Comfortable seating",
    "River views in all weather",
    "More usable living space",
    "Privacy",
];

/* ── Best Cabin For Every Traveler Data ────────────────────────────── */
const ShipData = [
    {
        key: "best-overall",
        icon: <Award size={22} strokeWidth={1.6} />,
        eyebrow: "🏆 Best Overall",
        title: "Deluxe Balcony Suite",
        // image: DeluxeBalconySuite,
        imageAlt: "Scenic Deluxe Balcony Suite",
        items: [
            "Ideal combination of comfort, space, and value",
            "Scenic Sun Lounge and butler service",
            "Best for 7–14 night European cruises",
        ],
        accent: "adg-accent-gold",
    },
    {
        key: "best-value",
        icon: <Wallet size={22} strokeWidth={1.6} />,
        eyebrow: "💰 Best Value",
        title: "Balcony Suite with Sun Lounge",
        // image: BalconySuite,
        imageAlt: "Scenic Balcony Suite",
        items: [
            "Highest value without a premium upgrade",
            "Scenic Sun Lounge and natural light",
            "The 'sweet spot' of Scenic's lineup",
        ],
        accent: "adg-accent-teal",
    },
    {
        key: "best-luxury",
        icon: <Crown size={22} strokeWidth={1.6} />,
        eyebrow: "👑 Best Luxury Cabin",
        title: "Royal Owner's Suite",
        // image: RoyalOwnersSuite,
        imageAlt: "Scenic Royal Owner's Suite",
        items: [
            "Largest accommodation onboard",
            "Separate living room and panoramic views",
            "Ideal for milestone celebrations",
        ],
        accent: "adg-accent-rose",
    },
    {
        key: "best-couples",
        icon: <Users size={22} strokeWidth={1.6} />,
        eyebrow: "❤️ Best for Couples",
        title: "Deluxe Balcony Suite",
        // image: DeluxeBalconySuite,
        imageAlt: "Scenic Deluxe Balcony Suite for couples",
        items: [
            "Quiet atmosphere and scenic river views",
            "Romantic sunsets from the Sun Lounge",
            "Popular for anniversaries and honeymoon-style trips",
        ],
        accent: "adg-accent-gold",
    },
    {
        key: "best-first-time",
        icon: <Compass size={22} strokeWidth={1.6} />,
        eyebrow: "🌍 Best for First-Timers",
        title: "Balcony Suite",
        // image: BalconySuite,
        imageAlt: "Scenic Balcony Suite for first-time cruisers",
        items: [
            "Introduces the signature Sun Lounge experience",
            "No need for the premium cost of larger suites",
            "The classic Scenic experience",
        ],
        accent: "adg-accent-teal",
    },
    {
        key: "best-longer-cruises",
        icon: <Gem size={22} strokeWidth={1.6} />,
        eyebrow: "🛳️ Best for Longer Cruises",
        title: "Junior Suite or Royal Suite",
        // image: JuniorSuite,
        imageAlt: "Scenic Junior Suite for longer cruises",
        items: [
            "Best for 10–15 night itineraries",
            "Additional living space becomes more valuable",
            "Great for extended voyages",
        ],
        accent: "adg-accent-rose",
    },
];

/* ── Cabins to Avoid Data ───────────────────────────────────────────── */
const cabinsToAvoid = [
    "Lower-deck Standard Suites, if you want panoramic river views, spend significant time in your cabin, or prefer abundant natural light",
    "Cabins near reception, lounge entrances, elevators, or dining venues, if you're sensitive to noise",
    "Last-minute cabin assignments, since booking late may limit your choice of deck, location, and suite category",
];

/* ── Which Deck Is Best Data ────────────────────────────────────────── */
const deckData = [
    {
        key: "upper-deck",
        icon: <Star size={22} strokeWidth={1.6} />,
        eyebrow: "Great For",
        title: "Upper Deck",
        imageAlt: "Upper deck of a Scenic river cruise ship",
        items: ["Premium suites", "Easy access to lounges", "Excellent views"],
        accent: "adg-accent-gold",
    },
    {
        key: "middle-deck",
        icon: <Compass size={22} strokeWidth={1.6} />,
        eyebrow: "Best For",
        title: "Middle Deck",
        imageAlt: "Middle deck of a Scenic river cruise ship",
        items: ["Central location", "Convenient access throughout the ship", "Balanced experience"],
        accent: "adg-accent-teal",
    },
    {
        key: "lower-deck",
        icon: <Wallet size={22} strokeWidth={1.6} />,
        eyebrow: "Ideal If",
        title: "Lower Deck",
        imageAlt: "Lower deck of a Scenic river cruise ship",
        items: ["Budget matters most", "You're rarely in your cabin", "You prefer the most affordable option"],
        accent: "adg-accent-rose",
    },
];

/* ── Quick Cabin Comparison Data ───────────────────────────────────── */
const cabinComparison = [
    { key: "standard", cabin: "Standard Suite", bestFor: "Budget-conscious luxury", rating: 4 },
    { key: "balcony", cabin: "Balcony Suite", bestFor: "Most travelers", rating: 5 },
    { key: "deluxebalcony", cabin: "Deluxe Balcony Suite", bestFor: "Couples", rating: 5 },
    { key: "junior", cabin: "Junior Suite", bestFor: "Longer cruises", rating: 5 },
    { key: "royal", cabin: "Royal Suite", bestFor: "Luxury vacations", rating: 5 },
    { key: "royalowners", cabin: "Royal Owner's Suite", bestFor: "Ultimate luxury", rating: 5 },
];

/* ── Scenic vs Other Luxury River Cruise Cabins Data ──────────────── */
const comparisonData = [
    { key: "scenic", line: "Scenic", strength: "Sun Lounge & Butler Service" },
    { key: "riverside", line: "Riverside", strength: "Residential-style luxury suites" },
    { key: "viking", line: "Viking", strength: "Scandinavian simplicity" },
    { key: "ama", line: "AmaWaterways", strength: "Twin-balcony cabins" },
    { key: "uniworld", line: "Uniworld", strength: "Individually designed suites" },
    { key: "tauck", line: "Tauck", strength: "Elegant all-inclusive accommodations" },
];

/* ── Common Cabin Booking Mistakes Data ───────────────────────────── */
const commonMistakes = [
    "Choosing the cheapest cabin without considering how much time they'll spend onboard",
    "Booking too late and missing premium cabin availability",
    "Upgrading beyond what they actually need",
    "Ignoring deck location",
    "Not comparing promotions between suite categories",
];

/* ── Main Component ──────────────────────────────────────────────── */
const BestScenicRiverCruiseCabins = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeSuite, setActiveSuite] = useState("standard");

    const currentSuite =
        suiteFactors.find((f) => f.id === activeSuite) || suiteFactors[0];
    const ActiveSuiteIcon = currentSuite.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Best Scenic River Cruise Cabins</title>
                <meta name="title" content="Best Scenic River Cruise Cabins | Which Cabin Should You Book?" />
                <meta
                    name="description"
                    content="Discover the best Scenic River Cruise cabins for couples, first-time cruisers, luxury travelers, and milestone trips. Learn which cabins offer the best value, which to avoid, and how to choose the perfect suite."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Best Scenic River Cruise Cabins <br /> (and Cabins to Avoid)</h1>

                    <p>
                        Choosing the right cabin is one of the most
                        important decisions you'll make when booking a
                        Scenic River Cruise. Unlike large ocean ships with
                        thousands of cabins, Scenic's intimate Space-Ships
                        offer a smaller selection of luxury suites—but your
                        choice can still have a significant impact on your
                        comfort, views, and overall experience.
                    </p>

                    {readMore && (
                        <p>
                            The good news is that there are no "bad" cabins
                            on Scenic River Cruises. Every suite includes
                            personalized butler service, elegant
                            furnishings, and premium amenities. However,
                            some cabins provide better value, more privacy,
                            quieter locations, or larger living spaces
                            depending on your travel style. This guide
                            explains the best Scenic cabins, highlights
                            situations where certain cabin locations may
                            not be ideal, and helps you choose the perfect
                            suite for your next luxury river cruise.
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

            {/* ── BEST SCENIC RIVER CRUISE CABINS: THE QUICK ANSWER ─────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Best Scenic River Cruise Cabins: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're looking for the short answer:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Best Overall Cabin: Deluxe Balcony Suite",
                                "Best Value: Balcony Suite with Scenic Sun Lounge",
                                "Best Luxury Cabin: Royal Owner's Suite",
                                "Best for Couples: Deluxe Balcony Suite",
                                "Best for First-Time River Cruisers: Balcony Suite",
                                "Cabins to Avoid: There are no truly bad cabins, but lower-deck Standard Suites may have smaller windows and less natural light than Balcony Suites.",
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
                            Our Recommendation: For most travelers, the
                            Balcony Suite offers the best balance of
                            luxury, comfort, views, and price.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── QUICK CABIN COMPARISON ────────────────────────────────────── */}
            <section className="adg-section" id="quick-cabin-comparison" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Quick Cabin Comparison</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            A side-by-side look at every Scenic suite
                            category before you dive into the details.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cabin Type</th>
                                    <th>Best For</th>
                                    <th>Our Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cabinComparison.map((row) => (
                                    <tr key={row.key}>
                                        <td><strong>{row.cabin}</strong></td>
                                        <td>{row.bestFor}</td>
                                        <td>{"⭐".repeat(row.rating)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES A GREAT SCENIC CABIN? ─────────────────────────── */}
            <section className="rlc-lc-worth-section" id="what-makes-a-great-cabin">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">What Makes a Great Scenic Cabin?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                The best cabin isn't always the most
                                expensive one. When comparing cabins,
                                consider:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {cabinFactorItems.map((item, idx) => (
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
                                    For many travelers, paying a little more
                                    for a Balcony Suite provides a
                                    significantly better onboard experience.
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
                                    <span>Your Private Retreat • Onboard</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Cabin Fits You Best?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic's suite categories to plan the ideal cabin for your cruise.
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

            {/* ── SCENIC CABIN CATEGORIES EXPLAINED ────────────────────────── */}
            <section className="dac-reasons-section" id="cabin-categories-explained" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="dac-reasons-container">
                    <div className="dac-reasons-header">
                        <span className="dac-reasons-eyebrow">
                            Scenic Cabin Categories Explained
                        </span>
                        <h2 className="dac-reasons-title">
                            Scenic Cabin Categories Explained
                        </h2>
                        <div className="dac-reasons-accent"></div>
                        <p className="dac-reasons-lead">
                            Every suite includes personalized butler
                            service, elegant furnishings, and premium
                            amenities—here's how each category differs.
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

   



            {/* ── ARE THERE ANY SCENIC CABINS TO AVOID? ─────────────────────────── */}
            <section className="scenic-avoid-section" id="cabins-to-avoid">
                <div className="scenic-avoid-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Are There Any Scenic Cabins <br /> to Avoid?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            This is one of the most common questions prospective guests ask.
                        </p>
                    </div>

                    <div className="scenic-avoid-intro-box">
                        <p className="scenic-avoid-intro-text">
                            <strong>The honest answer:</strong> Scenic doesn't have "bad" cabins.
                            However, some travelers may wish to avoid certain options based on their preferences.
                        </p>
                    </div>

                    <div className="scenic-avoid-grid">
                        {/* Group 1: Lower-Deck Standard Suites */}
                        <div className="scenic-avoid-card">
                            <div className="scenic-avoid-card-header">
                                <div className="scenic-avoid-icon-wrap">
                                    <X size={20} className="scenic-avoid-card-icon" />
                                </div>
                                <h3 className="scenic-avoid-card-title">Lower-Deck Standard Suites</h3>
                            </div>
                            <div className="scenic-avoid-card-body">
                                <p className="scenic-avoid-card-subtitle">May not be ideal if you:</p>
                                <ul className="scenic-avoid-list">
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Want panoramic river views</span>
                                    </li>
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Spend significant time in your cabin</span>
                                    </li>
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Prefer abundant natural light</span>
                                    </li>
                                </ul>
                                <p className="scenic-avoid-card-conclusion">
                                    They're still beautifully appointed but offer a different viewing experience than Balcony Suites.
                                </p>
                            </div>
                        </div>

                        {/* Group 2: Cabins Near Public Areas */}
                        <div className="scenic-avoid-card">
                            <div className="scenic-avoid-card-header">
                                <div className="scenic-avoid-icon-wrap">
                                    <X size={20} className="scenic-avoid-card-icon" />
                                </div>
                                <h3 className="scenic-avoid-card-title">Cabins Near Public Areas</h3>
                            </div>
                            <div className="scenic-avoid-card-body">
                                <p className="scenic-avoid-card-subtitle">If you're sensitive to noise, you may prefer cabins farther from:</p>
                                <ul className="scenic-avoid-list">
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Reception</span>
                                    </li>
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Lounge entrances</span>
                                    </li>
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Elevators</span>
                                    </li>
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Dining venues</span>
                                    </li>
                                </ul>
                                <p className="scenic-avoid-card-conclusion">
                                    While Scenic ships are generally quiet, choosing a mid-ship location can enhance comfort.
                                </p>
                            </div>
                        </div>

                        {/* Group 3: Last-Minute Cabin Assignments */}
                        <div className="scenic-avoid-card">
                            <div className="scenic-avoid-card-header">
                                <div className="scenic-avoid-icon-wrap">
                                    <X size={20} className="scenic-avoid-card-icon" />
                                </div>
                                <h3 className="scenic-avoid-card-title">Last-Minute Cabin Assignments</h3>
                            </div>
                            <div className="scenic-avoid-card-body">
                                <p className="scenic-avoid-card-subtitle">Booking late may limit your choice of:</p>
                                <ul className="scenic-avoid-list">
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Deck</span>
                                    </li>
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Location</span>
                                    </li>
                                    <li>
                                        <X size={14} className="Asc-icon-red" />
                                        <span>Suite category</span>
                                    </li>
                                </ul>
                                <p className="scenic-avoid-card-conclusion">
                                    Booking early typically provides the best selection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH DECK IS BEST? ───────────────────────────────────────── */}
            <section
                className="adg-section"
                id="which-deck-is-best"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Which Deck Is Best?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Many travelers ask, "What is the best deck on
                            Scenic?" Rather than one "best" deck, the ideal
                            location depends on your preferences.
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {deckData.map((item) => (
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
                            <span className="scenic-inline-cta-eyebrow-light">Exclusive Promotions</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Choose Your Suite?</h3>
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

            {/* ── SCENIC SUN LOUNGE: WORTH IT? ─────────────────────────────── */}
            <section className="scenic-expensive-comparison-section" id="sun-lounge-worth-it">
                <div className="scenic-expensive-comparison-container">
                    <div className="scenic-expensive-card-wrapper">
                        <div className="scenic-expensive-card-content">
                            <h2 className="scenic-expensive-card-title">Scenic Sun Lounge: Worth It?</h2>
                            <div className="scenic-expensive-card-accent"></div>

                            <p className="scenic-expensive-card-intro">
                                Absolutely.
                            </p>

                            <p className="scenic-expensive-card-desc">
                                The Scenic Sun Lounge is one of the biggest
                                reasons travelers upgrade from a Standard
                                Suite. Many repeat Scenic guests
                                specifically request Balcony Suites because
                                of this feature.
                            </p>
                        </div>

                        <div className="scenic-expensive-card-sidebar">
                            <h4 style={{ marginBottom: "12px" }}>Benefits Include</h4>
                            <div className="scenic-expensive-list">
                                {sunLoungeBenefits.map((item, i) => (
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
                            alt="Scenic Sun Lounge with floor-to-ceiling windows"
                            className="scenic-expensive-image"
                        />
                        <div className="scenic-expensive-image-overlay">
                            <span className="scenic-expensive-image-label">Scenic Sun Lounge</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC VS OTHER LUXURY RIVER CRUISE CABINS ───────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="cabins-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs. Other Luxury River Cruise Cabins</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Each cruise line brings a different cabin
                            strength to the table—here's how Scenic compares.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Cabin Strength</th>
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

            {/* ── COMMON CABIN BOOKING MISTAKES ────────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Cabin <br /> Booking Mistakes</h2>
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

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Cabin Guidance</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Choosing the Right Cabin Is About More Than a Room Number
                            </h3>
                            <p className="Avr-planning-left-body">
                                Working with a luxury travel advisor can
                                help you select the right cabin for your
                                travel style and budget. An advisor can
                                recommend the best cabin category, compare
                                available promotions, explain deck
                                locations, match your cabin to your
                                itinerary, coordinate flights and hotels,
                                and compare Scenic with Riverside, Viking,
                                AmaWaterways, and Uniworld.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional guidance helps ensure you
                                    receive the best value for your
                                    investment.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Award size={18} />, label: "Recommend the best cabin category" },
                                    { icon: <BadgePercent size={18} />, label: "Compare available promotions" },
                                    { icon: <MapPin size={18} />, label: "Explain deck locations" },
                                    { icon: <Compass size={18} />, label: "Match your cabin to your itinerary" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and hotels" },
                                    { icon: <Gem size={18} />, label: "Compare Scenic with Riverside, Viking, AmaWaterways, and Uniworld" },
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
                            Everything travelers need to know before
                            choosing a Scenic River Cruise cabin.
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
                                    One of the Strongest <br /> Cabin Offerings Afloat
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic has one of the strongest
                                        cabin offerings in luxury river
                                        cruising. While every suite delivers
                                        excellent service and premium
                                        amenities, the Balcony Suite and
                                        Deluxe Balcony Suite consistently
                                        provide the best overall value for
                                        most travelers.

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
                                                If you're celebrating a
                                                milestone, traveling on a
                                                longer itinerary, or simply
                                                want the most luxurious
                                                experience available,
                                                upgrading to a Junior Suite
                                                or Royal Owner's Suite may
                                                be worthwhile.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Ultimately, the best cabin
                                                is the one that matches your
                                                travel style, budget, and
                                                how you plan to enjoy your
                                                time onboard. At Trips
                                                &amp; Ships Luxury Travel,
                                                we'll help you compare
                                                cabin categories to find the
                                                best option for your travel
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
                                            "Compare cabin categories and suites",
                                            "Recommend the best suite for your budget",
                                            "Explain promotions and limited-time offers",
                                            "Match your cabin to your itinerary",
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

export default BestScenicRiverCruiseCabins;