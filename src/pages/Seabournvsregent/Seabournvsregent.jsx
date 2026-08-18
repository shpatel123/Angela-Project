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
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournVsRegent.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#article",
            "headline": "Seabourn vs. Regent Seven Seas: Which Luxury Cruise Line Is Right for You?",
            "description": "Seabourn vs Regent Seven Seas compared across fares, suites, ships, dining, excursions, service, inclusions and atmosphere. Find the best luxury cruise for you.",
            "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/"
            },
            "author": {
                "@type": "Person",
                "name": "Angela Hughes",
                "url": "https://www.tripsandships.com/about-angela-hughes/"
            },
            "publisher": {
                "@type": "TravelAgency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com/"
            },
            "about": [
                {
                    "@type": "Thing",
                    "name": "Seabourn"
                },
                {
                    "@type": "Thing",
                    "name": "Regent Seven Seas Cruises"
                },
                {
                    "@type": "Thing",
                    "name": "Luxury Cruises"
                }
            ],
            "keywords": [
                "Seabourn vs Regent Seven Seas",
                "Seabourn vs Regent",
                "Seabourn or Regent",
                "Seabourn vs Regent comparison",
                "Seabourn vs Regent cruises",
                "Seabourn vs Regent suites",
                "Seabourn vs Regent dining",
                "Seabourn vs Regent excursions",
                "Seabourn vs Regent price",
                "Seabourn vs Regent value",
                "Seabourn vs Regent service",
                "Seabourn vs Regent atmosphere",
                "Seabourn vs Regent all inclusive"
            ],
            "articleSection": [
                "Seabourn vs. Regent at a Glance",
                "Seabourn vs. Regent Ships",
                "Seabourn vs. Regent Suites",
                "Seabourn vs. Regent Dining",
                "Seabourn vs. Regent Inclusions",
                "Seabourn vs. Regent Shore Excursions",
                "Seabourn vs. Regent Expedition Cruises",
                "Seabourn vs. Regent Service",
                "Seabourn vs. Regent Atmosphere",
                "Seabourn vs. Regent Fares",
                "Seabourn vs. Regent Pros and Cons",
                "Seabourn vs. Regent for Different Travelers",
                "Frequently Asked Questions"
            ],
            "isPartOf": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#webpage"
            }
        },
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#webpage",
            "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/",
            "name": "Seabourn vs Regent Seven Seas: Fares, Suites & Value",
            "description": "Seabourn vs Regent Seven Seas compared across fares, suites, ships, dining, excursions, service, inclusions and atmosphere.",
            "isPartOf": {
                "@type": "WebSite",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com/"
            },
            "breadcrumb": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#breadcrumb"
            },
            "mainEntity": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#article"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#breadcrumb",
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
                    "name": "Seabourn vs Regent Seven Seas",
                    "item": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is Seabourn or Regent Seven Seas better?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Neither is universally better. Seabourn is particularly strong for intimate, yacht-like luxury, while Regent stands out for spacious suites and extensive included shore excursions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn more luxurious than Regent?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both operate at the ultra-luxury end of cruising. Seabourn emphasizes intimacy and yacht-like atmosphere, while Regent emphasizes space and an extensive all-inclusive experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better suites, Seabourn or Regent?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both offer excellent suites. Regent is particularly strong for large living spaces and premium suites, while Seabourn emphasizes oceanfront accommodations, verandas and a yacht-like atmosphere."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn have all-suite accommodations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Seabourn describes its accommodations as spacious oceanfront suites, with most featuring private verandas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Regent have balconies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Regent says 99% of its suites have private balconies."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better dining, Seabourn or Regent?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both offer excellent dining. Seabourn emphasizes complimentary dining venues and flexible open seating, while Regent offers multiple included dining experiences and a broader resort-style environment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Regent excursions included?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Regent advertises thousands of included shore excursions across more than 550 ports."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Seabourn shore excursions included?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn includes curated experiences on applicable itineraries, while some optional Ventures by Seabourn experiences carry an additional charge. Expedition voyages have their own inclusive expedition experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better shore excursions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Regent has an advantage for the sheer number of included traditional shore excursions. Seabourn is particularly strong for curated experiences and expedition activities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for Antarctica?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn is particularly compelling for expedition-focused Antarctica travel because Venture and Pursuit are dedicated expedition ships with Zodiacs, expedition teams and included expedition experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has a more relaxed atmosphere?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn generally has the more relaxed, yacht-like atmosphere."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has more space?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Regent has a strong advantage in overall suite and public-space philosophy. The line specifically emphasizes its 'Unrivaled Space at Sea' approach."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better service?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both provide highly personalized service. Seabourn emphasizes intuitive, personalized service, while Regent emphasizes its Heartfelt Hospitality approach."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Regent more expensive than Seabourn?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not necessarily. Prices vary by itinerary, ship, suite and sailing date. Regent's higher headline fare can include substantial value through included excursions and other benefits."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better value, Seabourn or Regent?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on how you travel. Regent can be particularly valuable if you take many shore excursions. Seabourn can be excellent value if you prioritize premium onboard inclusions and intimate luxury."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for couples?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both are excellent. Seabourn is especially attractive for couples who want a romantic, intimate yacht atmosphere, while Regent may appeal to couples who want larger suites and extensive included exploration."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for solo travelers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both can work well. Seabourn's smaller ships may feel more intimate, while Regent offers more public space and venues. Compare the single supplement and specific itinerary."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for families?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Neither is primarily a family cruise line, but both can work for multigenerational groups. Regent's larger suites and extensive excursions can be useful, while Seabourn's expedition options may appeal to adventurous families."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I choose Seabourn or Regent Seven Seas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Choose Seabourn if you want relaxed yacht-style luxury, intimacy and a strong expedition identity. Choose Regent if you want spacious suites, extensive included excursions and a highly comprehensive all-inclusive experience."
                    }
                }
            ]
        }
    ]
};

