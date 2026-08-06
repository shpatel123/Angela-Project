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
    Calendar,
    Landmark,
    X,
    FileText,
    Wallet,
    BadgePercent,
    Leaf,
    Wine,
    Utensils,
    CheckCircle,
    Heart,
    Cake,
    GraduationCap,
    PartyPopper,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic family / multigenerational travel
   photography once available. Paths assume a new
   /assets/ScenicFamilyTravel folder. */
// import HeroImage from "../../assets/ScenicFamilyTravel/scenic-family-hero.jpg";
// import FamilyDiningImage from "../../assets/ScenicFamilyTravel/scenic-family-dining.jpg";
// import SuiteImage from "../../assets/ScenicFamilyTravel/scenic-family-suites.jpg";
// import ExcursionImage from "../../assets/ScenicFamilyTravel/scenic-family-excursion.jpg";

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
            "@id": "https://tripsandships.com/scenic-river-cruises/family-multigenerational/#webpage",
            name: "Scenic River Cruises for Families & Multigenerational Groups (2026)",
            url: "https://tripsandships.com/scenic-river-cruises/family-multigenerational",
            description:
                "Planning a Scenic River Cruise with family? Discover whether Scenic is right for multigenerational travel, including grandparents, adult children, and family celebrations.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/family-multigenerational/#article",
            headline: "Scenic River Cruises for Families & Multigenerational Groups",
            description:
                "A complete guide to family travel on Scenic River Cruises, including best multigenerational groups, itineraries, dining, suites, celebrations, and tips for booking the best Scenic family cruise.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/family-multigenerational/#breadcrumb",
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
                    name: "Scenic River Cruises for Families & Multigenerational Groups",
                    item: "https://tripsandships.com/scenic-river-cruises/family-multigenerational",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/family-multigenerational/#itemlist",
            name: "Scenic River Cruises for Families & Multigenerational Groups — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Is Scenic a Good Choice for Families?" },
                { "@type": "ListItem", position: 3, name: "Why Families Love River Cruising" },
                { "@type": "ListItem", position: 4, name: "Best Multigenerational Family Groups" },
                { "@type": "ListItem", position: 5, name: "Best Scenic Itineraries for Families" },
                { "@type": "ListItem", position: 6, name: "Activities Everyone Can Enjoy" },
                { "@type": "ListItem", position: 7, name: "Dining for Families" },
                { "@type": "ListItem", position: 8, name: "Suite Options for Families" },
                { "@type": "ListItem", position: 9, name: "Family Celebrations Onboard" },
                { "@type": "ListItem", position: 10, name: "Is Scenic Good for Children?" },
                { "@type": "ListItem", position: 11, name: "Common Family Planning Mistakes" },
                { "@type": "ListItem", position: 12, name: "Scenic vs Ocean Cruises for Families" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/family-multigenerational/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic is an excellent choice for families who enjoy cultural experiences, luxury travel, and exploring Europe together.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic suitable for young children?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is generally better suited to teenagers and adults than toddlers or young children because it focuses on sightseeing and cultural experiences rather than children's entertainment.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best Scenic itinerary for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhine and Danube itineraries are popular choices thanks to their castles, historic cities, scenic landscapes, and family-friendly sightseeing opportunities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can families book adjoining cabins?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While Scenic does not offer many connecting cabins, nearby suites and coordinated cabin locations can often be arranged.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes Scenic Freechoice excursions and Scenic Enrich experiences for all guests.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is dining included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Breakfast, lunch, dinner, premium beverages, and many onboard dining experiences are included.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can Scenic accommodate special dietary needs?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Vegetarian, vegan, gluten-free, and allergy-related requests can usually be accommodated with advance notice.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic good for grandparents traveling with grandchildren?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, particularly with older grandchildren and teenagers who appreciate history, culture, and sightseeing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic suitable for family reunions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Scenic is an excellent option for family reunions, anniversary celebrations, retirement trips, and milestone birthdays.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should families arrive before embarkation day?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Arriving at least one day early helps reduce stress and gives everyone time to recover from international travel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a travel advisor coordinate a family group booking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can reserve nearby cabins, coordinate flights, transfers, hotels, and help organize your entire family vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic better than an ocean cruise for multigenerational travel?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For families seeking a quieter, destination-focused vacation with personalized service and shared cultural experiences, Scenic is often an excellent choice. Families looking for water parks, children's clubs, and large-scale entertainment may prefer an ocean cruise instead.",
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
            q: "Is Scenic good for families?",
            a: "Yes. Scenic is an excellent choice for families who enjoy cultural experiences, luxury travel, and exploring Europe together.",
        },
        {
            q: "Is Scenic suitable for young children?",
            a: "Scenic is generally better suited to teenagers and adults than toddlers or young children because it focuses on sightseeing and cultural experiences rather than children's entertainment.",
        },
        {
            q: "What is the best Scenic itinerary for families?",
            a: "The Rhine and Danube itineraries are popular choices thanks to their castles, historic cities, scenic landscapes, and family-friendly sightseeing opportunities.",
        },
        {
            q: "Can families book adjoining cabins?",
            a: "While Scenic does not offer many connecting cabins, nearby suites and coordinated cabin locations can often be arranged.",
        },
        {
            q: "Are excursions included?",
            a: "Yes. Scenic includes Scenic Freechoice excursions and Scenic Enrich experiences for all guests.",
        },
        {
            q: "Is dining included?",
            a: "Yes. Breakfast, lunch, dinner, premium beverages, and many onboard dining experiences are included.",
        },
        {
            q: "Can Scenic accommodate special dietary needs?",
            a: "Yes. Vegetarian, vegan, gluten-free, and allergy-related requests can usually be accommodated with advance notice.",
        },
        {
            q: "Is Scenic good for grandparents traveling with grandchildren?",
            a: "Yes, particularly with older grandchildren and teenagers who appreciate history, culture, and sightseeing.",
        },
        {
            q: "Is Scenic suitable for family reunions?",
            a: "Absolutely. Scenic is an excellent option for family reunions, anniversary celebrations, retirement trips, and milestone birthdays.",
        },
        {
            q: "Should families arrive before embarkation day?",
            a: "Yes. Arriving at least one day early helps reduce stress and gives everyone time to recover from international travel.",
        },
        {
            q: "Can a travel advisor coordinate a family group booking?",
            a: "Yes. A luxury travel advisor can reserve nearby cabins, coordinate flights, transfers, hotels, and help organize your entire family vacation.",
        },
        {
            q: "Is Scenic better than an ocean cruise for multigenerational travel?",
            a: "For families seeking a quieter, destination-focused vacation with personalized service and shared cultural experiences, Scenic is often an excellent choice. Families looking for water parks, children's clubs, and large-scale entertainment may prefer an ocean cruise instead.",
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
    "Grandparents traveling with adult children",
    "Family reunions",
    "Anniversary celebrations",
    "Retirement trips",
    "Milestone birthdays",
    "Empty nesters traveling together",
];

