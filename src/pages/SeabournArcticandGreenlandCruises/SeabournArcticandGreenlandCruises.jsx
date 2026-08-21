import { useState, Fragment } from "react";
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
    Wine,
    Sun,
    Gem,
    Heart,
    Compass,
    Mountain,
    Snowflake,
    MessageCircle,
    Users,
    Award,
    Sparkles,
    Bird,
    Fish,
    Tent,
    Backpack,
    Users2,
    Sunrise,
    Navigation,
    ThermometerSnowflake,
    Wind,
    BookOpen,
    Dot,
    Star,
    MapPin,
} from "lucide-react";
import AboutImage from "../../assets/AboutAngela.jpeg";
import Nav from "../../components/Navbar/Nav";

import { Helmet } from "react-helmet-async";
import "./SeabournArcticGreenland.css";

/* ── FAQ data (declared first so schema below can reference it) ──── */
const faqData = [
    { q: "What is a Seabourn Arctic cruise?", a: "A Seabourn Arctic cruise is a luxury expedition voyage exploring remote northern destinations such as Greenland, Svalbard, Iceland and the Canadian Arctic." },
    { q: "Does Seabourn cruise to Greenland?", a: "Yes. Greenland is an important destination within Seabourn's Arctic expedition program. Current and future itineraries include Greenland and its fjords and remote northern landscapes." },
    { q: "Does Seabourn cruise to Svalbard?", a: "Yes. Seabourn offers expedition itineraries featuring Svalbard, including voyages designed to explore the archipelago in greater depth." },
    { q: "Which Seabourn ships sail the Arctic?", a: "Seabourn Venture and Seabourn Pursuit are the company's purpose-built expedition ships used for Arctic exploration." },
    { q: "Can you see polar bears on a Seabourn Arctic cruise?", a: "Polar bears are among the wildlife travelers may search for in Arctic regions such as Svalbard and the Canadian Arctic. Sightings are never guaranteed." },
    { q: "What other wildlife can you see?", a: "Possible wildlife includes walruses, seals, beluga whales, other whales, Arctic foxes, muskox, caribou and numerous seabirds." },
    { q: "Are Zodiac excursions included?", a: "Seabourn's Arctic program includes Zodiac cruises and selected landings as part of the expedition experience. Specific inclusions should always be confirmed for the individual sailing." },
    { q: "Can you go ashore in Greenland?", a: "Yes. Depending on the itinerary and conditions, guests can participate in shore landings, guided walks and cultural experiences." },
    { q: "Can you see the Northern Lights?", a: "Potentially. The Northern Lights depend on darkness, solar activity and weather. Seabourn specifically highlights opportunities to search for the aurora on Arctic voyages." },
    { q: "What is the best time for a Seabourn Arctic cruise?", a: "The main expedition season is during the Arctic's warmer months. Seabourn's current programs include summer Arctic voyages, with exact timing varying by destination and year." },
    { q: "Is Greenland or Svalbard better?", a: "It depends on your interests. Choose Greenland for immense fjords, glaciers and Arctic communities. Choose Svalbard for High Arctic landscapes, sea ice and strong polar wildlife opportunities." },
    { q: "Is a Seabourn Arctic cruise physically demanding?", a: "Some excursions can be moderately active, particularly Zodiac boarding, shore landings and hikes. Activity levels vary by excursion." },
    { q: "Do I need previous expedition experience?", a: "No. Seabourn's Expedition Team guides guests throughout the voyage, making the experience accessible to first-time expedition travelers." },
    { q: "What should I pack for a Seabourn Arctic cruise?", a: "Bring waterproof outerwear, warm layers, waterproof footwear, gloves, a hat, sunglasses, sunscreen, binoculars and appropriate photography equipment." },
    { q: "Does Seabourn provide expedition gear?", a: "Selected Seabourn Arctic voyages include expedition items such as a custom parka and waterproof day pack. Check the specific sailing's inclusions before packing." },
    { q: "Is kayaking available?", a: "Kayaking is available as an optional experience on selected Arctic itineraries." },
    { q: "Is a Seabourn Greenland cruise worth it?", a: "For travelers who value remote landscapes, wildlife, expedition exploration and luxury service, a Seabourn Greenland cruise can be an excellent choice." },
    { q: "Is Seabourn Arctic better than Antarctica?", a: "Neither is universally better. The Arctic is especially appealing for Greenland, Svalbard, polar bears and Arctic cultures, while Antarctica is particularly compelling for penguins, ice landscapes and the Antarctic Peninsula." },
];

const seabournArcticGreenlandSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#webpage",
            "url": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/",
            "name": "Seabourn Arctic & Greenland Cruises: Svalbard & Wildlife",
            "headline": "Seabourn Arctic & Greenland Cruises: Svalbard, Wildlife & Expedition Adventures",
            "description": "Explore Seabourn Arctic and Greenland cruises featuring Svalbard, Greenland, Iceland, wildlife, glaciers, Zodiac excursions, expedition activities and Arctic culture.",
            "keywords": [
                "Seabourn Arctic and Greenland Cruises",
                "Seabourn Arctic cruises",
                "Seabourn Greenland cruises",
                "Seabourn Arctic expedition",
                "Seabourn Greenland cruise",
                "Seabourn Svalbard cruise",
                "Seabourn Svalbard",
                "Seabourn Arctic itinerary",
                "Seabourn Greenland itinerary",
                "Seabourn Arctic wildlife",
                "Seabourn Greenland wildlife",
                "Seabourn Arctic expedition cruises",
                "Seabourn Venture Arctic",
                "Seabourn Pursuit Arctic",
                "Arctic luxury cruises",
                "Greenland expedition cruise",
                "Svalbard expedition cruise",
                "Arctic cruise best time",
                "Seabourn Arctic Northern Lights",
                "Seabourn Arctic Zodiac excursions",
                "Seabourn Arctic review"
            ],
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                "url": "https://www.tripsandships.com/",
                "name": "Trips & Ships Luxury Travel"
            },
            "breadcrumb": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#breadcrumb"
            },
            "mainEntity": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#experience"
            },
            "inLanguage": "en-US"
        },

        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#breadcrumb",
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
                    "name": "Seabourn Arctic & Greenland Cruises",
                    "item": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/"
                }
            ]
        },

        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#experience",
            "name": "Seabourn Arctic & Greenland Cruises",
            "description": "Ultra-luxury expedition cruises exploring Greenland, Svalbard, Iceland, Arctic Canada and other remote northern destinations through wildlife viewing, Zodiac exploration, guided walks, cultural experiences and expert-led expedition activities.",
            "url": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/",
            "brand": {
                "@type": "Brand",
                "name": "Seabourn"
            },
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "name": "Cruise Style",
                    "value": "Ultra-luxury expedition"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Main Regions",
                    "value": "Greenland, Svalbard, Iceland and Arctic Canada"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Expedition Ships",
                    "value": "Seabourn Venture and Seabourn Pursuit"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Popular Wildlife",
                    "value": "Polar bears, walruses, seals, whales and seabirds"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Expedition Activities",
                    "value": "Zodiac cruises, landings, walks, hikes and wildlife viewing"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Cultural Experiences",
                    "value": "Arctic communities, history and local traditions"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Scenery",
                    "value": "Glaciers, fjords, sea ice, mountains and tundra"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Northern Lights",
                    "value": "Possible on selected itineraries and conditions"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Best Travel Period",
                    "value": "Primarily Arctic summer"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Best For",
                    "value": "Wildlife lovers, photographers, adventure travelers and luxury expedition cruisers"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Zodiacs",
                    "value": "24 Zodiacs on purpose-built expedition ships"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Kayaking",
                    "value": "Available as an optional experience on selected itineraries"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Expedition Team",
                    "value": "Naturalists, biologists, historians, geologists, glaciologists, photographers and regional experts"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Primary Arctic Destinations",
                    "value": "Greenland, Svalbard, Iceland, Arctic Canada, Baffin Island, Ellesmere Island and Northwest Passage"
                }
            ]
        },

        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#features",
            "name": "Seabourn Arctic & Greenland Cruise Features",
            "description": "Key destinations, wildlife, expedition activities, cultural experiences and luxury features of Seabourn Arctic and Greenland cruises.",
            "numberOfItems": 8,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Greenland and Svalbard Exploration",
                    "description": "Seabourn Arctic itineraries can explore Greenland, Svalbard and other remote northern destinations featuring glaciers, fjords, sea ice, mountains and tundra."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Zodiac Expedition Experiences",
                    "description": "Purpose-built expedition ships carry 24 Zodiacs for remote coastline exploration, wildlife viewing, glacier cruising, shore landings and scenic exploration."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Arctic Wildlife Viewing",
                    "description": "Depending on the itinerary and conditions, guests may encounter polar bears, walruses, seals, beluga whales, other whales, Arctic foxes, caribou, muskox and seabirds."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Guided Walks and Hikes",
                    "description": "Expedition activities can include guided walks and hikes through tundra, beaches, coastal areas, historic sites, villages, scenic viewpoints and wildlife habitats."
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Expert Expedition Team",
                    "description": "Specialists including naturalists, biologists, historians, geologists, glaciologists and photographers provide briefings, lectures, wildlife interpretation, shore guidance and cultural context."
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Arctic Cultural Experiences",
                    "description": "Selected itineraries provide opportunities to learn about Indigenous traditions, Arctic communities, local history, traditional livelihoods and cultural relationships with the environment."
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Northern Lights and Polar Scenery",
                    "description": "Selected Arctic voyages provide opportunities to search for the Northern Lights while exploring glaciers, fjords, sea ice, mountains and other dramatic polar landscapes."
                },
                {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Luxury Expedition Cruising",
                    "description": "Seabourn combines remote expedition exploration with luxury accommodations, fine dining, premium beverages, comfortable lounges, spa facilities and wellness amenities."
                }
            ]
        },

        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a Seabourn Arctic cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A Seabourn Arctic cruise is a luxury expedition voyage exploring remote northern destinations such as Greenland, Svalbard, Iceland and the Canadian Arctic."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn cruise to Greenland?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Greenland is an important destination within Seabourn's Arctic expedition program. Current and future itineraries include Greenland and its fjords and remote northern landscapes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn cruise to Svalbard?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Seabourn offers expedition itineraries featuring Svalbard, including voyages designed to explore the archipelago in greater depth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which Seabourn ships sail the Arctic?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn Venture and Seabourn Pursuit are the company's purpose-built expedition ships used for Arctic exploration."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you see polar bears on a Seabourn Arctic cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Polar bears are among the wildlife travelers may search for in Arctic regions such as Svalbard and the Canadian Arctic. Sightings are never guaranteed."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What other wildlife can you see?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Possible wildlife includes walruses, seals, beluga whales, other whales, Arctic foxes, muskox, caribou and numerous seabirds."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Zodiac excursions included?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn's Arctic program includes Zodiac cruises and selected landings as part of the expedition experience. Specific inclusions should always be confirmed for the individual sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you go ashore in Greenland?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Depending on the itinerary and conditions, guests can participate in shore landings, guided walks and cultural experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you see the Northern Lights?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Potentially. The Northern Lights depend on darkness, solar activity and weather. Seabourn specifically highlights opportunities to search for the aurora on Arctic voyages."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best time for a Seabourn Arctic cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The main expedition season is during the Arctic's warmer months. Seabourn's current programs include summer Arctic voyages, with exact timing varying by destination and year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Greenland or Svalbard better?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your interests. Choose Greenland for immense fjords, glaciers and Arctic communities. Choose Svalbard for High Arctic landscapes, sea ice and strong polar wildlife opportunities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Seabourn Arctic cruise physically demanding?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Some excursions can be moderately active, particularly Zodiac boarding, shore landings and hikes. Activity levels vary by excursion."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need previous expedition experience?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Seabourn's Expedition Team guides guests throughout the voyage, making the experience accessible to first-time expedition travelers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What should I pack for a Seabourn Arctic cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Bring waterproof outerwear, warm layers, waterproof footwear, gloves, a hat, sunglasses, sunscreen, binoculars and appropriate photography equipment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn provide expedition gear?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Selected Seabourn Arctic voyages include expedition items such as a custom parka and waterproof day pack. Guests should check the specific sailing's inclusions before packing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is kayaking available?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kayaking is available as an optional experience on selected Arctic itineraries."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Seabourn Greenland cruise worth it?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For travelers who value remote landscapes, wildlife, expedition exploration and luxury service, a Seabourn Greenland cruise can be an excellent choice."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Arctic better than Antarctica?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Neither is universally better. The Arctic is especially appealing for Greenland, Svalbard, polar bears and Arctic cultures, while Antarctica is particularly compelling for penguins, ice landscapes and the Antarctic Peninsula."
                    }
                }
            ]
        }
    ]
};

