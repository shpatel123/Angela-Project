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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#webpage",
            name: "Scenic River Cruise Cabin Categories Explained (2026) | Which Suite Should You Book?",
            url: "https://www.tripsandships.com/scenic-river-cruises/cabin-categories",
            description:
                "Compare every Scenic River Cruise cabin category, including Standard Suites, Balcony Suites, Junior Suites, Royal Suites, and Royal Owner's Suites. Find the best cabin for your travel style and budget.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#article",
            headline: "Scenic River Cruise Cabin Categories | Complete Suite Guide",
            description:
                "A complete guide to every Scenic River Cruise cabin category, covering suite features, the Scenic Sun Lounge, pricing tiers, and how to choose the right suite for your travel style.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#breadcrumb",
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
                    name: "Scenic River Cruise Cabin Categories",
                    item: "https://www.tripsandships.com/scenic-river-cruises/cabin-categories",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#itemlist",
            name: "Scenic River Cruise Cabin Categories Guide — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Scenic Cabin Categories: Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Quick Cabin Comparison" },
                { "@type": "ListItem", position: 3, name: "Why Your Cabin Choice Matters" },
                { "@type": "ListItem", position: 4, name: "Scenic Cabin Categories Explained" },
                { "@type": "ListItem", position: 5, name: "What Is Scenic's Sun Lounge?" },
                { "@type": "ListItem", position: 6, name: "Which Cabin Offers the Best Value?" },
                { "@type": "ListItem", position: 7, name: "Which Cabin Should You Choose?" },
                { "@type": "ListItem", position: 8, name: "Scenic vs. Other Luxury River Cruise Cabins" },
                { "@type": "ListItem", position: 9, name: "Common Cabin Booking Mistakes" },
                { "@type": "ListItem", position: 10, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 11, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Scenic River Cruise cabin is the best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For most travelers, the Balcony Suite offers the best combination of luxury, river views, and value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the Scenic Sun Lounge?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Scenic Sun Lounge is an enclosed balcony with floor-to-ceiling windows that lower electronically, allowing guests to enjoy fresh air and panoramic views in almost any weather.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does every Scenic cabin include butler service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Every Scenic suite includes personalized butler service, regardless of cabin category.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between a Balcony Suite and a Deluxe Balcony Suite?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Deluxe Balcony Suite generally offers additional space, upgraded locations, and enhanced comfort while maintaining the same core amenities as the Balcony Suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is it worth upgrading to a Junior Suite?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "If you're taking a longer cruise or celebrating a special occasion, many travelers find the additional space and comfort worthwhile.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is included in the Royal Owner's Suite?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Royal Owner's Suite typically includes the largest living space onboard, premium furnishings, panoramic views, personalized butler service, and luxury amenities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic cabins larger than other river cruise lines?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Suite sizes vary by ship and category, but Scenic is known for spacious accommodations, particularly in its premium suites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic cabin is best for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Balcony Suite and Deluxe Balcony Suite are among the most popular choices for couples seeking comfort, privacy, and scenic views.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I choose my cabin when booking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Cabin selection depends on availability, so booking early gives you the widest choice of locations and suite categories.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which deck is the best on a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There isn't a universally \"best\" deck. The ideal location depends on your preferred suite category, itinerary, and personal preferences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How early should I book the best Scenic cabins?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For popular itineraries and premium suites, booking 9 to 18 months in advance typically provides the best selection.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book my Scenic cabin through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can recommend the best cabin category, explain promotions, compare itineraries, and help ensure you choose the suite that offers the best overall value.",
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
            q: "Which Scenic River Cruise cabin is the best?",
            a: "For most travelers, the Balcony Suite offers the best combination of luxury, river views, and value.",
        },
        {
            q: "What is the Scenic Sun Lounge?",
            a: "The Scenic Sun Lounge is an enclosed balcony with floor-to-ceiling windows that lower electronically, allowing guests to enjoy fresh air and panoramic views in almost any weather.",
        },
        {
            q: "Does every Scenic cabin include butler service?",
            a: "Yes. Every Scenic suite includes personalized butler service, regardless of cabin category.",
        },
        {
            q: "What is the difference between a Balcony Suite and a Deluxe Balcony Suite?",
            a: "The Deluxe Balcony Suite generally offers additional space, upgraded locations, and enhanced comfort while maintaining the same core amenities as the Balcony Suite.",
        },
        {
            q: "Is it worth upgrading to a Junior Suite?",
            a: "If you're taking a longer cruise or celebrating a special occasion, many travelers find the additional space and comfort worthwhile.",
        },
        {
            q: "What is included in the Royal Owner's Suite?",
            a: "The Royal Owner's Suite typically includes the largest living space onboard, premium furnishings, panoramic views, personalized butler service, and luxury amenities.",
        },
        {
            q: "Are Scenic cabins larger than other river cruise lines?",
            a: "Suite sizes vary by ship and category, but Scenic is known for spacious accommodations, particularly in its premium suites.",
        },
        {
            q: "Which Scenic cabin is best for couples?",
            a: "The Balcony Suite and Deluxe Balcony Suite are among the most popular choices for couples seeking comfort, privacy, and scenic views.",
        },
        {
            q: "Can I choose my cabin when booking?",
            a: "Yes. Cabin selection depends on availability, so booking early gives you the widest choice of locations and suite categories.",
        },
        {
            q: "Which deck is the best on a Scenic River Cruise?",
            a: "There isn't a universally \"best\" deck. The ideal location depends on your preferred suite category, itinerary, and personal preferences.",
        },
        {
            q: "How early should I book the best Scenic cabins?",
            a: "For popular itineraries and premium suites, booking 9 to 18 months in advance typically provides the best selection.",
        },
        {
            q: "Should I book my Scenic cabin through a travel advisor?",
            a: "Yes. A luxury travel advisor can recommend the best cabin category, explain promotions, compare itineraries, and help ensure you choose the suite that offers the best overall value.",
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

/* ── Why Your Cabin Choice Matters Data ────────────────────────────── */
const cabinRoleItems = [
    "Your private retreat",
    "Your observation lounge",
    "Your morning coffee spot",
    "Your quiet space between excursions",
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
        desc: "The most popular choice among Scenic guests—and for good reason. This category introduces Scenic's signature Sun Lounge, replacing a traditional balcony with a private enclosed space featuring floor-to-ceiling windows.",
        columns: [
            {
                label: "Why travelers love it:",
                items: [
                    "River views in any weather",
                    "Comfortable seating area",
                    "More usable living space",
                    "Natural light",
                    "Privacy",
                    "Butler service",
                ],
            },
        ],
    },
    {
        id: "deluxebalcony",
        title: "Deluxe Balcony Suite",
        badge: "Deluxe Balcony",
        icon: Award,
        desc: "The Deluxe Balcony Suite builds upon the Balcony Suite with a bit more room and a better location—ideal for couples taking longer cruises or celebrating special occasions.",
        columns: [
            {
                label: "Features:",
                items: [
                    "Slightly more living space",
                    "Premium deck locations",
                    "Enhanced comfort",
                    "Additional storage",
                    "Larger seating area",
                ],
            },
        ],
    },
    {
        id: "junior",
        title: "Junior Suite",
        badge: "Junior Suite",
        icon: Gem,
        desc: "If you appreciate extra room, the Junior Suite is worth considering—perfect for anniversary trips, retirement celebrations, and 10+ night itineraries.",
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
        desc: "Travelers seeking a more exclusive experience often choose the Royal Suite, which provides a boutique hotel atmosphere while cruising Europe's rivers.",
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
        title: "Royal Owner's Suite",
        badge: "Royal Owner's",
        icon: Star,
        desc: "The Royal Owner's Suite represents the highest level of Scenic luxury—ideal for travelers who want the very best Scenic has to offer.",
        columns: [
            {
                label: "Features:",
                items: [
                    "Largest suite onboard",
                    "Separate bedroom",
                    "Elegant living room",
                    "Panoramic river views",
                    "Premium location",
                    "Personalized butler service",
                    "Luxury bathroom",
                    "Complimentary minibar",
                ],
            },
        ],
    },
];

