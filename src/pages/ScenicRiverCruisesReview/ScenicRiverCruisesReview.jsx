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
    Waves,
    Wine,
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
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../../pages/RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic River Cruises Guide
   photography once available. Paths assume a new
   /assets/ScenicRiverCruisesGuide folder. */
// import SuiteImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-suite.jpg";
// import DiningImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-dining.jpg";
// import DanubeImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-danube.jpg";
// import MekongImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-mekong.jpg";
// import LoungeImage from "../../assets/ScenicRiverCruisesGuide/scenic-guide-lounge.jpg";

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
            "@id": "https://tripsandships.com/scenic-river-cruises/review/#webpage",
            name: "Scenic River Cruises Review: Pros, Cons & Best Fit (2026 Guide)",
            url: "https://tripsandships.com/scenic-river-cruises/review",
            description:
                "Thinking about booking Scenic River Cruises? Read our honest review covering ships, suites, dining, service, inclusions, pricing, pros, cons, and who Scenic is best suited for.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/review/#article",
            headline: "Scenic River Cruises Review | Pros, Cons, Pricing & Is It Worth It?",
            description:
                "Thinking about booking Scenic River Cruises? Read our honest review covering ships, suites, dining, service, inclusions, pricing, pros, cons, and who Scenic is best suited for.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/review/#review",
            itemReviewed: {
                "@type": "Product",
                name: "Scenic River Cruises",
            },
            author: {
                "@type": "Person",
                name: "Angela Hughes",
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: "4.8",
                bestRating: "5",
            },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://tripsandships.com/scenic-river-cruises/review/#breadcrumb",
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
                    name: "Riverside Luxury Cruises Reviews",
                    item: "https://tripsandships.com/riverside-luxury-cruises-reviews",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic River Cruises Review",
                    item: "https://tripsandships.com/scenic-river-cruises/review",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/review/#itemlist",
            name: "What This Scenic River Cruises Review Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "At a Glance" },
                { "@type": "ListItem", position: 2, name: "What Makes Scenic Different?" },
                { "@type": "ListItem", position: 3, name: "Luxury Suites" },
                { "@type": "ListItem", position: 4, name: "Dining" },
                { "@type": "ListItem", position: 5, name: "Personalized Service" },
                { "@type": "ListItem", position: 6, name: "Excursions" },
                { "@type": "ListItem", position: 7, name: "Relaxed Luxury" },
                { "@type": "ListItem", position: 8, name: "Pros and Cons" },
                { "@type": "ListItem", position: 9, name: "Who Is Scenic Best For?" },
                { "@type": "ListItem", position: 10, name: "Is Scenic Worth the Money?" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/review/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic River Cruises truly all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes premium beverages, butler service, gratuities, Wi-Fi, airport transfers, Scenic Freechoice excursions, and Scenic Enrich experiences on most itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic worth the money?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For travelers seeking a premium all-inclusive experience, many guests feel Scenic offers excellent value because so many luxury amenities are included.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the average age on Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most guests are typically 55 and older, although Scenic also attracts younger couples celebrating anniversaries, milestone birthdays, and retirement trips.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Scenic's all-inclusive approach makes it one of the easiest luxury river cruise lines for first-time travelers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Premium wines, beer, spirits, soft drinks, coffee, and tea are generally included throughout the cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is butler service included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Every suite includes personalized butler service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic include excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic Freechoice excursions and Scenic Enrich experiences are included on most itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Scenic compare with Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic emphasizes an all-inclusive luxury experience with butler service and extensive inclusions, while Riverside focuses on boutique luxury, larger suites, and a quieter onboard atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book Scenic through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare itineraries, explain promotions, recommend the best suite category, and help coordinate every aspect of your vacation.",
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
            q: "Is Scenic River Cruises truly all-inclusive?",
            a: "Yes. Scenic includes premium beverages, butler service, gratuities, Wi-Fi, airport transfers, Scenic Freechoice excursions, and Scenic Enrich experiences on most itineraries.",
        },
        {
            q: "Is Scenic worth the money?",
            a: "For travelers seeking a premium all-inclusive experience, many guests feel Scenic offers excellent value because so many luxury amenities are included.",
        },
        {
            q: "What is the average age on Scenic River Cruises?",
            a: "Most guests are typically 55 and older, although Scenic also attracts younger couples celebrating anniversaries, milestone birthdays, and retirement trips.",
        },
        {
            q: "Is Scenic good for first-time river cruisers?",
            a: "Absolutely. Scenic's all-inclusive approach makes it one of the easiest luxury river cruise lines for first-time travelers.",
        },
        {
            q: "Are drinks included?",
            a: "Yes. Premium wines, beer, spirits, soft drinks, coffee, and tea are generally included throughout the cruise.",
        },
        {
            q: "Is butler service included?",
            a: "Yes. Every suite includes personalized butler service.",
        },
        {
            q: "Does Scenic include excursions?",
            a: "Yes. Scenic Freechoice excursions and Scenic Enrich experiences are included on most itineraries.",
        },
        {
            q: "How does Scenic compare with Riverside?",
            a: "Scenic emphasizes an all-inclusive luxury experience with butler service and extensive inclusions, while Riverside focuses on boutique luxury, larger suites, and a quieter onboard atmosphere.",
        },
        {
            q: "Should I book Scenic through a travel advisor?",
            a: "Yes. A luxury travel advisor can compare itineraries, explain promotions, recommend the best suite category, and help coordinate every aspect of your vacation.",
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

/* ── Quick Verdict Data ───────────────────────────────────────── */
const quickVerdictData = [
    { key: "luxury", label: "Luxury", value: "★★★★★" },
    { key: "dining", label: "Dining", value: "★★★★★" },
    { key: "suites", label: "Suites", value: "★★★★★" },
    { key: "service", label: "Service", value: "★★★★★" },
    { key: "excursions", label: "Excursions", value: "★★★★★" },
    { key: "value", label: "Value", value: "★★★★☆" },
    { key: "entertainment", label: "Entertainment", value: "★★★★☆" },
    { key: "overall", label: "Overall Rating", value: "★★★★★" },
];

const compareTableData = [
    { name: "Scenic", feature: "Truly all-inclusive luxury & butler service" },
    { name: "Riverside", feature: "Boutique luxury & spacious suites" },
    { name: "Uniworld", feature: "European elegance & unique ship décor" },
    { name: "AmaWaterways", feature: "Active excursions & wellness" },
    { name: "Tauck", feature: "Inclusive land experiences" },
    { name: "Viking", feature: "Value and destination-focused travel" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruisesReview = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuites, setReadMoreSuites] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruises Review: Pros, Cons & Best Fit</title>
                <meta name="title" content="Scenic River Cruises Review | Pros, Cons, Pricing & Is It Worth It?" />
                <meta
                    name="description"
                    content="Thinking about booking Scenic River Cruises? Read our honest review covering ships, suites, dining, service, inclusions, pricing, pros, cons, and who Scenic is best suited for."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruises Review</h1>

                    <p>
                        Scenic River Cruises is one of the most luxurious all-inclusive river cruise lines in Europe and Southeast Asia. Travelers consistently choose Scenic for its spacious suites, butler service, premium dining, included excursions, and worry-free pricing.
                    </p>

                    {readMore && (
                        <p>
                            If you want a luxury vacation where nearly everything is included and exceptional service is a priority, Scenic is one of the strongest options available.
                            <br /><br />
                            <strong>Overall Rating: ★★★★★ (4.8/5)</strong>
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

            {/* ── QUICK VERDICT / AT A GLANCE ───────────────────────────────── */}
            <section className="adg-section" id="quick-verdict" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">At a Glance</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Overall Rating: <strong>★★★★★ (4.8/5)</strong>
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Rating</th>
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

            {/* ── WHAT MAKES SCENIC DIFFERENT ───────────────────────────── */}
            <section
                className="ugt-components-section"
                id="what-makes-scenic-different"
                style={{ backgroundColor: "var(--bg-soft)" }}
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
                                    <div className="scenic-card-image-container" style={{ height: "100%", minHeight: "300px" }}>
                                        <div className="scenic-dining-img" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", minHeight: "300px", color: "var(--navy)", fontStyle: "italic" }}>
                                            Scenic Luxury Inclusions
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Many luxury river cruise lines offer premium experiences, but Scenic's biggest advantage is that almost everything is included in the cruise fare.
                                    <br /><br />
                                    Instead of paying extra throughout your vacation, Scenic includes many services that other cruise lines charge separately for.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Inclusions include:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Butler service",
                                            "Premium beverages",
                                            "Gratuities",
                                            "Airport transfers",
                                            "Scenic Freechoice excursions",
                                            "Scenic Enrich events",
                                            "Specialty dining",
                                            "Wi-Fi",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <Check size={16} className="ugt-question-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="ugt-component-text" style={{ marginTop: "16px", fontStyle: "italic" }}>
                                    This creates a stress-free luxury vacation with very few surprise expenses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ── OUR HONEST REVIEW: RELAXED LUXURY ─────────────────────────── */}
            <section className="rrd-provence-section" id="relaxed-luxury" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rrd-provence-container">
                    <div className="rrd-provence-header">
                        <h2 className="rrd-provence-title">Relaxed Luxury ★★★★★</h2>
                        <div className="rrd-provence-accent"></div>
                        <p className="rrd-provence-intro">
                            Unlike large ocean ships, Scenic emphasizes a quiet, luxurious atmosphere where destinations and relaxation take center stage. There are no casinos or waterslides—and that's exactly what many luxury travelers love.
                        </p>
                    </div>

                    <div className="rrd-provence-grid">
                        {[
                            { label: "Relaxation", icon: Waves },
                            { label: "Cultural discovery", icon: Landmark },
                            { label: "Scenic cruising", icon: Ship },
                            { label: "Fine dining", icon: Wine },
                            { label: "Meaningful travel", icon: Compass },
                        ].map((item, i) => {
                            const IconComp = item.icon;
                            return (
                                <div key={i} className="rrd-provence-card">
                                    <div className="rrd-provence-icon-wrap">
                                        <IconComp size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="rrd-provence-label">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── OUR HONEST REVIEW: SUITES ────────────────────────────────── */}
            <section className="luc-why-section" id="luxury-suites">
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
                                marginTop: "30px",
                            }}
                        >
                            <div className="luc-why-img-overlay" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", color: "var(--bg-white)", fontStyle: "italic" }}>
                                Scenic Balcony Suites
                            </div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Luxury Suites ★★★★★</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            Scenic's accommodations are among the finest in river cruising. Many travelers describe the suites as feeling more like a luxury hotel than a cruise cabin.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "Spacious suites",
                                "Scenic Sun Lounge balconies",
                                "Butler service",
                                "Marble bathrooms",
                                "Luxury bedding",
                                "Mini-bar",
                                "Espresso machine",
                            ]
                                .slice(0, readMoreSuites ? 7 : 4)
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

               {/* ── OUR HONEST REVIEW: SERVICE & EXCURSIONS ───────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }} id="service-and-excursions">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Personalized Service &amp; Excursions</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Attentive onboard hospitality and signature shore excursions that define the Scenic standard.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Service Card */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Users size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Personalized Service ★★★★★</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Service is where Scenic truly excels. Crew members are known for their warm professionalism and attention to detail. Guests frequently mention the crew as one of the highlights of their vacation.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">Crew members are known for:</h4>
                                    <ul className="azs-dining-list">
                                        {[
                                            "Professionalism",
                                            "Friendly hospitality",
                                            "Attention to detail",
                                            "Personalized assistance",
                                            "Outstanding butler service",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Excursions Card */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Compass size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Excursions ★★★★★</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Scenic offers two signature excursion programs that allow guests to explore destinations through tailored paths or exclusive cultural settings.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">Scenic Freechoice &amp; Enrich:</h4>
                                    <ul className="azs-dining-list">
                                        {[
                                            "Scenic Freechoice: Customize tours by personal interests",
                                            "Freechoice activities: Wine tastings, Cycling, Walking tours, Museums",
                                            "Scenic Enrich: Access to exclusive, private cultural events",
                                            "Enrich events: Palace concerts, Private performances, Castles",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Star size={14} className="azs-dining-list-icon" />
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

            {/* ── OUR HONEST REVIEW: DINING ─────────────────────────────────── */}
            <section className="rlc-inc-section" id="dining" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Dining ★★★★★</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: "15px" }}></div>

                            <p className="rlc-inc-intro" style={{ margin: "0px", marginBottom: "30px" }}>
                                Dining is one of Scenic's strongest features. Food quality remains consistently excellent throughout the cruise.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Fresh regional cuisine",
                                    "Multi-course dinners",
                                    "Premium wines",
                                    "Chef's Table experiences",
                                    "Fresh pastries",
                                    "Seasonal menus",
                                    "Local specialties",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Check size={16} strokeWidth={3} className="rlc-inc-check-icon" />
                                        </span>
                                        <span className="rlc-inc-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage" style={{ minHeight: "300px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "var(--bg-white)", borderRadius: "var(--radius-lg)", border: "1px solid var(--navy-border)" }}>
                                <span style={{ color: "var(--navy)", fontStyle: "italic" }}>Gourmet Dining Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA SECTION ────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section">
                <div className="scenic-inline-cta-container">
                    <h3>Ready to Experience Scenic's Award-Winning Culinary Journeys?</h3>
                    <p>Speak with our luxury travel advisors today to plan your perfect river cruise vacation.</p>
                    <div className="scenic-inline-cta-btn-wrap">
                        <Link to="/contact" className="scenic-inline-cta-btn">
                            Plan Your Scenic Voyage
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ────────────────────────────────────────────── */}
            <section className="hrc-pros-cons-section" id="pros-and-cons" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="hrc-pros-cons-container">
                    <div className="hrc-pros-cons-header">
                        <h2 className="hrc-pros-cons-title">Pros &amp; Cons</h2>
                        <div className="hrc-pros-cons-accent"></div>
                        <p className="hrc-pros-cons-intro">
                            An honest comparison of the key advantages and considerations when booking a Scenic River Cruise.
                        </p>
                    </div>

                    <div className="hrc-pros-cons-grid">
                        {/* Pros Column */}
                        <div className="hrc-column hrc-pros-column">
                            <h3 className="hrc-column-title">
                                <Check size={20} className="hrc-title-icon hrc-pro-icon" />
                                Pros
                            </h3>
                            <div className="hrc-items-list">
                                {[
                                    {
                                        title: "Truly All-Inclusive",
                                        desc: "One of the most inclusive luxury river cruise lines available.",
                                    },
                                    {
                                        title: "Butler Service",
                                        desc: "Every suite includes personalized butler service.",
                                    },
                                    {
                                        title: "Excellent Dining",
                                        desc: "Outstanding cuisine featuring local ingredients and regional specialties.",
                                    },
                                    {
                                        title: "Beautiful Ships",
                                        desc: "Elegant, modern ships with spacious public areas.",
                                    },
                                    {
                                        title: "Flexible Excursions",
                                        desc: "Scenic Freechoice allows guests to customize their vacation.",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="hrc-item-card">
                                        <h4 className="hrc-item-title">{item.title}</h4>
                                        <p className="hrc-item-desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cons Column */}
                        <div className="hrc-column hrc-cons-column">
                            <h3 className="hrc-column-title">
                                <X size={18} className="hrc-title-icon hrc-con-icon" />
                                Cons
                            </h3>
                            <div className="hrc-items-list">
                                {[
                                    {
                                        title: "Premium Pricing",
                                        desc: "Scenic costs more than many river cruise lines. However, most luxury inclusions are already part of the fare.",
                                    },
                                    {
                                        title: "Relaxed Nightlife",
                                        desc: "Evenings are elegant but quiet. Travelers looking for nightlife or casinos may prefer an ocean cruise.",
                                    },
                                    {
                                        title: "Limited Family Activities",
                                        desc: "Scenic is designed primarily for adults. Children's programs are limited.",
                                    },
                                    {
                                        title: "Fewer Dining Venues",
                                        desc: "River ships naturally have fewer restaurants than large ocean vessels. The quality, however, is exceptional.",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="hrc-item-card">
                                        <h4 className="hrc-item-title">{item.title}</h4>
                                        <p className="hrc-item-desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PHOTO GALLERY SECTION ───────────────────────────────────── */}
            <section className="scenic-gallery-section" id="photo-gallery">
                <div className="scenic-gallery-container">
                    <h2 className="scenic-gallery-title">Experience the Luxury</h2>
                    <div className="scenic-gallery-accent"></div>
                    <p className="scenic-gallery-subtitle">
                        A visual journey onboard Scenic's state-of-the-art Space-Ships and through the world's most historic rivers.
                    </p>

                    <div className="scenic-gallery-grid">
                        <div className="scenic-gallery-item scenic-gallery-item-1">
                            <img
                                // src={SuiteImage}
                                alt="Scenic Balcony Suite"
                                className="scenic-gallery-img"
                            />
                            <div className="scenic-gallery-overlay">
                                <span>Scenic Balcony Suite</span>
                            </div>
                        </div>

                        <div className="scenic-gallery-item scenic-gallery-item-2">
                            <img
                                // src={DiningImage}
                                alt="Scenic Gourmet Dining"
                                className="scenic-gallery-img"
                            />
                            <div className="scenic-gallery-overlay">
                                <span>Gourmet Dining</span>
                            </div>
                        </div>

                        <div className="scenic-gallery-item scenic-gallery-item-3">
                            <img
                                // src={DanubeImage}
                                alt="Scenic Danube River Cruise"
                                className="scenic-gallery-img"
                            />
                            <div className="scenic-gallery-overlay">
                                <span>The Danube River</span>
                            </div>
                        </div>

                        <div className="scenic-gallery-item scenic-gallery-item-4">
                            <img
                                // src={MekongImage}
                                alt="Scenic Mekong Luxury Cruise"
                                className="scenic-gallery-img"
                            />
                            <div className="scenic-gallery-overlay">
                                <span>The Mekong River</span>
                            </div>
                        </div>

                        <div className="scenic-gallery-item scenic-gallery-item-5">
                            <img
                                // src={LoungeImage}
                                alt="Scenic Onboard Lounge"
                                className="scenic-gallery-img"
                            />
                            <div className="scenic-gallery-overlay">
                                <span>Scenic Panorama Lounge</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO IS SCENIC BEST FOR? / PREFER OTHER LINE ──────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }} id="who-is-it-for">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Who Is Scenic Best For?</h2>
                        <div className="azs-section-accent"></div>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Best For Card */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Check size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Ideal for:</h3>
                                </div>

                                <div className="azs-dining-body">
                                    <ul className="azs-dining-list">
                                        {[
                                            "Couples",
                                            "Luxury travelers",
                                            "Food lovers",
                                            "Wine enthusiasts",
                                            "Retired travelers",
                                            "First-time river cruisers",
                                            "Anniversary celebrations",
                                            "Cultural explorers",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Prefer Other Line Card */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <X size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">You may prefer another line if you want:</h3>
                                </div>

                                <div className="azs-dining-body">
                                    <ul className="azs-dining-list">
                                        {[
                                            "Casinos",
                                            "Broadway-style entertainment",
                                            "Large family attractions",
                                            "Budget travel",
                                            "Water parks",
                                            "Children's clubs",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Minus size={14} className="azs-dining-list-icon" />
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

            {/* ── SCENIC VS OTHER LUXURY LINES ─────────────────────────────── */}
            <section className="adg-section" id="scenic-vs-competitors" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs. Other Luxury River Cruise Lines</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Each cruise line offers a different experience, making your travel style the most important factor.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Best Known For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareTableData.map((row) => (
                                    <tr key={row.name}>
                                        <td>
                                            <strong>{row.name}</strong>
                                        </td>
                                        <td>{row.feature}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC WORTH THE MONEY? ───────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-the-money" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Scenic Worth the Money?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                For travelers seeking a worry-free luxury vacation, Scenic offers excellent value.
                                Rather than paying separately for drinks, gratuities, excursions, airport transfers, and butler service, these experiences are included from the start.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Many guests find that the higher upfront fare results in fewer expenses during the trip.
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
                            <div className="rlc-lc-worth-media-wrapper" style={{ minHeight: "300px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "var(--bg-white)", borderRadius: "var(--radius-lg)", border: "1px solid var(--navy-border)" }}>
                                <div className="rlc-lc-worth-media-badge">
                                    <span>All-Inclusive Value</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Expert Planning</span>
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
                                Booking through a luxury travel advisor provides benefits beyond simply reserving a cabin. An advisor can help compare Scenic with other leading lines like Riverside, Viking, Tauck, AmaWaterways, and Uniworld, ensuring your river cruise is tailored to your travel style.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional planning helps ensure your Scenic cruise is tailored to your preferences.
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
                                    { icon: <Home size={18} />, label: "Select the best suite" },
                                    { icon: <BadgePercent size={18} />, label: "Explain Scenic promotions" },
                                    { icon: <Sun size={18} />, label: "Recommend the ideal sailing season" },
                                    { icon: <Plane size={18} />, label: "Coordinate airfare" },
                                    { icon: <Hotel size={18} />, label: "Arrange pre- and post-cruise hotels" },
                                    { icon: <Anchor size={18} />, label: "Organize transfers" },
                                    { icon: <Users size={18} />, label: "Compare Scenic with Riverside, Viking, Tauck, AmaWaterways, and Uniworld" },
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
            <section className="Adg-expert-section" id="Asc-expert-insight" style={{ backgroundColor: "var(--bg-soft)" }}>
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
                            Everything travelers need to know before booking a Scenic River Cruise.
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
                        alt="Riverside ship sailing along a European river at dusk"
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
                                    Scenic River Cruises Deliver <br /> Premier All-Inclusive Luxury
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic River Cruises delivers one of the finest all-inclusive luxury river cruise experiences available today. Elegant ships, exceptional service, spacious suites, gourmet dining, and immersive cultural experiences combine to create a vacation that feels effortless from beginning to end.
                                        
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
                                                If your priority is luxury, comfort, and personalized service—with very few extra costs once onboard—Scenic is an outstanding choice.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury Travel, we'll help you compare Scenic with other leading luxury river cruise lines, recommend the ideal itinerary, select the perfect suite, and create a customized river cruise tailored to your travel style.
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

export default ScenicRiverCruisesReview;