/* ── FAQ Accordion ─────────────────────────────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "Is Seabourn or Regent Seven Seas better?",
            a: "Neither is universally better. Seabourn is particularly strong for intimate, yacht-like luxury, while Regent stands out for spacious suites and extensive included shore excursions."
        },
        {
            q: "Is Seabourn more luxurious than Regent?",
            a: "Both operate at the ultra-luxury end of cruising. Seabourn emphasizes intimacy and yacht-like atmosphere, while Regent emphasizes space and an extensive all-inclusive experience."
        },
        {
            q: "Which has better suites, Seabourn or Regent?",
            a: "Both offer excellent suites. Regent is particularly strong for large living spaces and premium suites, while Seabourn emphasizes oceanfront accommodations, verandas and a yacht-like atmosphere."
        },
        {
            q: "Does Seabourn have all-suite accommodations?",
            a: "Yes. Seabourn describes its accommodations as spacious oceanfront suites, with most featuring private verandas."
        },
        {
            q: "Does Regent have balconies?",
            a: "Yes. Regent says 99% of its suites have private balconies."
        },
        {
            q: "Which has better dining, Seabourn or Regent?",
            a: "Both offer excellent dining. Seabourn emphasizes complimentary dining venues and flexible open seating, while Regent offers multiple included dining experiences and a broader resort-style environment."
        },
        {
            q: "Does Seabourn include specialty dining?",
            a: "Yes. Seabourn states that its dining venues are complimentary, although individual venues may have specific reservation requirements."
        },
        {
            q: "Are Regent excursions included?",
            a: "Regent advertises thousands of included shore excursions across more than 550 ports."
        },
        {
            q: "Are Seabourn shore excursions included?",
            a: "Seabourn includes curated experiences on applicable itineraries, while some optional Ventures by Seabourn experiences carry an additional charge. Expedition voyages have their own inclusive expedition experience."
        },
        {
            q: "Which has better shore excursions?",
            a: "Regent has an advantage for the sheer number of included traditional shore excursions. Seabourn is particularly strong for curated experiences and expedition activities."
        },
        {
            q: "Which is better for Antarctica?",
            a: "Seabourn is particularly compelling for expedition-focused Antarctica travel because Venture and Pursuit are dedicated expedition ships with Zodiacs, expedition teams and included expedition experiences."
        },
        {
            q: "Which has a more relaxed atmosphere?",
            a: "Seabourn generally has the more relaxed, yacht-like atmosphere."
        },
        {
            q: "Which has more space?",
            a: "Regent has a strong advantage in overall suite and public-space philosophy. The line specifically emphasizes \"Unrivaled Space at Sea.\""
        },
        {
            q: "Which has better service?",
            a: "Both provide highly personalized service. Seabourn emphasizes intuitive, personalized service, while Regent emphasizes its Heartfelt Hospitality approach."
        },
        {
            q: "Is Regent more expensive than Seabourn?",
            a: "Not necessarily. Prices vary by itinerary, ship, suite and sailing date. Regent's higher headline fare can include substantial value through included excursions and other benefits."
        },
        {
            q: "Which is better value, Seabourn or Regent?",
            a: "It depends on how you travel. Regent can be particularly valuable if you take many shore excursions. Seabourn can be excellent value if you prioritize premium onboard inclusions and intimate luxury."
        },
        {
            q: "Which is better for couples?",
            a: "Both are excellent. Seabourn is especially attractive for couples who want a romantic, intimate yacht atmosphere, while Regent may appeal to couples who want larger suites and extensive included exploration."
        },
        {
            q: "Which is better for solo travelers?",
            a: "Both can work well. Seabourn's smaller ships may feel more intimate, while Regent offers more public space and venues. Compare the single supplement and specific itinerary."
        },
        {
            q: "Which is better for families?",
            a: "Neither is primarily a family cruise line, but both can work for multigenerational groups. Regent's larger suites and extensive excursions can be useful, while Seabourn's expedition options may appeal to adventurous families."
        },
        {
            q: "Should I choose Seabourn or Regent Seven Seas?",
            a: "Choose Seabourn if you want relaxed yacht-style luxury, intimacy and a strong expedition identity. Choose Regent if you want spacious suites, extensive included excursions and a highly comprehensive all-inclusive experience."
        }
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

/* ── Reusable components ────────────────────────────────────────── */
function CompareCard({ heading, sub, items, alt, placeholderIcon, placeholderText }) {
    const Icon = placeholderIcon;
    return (
        <div className={`Sbc-compare-card${alt ? " Sbc-compare-alt" : ""}`}>
            {placeholderIcon && (
                <div className="Sbc-dining-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                    <div className="Sbc-dining-placeholder-icon-wrapper">
                        <Icon size={32} className="Sbc-dining-placeholder-icon" />
                    </div>
                    <span className="Sbc-dining-placeholder-text">{placeholderText || `${heading} Image Placeholder`}</span>
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

function CompareTable({ rows }) {
    return (
        <div className="Ssf-table-wrap">
            <table className="Ssf-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Seabourn</th>
                        <th>Regent Seven Seas</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td className="Ssf-table-label">{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/* ── Data ──────────────────────────────────────────────────────── */
const seabournShipBetter = [
    "Intimacy",
    "Yacht-like design",
    "A smaller social environment",
    "Relaxed atmosphere",
    "A strong connection to the sea"
];

const regentShipBetter = [
    "More public space",
    "Larger suites",
    "More restaurants and venues",
    "A broader resort-at-sea feeling"
];

const seabournSuiteBetter = [
    "Yacht-like suite design",
    "Oceanfront accommodations",
    "Relaxed atmosphere",
    "Personal suite host and attendant",
    "Strong veranda experience"
];

const regentSuiteBetter = [
    "Maximum interior space",
    "Large living areas",
    "More elaborate suite categories",
    "Extensive premium-suite options",
    "Private balconies"
];

const seabournFoodBetter = [
    "Relaxed fine dining",
    "Open seating",
    "Intimate restaurants",
    "Destination-inspired menus",
    "Caviar",
    "Flexible dining"
];

const regentFoodBetter = [
    "More restaurant variety",
    "Traditional luxury dining",
    "Specialty dining",
    "Larger ships with more culinary venues",
    "Culinary enrichment"
];

const seabournExcursionsBetter = [
    "Intimate, curated shore experiences",
    "Nature walks, hikes, and snorkeling",
    "Guided Zodiac cruises",
    "Specialized expedition excursions included on expedition ships"
];

const regentExcursionsBetter = [
    "Thousands of included shore excursions in every port of call",
    "Maximum choice across conventional cruise destinations",
    "Save money on standard excursions without paying extra"
];

const seabournAntarcticaBetter = [
    "Purpose-built expedition ships",
    "Zodiacs",
    "Kayaking",
    "Expedition team",
    "Wildlife observation",
    "Shore landings",
    "Strong all-inclusive expedition experience"
];

const regentAntarcticaBetter = [
    "Luxury service",
    "Spacious suites",
    "Premium onboard environment",
    "Strong culinary program",
    "Destination-focused luxury"
];

const chooseSeabourn = [
    "Intimate ships",
    "Private-yacht atmosphere",
    "Relaxed luxury",
    "Oceanfront suites",
    "Personalized but understated service",
    "Premium spirits and wines",
    "Complimentary caviar",
    "Flexible open-seating dining",
    "A quieter, less formal atmosphere",
    "Luxury expedition cruising"
];

const chooseRegent = [
    "Extremely spacious ships and suites",
    "A broad selection of included shore excursions",
    "Extensive all-inclusive benefits",
    "Complimentary specialty dining",
    "A more traditional ultra-luxury atmosphere",
    "Butler service in higher suite categories",
    "Global itinerary variety",
    "Large suites with substantial living space"
];

const glanceRows = [
    ["Overall style", "Relaxed ultra-luxury", "Classic ultra-luxury"],
    ["Atmosphere", "Private yacht-like", "Spacious luxury resort at sea"],
    ["Ship size", "Intimate", "Small to midsize luxury ships"],
    ["Suites", "All oceanfront", "All-suite"],
    ["Private balconies", "Most suites", "99% of suites"],
    ["Suite service", "Personal suite host & attendant", "Personalized service; butler on select suites"],
    ["Dining", "Excellent", "Excellent"],
    ["Specialty dining", "Included", "Included"],
    ["Premium beverages", "Included", "Included"],
    ["Shore excursions", "Included experiences vary", "Thousands included"],
    ["Wi-Fi", "Included", "Included"],
    ["Gratuities", "Included", "Included"],
    ["Expedition cruising", "Strong", "Available through expedition offerings"],
    ["Best strength", "Intimacy & atmosphere", "Space & inclusions"],
    ["Best for", "Relaxed yacht-style luxury", "Maximum all-inclusive value"]
];

const bestForRows = [
    ["Yacht-style luxury", "Seabourn", "—"],
    ["Maximum suite space", "—", "Regent Seven Seas"],
    ["Included excursions", "—", "Regent Seven Seas"],
    ["Expedition cruising", "Seabourn", "—"],
    ["Relaxed atmosphere", "Seabourn", "—"],
    ["Traditional luxury", "—", "Regent Seven Seas"],
    ["Premium beverages", "Both", "Both"],
    ["Fine dining", "Both", "Both"],
    ["Intimate ship", "Seabourn", "—"],
    ["Large luxury suite", "—", "Regent Seven Seas"],
    ["Couples", "Both", "Both"],
    ["Multigenerational travel", "Both", "Both"],
    ["Adventure travel", "Seabourn", "—"],
    ["Extensive port exploration", "—", "Regent Seven Seas"],
];

const travelerGroups = [
    {
        icon: Heart,
        title: "Couples",
        seabourn: "Romantic escapes, Anniversaries, Honeymoons, Relaxed yacht-style travel, Intimate ships, Couples who value privacy.",
        regent: "Couples who want extensive included excursions, Large suites, Butler service in premium accommodations, More onboard space, Longer world voyages."
    },
    {
        icon: Users,
        title: "Solo Travelers",
        seabourn: "Intimate ships can make it relatively easy to become familiar with other guests and crew.",
        regent: "Larger luxury ships provide more venues and public spaces."
    },
    {
        icon: Home,
        title: "Families",
        seabourn: "Older children, Multigenerational groups, Expedition adventures, Private experiences.",
        regent: "Families wanting larger suites, Multigenerational travel, Extensive included excursions, More onboard space."
    },
    {
        icon: Star,
        title: "Older Travelers",
        seabourn: "Smaller ships and relaxed atmosphere can appeal to travelers who prefer fewer passengers.",
        regent: "Spacious suites and extensive included excursion program can be attractive."
    }
];

const regentFareValueItems = [
    "Shore excursions",
    "Specialty restaurants",
    "Drinks",
    "Wi-Fi",
    "Gratuities"
];

const seabournFareValueItems = [
    "Premium drinks",
    "Fine dining",
    "Caviar",
    "Wi-Fi",
    "In-suite service",
    "Small-ship atmosphere",
    "Included destination experiences",
    "Expedition activities on applicable voyages"
];

const lifestyleCards = [
    {
        icon: Sun,
        title: "Dress Code",
        text: "Seabourn generally fits a polished but relaxed style. Regent maintains an elegant atmosphere, but travelers do not need to treat every evening like a formal gala. For either brand, check the current requirements for your specific sailing and dining venues."
    },
    {
        icon: Sparkles,
        title: "Entertainment",
        text: "Neither cruise line is primarily about large-scale entertainment. Instead, expect live music, lectures, enrichment, destination presentations, cultural programming, lounges, evening performances and social activities. Regent's larger ships can provide somewhat more variety in onboard venues, while Seabourn's smaller ships focus more on intimacy."
    },
    {
        icon: Waves,
        title: "Spa & Wellness",
        text: "Both offer spa treatments, fitness facilities, wellness programs and relaxation areas. Seabourn has particularly strong wellness programming on selected ships and voyages. Regent's larger ships may provide a broader range of facilities and treatment options."
    }
];

const seabournPros = [
    "Intimate ships",
    "Private-yacht atmosphere",
    "Oceanfront suites",
    "Most suites with verandas",
    "Personalized service",
    "Premium beverages included",
    "Complimentary caviar",
    "Excellent dining",
    "Relaxed atmosphere",
    "Strong expedition program",
    "Many inclusive experiences"
];

const seabournCons = [
    "Smaller ships mean fewer onboard venues",
    "Fewer total ships than Regent",
    "Not ideal for travelers seeking large-scale entertainment",
    "Some premium excursions remain optional",
    "Suite space varies considerably by category"
];

const regentPros = [
    "Extremely spacious suites",
    "99% private balconies",
    "Extensive all-inclusive offering",
    "Thousands of included shore excursions",
    "Strong dining program",
    "Large selection of onboard venues",
    "Excellent global itineraries",
    "High level of personalized service",
    "Strong choice for travelers who spend heavily on excursions"
];

const regentCons = [
    "Can have a higher headline fare",
    "Larger ships may feel less intimate than Seabourn",
    "Traditional luxury atmosphere may feel less casual",
    "Not every included excursion is necessarily the experience you want",
    "Premium suite categories can become extremely expensive"
];

const decisionCards = [
    {
        say: "I want my cruise to feel like a private yacht.",
        label: "Choose",
        brand: "Seabourn"
    },
    {
        say: "I want as much as possible included and I plan to take excursions in almost every port.",
        label: "Choose",
        brand: "Regent"
    },
    {
        say: "Your priority is intimacy.",
        label: "Choose",
        brand: "Seabourn"
    },
    {
        say: "Your priority is space.",
        label: "Choose",
        brand: "Regent"
    },
    {
        say: "You prefer relaxed luxury.",
        label: "Choose",
        brand: "Seabourn"
    },
    {
        say: "You prefer traditional ultra-luxury.",
        label: "Choose",
        brand: "Regent"
    },
    {
        say: "You want a strong dedicated expedition experience.",
        label: "Choose",
        brand: "Seabourn"
    },
    {
        say: "You want extensive included shore excursions on conventional itineraries.",
        label: "Choose",
        brand: "Regent"
    }
];

const Seabournvsregent = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn vs Regent: Which Luxury Cruise Is Better?</title>
                <meta
                    name="description"
                    content="Seabourn vs Regent Seven Seas compared across fares, suites, ships, dining, excursions, service, inclusions and atmosphere. Find the best luxury cruise for you."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ──────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn vs. Regent Seven Seas Which Luxury Cruise Line Is Right for You?</h1>
                    <p>
                        Seabourn and Regent Seven Seas Cruises are two of the <br /> most established names in ultra-luxury cruising.
                    </p>


                    {readMore && (
                        <>
                            <p>
                                Both offer all-inclusive luxury, spacious suites, fine dining, premium beverages, personalized service and destination-focused itineraries. Both appeal primarily to travelers who want a quieter, more sophisticated cruise experience rather than the entertainment and crowds associated with large mainstream ships.
                            </p>
                            <p>
                                But they are not interchangeable.
                            </p>
                            <p>
                                Seabourn is known for its intimate, private-yacht-like atmosphere, oceanfront suites and relaxed approach to luxury. Regent Seven Seas places enormous emphasis on space, all-inclusive value and included shore excursions across a very broad range of destinations. Seabourn describes its ships as having a private yacht-like atmosphere, while Regent emphasizes its "Unrivaled Space at Sea" and thousands of included shore excursions.
                            </p>
                            <p>
                                So which should you choose?
                            </p>
                            <p>
                                This guide compares Seabourn vs. Regent Seven Seas across fares, ships, suites, dining, excursions, inclusions, service, atmosphere and overall value.
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
                        <h2 className="Sbc-h2">Is Seabourn or Regent Better?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            There isn't one universal winner.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Choose Seabourn if you prioritize"
                            items={chooseSeabourn}
                            placeholderIcon={Sailboat}
                            placeholderText="Seabourn Fleet"
                        />
                        <CompareCard
                            heading="Choose Regent Seven Seas if you prioritize"
                            items={chooseRegent}
                            alt
                            placeholderIcon={Ship}
                            placeholderText="Regent Seven Seas Fleet"
                        />
                    </div>

                    <div className="Sbc-compare-key">
                        <p>
                            Seabourn is particularly compelling for travelers who want intimacy and yacht-like relaxation. Regent can be especially attractive for travelers who want maximum space and a very comprehensive all-inclusive package.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-at-a-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Side-by-Side</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <CompareTable rows={glanceRows} />
                    <p className="Sbc-p" style={{ marginTop: "24px", fontSize: "14.5px", color: "#556477", fontStyle: "italic" }}>
                        Regent says its fleet accommodates between 496 and 822 guests depending on ship, with 99% of suites offering private balconies.
                    </p>
                </div>
            </section>

            {/* ── BIGGEST DIFFERENCE ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-biggest-difference">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Core Distinction</span>
                        <h2 className="Sbc-h2">The Biggest Difference Between Seabourn and Regent</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The easiest way to understand the two brands is to think about what each line makes central to its luxury proposition.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon"><Sailboat size={22} /></div>
                            <h3 className="Sbc-card-title">Seabourn</h3>
                            <p className="Sbc-card-text">
                                <strong>Intimacy + yacht atmosphere + personalized service</strong><br />
                                Seabourn emphasizes small ships, oceanfront suites, premium beverages, complimentary caviar, fine dining and a private-yacht-like atmosphere.
                            </p>
                        </div>
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon"><Compass size={22} /></div>
                            <h3 className="Sbc-card-title">Regent Seven Seas</h3>
                            <p className="Sbc-card-text">
                                <strong>Space + inclusions + destination exploration</strong><br />
                                Regent emphasizes spacious ships and suites, included dining and beverages, personalized service and thousands of included shore excursions across more than 550 ports.
                            </p>
                        </div>
                    </div>

                    <div className="Sbc-compare-key" style={{ marginTop: "40px" }}>
                        <p>Neither approach is inherently better. It comes down to whether you want the cruise to feel more like a private yacht or a spacious luxury resort with an extensive included exploration program.</p>
                    </div>
                </div>
            </section>

            {/* ── SHIPS ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Fleets</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent: Which Has Better Ships?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both cruise lines operate small by mainstream-cruise standards. But the onboard experience differs.
                        </p>
                    </div>

                    <div className="Sbc-fleet-columns">
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Seabourn Ships</div>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Seabourn's ships are designed around intimacy. The line emphasizes:
                            </p>
                            <ul>
                                {["Small-ship atmosphere", "Oceanfront suites", "Open deck space", "Personalized service", "Multiple intimate dining venues", "Relaxed social spaces", "Yacht-like design"].map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text" style={{ marginTop: "16px" }}>
                                Seabourn also operates dedicated expedition ships: <strong>Seabourn Venture</strong> and <strong>Seabourn Pursuit</strong>. These ships extend the Seabourn experience into remote destinations.
                            </p>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Regent Seven Seas Ships</div>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Regent's fleet is also designed around luxury and space. The line describes its ships as offering generous personal space, multiple lounges and social areas, restaurants and spacious suites.
                            </p>
                            <ul>
                                {["Spacious public areas", "Large suites", "Multiple restaurants", "Specialty dining", "Lounges", "Pools", "Spa facilities"].map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text" style={{ marginTop: "16px" }}>
                                Current fleet capacity ranges from approximately 496 to 822 guests depending on ship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Compare the Fleet</span>
                    <h3 className="Sbc-cta-title">Find the Perfect Luxury Ship for Your Voyage</h3>
                    <p className="Sbc-cta-text">
                        Choosing between Seabourn's yacht-like style and Regent Seven Seas' spacious resort-style fleet is easier with a custom comparison. Let's design your ideal cruise experience.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Ships & Fares
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHICH HAS BETTER SHIPS ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Svr-better-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison</span>
                        <h2 className="Sbc-h2">Which Cruise Line Has <br /> the Better Ship?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn May Be Better If You Want"
                            items={seabournShipBetter}
                            placeholderIcon={Sailboat}
                            placeholderText="Seabourn Fleet"
                        />
                        <CompareCard
                            heading="Regent Seven Seas May Be Better If You Want"
                            items={regentShipBetter}
                            alt
                            placeholderIcon={Ship}
                            placeholderText="Regent Seven Seas Fleet"
                        />
                    </div>

                    <div className="Sbc-compare-key" style={{ textAlign: "center" }}>
                        <p>For intimacy, Seabourn has the advantage. For space, Regent is particularly strong.</p>
                    </div>
                </div>
            </section>

            {/* ── SUITES ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is one of the most important categories. Both lines offer all-suite accommodation, but the philosophy is different.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Gem size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Seabourn Suites Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">Seabourn Suites</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Seabourn describes its accommodations as spacious oceanfront suites, with most featuring private verandas. Suites include a personal suite host and attendant, in-suite bar, walk-in storage and marble bathrooms.
                            </p>
                            <p className="Sbc-card-text" style={{ fontWeight: "600", marginBottom: "8px" }}>Suite Categories Include:</p>
                            <ul className="Sbc-compare-list" style={{ padding: 0 }}>
                                {["Oceanview Suites", "Veranda Suites", "Penthouse Suites", "Penthouse Spa Suites", "Penthouse Panorama Suites", "Owner's Suites", "Other premium suites"].map((c, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{c}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text" style={{ marginTop: "16px", fontSize: "14px", fontStyle: "italic" }}>
                                Premium suites can offer substantially more interior space, separate bedrooms and larger verandas.
                            </p>
                        </div>

                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Home size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Regent Seven Seas Suites Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">Regent Seven Seas Suites</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Regent takes the suite concept even further in terms of space. The line says 99% of its suites have private balconies, with separate sitting areas, spacious closets, minibars stocked to preference and complimentary laundry service.
                            </p>
                            <p className="Sbc-card-text" style={{ fontWeight: "600", marginBottom: "8px" }}>Suite Categories Include:</p>
                            <ul className="Sbc-compare-list" style={{ padding: 0 }}>
                                {["Veranda Suites", "Concierge-level suites", "Penthouse Suites", "Seven Seas Suites", "Grand Suites", "Master Suites", "Larger premium suites"].map((c, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH HAS BETTER SUITES ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Svr-better-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison</span>
                        <h2 className="Sbc-h2">Which Has Better Suites?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Choose Seabourn if you want"
                            items={seabournSuiteBetter}
                        />
                        <CompareCard
                            heading="Choose Regent if you want"
                            items={regentSuiteBetter}
                            alt
                        />
                    </div>

                    <div className="Sbc-compare-key" style={{ textAlign: "center" }}>
                        <p>For sheer suite space, Regent often has the edge. For yacht-like atmosphere, Seabourn is hard to beat.</p>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Suite Selection</span>
                    <h3 className="Sbc-cta-title">Customize Your Suite Accommodations</h3>
                    <p className="Sbc-cta-text">
                        From dedicated suite attendants to personalized service, we'll help you secure the ideal luxury suite category, amenities, and layout that suits your travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan Your Luxury Suite
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SUITE SERVICE ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-suite-service">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Service In-Suite</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Suite Service</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <p className="Svr-service-intro-text">
                        Service is another important distinction between the two cruise lines.
                    </p>

                    <div className="Svr-service-grid">
                        <div className="Svr-service-card">
                            <div className="Svr-service-placeholder">
                                <div className="Svr-service-placeholder-icon-wrap">
                                    <Users size={32} />
                                </div>
                                <span className="Svr-service-placeholder-text">Seabourn Suite Service</span>
                            </div>
                            <h3 className="Svr-service-title">Seabourn Suite Service</h3>
                            <ul className="Svr-service-list">
                                <li className="Svr-service-item">
                                    <Check size={16} />
                                    <span>Personal suite host and suite attendant provided in every single suite.</span>
                                </li>
                                <li className="Svr-service-item">
                                    <Check size={16} />
                                    <span>Host coordinates special requests, in-suite dining setup, and daily needs.</span>
                                </li>
                                <li className="Svr-service-item">
                                    <Check size={16} />
                                    <span>Attendant handles housekeeping, laundry arrangements, and turndown service.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="Svr-service-card">
                            <div className="Svr-service-placeholder">
                                <div className="Svr-service-placeholder-icon-wrap">
                                    <Heart size={32} />
                                </div>
                                <span className="Svr-service-placeholder-text">Regent Suite Service</span>
                            </div>
                            <h3 className="Svr-service-title">Regent Seven Seas Service</h3>
                            <ul className="Svr-service-list">
                                <li className="Svr-service-item">
                                    <Check size={16} />
                                    <span>Personalized suite steward service in entry-level veranda suite categories.</span>
                                </li>
                                <li className="Svr-service-item">
                                    <Check size={16} />
                                    <span>Dedicated butler service included in Penthouse Suites and higher categories.</span>
                                </li>
                                <li className="Svr-service-item">
                                    <Check size={16} />
                                    <span>Increasingly high-touch onboard benefits and amenities as suite category rises.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="Svr-service-summary-card">
                        <p className="Svr-service-summary-text">
                            <strong>At a Glance:</strong> Seabourn offers a personalized suite host experience across all cabins, whereas Regent offers personalized service with dedicated butler benefits for premium suites.
                        </p>
                        <p className="Svr-service-summary-text" style={{ fontStyle: "italic" }}>
                            If a dedicated butler is essential to your luxury experience, check the specific Regent suite category before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DINING ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both luxury cruise lines offer strong culinary programs. Neither is designed around the buffet-heavy dining model associated with mainstream cruising.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Utensils size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Seabourn Dining Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">Seabourn Dining</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Seabourn offers multiple complimentary dining venues. Its current culinary program includes options such as:
                            </p>
                            <ul className="Sbc-compare-list" style={{ padding: 0, marginBottom: "16px" }}>
                                {["The Restaurant", "The Colonnade", "Earth & Ocean", "Solis", "Sushi", "The Patio", "In-suite dining"].map((d, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text">
                                Seabourn states that its dining venues are complimentary, with many operating on an open-seating basis. The Restaurant allows guests to dine when they like, with whom they like and choose their seating arrangement.
                            </p>
                        </div>

                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Wine size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Regent Seven Seas Dining Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">Regent Seven Seas Dining</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Regent also offers a wide variety of included dining. Its culinary philosophy includes:
                            </p>
                            <ul className="Sbc-compare-list" style={{ padding: 0, marginBottom: "16px" }}>
                                {["Fine dining", "Specialty restaurants", "Casual dining", "Destination-inspired cuisine", "In-suite dining", "Culinary enrichment"].map((d, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text">
                                Regent emphasizes its &ldquo;Epicurean Perfection&rdquo; culinary program as part of its luxury experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH HAS BETTER FOOD ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Svr-better-food">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison</span>
                        <h2 className="Sbc-h2">Which Has Better Food?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">This is very subjective.</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn may appeal more if you prefer"
                            items={seabournFoodBetter}
                        />
                        <CompareCard
                            heading="Regent may appeal more if you prefer"
                            items={regentFoodBetter}
                            alt
                        />
                    </div>

                    <div className="Sbc-compare-key" style={{ textAlign: "center" }}>
                        <p>Both are excellent choices for food-focused travelers.</p>
                    </div>
                </div>
            </section>

            {/* ── INCLUSIONS ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">All-Inclusive</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Inclusions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is where Regent can become extremely compelling. Both are all-inclusive luxury brands, but the scope and structure of included benefits should be compared carefully.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Gem size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Seabourn Inclusions Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">What Seabourn Includes</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Seabourn's current all-inclusive proposition includes:
                            </p>
                            <ul className="Sbc-compare-list" style={{ padding: 0 }}>
                                {[
                                    "Dining at all venues",
                                    "Fine wines and premium spirits",
                                    "Champagne and welcome drinks",
                                    "Complimentary caviar",
                                    "Wi-Fi internet access",
                                    "In-suite dining 24/7",
                                    "Fully stocked in-suite bar",
                                    "All onboard gratuities",
                                    "Selected inclusive shore experiences"
                                ].map((inc, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{inc}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text" style={{ marginTop: "16px", fontSize: "14px", fontStyle: "italic" }}>
                                Seabourn specifically describes curated shore excursions, cultural tours, guided Zodiac cruises, hikes, nature walks and snorkeling among its inclusive experiences, while some Ventures experiences are optional.
                            </p>
                        </div>

                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Sparkles size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Regent Inclusions Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">What Regent Includes</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Regent promotes its Most Inclusive Luxury Experience. Its current offering includes:
                            </p>
                            <ul className="Sbc-compare-list" style={{ padding: 0 }}>
                                {[
                                    "Specialty dining at all venues",
                                    "Unlimited fine wines and premium beverages",
                                    "Wi-Fi internet access",
                                    "All onboard gratuities",
                                    "Included shore excursions in every port",
                                    "Select hotel stays on certain itineraries",
                                    "Ground transfers on qualifying bookings",
                                    "Other itinerary-specific benefits"
                                ].map((inc, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{inc}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text" style={{ marginTop: "16px", fontSize: "14.5px", fontWeight: "600" }}>
                                Most importantly, Regent advertises thousands of included shore excursions across 550-plus ports.
                            </p>
                        </div>
                    </div>

                    <div className="Sbc-compare-key" style={{ marginTop: "40px" }}>
                        <h3 className="Sbc-h3" style={{ fontSize: "18px", fontWeight: "600", color: "var(--navy)" }}>Which Has More Inclusive Value?</h3>
                        <p className="Sbc-p" style={{ marginBottom: "12px" }}>
                            Regent generally has the stronger proposition if included shore excursions are a major part of your travel budget. This is one of the biggest differences between the two brands. A traveler who normally spends substantial money on tours in every port may find Regent's included excursion program particularly attractive.
                        </p>
                        <p className="Sbc-p">
                            Seabourn's value can be stronger for travelers who care more about: Ship atmosphere, Premium beverages, Dining, Caviar, Intimate service, Included experiences on expedition itineraries.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CTA 3 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Ultra-Luxury Inclusions</span>
                    <h3 className="Sbc-cta-title">Maximize Your Onboard Benefits</h3>
                    <p className="Sbc-cta-text">
                        Compare premium wine inclusions, dining benefits, and shore excursions. We'll help you parse the fares to find the most value-rich option for your voyage.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Inclusions
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── EXCURSIONS ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">On Shore</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Shore Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is arguably the biggest practical difference.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <h3 className="Sbc-card-title">Regent Seven Seas Excursions</h3>
                            <p className="Sbc-card-text">
                                Regent advertises thousands of included shore excursions across 550-plus ports.
                            </p>
                            <p className="Sbc-card-text" style={{ marginTop: "12px" }}>
                                This makes the cruise line especially attractive to travelers who want to get off the ship and explore extensively without paying an additional fee for every standard excursion.
                            </p>
                        </div>

                        <div className="Sbc-card">
                            <h3 className="Sbc-card-title">Seabourn Shore Excursions</h3>
                            <p className="Sbc-card-text">
                                Seabourn also includes curated experiences on many itineraries. Its current all-inclusive proposition highlights experiences including: Curated shore excursions, cultural tours, guided Zodiac cruises, hikes, nature walks and snorkeling.
                            </p>
                            <p className="Sbc-card-text" style={{ marginTop: "12px", fontSize: "14.5px", fontStyle: "italic" }}>
                                Optional Ventures by Seabourn experiences can add more specialized adventures. On Seabourn Venture and Seabourn Pursuit, most expedition experiences are included as part of the Inclusive Seabourn Expedition Experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH HAS BETTER EXCURSIONS ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Svr-better-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparison</span>
                        <h2 className="Sbc-h2">Which Has Better Excursions?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn wins if"
                            items={seabournExcursionsBetter}
                        />
                        <CompareCard
                            heading="Regent wins if"
                            items={regentExcursionsBetter}
                            alt
                        />
                    </div>

                    <div className="Sbc-compare-key" style={{ textAlign: "center" }}>
                        <p>For a traditional Mediterranean or European itinerary, Regent's extensive included excursion program can be a significant financial advantage. For Antarctica or remote expedition destinations, the comparison becomes much closer.</p>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITIONS ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-expeditions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Expedition Cruising</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent for Expedition Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is an important distinction.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Compass size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Seabourn Expedition Ships Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">Seabourn Expedition Cruises</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Seabourn operates dedicated expedition ships, <strong>Seabourn Venture</strong> and <strong>Seabourn Pursuit</strong>, purpose-built for remote exploration.
                            </p>
                            <p className="Sbc-card-text" style={{ fontWeight: "600", marginBottom: "8px" }}>Included Expedition Program:</p>
                            <ul className="Sbc-compare-list" style={{ padding: 0 }}>
                                {["Zodiac exploration", "Shore landings", "Wildlife viewing", "Kayaking", "Hiking", "Nature walks", "Expedition lectures"].map((e, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{e}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text" style={{ marginTop: "16px", fontSize: "14px", fontStyle: "italic" }}>
                                Most expedition experiences are included at no additional cost on its dedicated expedition ships.
                            </p>
                        </div>

                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Ship size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Regent Luxury Cruises Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">Regent Luxury Cruises</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "16px" }}>
                                Regent is better known for its traditional luxury cruise product, while Seabourn has a particularly distinctive dedicated expedition identity.
                            </p>
                            <p className="Sbc-card-text">
                                The line provides a premium destination-focused experience with high-end excursions, but operates standard ocean-going passenger liners without specialized expedition features like Zodiac fleets or submersibles.
                            </p>
                        </div>
                    </div>

                    <div className="Sbc-compare-key" style={{ marginTop: "40px" }}>
                        <p style={{ fontWeight: "600", textAlign: "center" }}>
                            If expedition cruising is the primary reason you're booking the trip, Seabourn deserves very serious consideration.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ANTARCTICA ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-antarctica">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Polar Destinations</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent for Antarctica</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            If Antarctica is your destination, the comparison changes.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <CompareCard
                            heading="Seabourn Strengths"
                            items={seabournAntarcticaBetter}
                            placeholderIcon={Snowflake}
                            placeholderText="Seabourn Antarctica"
                        />
                        <CompareCard
                            heading="Regent Strengths"
                            items={regentAntarcticaBetter}
                            alt
                            placeholderIcon={Compass}
                            placeholderText="Regent Antarctica"
                        />
                    </div>

                    <div className="Sbc-compare-key" style={{ textAlign: "center" }}>
                        <p>But travelers should compare the actual expedition itinerary and ship, not simply the brand.</p>
                    </div>
                </div>
            </section>

            {/* ── CTA 4 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Polar Expeditions</span>
                    <h3 className="Sbc-cta-title">Plan Your Antarctic Adventure</h3>
                    <p className="Sbc-cta-text">
                        Ready to explore Antarctica? Compare Seabourn and Regent Seven Seas' expedition programs, landings, Zodiac outings, and luxury itineraries with a specialist.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Expedition Cruises
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SERVICE ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-service">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Staff</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Service</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both offer high levels of service. But the atmosphere is different.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <h3 className="Sbc-card-title">Seabourn</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "12px" }}>
                                Seabourn describes its service as intuitive and personalized.
                            </p>
                            <p className="Sbc-card-text">
                                The experience tends to feel: Warm, Informal, Personal, Yacht-like, and Relaxed.
                            </p>
                        </div>

                        <div className="Sbc-card">
                            <h3 className="Sbc-card-title">Regent</h3>
                            <p className="Sbc-card-text" style={{ marginBottom: "12px" }}>
                                Regent describes its hospitality as &ldquo;Heartfelt Hospitality&rdquo; and emphasizes intuitive service designed around individual guest needs.
                            </p>
                            <p className="Sbc-card-text">
                                The experience tends to feel: Refined, Traditional, Formaler, Highly attentive, and Resort-like.
                            </p>
                        </div>
                    </div>

                    <div className="Sbc-compare-key" style={{ backgroundColor: 'var(--bg-white)' }}>
                        <h3 className="Sbc-h3">Which Has Better Service?</h3>
                        <p className="Sbc-p">
                            If you want understated and relaxed, Seabourn may be your better fit. If you want traditional ultra-luxury service with a larger resort-style environment, Regent may appeal more. Both are excellent.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ATMOSPHERE & LIFESTYLE ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-atmosphere">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Lifestyle</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Atmosphere</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This may be the most important category for many travelers.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2" style={{ marginBottom: "32px" }}>
                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Waves size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Seabourn Yacht Atmosphere</span>
                            </div>
                            <h3 className="Sbc-card-title">Seabourn Atmosphere</h3>
                            <p className="Sbc-card-text" style={{ fontStyle: "italic", marginBottom: "16px", color: "var(--navy)" }}>
                                Imagine: A private yacht with a sophisticated group of travelers.
                            </p>
                            <p className="Sbc-card-text" style={{ fontWeight: "600", marginBottom: "8px" }}>
                                The atmosphere is generally:
                            </p>
                            <ul className="Sbc-compare-list" style={{ padding: 0 }}>
                                {["Quiet", "Intimate", "Relaxed", "Sophisticated", "Social without being crowded"].map((a, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-card">
                            <div className="Sbc-dining-image-placeholder Sse-traveler-image-placeholder" style={{ borderRadius: "4px", marginBottom: "16px" }}>
                                <div className="Sbc-dining-placeholder-icon-wrapper">
                                    <Star size={32} className="Sbc-dining-placeholder-icon" />
                                </div>
                                <span className="Sbc-dining-placeholder-text">Regent Resort Atmosphere</span>
                            </div>
                            <h3 className="Sbc-card-title">Regent Atmosphere</h3>
                            <p className="Sbc-card-text" style={{ fontStyle: "italic", marginBottom: "16px", color: "var(--navy)" }}>
                                Imagine: A luxurious boutique resort that happens to travel around the world.
                            </p>
                            <p className="Sbc-card-text" style={{ fontWeight: "600", marginBottom: "8px" }}>
                                The atmosphere is:
                            </p>
                            <ul className="Sbc-compare-list" style={{ padding: 0 }}>
                                {["Elegant", "Spacious", "Refined", "Comfortable", "Traditional"].map((a, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>
            </section>

            {/* ── DRESS CODE ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Svr-dress-code">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Style</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Dress Code</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Svr-lifestyle-card">
                            <h3 className="Svr-lifestyle-title">Seabourn Dress Code</h3>
                            <p className="Svr-lifestyle-desc">
                                Seabourn generally fits a polished but relaxed style. The evening attire is typically Elegant Casual, creating a comfortable yet upscale environment.
                            </p>
                        </div>

                        <div className="Svr-lifestyle-card">
                            <h3 className="Svr-lifestyle-title">Regent Dress Code</h3>
                            <p className="Svr-lifestyle-desc">
                                Regent maintains an elegant atmosphere, but travelers do not need to treat every evening like a formal gala. The standard is Elegant Casual on most evenings.
                            </p>
                        </div>
                    </div>

                    <div className="Svr-highlight-box">
                        <p className="Svr-highlight-text">
                            Both lines are considerably more relaxed than the formal luxury cruising culture of past decades. For either brand, check the current requirements for your specific sailing and dining venues.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ENTERTAINMENT ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Svr-entertainment">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Activities</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Entertainment</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Neither cruise line is primarily about large-scale entertainment.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Svr-lifestyle-card">
                            <h3 className="Svr-lifestyle-title">Seabourn Entertainment</h3>
                            <p className="Svr-lifestyle-desc">
                                Seabourn's smaller ships focus more on intimacy. Onboard programming feels personal and low-key.
                            </p>
                            <p className="Svr-lifestyle-list-header">What to expect on Seabourn:</p>
                            <ul className="Svr-lifestyle-list">
                                {["Live music in intimate venues", "Enrichment lectures", "Destination presentations", "Lounges and social hours"].map((item, i) => (
                                    <li key={i} className="Svr-lifestyle-item">
                                        <Check size={14} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Svr-lifestyle-card">
                            <h3 className="Svr-lifestyle-title">Regent Entertainment</h3>
                            <p className="Svr-lifestyle-desc">
                                Regent's larger ships can provide somewhat more variety in onboard venues and scale of entertainment.
                            </p>
                            <p className="Svr-lifestyle-list-header">What to expect on Regent:</p>
                            <ul className="Svr-lifestyle-list">
                                {["Evening performances", "Social activities", "Cultural programming", "Lounges and musical acts"].map((item, i) => (
                                    <li key={i} className="Svr-lifestyle-item">
                                        <Check size={14} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SPA & WELLNESS ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Svr-spa-wellness">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Wellness</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Spa and Wellness</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both lines offer comprehensive wellness and relaxation opportunities onboard.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Svr-lifestyle-card">
                            <h3 className="Svr-lifestyle-title">Seabourn Spa & Wellness</h3>
                            <p className="Svr-lifestyle-desc">
                                Seabourn has particularly strong wellness programming on selected ships and voyages, featuring their partnership with Dr. Andrew Weil.
                            </p>
                            <p className="Svr-lifestyle-list-header">Onboard features:</p>
                            <ul className="Svr-lifestyle-list">
                                {["Spa treatments", "Fitness facilities", "Wellness programs", "Relaxation areas"].map((item, i) => (
                                    <li key={i} className="Svr-lifestyle-item">
                                        <Check size={14} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Svr-lifestyle-card">
                            <h3 className="Svr-lifestyle-title">Regent Spa & Wellness</h3>
                            <p className="Svr-lifestyle-desc">
                                Regent's larger ships may provide a broader range of facilities and treatment options within their Serene Spa & Wellness centers.
                            </p>
                            <p className="Svr-lifestyle-list-header">Onboard features:</p>
                            <ul className="Svr-lifestyle-list">
                                {["Spa treatments", "Fitness facilities", "Wellness programs", "Relaxation areas"].map((item, i) => (
                                    <li key={i} className="Svr-lifestyle-item">
                                        <Check size={14} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Svr-highlight-box">
                        <p className="Svr-highlight-text" style={{ textAlign: "center", fontWeight: "600" }}>
                            If wellness is important, compare the specific ship.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CTA 5 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Tailor-Made Cruising</span>
                    <h3 className="Sbc-cta-title">Design Your Ultimate Yacht Voyage</h3>
                    <p className="Sbc-cta-text">
                        Whether you seek a casual, yacht-like atmosphere or refined traditional elegance, our cruise specialists will align your preferences with the perfect voyage.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan Your Yacht Cruise
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── BEST FOR DIFFERENT TRAVELERS ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Best For</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent: Best for Different Travelers</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <CompareTable rows={bestForRows} />
                </div>
            </section>
            {/* ── FARES & VALUE ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-fares">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Costs & Value</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Fares</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <h3 className="Sbc-card-title">Why a Higher Regent Fare May Still Be Good Value</h3>
                            <p className="Sbc-card-text">
                                Suppose two comparable cruises have different headline fares. If the Regent fare includes the following items, while you would otherwise purchase many of those items separately, the difference in headline fare may not represent the real difference in vacation cost:
                            </p>
                            <ul className="Sbc-compare-list" style={{ padding: 0, margin: 0 }}>
                                {regentFareValueItems.map((item, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text" style={{ marginTop: "auto", fontWeight: "600" }}>
                                Regent explicitly positions its product around this comprehensive all-inclusive model.
                            </p>
                        </div>

                        <div className="Sbc-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <h3 className="Sbc-card-title">Why Seabourn Can Be Excellent Value</h3>
                            <p className="Sbc-card-text">
                                Seabourn's value is strongest when you appreciate what the line emphasizes:
                            </p>
                            <ul className="Sbc-compare-list" style={{ padding: 0, margin: 0 }}>
                                {seabournFareValueItems.map((item, i) => (
                                    <li key={i} style={{ borderBottom: "none", padding: "4px 0" }}>
                                        <Check size={14} style={{ color: "var(--navy)" }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-card-text" style={{ marginTop: "auto", fontStyle: "italic" }}>
                                Seabourn's all-inclusive proposition includes premium spirits and fine wines, complimentary caviar and dining across its venues.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── PROS AND CONS ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weigh It Up</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent Pros and Cons</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Svr-proscons-block">
                        <div className="Svr-brand-label"><span>Seabourn</span></div>
                        <div className="Sbc-proscons-grid">
                            <div className="Sbc-proscons-card Sbc-pros">
                                <h3 className="Sbc-proscons-title">Seabourn Pros</h3>
                                <ul>
                                    {seabournPros.map((p, i) => (
                                        <li key={i}><Check size={16} strokeWidth={2.5} /><span>{p}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-proscons-card Sbc-cons">
                                <h3 className="Sbc-proscons-title">Seabourn Cons</h3>
                                <ul>
                                    {seabournCons.map((c, i) => (
                                        <li key={i}><Minus size={16} strokeWidth={2.5} /><span>{c}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="Svr-proscons-block">
                        <div className="Svr-brand-label"><span>Regent Seven Seas</span></div>
                        <div className="Sbc-proscons-grid">
                            <div className="Sbc-proscons-card Sbc-pros">
                                <h3 className="Sbc-proscons-title">Regent Pros</h3>
                                <ul>
                                    {regentPros.map((p, i) => (
                                        <li key={i}><Check size={16} strokeWidth={2.5} /><span>{p}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-proscons-card Sbc-cons">
                                <h3 className="Sbc-proscons-title">Regent Cons</h3>
                                <ul>
                                    {regentCons.map((c, i) => (
                                        <li key={i}><Minus size={16} strokeWidth={2.5} /><span>{c}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DECISION GUIDE ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-decision-guide">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Decide in Seconds</span>
                        <h2 className="Sbc-h2">Seabourn vs. Regent: Which Is Better for You?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Use this simple decision guide.</p>
                    </div>

                    <div className="Svr-decision-grid">
                        {decisionCards.map((d, i) => (
                            <div className="Svr-decision-card" key={i}>
                                <p className="Svr-decision-say">&ldquo;{d.say}&rdquo;</p>
                                <div className="Svr-decision-divider"></div>
                                <p className="Svr-decision-choice">
                                    {d.label}
                                    <strong>{d.brand}</strong>
                                </p>
                            </div>
                        ))}
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
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn vs. Regent</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Everything travelers need to know before choosing between Seabourn and Regent Seven Seas.
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
                        <h2 className="Sbc-h2">Seabourn vs. Regent Seven Seas</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn and Regent Seven Seas are both exceptional luxury cruise lines, but they sell slightly different versions of luxury.
                        </p>
                        <p className="Sbc-p">
                            Choose Seabourn if the ship itself is the destination. Its intimate ships, oceanfront suites, relaxed yacht-like atmosphere, personalized service, fine dining, premium beverages and caviar create a distinctive luxury experience.
                        </p>
                        <p className="Sbc-p">
                            Choose Regent if exploring the destination is just as important as enjoying the ship. Its spacious suites, broad all-inclusive proposition and thousands of included shore excursions can create exceptional value for travelers who plan to explore extensively in port.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>The most important distinction is therefore:</strong><br />
                                <strong>Seabourn</strong> = intimacy, atmosphere and yacht-style luxury.<br />
                                <strong>Regent</strong> = space, inclusions and extensive exploration.
                            </p>
                            <p style={{ marginTop: "12px" }}>
                                For travelers comparing actual cruises, don't stop at the brand level. Compare the ship, suite, itinerary, included excursions, sailing date and total vacation cost. That's where the real difference in value becomes clear.
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

export default Seabournvsregent;
