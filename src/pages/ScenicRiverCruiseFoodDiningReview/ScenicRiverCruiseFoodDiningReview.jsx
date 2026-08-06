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
    UtensilsCrossed,
    Coffee,
    Soup,
    Salad,
    GlassWater,
    ChefHat,
    Leaf,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic dining photography once
   available. Paths assume a new
   /assets/ScenicFoodDining folder. */
// import HeroImage from "../../assets/ScenicFoodDining/scenic-dining-hero.jpg";
// import DiningRoomImage from "../../assets/ScenicFoodDining/scenic-crystal-dining.jpg";
// import PortobellosImage from "../../assets/ScenicFoodDining/scenic-portobellos.jpg";
// import RiverCafeImage from "../../assets/ScenicFoodDining/scenic-river-cafe.jpg";
// import WineImage from "../../assets/ScenicFoodDining/scenic-wine-pairing.jpg";

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
            "@id": "https://tripsandships.com/scenic-river-cruises/food-dining/#webpage",
            name: "Scenic River Cruise Food & Dining Review (2026) | Menus, Restaurants & Is It Worth It?",
            url: "https://tripsandships.com/scenic-river-cruises/food-dining",
            description:
                "Discover what dining is really like on a Scenic River Cruise. Learn about restaurants, menus, included drinks, dietary options, specialty experiences, and whether Scenic's all-inclusive dining is worth it.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/food-dining/#article",
            headline: "Scenic River Cruise Food and Dining Review",
            description:
                "A complete look at dining on a Scenic River Cruise, including restaurants, menus, included beverages, dietary accommodations, and how Scenic compares to other luxury river cruise lines.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/food-dining/#breadcrumb",
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
                    name: "Scenic River Cruise Food & Dining Review",
                    item: "https://tripsandships.com/scenic-river-cruises/food-dining",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/food-dining/#itemlist",
            name: "Scenic River Cruise Food & Dining Review — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Overall Dining Experience" },
                { "@type": "ListItem", position: 3, name: "What Restaurants Are Onboard?" },
                { "@type": "ListItem", position: 4, name: "Breakfast, Lunch & Dinner" },
                { "@type": "ListItem", position: 5, name: "Regional Cuisine" },
                { "@type": "ListItem", position: 6, name: "Are Drinks Included?" },
                { "@type": "ListItem", position: 7, name: "Dietary Requirements" },
                { "@type": "ListItem", position: 8, name: "Service" },
                { "@type": "ListItem", position: 9, name: "How Scenic Compares to Other River Cruise Lines" },
                { "@type": "ListItem", position: 10, name: "Is Scenic Dining Worth It?" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 12, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/food-dining/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is the food good on Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic is widely recognized for its high-quality cuisine, regional specialties, elegant presentation, and attentive service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are all meals included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Breakfast, lunch, dinner, snacks, and most onboard dining experiences are included in your cruise fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes premium wines, beer, spirits, soft drinks, coffee, tea, and bottled water on most itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic have specialty restaurants?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Most Scenic Space-Ships feature venues such as Portobellos in addition to the main Crystal Dining restaurant.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can Scenic accommodate dietary restrictions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Vegetarian, vegan, gluten-free, dairy-free, and many allergy-related dietary requests can usually be accommodated with advance notice.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is there assigned seating?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Scenic generally offers flexible dining, allowing guests to dine at their preferred times within service hours.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are regional dishes served?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Menus regularly feature specialties inspired by the countries and regions visited during the itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is room service available?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Room service availability may vary by ship and suite category. Your butler can explain available options during your cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Scenic compare with Viking for dining?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both offer excellent cuisine, but Scenic includes premium beverages and emphasizes a more comprehensive all-inclusive dining experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is specialty dining included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Specialty dining experiences on Scenic are generally included, though reservations may be required due to limited seating.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic suitable for food lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Scenic is an excellent choice for travelers who appreciate gourmet cuisine, local wines, and destination-inspired dining.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book Scenic through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can recommend the best itinerary, explain dining options, coordinate dietary requests, and help you maximize the value of your cruise.",
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
            q: "Is the food good on Scenic River Cruises?",
            a: "Yes. Scenic is widely recognized for its high-quality cuisine, regional specialties, elegant presentation, and attentive service.",
        },
        {
            q: "Are all meals included?",
            a: "Yes. Breakfast, lunch, dinner, snacks, and most onboard dining experiences are included in your cruise fare.",
        },
        {
            q: "Are drinks included?",
            a: "Yes. Scenic includes premium wines, beer, spirits, soft drinks, coffee, tea, and bottled water on most itineraries.",
        },
        {
            q: "Does Scenic have specialty restaurants?",
            a: "Yes. Most Scenic Space-Ships feature venues such as Portobellos in addition to the main Crystal Dining restaurant.",
        },
        {
            q: "Can Scenic accommodate dietary restrictions?",
            a: "Yes. Vegetarian, vegan, gluten-free, dairy-free, and many allergy-related dietary requests can usually be accommodated with advance notice.",
        },
        {
            q: "Is there assigned seating?",
            a: "No. Scenic generally offers flexible dining, allowing guests to dine at their preferred times within service hours.",
        },
        {
            q: "Are regional dishes served?",
            a: "Yes. Menus regularly feature specialties inspired by the countries and regions visited during the itinerary.",
        },
        {
            q: "Is room service available?",
            a: "Room service availability may vary by ship and suite category. Your butler can explain available options during your cruise.",
        },
        {
            q: "How does Scenic compare with Viking for dining?",
            a: "Both offer excellent cuisine, but Scenic includes premium beverages and emphasizes a more comprehensive all-inclusive dining experience.",
        },
        {
            q: "Is specialty dining included?",
            a: "Yes. Specialty dining experiences on Scenic are generally included, though reservations may be required due to limited seating.",
        },
        {
            q: "Is Scenic suitable for food lovers?",
            a: "Absolutely. Scenic is an excellent choice for travelers who appreciate gourmet cuisine, local wines, and destination-inspired dining.",
        },
        {
            q: "Should I book Scenic through a travel advisor?",
            a: "Yes. A luxury travel advisor can recommend the best itinerary, explain dining options, coordinate dietary requests, and help you maximize the value of your cruise.",
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

/* ── What Makes Scenic Dining Special Data ─────────────────────────── */
const diningFactorItems = [
    "Multiple dining venues",
    "Regional menus",
    "Premium beverages",
    "Flexible seating",
    "Dietary accommodations",
    "Attentive service",
    "Fresh, seasonal ingredients",
    "No specialty dining charges",
];

/* ── Scenic Restaurant Categories Data ──────────────────────────────── */
const diningFactors = [
    {
        id: "crystal",
        title: "Crystal Dining — Main Restaurant",
        badge: "Crystal Dining",
        icon: UtensilsCrossed,
        desc: "The main restaurant serves breakfast, lunch, and dinner with changing daily menus inspired by European destinations. It's the heart of the onboard dining experience, offering something for every palate.",
        columns: [
            {
                label: "You'll typically find:",
                items: [
                    "Fresh seafood",
                    "Premium meats",
                    "Vegetarian dishes",
                    "Local specialties",
                    "Homemade desserts",
                    "International favorites",
                ],
            },
        ],
    },
    {
        id: "portobellos",
        title: "Portobellos — Specialty Dining",
        badge: "Portobellos",
        icon: ChefHat,
        desc: "A more intimate dining venue offering refined multi-course meals in a quieter setting. This is a favorite for anniversary dinners and special celebrations. Reservations may be required depending on the ship and itinerary.",
        columns: [
            {
                label: "Why guests love it:",
                items: [
                    "Multi-course tasting menus",
                    "Quieter, intimate atmosphere",
                    "Ideal for celebrations",
                    "Refined presentation",
                    "Attentive, personalized service",
                ],
            },
        ],
    },
    {
        id: "rivercafe",
        title: "River Café — Casual Dining",
        badge: "River Café",
        icon: Coffee,
        desc: "Ideal for lighter meals and casual snacks throughout the day, the River Café is a relaxed spot to grab a bite between excursions or enjoy a coffee while taking in the passing scenery.",
        columns: [
            {
                label: "Popular options include:",
                items: [
                    "Sandwiches",
                    "Salads",
                    "Pastries",
                    "Coffee & tea",
                    "Fresh fruit",
                ],
            },
        ],
    },
];

/* ── Breakfast, Lunch & Dinner Data ────────────────────────────────── */
const mealData = [
    {
        key: "breakfast",
        icon: <Coffee size={22} strokeWidth={1.6} />,
        eyebrow: "Morning",
        title: "Breakfast",
        imageAlt: "Breakfast spread on a Scenic river cruise",
        items: [
            "Fresh pastries, eggs cooked to order, and omelets",
            "Seasonal fruit, yogurt, artisan breads, and cheeses",
            "Smoked salmon, fresh juices, and specialty coffee",
        ],
        accent: "adg-accent-gold",
    },
    {
        key: "lunch",
        icon: <Salad size={22} strokeWidth={1.6} />,
        eyebrow: "Midday",
        title: "Lunch",
        imageAlt: "Lunch buffet and made-to-order dishes on Scenic",
        items: [
            "Fresh salads, regional soups, and seafood",
            "Pasta, grilled meats, and daily chef specialties",
            "Local cheeses with menus that change by country",
        ],
        accent: "adg-accent-teal",
    },
    {
        key: "dinner",
        icon: <Soup size={22} strokeWidth={1.6} />,
        eyebrow: "Evening",
        title: "Dinner",
        imageAlt: "Elegant dinner service on a Scenic river cruise",
        items: [
            "Multiple appetizer choices, soup, or salad",
            "Several entrées, vegetarian selections, and regional specialties",
            "Gourmet desserts and a cheese course",
        ],
        accent: "adg-accent-rose",
    },
];

/* ── Are Drinks Included Data ───────────────────────────────────────── */
const drinksIncluded = [
    "Premium wines",
    "Champagne",
    "Beer",
    "Spirits",
    "Cocktails",
    "Soft drinks",
    "Coffee",
    "Specialty teas",
    "Bottled water",
];




/* ── How Scenic Compares to Other River Cruise Lines Data ──────────── */
const comparisonData = [
    { key: "scenic", line: "Scenic", strength: "Gourmet all-inclusive dining with premium beverages" },
    { key: "viking", line: "Viking", strength: "Destination-inspired cuisine with optional beverage packages" },
    { key: "ama", line: "AmaWaterways", strength: "Wellness-focused menus and wine pairings" },
    { key: "uniworld", line: "Uniworld", strength: "Individually curated luxury dining" },
    { key: "riverside", line: "Riverside", strength: "Boutique fine dining with residential atmosphere" },
    { key: "tauck", line: "Tauck", strength: "Elegant regional cuisine included" },
];

/* ── What We Loved Data ─────────────────────────────────────────────── */
const lovedItems = [
    "Fresh regional cuisine",
    "Excellent wine selections",
    "Beautiful presentation",
    "Relaxed dining atmosphere",
    "Friendly service",
    "No additional specialty dining charges",
    "High-quality ingredients",
    "Flexible seating",
];



/* ── Regional Cuisine Data ──────────────────────────────────────────── */
const regionalCuisine = [
    {
        key: "france",
        country: "France",
        items: ["Beef Bourguignon", "French cheeses", "Fresh pastries", "Fine wines"],
    },
    {
        key: "germany",
        country: "Germany",
        items: ["Schnitzel", "Sausages", "Black Forest desserts"],
    },
    {
        key: "portugal",
        country: "Portugal",
        items: ["Fresh seafood", "Port wine", "Traditional pastries"],
    },
    {
        key: "austria",
        country: "Austria",
        items: ["Wiener Schnitzel", "Apple strudel", "Viennese desserts"],
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruiseFoodDining = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeDining, setActiveDining] = useState("crystal");

    const currentDining =
        diningFactors.find((f) => f.id === activeDining) || diningFactors[0];
    const ActiveDiningIcon = currentDining.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruise Food & Dining Review | Menus, Restaurants & Is It Worth It?</title>
                <meta name="title" content="Scenic River Cruise Food & Dining Review | Complete Guide" />
                <meta
                    name="description"
                    content="Discover what dining is really like on a Scenic River Cruise. Learn about restaurants, menus, included drinks, dietary options, specialty experiences, and whether Scenic's all-inclusive dining is worth it."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruise <br /> Food and Dining Review</h1>

                    <p>
                        One of the highlights of any Scenic River Cruise is
                        the dining experience. Scenic positions itself as an
                        ultra-luxury, all-inclusive river cruise line, and
                        its culinary program reflects that philosophy with
                        gourmet cuisine, regional specialties, premium
                        beverages, and attentive service.
                    </p>

                    {readMore && (
                        <p>
                            Whether you're cruising through France, Portugal,
                            Germany, or Eastern Europe, meals are designed to
                            complement the destinations you're visiting.
                            Expect locally inspired menus, fresh seasonal
                            ingredients, and an impressive selection of wines
                            paired with regional cuisine. In this review,
                            we'll cover what it's actually like to dine on
                            Scenic, what to expect each day, and whether the
                            dining experience lives up to the cruise line's
                            luxury reputation.
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
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Scenic Dining: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time — Overall Dining Rating: 4.9/5
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Multiple gourmet dining experiences",
                                "Breakfast, lunch, and dinner included",
                                "Premium wines, beer, spirits, and soft drinks included",
                                "Regional cuisine inspired by each destination",
                                "Flexible dining with no fixed seating",
                                "Excellent service and beautifully presented meals",
                            ].map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <UtensilsCrossed size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Bottom Line: Scenic delivers one of the strongest
                            all-inclusive dining experiences in luxury river
                            cruising, particularly for travelers who enjoy
                            fine dining without extra specialty restaurant
                            charges.
                        </p>
                    </div>
                </div>
            </section>


            {/* ── OVERALL DINING EXPERIENCE ─────────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="overall-dining-experience">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Overall Dining Experience</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Dining on Scenic feels closer to eating in a
                                boutique luxury hotel than on a traditional
                                cruise ship. Rather than offering numerous
                                restaurants, Scenic focuses on a smaller
                                number of elegant venues where menus change
                                regularly and reflect the regions you're
                                visiting.
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {diningFactorItems.map((item, idx) => (
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
                                    Meals are relaxed, beautifully presented,
                                    and thoughtfully paced, allowing guests to
                                    enjoy conversations while taking in
                                    passing scenery through panoramic
                                    windows. Service is attentive without
                                    being overly formal, creating a
                                    comfortable atmosphere throughout the
                                    voyage.
                                </p>
                            </div>

                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={DiningRoomImage}
                                    alt="Elegant dining room aboard a Scenic river cruise ship"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Boutique Dining • Onboard</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Curious What Else Is Included?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us walk you through everything included on a Scenic River Cruise, from dining to excursions.
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

            {/* ── WHAT RESTAURANTS ARE ONBOARD? ────────────────────────────── */}
            <section className="dac-reasons-section" id="restaurants-onboard" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="dac-reasons-container">
                    <div className="dac-reasons-header">
                        <span className="dac-reasons-eyebrow">
                            What Restaurants Are Onboard?
                        </span>
                        <h2 className="dac-reasons-title">
                            What Restaurants Are Onboard?
                        </h2>
                        <div className="dac-reasons-accent"></div>
                        <p className="dac-reasons-lead">
                            Restaurant names and layouts vary slightly by
                            ship, but most Scenic Space-Ships include these
                            three signature venues.
                        </p>
                    </div>

                    <div className="dac-reasons-tabs-nav">
                        {diningFactors.map((item, idx) => {
                            const NavIcon = item.icon;
                            const isActive = activeDining === item.id;

                            return (
                                <button
                                    key={item.id}
                                    className={`dac-reasons-tab-btn ${isActive ? "active" : ""}`}
                                    onClick={() => setActiveDining(item.id)}
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
                        {diningFactors.map((item, idx) => {
                            if (activeDining !== item.id) return null;
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
                                                    // src={PortobellosImage}
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


            {/* ── ARE DRINKS INCLUDED? ─────────────────────────────────────── */}
            <section className="scenic-drinks-section" id="drinks-included">
                <div className="scenic-drinks-container">
                    <div className="adg-header">

                        <h2 className="adg-h2">Are Drinks Included?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Yes. One of Scenic's biggest advantages over many cruise lines is its premium, all-inclusive beverage program.
                        </p>
                    </div>

                    <div className="scenic-drinks-grid-premium">
                        {drinksIncluded.map((drink, i) => (
                            <div key={i} className="scenic-drink-card-premium">
                                <span className="scenic-drink-card-icon-wrap">
                                    <Wine size={18} className="scenic-drink-card-icon" />
                                </span>
                                <span className="scenic-drink-card-name">{drink}</span>
                            </div>
                        ))}
                    </div>

                    <div className="scenic-drinks-banner-premium">
                        <div className="scenic-drinks-banner-content">
                            <span className="scenic-drinks-banner-badge">Luxury Advantage</span>
                            <h3>No Beverage Package Needed</h3>
                            <p>
                                Unlike some cruise lines, there is no need to purchase a beverage package. Everything from morning specialty coffees to late-night cocktails is fully covered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BREAKFAST, LUNCH & DINNER ─────────────────────────────────── */}
            <section
                className="adg-section"
                id="breakfast-lunch-dinner"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Breakfast, Lunch &amp; Dinner</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Each meal of the day has its own rhythm and
                            character onboard, with menus that change
                            depending on the country you're visiting.
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {mealData.map((item) => (
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
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Regional Flavors</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Taste Your Way Through Europe?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Take advantage of exclusive travel advisor promotions and expert itinerary advice to plan your Scenic cruise today.
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

            {/* ── DIETARY REQUIREMENTS ─────────────────────────────────────── */}
            <section className="scenic-dietary-section" id="dietary-requirements">
                <div className="scenic-dietary-container">
                    <div className="adg-header">
                        <span className="scenic-dietary-eyebrow">Customized Dining</span>
                        <h2 className="adg-h2">Dietary Requirements</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Scenic accommodates many dietary needs, ensuring every guest enjoys a safe, gourmet dining experience.
                        </p>
                    </div>

                    <div className="scenic-dietary-grid-premium">
                        {[
                            { name: "Vegetarian", desc: "A variety of gourmet plant-based dishes prepared fresh daily." },
                            { name: "Vegan", desc: "Creative vegan options featuring fresh local vegetables and ingredients." },
                            { name: "Gluten-free", desc: "Delicious gluten-free alternatives for bread, pasta, and desserts." },
                            { name: "Dairy-free", desc: "Flavorful dishes prepared without butter, cream, or other dairy." },
                            { name: "Low-sodium", desc: "Heart-healthy selections that maintain rich flavor profiles." },
                            { name: "Food allergies", desc: "Highly tailored preparations to ensure absolute dining safety." }
                        ].map((diet, i) => (
                            <div key={i} className="scenic-dietary-card-premium">
                                <div className="scenic-dietary-card-header">
                                    <span className="scenic-dietary-check-premium">
                                        <Check size={14} strokeWidth={3} />
                                    </span>
                                    <h3>{diet.name}</h3>
                                </div>
                                <p>{diet.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="scenic-dietary-banner-premium">
                        <div className="scenic-dietary-banner-icon-wrap">
                            <Leaf size={20} />
                        </div>
                        <p>
                            <strong>Important Note:</strong> Guests should notify Scenic or their travel advisor before departure so the culinary team can prepare accordingly.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── REGIONAL CUISINE ──────────────────────────────────────────── */}
            <section className="scenic-avoid-section" id="regional-cuisine">
                <div className="scenic-avoid-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Regional Cuisine</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            One of Scenic's biggest strengths is incorporating
                            local flavors into the dining experience.
                        </p>
                    </div>

                    <div className="scenic-avoid-intro-box">
                        <p className="scenic-avoid-intro-text">
                            <strong>The takeaway:</strong> These regional
                            touches help connect your onboard experience with
                            the destinations you're exploring.
                        </p>
                    </div>

                    <div className="scenic-avoid-grid1">
                        {regionalCuisine.map((region) => (
                            <div className="scenic-avoid-card" key={region.key}>
                                <div className="scenic-avoid-card-header">
                                    <div className="scenic-avoid-icon-wrap">
                                        <MapPinned size={20} className="scenic-avoid-card-icon" />
                                    </div>
                                    <h3 className="scenic-avoid-card-title">{region.country}</h3>
                                </div>
                                <div className="scenic-avoid-card-body">
                                    <p className="scenic-avoid-card-subtitle">Look for:</p>
                                    <ul className="scenic-avoid-list">
                                        {region.items.map((dish, i) => (
                                            <li key={i}>
                                                <Check size={14} className="Asc-icon-red" />
                                                <span>{dish}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICE ──────────────────────────────────────────────────── */}
            <section className="scenic-service-section" id="dining-service">
                <div className="scenic-service-container">
                    <div className="scenic-service-grid-2col">
                        <div className="scenic-service-content-col">
                            <h2 className="scenic-service-title">Dining Service</h2>
                            <div className="scenic-service-accent"></div>

                            <p className="scenic-service-lead">
                                Dining service consistently receives high marks from guests. The crew is trained to provide a level of care that feels both personal and effortless.
                            </p>

                            <div className="scenic-service-learn-box">
                                <h3 className="scenic-service-learn-title">Servers Quickly Learn:</h3>
                                <div className="scenic-service-items-vertical">
                                    {[
                                        { title: "Beverage preferences", desc: "Whether it's your preferred wine or morning coffee." },
                                        { title: "Dietary needs", desc: "Remembering specific intolerances or exclusions." },
                                        { title: "Seating preferences", desc: "Finding your favorite table or panoramic window view." },
                                        { title: "Special celebrations", desc: "Recognizing milestones with extra touches." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="scenic-service-item-row">
                                            <div className="scenic-service-item-num-wrap">
                                                <span className="scenic-service-item-num">0{idx + 1}</span>
                                            </div>
                                            <div className="scenic-service-item-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>

                        <div className="scenic-service-image-col">
                            <div className="scenic-service-placeholder-card-premium">
                                <div className="scenic-service-placeholder-overlay"></div>
                                <div className="scenic-service-placeholder-badge">Onboard Service</div>
                                <div className="scenic-service-placeholder-content-wrap">
                                    <Sparkles size={32} className="scenic-service-placeholder-gold-icon" />
                                    <h3>White-Glove Care</h3>
                                    <p>Attentive &amp; Personalized Dining</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── HOW SCENIC COMPARES TO OTHER RIVER CRUISE LINES ──────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="dining-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">How Scenic Compares to Other River Cruise Lines</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Each line offers excellent dining, but Scenic
                            stands out for combining gourmet meals with an
                            extensive premium beverage program included in
                            the fare.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Dining Style</th>
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

            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Luxury Cruise Planning</span>
                            <h3 className="scenic-inline-cta-title-light">Unpack Once, Dine Excellently Everyday</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us coordinate your Scenic luxury cruise with custom culinary excursions, flight arrangements, and private transfers.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Plan Your Scenic Cruise
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">Exclusive Perks</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT WE LOVED ────────────────────────────────────────────── */}
            <section className="scenic-loved-section" id="what-we-loved">
                <div className="scenic-loved-container">
                    <div className="scenic-loved-grid-2col">
                        <div className="scenic-loved-image-col">
                            <div className="scenic-loved-placeholder-card-premium">
                                <div className="scenic-loved-placeholder-overlay"></div>
                                <div className="scenic-loved-placeholder-badge">Onboard Highlights</div>
                                <div className="scenic-loved-placeholder-content-wrap">
                                    <Award size={32} className="scenic-loved-placeholder-icon" />
                                    <h3>Culinary Highlights</h3>
                                    <p>Scenic Dining Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="scenic-loved-content-col">
                            <span className="scenic-loved-eyebrow">Our Experience</span>
                            <h2 className="scenic-loved-title">What We Loved</h2>
                            <div className="scenic-loved-accent"></div>

                            <p className="scenic-loved-intro">
                                There are many aspects of Scenic's culinary experience that stand out, but these are the highlights that consistently received high praise during our review:
                            </p>

                            <div className="scenic-loved-list-grid">
                                {lovedItems.map((item, idx) => (
                                    <div key={idx} className="scenic-loved-list-item">
                                        <span className="scenic-loved-item-check-wrap">
                                            <CheckCircle size={18} className="scenic-loved-item-check" />
                                        </span>
                                        <span className="scenic-loved-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC DINING WORTH IT? ────────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-dining-worth-it" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Scenic Dining Worth It?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Absolutely. If you appreciate fine dining,
                                premium wines, regional cuisine, personalized
                                service, and relaxed meals, then Scenic
                                offers one of the most enjoyable culinary
                                experiences in luxury river cruising.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The all-inclusive pricing also makes
                                    budgeting easier since most beverages and
                                    dining experiences are already covered.
                                </p>
                            </div>

                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={DiningRoomImage}
                                    alt="Guests enjoying dinner aboard a Scenic river cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Gourmet Dining • Included</span>
                                </div>
                            </div>
                        </div>
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
                        <span className="Avr-planning-eyebrow">Personalized Cruise Guidance</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Dining Is Just One Part of Planning the Perfect Scenic Vacation
                            </h3>
                            <p className="Avr-planning-left-body">
                                Working with a luxury travel advisor can help
                                you compare Scenic itineraries, recommend the
                                best ship and suite, explain dining venues,
                                arrange dietary requests, coordinate pre- and
                                post-cruise hotels, and compare Scenic with
                                Viking, Riverside, AmaWaterways, and
                                Uniworld.
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
                                    { icon: <Compass size={18} />, label: "Compare Scenic itineraries" },
                                    { icon: <Award size={18} />, label: "Recommend the best ship and suite" },
                                    { icon: <UtensilsCrossed size={18} />, label: "Explain dining venues" },
                                    { icon: <Leaf size={18} />, label: "Arrange dietary requests" },
                                    { icon: <Plane size={18} />, label: "Coordinate pre- and post-cruise hotels" },
                                    { icon: <Gem size={18} />, label: "Compare Scenic with Viking, Riverside, AmaWaterways, and Uniworld" },
                                    { icon: <BadgePercent size={18} />, label: "Find the best available promotions" },
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
                            choosing Scenic for their next river cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={DiningRoomImage}
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
                                    One of the Finest <br /> Dining Experiences Afloat
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic consistently delivers one of
                                        the finest dining experiences in
                                        luxury river cruising. Rather than
                                        focusing on numerous restaurants, the
                                        cruise line emphasizes high-quality
                                        cuisine, regional specialties,
                                        premium beverages, and personalized
                                        service that complement each
                                        destination.

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
                                                For travelers who value
                                                gourmet meals, local flavors,
                                                and an all-inclusive
                                                experience without surprise
                                                charges, Scenic's dining
                                                program is a major reason why
                                                so many guests return for
                                                future cruises.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Overall Dining Rating: 4.9/5.
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                compare Scenic itineraries
                                                and dining venues to find the
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
                                            "Compare Scenic itineraries and dining venues",
                                            "Recommend the best ship and suite",
                                            "Explain promotions and limited-time offers",
                                            "Arrange dietary requests",
                                            "Coordinate flights and hotels",
                                            "Coordinate private transfers",
                                            "Compare Scenic with other luxury lines",
                                            "Help you get the most from your cruise fare",
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

export default ScenicRiverCruiseFoodDining;