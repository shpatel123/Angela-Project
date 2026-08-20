import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    ArrowUpRight,
    Ship,
    Anchor,
    Waves,
    Wine,
    Sun,
    Gem,
    Heart,
    Compass,
    Utensils,
    Landmark,
    Snowflake,
    Home,
    Users,
    Award,
    Star,
    MapPin,
    Bed,
    Sparkles,
    Dumbbell,
    Music,
    GraduationCap,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournEncore.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournEncoreSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/",
            name: "Seabourn Encore: Ship Guide, Suites & Dining",
            headline: "Seabourn Encore Ship Guide: Suites, Dining, Amenities & Itineraries",
            description:
                "Explore Seabourn Encore, including suites, restaurants, dining, amenities, public areas, itineraries and who this luxury cruise ship is best suited for.",
            keywords: [
                "Seabourn Encore",
                "Seabourn Encore ship",
                "Seabourn Encore cruise",
                "Seabourn Encore review",
                "Seabourn Encore suites",
                "Seabourn Encore cabins",
                "Seabourn Encore restaurants",
                "Seabourn Encore dining",
                "Seabourn Encore amenities",
                "Seabourn Encore deck plan",
                "Seabourn Encore itineraries",
                "Seabourn Encore destinations",
                "Seabourn Encore pool",
                "Seabourn Encore spa",
                "Seabourn Encore best suites",
                "Seabourn Encore worth it",
                "Seabourn Encore ship guide",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#breadcrumb",
            },
            mainEntity: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#ship",
            },
            inLanguage: "en-US",
        },

        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#breadcrumb",
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
                    name: "Seabourn Cruises",
                    item: "https://www.tripsandships.com/seabourn-cruises/",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Seabourn Ships",
                    item: "https://www.tripsandships.com/seabourn-cruises/ships/",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Seabourn Encore",
                    item: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/",
                },
            ],
        },

        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#ship",
            name: "Seabourn Encore",
            description:
                "An intimate all-suite luxury ocean cruise ship designed for travelers seeking personalized service, fine dining, elegant public spaces and destination-focused cruising.",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/",
            brand: {
                "@type": "Brand",
                name: "Seabourn",
            },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Ship Type", value: "Luxury ocean cruise ship" },
                { "@type": "PropertyValue", name: "Guest Capacity", value: "Approximately 600 guests" },
                { "@type": "PropertyValue", name: "Ship Style", value: "All-suite luxury" },
                { "@type": "PropertyValue", name: "Accommodation", value: "All-suite" },
                { "@type": "PropertyValue", name: "Private Verandas", value: "Available in many suite categories" },
                { "@type": "PropertyValue", name: "Dining", value: "Multiple restaurants and dining venues" },
                { "@type": "PropertyValue", name: "Pool", value: "Yes" },
                { "@type": "PropertyValue", name: "Spa", value: "Yes" },
                { "@type": "PropertyValue", name: "Fitness Center", value: "Yes" },
                { "@type": "PropertyValue", name: "Lounges", value: "Multiple" },
                { "@type": "PropertyValue", name: "Entertainment", value: "Live performances, music and enrichment" },
                { "@type": "PropertyValue", name: "Atmosphere", value: "Intimate, elegant and relaxed" },
                { "@type": "PropertyValue", name: "Best For", value: "Couples, solo travelers and luxury cruisers" },
                { "@type": "PropertyValue", name: "Sister Ship", value: "Seabourn Ovation" },
            ],
        },

        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#features",
            name: "Seabourn Encore Features",
            description: "Key accommodations, dining, amenities and onboard features of Seabourn Encore.",
            numberOfItems: 8,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "All-Suite Accommodations",
                    description:
                        "Seabourn Encore offers an all-suite accommodation experience with multiple suite categories, including Veranda and Penthouse options.",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Private Verandas",
                    description:
                        "Many Seabourn Encore suites feature private verandas that provide outdoor space for scenic cruising, relaxation and enjoying port arrivals.",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Luxury Dining",
                    description:
                        "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining.",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Flexible Dining",
                    description:
                        "Seabourn Encore offers flexible dining with open-seating options rather than traditional fixed assigned dining arrangements.",
                },
                {
                    "@type": "ListItem",
                    position: 5,
                    name: "Pool and Relaxation",
                    description:
                        "The ship features a pool area designed primarily for swimming, sunbathing and quiet relaxation.",
                },
                {
                    "@type": "ListItem",
                    position: 6,
                    name: "Spa and Fitness",
                    description:
                        "Seabourn Encore provides spa, wellness and fitness facilities for relaxation and maintaining an exercise routine during the cruise.",
                },
                {
                    "@type": "ListItem",
                    position: 7,
                    name: "Elegant Public Areas",
                    description:
                        "Public spaces include Seabourn Square, lounges, dining areas, scenic viewing spaces and social areas designed around an intimate luxury atmosphere.",
                },
                {
                    "@type": "ListItem",
                    position: 8,
                    name: "Destination-Focused Cruising",
                    description:
                        "Seabourn Encore offers destination-focused ocean cruising with itineraries that can include the Mediterranean, Northern Europe, Scandinavia, British Isles, Caribbean and other seasonal destinations.",
                },
            ],
        },

        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is Seabourn Encore?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn Encore is an all-suite luxury ocean cruise ship designed around personalized service, fine dining and destination-focused cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How many guests are on Seabourn Encore?",
                    acceptedAnswer: { "@type": "Answer", text: "Seabourn Encore accommodates approximately 600 guests." },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn Encore an all-suite ship?",
                    acceptedAnswer: { "@type": "Answer", text: "Yes. All guest accommodations are suites." },
                },
                {
                    "@type": "Question",
                    name: "Do Seabourn Encore suites have balconies?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many Seabourn Encore suites include private verandas. The exact configuration depends on the suite category.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What restaurants are on Seabourn Encore?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is dining included on Seabourn Encore?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Dining is included as part of Seabourn's all-inclusive cruise experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn Encore offer open seating?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Seabourn's dining approach provides flexible dining rather than traditional fixed assigned seating.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn Encore have a pool?",
                    acceptedAnswer: { "@type": "Answer", text: "Yes. The ship has a pool area designed primarily for relaxation." },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn Encore have a spa?",
                    acceptedAnswer: { "@type": "Answer", text: "Yes. The ship provides spa and wellness services." },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn Encore have a gym?",
                    acceptedAnswer: { "@type": "Answer", text: "Yes. Guests can use the onboard fitness facilities." },
                },
                {
                    "@type": "Question",
                    name: "What destinations does Seabourn Encore visit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the sailing, Encore can visit regions such as the Mediterranean, Northern Europe, Scandinavia, the British Isles, the Caribbean and other seasonal destinations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn Encore good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Its all-suite accommodations, verandas, dining and intimate atmosphere make it particularly well suited to couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn Encore good for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Flexible dining and the relatively intimate passenger environment can make it a comfortable choice for solo travelers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn Encore good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It can work well for multigenerational families who value luxury and destination experiences, although it is not designed as a traditional family cruise ship.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn Encore good for first-time luxury cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The combination of all-suite accommodations, personalized service, fine dining and relaxed luxury makes it a strong introduction to luxury cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn Encore formal?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn Encore maintains a sophisticated but relatively relaxed atmosphere. Smart-casual clothing is appropriate for much of the onboard experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between Seabourn Encore and Seabourn Ovation?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "They are sister ships with very similar designs and experiences. Itinerary, departure date and suite availability are often more important when choosing between them.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn Encore worth the money?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For travelers who value spacious suites, personalized service, fine dining and an intimate luxury atmosphere, Seabourn Encore can be worth the premium.",
                    },
                },
            ],
        },
    ],
};

