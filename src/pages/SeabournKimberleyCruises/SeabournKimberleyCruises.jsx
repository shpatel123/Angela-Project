import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Ship,
    Anchor,
    Waves,
    Compass,
    Home,
    Users,
    Award,
    Bird,
    Fish,
    Droplets,
    Footprints,
    Sunrise,
    ThermometerSun,
    Palette,
    Landmark,
    Tent,
    Clock,
    Heart,
    Snowflake,
    Activity,
    ChevronRight,
    Star,
    MapPin,
} from "lucide-react";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import Nav from "../../components/Navbar/Nav";

import { Helmet } from "react-helmet-async";
import "./SeabournKimberleyCruises.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournKimberleySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#webpage",
            "url": "https://www.tripsandships.com/seabourn-cruises/kimberley/",
            "name": "Seabourn Kimberley Cruises: Wildlife, Waterfalls & Zodiacs",
            "headline": "Seabourn Kimberley Cruises: Wildlife, Waterfalls, Zodiacs & Indigenous Culture",
            "description": "Explore Seabourn Kimberley cruises with Zodiac excursions, waterfalls, Indigenous culture, wildlife, remote landscapes and the best time to sail Australia's Kimberley coast.",
            "keywords": [
                "Seabourn Kimberley Cruises",
                "Seabourn Kimberley",
                "Seabourn Kimberley cruise",
                "Seabourn Kimberley cruises",
                "Seabourn Kimberley itinerary",
                "Seabourn Kimberley expedition",
                "Kimberley cruise Australia",
                "Seabourn Kimberley wildlife",
                "Seabourn Kimberley waterfalls",
                "Seabourn Kimberley Zodiac excursions",
                "Seabourn Kimberley Indigenous culture",
                "Seabourn Kimberley best time to cruise",
                "Kimberley Australia cruise season",
                "Seabourn Kimberley packing",
                "Seabourn Kimberley shore excursions",
                "Seabourn Kimberley cruise review",
                "Seabourn Kimberley worth it"
            ],
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                "url": "https://www.tripsandships.com/",
                "name": "Trips & Ships Luxury Travel"
            },
            "breadcrumb": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#breadcrumb"
            },
            "mainEntity": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#destination"
            },
            "inLanguage": "en-US"
        },

        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#breadcrumb",
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
                    "name": "Seabourn Kimberley Cruises",
                    "item": "https://www.tripsandships.com/seabourn-cruises/kimberley/"
                }
            ]
        },

        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#destination",
            "name": "Seabourn Kimberley Cruises",
            "description": "Luxury expedition cruises exploring Australia's remote Kimberley region through Zodiac excursions, wildlife encounters, waterfalls, scenic cruising, shore exploration and Indigenous cultural experiences.",
            "url": "https://www.tripsandships.com/seabourn-cruises/kimberley/",
            "brand": {
                "@type": "Brand",
                "name": "Seabourn"
            },
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "name": "Destination",
                    "value": "Kimberley, Western Australia"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Cruise Style",
                    "value": "Luxury expedition"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Main Attraction",
                    "value": "Remote landscapes and wildlife"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Shore Access",
                    "value": "Zodiac excursions"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Wildlife",
                    "value": "Crocodiles, birds, marine life and other native species"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Scenery",
                    "value": "Cliffs, waterfalls, beaches, rivers and tidal landscapes"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Cultural Experiences",
                    "value": "Indigenous heritage and local cultural interpretation"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Activities",
                    "value": "Zodiac rides, hikes, wildlife viewing and exploration"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Sailing Season",
                    "value": "Primarily during the Kimberley's dry-season months"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Onboard Experience",
                    "value": "Luxury accommodation, fine dining, lounge spaces, wellness facilities and relaxed social spaces"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Best For",
                    "value": "Adventure travelers, couples, photographers, wildlife enthusiasts, nature lovers and luxury expedition travelers"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Atmosphere",
                    "value": "Remote, adventurous and luxurious"
                }
            ]
        },

        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#features",
            "name": "Seabourn Kimberley Cruise Features",
            "description": "Key experiences and features of Seabourn Kimberley expedition cruises.",
            "numberOfItems": 8,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Zodiac Expeditions",
                    "description": "Zodiac excursions allow guests to explore narrow waterways, remote beaches, waterfalls, tidal environments, cliffs and coastal areas that the main ship cannot reach."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Kimberley Waterfalls",
                    "description": "Seasonal waterfalls are among the region's most memorable attractions and can be experienced by Zodiac, scenic cruising, shore landing or guided expedition depending on conditions."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Wildlife Viewing",
                    "description": "Depending on the itinerary, season and conditions, guests may encounter saltwater crocodiles, sea turtles, dolphins, whales, rays, seabirds, shore birds and other native Australian wildlife."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Indigenous Cultural Experiences",
                    "description": "Depending on the itinerary and programming, guests may learn about Indigenous history, traditional knowledge, connection to Country, art, stories, traditions and ancient rock art."
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Hiking and Shore Exploration",
                    "description": "Expedition activities can include guided walks, short hikes, beach exploration, scenic viewpoints, wildlife observation and cultural interpretation."
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Scenic Cruising",
                    "description": "Guests can experience dramatic Kimberley scenery from the water, including red cliffs, islands, beaches, waterfalls, tidal rivers and remote coastline."
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Luxury Onboard Experience",
                    "description": "After expedition activities, guests can return to comfortable suites, fine dining, lounge spaces, wellness facilities, pool areas and relaxed social spaces."
                },
                {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Dry-Season Expedition Cruising",
                    "description": "The Kimberley cruise season is generally concentrated around the dry season, with timing influencing waterfall activity, weather and expedition conditions."
                }
            ]
        },

        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a Seabourn Kimberley cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A Seabourn Kimberley cruise is a luxury expedition voyage exploring Australia's remote Kimberley region through Zodiac excursions, scenic cruising, wildlife encounters and cultural experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Where is the Kimberley?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Kimberley is a remote region in the far northwest of Western Australia, known for dramatic coastlines, red cliffs, rivers, waterfalls and Indigenous cultural heritage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What can you see on a Seabourn Kimberley cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Depending on the itinerary and conditions, guests may see waterfalls, dramatic cliffs, beaches, saltwater crocodiles, marine life, birds and other wildlife."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn use Zodiacs in the Kimberley?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Zodiac excursions are an important part of the expedition experience and allow guests to explore areas inaccessible to the main ship."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Zodiac excursions included on Seabourn Kimberley cruises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Expedition activities are generally part of the overall expedition experience, but the exact inclusions should be confirmed for the specific sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you see waterfalls on a Kimberley cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Waterfalls are one of the region's major attractions, particularly during periods when seasonal water flow is strong."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you see crocodiles on a Seabourn Kimberley cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Saltwater crocodiles inhabit the Kimberley region, and expedition excursions can provide opportunities to observe them from a safe distance. Wildlife sightings are not guaranteed."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are there Indigenous cultural experiences?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Depending on the itinerary, guests may have opportunities to learn about Indigenous heritage, traditional connections to Country, cultural history, art and storytelling."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best time to cruise the Kimberley?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Kimberley cruise season generally corresponds with the region's dry-season period. The ideal timing depends on whether you prioritize waterfall activity, weather or particular wildlife opportunities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Seabourn Kimberley cruise physically demanding?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Some activities can require moderate mobility, including getting into and out of Zodiacs, walking on uneven surfaces and participating in shore excursions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What should I pack for a Kimberley cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pack lightweight breathable clothing, sun protection, comfortable walking shoes, swimwear, sunglasses, a hat, binoculars and appropriate protection for cameras and electronics."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Kimberley suitable for couples?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Couples can enjoy a combination of adventure during the day and luxury, dining and relaxation onboard."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Kimberley suitable for solo travelers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The intimate expedition environment provides many opportunities to meet fellow guests through excursions and onboard activities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Kimberley cruise good for families?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It can suit adventurous multigenerational families, although travelers should consider mobility, heat, Zodiac access and age requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Seabourn Kimberley cruise worth it?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For travelers who value remote destinations, wildlife, expedition experiences, Indigenous culture and luxury service, a Seabourn Kimberley cruise can be an excellent choice."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Kimberley cruise itineraries change?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Expedition itineraries can change because of weather, tides, wildlife conditions, safety considerations and other local factors."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is the Kimberley a luxury cruise destination?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Kimberley itself is a remote wilderness destination rather than a conventional luxury resort area. A Seabourn expedition adds a luxury onboard experience to the remote environment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Kimberley different from a regular Seabourn cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Kimberley voyages place considerably more emphasis on expedition activities, Zodiac excursions, wildlife, remote landscapes and shore exploration than a conventional port-focused ocean cruise."
                    }
                }
            ]
        }
    ]
};
/* ── FAQ Accordion (reuses Sbc-faq classes) ───────────────────────── */
function KimberleyFAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is a Seabourn Kimberley cruise?", a: "A Seabourn Kimberley cruise is a luxury expedition voyage exploring Australia's remote Kimberley region through Zodiac excursions, scenic cruising, wildlife encounters and cultural experiences." },
        { q: "Where is the Kimberley?", a: "The Kimberley is a remote region in the far northwest of Western Australia, known for dramatic coastlines, red cliffs, rivers, waterfalls and Indigenous cultural heritage." },
        { q: "What can you see on a Seabourn Kimberley cruise?", a: "Depending on the itinerary and conditions, guests may see waterfalls, dramatic cliffs, beaches, saltwater crocodiles, marine life, birds and other wildlife." },
        { q: "Does Seabourn use Zodiacs in the Kimberley?", a: "Yes. Zodiac excursions are an important part of the expedition experience and allow guests to explore areas inaccessible to the main ship." },
        { q: "Are Zodiac excursions included on Seabourn Kimberley cruises?", a: "Expedition activities are generally part of the overall expedition experience, but the exact inclusions should be confirmed for the specific sailing." },
        { q: "Can you see waterfalls on a Kimberley cruise?", a: "Yes. Waterfalls are one of the region's major attractions, particularly during periods when seasonal water flow is strong." },
        { q: "Can you see crocodiles on a Seabourn Kimberley cruise?", a: "Saltwater crocodiles inhabit the Kimberley region, and expedition excursions can provide opportunities to observe them from a safe distance. Wildlife sightings are not guaranteed." },
        { q: "Are there Indigenous cultural experiences?", a: "Depending on the itinerary, guests may have opportunities to learn about Indigenous heritage, traditional connections to Country, cultural history, art and storytelling." },
        { q: "What is the best time to cruise the Kimberley?", a: "The Kimberley cruise season generally corresponds with the region's dry-season period. The ideal timing depends on whether you prioritize waterfall activity, weather or particular wildlife opportunities." },
        { q: "Is a Seabourn Kimberley cruise physically demanding?", a: "Some activities can require moderate mobility, including getting into and out of Zodiacs, walking on uneven surfaces and participating in shore excursions." },
        { q: "What should I pack for a Kimberley cruise?", a: "Pack lightweight breathable clothing, sun protection, comfortable walking shoes, swimwear, sunglasses, a hat, binoculars and appropriate protection for cameras and electronics." },
        { q: "Is Seabourn Kimberley suitable for couples?", a: "Yes. Couples can enjoy a combination of adventure during the day and luxury, dining and relaxation onboard." },
        { q: "Is Seabourn Kimberley suitable for solo travelers?", a: "Yes. The intimate expedition environment provides many opportunities to meet fellow guests through excursions and onboard activities." },
        { q: "Is a Kimberley cruise good for families?", a: "It can suit adventurous multigenerational families, although travelers should consider mobility, heat, Zodiac access and age requirements." },
        { q: "Is a Seabourn Kimberley cruise worth it?", a: "For travelers who value remote destinations, wildlife, expedition experiences, Indigenous culture and luxury service, a Seabourn Kimberley cruise can be an excellent choice." },
        { q: "Can Kimberley cruise itineraries change?", a: "Yes. Expedition itineraries can change because of weather, tides, wildlife conditions, safety considerations and other local factors." },
        { q: "Is the Kimberley a luxury cruise destination?", a: "The Kimberley itself is a remote wilderness destination rather than a conventional luxury resort area. A Seabourn expedition adds a luxury onboard experience to the remote environment." },
        { q: "Is Seabourn Kimberley different from a regular Seabourn cruise?", a: "Yes. Kimberley voyages place considerably more emphasis on expedition activities, Zodiac excursions, wildlife, remote landscapes and shore exploration than a conventional port-focused ocean cruise." },
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
    { feature: "Destination", value: "Kimberley, Western Australia" },
    { feature: "Cruise style", value: "Luxury expedition" },
    { feature: "Main attraction", value: "Remote landscapes and wildlife" },
    { feature: "Shore access", value: "Zodiac excursions" },
    { feature: "Wildlife", value: "Crocodiles, birds, marine life and other native species" },
    { feature: "Scenery", value: "Cliffs, waterfalls, beaches, rivers and tidal landscapes" },
    { feature: "Cultural experiences", value: "Indigenous heritage and local cultural interpretation" },
    { feature: "Activities", value: "Zodiac rides, hikes, wildlife viewing and exploration" },
    { feature: "Sailing season", value: "Primarily during the Kimberley's dry-season months" },
    { feature: "Best for", value: "Adventure travelers, couples, photographers and luxury expedition cruisers" },
];

