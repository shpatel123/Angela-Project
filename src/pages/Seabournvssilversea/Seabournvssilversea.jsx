import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    Minus,
    Plus,
    ArrowRight,
    Ship,
    Anchor,
    Wine,
    Gem,
    Heart,
    Compass,
    Utensils,
    Snowflake,
    Home,
    Users,
    Star,
    MapPin,
    Sparkles,
    Waves,
    Sun,
    Sailboat,
    Award,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournVsSilversea.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/#article",
            "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/"
            },
            "headline": "Seabourn vs. Silversea: Which Luxury Cruise Line Is Right for You?",
            "description": "Seabourn vs Silversea compared across ships, suites, dining, service, inclusions, expeditions and overall value. Find out which luxury cruise line is right for you.",
            "articleSection": [
                "Seabourn vs. Silversea Comparison",
                "Ships",
                "Suites",
                "Dining",
                "Service",
                "Inclusions",
                "Shore Excursions",
                "Expedition Cruises",
                "Antarctica",
                "Couples",
                "Solo Travelers",
                "Families",
                "Value",
                "Frequently Asked Questions"
            ],
            "keywords": [
                "Seabourn vs Silversea",
                "Seabourn or Silversea",
                "Seabourn vs Silversea cruises",
                "Seabourn vs Silversea comparison",
                "Seabourn vs Silversea expedition",
                "Seabourn vs Silversea suites",
                "Seabourn vs Silversea dining",
                "Seabourn vs Silversea service",
                "Seabourn vs Silversea inclusions",
                "Seabourn vs Silversea price",
                "Seabourn vs Silversea value",
                "Seabourn or Silversea for couples",
                "Seabourn vs Silversea Antarctica"
            ],
            "author": {
                "@type": "Person",
                "name": "Angela Hughes",
                "url": "https://www.tripsandships.com/about-angela-hughes/"
            },
            "publisher": {
                "@type": "TravelAgency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com/"
            }
        },
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/",
            "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/",
            "name": "Seabourn vs Silversea: Ships, Suites, Dining & Value",
            "description": "Seabourn vs Silversea compared across ships, suites, dining, service, inclusions, expeditions and overall value.",
            "isPartOf": {
                "@type": "WebSite",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com/"
            },
            "breadcrumb": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/#breadcrumb"
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/#faq",
            "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is Seabourn or Silversea better?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Neither is universally better. Seabourn is particularly appealing for relaxed, yacht-like luxury, while Silversea is especially strong for butler service, destination coverage and expedition options."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn more luxurious than Silversea?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both are positioned at the ultra-luxury end of cruising. The difference is primarily style rather than a simple luxury ranking."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Silversea have better service than Seabourn?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Silversea provides butler service in every suite, while Seabourn provides a personal suite host and attendant. Which feels better depends on whether you prefer formalized butler service or more relaxed personalized service."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn have butler service?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn provides personal suite hosts and attendants rather than a dedicated butler in every suite."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better food, Seabourn or Silversea?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both offer excellent dining. Seabourn is particularly known for its relaxed fine-dining experience, premium wines and spirits and complimentary caviar, while Silversea offers a broad destination-oriented culinary program."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn all-inclusive?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn markets its cruises as all-inclusive ultra-luxury experiences, with dining, premium beverages and many onboard services included. Specific inclusions can vary by voyage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Silversea all-inclusive?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Silversea's current all-inclusive offering includes food and beverages, Wi-Fi and personalized service, with additional benefits depending on fare and voyage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better suites?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both offer excellent suites. Seabourn emphasizes oceanfront accommodations and many private verandas, while Silversea distinguishes itself with butler service in every suite."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn have expedition cruises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Seabourn operates dedicated expedition ships including Seabourn Venture and Seabourn Pursuit."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Silversea have expedition cruises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Silversea operates a substantial expedition program covering destinations such as Antarctica, the Arctic and other remote regions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for Antarctica: Seabourn or Silversea?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both can be excellent. Travelers should compare the actual expedition ship, itinerary, number of Antarctic days, suite, included activities and price rather than choosing solely by brand."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better expedition ships?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both have purpose-built expedition ships. Seabourn Venture and Pursuit are particularly focused on an intimate, all-suite luxury expedition experience, while Silversea provides a broader range of expedition ships and itineraries."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn include expedition activities?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Many expedition experiences are included aboard Venture and Pursuit as part of Seabourn's Inclusive Expedition Experience, although the exact program varies by voyage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Silversea include expedition excursions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Silversea's current All-Inclusive Plus expedition fare includes expedition activities and landings. Specific fare conditions should be checked for the sailing being considered."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for couples?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both are excellent for couples. Seabourn may appeal more to couples seeking relaxed yacht-style luxury, while Silversea may suit couples who prioritize butler service and destination variety."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for solo travelers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both can work well for solo travelers. Compare single supplements, dining arrangements, itinerary and excursion opportunities for the specific voyage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for families?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Neither is primarily a family cruise line, but both can work well for affluent multigenerational groups. Suite configurations, connecting rooms and itinerary activity levels should be evaluated carefully."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn or Silversea more expensive?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There is no universal winner on price. Travelers should compare equivalent ships, suites, itineraries and inclusions because pricing changes significantly by sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I choose Seabourn or Silversea?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Choose Seabourn if you prefer relaxed yacht-like luxury and an intimate atmosphere. Choose Silversea if you prioritize butler service, global destination coverage and a broad expedition program."
                    }
                }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.tripsandships.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Seabourn Cruises",
                    "item": "https://www.tripsandships.com/seabourn-cruises/"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Seabourn vs. Silversea",
                    "item": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/"
                }
            ]
        }
    ]
}