/* ── Family Travel at a Glance Data ──────────────────────────────────── */
const glanceData = [
    { key: "suites", occasion: "Suites", attire: "Spacious luxury suites, ideal for coordinating nearby cabins" },
    { key: "excursions", occasion: "Excursions", attire: "Included Scenic Freechoice and Scenic Enrich experiences for every guest" },
    { key: "dining", occasion: "Dining", attire: "Gourmet, flexible dining the whole family can enjoy together" },
    { key: "service", occasion: "Service", attire: "Personalized butler service for every suite" },
];

/* ── Best Scenic Itineraries for Families Data ─────────────────────── */
const familyItineraries = [
    {
        id: "rhine-river",
        title: "Rhine River — Best Overall",
        badge: "Rhine River",
        icon: Compass,
        desc: "A perfect introduction to Europe, with castles, medieval villages, and river scenery through Switzerland, Germany, France, and the Netherlands.",
        columns: [
            {
                label: "Highlights include:",
                items: [
                    "Castles and medieval villages",
                    "River scenery",
                    "Switzerland, Germany, France & the Netherlands",
                    "Easy-paced sightseeing for all ages"
                ],
            },
        ],
    },
    {
        id: "danube-river",
        title: "Danube River — Excellent for Culture",
        badge: "Danube River",
        icon: Ship,
        desc: "Ideal for families interested in European culture, with history, music, and architecture across Budapest, Vienna, and Bratislava.",
        columns: [
            {
                label: "Excellent for:",
                items: [
                    "History",
                    "Music",
                    "Architecture",
                    "Budapest, Vienna & Bratislava"
                ],
            },
        ],
    },
    {
        id: "rhone-river",
        title: "Rhône River — Perfect for Food Lovers",
        badge: "Rhône River",
        icon: Wine,
        desc: "Perfect for families of food lovers, with the flavors of Provence, wine regions, and charming French villages.",
        columns: [
            {
                label: "Perfect for:",
                items: [
                    "Food lovers",
                    "Provence",
                    "Wine regions",
                    "French villages"
                ],
            },
        ],
    },
    {
        id: "douro-river",
        title: "Douro River — Best for a Relaxed Pace",
        badge: "Douro River",
        icon: Leaf,
        desc: "Best for families seeking a relaxed pace amid Portugal's vineyards and scenic landscapes.",
        columns: [
            {
                label: "Best for:",
                items: [
                    "Relaxed pace",
                    "Portugal",
                    "Vineyards",
                    "Scenic landscapes"
                ],
            },
        ],
    },
];