const whyTakeList = [
    "Remote coastal landscapes", "Zodiac exploration", "Waterfalls", "Wildlife encounters",
    "Indigenous cultural experiences", "Scenic cruising", "Hiking", "Beaches",
    "River and tidal environments", "Luxury accommodation",
];

const specialList = [
    "Deep red cliffs", "Turquoise water", "Rocky coastlines", "Hidden beaches", "River systems",
    "Waterfalls", "Mangroves", "Tidal flats", "Ancient landscapes", "Remote islands",
];

const zodiacProvideList = [
    "Explore narrow waterways", "Approach waterfalls", "View cliffs from the water",
    "Reach remote beaches", "Observe wildlife", "Explore tidal environments",
];

const zodiacConditionsList = [
    "Calm water", "Waves", "Spray", "Strong sunlight", "Changing tides", "Rocky landing areas",
    "Wet landings", "Windy conditions", "Warm temperatures", "Varying sea states"
];

const waterfallExploreList = ["Zodiac", "Scenic cruising", "Shore landing", "Guided expedition"];

const wildlifeCards = [
    {
        icon: Compass,
        title: "Seabourn Kimberley Wildlife",
        text: "Wildlife is another major reason travelers choose this region.",
        listTitle: "Depending on the itinerary, conditions and season, travelers may encounter:",
        items: [
            "Saltwater crocodiles",
            "Sea turtles",
            "Dolphins",
            "Whales",
            "Rays",
            "Sea birds",
            "Shore birds",

        ],
        footer: "Wildlife sightings are never guaranteed, but the remote environment creates excellent opportunities for observation."
    },
    {
        icon: Fish,
        title: "Marine Wildlife",
        text: "The Kimberley is also home to diverse marine life.",
        listTitle: "Depending on location and season, guests may encounter:",
        items: [
            "Dolphins",
            "Sea turtles",
            "Rays",
            "Fish",
            "Whales",
            "Other marine species"
        ],
        footer: "Travelers interested in wildlife photography should keep binoculars and a camera readily accessible."
    },
    {
        icon: Bird,
        title: "Birdwatching in the Kimberley",
        text: "Birdlife can be particularly rewarding for nature-focused travelers.",
        listTitle: "Keep an eye out around:",
        items: [
            "Cliffs",
            "Beaches",
            "Mangroves",
            "River mouths",
            "Islands",
            "Waterfalls"
        ],
        footer: "A good pair of binoculars can significantly enhance the experience."
    }
];