/* ── FAQ Accordion (reused Sbc-faq classes) ────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is Seabourn Encore?", a: "Seabourn Encore is an all-suite luxury ocean cruise ship designed around personalized service, fine dining and destination-focused cruising." },
        { q: "How many guests are on Seabourn Encore?", a: "Seabourn Encore accommodates approximately 600 guests." },
        { q: "Is Seabourn Encore an all-suite ship?", a: "Yes. All guest accommodations are suites." },
        { q: "Do Seabourn Encore suites have balconies?", a: "Many suites include private verandas. The exact configuration depends on the suite category." },
        { q: "What restaurants are on Seabourn Encore?", a: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining." },
        { q: "Is dining included on Seabourn Encore?", a: "Yes. Dining is included as part of Seabourn's all-inclusive cruise experience." },
        { q: "Does Seabourn Encore offer open seating?", a: "Yes. Seabourn's dining approach provides flexible dining rather than traditional fixed assigned seating." },
        { q: "Does Seabourn Encore have a pool?", a: "Yes. The ship has a pool area designed primarily for relaxation." },
        { q: "Does Seabourn Encore have a spa?", a: "Yes. The ship provides spa and wellness services." },
        { q: "Does Seabourn Encore have a gym?", a: "Yes. Guests can use the onboard fitness facilities." },
        { q: "What destinations does Seabourn Encore visit?", a: "Depending on the sailing, Encore can visit regions such as the Mediterranean, Northern Europe, Scandinavia, the British Isles, the Caribbean and other seasonal destinations." },
        { q: "Is Seabourn Encore good for couples?", a: "Yes. Its all-suite accommodations, verandas, dining and intimate atmosphere make it particularly well suited to couples." },
        { q: "Is Seabourn Encore good for solo travelers?", a: "Yes. Flexible dining and the relatively intimate passenger environment can make it a comfortable choice for solo travelers." },
        { q: "Is Seabourn Encore good for families?", a: "It can work well for multigenerational families who value luxury and destination experiences, although it is not designed as a traditional family cruise ship." },
        { q: "Is Seabourn Encore good for first-time luxury cruisers?", a: "Yes. The combination of all-suite accommodations, personalized service, fine dining and relaxed luxury makes it a strong introduction to luxury cruising." },
        { q: "Is Seabourn Encore formal?", a: "Seabourn Encore maintains a sophisticated but relatively relaxed atmosphere. Smart-casual clothing is appropriate for much of the onboard experience." },
        { q: "What is the difference between Seabourn Encore and Seabourn Ovation?", a: "They are sister ships with very similar designs and experiences. Itinerary, departure date and suite availability are often more important when choosing between them." },
        { q: "Is Seabourn Encore worth the money?", a: "For travelers who value spacious suites, personalized service, fine dining and an intimate luxury atmosphere, Seabourn Encore can be worth the premium." },
    ];

    return (
        <div className="Sbc-faq-list">
            {faqData.map((item, i) => (
                <div
                    key={i}
                    className={`Sbc-faq-item${open === i ? " Sbc-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="Sbc-faq-q">
                        <span>{item.q}</span>
                        <span className="Sbc-faq-icon">
                            {open === i ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                        </span>
                    </div>
                    {open === i && (
                        <div className="Sbc-faq-a">
                            <div className="Sbc-faq-a-inner">{item.a}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ── Data ──────────────────────────────────────────────────────── */
const glanceData = [
    ["Ship type", "Luxury ocean cruise ship"],
    ["Guests", "Approximately 600"],
    ["Ship style", "All-suite luxury"],
    ["Atmosphere", "Intimate, elegant and relaxed"],
    ["Accommodation", "All-suite"],
    ["Private verandas", "Available in many categories"],
    ["Dining", "Multiple restaurants and venues"],
    ["Pool", "Yes"],
    ["Spa", "Yes"],
    ["Fitness center", "Yes"],
    ["Lounges", "Multiple"],
    ["Entertainment", "Live performances, music and enrichment"],
    ["Best for", "Couples, solo travelers and luxury cruisers"],
    ["Sister ship", "Seabourn Ovation"],
];

const whyChooseList = [
    "All-suite accommodations",
    "Many suites with private verandas",
    "Approximately 600 guests",
    "Multiple restaurants",
    "Flexible dining",
    "Personalized service",
    "Elegant lounges",
    "Swimming pool",
    "Spa and wellness facilities",
    "Fitness center",
    "Destination-focused enrichment",
    "Relaxed atmosphere",
];

const suiteFeatures = ["Living area", "Sleeping area", "Private veranda", "Ocean views", "Sitting area", "In-suite bar", "Luxury bathroom", "Suite host service"];

const suiteCategories = ["Ocean View Suites", "Veranda Suites", "Penthouse Suites", "Premium suites", "Larger specialty suites"];


const balconyList = ["Morning coffee", "Reading", "Watching sunsets", "Scenic cruising", "Port arrivals", "Relaxing between excursions"];