/* ── Common Family Planning Mistakes Data ──────────────────────────── */
const commonMistakes = [
    "Booking cabins far apart",
    "Waiting too long to reserve multiple suites",
    "Assuming everyone wants the same excursions",
    "Forgetting travel insurance",
    "Arriving on embarkation day after long international flights",
    "Not discussing mobility needs before booking",
];

/* ── Scenic vs Ocean Cruises for Families Data ─────────────────────── */
const comparisonData = [
    { key: "ships", scenic: "Small luxury ships", ocean: "Thousands of passengers" },
    { key: "focus", scenic: "Cultural experiences", ocean: "Entertainment-focused" },
    { key: "destinations", scenic: "Walkable destinations", ocean: "More sea days" },
    { key: "atmosphere", scenic: "Quiet atmosphere", ocean: "High-energy environment" },
    { key: "service", scenic: "Personalized service", ocean: "Large-scale amenities" },
    { key: "togetherness", scenic: "Family conversations", ocean: "Water parks & attractions" },
];

/* ── Best Multigenerational Family Groups Data ─────────────────────── */
const familyGroups = [
    {
        id: "grandparents-adult-children",
        icon: Heart,
        title: "Grandparents & Adult Children",
        desc: "One of Scenic's fastest-growing guest segments. Many families celebrate retirement, anniversaries, family reunions, and birthday milestones together.",
    },
    {
        id: "three-generation",
        icon: Users,
        title: "Three-Generation Families",
        desc: "Grandparents, parents, and teenagers can each enjoy different excursion options during the day, then come together for evenings onboard.",
    },
    {
        id: "empty-nesters",
        icon: Home,
        title: "Empty Nesters Traveling Together",
        desc: "Many siblings and their spouses choose Scenic for annual family vacations throughout Europe.",
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicFamilyRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("rhine-river");

    const currentItinerary =
        familyItineraries.find((f) => f.id === activeItinerary) || familyItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruises for Families & Multigenerational Groups</title>
                <meta name="title" content="Scenic River Cruises for Families | Multigenerational Travel Guide" />
                <meta
                    name="description"
                    content="Planning a Scenic River Cruise with family? Discover whether Scenic is right for multigenerational travel, including grandparents, adult children, and family celebrations."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruises for Families <br /> &amp; Multigenerational Groups</h1>

                    <p>
                        A luxury river cruise offers a unique way for
                        families to travel together. Instead of constantly
                        packing and unpacking, navigating airports, or
                        coordinating multiple hotels, everyone travels on
                        one elegant ship while exploring Europe's most
                        iconic destinations.
                    </p>

                    {readMore && (
                        <p>
                            For grandparents celebrating a milestone
                            anniversary, parents introducing their children
                            to European history, or families planning a
                            once-in-a-lifetime reunion, Scenic River Cruises
                            combines luxury accommodations, personalized
                            service, and immersive cultural experiences in a
                            relaxed, all-inclusive environment. While Scenic
                            is not designed as a children's cruise line with
                            water slides or kids' clubs, it excels at
                            bringing together adult families and
                            multigenerational groups seeking meaningful
                            travel experiences.
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
                            Start Planning Your Family Scenic Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Family Travel: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time — Scenic is an excellent choice for multigenerational families, especially:
                        </p>

                        <ul className="rlc-qa-list">
                            {quickAnswerEmphasis.map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Spacious luxury suites, included excursions,
                            gourmet dining, butler service, and easy
                            transportation between destinations round out
                            the experience. Our Recommendation: Scenic is
                            generally better suited to teenagers and adults
                            than very young children, since the onboard
                            experience focuses on culture, sightseeing, and
                            relaxation.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC A GOOD CHOICE FOR FAMILIES? ─────────────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="is-scenic-good-families">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Is Scenic a Good Choice for Families?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Yes — but it depends on your family's travel
                            style.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Cultural experiences",
                                "Luxury accommodations",
                                "Fine dining",
                                "European history",
                                "Smaller ships",
                                "Relaxed sightseeing & quality time together"
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
                                        Families looking for meaningful,
                                        destination-focused travel often find
                                        Scenic to be one of the best luxury
                                        vacations available.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '200px' }}>
                                <Users size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Scenic Luxury Space-Ships
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY FAMILIES LOVE RIVER CRUISING ──────────────────────────── */}
            <section className="rlc-lc-worth-section" id="why-families-love-river-cruising" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Why Families Love River Cruising</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Unlike traditional vacations where family
                                members constantly separate for activities,
                                river cruising naturally keeps everyone
                                together. Benefits include:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "One unpacking experience",
                                    "Daily new destinations",
                                    "Easy boarding and disembarkation",
                                    "Walkable European cities",
                                    "Organized excursions",
                                    "No long coach transfers between hotels",
                                ].map((item, idx) => (
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
                                    It removes much of the stress associated
                                    with planning a complex family vacation.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={FamilyDiningImage}
                                    alt="Multigenerational family enjoying a river view aboard a Scenic ship"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Family Travel • Made Easy</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Planning a Family Reunion or Celebration?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you coordinate nearby cabins and find the best sailing for your multigenerational group.
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

            {/* ── BEST MULTIGENERATIONAL FAMILY GROUPS ──────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: 'var(--bg-white)' }} id="best-family-groups">
                <div className="adg-container">
                    <div className="adg-section-header" style={{ marginBottom: "60px" }}>
                        <h2 className="adg-h2">Best Multigenerational Family Groups</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-section-intro">Scenic works especially well for:</p>
                    </div>

                    <div className="scenic-diff-grid">
                        {familyGroups.map((item) => {
                            const CardIcon = item.icon;
                            return (
                                <div key={item.id} className="scenic-diff-card">
                                    <div className="scenic-diff-card-header">
                                        <div className="scenic-diff-icon-wrap">
                                            <CardIcon size={24} strokeWidth={1.8} />
                                        </div>
                                        <h3 className="scenic-diff-card-title">{item.title}</h3>
                                    </div>
                                    <div className="scenic-diff-card-body">
                                        <p className="scenic-diff-card-text">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── BEST SCENIC ITINERARIES FOR FAMILIES ───────────────────────── */}
            <section className="luc-destinations-section" id="family-itineraries">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Itineraries for Families</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            These river cruise routes offer exceptional experiences and shared memories for multigenerational groups.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {familyItineraries.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeItinerary === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveItinerary(item.id)}
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

                        <div className="luc-dest-panel" key={activeItinerary}>
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveItineraryIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveItineraryIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentItinerary.title}</span>
                                </div>
                            </div>

                            {currentItinerary.desc && (
                                <p className="luc-dest-panel-desc">{currentItinerary.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                {currentItinerary.columns.map((col, cIdx) => (
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

            {/* ── ACTIVITIES & DINING FOR FAMILIES ───────────────────────────── */}
            <section
                className="dve-winner-section"
                id="activities-dining-families"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Activities &amp; Dining for Families
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            Depending on the itinerary, shared experiences often become the highlights of the trip.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Activities Everyone Can Enjoy */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Landmark size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Shared Excursions
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Activities Everyone Can Enjoy
                                </h3>

                                <p className="dve-winner-intro">
                                    Depending on the itinerary, families may enjoy a wide range of experiences together.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">
                                    Popular Experiences Include:
                                </h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Castle tours & wine estates",
                                        "Local markets & guided walking tours",
                                        "Museums & historic churches",
                                        "Cultural performances",
                                        "Scenic Freechoice excursions",
                                        "Scenic Enrich exclusive events",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="dve-winner-intro" style={{ marginTop: "20px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
                                    These shared experiences often become the highlights of the trip.
                                </p>
                            </div>
                        </div>

                        {/* Dining for Families */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Utensils size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Dining onboard
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Dining for Families
                                </h3>

                                <p className="dve-winner-intro">
                                    Dining is one of Scenic's strongest features for family travel. Meals become opportunities to gather, relax, and discuss the day's adventures.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">
                                    Included:
                                </h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Breakfast",
                                        "Lunch",
                                        "Dinner",
                                        "Premium beverages",
                                        "Regional cuisine",
                                        "Flexible dining",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="dve-winner-intro" style={{ marginTop: "20px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
                                    Dietary requests can usually be accommodated with advance notice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Celebrations, Simplified</span>
                            <h3 className="scenic-inline-cta-title-light">Family Celebrations Onboard</h3>
                            <p className="scenic-inline-cta-text-light">
                                Scenic is a wonderful setting for celebrating anniversary vacations, retirement trips, birthday celebrations, graduation gifts, family reunions, and holiday travel. The onboard staff often helps recognize special occasions.
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

            {/* ── SUITE OPTIONS FOR FAMILIES ─────────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="suite-options" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Suite Options for Families</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Although Scenic river ships don't offer
                                large family suites like many ocean cruise
                                ships, families often reserve:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {["Adjacent suites", "Nearby cabins", "Multiple Balcony Suites"].map((item, idx) => (
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
                                    A luxury travel advisor can help
                                    coordinate the best cabin locations for
                                    larger groups.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={SuiteImage}
                                    alt="Balcony Suite aboard a Scenic river cruise ideal for family groups"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Balcony Suites • Coordinated for Groups</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── IS SCENIC GOOD FOR CHILDREN? ──────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="is-scenic-good-for-children"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Is Scenic Good for Children?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "340px", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)" }}>
                                    <GraduationCap size={64} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "20px" }} strokeWidth={1.2} />
                                    <span style={{ fontFamily: "var(--font-display)", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px" }}>
                                        It Depends on Age
                                    </span>
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    It depends on age. Because Scenic focuses
                                    on destination experiences rather than
                                    onboard attractions, older children
                                    generally appreciate the experience much
                                    more.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Best for:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Teenagers",
                                            "Young adults",
                                            "College-age travelers",
                                            "Adult children",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <CheckCircle size={16} className="ugt-question-icon" style={{ color: "var(--navy)" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ugt-questions-box" style={{ marginTop: "16px" }}>
                                    <span className="ugt-questions-title">Less suitable for:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Toddlers",
                                            "Preschoolers",
                                            "Young children seeking constant entertainment",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <X size={16} className="ugt-question-icon" style={{ color: "var(--text-muted)" }} />
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

            {/* ── COMMON FAMILY PLANNING MISTAKES ───────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Family Planning Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Planning early gives families more flexibility
                            and better cabin availability. Avoid these
                            common errors.
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

            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Family Travel, Elevated</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Plan an Unforgettable Family Trip?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us help you coordinate cabins, compare itineraries, and plan a seamless multigenerational luxury river cruise.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Plan Your Family Scenic Cruise
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">Family Cruise Expert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC VS OCEAN CRUISES FOR FAMILIES ──────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="ocean-cruise-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic River Cruises vs. <br /> Large Ocean Cruises for Families</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Families looking for meaningful travel
                            experiences often prefer Scenic, while those
                            seeking nonstop onboard entertainment may find a
                            large ocean cruise more suitable.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Scenic River Cruises</th>
                                    <th>Large Ocean Cruises</th>
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
                                Family Travel Involves Coordinating Many Moving Parts
                            </h3>
                            <p className="Avr-planning-left-body">
                                Family travel involves coordinating many
                                moving parts. A luxury travel advisor can
                                help reserve nearby cabins, coordinate
                                flights, arrange airport transfers, plan
                                pre- and post-cruise hotels, recommend the
                                best itineraries, organize celebration
                                details, compare Scenic with other luxury
                                river cruise lines, and manage group
                                reservations.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Having one expert coordinate everything
                                    makes planning much easier.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Home size={18} />, label: "Reserve nearby cabins" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights" },
                                    { icon: <Ship size={18} />, label: "Arrange airport transfers" },
                                    { icon: <MapPinned size={18} />, label: "Plan pre- and post-cruise hotels" },
                                    { icon: <Compass size={18} />, label: "Recommend the best itineraries" },
                                    { icon: <PartyPopper size={18} />, label: "Organize celebration details" },
                                    { icon: <Wallet size={18} />, label: "Compare Scenic with other luxury lines" },
                                    { icon: <Users size={18} />, label: "Manage group reservations" },
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
                            Everything families need to know before booking
                            a Scenic River Cruise.
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
                        alt="Multigenerational family exploring a European village on a Scenic river cruise excursion"
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
                                    A Meaningful Way to <br /> Travel Together as a Family
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic River Cruises offers one of
                                        the finest luxury travel experiences
                                        for multigenerational families who
                                        value culture, comfort, and quality
                                        time together. While it isn't
                                        designed as a children's
                                        entertainment cruise, it excels at
                                        bringing grandparents, parents, adult
                                        children, and teenagers together to
                                        explore Europe in an elegant,
                                        stress-free environment.

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
                                                If your family is celebrating
                                                a milestone or simply wants
                                                to create unforgettable
                                                memories together, Scenic's
                                                all-inclusive luxury,
                                                personalized service, and
                                                immersive itineraries make it
                                                an exceptional choice.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Booking early and working
                                                with a knowledgeable travel
                                                advisor can also help you
                                                secure the best cabin
                                                availability. At Trips &amp;
                                                Ships Luxury Travel, we'll
                                                help you plan every detail of
                                                your family Scenic cruise.
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
                                            Start Planning Your Family Scenic Cruise
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
                                            "Reserve nearby cabins for your group",
                                            "Recommend the best itinerary",
                                            "Compare cabin categories",
                                            "Coordinate flights and hotels",
                                            "Arrange airport transfers",
                                            "Explain cancellation policies",
                                            "Match you with the best departure dates",
                                            "Compare Scenic with other luxury lines",
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

export default ScenicFamilyRiverCruises;