const indigenousFocusList = ["Indigenous history", "Traditional knowledge", "Cultural heritage", "Connection to Country", "Art", "Stories and traditions", "Ancient rock art"];

const indigenousMattersList = [
    "How people have lived in the region", "Connections between communities and Country",
    "Traditional knowledge", "The significance of landscapes", "The history represented through art and storytelling",
];

const hikingActivitiesList = ["Guided walks", "Short hikes", "Beach exploration", "Scenic viewpoints", "Wildlife observation", "Cultural interpretation"];

const physicallyPreparedList = [
    "Getting in and out of Zodiacs", "Walking on uneven surfaces", "Short hikes",
    "Beach landings", "Exposure to sun and heat", "Variable weather and water conditions",
];

const scenicList = ["Red cliffs", "Islands", "Beaches", "Waterfalls", "Tidal rivers"];

const seasonCards = [
    {
        icon: Sunrise,
        title: "Best Time for a Seabourn Kimberley Cruise",
        text: "The Kimberley cruise season is generally concentrated around the region's dry season, when conditions are more suitable for expedition cruising.",
        listTitle: "The period is generally associated with:",
        items: [
            "Lower rainfall",
            "Warmer conditions",
            "Better access to many expedition sites",
            "More predictable cruising conditions"
        ],
        footer: "The exact season and sailing dates depend on the cruise itinerary."
    },
    {
        icon: ThermometerSun,
        title: "Kimberley Weather",
        text: "The Kimberley is known for a tropical climate.",
        listTitle: "Travelers should expect:",
        items: [
            "Strong sunlight",
            "Warm temperatures",
            "Humidity",
            "Variable coastal conditions",
            "Significant seasonal differences"
        ],
        footer: "Sun protection should be treated as an essential part of packing."
    }
];