/* ── Sun Lounge Benefits Data ─────────────────────────────────────── */
const sunLoungeBenefits = [
    "Comfortable year-round",
    "Better privacy",
    "Protection from rain and wind",
    "More interior living space",
    "Uninterrupted river views",
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
            "Budget is your top priority",
            "You'll spend little time in your cabin",
            "You're taking your first river cruise",
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
            "You love scenic views",
            "You want the classic Scenic experience",
        ],
        accent: "adg-accent-teal",
    },
    {
        key: "deluxe-balcony-suite",
        icon: <Sparkles size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Deluxe Balcony Suite",
        // image: DeluxeBalconySuite,
        imageAlt: "Scenic Deluxe Balcony Suite",
        items: [
            "You appreciate additional comfort",
            "You're sailing for more than a week",
            "You're celebrating a special occasion",
        ],
        accent: "adg-accent-gold",
    },
    {
        key: "junior-suite",
        icon: <Gem size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Junior Suite",
        // image: JuniorSuite,
        imageAlt: "Scenic Junior Suite",
        items: [
            "You prefer more living space",
            "You enjoy luxury accommodations",
            "You're planning a milestone vacation",
        ],
        accent: "adg-accent-teal",
    },
    {
        key: "royal-suite",
        icon: <Crown size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Royal Suite",
        // image: RoyalSuite,
        imageAlt: "Scenic Royal Suite",
        items: [
            "Luxury is your highest priority",
            "You enjoy premium service",
            "You're celebrating an anniversary or retirement",
        ],
        accent: "adg-accent-rose",
    },
    {
        key: "royal-owners-suite",
        icon: <Star size={22} strokeWidth={1.6} />,
        eyebrow: "Choose If",
        title: "Royal Owner's Suite",
        // image: RoyalOwnersSuite,
        imageAlt: "Scenic Royal Owner's Suite",
        items: [
            "You want the most luxurious accommodation onboard",
            "Space matters",
            "You're planning a once-in-a-lifetime vacation",
        ],
        accent: "adg-accent-gold",
    },
];
/* ── Scenic vs Other Luxury River Cruise Cabins Data ──────────────── */
const comparisonData = [
    { key: "scenic", line: "Scenic", strength: "Sun Lounge & Butler Service" },
    { key: "riverside", line: "Riverside", strength: "Spacious residential-style suites" },
    { key: "viking", line: "Viking", strength: "Scandinavian design" },
    { key: "ama", line: "AmaWaterways", strength: "Twin-balcony cabins" },
    { key: "uniworld", line: "Uniworld", strength: "Individually designed luxury suites" },
    { key: "tauck", line: "Tauck", strength: "Elegant, all-inclusive accommodations" },
];