/* ── FAQ Accordion (custom Sbc-faq classes) ─────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);
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
const glanceRows = [
    { label: "Cruise style", value: "Ultra-luxury expedition" },
    { label: "Main regions", value: "Greenland, Svalbard, Iceland and Arctic Canada" },
    { label: "Expedition ships", value: "Seabourn Venture and Seabourn Pursuit" },
    { label: "Popular wildlife", value: "Polar bears, walruses, seals, whales and seabirds" },
    { label: "Activities", value: "Zodiac cruises, landings, walks, hikes and wildlife viewing" },
    { label: "Cultural experiences", value: "Arctic communities, history and local traditions" },
    { label: "Scenery", value: "Glaciers, fjords, sea ice, mountains and tundra" },
    { label: "Northern Lights", value: "Possible on selected itineraries and conditions" },
    { label: "Best travel period", value: "Primarily Arctic summer" },
    { label: "Best for", value: "Wildlife lovers, photographers, adventure travelers and luxury expedition cruisers" },
];

const whereGoList = ["Greenland", "Svalbard", "Iceland", "Arctic Canada", "Baffin Island", "Ellesmere Island", "Devon Island", "Northwest Passage", "Labrador and the Torngat Mountains", "Other remote Arctic locations"];

const arcticEnvHighlights = ["Glaciers", "Sea ice", "Fjords", "Tundra", "Remote islands", "Dramatic mountains", "Wildlife", "Indigenous and Arctic cultures"];

const destinations = [
    {
        icon: Mountain,
        title: "Greenland",
        subtitle: "Seabourn Greenland Cruises",
        desc: "Greenland is one of the highlights of Seabourn's Arctic program. Its immense landscapes include glaciers, icebergs, deep fjords, mountainous coastlines, tundra, remote settlements and Arctic wildlife. A Greenland expedition provides a very different experience from a conventional European or Caribbean cruise — it is about landscape, wildlife, culture and exploration rather than shopping or traditional sightseeing.",
        listLabel: "Depending on the itinerary, travelers may experience:",
        listItems: ["Glacier viewing", "Zodiac cruising", "Shore walks", "Remote villages", "Cultural encounters", "Wildlife observation", "Scenic fjord cruising"],
        best: "Seabourn's Arctic program specifically highlights Greenland's fjords and the cultural traditions of communities that have long lived in these northern environments.",
    },
    {
        icon: Snowflake,
        title: "Svalbard",
        subtitle: "Seabourn Svalbard Cruises",
        desc: "Svalbard is one of the most compelling destinations for Arctic expedition travelers. The Norwegian archipelago lies far north of mainland Europe and is known for sea ice, glaciers, Arctic mountains, remote beaches, polar wildlife and long summer daylight. Svalbard offers one of the best opportunities to experience a true High Arctic environment without traveling to the geographic North Pole.",
        listLabel: "The landscape can change quickly as the ship moves between:",
        listItems: ["Glacier fronts", "Sea ice", "Mountainous islands", "Coastal tundra", "Wildlife areas"],
        best: "Seabourn's Arctic program includes Svalbard expeditions designed to explore the archipelago in greater depth, with voyages that can spend several days exploring, depending on the itinerary.",
    },
];

const wildlifeCards = [
    {
        icon: Snowflake,
        title: "Polar Bears",
        text: "For many travelers, the polar bear is the ultimate Arctic wildlife encounter. Polar bears can be found in several Arctic regions, including areas around Svalbard and the Canadian Arctic.",
        tagsLabel: "Sightings depend on:",
        tags: ["Sea ice", "Weather", "Food availability", "Animal movements", "Time of year", "Local conditions"],
        footer: "The expedition team uses its experience and local knowledge to maximize opportunities for wildlife viewing.",
    },
    {
        icon: Waves,
        title: "Walrus & Seal Viewing",
        text: "Walruses can sometimes be found hauled out on beaches or ice. Seals are also common Arctic wildlife, with several species inhabiting the region.",
        tagsLabel: "A Zodiac can provide:",
        tags: ["Sea-level perspective", "Close approach to wildlife areas", "Appropriate viewing distance"],
        footer: "A Zodiac allows guests to approach wildlife areas at sea level while maintaining an appropriate distance.",
    },
    {
        icon: Fish,
        title: "Whale Watching",
        text: "Depending on the itinerary and season, travelers may encounter whales in Arctic waters while cruising in Greenland and other Arctic fjords.",
        tagsLabel: "Potential sightings include:",
        tags: ["Beluga whales", "Minke whales", "Other whale species"],
        footer: "Whale encounters are particularly exciting because the animals can appear unexpectedly while the ship or Zodiac is moving through a fjord or coastal environment.",
    },

];

const allWildlifeList = ["Polar bears", "Walruses", "Seals", "Beluga whales", "Minke whales", "Other whales", "Arctic foxes", "Caribou", "Muskox", "Puffins", "Gannets", "Razorbills", "Other seabirds"];

const zodiacTabsData = [
    {
        icon: Anchor,
        tabTitle: "Zodiac Excursions",
        title: "Seabourn Arctic Zodiac Excursions",
        paragraphs: [
            "Zodiac exploration is central to the Seabourn Arctic experience.",
            "The expedition ships are equipped with Zodiacs specifically for exploring remote coastlines and landing sites.",
            "Seabourn's purpose-built expedition ships carry 24 Zodiacs and are designed for exploration in challenging environments."
        ],
        listLabel: "A Zodiac excursion can allow guests to:",
        items: [
            "Cruise alongside glaciers",
            "Explore narrow waterways",
            "Search for wildlife",
            "Approach remote coastlines",
            "Visit beaches",
            "Reach shore landing sites",
            "View ice from sea level"
        ]
    },
    {
        icon: Ship,
        tabTitle: "Zodiac Landings",
        title: "What Is a Seabourn Zodiac Landing Like?",
        paragraphs: [
            "A Zodiac landing is different from stepping off a ship at a conventional cruise terminal.",
            "The actual landing location can change depending on weather, sea conditions, wildlife and safety considerations."
        ],
        listLabel: "Guests may:",
        items: [
            "Board the Zodiac from the expedition ship.",
            "Travel toward a remote landing site.",
            "Step ashore with assistance from the expedition team.",
            "Explore the area through a guided walk or hike.",
            "Return to the ship by Zodiac."
        ]
    },
    {
        icon: Tent,
        tabTitle: "Guided Walks & Hikes",
        title: "Arctic Guided Walks and Hikes",
        paragraphs: [
            "Walking is another important part of the expedition experience.",
            "Some walks are relatively gentle, while others may be more demanding.",
            "Guests should review the activity level of individual excursions before participating."
        ],
        listLabel: "Depending on the destination, guided walks can explore:",
        items: [
            "Tundra",
            "Beaches",
            "Coastal areas",
            "Historic sites",
            "Villages",
            "Scenic viewpoints",
            "Wildlife habitats"
        ]
    },
    {
        icon: ThermometerSnowflake,
        tabTitle: "Ice Landings",
        title: "Ice Landings",
        paragraphs: [
            "Selected Arctic itineraries can include opportunities to experience ice directly.",
            "Seabourn's Arctic program includes ice landings in select destinations when conditions permit.",
            "Because polar conditions are unpredictable, an ice landing should always be viewed as an expedition opportunity rather than a guaranteed event."
        ],
        listLabel: "Depending on conditions, guests may encounter:",
        items: [
            "Sea ice",
            "Icebergs",
            "Glacier fronts",
            "Frozen landscapes"
        ]
    }
];

const expeditionTeamRoles = [
    { icon: Compass, title: "Naturalists & Biologists", text: "Provide wildlife interpretation and daily briefings on the animals and ecosystems guests encounter." },
    { icon: BookOpen, title: "Historians & Geologists", text: "Offer cultural context, exploration history and insight into the landscapes being explored." },
    { icon: Snowflake, title: "Glaciologists & Photographers", text: "Explain glacial environments and provide guidance for capturing the Arctic on camera." },
];

const cultureExperiences = ["Village visits", "Local storytelling", "Cultural interpretation", "Historical sites", "Art", "Discussions about life in the Arctic"];


const ships = [
    {
        name: "Seabourn Venture",
        meta: "Arctic, Greenland & Northwest Passage",
        desc: "Seabourn Venture has been a major part of Seabourn's Arctic program. Its expedition capabilities are designed for Svalbard, Greenland, Iceland, the Canadian Arctic, the Northwest Passage and other remote polar destinations. The ship's combination of expedition equipment and luxury accommodations makes it particularly suited to travelers who want adventure without sacrificing comfort.",
        best: ["Svalbard", "Greenland", "Iceland", "Canadian Arctic", "Northwest Passage"],
    },
    {
        name: "Seabourn Pursuit",
        meta: "Svalbard & other Arctic regions",
        desc: "Seabourn Pursuit expands Seabourn's expedition capacity. Seabourn's 2028 program includes Pursuit in Arctic regions including Svalbard and other northern destinations, increasing the range of Arctic sailing options. Travelers should compare the actual itinerary rather than choosing solely based on ship name.",
        best: ["Svalbard", "Other Arctic regions", "Expanded 2028 program"],
    },
];

const shipVsTraditionalList = [
    ["Designed for remote exploration", "Designed primarily for port-to-port cruising"],
    ["Zodiacs", "Standard tenders where applicable"],
    ["Expedition team", "Traditional cruise staff"],
    ["Ice-strengthened design", "Conventional cruise design"],
    ["Wildlife-focused excursions", "City and sightseeing excursions"],
    ["Shore landings", "Port terminals"],
    ["Remote destinations", "Established tourist destinations"],
    ["Intimate atmosphere", "Often much larger"],
];

const includesData = [
    { title: "Expedition Activities", items: ["Zodiac cruises", "Selected shore landings", "Guided nature walks"] },
    { title: "Onboard Program", items: ["Expedition briefings", "Expert lectures", "Wildlife interpretation", "Selected Signature Events"] },
    { title: "Accommodation & Dining", items: ["Suite accommodation", "Dining", "Selected beverages"] },
];

const signatureExperiences = [
    { icon: Wine, title: "Caviar on the Ice", text: "A signature Seabourn experience combining caviar and Champagne with a dramatic polar setting." },
    { icon: Waves, title: "Polar Plunge", text: "An optional adventure for guests who want to take a brief dip in Arctic waters." },
    { icon: MessageCircle, title: "Fireside Chats", text: "Informal opportunities to hear stories and insights from expedition specialists." },
];

const optionalActivities = ["Kayaking", "Photography programs", "Specialized shore excursions", "Cultural experiences", "Local adventures"];

const packingData = [
    { title: "Essential Expedition Clothing", items: ["Waterproof jacket", "Waterproof trousers", "Warm layers", "Fleece or insulating layer", "Thermal base layers", "Warm hat", "Gloves", "Comfortable waterproof footwear", "Moisture-wicking clothing"] },
    { title: "Onboard Clothing", items: ["Smart-casual evening clothing", "Comfortable lounge clothing", "Sweaters", "Comfortable shoes"] },
    { title: "Expedition Essentials", items: ["Sunglasses", "Sunscreen", "Binoculars", "Camera", "Extra batteries or charging equipment", "Small daypack", "Reusable water bottle"] },
];

const bestForCards = [
    { icon: Heart, title: "Couples", items: ["Morning: Zodiac wildlife exploration", "Afternoon: Glacier viewing or a shore walk", "Evening: Fine dining and relaxation onboard"] },
    { icon: Users2, title: "Solo Travelers", items: ["Zodiac excursions", "Lectures", "Dining", "Shore walks", "Wildlife observations"] },
    { icon: Users, title: "Families", items: ["Minimum age requirements", "Activity levels", "Cold-weather conditions", "Zodiac access", "Walking ability", "Individual interests"] },
];

const prosList = ["Access to remote Arctic destinations", "Svalbard and Greenland itineraries", "Purpose-built expedition ships", "Zodiac exploration", "Wildlife viewing", "Expert Expedition Team", "Glaciers and dramatic scenery", "Cultural experiences", "Small-ship atmosphere", "Luxury accommodations", "Fine dining", "Optional kayaking on selected voyages", "Potential Northern Lights opportunities"];

const consList = ["Wildlife sightings are not guaranteed", "Weather can change plans", "Expedition activities require mobility", "Arctic conditions can be cold and wet", "Some excursions can be physically demanding", "Remote destinations mean limited conventional sightseeing", "Premium pricing"];

const arcticVsAntarcticaList = [
    ["Greenland", "Antarctic Peninsula"],
    ["Svalbard", "South Shetland Islands"],
    ["Arctic Canada", "Antarctic Sound"],
    ["Polar bears", "Penguins"],
    ["Walruses", "Seals"],
    ["Beluga whales", "Whales"],
    ["Arctic communities", "Antarctic wilderness"],
    ["Northern Lights possible", "Midnight sun"],
    ["Summer Arctic season", "Southern summer"],
];

const bookingTips = [
    { title: "Choose the destination before the ship", text: "Decide whether you most want Greenland, Svalbard, Iceland, the Northwest Passage or the Canadian High Arctic. Then compare the available itineraries." },
    { title: "Compare the season", text: "Wildlife, ice and daylight conditions vary throughout the season." },
    { title: "Look at the expedition days", text: "A longer itinerary can provide more opportunities for exploration." },
    { title: "Review the activity level", text: "Make sure Zodiac and walking activities fit your mobility." },
    { title: "Choose your suite carefully", text: "A private veranda can be especially valuable for wildlife viewing and scenery." },
    { title: "Pack for flexibility", text: "Weather and expedition conditions can change quickly." },
    { title: "Bring binoculars", text: "They are among the most useful items for Arctic wildlife viewing." },
    { title: "Work with a knowledgeable luxury travel advisor", text: "A specialist can help compare routes, suites, expedition activity levels, flights and pre- or post-cruise arrangements." },
];

const worthItems = ["Remote wilderness", "luxury", "Wildlife", "expert interpretation", "Adventure", "comfort", "Culture", "nature", "Zodiac exploration", "fine dining"];


/* ── Main Component ──────────────────────────────────────────────── */
const SeabournArcticGreenlandGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeShipTab, setActiveShipTab] = useState(0);
    const [activeDestTab, setActiveDestTab] = useState(0);
    const [activeZodiacTab, setActiveZodiacTab] = useState(0);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Arctic & Greenland Cruises: Svalbard & Wildlife</title>
                <meta name="title" content="Seabourn Arctic & Greenland Cruises: Routes, Wildlife & Svalbard" />
                <meta
                    name="description"
                    content="Explore Seabourn Arctic and Greenland cruises featuring Svalbard, Greenland, Iceland, wildlife, glaciers, Zodiac excursions, expedition activities and Arctic culture."
                />
                <script type="application/ld+json">{JSON.stringify(seabournArcticGreenlandSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Arctic and Greenland Cruises</h1>
                    <p>
                        A Seabourn Arctic and Greenland cruise offers an opportunity to explore some of the most remote landscapes in the Northern Hemisphere while traveling aboard a purpose-built luxury expedition ship.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                From the glacier-carved fjords of Greenland to the dramatic wilderness of Svalbard, Seabourn's Arctic expeditions combine wildlife viewing, Zodiac exploration, guided walks, cultural experiences and expert-led interpretation with the comfort of an ultra-luxury ship.
                            </p>
                            <p>
                                Depending on the itinerary, voyages can also include Iceland, the Canadian Arctic, Baffin Island, Ellesmere Island and the Northwest Passage. Seabourn's current Arctic program includes voyages aboard Seabourn Venture and Seabourn Pursuit, with itineraries varying by season and year.
                            </p>
                            <p>
                                This guide explains where Seabourn goes in the Arctic, what you can see, what expedition activities are included, when to travel, what to pack and whether a Seabourn Arctic or Greenland cruise is right for you.
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

            {/* ── AT A GLANCE (new Arc-glance classes) ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Arc-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Overview</span>
                        <h2 className="Sbc-h2">Seabourn Arctic and Greenland Cruises at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Arc-glance-wrap">
                        <div className="Arc-glance-row Arc-glance-head">
                            <span>Feature</span>
                            <span>Seabourn Arctic & Greenland</span>
                        </div>
                        {glanceRows.map((row, i) => (
                            <div className="Arc-glance-row" key={i}>
                                <div className="Arc-glance-label">{row.label}</div>
                                <div className="Arc-glance-value">{row.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY TAKE A SEABOURN ARCTIC CRUISE ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Arc-why-take">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Why Go</span>
                        <h2 className="Sbc-h2">Why Take a Seabourn Arctic Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Arc-why-grid">
                        {/* Left column - Content */}
                        <div className="Arc-why-content">
                            <p className="Sbc-p Arc-why-intro-p">
                                The Arctic is one of the world's great wilderness destinations.
                            </p>

                            <div className="Arc-why-pills-container">
                                <span className="Arc-why-pills-label">Instead of traveling between conventional ports, a Seabourn expedition takes you into environments defined by:</span>
                                <div className="Arc-why-pills-grid">
                                    {arcticEnvHighlights.map((item, idx) => (
                                        <div className="Arc-why-pill" key={idx}>
                                            <span className="Arc-why-pill-dot"></span>
                                            <span className="Arc-why-pill-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="Sbc-p Arc-why-body-p">
                                The expedition format allows travelers to experience the landscape at close range through Zodiac cruises, shore landings and guided walks.
                            </p>
                            <p className="Sbc-p Arc-why-body-p">
                                Seabourn describes its Arctic experience as a combination of remote exploration and luxury, with expert Expedition Teams providing interpretation throughout the voyage.
                            </p>
                        </div>

                        {/* Right column - Image placeholder */}
                        <div className="Arc-why-image-wrapper">
                            <div className="Arc-why-image-placeholder">
                                <div className="Arc-why-viewfinder">
                                    <div className="Arc-why-bracket tl"></div>
                                    <div className="Arc-why-bracket tr"></div>
                                    <div className="Arc-why-bracket bl"></div>
                                    <div className="Arc-why-bracket br"></div>
                                </div>
                                <div className="Arc-why-placeholder-icon-wrapper">
                                    <Snowflake size={40} className="Arc-why-placeholder-icon" />
                                </div>
                                <span className="Arc-why-placeholder-text">Seabourn Arctic Cruise Image Placeholder</span>
                            </div>

                            {/* Layered floating overlay card */}
                            <div className="Arc-why-floating-badge">
                                <div className="Arc-why-badge-num">8</div>
                                <div className="Arc-why-badge-text">
                                    <span>Wilderness</span>
                                    <span>Environments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHERE DO SEABOURN ARCTIC CRUISES GO ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Arc-where-go">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Region</span>
                        <h2 className="Sbc-h2">Where Do Seabourn Arctic <br /> Cruises Go?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's Arctic itineraries vary considerably. Depending on the specific sailing, travelers can explore a wide range of remote northern destinations. This makes itinerary selection particularly important.
                        </p>
                    </div>

                    <div className="Arc-go-section-title-wrapper">
                        <h4 className="Arc-go-section-title">Depending on the sailing, travelers can explore:</h4>
                    </div>

                    <div className="Arc-go-grid">
                        {whereGoList.map((item, i) => (
                            <div key={i} className="Arc-go-item">
                                <Navigation size={14} strokeWidth={2.5} className="Arc-go-icon" />
                                <span className="Arc-go-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GREENLAND & SVALBARD (Sbc-dest-tabs pattern) ─────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Two Icons of the Arctic</span>
                        <h2 className="Sbc-h2">Seabourn Greenland &amp; <br /> Svalbard Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Greenland and Svalbard are two of the biggest highlights of Seabourn's Arctic program, each offering a very different flavor of polar exploration.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav" style={{ justifyContent: 'center' }}>
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
                                    {(() => {
                                        const ActiveIcon = destinations[activeDestTab].icon;
                                        return <ActiveIcon size={36} className="Sbc-dest-placeholder-icon" />;
                                    })()}
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

                                {destinations[activeDestTab].best && (
                                    <div className="Sbc-dest-best-strategy">
                                        <p>{destinations[activeDestTab].best}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── CTA 1 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Remote Wilderness Awaits</span>
                    <h3 className="Sbc-cta-title">Chart Your Arctic Expedition</h3>
                    <p className="Sbc-cta-text">
                        From Greenland's fjords to Svalbard's sea ice, let's compare Seabourn's Arctic itineraries and find the voyage that matches your priorities.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Arctic Itineraries
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


            {/* ── ARCTIC WILDLIFE (Sbc-exp-grid pattern) ───────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-wildlife">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Nature Up Close</span>
                        <h2 className="Sbc-h2">Seabourn Arctic Wildlife</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Wildlife is one of the biggest reasons travelers choose Arctic expeditions. Seabourn emphasizes wildlife viewing throughout its Arctic itineraries, while noting that sightings depend on local conditions and the animals themselves.
                        </p>
                        <ul className="Arc-pill-list" style={{ justifyContent: "center" }}>
                            {allWildlifeList.map((v, i) => (
                                <li key={i}>{v}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-exp-grid">
                        {wildlifeCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-exp-card" key={i}>
                                    <div className="Sbc-exp-card-header">
                                        <div className="Sbc-exp-icon-wrap">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="Sbc-h3">{card.title}</h3>
                                    </div>
                                    <p className="Sbc-exp-text">{card.text}</p>
                                    <div className="Sbc-exp-features">
                                        <span className="Sbc-exp-features-title">{card.tagsLabel}</span>
                                        <div className="Sbc-exp-tags">
                                            {card.tags.map((t, idx) => (
                                                <span key={idx} className="Sbc-exp-tag">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="Sbc-exp-footer">{card.footer}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── ZODIAC EXCURSIONS, LANDINGS, WALKS & ICE (Arc-zodiac-tabs pattern) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Arc-zodiac">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Closer</span>
                        <h2 className="Sbc-h2">Seabourn Arctic Zodiac &amp; Landings</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Zodiac exploration and guided shore walks are central to the Seabourn Arctic experience, taking guests off the ship to experience polar wilderness at close range.
                        </p>
                    </div>

                    <div className="Arc-zodiac-tabs-container">
                        <div className="Arc-zodiac-tabs-nav">
                            {zodiacTabsData.map((tab, i) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={i}
                                        className={`Arc-zodiac-tab-btn ${activeZodiacTab === i ? "active" : ""}`}
                                        onClick={() => setActiveZodiacTab(i)}
                                    >
                                        <Icon size={18} />
                                        <span>{tab.tabTitle}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="Arc-zodiac-tab-content">
                            <div className="Arc-zodiac-image-placeholder">
                                <div className="Arc-zodiac-viewfinder">
                                    <div className="Arc-zodiac-bracket tl"></div>
                                    <div className="Arc-zodiac-bracket tr"></div>
                                    <div className="Arc-zodiac-bracket bl"></div>
                                    <div className="Arc-zodiac-bracket br"></div>
                                </div>
                                <div className="Arc-zodiac-placeholder-icon-wrapper">
                                    {(() => {
                                        const ActiveIcon = zodiacTabsData[activeZodiacTab].icon;
                                        return <ActiveIcon size={36} className="Arc-zodiac-placeholder-icon" />;
                                    })()}
                                </div>
                                <span className="Arc-zodiac-placeholder-text">
                                    {zodiacTabsData[activeZodiacTab].tabTitle} Image Placeholder
                                </span>
                            </div>

                            <div className="Arc-zodiac-details">
                                <span className="Arc-zodiac-meta-badge">Expedition Experience</span>
                                <h3 className="Arc-zodiac-tab-title">{zodiacTabsData[activeZodiacTab].title}</h3>

                                <div className="Arc-zodiac-paragraphs">
                                    {zodiacTabsData[activeZodiacTab].paragraphs.map((p, idx) => (
                                        <p key={idx} className="Arc-zodiac-tab-desc">{p}</p>
                                    ))}
                                </div>

                                <div className="Arc-zodiac-highlights">
                                    <h4 className="Arc-zodiac-highlights-title">{zodiacTabsData[activeZodiacTab].listLabel}</h4>
                                    <ul className="Arc-zodiac-highlights-list">
                                        {zodiacTabsData[activeZodiacTab].items.map((item, j) => (
                                            <li key={j}>
                                                <Check size={16} strokeWidth={2.5} className="Arc-zodiac-check-icon" />
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

            {/* ── EXPEDITION TEAM (Sbc-card-grid pattern) ──────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-expedition-team">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Expert Guidance</span>
                        <h2 className="Sbc-h2">Seabourn Arctic Expedition Team</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The Expedition Team is an important part of the experience. Team members provide daily briefings, lectures, wildlife interpretation, shore guidance, safety instructions and cultural context.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-3">
                        {expeditionTeamRoles.map((card, i) => {
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
                </div>
            </section>

            {/* ── ARCTIC CULTURAL EXPERIENCES (Sbc-qa-split pattern) ──────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-culture">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Human Side of the Arctic</span>
                                <h2 className="Sbc-h2">Arctic Cultural Experiences</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                An Arctic cruise isn't only about ice and wildlife. The region has long been home to communities with deep relationships to the land and sea.
                            </p>

                            <p className="Sbc-p">Greenland's history adds another dimension to the journey — travelers may encounter communities where traditional Arctic culture remains closely connected to the surrounding environment.</p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Depending on the itinerary, cultural experiences may include:</h4>
                                <ul className="Sbc-qa-list">
                                    {cultureExperiences.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "var(--navy)", background: "var(--bg-soft)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">These experiences help explain the human side of the destination.</div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Arctic Cultural Experiences Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Go Further North</span>
                    <h3 className="Sbc-cta-title">Explore the Northwest Passage &amp; High Arctic</h3>
                    <p className="Sbc-cta-text">
                        From Baffin Island to Ellesmere Island, let's design a deeper High Arctic expedition tailored to your sense of adventure.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Arctic Voyage
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── NORTHWEST PASSAGE / BAFFIN & ELLESMERE (Sbc-compare pattern) */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-nwp">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Deeper Into the High Arctic</span>
                        <h2 className="Sbc-h2">Northwest Passage, Baffin &amp; Ellesmere Island</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For travelers looking for a deeper High Arctic experience, some Seabourn Arctic itineraries extend into Canada's Arctic archipelago and northern islands.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Navigation size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Northwest Passage Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Northwest Passage Expeditions</h3>
                            <p className="Sbc-compare-sub">The historic route passes through Canada's Arctic archipelago and can combine:</p>
                            <ul className="Sbc-compare-list">
                                {["Historic exploration", "Remote islands", "Sea ice", "Wildlife", "Indigenous culture", "Dramatic scenery"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Mountain size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Baffin & Ellesmere Island Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Baffin Island &amp; Ellesmere Island</h3>
                            <p className="Sbc-compare-sub">For a deeper High Arctic experience, itineraries can reach:</p>
                            <ul className="Sbc-compare-list">
                                {["Baffin Island's dramatic fjords, mountains and ice", "Ellesmere Island's exceptionally remote landscapes", "Among the world's northernmost inhabited-region environments", "Deeper exploration and wildlife viewing"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p><strong>Northwest Passage:</strong> Historic exploration route combined with remote wildlife and culture.</p>
                        <p><strong>Baffin &amp; Ellesmere:</strong> Seabourn's current Arctic program highlights both destinations as opportunities for deeper exploration.</p>
                    </div>
                </div>
            </section>

            {/* ── NORTHERN LIGHTS (Sbc-qa-split pattern) ───────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-northern-lights">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Sparkles size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Arctic Northern Lights Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Chasing the Aurora</span>
                                <h2 className="Sbc-h2">Seabourn Arctic and Northern Lights</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                The Northern Lights can be one of the most spectacular possibilities on an Arctic voyage. However, seeing the aurora is never guaranteed — it depends on solar activity, darkness, cloud cover, location and weather. Seabourn highlights opportunities to search for the Northern Lights from the ship, including viewing areas such as the Constellation Lounge.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Can you see the Northern Lights on a Greenland cruise?</h4>
                                <p className="Sbc-p" style={{ fontSize: "16px" }}>
                                    Potentially, but travelers should understand the aurora is a natural phenomenon rather than a scheduled cruise activity. Many Arctic expedition itineraries are designed around the season's long daylight hours, so travelers should check the specific itinerary if aurora viewing is a major priority.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST TIME / SEASONS (Arc-seasons pattern) ───────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Arc-seasons-section">
                <div className="Sbc-container">
                    <div className="Arc-seasons-header-grid">
                        <div className="Arc-seasons-header-left">
                            <span className="Sbc-eyebrow">Timing Your Voyage</span>
                            <h2 className="Sbc-h2">Best Time for a Seabourn Arctic Cruise</h2>
                            <div className="Sbc-accent-line"></div>
                            <p className="Arc-seasons-intro-lead">
                                The primary Arctic expedition season occurs during the region's warmer months.
                            </p>
                            <p className="Sbc-p Arc-seasons-intro-p">
                                Seabourn's recent Arctic programs have featured voyages during the summer Arctic season, with extended daylight and access to regions that are difficult or impossible to reach during winter.
                            </p>
                        </div>

                        <div className="Arc-seasons-header-right">
                            <div className="Arc-seasons-info-card">
                                <h4 className="Arc-seasons-info-title">Departure Windows</h4>
                                <p className="Arc-seasons-info-text">
                                    For 2027, Seabourn lists Arctic departures from <strong>June through September</strong>, while its expanded 2028 program includes Arctic exploration from <strong>April through September</strong>.
                                </p>
                                <div className="Arc-seasons-info-footer">
                                    * Exact sailing dates should always be checked against the current itinerary.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Arc-seasons-divider-title">
                        <span>Arctic Cruise Seasons Explained</span>
                    </div>

                    <div className="Arc-seasons-cards-grid">
                        {/* Card 1: Early Season */}
                        <div className="Arc-seasons-card">
                            <div className="Arc-seasons-card-head">
                                <div className="Arc-seasons-card-icon-wrapper">
                                    <Sunrise size={22} className="Arc-seasons-card-icon" />
                                </div>
                                <span className="Arc-seasons-card-number">01</span>
                            </div>
                            <h3 className="Arc-seasons-card-title">Early Season</h3>
                            <span className="Arc-seasons-card-subtitle">Early-season voyages can offer:</span>
                            <ul className="Arc-seasons-card-list">
                                {["Cooler conditions", "Seasonal ice", "Dramatic landscapes", "Strong expedition atmosphere"].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={15} className="Arc-seasons-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2: Mid-Season */}
                        <div className="Arc-seasons-card">
                            <div className="Arc-seasons-card-head">
                                <div className="Arc-seasons-card-icon-wrapper">
                                    <Sun size={22} className="Arc-seasons-card-icon" />
                                </div>
                                <span className="Arc-seasons-card-number">02</span>
                            </div>
                            <h3 className="Arc-seasons-card-title">Mid-Season</h3>
                            <span className="Arc-seasons-card-subtitle">Mid-season voyages can provide:</span>
                            <ul className="Arc-seasons-card-list">
                                {["Long daylight", "Access to remote areas", "Wildlife viewing opportunities", "Extensive time for exploration"].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={15} className="Arc-seasons-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 3: Late Season */}
                        <div className="Arc-seasons-card">
                            <div className="Arc-seasons-card-head">
                                <div className="Arc-seasons-card-icon-wrapper">
                                    <Wind size={22} className="Arc-seasons-card-icon" />
                                </div>
                                <span className="Arc-seasons-card-number">03</span>
                            </div>
                            <h3 className="Arc-seasons-card-title">Late Season</h3>
                            <span className="Arc-seasons-card-subtitle">Later voyages can offer:</span>
                            <ul className="Arc-seasons-card-list">
                                {["Changing seasonal landscapes", "Different wildlife conditions", "Potentially darker evenings in some regions"].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={15} className="Arc-seasons-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Arc-seasons-conclusion-wrapper">
                        <p className="Arc-seasons-conclusion-text">
                            The "best" time depends on whether your priority is wildlife, sea ice, daylight, photography or a particular destination.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION SHIPS (Sbc-ships-tabs pattern) ────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Fleet</span>
                        <h2 className="Sbc-h2">Seabourn Arctic Expedition Ships</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The primary ships associated with Seabourn's Arctic expedition program are Seabourn Venture and Seabourn Pursuit, both purpose-built expedition ships designed for remote destinations. They feature ice-strengthened hulls, PC6 Polar Class design, Zodiacs, kayaks, expedition teams, ocean-front suites and luxury public areas, and carry 24 Zodiacs and kayaks.
                        </p>
                    </div>

                    <div className="Sbc-ships-tabs-container">
                        <div className="Sbc-ships-tabs-nav">
                            {ships.map((ship, idx) => (
                                <button
                                    key={idx}
                                    className={`Sbc-ship-tab-btn ${activeShipTab === idx ? "active" : ""}`}
                                    onClick={() => setActiveShipTab(idx)}
                                >
                                    <span className="Sbc-tab-ship-name">{ship.name}</span>
                                    <span className="Sbc-tab-ship-meta">{ship.meta}</span>
                                </button>
                            ))}
                        </div>

                        <div className="Sbc-ship-tab-content">
                            <div className="Sbc-ship-tab-image-placeholder">
                                <Ship size={40} className="Sbc-ship-tab-placeholder-icon" />
                                <span className="Sbc-ship-tab-placeholder-text">{ships[activeShipTab].name} Image Placeholder</span>
                            </div>
                            <div className="Sbc-ship-tab-details">
                                <span className="Sbc-ship-tab-meta-badge">{ships[activeShipTab].meta}</span>
                                <h3 className="Sbc-ship-tab-title">{ships[activeShipTab].name}</h3>
                                <p className="Sbc-ship-tab-desc">{ships[activeShipTab].desc}</p>
                                <div className="Sbc-ship-tab-best-title">Best For</div>
                                <ul className="Sbc-ship-tab-tags">
                                    {ships[activeShipTab].best.map((tag, j) => (
                                        <li key={j}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── CTA 3 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Find Your Perfect Arctic Suite</h3>
                    <p className="Sbc-cta-text">
                        Let's compare suite categories, veranda access and departure dates to find the best fit for your Arctic expedition.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SHIP VS TRADITIONAL CRUISE SHIP (Sbc-compare-grid list) ─── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-ship-vs-traditional">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">What Makes It Possible</span>
                        <h2 className="Sbc-h2">Seabourn Arctic Ship <br /> vs. Traditional Cruise Ship</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">The expedition ship is part of what makes the Arctic experience possible.</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <h3 className="Sbc-compare-heading">Seabourn Expedition Ship</h3>
                            <ul className="Sbc-compare-list">
                                {shipVsTraditionalList.map((row, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{row[0]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <h3 className="Sbc-compare-heading">Traditional Cruise Ship</h3>
                            <ul className="Sbc-compare-list">
                                {shipVsTraditionalList.map((row, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{row[1]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT LUXURY (Sbc-qa-split pattern) ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-luxury">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Rugged Meets Refined</span>
                                <h2 className="Sbc-h2">Is a Seabourn Arctic Cruise Luxury?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Yes. The expedition environment is rugged, but the onboard experience remains distinctly luxury-focused. Guests can return from a Zodiac excursion to spacious suites, fine dining, premium beverages, comfortable lounges, spa facilities, wellness amenities and relaxed public spaces.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Guests can return from a Zodiac excursion to:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Spacious suites", "Fine dining", "Premium beverages", "Comfortable lounges", "Spa facilities", "Relaxed public spaces"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "var(--navy)", background: "var(--bg-soft)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Gem size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Arctic Luxury Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHAT IS INCLUDED (Sbc-includes-grid pattern) ─────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-includes">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Inclusive Model</span>
                        <h2 className="Sbc-h2">What Is Included on a Seabourn Arctic Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The exact inclusions vary by voyage, but Seabourn's expedition experience currently highlights included Zodiac exploration, guided walks and selected Signature Events as part of its Arctic experience.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        {includesData.map((cat, i) => (
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
                            <strong>Important distinction:</strong> Not every possible experience is automatically included. Optional activities, such as certain kayaking experiences, may carry additional charges depending on the voyage.
                        </p>
                        <p>
                            For expedition voyages, however, Seabourn includes a broad range of expedition experiences such as Zodiac cruises, hikes, nature walks and briefings, depending on destination and conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SIGNATURE EXPERIENCES (Sbc-card-grid pattern) ────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-signature">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Distinctive Touches</span>
                        <h2 className="Sbc-h2">Seabourn Arctic Signature Experiences</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Depending on the sailing, guests may encounter distinctive Seabourn experiences that add a luxury dimension to an otherwise rugged expedition.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-3">
                        {signatureExperiences.map((card, i) => {
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

                    <div className="Sbc-section-header" style={{ marginTop: "56px", marginBottom: "0" }}>
                        <h4 className="Sbc-highlights-title" style={{ textAlign: "center" }}>Optional Arctic Activities</h4>
                        <ul className="Arc-pill-list" style={{ justifyContent: "center" }}>
                            {optionalActivities.map((v, i) => (
                                <li key={i}>{v}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            {/* ── CTA 3 (Customize Adventure) ────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Adventure Meets Luxury</span>
                    <h3 className="Sbc-cta-title">Prepare for the Ultimate Arctic Journey</h3>
                    <p className="Sbc-cta-text">
                        From optional kayaking to signature caviar service, let's customize your Seabourn Arctic activities and travel details.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Customize My Adventure
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHAT TO PACK (Sbc-includes-grid style, light bg) ─────────── */}
            {/* ── WHAT TO PACK (Arc-pack pattern) ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Arc-packing-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Prepare Well</span>
                        <h2 className="Sbc-h2">What to Pack for a <br /> Seabourn Arctic Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Packing for the Arctic requires balancing expedition practicality with luxury cruise evenings.
                        </p>
                    </div>

                    <div className="Arc-pack-grid">
                        {/* Column 1: Expedition Clothing */}
                        <div className="Arc-pack-card">
                            <div className="Arc-pack-card-head">
                                <div className="Arc-pack-icon-wrapper">
                                    <Backpack size={22} className="Arc-pack-icon" />
                                </div>
                                <span className="Arc-pack-badge">Gear</span>
                            </div>
                            <h3 className="Arc-pack-card-title">Essential Expedition Clothing</h3>
                            <ul className="Arc-pack-list">
                                {packingData[0].items.map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} className="Arc-pack-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Onboard Clothing */}
                        <div className="Arc-pack-card">
                            <div className="Arc-pack-card-head">
                                <div className="Arc-pack-icon-wrapper">
                                    <Ship size={22} className="Arc-pack-icon" />
                                </div>
                                <span className="Arc-pack-badge">Onboard</span>
                            </div>
                            <h3 className="Arc-pack-card-title">Onboard Clothing</h3>
                            <ul className="Arc-pack-list">
                                {packingData[1].items.map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} className="Arc-pack-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Expedition Essentials */}
                        <div className="Arc-pack-card">
                            <div className="Arc-pack-card-head">
                                <div className="Arc-pack-icon-wrapper">
                                    <Compass size={22} className="Arc-pack-icon" />
                                </div>
                                <span className="Arc-pack-badge">Essentials</span>
                            </div>
                            <h3 className="Arc-pack-card-title">Expedition Essentials</h3>
                            <ul className="Arc-pack-list">
                                {packingData[2].items.map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} className="Arc-pack-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Arc-pack-note-box">
                        <p className="Arc-pack-note-text">
                            Seabourn's current Arctic offerings also highlight a custom expedition parka and waterproof day pack on selected voyages, so guests should check exactly what their sailing provides before packing.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE NEEDED / PHYSICAL ACTIVITY (Sbc-qa-split pattern) */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-experience-needed">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Arctic Expedition Readiness Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Getting Ready</span>
                                <h2 className="Sbc-h2">Do You Need Expedition Experience?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                No. You don't need previous polar expedition experience to enjoy a Seabourn Arctic cruise. The Expedition Team provides guidance throughout the voyage. However, you should be comfortable with the realities of expedition travel.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">You should be comfortable with:</h4>
                                <ul className="Sbc-highlights-list">
                                    {["Zodiac boarding", "Walking on uneven surfaces", "Cold or wet conditions", "Variable weather", "Flexible daily schedules"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "var(--navy)", background: "var(--bg-soft)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">Activity levels vary — the ability to get into and out of Zodiacs and walk on uneven terrain is important for many excursions.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO IS SEABOURN ARCTIC BEST FOR (Sbc-fit-grid pattern) ───── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Is Seabourn Arctic Good for You?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Couples, solo travelers and adventurous families can all find something to love in an Arctic expedition, though each should weigh the experience differently.
                        </p>
                    </div>

                    <div className="Sbc-fit-grid">
                        {bestForCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-fit-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <ul>
                                        {card.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS (Sbc-proscons-grid pattern) ────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Arctic Pros and Cons</h2>
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


            {/* ── CTA 3 (Consult Specialist) ─────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Expert Expedition Advice</span>
                    <h3 className="Sbc-cta-title">Consult a Polar Travel Specialist</h3>
                    <p className="Sbc-cta-text">
                        Weighing the pros and cons of Svalbard vs. Greenland? Talk to our specialists to find your ideal sailing date and route.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with an Advisor
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── IS IT WORTH IT (Arc-worth pattern) ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Arc-worth-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Value Proposition</span>
                        <h2 className="Sbc-h2">Is a Seabourn Arctic and Greenland Cruise Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Arc-worth-split">
                        {/* Left column - Content */}
                        <div className="Arc-worth-content">
                            <p className="Arc-worth-intro-lead">For the right traveler, yes.</p>

                            <p className="Sbc-p Arc-worth-body-p">
                                A Seabourn Arctic or Greenland cruise is particularly valuable if you want to combine several things at once.
                            </p>

                            <div className="Arc-worth-highlights">
                                <h4 className="Arc-worth-highlights-title">You are combining:</h4>
                                <div className="Arc-worth-items-grid">
                                    {worthItems.map((item, idx) => (
                                        <div className="Arc-worth-item" key={idx}>
                                            <span className="Arc-worth-item-num">{String(idx + 1).padStart(2, '0')}</span>
                                            <span className="Arc-worth-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="Sbc-p Arc-worth-conclusion-p">
                                The biggest advantage is access. You're not simply visiting Greenland or Svalbard — you're experiencing these remote environments through an expedition platform specifically designed to get closer to them.
                            </p>
                        </div>

                        {/* Right column - Image placeholder */}
                        <div className="Arc-worth-image-wrapper">
                            <div className="Arc-worth-image-placeholder">
                                <div className="Arc-worth-viewfinder">
                                    <div className="Arc-worth-bracket tl"></div>
                                    <div className="Arc-worth-bracket tr"></div>
                                    <div className="Arc-worth-bracket bl"></div>
                                    <div className="Arc-worth-bracket br"></div>
                                </div>
                                <div className="Arc-worth-placeholder-icon-wrapper">
                                    <Award size={40} className="Arc-worth-placeholder-icon" />
                                </div>
                                <span className="Arc-worth-placeholder-text">Seabourn Arctic Value Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ARCTIC VS ANTARCTICA (Sbc-compare-grid pattern) ──────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-arctic-vs-antarctica">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn Arctic vs. Antarctica</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both are expedition destinations, but they offer very different experiences. Choose the Arctic if polar bears, Greenland, Svalbard and Arctic culture appeal most. Choose Antarctica if penguins, vast ice landscapes and the Antarctic Peninsula are your priorities.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <h3 className="Sbc-compare-heading">Arctic</h3>
                            <ul className="Sbc-compare-list">
                                {arcticVsAntarcticaList.map((row, i) => (
                                    <li key={i}>
                                        <Dot size={22} strokeWidth={2} />
                                        <span>{row[0]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <h3 className="Sbc-compare-heading">Antarctica</h3>
                            <ul className="Sbc-compare-list">
                                {arcticVsAntarcticaList.map((row, i) => (
                                    <li key={i}>
                                        <Dot size={22} strokeWidth={2} />
                                        <span>{row[1]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIPS FOR BOOKING (new Arc-tips classes) ──────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Arc-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">Tips for Booking a <br /> Seabourn Arctic Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Arc-tips-list">
                        {bookingTips.map((tip, i) => (
                            <div className="Arc-tips-row" key={i}>
                                <div className="Arc-tips-number">{String(i + 1).padStart(2, "0")}</div>
                                <div>
                                    <h4 className="Arc-tips-body-title">{tip.title}</h4>
                                    <p className="Arc-tips-body-text">{tip.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
            <section className="Sbc-expert-section" id="Arc-expert-insight">
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

            {/* ── FAQ ──────────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Arctic and Greenland Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a Seabourn Arctic or Greenland cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Seabourn Arctic Verdict</span>
                        <h2 className="Sbc-h2">Remote Wilderness, Delivered in Comfort</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Arctic and Greenland cruises are an excellent fit for travelers who want to explore the far north in comfort while remaining deeply connected to the landscape. The combination of Svalbard, Greenland, glaciers, sea ice, polar wildlife, Zodiac exploration and Arctic culture creates an experience unlike a conventional luxury cruise.
                        </p>
                        <p className="Sbc-p">
                            The biggest appeal is the opportunity to travel into places that are difficult to reach independently while having a purpose-built expedition ship and expert team supporting the journey.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If your idea of luxury travel includes wildlife, remote landscapes, meaningful cultural experiences and adventure, a Seabourn Arctic or Greenland expedition may be one of the most rewarding choices in the Seabourn portfolio.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Arctic Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SeabournArcticGreenlandGuide;