const packingData = [
    { title: "Essential Clothing", items: ["Lightweight shirts", "Breathable trousers or shorts", "Comfortable walking clothing", "Lightweight layers", "Swimwear", "Sun hat", "Comfortable walking shoes", "Sandals or suitable water footwear"] },
    { title: "Expedition Essentials", items: ["Sunglasses", "Sunscreen", "Insect protection", "Reusable water bottle", "Small day bag", "Binoculars", "Camera", "Waterproof protection for electronics"] },
    { title: "Evening Clothing", items: ["Seabourn's onboard environment remains sophisticated", "Appropriate smart-casual clothing for evenings"] },
    { title: "Footwear", items: ["Comfortable walking shoes", "Shoes suitable for uneven surfaces", "Sandals", "Water-friendly footwear if recommended for your itinerary"] },
];

const onboardList = ["Comfortable suites", "Fine dining", "Lounge spaces", "Wellness facilities", "Pool areas", "Relaxed social spaces"];

const expeditionBuiltList = ["Wildlife", "Remote landscapes", "Zodiac exploration", "Cultural experiences", "Scenic cruising", "Shore landings", "Natural history"];

const kimberleyColumnList = [
    "Remote wilderness", "Zodiac excursions", "Wildlife viewing", "Expedition team",
    "Shore landings", "Hiking and exploration", "Natural landscapes", "Adventure-focused",
];
const traditionalColumnList = [
    "Developed destinations", "Standard shore excursions", "Cultural sightseeing", "Traditional cruise staff",
    "Port calls", "Guided city tours", "Museums, restaurants and cities", "Leisure-focused",
];

const whoShouldList = [
    "Adventure travelers", "Wildlife enthusiasts", "Photographers", "Nature lovers", "Couples",
    "Experienced cruisers", "Luxury travelers", "Travelers interested in Indigenous culture", "Travelers who enjoy remote destinations",
];

const familiesConsiderList = ["Activity levels", "Zodiac access", "Heat", "Walking conditions", "Age requirements", "Individual mobility"];

const worthFormula = ["Remote access", "Luxury accommodation", "Expedition expertise", "Zodiac exploration", "Wildlife encounters", "Indigenous cultural experiences", "Scenic cruising"];

const prosList = [
    "Access to remote Kimberley landscapes", "Zodiac excursions", "Wildlife viewing", "Waterfall experiences",
    "Indigenous cultural interpretation", "Expedition expertise", "Luxury accommodations", "Fine dining",
    "Scenic cruising", "Small-ship atmosphere", "Excellent photography opportunities",
];
const consList = [
    "Warm and potentially humid conditions", "Expedition activities can be physically demanding",
    "Wildlife sightings cannot be guaranteed", "Weather and tides can affect excursions",
    "Some shore landings may be challenging", "Limited traditional city sightseeing",
];

const tipsData = [
    { title: "Choose the season carefully", text: "Timing can influence waterfall activity, weather and expedition conditions." },
    { title: "Prioritize mobility", text: "Make sure you are comfortable with Zodiac boarding and shore exploration." },
    { title: "Pack for the sun", text: "Sun protection is essential." },
    { title: "Bring binoculars", text: "They can significantly improve wildlife viewing." },
    { title: "Protect your camera", text: "Water spray and wet landings make waterproof protection useful." },
    { title: "Be flexible", text: "Expedition itineraries can change because of weather, tides and local conditions." },
    { title: "Don't focus only on ports", text: "Some of the most memorable moments happen between scheduled landings." },
    { title: "Consider working with a luxury travel advisor", text: "A knowledgeable advisor can help match the sailing season, itinerary, suite and expedition expectations to your travel style." },
];