const bestSuiteCards = [
    { icon: Wine, title: "Best for Value", text: "A well-located Veranda Suite can offer an excellent balance of space, privacy and price." },
    { icon: Heart, title: "Best for Couples", text: "A veranda suite gives couples private outdoor space and a comfortable place to relax." },
    { icon: Home, title: "Best for More Living Space", text: "A Penthouse-level suite is worth considering if having a larger living area is important." },
    { icon: Gem, title: "Best for Maximum Luxury", text: "The largest premium suites provide additional space and upgraded features." },
];

const diningCards = [
    {
        title: "The Restaurant",
        icon: Utensils,
        desc: "The Restaurant is Encore's primary fine-dining venue. It provides an elegant environment for multi-course meals and full-service dining.",
        listLabel: "Guests can enjoy:",
        list: ["Changing menus", "Multi-course meals", "Table service", "Regional cuisine", "Desserts", "Wine", "Destination-inspired dishes"],
        note: "It is the natural choice when you want a more traditional luxury dining experience."
    },
    {
        title: "Is Dining Open Seating?",
        icon: Star,
        desc: "Yes. Seabourn's dining concept emphasizes flexibility rather than assigned dining arrangements. Guests can generally choose when and with whom they want to dine, subject to availability.",
        listLabel: "This can be particularly appealing to:",
        list: ["Couples", "Solo travelers", "Friends", "Travelers with changing daily schedules"],
        note: "You don't have to structure your entire day around a fixed dining time."
    },
    {
        title: "The Colonnade",
        icon: Sun,
        desc: "The Colonnade provides a more casual dining environment. It is particularly useful when you want a relaxed breakfast or lunch without the formality of the main restaurant.",
        listLabel: "Depending on the meal period, offerings can include:",
        list: ["Breakfast", "Lunch", "Dinner", "Regional dishes", "Casual selections", "Buffet-style options"],
        note: "Perfect when you want a relaxed meal without formality."
    },
    {
        title: "In-Suite Dining",
        icon: Home,
        desc: "Encore's all-suite concept makes in-suite dining another attractive option. Guests can enjoy a meal or refreshments in the privacy of their suite.",
        listLabel: "This can be ideal when:",
        list: ["You want a quiet breakfast", "You return late from an excursion", "You want to enjoy your veranda", "You prefer a private meal", "You simply want a break from public spaces"],
        note: "Available 24 hours a day for ultimate luxury convenience."
    }
];


const destinationRegions = ["Mediterranean", "Northern Europe", "Scandinavia", "British Isles", "Western Europe", "Caribbean", "Other seasonal destinations"];

const destinations = [
    {
        icon: Landmark,
        title: "Mediterranean",
        subtitle: "Seabourn Encore Mediterranean Cruises",
        desc: "The Mediterranean is particularly well suited to Seabourn's luxury cruising style. Mediterranean itineraries can combine historic cities, coastal villages, cultural experiences, food and wine, and scenic cruising.",
        listLabel: "Depending on the itinerary, guests may visit:",
        listItems: ["Italy", "Greece", "Croatia", "France", "Spain", "Turkey"],
        best: "",
    },
    {
        icon: Snowflake,
        title: "Northern Europe",
        subtitle: "Seabourn Encore Northern Europe Cruises",
        desc: "Northern Europe provides a different style of luxury cruising. The region is particularly attractive during the warmer months.",
        listLabel: "Depending on the itinerary, guests may explore:",
        listItems: ["Scandinavia", "British Isles", "Northern European ports", "Fjords", "Baltic destinations"],
        best: "",
    },
    {
        icon: Anchor,
        title: "Caribbean",
        subtitle: "Seabourn Encore Caribbean Cruises",
        desc: "Caribbean itineraries provide warm-weather cruising and opportunities to explore islands and coastal destinations. Encore provides a more intimate alternative to the much larger ships that dominate many Caribbean routes.",
        listLabel: "Depending on the voyage, guests may experience:",
        listItems: ["Beaches", "Historic towns", "Local culture", "Island excursions", "Scenic cruising"],
        best: "",
    },
];

const bestForTraits = ["Luxury", "Personalized service", "Spacious suites", "Fine dining", "Smaller ships", "Relaxed surroundings", "Destination experiences", "Flexible dining", "Sophisticated atmosphere"];

const notFitList = ["Huge production shows", "Large water parks", "Dozens of restaurants", "Extensive children's facilities", "Large casinos", "Nightclubs", "Constant onboard activities", "Thousands of fellow passengers", "A resort-style cruise experience"];

const prosList = ["All-suite accommodations", "Many suites with private verandas", "Approximately 600 guests", "Multiple dining venues", "Flexible dining", "Personalized service", "Elegant public spaces", "Pool", "Spa", "Fitness facilities", "Destination enrichment", "Relaxed luxury atmosphere", "Strong choice for couples"];

const consList = ["Less entertainment than large cruise ships", "Limited family-focused amenities", "Fewer restaurants than mega-ships", "Premium pricing", "Not designed for travelers seeking a high-energy resort experience"];

const worthItems = ["An all-suite accommodation", "Personalized service", "Multiple dining choices", "A more intimate passenger environment", "Destination-focused travel", "A sophisticated onboard atmosphere"];

const suiteTips = [
    { title: "Start with the itinerary", text: "Your destination should influence your suite choice." },
    { title: "Consider a private veranda", text: "A veranda is particularly valuable on scenic itineraries." },
    { title: "Review the deck plan", text: "Check the location before booking." },
    { title: "Consider noise and traffic", text: "Travelers who prioritize quiet may want to avoid suites immediately beside busy public areas." },
    { title: "Don't automatically choose the largest suite", text: "A well-positioned Veranda Suite may provide better value than simply upgrading for additional square footage." },
];

const planningTips = [
    { title: "Choose your destination first", text: "The itinerary is the most important part of the trip." },
    { title: "Compare port times", text: "Look at how long the ship remains in each destination." },
    { title: "Consider sea days", text: "Some travelers enjoy relaxing onboard, while others prefer a port-intensive schedule." },
    { title: "Check the season", text: "Weather can significantly affect your experience." },
    { title: "Compare suite categories", text: "Look beyond the price and compare location, size and veranda." },
    { title: "Work with a luxury travel advisor", text: "A knowledgeable advisor can help compare itineraries, suite availability and current promotions." },
];