/* ── Common Cabin Booking Mistakes Data ───────────────────────────── */
const commonMistakes = [
    "Booking based only on price",
    "Waiting too long to reserve premium cabins",
    "Ignoring deck location",
    "Choosing a larger suite when a Balcony Suite meets their needs",
    "Not asking about promotions",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruiseCabinCategories = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeSuite, setActiveSuite] = useState("standard");

    const currentSuite =
        suiteFactors.find((f) => f.id === activeSuite) || suiteFactors[0];
    const ActiveSuiteIcon = currentSuite.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruise Cabin Categories Explained | Which Suite Should You Book?</title>
                <meta name="title" content="Scenic River Cruise Cabin Categories | Complete Suite Guide" />
                <meta
                    name="description"
                    content="Compare every Scenic River Cruise cabin category, including Standard Suites, Balcony Suites, Junior Suites, Royal Suites, and Royal Owner's Suites. Find the best cabin for your travel style and budget."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruise <br /> Cabin Categories Explained</h1>

                    <p>
                        One of the biggest decisions you'll make when
                        booking a Scenic River Cruise is choosing the right
                        cabin. While every Scenic suite offers luxury
                        accommodations and personalized service, each
                        category provides different levels of space, views,
                        amenities, and value.
                    </p>

                    {readMore && (
                        <p>
                            The good news? Unlike many ocean cruise lines,
                            every Scenic suite includes butler service,
                            premium furnishings, and elegant design. The key
                            difference isn't whether you'll enjoy
                            luxury—it's deciding how much space and which
                            features matter most to your travel style.
                            Whether you're planning your first European
                            river cruise or celebrating a milestone
                            vacation, this guide explains every Scenic
                            cabin category, compares the options, and helps
                            you confidently choose the best suite.
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
                        <h2 className="rlc-qa-title">Scenic Cabin Categories: Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Best Overall Cabin: Balcony Suite with Scenic Sun Lounge",
                                "Best Value: Deluxe Balcony Suite",
                                "Best Luxury Experience: Royal Owner's Suite",
                                "Best for First-Time Cruisers: Standard or Balcony Suite",
                                "Best for Special Occasions: Junior Suite or Royal Suite",
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
                            Most travelers find the Balcony Suite offers the
                            perfect balance of comfort, views, luxury, and
                            price.
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
                                    <th>Cabin Category</th>
                                    <th>River View</th>
                                    <th>Sun Lounge</th>
                                    <th>Butler</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Standard Suite</strong></td>
                                    <td>Window</td>
                                    <td><X size={18} className="Asc-icon-red" /></td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td>Value-conscious luxury travelers</td>
                                </tr>
                                <tr>
                                    <td><strong>Balcony Suite</strong></td>
                                    <td>Floor-to-ceiling</td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td>Most travelers</td>
                                </tr>
                                <tr>
                                    <td><strong>Deluxe Balcony Suite</strong></td>
                                    <td>Larger balcony area</td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td>Couples</td>
                                </tr>
                                <tr>
                                    <td><strong>Junior Suite</strong></td>
                                    <td>Spacious</td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td>Longer cruises</td>
                                </tr>
                                <tr>
                                    <td><strong>Royal Suite</strong></td>
                                    <td>Premium</td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td>Luxury travelers</td>
                                </tr>
                                <tr>
                                    <td><strong>Royal Owner's Suite</strong></td>
                                    <td>Panoramic</td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td><Check size={18} className="Asc-icon-green" /></td>
                                    <td>Ultimate luxury</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY YOUR CABIN CHOICE MATTERS ────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="why-your-cabin-choice-matters">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Why Your Cabin Choice Matters</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Unlike ocean cruises where you'll spend much
                                of your time exploring a large ship, river
                                cruises offer a more intimate experience.
                                Your suite becomes:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {cabinRoleItems.map((item, idx) => (
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
                                    Choosing the right cabin can significantly
                                    enhance your overall cruise experience.
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
                                Choosing the Right Cabin Is About More Than Square Footage
                            </h3>
                            <p className="Avr-planning-left-body">
                                Working with a luxury travel advisor can
                                help you select the right cabin for your
                                travel style and budget. An advisor can
                                compare cabin categories, recommend the
                                best deck, explain current promotions,
                                match your cabin to your itinerary,
                                coordinate flights and hotels, and compare
                                Scenic with Viking, Riverside,
                                AmaWaterways, and Uniworld.
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
                                    { icon: <Home size={18} />, label: "Compare cabin categories" },
                                    { icon: <MapPin size={18} />, label: "Recommend the best deck" },
                                    { icon: <BadgePercent size={18} />, label: "Explain current promotions" },
                                    { icon: <Compass size={18} />, label: "Match your cabin to your itinerary" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and hotels" },
                                    { icon: <Gem size={18} />, label: "Compare Scenic with Viking, Riverside, AmaWaterways, and Uniworld" },
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
                            cabin categories before booking.
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
                                        Scenic offers one of the strongest
                                        suite selections in luxury river
                                        cruising, combining elegant
                                        accommodations with personalized
                                        butler service across every
                                        category. While every suite
                                        delivers a premium experience, the
                                        Balcony Suite with Scenic Sun
                                        Lounge stands out as the best
                                        choice for most travelers thanks to
                                        its balance of comfort, views, and
                                        value.

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
                                                milestone or simply want
                                                more space, the Junior
                                                Suite, Royal Suite, and
                                                Royal Owner's Suite provide
                                                increasingly luxurious
                                                options.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                The right choice ultimately
                                                depends on your travel
                                                style, budget, and how much
                                                time you plan to spend
                                                relaxing in your suite. At
                                                Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                compare suite categories to
                                                find the best option for
                                                your travel style and
                                                budget.
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

export default ScenicRiverCruiseCabinCategories;