/* ── Component ─────────────────────────────────────────────────── */
const SeabournKimberleyCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Kimberley Cruises: Itineraries, Wildlife & Zodiacs</title>
                <meta name="title" content="Seabourn Kimberley Cruises: Itineraries, Wildlife & Zodiacs" />
                <meta
                    name="description"
                    content="Explore Seabourn Kimberley cruises with Zodiac excursions, waterfalls, Indigenous culture, wildlife, remote landscapes and the best time to sail Australia's Kimberley coast."
                />
                <script type="application/ld+json">{JSON.stringify(seabournKimberleySchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Kimberley Cruises <br /> Wildlife, Waterfalls & Zodiacs</h1>
                    <p>
                        A Seabourn Kimberley cruise offers an opportunity to explore one of Australia's most
                        remote and dramatic coastal regions from the water.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                The Kimberley, in Western Australia's far northwest, is known for its rugged
                                coastline, red cliffs, secluded beaches, waterfalls, tidal rivers, Indigenous
                                cultural heritage and abundant wildlife. Rather than exploring the region through
                                conventional sightseeing, Seabourn's Kimberley voyages emphasize expedition-style
                                exploration.
                            </p>
                            <p>
                                Guests can use Zodiacs to reach remote shorelines, discover waterfalls and
                                beaches, observe wildlife and experience landscapes that are difficult to access
                                by road. The result is a style of luxury travel that combines Seabourn's onboard
                                experience with adventure and exploration.
                            </p>
                            <p>
                                This guide covers what to expect from a Seabourn Kimberley cruise, including
                                waterfalls, Zodiac excursions, wildlife, Indigenous culture, the sailing season,
                                activities, packing and who this itinerary is best suited for.
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
                            Start Planning Your Seabourn Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE (new Kbc-glance classes) ────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Overview</span>
                        <h2 className="Sbc-h2">Seabourn Kimberley Cruises <br /> at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Kbc-glance-table-wrapper">
                        <div className="Kbc-glance-table">
                            <div className="Kbc-glance-row Kbc-glance-head">
                                <span>Feature</span>
                                <span>Seabourn Kimberley Cruises</span>
                            </div>
                            {glanceData.map((row, i) => (
                                <div className="Kbc-glance-row" key={i}>
                                    <span className="Kbc-glance-feature">{row.feature}</span>
                                    <span className="Kbc-glance-value">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY TAKE A KIMBERLEY CRUISE ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-why-take">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Case For It</span>
                        <h2 className="Sbc-h2">Why Take a Seabourn Kimberley Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The Kimberley is not a destination that can be fully appreciated from a
                            conventional sightseeing itinerary. Its remote geography is one of its biggest
                            attractions. A cruise allows travelers to experience landscapes that may be
                            difficult to reach independently while returning each evening to the comfort of
                            a luxury expedition ship.
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-white)' }}>
                                <h4 className="Sbc-highlights-title">A Seabourn Kimberley itinerary can combine:</h4>
                                <ul className="Sbc-highlights-list">
                                    {whyTakeList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                This combination makes the Kimberley particularly attractive to travelers who
                                want adventure without giving up comfort.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Kimberley Expedition Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES THE KIMBERLEY SPECIAL ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-special">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Dramatic Contrasts</span>
                        <h2 className="Sbc-h2">What Makes the Kimberley Special?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The Kimberley is characterized by dramatic contrasts. Travelers can encounter a
                            wide range of landscapes and colors. The scale and isolation of the region are
                            part of the experience. Instead of moving between heavily developed tourist
                            centers, travelers spend much of the voyage surrounded by wilderness.
                        </p>
                    </div>

                    <div className="Kbc-special-grid">
                        {specialList.map((v, i) => (
                            <div key={i} className="Kbc-special-item">
                                <span className="Kbc-special-dot"></span>
                                <span className="Kbc-special-text">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ZODIAC EXCURSIONS ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-zodiac">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Ashore</span>
                        <h2 className="Sbc-h2">Seabourn Kimberley Zodiac Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Kbc-zodiac-grid">
                        {/* Card 1 */}
                        <div className="Kbc-zodiac-card">
                            <div className="Kbc-zodiac-image-container">
                                <div className="Kbc-zodiac-image-placeholder">
                                    <Anchor size={40} className="Kbc-zodiac-placeholder-icon" />
                                    <span className="Kbc-zodiac-placeholder-text">Seabourn Kimberley Zodiac Excursion Image Placeholder</span>
                                </div>
                            </div>
                            <div className="Kbc-zodiac-content">
                                <p className="Sbc-p">
                                    Zodiac excursions are one of the defining features of a Kimberley expedition
                                    cruise. These smaller inflatable boats allow the expedition team to take
                                    guests closer to the coastline and into areas that the main ship cannot
                                    reach.
                                </p>
                                <div className="Sbc-qa-card" style={{ marginTop: "auto" }}>
                                    <h4 className="Sbc-qa-card-title">A Zodiac excursion can provide opportunities to:</h4>
                                    <ul className="Sbc-highlights-list">
                                        {zodiacProvideList.map((item, idx) => (
                                            <li key={idx}>
                                                <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="Kbc-zodiac-card">
                            <div className="Kbc-zodiac-image-container">
                                <div className="Kbc-zodiac-image-placeholder">
                                    <Waves size={40} className="Kbc-zodiac-placeholder-icon" />
                                    <span className="Kbc-zodiac-placeholder-text">Zodiac Expedition Conditions Image Placeholder</span>
                                </div>
                            </div>
                            <div className="Kbc-zodiac-content">
                                <p className="Sbc-p">
                                    Zodiac outings are typically conducted with an expedition team. Guests board
                                    the smaller boats from the ship and travel along the coast or toward a
                                    particular landing site. Conditions can vary significantly. Comfortable
                                    outdoor clothing and appropriate footwear are therefore important.
                                </p>
                                <div className="Kbc-zodiac-conditions-box" style={{ marginTop: "auto" }}>
                                    <h4 className="Kbc-zodiac-conditions-title">Outing Conditions:</h4>
                                    <ul className="Sbc-dining-venues">
                                        {zodiacConditionsList.map((v, i) => (
                                            <li key={i}>{v}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KIMBERLEY WATERFALLS ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-waterfalls">
                <div className="Sbc-container">
                    <div className="Kbc-waterfalls-split">
                        {/* Left Content Column */}
                        <div className="Kbc-waterfalls-info">
                            <div className="Kbc-waterfalls-header">
                                <span className="Sbc-eyebrow">Seasonal Cascades</span>
                                <h2 className="Sbc-h2">Kimberley Waterfalls</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p Kbc-waterfalls-intro-p">
                                Waterfalls are among the most memorable features of the Kimberley during the
                                cruising season. Seasonal rainfall creates waterfalls that flow from the
                                region's rugged cliffs toward the sea. The combination of red rock, tropical
                                vegetation and cascading water creates some of the region's most dramatic
                                scenery.
                            </p>

                            <h3 className="Sbc-h3 Kbc-waterfalls-sub">Why Waterfalls Are Seasonal</h3>
                            <p className="Sbc-p Kbc-waterfalls-desc-p">
                                The Kimberley's climate has a distinct wet and dry season. Rainfall during the
                                wetter months feeds rivers and waterfalls. As the dry season progresses, some
                                waterfalls can become less powerful or change significantly. This is one
                                reason the timing of a Kimberley cruise matters. Travelers interested
                                specifically in waterfalls should discuss the timing of their voyage with an
                                experienced travel advisor.
                            </p>
                        </div>

                        {/* Right Explorer Card Column */}
                        <div className="Kbc-waterfalls-card">
                            <div className="Kbc-waterfalls-image-container">
                                <div className="Kbc-waterfalls-image-placeholder">
                                    <Droplets size={40} className="Kbc-waterfalls-placeholder-icon" />
                                    <span className="Kbc-waterfalls-placeholder-text">Kimberley Waterfalls Image Placeholder</span>
                                </div>
                            </div>
                            <div className="Kbc-waterfalls-card-content">
                                <h4 className="Kbc-waterfalls-card-title">Depending on the itinerary and conditions, guests may explore waterfalls by:</h4>
                                <ul className="Kbc-waterfalls-list">
                                    {waterfallExploreList.map((item, idx) => (
                                        <li key={idx}>
                                            <ChevronRight size={16} strokeWidth={3} className="Kbc-waterfalls-arrow-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Remote Expedition Travel</span>
                    <h3 className="Sbc-cta-title">Explore Seabourn Kimberley Voyages</h3>
                    <p className="Sbc-cta-text">
                        Let's compare sailing dates, suite categories and expedition inclusions to plan your
                        Kimberley expedition cruise.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WILDLIFE ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-wildlife">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Native Species</span>
                        <h2 className="Sbc-h2">Seabourn Kimberley Wildlife</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Kbc-wildlife-grid">
                        {wildlifeCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Kbc-wildlife-card" key={i}>
                                    <div className="Kbc-wildlife-icon-wrapper">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="Kbc-wildlife-title">{card.title}</h3>
                                    <p className="Kbc-wildlife-intro">{card.text}</p>
                                    {card.text2 && <p className="Kbc-wildlife-intro" style={{ marginTop: "8px" }}>{card.text2}</p>}

                                    <div className="Kbc-wildlife-list-wrapper">
                                        <h4 className="Kbc-wildlife-list-title">{card.listTitle}</h4>
                                        <ul className="Kbc-wildlife-editorial-list">
                                            {card.items.map((item, idx) => (
                                                <li key={idx}>
                                                    <ChevronRight size={14} strokeWidth={3} className="Kbc-wildlife-arrow-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="Kbc-wildlife-footer">
                                        {card.footer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── INDIGENOUS CULTURE ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-culture">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Connection to Country</span>
                        <h2 className="Sbc-h2">Seabourn Kimberley Indigenous Culture</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Kbc-culture-grid">
                        {/* Card 1 */}
                        <div className="Kbc-culture-card">
                            <div className="Kbc-culture-image-container">
                                <div className="Kbc-culture-image-placeholder">
                                    <Palette size={40} className="Kbc-culture-placeholder-icon" />
                                    <span className="Kbc-culture-placeholder-text">Seabourn Kimberley Indigenous Culture Image Placeholder</span>
                                </div>
                            </div>
                            <div className="Kbc-culture-content">
                                <h3 className="Sbc-h3">Seabourn Kimberley Indigenous Culture</h3>
                                <p className="Sbc-p">
                                    The Kimberley has a deep Indigenous cultural heritage.
                                </p>
                                <p className="Sbc-p">
                                    Cultural experiences can provide travelers with insight into the region's traditional connections to land, sea and waterways.
                                </p>
                                <div className="Sbc-qa-card" style={{ marginTop: "auto" }}>
                                    <h4 className="Sbc-qa-card-title">Depending on the itinerary and available programming, experiences may focus on:</h4>
                                    <ul className="Sbc-highlights-list">
                                        {indigenousFocusList.map((item, idx) => (
                                            <li key={idx}>
                                                <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="Kbc-culture-footer" style={{ marginTop: "auto" }}>
                                    These experiences can provide an important dimension beyond the region's scenery and wildlife.
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="Kbc-culture-card">
                            <div className="Kbc-culture-image-container">
                                <div className="Kbc-culture-image-placeholder">
                                    <Heart size={40} className="Kbc-culture-placeholder-icon" />
                                    <span className="Kbc-culture-placeholder-text">Why Indigenous Experiences Matter Image Placeholder</span>
                                </div>
                            </div>
                            <div className="Kbc-culture-content">
                                <h3 className="Sbc-h3">Why Indigenous Experiences Matter</h3>
                                <p className="Sbc-p">
                                    A Kimberley cruise is not simply a wildlife or scenic adventure.
                                </p>
                                <p className="Sbc-p">
                                    The region's Indigenous heritage is an essential part of understanding the destination.
                                </p>
                                <div className="Sbc-qa-card" style={{ marginTop: "auto" }}>
                                    <h4 className="Sbc-qa-card-title">Cultural interpretation can help travelers appreciate:</h4>
                                    <ul className="Sbc-highlights-list">
                                        {indigenousMattersList.map((item, idx) => (
                                            <li key={idx}>
                                                <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="Kbc-culture-footer" style={{ marginTop: "auto" }}>
                                    This can make the cruise more meaningful than simply photographing dramatic scenery.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HIKING & SHORE EXPLORATION ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-hiking">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">On Foot</span>
                        <h2 className="Sbc-h2">Seabourn Kimberley Hiking and Shore Exploration</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Kbc-hiking-grid">
                        {/* Card 1 */}
                        <div className="Kbc-hiking-card">
                            <h3 className="Kbc-hiking-title">Seabourn Kimberley Hiking and Shore Exploration</h3>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                Zodiac excursions are only one part of the expedition experience.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "28px" }}>
                                Depending on the itinerary and conditions, guests may also have opportunities to explore ashore.
                            </p>

                            <div className="Kbc-hiking-editorial-section">
                                <h4 className="Kbc-hiking-editorial-label">Activities can include:</h4>
                                <ul className="Kbc-hiking-editorial-list">
                                    {hikingActivitiesList.map((item, idx) => (
                                        <li key={idx}>
                                            <ChevronRight size={16} strokeWidth={3} className="Kbc-hiking-check-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Kbc-hiking-footer">
                                Walking conditions can be uneven and may include rocky surfaces, sand or natural trails.
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="Kbc-hiking-card">
                            <h3 className="Kbc-hiking-title">Is a Seabourn Kimberley Cruise Physically Active?</h3>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                It can be. The level of activity varies significantly depending on the excursions you choose to join.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "28px" }}>
                                Travelers should be prepared for a range of physical conditions.
                            </p>
                            <div className="Kbc-hiking-editorial-section">
                                <h4 className="Kbc-hiking-editorial-label">The level of activity varies by excursion, but travelers should be prepared for:</h4>
                                <ul className="Kbc-hiking-editorial-list">
                                    {physicallyPreparedList.map((item, idx) => (
                                        <li key={idx}>
                                            <ChevronRight size={16} strokeWidth={3} className="Kbc-hiking-check-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Kbc-hiking-footer">
                                You do not necessarily need to be an experienced hiker, but a reasonable level of mobility is helpful.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC CRUISING ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-scenic">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">From the Water</span>
                        <h2 className="Sbc-h2">Seabourn Kimberley Scenic Cruising</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Not every memorable moment requires leaving the ship. Some of the Kimberley's most
                            dramatic scenery can be experienced from the water. This is one of the advantages
                            of expedition cruising: the journey between landing sites can itself be an
                            attraction.
                        </p>
                    </div>

                    <div className="Kbc-special-grid">
                        {scenicList.map((v, i) => (
                            <div key={i} className="Kbc-special-item">
                                <span className="Kbc-special-dot"></span>
                                <span className="Kbc-special-text">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BEST TIME / TIMING / WEATHER ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-season">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Planning Your Voyage</span>
                        <h2 className="Sbc-h2">When to Sail the Kimberley</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Kbc-season-grid">
                        {seasonCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Kbc-season-card" key={i}>
                                    <div className="Kbc-season-image-container">
                                        <div className="Kbc-season-image-placeholder">
                                            <Icon size={40} className="Kbc-season-placeholder-icon" />
                                            <span className="Kbc-season-placeholder-text">{card.title} Image Placeholder</span>
                                        </div>
                                    </div>
                                    <div className="Kbc-season-content">
                                        <h3 className="Sbc-h3" style={{ margin: 0 }}>{card.title}</h3>
                                        <p className="Sbc-p" style={{ margin: 0 }}>
                                            {card.text}
                                        </p>
                                        <div className="Sbc-qa-card" style={{ marginTop: "auto" }}>
                                            <h4 className="Sbc-qa-card-title">{card.listTitle}</h4>
                                            <ul className="Sbc-highlights-list">
                                                {card.items.map((item, idx) => (
                                                    <li key={idx}>
                                                        <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="Kbc-season-footer">
                                            {card.footer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Find Your Ideal Kimberley Sailing Date</h3>
                    <p className="Sbc-cta-text">
                        We'll help you match waterfall activity, weather and wildlife opportunities to the
                        right departure date.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Check Sailing Dates
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PACKING ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Kbc-packing">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Ready</span>
                        <h2 className="Sbc-h2">What to Pack for a Seabourn Kimberley Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Packing for the Kimberley is different from packing for a traditional luxury
                            cruise. You'll want clothing suitable for both luxury ship life and expedition
                            activities.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        {packingData.map((cat, i) => (
                            <div className="Sbc-includes-card" key={i}>
                                <div className="Sbc-includes-title">{cat.title}</div>
                                <ul>
                                    {cat.items.map((item, j) => (
                                        <li key={j}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="Sbc-includes-note">
                        <p>
                            <strong>What shoes should you bring?</strong> Footwear should be chosen with shore
                            activities in mind. The appropriate footwear can make a major difference during
                            Zodiac landings and shore walks.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ONBOARD EXPERIENCE ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-onboard">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-section-header" style={{ textAlign: "left", margin: 0, padding: 0 }}>
                                <span className="Sbc-eyebrow">Back on the Ship</span>
                                <h2 className="Sbc-h2" style={{ margin: "12px 0 20px" }}>What Is the Seabourn Kimberley Experience Like Onboard?</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 24px" }}></div>
                            </div>
                            <p className="Sbc-p" style={{ marginBottom: "28px" }}>
                                The ship provides a contrast to the rugged environment outside. After a day of
                                exploring, guests can return to comfort. That contrast is one of the major
                                attractions of luxury expedition cruising. You can spend the day exploring remote
                                wilderness and return to a sophisticated onboard environment in the evening.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ margin: 0 }}>
                                <h4 className="Sbc-highlights-title">After a day of exploring, guests can return to:</h4>
                                <ul className="Sbc-highlights-list" style={{ gridTemplateColumns: "1fr" }}>
                                    {onboardList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="Sbc-what-image-container" style={{ height: "100%" }}>
                            <div className="Sbc-what-image-placeholder" style={{ minHeight: "100%", height: "100%" }}>
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Home size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Kimberley Onboard Experience Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT AN EXPEDITION CRUISE ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Tent size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Kimberley Expedition Cruise Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Defining the Style</span>
                                <h2 className="Sbc-h2">Is Seabourn Kimberley an Expedition Cruise?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Yes. The experience combines luxury cruising with expedition-style exploration.
                                The focus is not simply on visiting ports. This makes the Kimberley quite
                                different from a conventional city-focused cruise.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Instead, the itinerary is built around:</h4>
                                <ul className="Sbc-highlights-list">
                                    {expeditionBuiltList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KIMBERLEY VS TRADITIONAL LUXURY CRUISE ───────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-vs-traditional">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn Kimberley vs. <br /> Traditional Luxury Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Compass size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Kimberley Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn Kimberley</h3>
                            <p className="Sbc-compare-sub">Defined by:</p>
                            <ul className="Sbc-compare-list">
                                {kimberleyColumnList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Traditional Luxury Cruise Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Traditional Luxury Cruise</h3>
                            <p className="Sbc-compare-sub">Defined by:</p>
                            <ul className="Sbc-compare-list">
                                {traditionalColumnList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>The Kimberley is ideal for travelers who want luxury combined with adventure.</p>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD TAKE THIS CRUISE ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-who-should">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Should Take a Seabourn Kimberley Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">This itinerary is particularly well suited to:</p>
                    </div>

                    <div className="Kbc-special-grid">
                        {whoShouldList.map((v, i) => (
                            <div key={i} className="Kbc-special-item">
                                <span className="Kbc-special-dot"></span>
                                <span className="Kbc-special-text">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── CTA 3 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Ready to Explore?</span>
                    <h3 className="Sbc-cta-title">Start Planning Your Seabourn Kimberley Cruise</h3>
                    <p className="Sbc-cta-text">
                        Let's design an itinerary around waterfalls, wildlife, Indigenous culture and
                        expedition adventure.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── GOOD FOR COUPLES ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-couples">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Romance & Adventure</span>
                                <h2 className="Sbc-h2">Is Seabourn Kimberley Good for Couples?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Yes. Couples can enjoy a balance of adventure and relaxation. One day might
                                involve a Zodiac excursion and wildlife viewing, followed by an elegant dinner
                                and quiet evening onboard.
                            </p>
                            <p className="Sbc-p">
                                That combination makes the Kimberley attractive for couples who don't want to
                                choose between adventure and luxury.
                            </p>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Kimberley Couples Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GOOD FOR SOLO TRAVELERS ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-solo">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Kimberley Solo Travelers Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Independent Travel</span>
                                <h2 className="Sbc-h2">Is Seabourn Kimberley Good for Solo Travelers?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Yes. The expedition environment naturally encourages interaction. Guests often
                                share Zodiac excursions, lectures and shore experiences, creating opportunities
                                to meet fellow travelers.
                            </p>
                            <p className="Sbc-p">
                                The relatively intimate atmosphere can make the journey particularly
                                comfortable for independent travelers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GOOD FOR FAMILIES ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-families">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Family Travel</span>
                                <h2 className="Sbc-h2">Is Seabourn Kimberley Good for Families?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                It can be suitable for adventurous multigenerational families, depending on the
                                ages and mobility of the travelers. However, this is not a traditional family
                                cruise with extensive children's entertainment.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Families should consider:</h4>
                                <ul className="Sbc-highlights-list">
                                    {familiesConsiderList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Kimberley Families Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT WORTH IT ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-worth-it">
                <div className="Sbc-container">
                    <div className="Kbc-worth-split">
                        <div className="Kbc-worth-info">
                            <div className="Sbc-section-header Sbc-align-left" style={{ margin: 0, padding: 0 }}>
                                <span className="Sbc-eyebrow">The Value Proposition</span>
                                <h2 className="Sbc-h2" style={{ margin: "12px 0 20px" }}>Is a Seabourn Kimberley Cruise Worth It?</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 24px" }}></div>
                            </div>
                            <p className="Sbc-p" style={{ fontSize: "17px", fontWeight: "500", color: "var(--navy)", marginBottom: "16px" }}>
                                For travelers who want to experience the Kimberley's remote landscapes in
                                comfort, a Seabourn Kimberley cruise can be an exceptional luxury expedition
                                experience.
                            </p>
                            <p className="Sbc-p" style={{ color: "#4b586c", margin: 0 }}>
                                Rather than simply sightseeing from a hotel or road, you experience the
                                destination as part of the journey.
                            </p>
                        </div>

                        <div className="Kbc-worth-box">
                            <h4 className="Kbc-worth-box-title">The value comes from combining:</h4>
                            <div className="Kbc-worth-items-grid">
                                {worthFormula.map((item, i) => (
                                    <div className="Kbc-worth-item" key={i}>
                                        <div className="Kbc-worth-item-num">{i + 1}</div>
                                        <span className="Kbc-worth-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Kimberley Pros and Cons</h2>
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

            {/* ── TIPS FOR PLANNING (new Kbc-tips classes) ─────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Kbc-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">Tips for Planning a Seabourn Kimberley Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Kbc-tips-grid">
                        {tipsData.map((tip, i) => (
                            <div className="Kbc-tip-card" key={i}>
                                <div className="Kbc-tip-number">{i + 1}</div>
                                <h3 className="Kbc-tip-title">{tip.title}</h3>
                                <p className="Kbc-tip-text">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
            <section className="Sbc-expert-section" id="Kbc-expert-insight">
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

            {/* ── FAQ ───────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Kbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a Seabourn Kimberley cruise.
                        </p>
                    </div>
                    <KimberleyFAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Kbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is a Seabourn Kimberley Cruise Right for You?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Kimberley cruises are ideal for travelers who want to experience one of
                            Australia's most remote regions through a combination of luxury and expedition
                            travel. The destination offers a remarkable mix of red cliffs, waterfalls,
                            wildlife, Indigenous cultural heritage and rugged coastline.
                        </p>
                        <p className="Sbc-p">
                            Zodiac excursions make it possible to explore beyond the main ship, while the
                            luxury onboard environment provides a comfortable retreat after a day of
                            adventure.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If your ideal vacation combines wildlife,
                                nature, culture, photography and adventure with excellent service and
                                comfortable accommodations, the Kimberley deserves serious consideration.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Kimberley Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SeabournKimberleyCruisesGuide;