const relatedContent = [
    { icon: Ship, title: "Seabourn Cruises: The Complete Guide", text: "Explore the full Seabourn fleet, inclusions, dining and destinations.", url: "/seabourn-cruises/" },
    { icon: Ship, title: "Seabourn Ovation Ship Guide", text: "See how Encore's sister ship compares in suites and dining.", url: "/seabourn-cruises/ships/seabourn-ovation/" },
    { icon: Ship, title: "Seabourn Quest Ship Guide", text: "Compare Encore with another Seabourn ocean-focused ship.", url: "/seabourn-cruises/ships/seabourn-quest/" },
    { icon: Landmark, title: "Mediterranean Luxury Cruises", text: "Discover Seabourn's Mediterranean itineraries and top ports.", url: "/seabourn-cruises/destinations/mediterranean/" },
    { icon: Gem, title: "Luxury Cruise Suites: A Buyer's Guide", text: "Learn how to compare suite categories across luxury lines.", url: "/luxury-cruises/suites-guide/" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournEncoreGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeSuiteTab, setActiveSuiteTab] = useState(0);
    const [activeDestTab, setActiveDestTab] = useState(0);
    const [activePublicTab, setActivePublicTab] = useState("square");

    const ActiveDestIcon = destinations[activeDestTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Encore: Ship Guide, Suites & Dining</title>
                <meta name="title" content="Seabourn Encore Ship Guide: Suites, Dining & Itineraries" />
                <meta
                    name="description"
                    content="Explore Seabourn Encore, including suites, restaurants, dining, amenities, public areas, itineraries and who this luxury cruise ship is best suited for."
                />
                <script type="application/ld+json">{JSON.stringify(seabournEncoreSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ──────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Encore <br /> Ship Guide</h1>
                    <p>
                        Seabourn Encore is an intimate luxury ocean cruise ship designed for travelers who want the
                        comfort and service of a high-end cruise without the crowds associated with larger vessels.
                    </p>
                    {readMore && (
                        <>
                            <p>
                                With approximately 600 guests, all-suite accommodations, multiple dining venues, elegant
                                public spaces and personalized service, Encore offers a refined way to explore destinations
                                around the world.
                            </p>
                            <p>
                                The ship is especially appealing to travelers who value space, attentive service, excellent
                                food and a relaxed atmosphere over large-scale entertainment and resort-style attractions.
                            </p>
                            <p>
                                This complete Seabourn Encore guide covers its suites, restaurants, dining experience,
                                amenities, public areas, destinations, itineraries, pros and cons and who the ship is
                                best suited for.
                            </p>
                        </>
                    )}
                    <div className="Sbc-hero-readmore-wrapper">
                        <button className="Sbc-hero-readmore-btn" onClick={() => setReadMore(!readMore)}>
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Seabourn Encore Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Overview</span>
                        <h2 className="Sbc-h2">Seabourn Encore at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Encore</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceData.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row[0]}</td>
                                        <td data-label="Seabourn Encore">{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="Ssf-table-caption">
                        Note: Specific restaurants, onboard programming, amenities and itineraries may vary by sailing.
                    </p>
                </div>
            </section>

            {/* ── WHAT IS SEABOURN ENCORE ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Enc-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Short Version</span>
                                <h2 className="Sbc-h2">What Is Seabourn Encore?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Seabourn Encore is an all-suite luxury cruise ship designed around Seabourn's intimate
                                approach to ocean cruising.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "12px" }}>
                                Rather than competing with large ships through hundreds of restaurants, amusement
                                attractions or enormous entertainment venues, Encore focuses on the fundamentals of
                                luxury travel. With approximately 600 guests, Encore is large enough to offer a good
                                variety of restaurants and public spaces while remaining considerably more intimate than
                                mainstream cruise ships.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ marginTop: "20px", backgroundColor: "var(--bg-white)" }}>
                                <h4 className="Sbc-highlights-title">Encore focuses on the fundamentals of luxury travel:</h4>
                                <ul className="Sbc-highlights-list">
                                    {["Personalized service", "Spacious accommodations", "Fine dining", "Elegant surroundings", "Destination exploration", "Relaxed onboard experiences"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Encore Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE SEABOURN ENCORE ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-why-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Appeal</span>
                        <h2 className="Sbc-h2">Why Choose Seabourn Encore?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Encore is a strong option if you want a luxury cruise where the experience feels personal
                            rather than crowded. The ship is particularly attractive to travelers who prefer quality
                            over quantity.
                        </p>
                    </div>

                    <div className="Sbc-brand-highlights" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <h4 className="Sbc-highlights-title">Some of its biggest advantages include:</h4>
                        <ul className="Sbc-highlights-list">
                            {whyChooseList.map((item, idx) => (
                                <li key={idx}>
                                    <Check size={22} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>



            {/* ── SEABOURN ENCORE SUITES ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Enc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn Encore Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Every accommodation aboard Seabourn Encore is a suite, which is one of the ship's biggest
                            selling points. Instead of booking a traditional cruise cabin, guests have a more
                            spacious residential-style accommodation.
                        </p>
                    </div>

                    <div className="Sbc-suite-grid">
                        <div className="Sbc-suite-card">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Bed size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Seabourn Encore Suite Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Depending on the Category, Suites May Offer</h3>
                                <ul className="Sbc-suite-feature-list">
                                    {suiteFeatures.map((f, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-suite-strategy" style={{ marginTop: "22px" }}>
                                    <p>The best suite depends on your budget, itinerary and preferences.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-suite-card Sbc-suite-card-dark">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Gem size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Suite Categories Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Seabourn Encore Suite Categories</h3>
                                <p className="Sbc-p" style={{ marginBottom: "20px" }}>
                                    Encore offers several suite categories, ranging from entry-level accommodations
                                    to larger premium suites. Exact dimensions, layouts and amenities vary by
                                    category.
                                </p>
                                <ul className="Sbc-wintergarden-list">
                                    {suiteCategories.map((item, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── CTA 1 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">All-Suite Accommodations</span>
                    <h3 className="Sbc-cta-title">Find Your Perfect Suite on Seabourn Encore</h3>
                    <p className="Sbc-cta-text">
                        Every accommodation aboard Seabourn Encore is a suite. Let us help you compare categories and
                        find the layout that fits your itinerary and travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Suite Availability
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── BALCONIES ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-balconies">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Sun size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Encore Veranda Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Private Verandas</span>
                                <h2 className="Sbc-h2">Do Seabourn Encore Suites Have Balconies?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Many Seabourn Encore suites feature private verandas. A veranda gives guests their own
                                outdoor space for enjoying the scenery without needing to go to a public deck.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">It can be particularly valuable for:</h4>
                                <ul className="Sbc-highlights-list">
                                    {balconyList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p" style={{ marginTop: "16px" }}>
                                For many travelers, a well-located veranda suite can provide a better overall
                                experience than simply upgrading to the largest possible accommodation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST SUITE ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Enc-best-suite">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing a Category</span>
                        <h2 className="Sbc-h2">What Is the Best Suite <br /> on Seabourn Encore?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">There is no single best suite for everyone.</p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {bestSuiteCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="Sbc-suite-strategy" style={{ maxWidth: "820px", margin: "36px auto 0", backgroundColor:' var(--bg-white)' }}>
                        <p>
                            <strong>Tip:</strong> Choose the suite based on your itinerary and travel style rather
                            than square footage alone.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── SEABOURN ENCORE DINING ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Encore Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Dining is one of the central components of the Seabourn experience. Encore offers
                            multiple dining environments, allowing guests to move between fine dining, casual meals
                            and outdoor dining.
                        </p>
                        <p className="Sbc-intro" style={{ marginTop: "12px" }}>
                            Dining options can include: <strong>The Restaurant</strong>, <strong>The Colonnade</strong>, <strong>Earth & Ocean</strong>, <strong>The Patio</strong>, and <strong>In-suite dining</strong>. Operating schedules and specific offerings can vary by voyage.
                        </p>
                    </div>

                    <div className="Enc-dining-grid">
                        {diningCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Enc-dining-card" key={i}>
                                    <div className="Enc-dining-card-image">
                                        <div className="Enc-dining-icon-box">
                                            <Icon size={32} />
                                        </div>
                                    </div>
                                    <div className="Enc-dining-card-body">
                                        <h3 className="Enc-dining-card-title">{card.title}</h3>
                                        <p className="Enc-dining-card-text">{card.desc}</p>
                                        <div className="Enc-dining-features">
                                            <span className="Enc-dining-features-title">{card.listLabel}</span>
                                            <ul className="Enc-dining-list">
                                                {card.list.map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Enc-dining-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="Enc-dining-footer-note">{card.note}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── PUBLIC AREAS ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Enc-public-areas">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Spaces</span>
                        <h2 className="Sbc-h2">Seabourn Encore Public Areas</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Encore's public spaces are designed to create an atmosphere closer to an elegant private club or yacht than a large resort.
                        </p>
                        <p className="Sbc-intro" style={{ marginTop: "12px" }}>
                            The design encourages guests to slow down rather than constantly move between attractions.
                        </p>
                    </div>

                    <div className="Enc-public-tags">
                        {["Dining", "Relaxing", "Socializing", "Swimming", "Fitness", "Wellness", "Entertainment", "Scenic viewing"].map((tag, idx) => (
                            <span key={idx} className="Enc-public-tag">{tag}</span>
                        ))}
                    </div>

                    <div className="Enc-tabs-container">
                        <div className="Enc-tabs-list">
                            {[
                                { id: "square", label: "Seabourn Square", icon: Users },
                                { id: "pool", label: "Seabourn Encore Pool", icon: Waves },
                                { id: "spa", label: "Seabourn Encore Spa", icon: Sparkles },
                                { id: "fitness", label: "Fitness Center", icon: Dumbbell },
                                { id: "bars", label: "Bars & Lounges", icon: Wine },
                                { id: "entertainment", label: "Entertainment", icon: Music },
                                { id: "enrichment", label: "Enrichment", icon: GraduationCap }
                            ].map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        className={`Enc-tab-btn ${activePublicTab === tab.id ? "active" : ""}`}
                                        onClick={() => setActivePublicTab(tab.id)}
                                    >
                                        <Icon size={18} className="Enc-tab-btn-icon" />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="Enc-tab-panel">
                            {activePublicTab === "square" && (
                                <div className="Enc-tab-content">
                                    <div className="Enc-tab-body">
                                        <h3 className="Enc-tab-title">Seabourn Square</h3>
                                        <p className="Enc-tab-text">
                                            Seabourn Square is an important social and service area aboard the ship.
                                        </p>
                                        <p className="Enc-tab-text">
                                            Rather than feeling like a large cruise terminal, it has a more comfortable lounge-style atmosphere.
                                        </p>
                                        <div className="Enc-tab-list-box">
                                            <h4 className="Enc-tab-list-title">Guests can use the space to:</h4>
                                            <ul className="Enc-tab-list-ul">
                                                {["Relax", "Meet fellow travelers", "Get assistance", "Enjoy coffee", "Plan activities", "Socialize"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Enc-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="Enc-tab-footer-note">
                                            It is one of the areas that contributes to Encore's intimate atmosphere.
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "pool" && (
                                <div className="Enc-tab-content">
                                    <div className="Enc-tab-body">
                                        <h3 className="Enc-tab-title">Seabourn Encore Pool</h3>
                                        <p className="Enc-tab-text">
                                            Encore includes a pool area designed primarily for relaxation.
                                        </p>
                                        <p className="Enc-tab-text">
                                            Unlike large cruise ships with elaborate water attractions, the pool experience is more focused on quiet comfort and slow-paced leisure.
                                        </p>
                                        <div className="Enc-tab-list-box">
                                            <h4 className="Enc-tab-list-title">The pool experience is more focused on:</h4>
                                            <ul className="Enc-tab-list-ul">
                                                {["Swimming", "Sunbathing", "Reading", "Relaxing", "Enjoying a drink", "Spending time between excursions"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Enc-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="Enc-tab-footer-note">
                                            It fits the ship's overall quiet-luxury philosophy.
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "spa" && (
                                <div className="Enc-tab-content">
                                    <div className="Enc-tab-body">
                                        <h3 className="Enc-tab-title">Seabourn Encore Spa</h3>
                                        <p className="Enc-tab-text">
                                            The onboard spa provides a dedicated space for relaxation and wellness.
                                        </p>
                                        <p className="Enc-tab-text">
                                            A spa treatment can be particularly appealing after a busy day exploring a destination.
                                        </p>
                                        <div className="Enc-tab-list-box">
                                            <h4 className="Enc-tab-list-title">Services can include treatments designed around:</h4>
                                            <ul className="Enc-tab-list-ul">
                                                {["Massage", "Skincare", "Beauty", "Relaxation", "Wellness"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Enc-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "fitness" && (
                                <div className="Enc-tab-content">
                                    <div className="Enc-tab-body">
                                        <h3 className="Enc-tab-title">Seabourn Encore Fitness Center</h3>
                                        <p className="Enc-tab-text">
                                            Guests who want to stay active during their cruise can use the onboard fitness facilities.
                                        </p>
                                        <p className="Enc-tab-text">
                                            Fitness and wellness programming may also be available depending on the sailing.
                                        </p>
                                        <div className="Enc-tab-list-box">
                                            <h4 className="Enc-tab-list-title">The fitness center can support:</h4>
                                            <ul className="Enc-tab-list-ul">
                                                {["Cardio exercise", "Strength training", "Stretching", "General workouts"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Enc-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "bars" && (
                                <div className="Enc-tab-content">
                                    <div className="Enc-tab-body">
                                        <h3 className="Enc-tab-title">Seabourn Encore Bars and Lounges</h3>
                                        <p className="Enc-tab-text">
                                            Encore provides several places for guests to enjoy drinks and conversation.
                                        </p>
                                        <p className="Enc-tab-text">
                                            The ship is better suited to travelers who enjoy an evening cocktail and conversation than those looking for a high-energy nightlife scene.
                                        </p>
                                        <div className="Enc-tab-list-box">
                                            <h4 className="Enc-tab-list-title">The atmosphere tends to be:</h4>
                                            <ul className="Enc-tab-list-ul">
                                                {["Sophisticated", "Relaxed", "Social", "Quiet"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Enc-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "entertainment" && (
                                <div className="Enc-tab-content">
                                    <div className="Enc-tab-body">
                                        <h3 className="Enc-tab-title">Seabourn Encore Entertainment</h3>
                                        <p className="Enc-tab-text">
                                            Entertainment focuses on intimate performances and enrichment rather than huge production shows.
                                        </p>
                                        <p className="Enc-tab-text">
                                            This is one of the important differences between Seabourn and mainstream mega-ships.
                                        </p>
                                        <div className="Enc-tab-list-box">
                                            <h4 className="Enc-tab-list-title">Depending on the voyage, programming can include:</h4>
                                            <ul className="Enc-tab-list-ul">
                                                {["Live music", "Performances", "Guest speakers", "Cultural presentations", "Destination talks", "Evening entertainment"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Enc-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "enrichment" && (
                                <div className="Enc-tab-content">
                                    <div className="Enc-tab-body">
                                        <h3 className="Enc-tab-title">Seabourn Encore Enrichment</h3>
                                        <p className="Enc-tab-text">
                                            Destination enrichment helps travelers understand the places they are visiting.
                                        </p>
                                        <p className="Enc-tab-text">
                                            For travelers who enjoy learning while they travel, this can be an important part of the experience.
                                        </p>
                                        <div className="Enc-tab-list-box">
                                            <h4 className="Enc-tab-list-title">Programs may focus on:</h4>
                                            <ul className="Enc-tab-list-ul">
                                                {["Local culture", "History", "Art", "Geography", "Food", "Destination highlights"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Enc-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>


            {/* ── DESTINATIONS ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where Encore Sails</span>
                        <h2 className="Sbc-h2">Seabourn Encore Destinations</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Encore is designed for ocean cruising and can visit a wide range of destinations
                            depending on its seasonal schedule. Specific itineraries and ports change from season to
                            season.
                        </p>
                        <ul className="Sbc-dining-venues">
                            {destinationRegions.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav" style={{justifyContent: 'center'}}>
                            {destinations.map((dest, i) => {
                                const Icon = dest.icon;
                                return (
                                    <button
                                        key={i}
                                        className={`Sbc-dest-tab-btn ${activeDestTab === i ? "active" : ""}`}
                                        onClick={() => setActiveDestTab(i)}
                                    >
                                        <Icon size={18} />
                                        <span>{dest.title}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="Sbc-dest-tab-content">
                            <div className="Sbc-dest-image-placeholder">
                                <div className="Sbc-dest-placeholder-icon-wrapper">
                                    <ActiveDestIcon size={36} className="Sbc-dest-placeholder-icon" />
                                </div>
                                <span className="Sbc-dest-placeholder-text">{destinations[activeDestTab].title} Travel Image</span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Destination</span>
                                <h3 className="Sbc-dest-tab-title">{destinations[activeDestTab].subtitle}</h3>
                                <p className="Sbc-dest-tab-desc">{destinations[activeDestTab].desc}</p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">{destinations[activeDestTab].listLabel}</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {destinations[activeDestTab].listItems.map((item, j) => (
                                            <li key={j}>
                                                <Check size={16} strokeWidth={2.5} />
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

            
            {/* ── CTA 3 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Where Encore Sails</span>
                    <h3 className="Sbc-cta-title">Discover Seabourn Encore's Destinations</h3>
                    <p className="Sbc-cta-text">
                        From the Mediterranean to the Caribbean, let's find the itinerary that matches the way you
                        want to travel.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Itineraries
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHO IS ENCORE BEST FOR ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Enc-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Is Seabourn Encore Best For?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Seabourn Encore is particularly well suited to travelers who prioritize:</p>
                    </div>

                    <div className="Enc-bestfor-grid">
                        {[
                            { text: "Luxury", icon: Gem },
                            { text: "Personalized service", icon: Award },
                            { text: "Spacious suites", icon: Home },
                            { text: "Fine dining", icon: Utensils },
                            { text: "Smaller ships", icon: Ship },
                            { text: "Relaxed surroundings", icon: Waves },
                            { text: "Destination experiences", icon: Compass },
                            { text: "Flexible dining", icon: Wine },
                            { text: "Sophisticated atmosphere", icon: Star }
                        ].map((item, idx) => {
                            const IconComp = item.icon;
                            return (
                                <div key={idx} className="Enc-bestfor-card">
                                    <div className="Enc-bestfor-icon-wrapper">
                                        <IconComp size={20} className="Enc-bestfor-icon" />
                                    </div>
                                    <span className="Enc-bestfor-text">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── COUPLES & FAMILIES ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-couples">
                <div className="Sbc-container">

                    {/* ── Couples Row ── */}
                    <div className="Enc-audience-row">
                        <div className="Enc-audience-img-col">
                            <div className="Enc-audience-img-placeholder Enc-audience-img-rose">
                                <div className="Enc-audience-img-icon-wrap">
                                    <Heart size={44} />
                                </div>
                                <span className="Enc-audience-img-label">Couples at Sea</span>
                            </div>
                        </div>
                        <div className="Enc-audience-content-col">
                            <div className="Enc-audience-eyebrow">
                                <Heart size={14} />
                                Romantic Travel
                            </div>
                            <h3 className="Enc-audience-title">Is Seabourn Encore Good for Couples?</h3>
                            <p className="Enc-audience-desc">
                                <strong>Yes.</strong> Couples are one of the strongest audiences for Encore. The combination of all-suite accommodations, private verandas, fine dining, quiet lounges, spa facilities and destination-focused itineraries creates a natural environment for romantic vacations.
                            </p>
                            <div className="Enc-audience-tags">
                                {["Anniversaries", "Honeymoons", "Milestone birthdays", "Retirement celebrations", "Luxury getaways"].map((tag, i) => (
                                    <span key={i} className="Enc-audience-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Families Row (image right) ── */}
                    <div className="Enc-audience-row Enc-audience-row-reverse">
                        <div className="Enc-audience-img-col">
                            <div className="Enc-audience-img-placeholder Enc-audience-img-navy">
                                <div className="Enc-audience-img-icon-wrap">
                                    <Users size={44} />
                                </div>
                                <span className="Enc-audience-img-label">Family &amp; Multigenerational Travel</span>
                            </div>
                        </div>
                        <div className="Enc-audience-content-col">
                            <div className="Enc-audience-eyebrow">
                                <Users size={14} />
                                Family Travel
                            </div>
                            <h3 className="Enc-audience-title">Is Seabourn Encore Good for Families?</h3>
                            <p className="Enc-audience-desc">
                                Encore can accommodate families, particularly multigenerational travelers, but it is not a traditional family cruise ship. There are no large water parks, extensive children's clubs or massive family entertainment complexes.
                            </p>
                            <div className="Enc-audience-list-box">
                                <p className="Enc-audience-list-label">Families may enjoy Encore if they prioritize:</p>
                                <ul className="Enc-audience-list">
                                    {["Destination experiences", "Dining & culture", "Relaxation", "Multigenerational travel", "Luxury service"].map((item, i) => (
                                        <li key={i}>
                                            <span className="Enc-audience-dot"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ── First-Time Luxury Cruisers Row ── */}
                    <div className="Enc-audience-row">
                        <div className="Enc-audience-img-col">
                            <div className="Enc-audience-img-placeholder Enc-audience-img-gold">
                                <div className="Enc-audience-img-icon-wrap">
                                    <Award size={44} />
                                </div>
                                <span className="Enc-audience-img-label">First-Time Luxury Cruising</span>
                            </div>
                        </div>
                        <div className="Enc-audience-content-col">
                            <div className="Enc-audience-eyebrow">
                                <Award size={14} />
                                Luxury Debut
                            </div>
                            <h3 className="Enc-audience-title">Is Seabourn Encore Good for First-Time Luxury Cruisers?</h3>
                            <p className="Enc-audience-desc">
                                <strong>Yes.</strong> Encore can provide an excellent introduction to luxury cruising. It offers a clear contrast to mainstream cruising without requiring travelers to adjust to an extremely formal environment.
                            </p>
                            <div className="Enc-audience-list-box">
                                <p className="Enc-audience-list-label">Travelers experience:</p>
                                <ul className="Enc-audience-list">
                                    {[
                                        "All-suite accommodations",
                                        "Personalized service",
                                        "Fine dining",
                                        "Included beverages",
                                        "Flexible dining",
                                        "Elegant public areas",
                                        "Destination enrichment",
                                        "A smaller passenger environment"
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <span className="Enc-audience-dot"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── WHO SHOULD NOT CHOOSE ENCORE ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Enc-not-fit">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Not the Right Fit?</span>
                        <h2 className="Sbc-h2">Who Should Not Choose Seabourn Encore?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Encore may not be the right fit if you want the features below. If those features are priorities, a larger cruise line may be a better match.
                        </p>
                    </div>
                    <div className="Sbc-notfit-grid">
                        {notFitList.map((item, i) => (
                            <div className="Sbc-notfit-item-card" key={i}>
                                <div className="Sbc-notfit-x-wrapper">
                                    <X size={14} strokeWidth={2.5} />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VS OVATION ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-vs-ovation">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Sister Ships</span>
                        <h2 className="Sbc-h2">Seabourn Encore vs. <br /> Seabourn Ovation</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Encore and Ovation are sister ships with highly similar designs and onboard experiences.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Encore</th>
                                    <th>Seabourn Ovation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Feature">Ship type</td>
                                    <td data-label="Seabourn Encore">Luxury ocean ship</td>
                                    <td data-label="Seabourn Ovation">Luxury ocean ship</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Approx. guests</td>
                                    <td data-label="Seabourn Encore">600</td>
                                    <td data-label="Seabourn Ovation">600</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Accommodation</td>
                                    <td data-label="Seabourn Encore">All-suite</td>
                                    <td data-label="Seabourn Ovation">All-suite</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Private verandas</td>
                                    <td data-label="Seabourn Encore">Many categories</td>
                                    <td data-label="Seabourn Ovation">Many categories</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Dining</td>
                                    <td data-label="Seabourn Encore">Multiple venues</td>
                                    <td data-label="Seabourn Ovation">Multiple venues</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Atmosphere</td>
                                    <td data-label="Seabourn Encore">Intimate & sophisticated</td>
                                    <td data-label="Seabourn Ovation">Intimate & sophisticated</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Best deciding factor</td>
                                    <td data-label="Seabourn Encore">Itinerary & suite</td>
                                    <td data-label="Seabourn Ovation">Itinerary & suite</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="Ssf-table-caption">
                        For most travelers, the specific itinerary, departure date and available suite are more
                        important than choosing one sister ship over the other.
                    </p>
                </div>
            </section>

            {/* ── CTA – Sister Ships ─────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Sister Ships Comparison</span>
                    <h3 className="Sbc-cta-title">Not Sure Whether to Choose Encore or Ovation?</h3>
                    <p className="Sbc-cta-text">
                        Both ships offer nearly identical luxury experiences. Let us help you choose based on the
                        itinerary and departure that works best for your travel dates.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get Expert Guidance
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PROS & CONS ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Encore Pros and Cons</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Pros</h3>
                            <ul>
                                {prosList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">Cons</h3>
                            <ul>
                                {consList.map((item, i) => (
                                    <li key={i}>
                                        <X size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS ENCORE WORTH IT ────────────────────────────────────── */}
            <section className="Enc-worth-section" id="Enc-worth-it">
                <div className="Sbc-container">

                    {/* ── Verdict Banner ── */}
                    <div className="Enc-worth-banner">
                        <div className="Enc-worth-banner-inner">
                            <span className="Enc-worth-eyebrow">The Value Proposition</span>
                            <h2 className="Enc-worth-headline">Is Seabourn Encore Worth It?</h2>
                            <p className="Enc-worth-verdict">
                                For travelers who value space, service, food and a quieter luxury environment,
                                Seabourn Encore can be <strong>worth the premium.</strong>
                            </p>
                            <p className="Enc-worth-sub">
                                The value comes from the overall experience rather than the number of onboard attractions.
                            </p>
                        </div>
                    </div>

                    {/* ── Value Cards ── */}
                    <div className="Enc-worth-label">What You Receive</div>
                    <div className="Enc-worth-cards">
                        {worthItems.map((item, i) => (
                            <div className="Enc-worth-card" key={i}>
                                <div className="Enc-worth-card-num">{String(i + 1).padStart(2, "0")}</div>
                                <p className="Enc-worth-card-text">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Closing Statement ── */}
                    <div className="Enc-worth-closing">
                        <Gem size={20} className="Enc-worth-closing-icon" />
                        <p>If those priorities match your travel style, Encore can be a compelling luxury cruise option.</p>
                    </div>

                </div>
            </section>

            {/* ── TIPS FOR CHOOSING A SUITE ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-suite-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Planning Advice</span>
                        <h2 className="Sbc-h2">Tips for Choosing a Seabourn Encore Suite</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Enc-tips-grid">
                        {suiteTips.map((tip, i) => (
                            <div className="Enc-tip-card" key={i}>
                                <span className="Enc-tip-number">{i + 1}</span>
                                <div className="Enc-tip-body">
                                    <h4 className="Enc-tip-title">{tip.title}</h4>
                                    <p className="Enc-tip-text">{tip.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TIPS FOR PLANNING A CRUISE ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Enc-planning-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Planning Advice</span>
                        <h2 className="Sbc-h2">Tips for Planning a Seabourn Encore Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Enc-tips-grid">
                        {planningTips.map((tip, i) => (
                            <div className="Enc-tip-card" key={i}>
                                <span className="Enc-tip-number">{i + 1}</span>
                                <div className="Enc-tip-body">
                                    <h4 className="Enc-tip-title">{tip.title}</h4>
                                    <p className="Enc-tip-text">{tip.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────── */}
            <section className="Sbc-expert-section" id="Enc-expert-insight">
                <div className="Sbc-container">
                    <div className="Sbc-expert-heading">
                        <span className="Sbc-expert-eyebrow">Luxury Travel Expertise</span>
                        <h2 className="Sbc-expert-title">Angela Hughes Luxury Authority</h2>
                        <div className="Sbc-expert-divider"></div>
                    </div>

                    <div className="Sbc-expert-grid">
                        <div className="Sbc-expert-image-col">
                            <div className="Sbc-expert-portrait-wrap">
                                <img src={AboutImage} alt="Angela Hughes – Luxury Travel Expert" className="Sbc-expert-portrait" />
                                <div className="Sbc-expert-portrait-badge">
                                    <Star size={14} />
                                    <span>40+ Years Experience</span>
                                </div>
                            </div>

                            <div className="Sbc-expert-name-card">
                                <h3 className="Sbc-expert-name">Angela Hughes</h3>
                                <p className="Sbc-expert-role">CEO of Trips &amp; Ships Luxury Travel</p>
                                <div className="Sbc-expert-name-divider"></div>
                                <p className="Sbc-expert-countries">
                                    <MapPin size={14} />
                                    Traveled to more than 121 countries
                                </p>
                            </div>
                        </div>

                        <div className="Sbc-expert-content-col">
                            <div className="Sbc-expert-credentials-box">
                                <h4 className="Sbc-expert-credentials-title">
                                    <Award size={16} />
                                    Angela Hughes Authority Box
                                </h4>

                                <div className="Sbc-expert-credentials-grid">
                                    {[
                                        { icon: <Award size={16} />, label: "CEO of Trips & Ships Luxury Travel" },
                                        { icon: <Star size={16} />, label: "Over 40 years in the travel industry" },
                                        { icon: <MapPin size={16} />, label: "Traveled to more than 121 countries" },
                                        { icon: <Award size={16} />, label: "Founder of Luxury Travel University" },
                                        { icon: <Users size={16} />, label: "Global luxury travel speaker and trainer" },
                                        { icon: <Users size={16} />, label: "Weekly industry columnist" },
                                        { icon: <Users size={16} />, label: "Travel Leaders Network Advisory Board member" },
                                        { icon: <Award size={16} />, label: "2024 Luxury Travel Influencer of the Year" },
                                        { icon: <Star size={16} />, label: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse" },
                                        { icon: <Award size={16} />, label: "Featured in major travel publications globally" },
                                        { icon: <Ship size={16} />, label: "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel" },
                                    ].map((item, i) => (
                                        <div className="Sbc-expert-list-item" key={i}>
                                            <span className="Sbc-expert-list-icon">{item.icon}</span>
                                            <span className="Sbc-expert-list-label">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Enc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Encore</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">Everything travelers need to know before booking Seabourn Encore.</p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Enc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Encore a Good Ship?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Encore is an excellent choice for travelers who want a sophisticated, intimate
                            luxury cruise experience without the crowds of a large ship. Its all-suite
                            accommodations, multiple restaurants, elegant public spaces, flexible dining and
                            personalized service make it particularly attractive to travelers who prioritize comfort
                            and quality over onboard quantity.
                        </p>
                        <p className="Sbc-p">
                            It is especially well suited to couples, solo travelers, experienced luxury cruisers and
                            first-time luxury travelers.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If your ideal cruise includes excellent food,
                                spacious accommodations, attentive service and fascinating destinations, Seabourn
                                Encore deserves serious consideration.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Encore Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default SeabournEncoreGuide;