/* ── FAQ accordion (reuses Sbc-faq-* classes) ─────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Is Seabourn or Silversea better?", a: "Neither is universally better. Seabourn is particularly appealing for relaxed, yacht-like luxury, while Silversea is especially strong for butler service, destination coverage and expedition options." },
        { q: "Is Seabourn more luxurious than Silversea?", a: "Both are positioned at the ultra-luxury end of cruising. The difference is primarily style rather than a simple luxury ranking." },
        { q: "Does Silversea have better service than Seabourn?", a: "Silversea provides butler service in every suite, while Seabourn provides a personal suite host and attendant. Which feels better depends on whether you prefer formalized butler service or more relaxed personalized service." },
        { q: "Does Seabourn have butler service?", a: "Seabourn provides personal suite hosts and attendants rather than a dedicated butler in every suite." },
        { q: "Which has better food, Seabourn or Silversea?", a: "Both offer excellent dining. Seabourn is particularly known for its relaxed fine-dining experience, premium wines and spirits and complimentary caviar, while Silversea offers a broad destination-oriented culinary program." },
        { q: "Is Seabourn all-inclusive?", a: "Seabourn markets its cruises as all-inclusive ultra-luxury experiences, with dining, premium beverages and many onboard services included. Specific inclusions can vary by voyage." },
        { q: "Is Silversea all-inclusive?", a: "Yes. Silversea's current all-inclusive offering includes food and beverages, Wi-Fi and personalized service, with additional benefits depending on fare and voyage." },
        { q: "Which has better suites?", a: "Both offer excellent suites. Seabourn emphasizes oceanfront accommodations and many private verandas, while Silversea distinguishes itself with butler service in every suite." },
        { q: "Does Seabourn have expedition cruises?", a: "Yes. Seabourn operates dedicated expedition ships including Seabourn Venture and Seabourn Pursuit." },
        { q: "Does Silversea have expedition cruises?", a: "Yes. Silversea operates a substantial expedition program covering destinations such as Antarctica, the Arctic and other remote regions." },
        { q: "Which is better for Antarctica: Seabourn or Silversea?", a: "Both can be excellent. Compare the actual expedition ship, itinerary, number of Antarctic days, suite, included activities and price rather than choosing solely by brand." },
        { q: "Which has better expedition ships?", a: "Both have purpose-built expedition ships. Seabourn Venture and Pursuit are particularly focused on an intimate, all-suite luxury expedition experience, while Silversea provides a broader range of expedition ships and itineraries." },
        { q: "Does Seabourn include expedition activities?", a: "Many expedition experiences are included aboard Venture and Pursuit as part of Seabourn's Inclusive Expedition Experience, although the exact program varies by voyage." },
        { q: "Does Silversea include expedition excursions?", a: "Silversea's current All-Inclusive Plus expedition fare includes expedition activities and landings. Specific fare conditions should be checked for the sailing being considered." },
        { q: "Which is better for couples?", a: "Both are excellent for couples. Seabourn may appeal more to couples seeking relaxed yacht-style luxury, while Silversea may suit couples who prioritize butler service and destination variety." },
        { q: "Which is better for solo travelers?", a: "Both can work well for solo travelers. Compare single supplements, dining arrangements, itinerary and excursion opportunities for the specific voyage." },
        { q: "Which is better for older travelers?", a: "Both offer excellent comfort and service. Travelers should pay particular attention to mobility requirements if choosing an expedition itinerary." },
        { q: "Which is better for families?", a: "Neither is primarily a family cruise line, but both can work well for affluent multigenerational groups. Suite configurations, connecting rooms and itinerary activity levels should be evaluated carefully." },
        { q: "Is Seabourn or Silversea more expensive?", a: "There is no universal winner on price. Compare equivalent ships, suites, itineraries and inclusions because pricing changes significantly by sailing." },
        { q: "Should I choose Seabourn or Silversea?", a: "Choose Seabourn if you prefer relaxed yacht-like luxury and an intimate atmosphere. Choose Silversea if you prioritize butler service, global destination coverage and a broad expedition program." },
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
const chooseSeabourn = [
    "Yacht-like atmosphere", "Relaxed luxury", "Spacious oceanfront suites", "Personalized service",
    "Complimentary premium wines and spirits", "Complimentary caviar", "Strong culinary experience",
    "Intimate ships", "A less formal atmosphere", "Luxury expedition cruising on Venture and Pursuit",
];

const chooseSilversea = [
    "Extensive destination coverage", "A large expedition portfolio", "Butler service in every suite",
    "Luxury expedition travel", "Strong onboard inclusions", "A highly destination-focused experience",
    "A broad selection of suite categories", "Classic ultra-luxury cruising",
];

const glanceRows = [
    ["Overall atmosphere", "Relaxed, yacht-like", "Refined, elegant"],
    ["Ship size", "Small", "Small to intimate"],
    ["Suites", "All oceanfront", "All-suite"],
    ["Private verandas", "Many suites", "Many suites"],
    ["Butler service", "Suite host/attendant", "Butler service in every suite"],
    ["Dining", "Excellent", "Excellent"],
    ["Premium beverages", "Included", "Included"],
    ["Caviar", "Complimentary", "Available depending on experience"],
    ["Wi-Fi", "Included packages", "Included"],
    ["Expedition cruising", "Strong", "Very strong"],
    ["Dedicated expedition fleet", "Yes", "Yes"],
    ["Zodiacs", "Expedition ships", "Expedition ships"],
    ["Destination focus", "Very strong", "Extremely strong"],
    ["Overall feel", "Casual ultra-luxury", "Classic ultra-luxury"],
    ["Best for", "Relaxed luxury + intimacy", "Luxury + global exploration"],
];

const antarcticaRows = [
    ["Expedition ships", "Excellent", "Excellent"],
    ["Luxury suites", "Excellent", "Excellent"],
    ["Butler service", "No dedicated butler in every suite", "Yes"],
    ["Zodiacs", "Yes", "Yes"],
    ["Kayaking", "Yes", "Yes"],
    ["Expedition team", "Yes", "Yes"],
    ["Wildlife", "Excellent", "Excellent"],
    ["Dining", "Excellent", "Excellent"],
    ["Overall atmosphere", "Relaxed", "Refined"],
    ["Itinerary breadth", "Strong", "Very strong"],
];

const seabournShipWins = ["Intimacy", "Yacht-like atmosphere", "Relaxed luxury", "Consistent small-ship feeling", "Spacious oceanfront accommodations"];
const silverseaShipWins = ["More fleet variety", "More ship choices", "Broader destination coverage", "More options between classic luxury and expedition cruising"];

const seabournSuiteBetter = ["Spacious oceanfront suites", "Relaxed design", "Large verandas", "Yacht-like atmosphere", "Expedition suites"];
const silverseaSuiteBetter = ["Butler service", "Greater suite-category variety", "Travelers who enjoy formal personalized service"];

const silverseaButlerWants = [
    "Formalized personalized service",
    "In-suite breakfast",
    "Concierge-style assistance",
    "Help with arrangements",
    "High-touch suite service"
];

const seabournHostWants = [
    "Personalized but understated service",
    "A relaxed atmosphere",
    "Fewer formalities",
    "Familiarity with the onboard team"
]; const generalDiningExpectations = [
    "Multiple dining venues",
    "High-quality ingredients",
    "Specialty restaurants",
    "Fine wines",
    "Premium beverages",
    "Destination-inspired cuisine"
];

const seabournDiningAppeal = [
    "Fine dining without excessive formality",
    "Flexible dining",
    "Premium wines",
    "Caviar",
    "Destination-inspired cuisine",
    "In-suite dining"
];

const silverseaDiningPhilosophy = [
    "Destination-inspired cuisine",
    "Specialty dining",
    "Fine wines",
    "Premium beverages",
    "In-suite dining",
    "Culinary experiences ashore"
];

const seabournFoodPrefer = ["Relaxed fine dining", "Caviar", "Flexible dining", "A yacht-like atmosphere"];
const silverseaFoodPrefer = ["A broad destination-oriented culinary program", "Specialty restaurants", "Highly personalized dining through butler service"];

const seabournServiceQualities = ["Warm", "Relaxed", "Personalized", "Less formal"];
const silverseaServiceQualities = ["More formal", "Highly attentive", "Personalized", "Concierge-oriented"];

const seabournIncludes = ["Dining", "Premium spirits", "Fine wines", "Champagne", "Wi-Fi", "In-suite dining", "Gratuities", "Entertainment", "Selected excursions or expedition experiences depending on voyage"];
const silverseaIncludes = ["Dining", "Premium beverages", "Wi-Fi", "Butler service", "Gratuities", "Expedition activities on expedition voyages", "Other onboard services"];

const seabournInclusionStands = ["Complimentary premium wines and spirits", "Complimentary caviar", "Strong dining program", "Included expedition experiences on applicable voyages", "Yacht-like service"];
const silverseaInclusionStands = ["Butler service", "Extensive all-inclusive model", "Expedition inclusions", "Strong destination services"];

const seabournExpeditionShips = ["Seabourn Venture", "Seabourn Pursuit"];
const silverseaExpeditionDestinations = ["Antarctica", "Arctic", "Galápagos", "Kimberley", "Iceland", "Greenland", "Remote Pacific", "South America"];

const seabournAntarcticaWant = ["Intimate expedition atmosphere", "Spacious suites", "Zodiacs", "Kayaks", "Strong expedition team", "Relaxed luxury", "All-suite accommodation"];
const silverseaAntarcticaWant = ["A broader selection of expedition ships", "More itinerary choices", "Butler service", "Extensive destination options", "Strong expedition infrastructure"];

const travelerGroups = [
    {
        icon: Heart, title: "Couples",
        seabourn: "Relaxed romance, yacht atmosphere, casual elegance, fine dining, small ships, personalized service.",
        silversea: "Butler service, formal luxury, destination immersion, extensive itineraries, more traditional ultra-luxury atmosphere.",
    },
    {
        icon: Users, title: "Solo Travelers",
        seabourn: "Intimate atmosphere that can make it easy to interact with other passengers.",
        silversea: "Small-ship environment and dining arrangements that can also provide social opportunities.",
    },
    {
        icon: Home, title: "Families",
        seabourn: "Older children, multigenerational groups, private family experiences, expedition-focused travel.",
        silversea: "Families wanting larger suite options, butler service, multigenerational luxury, expedition destinations.",
    },
    {
        icon: Star, title: "Older Travelers",
        seabourn: "Smaller ships and a relaxed environment can be appealing.",
        silversea: "Butler service can be particularly useful for travelers who appreciate additional assistance.",
    },
];

const lifestyleCards = [
    { icon: Sun, title: "Dress Code", text: "Seabourn generally emphasizes elegant, relaxed attire. Silversea also offers a more relaxed approach than traditional formal cruising, although evening expectations can vary by venue and itinerary." },
    { icon: Sparkles, title: "Entertainment", text: "Neither line is primarily about big-ship entertainment. Instead, expect live music, guest speakers, cultural programming, destination presentations, enrichment and small performances." },
    { icon: Waves, title: "Spa & Wellness", text: "Seabourn offers spa and wellness facilities alongside fitness and relaxation spaces. Silversea operates the Otium Spa concept, combining spa treatments, relaxation and wellness." },
    { icon: Sailboat, title: "Wi-Fi", text: "Both provide Wi-Fi as part of their current onboard offerings. Seabourn's premium suites can receive unlimited internet packages, while Silversea includes Wi-Fi within its all-inclusive offering." },
];

const seabournValueIncludes = ["Dining", "Premium beverages", "Fine wines", "Champagne", "Caviar", "Wi-Fi", "Personalized service", "In-suite dining", "Selected expedition experiences"];
const silverseaValueIncludes = ["Food", "Beverages", "Wi-Fi", "Butler service", "Gratuities", "Personalized service", "Expedition activities and landings on expedition voyages (All-Inclusive Plus)"];

const seabournPros = ["Yacht-like atmosphere", "Intimate ships", "Oceanfront suites", "Strong dining", "Premium beverages included", "Complimentary caviar", "Personalized service", "Excellent expedition ships", "Strong wildlife experiences"];
const seabournCons = ["Smaller fleet", "Fewer ship choices", "Less formal service if you prefer traditional luxury", "Expedition itineraries are limited to the dedicated expedition ships", "Not designed for travelers seeking big-ship entertainment"];
const silverseaPros = ["Butler service in every suite", "Extensive expedition program", "Broad destination coverage", "Strong all-inclusive proposition", "Excellent dining", "Small-ship atmosphere", "Strong destination immersion"];
const silverseaCons = ["Can feel more formal", "Large fleet means experiences vary considerably by ship", "The best itinerary can come at a significant premium", "Comparing ships requires more research"];

const whoSeabourn = ["Relaxed luxury", "Yacht-like atmosphere", "Small ships", "Spacious suites", "Excellent dining", "Premium drinks included", "Caviar", "Personalized but understated service", "Luxury expedition cruising"];
const whoSilversea = ["Butler service", "Global destination coverage", "More expedition choices", "Highly personalized service", "Extensive suite options", "Strong all-inclusive value", "A refined luxury atmosphere"];

const decisionCards = [
    { say: "I want a relaxed, intimate, yacht-like luxury experience.", label: "Choose", brand: "Seabourn" },
    { say: "I want highly personalized service and the broadest possible destination and expedition choices.", label: "Choose", brand: "Silversea" },
    { say: "Your priority is atmosphere.", label: "Choose", brand: "Seabourn" },
    { say: "Your priority is itinerary breadth.", label: "Choose", brand: "Silversea" },
    { say: "You love relaxed fine dining and premium beverages.", label: "Choose", brand: "Seabourn" },
    { say: "You particularly value butler service.", label: "Choose", brand: "Silversea" },
];

/* ── Reusable compare card (Sbc-compare-* classes) ────────────────── */
function CompareCard({ heading, sub, items, alt, placeholderIcon: PlaceholderIcon, placeholderText }) {
    return (
        <div className={`Sbc-compare-card${alt ? " Sbc-compare-alt" : ""}`}>
            {PlaceholderIcon && (
                <div className="Sbc-dining-image-placeholder Sse-card-icon-wrap" style={{ borderRadius: "4px" }}>
                    <div className="Sbc-dining-placeholder-icon-wrapper">
                        <PlaceholderIcon size={32} className="Sbc-dining-placeholder-icon" />
                    </div>
                    <span className="Sbc-dining-placeholder-text">{placeholderText} Image Placeholder</span>
                </div>
            )}
            <h3 className="Sbc-compare-heading">{heading}</h3>
            {sub && <p className="Sbc-compare-sub">{sub}</p>}
            <ul className="Sbc-compare-list">
                {items.map((item, i) => (
                    <li key={i}>
                        <Check size={16} strokeWidth={2.5} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ── Comparison table (reusing Ssf-table classes) ─────────────────── */
function CompareTable({ rows }) {
    return (
        <div className="Ssf-table-wrap">
            <table className="Ssf-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Seabourn</th>
                        <th>Silversea</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const SeabournVsSilversea = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn vs Silversea: Ships, Suites, Dining & Value</title>
                <meta
                    name="description"
                    content="Seabourn vs Silversea compared across ships, suites, dining, service, inclusions, expeditions and overall value. Find out which luxury cruise line is right for you."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ──────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn vs. Silversea <br /> Which Luxury Cruise Line Is Right for You?</h1>
                    <p>
                        Seabourn and Silversea are two of the most established names in ultra-luxury
                        cruising, and choosing between them can be surprisingly difficult.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Both offer intimate ships, luxury accommodations, high levels of service, fine dining,
                                premium beverages and a strong emphasis on destination-focused travel.
                            </p>
                            <p>
                                But the experiences are not identical.
                            </p>

                            <p>
                                Seabourn tends to emphasize a relaxed, yacht-like atmosphere, spacious oceanfront
                                suites and highly personalized service. Silversea combines luxury cruising with a
                                particularly strong destination and expedition program, including a substantial
                                dedicated expedition fleet.
                            </p>
                            <p>
                                Both lines can be excellent choices. The better option depends on what you value most.
                            </p>
                            <p>
                                This guide compares Seabourn vs. Silversea across ships, suites, dining, service,
                                inclusions, excursions, expedition cruising and overall value so you can decide
                                which better matches your travel style.
                            </p>
                        </>
                    )}

                    <div className="Sbc-hero-readmore-wrapper">
                        <button
                            className="Sbc-hero-readmore-btn"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Luxury Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-quick-answer">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Answer</span>
                        <h2 className="Sbc-h2">Is Seabourn or Silversea Better?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            There is no universal winner. Both lines can be excellent choices — the
                            better option depends on what you value most.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Choose Seabourn if you prioritize"
                            items={chooseSeabourn}
                            placeholderIcon={Sailboat}
                            placeholderText="Seabourn Cruises"
                        />
                        <CompareCard
                            heading="Choose Silversea if you prioritize"
                            items={chooseSilversea}
                            alt
                            placeholderIcon={Ship}
                            placeholderText="Silversea Cruises"
                        />
                    </div>

                    <div className="Sbc-compare-key">
                        <p>
                            For traditional luxury cruising, Seabourn and Silversea are extremely close
                            competitors. For expedition cruising, the choice becomes more dependent on
                            the specific ship and itinerary.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-at-a-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Side-by-Side</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <CompareTable rows={glanceRows} />
                </div>
            </section>

            {/* ── BIGGEST DIFFERENCE ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-biggest-difference">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Core Distinction</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea <br /> The Biggest Difference</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The biggest difference isn't necessarily the quality of the ships. It's the
                            personality of the experience.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon"><Sailboat size={22} /></div>
                            <h3 className="Sbc-card-title">Seabourn: A Private Yacht Experience</h3>
                            <p className="Sbc-card-text">
                                Seabourn describes its ships as having a private yacht-like atmosphere
                                and emphasizes intimate ships, oceanfront suites, personalized service,
                                premium beverages and complimentary caviar.
                            </p>
                        </div>
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon"><Compass size={22} /></div>
                            <h3 className="Sbc-card-title">Silversea: A Global Exploration Experience</h3>
                            <p className="Sbc-card-text">
                                Silversea places enormous emphasis on destination immersion, all-inclusive
                                luxury and personalized service. Its current all-inclusive offering
                                includes food and beverages, Wi-Fi and onboard services, while its
                                suites receive butler service.
                            </p>
                        </div>
                    </div>

                    <div className="Sbc-compare-key" style={{ marginTop: "40px" }}>
                        <p>There is considerable overlap, but that distinction can help when making the final decision.</p>
                    </div>
                </div>
            </section>

            {/* ── SHIPS ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Fleets</span>
                        <h2 className="Sbc-h2">Seabourn Ships vs. Silversea Ships</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Ship design matters considerably when comparing these two lines.
                        </p>
                    </div>

                    <div className="Sbc-fleet-columns">
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Seabourn Ocean Ships Emphasize</div>
                            <ul>
                                {["Small-ship cruising", "Oceanfront suites", "Personalized service", "Premium dining", "Relaxed public spaces", "Yacht-like atmosphere"].map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Seabourn Expedition Ships</div>
                            <ul>
                                {seabournExpeditionShips.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="Sbc-p" style={{ marginBottom: "40px" }}>
                        These are purpose-built expedition ships designed for remote environments. They
                        feature Polar Class 6 capabilities, 24 Zodiacs and kayaks, and a dedicated
                        expedition team.
                    </p>

                    <div className="Sbc-fleet-columns" style={{ marginBottom: "8px" }}>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Silversea's Fleet Covers</div>
                            <ul>
                                {["Mediterranean cruising", "Caribbean", "Northern Europe", "Asia", "World cruises", "South America", "Antarctica", "Arctic exploration", "Remote expedition destinations"].map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Silversea Expedition Ships Include</div>
                            <ul>
                                {["Silver Cloud", "Silver Wind", "Silver Endeavour", "Silver Origin", "Silver Sea"].map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="Sbc-p">
                        Silver Nova-class ships are part of its newer luxury ocean fleet rather than
                        expedition vessels. The exact ship matters significantly when comparing
                        Silversea with Seabourn.
                    </p>
                </div>
            </section>

            {/* ── CTA 1 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Compare the Fleet</span>
                    <h3 className="Sbc-cta-title">Find the Perfect Luxury Ship for Your Voyage</h3>
                    <p className="Sbc-cta-text">
                        Choosing between Seabourn's yacht-like style and Silversea's extensive destination programs is easier with a custom comparison. Let's design your ideal cruise experience.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Ships & Fares
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHICH HAS BETTER SHIPS ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Svs-better-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison</span>
                        <h2 className="Sbc-h2">Which Has the Better Ships?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">This depends on what you mean by "better."</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn Wins If You Want"
                            items={seabournShipWins}
                            placeholderIcon={Sailboat}
                            placeholderText="Seabourn Fleet"
                        />
                        <CompareCard
                            heading="Silversea Wins If You Want"
                            items={silverseaShipWins}
                            alt
                            placeholderIcon={Ship}
                            placeholderText="Silversea Fleet"
                        />
                    </div>
                    <div className="Sbc-compare-key">
                        <p>For atmosphere, Seabourn has a particularly strong identity. For fleet breadth, Silversea has the advantage.</p>
                    </div>
                </div>
            </section>

            {/* ── SUITES OVERVIEW ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both cruise lines put significant emphasis on suite accommodation.
                        </p>
                        <p className="Sbc-intro" style={{ marginTop: "12px" }}>
                            Seabourn's ships offer oceanfront suites, with most featuring private verandas. Its suite program includes Oceanview, Veranda, Penthouse and premium suite categories. Silversea is similarly built around suite accommodation. But there is an important difference in service.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── BUTLER VS SUITE SERVICE ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Svs-suite-service">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Suite Service Models</span>
                        <h2 className="Sbc-h2">Silversea Butler Service <br /> vs. Seabourn Suite Service</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Silversea provides butler service in every suite category. Seabourn provides a personal suite host and attendant for every suite. These are both high-touch service models, but they feel somewhat different.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Silversea Butler Service"
                            sub="The dedicated butler model can appeal to travelers who want:"
                            items={silverseaButlerWants}
                            placeholderIcon={Users}
                            placeholderText="Silversea Butler Service"
                        />
                        <CompareCard
                            heading="Seabourn Suite Service"
                            sub="The suite host and attendant approach can appeal to travelers who prefer:"
                            items={seabournHostWants}
                            alt
                            placeholderIcon={Heart}
                            placeholderText="Seabourn Suite Service"
                        />
                    </div>
                </div>
            </section>

            {/* ── WHICH HAS BETTER SUITES ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Svs-better-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison</span>
                        <h2 className="Sbc-h2">Which Has Better Suites?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">This is very close.</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn May Be Better For"
                            items={seabournSuiteBetter}
                        />
                        <CompareCard
                            heading="Silversea May Be Better For"
                            items={silverseaSuiteBetter}
                            alt
                        />
                    </div>

                    <div className="Sbc-compare-key" style={{ textAlign: 'center' }}>
                        <p>If suite service is your top priority, Silversea's butler model is a meaningful differentiator.</p>
                        <p>If you care more about the atmosphere and physical design of the suite, Seabourn deserves a very close look.</p>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Suite Selection</span>
                    <h3 className="Sbc-cta-title">Customize Your Suite Accommodations</h3>
                    <p className="Sbc-cta-text">
                        From dedicated butlers to personal suite hosts, we'll help you secure the ideal luxury suite category, amenities, and layout that suits your travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan Your Luxury Suite
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── DINING ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Experience</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both brands take dining seriously.
                        </p>
                    </div>

                    <div className="Sbc-brand-highlights" style={{ marginBottom: "48px" }}>
                        <h4 className="Sbc-highlights-title">You should expect:</h4>
                        <ul className="Sbc-highlights-list">
                            {generalDiningExpectations.map((item, idx) => (
                                <li key={idx}>
                                    <Check size={16} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-section-header" style={{ marginBottom: "36px" }}>
                        <p className="Sbc-intro">
                            But there are differences in style.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid" style={{ marginBottom: "56px" }}>
                        <CompareCard
                            heading="Seabourn Dining"
                            sub="Seabourn emphasizes restaurant-quality dining and a relaxed approach. Its all-inclusive proposition includes complimentary dining venues and premium beverages. Seabourn's culinary experience is particularly appealing to travelers who enjoy:"
                            items={seabournDiningAppeal}
                            placeholderIcon={Utensils}
                            placeholderText="Seabourn Dining"
                        />
                        <CompareCard
                            heading="Silversea Dining"
                            sub="Silversea also places a major emphasis on culinary experiences. Its all-inclusive offering includes food and beverages, while individual ships offer multiple dining concepts. Silversea's culinary philosophy tends to emphasize:"
                            items={silverseaDiningPhilosophy}
                            alt
                            placeholderIcon={Wine}
                            placeholderText="Silversea Dining"
                        />
                    </div>

                </div>
            </section>

            {/* ── WHICH HAS BETTER FOOD ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Svs-better-food">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison</span>
                        <h2 className="Sbc-h2">Which Has Better Food?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">This is one category where personal preference matters more than a clear winner.</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Choose Seabourn if you prefer:"
                            items={seabournFoodPrefer}
                        />
                        <CompareCard
                            heading="Choose Silversea if you prefer:"
                            items={silverseaFoodPrefer}
                            alt
                        />
                    </div>

                    <div className="Sbc-compare-key" style={{ textAlign: "center" }}>
                        <p>Both are excellent choices for food-focused travelers.</p>
                    </div>
                </div>
            </section>

            {/* ── SERVICE ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-service">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Service</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea Service</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Service is one of the reasons travelers choose either line. Both operate at
                            the ultra-luxury end of cruising.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard heading="Seabourn Service" sub="Intuitive and personalized" items={seabournServiceQualities} />
                        <CompareCard heading="Silversea Service" sub="Personalized with butler service" items={silverseaServiceQualities} alt />
                    </div>

                    <div className="Sbc-compare-key">
                        <p>If you want warm, relaxed, yacht-style service, Seabourn may be the better fit.</p>
                        <p>If you want formal, highly structured personalized service, Silversea may have the edge. Neither is a poor choice for service quality — the deciding factor is your preferred style.</p>
                    </div>
                </div>
            </section>

            {/* ── INCLUSIONS ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">What's Included</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea Inclusions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both brands operate with extensive all-inclusive offerings, but the exact
                            inclusions vary by fare, itinerary and ship.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn Commonly Includes"
                            items={seabournIncludes}
                            placeholderIcon={Gem}
                            placeholderText="Seabourn Inclusions"
                        />
                        <CompareCard
                            heading="Silversea Commonly Includes"
                            items={silverseaIncludes}
                            alt
                            placeholderIcon={Sparkles}
                            placeholderText="Silversea Inclusions"
                        />
                    </div>
                    <p className="Sbc-p" style={{ marginTop: "32px" }}>
                        Seabourn's expedition ships specifically include a variety of expedition and
                        shore experiences as part of the Inclusive Seabourn Expedition Experience.
                        Silversea's current All-Inclusive Plus offering specifically states that
                        expedition voyages include landings and shore excursions, alongside food,
                        beverages, personalized service, expedition gear and other benefits.
                    </p>
                </div>
            </section>

            {/* ── CTA 3 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Ultra-Luxury Inclusions</span>
                    <h3 className="Sbc-cta-title">Maximize Your Onboard Benefits</h3>
                    <p className="Sbc-cta-text">
                        Compare premium wine inclusions, butler options, and fine dining benefits. We'll help you parse the fares to find the most value-rich option for your voyage.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Inclusions
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHICH HAS BETTER INCLUSIONS ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Svs-better-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison</span>
                        <h2 className="Sbc-h2">Which Has Better Inclusions?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">This is extremely close.</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn Stands Out For"
                            items={seabournInclusionStands}
                        />
                        <CompareCard
                            heading="Silversea Stands Out For"
                            items={silverseaInclusionStands}
                            alt
                        />
                    </div>

                    <div className="Sbc-compare-key">
                        <p>The better value depends on what you actually use. A traveler who drinks premium spirits and enjoys caviar may find Seabourn's inclusions particularly attractive.</p>
                        <p>A traveler who values daily butler service may find Silversea more compelling.</p>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">On Land</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea Shore Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both cruise lines offer extensive destination experiences, but the
                            philosophy differs slightly. The best comparison should be made itinerary by
                            itinerary — a particular Seabourn sailing may have a better excursion
                            selection for you than a Silversea sailing, even if the opposite is true
                            elsewhere.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon"><Compass size={22} /></div>
                            <h3 className="Sbc-card-title">Seabourn Excursions</h3>
                            <p className="Sbc-card-text">
                                Excursions include cultural tours, food and wine, sightseeing, active
                                excursions, Ventures by Seabourn and expedition activities. Ventures by
                                Seabourn is particularly relevant for active travelers, emphasizing
                                nature, adventure, wildlife, hiking, active exploration and unique
                                destination access.
                            </p>
                        </div>
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon"><Anchor size={22} /></div>
                            <h3 className="Sbc-card-title">Silversea Excursions</h3>
                            <p className="Sbc-card-text">
                                Silversea places strong emphasis on destination immersion and offers a
                                broad catalog of shore experiences. The difference is less about one
                                company having excursions and the other not — instead, ask which cruise
                                has the better experiences at the destinations you actually want to visit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANTARCTICA ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-antarctica">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Antarctica</span>
                        <h2 className="Sbc-h2">Which Is Better for Antarctica?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both can be excellent. For Antarctica, the specific itinerary should be more
                            important than the brand name.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Choose Seabourn If You Want"
                            items={seabournAntarcticaWant}
                            placeholderIcon={Snowflake}
                            placeholderText="Seabourn Antarctica"
                        />
                        <CompareCard
                            heading="Choose Silversea If You Want"
                            items={silverseaAntarcticaWant}
                            alt
                            placeholderIcon={Compass}
                            placeholderText="Silversea Antarctica"
                        />
                    </div>

                    <div className="Sbc-compare-key" style={{ marginBottom: "48px" }}>
                        <p>
                            Compare: number of Antarctic days, Peninsula coverage, South Shetland
                            Islands, expedition activities, ship size, suite, price and included
                            experiences.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── EXPEDITION CRUISES ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Remote Destinations</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea Expedition Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is where the comparison becomes particularly interesting. Both
                            companies have dedicated expedition programs.
                        </p>
                    </div>

                    <div className="Sbc-fleet-columns">
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Seabourn Expedition Ships Feature</div>
                            <ul>
                                {["Polar Class 6 standards", "24 Zodiacs", "Kayaks", "Dedicated expedition teams", "Oceanfront suites", "Expedition Lounge", "Remote destination capabilities"].map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Silversea's Expedition Portfolio Covers</div>
                            <ul>
                                {silverseaExpeditionDestinations.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="Sbc-p">
                        Silversea has a larger and more varied expedition operation, with ships designed
                        to combine luxury accommodations with expedition operations.
                    </p>
                </div>
            </section>

            {/* ── CTA 4 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Polar Expeditions</span>
                    <h3 className="Sbc-cta-title">Plan Your Antarctic Adventure</h3>
                    <p className="Sbc-cta-text">
                        Ready to explore Antarctica? Compare Seabourn and Silversea's expedition programs, landings, Zodiac outings, and luxury itineraries with a specialist.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Expedition Cruises
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── ANTARCTICA MATRIX ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Svs-antarctica-matrix">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison Matrix</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea for Antarctica</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <CompareTable rows={antarcticaRows} />
                </div>
            </section>

            {/* ── TRAVELER TYPES ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-traveler-types">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Who It Suits</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea by <br /> Traveler Type</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both lines can work well for couples, solo travelers, families and older
                            travelers. For a honeymoon or anniversary, compare the specific ship and
                            itinerary rather than choosing solely by brand.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {travelerGroups.map((g, i) => {
                            const Icon = g.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                        <div className="Sbc-dining-placeholder-icon-wrapper">
                                            <Icon size={32} className="Sbc-dining-placeholder-icon" />
                                        </div>
                                        <span className="Sbc-dining-placeholder-text">{g.title} Image Placeholder</span>
                                    </div>
                                    <div className="Sbc-card-title-row" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                                        <div className="Sbc-card-icon" style={{ margin: 0 }}><Icon size={22} /></div>
                                        <h3 className="Sbc-card-title" style={{ margin: 0 }}>{g.title}</h3>
                                    </div>
                                    <p className="Sbc-card-text"><strong>Seabourn:</strong> {g.seabourn}</p>
                                    <p className="Sbc-card-text" style={{ marginTop: "10px" }}><strong>Silversea:</strong> {g.silversea}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* ── LIFESTYLE (Dress Code / Entertainment / Spa / Wi-Fi) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-lifestyle">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Life</span>
                        <h2 className="Sbc-h2">Dress Code, Entertainment, Wellness &amp; Wi-Fi</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both have moved away from the extremely formal cruising culture of previous
                            generations, and neither is primarily about big-ship entertainment.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {lifestyleCards.map((c, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon"><c.icon size={22} /></div>
                                <h3 className="Sbc-card-title">{c.title}</h3>
                                <p className="Sbc-card-text">{c.text}</p>
                            </div>
                        ))}
                    </div>
                    <p className="Sbc-p" style={{ marginTop: "32px" }}>
                        Travelers should always review the current dress guidelines for their sailing.
                        If wellness is central to your trip, compare the specific ship, because
                        facilities vary. For expedition travel, remember that remote destinations can
                        naturally affect connectivity.
                    </p>
                </div>
            </section>

            {/* ── ATMOSPHERE ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-atmosphere">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Mood Onboard</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea Atmosphere</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">This is one of the easiest ways to understand the difference. Neither is objectively better.</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn"
                            sub="Private yacht + luxury resort + relaxed social atmosphere"
                            items={["Casual", "Sophisticated", "Intimate", "Relaxed"]}
                            placeholderIcon={Waves}
                            placeholderText="Seabourn Atmosphere"
                        />
                        <CompareCard
                            heading="Silversea"
                            sub="Private yacht + European luxury hotel + global expedition"
                            items={["Elegant", "Refined", "Personalized", "Destination-focused"]}
                            alt
                            placeholderIcon={Star}
                            placeholderText="Silversea Atmosphere"
                        />
                    </div>
                </div>
            </section>

            {/* ── CTA 5 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Tailor-Made Cruising</span>
                    <h3 className="Sbc-cta-title">Design Your Ultimate Yacht Voyage</h3>
                    <p className="Sbc-cta-text">
                        Whether you seek a casual, yacht-like atmosphere or refined European elegance, our cruise specialists will align your preferences with the perfect voyage.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan Your Yacht Cruise
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── VALUE ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-value">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Cost & Value</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea Value</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The biggest mistake is comparing only the headline cruise fare. Instead,
                            compare cruise fare + included services + suite + itinerary + excursion value.
                            A slightly more expensive cruise can actually be better value if it includes
                            experiences you would otherwise purchase separately.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard heading="What Does Seabourn Value Include?" items={seabournValueIncludes} />
                        <CompareCard heading="What Does Silversea Value Include?" items={silverseaValueIncludes} alt />
                    </div>

                    <div className="Sbc-compare-key">
                        <p>
                            Seabourn describes its product as all-inclusive ultra-luxury cruising, while
                            Silversea's all-inclusive offering centers on food, beverages, Wi-Fi and
                            personalized service.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── EXPENSIVE ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Svs-expensive">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Pricing Comparison</span>
                        <h2 className="Sbc-h2">Which Is More Expensive: <br /> Seabourn or Silversea?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Svs-price-grid">
                        <div className="Svs-price-content">
                            <p className="Svs-price-lead">
                                There isn't a reliable universal answer.
                            </p>

                            <div className="Svs-price-factors-card">
                                <h3 className="Svs-price-factors-title">Prices depend on:</h3>
                                <ul className="Svs-price-list">
                                    {[
                                        "Ship",
                                        "Suite",
                                        "Destination",
                                        "Sailing date",
                                        "Cruise length",
                                        "Season",
                                        "Demand",
                                        "Included benefits"
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={16} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Svs-price-desc">
                                A Seabourn sailing can be more expensive than a comparable Silversea itinerary in one market and less expensive in another.
                            </p>

                            <div className="Svs-price-callout">
                                <p className="Svs-price-callout-text">
                                    <strong>Compare like-for-like itineraries</strong> rather than brand averages.
                                </p>
                            </div>
                        </div>

                        <div className="Svs-price-image-wrapper">
                            <div className="Svs-price-image-placeholder">
                                <div className="Svs-price-icon-wrapper">
                                    <Ship size={40} />
                                </div>
                                <span className="Svs-price-text">Price Comparison Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS & CONS ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weigh It Up</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea: Pros and Cons</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Svs-proscons-block">
                        <div className="Svs-brand-label"><span>Seabourn</span></div>
                        <div className="Sbc-proscons-grid">
                            <div className="Sbc-proscons-card Sbc-pros">
                                <h3 className="Sbc-proscons-title">Seabourn Pros</h3>
                                <ul>
                                    {seabournPros.map((s, i) => (
                                        <li key={i}><Check size={16} strokeWidth={2.5} /><span>{s}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-proscons-card Sbc-cons">
                                <h3 className="Sbc-proscons-title">Seabourn Cons</h3>
                                <ul>
                                    {seabournCons.map((s, i) => (
                                        <li key={i}><Minus size={16} strokeWidth={2.5} /><span>{s}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="Svs-proscons-block">
                        <div className="Svs-brand-label"><span>Silversea</span></div>
                        <div className="Sbc-proscons-grid">
                            <div className="Sbc-proscons-card Sbc-pros">
                                <h3 className="Sbc-proscons-title">Silversea Pros</h3>
                                <ul>
                                    {silverseaPros.map((s, i) => (
                                        <li key={i}><Check size={16} strokeWidth={2.5} /><span>{s}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-proscons-card Sbc-cons">
                                <h3 className="Sbc-proscons-title">Silversea Cons</h3>
                                <ul>
                                    {silverseaCons.map((s, i) => (
                                        <li key={i}><Minus size={16} strokeWidth={2.5} /><span>{s}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-who-should-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Should Choose Seabourn? Who Should Choose Silversea?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn is especially strong for travelers who want luxury without excessive
                            formality. Silversea is particularly compelling for travelers who see the
                            ship as a luxury base for global exploration.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard heading="Seabourn Is Particularly Appealing If You Want" items={whoSeabourn} />
                        <CompareCard heading="Silversea May Be the Better Choice If You Want" items={whoSilversea} alt />
                    </div>
                </div>
            </section>



            {/* ── DECISION GUIDE ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-decision-guide">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Decide in Seconds</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea: Which Is Better for You?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Use this simple decision guide.</p>
                    </div>

                    <div className="Svs-decision-grid">
                        {decisionCards.map((d, i) => (
                            <div className="Svs-decision-card" key={i}>
                                <p className="Svs-decision-say">&ldquo;{d.say}&rdquo;</p>
                                <div className="Svs-decision-divider"></div>
                                <p className="Svs-decision-choice">
                                    {d.label}
                                    <strong>{d.brand}</strong>
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="Sbc-compare-key" style={{ marginTop: "40px" }}>
                        <p>Choose either if you want small-ship luxury, excellent dining and destination-focused travel.</p>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
            <section className="Sbc-expert-section" id="Asc-expert-insight">
                <div className="Sbc-container">
                    <div className="Sbc-expert-heading">
                        <span className="Sbc-expert-eyebrow">Luxury Travel Expertise</span>
                        <h2 className="Sbc-expert-title">Angela Hughes Luxury Authority</h2>
                        <div className="Sbc-expert-divider"></div>
                    </div>

                    <div className="Sbc-expert-grid">
                        <div className="Sbc-expert-image-col">
                            <div className="Sbc-expert-portrait-wrap">
                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes – Luxury Travel Expert"
                                    className="Sbc-expert-portrait"
                                />
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

            {/* ── FAQ ───────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn vs. Silversea</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before choosing between Seabourn and Silversea.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Seabourn vs. Silversea</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            There is no universal winner between Seabourn and Silversea. Both are
                            excellent ultra-luxury cruise lines, but they appeal to slightly different
                            travelers.
                        </p>
                        <p className="Sbc-p">
                            Seabourn's strongest advantage is its relaxed yacht-like atmosphere. Its
                            oceanfront suites, personalized service, premium beverages, caviar and
                            intimate ships create a distinctive style of luxury. Its Venture and Pursuit
                            expedition ships add a particularly strong option for travelers seeking
                            remote destinations.
                        </p>
                        <p className="Sbc-p">
                            Silversea's strongest advantage is breadth and personalized service. Its
                            butler-in-every-suite model and extensive classic and expedition fleet make
                            it especially attractive to travelers who want global destination coverage
                            and a highly attentive experience.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If you're choosing between the two,
                                don't ask only "Which cruise line is better?" Ask "Which cruise line is
                                better for the itinerary, ship, suite and experience I want?" For many
                                luxury travelers, it comes down to Seabourn for relaxed yacht-style
                                luxury, or Silversea for butler service and extensive global exploration.
                                For Antarctica or another expedition destination, compare the actual
                                ships and itineraries before choosing the brand.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Luxury Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SeabournVsSilversea;