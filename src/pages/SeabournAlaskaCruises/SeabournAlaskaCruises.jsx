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
    Wine,
    Sun,
    Gem,
    Heart,
    Compass,
    Utensils,
    Landmark,
    Mountain,
    Snowflake,
    Camera,
    Home,
    Users,
    Award,
    AlertCircle,
    Star,
    MapPin,
    Binoculars,
    Fish,
    Tent,
    Dot,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournAlaskaCruises.css";

const seabournAlaskaSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/alaska/#webpage",
            "url": "https://www.tripsandships.com/seabourn-cruises/alaska/",
            "name": "Seabourn Alaska Cruises: Ships, Glaciers & Best Time",
            "headline": "Seabourn Alaska Cruises: Glaciers, Wildlife & Luxury Exploration",
            "description": "Explore Seabourn Alaska cruises, including ships, glaciers, wildlife, shore excursions, itinerary options, Alaska's Inside Passage and the best time to travel.",
            "keywords": [
                "Seabourn Alaska Cruises",
                "Seabourn Alaska cruise",
                "Seabourn Alaska cruises",
                "Seabourn Alaska itinerary",
                "Seabourn Alaska cruise review",
                "Seabourn Alaska shore excursions",
                "Seabourn Alaska wildlife",
                "Seabourn Alaska glaciers",
                "Seabourn Alaska Inside Passage",
                "Seabourn Alaska best time to cruise",
                "Seabourn Alaska cruise ships",
                "Seabourn Alaska luxury cruise",
                "Seabourn Alaska small ship cruise",
                "Seabourn Alaska excursions",
                "Seabourn Alaska ports",
                "Seabourn Alaska cruise worth it",
                "Alaska luxury cruise",
                "luxury Alaska cruise",
                "Seabourn Alaska 2027"
            ],
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                "url": "https://www.tripsandships.com/",
                "name": "Trips & Ships Luxury Travel"
            },
            "breadcrumb": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/alaska/#breadcrumb"
            },
            "mainEntity": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/alaska/#destination"
            },
            "inLanguage": "en-US"
        },

        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/alaska/#breadcrumb",
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
                    "name": "Seabourn Alaska Cruises",
                    "item": "https://www.tripsandships.com/seabourn-cruises/alaska/"
                }
            ]
        },

        {
            "@type": "TouristDestination",
            "@id": "https://www.tripsandships.com/seabourn-cruises/alaska/#destination",
            "name": "Seabourn Alaska Cruises",
            "description": "A luxury small-ship cruise experience focused on Alaska's glaciers, wildlife, mountains, fjords, forests, coastal communities and cultural experiences, particularly in Southeast Alaska and the Inside Passage.",
            "url": "https://www.tripsandships.com/seabourn-cruises/alaska/",
            "containedInPlace": {
                "@type": "Country",
                "name": "United States"
            },
            "touristType": [
                "Luxury travelers",
                "Couples",
                "Solo travelers",
                "Nature lovers",
                "Wildlife enthusiasts",
                "Photographers",
                "Multigenerational travelers"
            ],
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "name": "Destination",
                    "value": "Alaska, USA"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Main Region",
                    "value": "Southeast Alaska / Inside Passage"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Cruise Style",
                    "value": "Luxury small-ship cruising"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Highlights",
                    "value": "Glaciers, wildlife, mountains and fjords"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Wildlife",
                    "value": "Whales, bears, eagles, seals and sea lions"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Activities",
                    "value": "Hiking, kayaking, wildlife viewing and cultural excursions"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Scenic Highlights",
                    "value": "Glaciers, fjords, forests and coastal mountains"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Best Season",
                    "value": "Late spring through early fall"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Atmosphere",
                    "value": "Intimate and sophisticated"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Best For",
                    "value": "Couples, luxury travelers, photographers and nature lovers"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Primary Cruise Region",
                    "value": "Southeast Alaska and the Inside Passage"
                }
            ]
        },

        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/alaska/#highlights",
            "name": "Seabourn Alaska Cruise Highlights",
            "description": "Key destinations, scenery, wildlife and experiences available on Seabourn Alaska cruises.",
            "numberOfItems": 8,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Alaska's Inside Passage",
                    "description": "Cruise through the protected waterways of Southeast Alaska with opportunities to see forested islands, mountains, glaciers, fjords, waterfalls and marine wildlife."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Glacier Viewing",
                    "description": "Experience Alaska's dramatic tidewater glaciers, including potential visits or scenic cruising near major glacier regions depending on the itinerary."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Alaska Wildlife",
                    "description": "Look for humpback whales, orcas, bears, bald eagles, sea lions, harbor seals, sea otters, mountain goats and other coastal wildlife."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Whale Watching",
                    "description": "Southeast Alaska provides opportunities to observe humpback whales and other marine wildlife during scenic cruising and dedicated wildlife excursions."
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Luxury Shore Excursions",
                    "description": "Excursion options can include whale watching, glacier experiences, wildlife viewing, hiking, kayaking, scenic exploration and Indigenous cultural experiences."
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Alaska Ports",
                    "description": "Depending on the sailing, itineraries can include Juneau, Sitka, Ketchikan, Skagway, Icy Strait and other Southeast Alaska destinations."
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Scenic Cruising",
                    "description": "Guests can experience snow-covered mountains, forested islands, waterfalls, glaciers, fjords, icebergs and coastal scenery directly from the ship."
                },
                {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Luxury Small-Ship Experience",
                    "description": "Seabourn combines Alaska's wilderness with intimate shipboard surroundings, personalized service, all-suite accommodations, fine dining and sophisticated amenities."
                }
            ]
        },

        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/alaska/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Does Seabourn cruise to Alaska?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Seabourn has offered Alaska itineraries focused primarily on Southeast Alaska and the Inside Passage, with schedules varying by season."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Seabourn ships sail to Alaska?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The ships assigned to Alaska can vary by season and year. Travelers should check the current deployment when choosing a sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best time for a Seabourn Alaska cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The main Alaska cruise season runs from late spring through early fall. July and August offer peak summer conditions, while May and September can provide a quieter experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you see glaciers on a Seabourn Alaska cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Glacier viewing is one of the major attractions of Alaska cruising, with itineraries potentially visiting or cruising near major tidewater glaciers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you see whales from a Seabourn Alaska cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Southeast Alaska is known for humpback whales and other marine wildlife. Sightings are not guaranteed."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you see bears in Alaska?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, particularly during specialized wildlife excursions. Both brown and black bears inhabit areas of Southeast Alaska."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn visit the Inside Passage?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn Alaska itineraries can explore Southeast Alaska and the Inside Passage. The exact route depends on the individual sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the best Seabourn Alaska excursions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Popular choices include whale watching, glacier experiences, bear and wildlife viewing, hiking, kayaking and Indigenous cultural experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a balcony worth it on a Seabourn Alaska cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For many travelers, yes. A balcony provides a private location for watching glaciers, wildlife and coastal scenery."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What should I pack for a Seabourn Alaska cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pack waterproof outerwear, warm and lightweight layers, comfortable walking shoes, gloves, a hat, sunglasses, sunscreen and binoculars."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Alaska good for first-time Alaska cruisers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Seabourn can be an excellent choice for first-time Alaska travelers who prefer luxury, personalized service and a smaller-ship environment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Alaska good for couples?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The combination of spectacular scenery, wildlife, fine dining and an intimate onboard atmosphere makes Alaska particularly appealing to couples."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Alaska good for families?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It can work well for multigenerational families, especially those interested in wildlife and outdoor experiences. Families should check excursion age and activity requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Alaska physically demanding?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cruise itself is not necessarily demanding, but some shore excursions involve hiking, kayaking or other active pursuits. There are usually less-active alternatives."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn offer whale-watching excursions in Alaska?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Wildlife and whale-watching excursions can be available depending on the port and sailing. Specific offerings vary by itinerary."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Alaska all-inclusive?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn is known for an inclusive luxury cruise experience, with many onboard amenities, dining, selected beverages, Wi-Fi and gratuities generally included. Individual sailing terms should be checked before booking."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Alaska worth the money?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For travelers who prioritize personalized service, luxury accommodations, fine dining and a more intimate Alaska experience, Seabourn can justify its premium pricing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn better than a large Alaska cruise ship?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your priorities. Seabourn is better suited to travelers who value intimacy and luxury, while large ships may be better for travelers seeking extensive entertainment and family facilities."
                    }
                }
            ]
        }
    ]
};
/* ── FAQ Accordion (reused Sbc-faq classes) ────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Does Seabourn cruise to Alaska?", a: "Yes. Seabourn has offered Alaska itineraries focused primarily on Southeast Alaska and the Inside Passage, with schedules varying by season." },
        { q: "What Seabourn ships sail to Alaska?", a: "The ships assigned to Alaska can vary by season and year. Always check the current deployment when choosing a sailing." },
        { q: "What is the best time for a Seabourn Alaska cruise?", a: "The main Alaska cruise season runs from late spring through early fall. July and August offer peak summer conditions, while May and September can provide a quieter experience." },
        { q: "Can you see glaciers on a Seabourn Alaska cruise?", a: "Yes. Glacier viewing is one of the major attractions of Alaska cruising, with itineraries potentially visiting or cruising near major tidewater glaciers." },
        { q: "Can you see whales from a Seabourn Alaska cruise?", a: "Yes. Southeast Alaska is known for humpback whales and other marine wildlife. Sightings are not guaranteed." },
        { q: "Can you see bears in Alaska?", a: "Yes, particularly during specialized wildlife excursions. Both brown and black bears inhabit areas of Southeast Alaska." },
        { q: "Does Seabourn visit the Inside Passage?", a: "Seabourn Alaska itineraries can explore Southeast Alaska and the Inside Passage. The exact route depends on the individual sailing." },
        { q: "What are the best Seabourn Alaska excursions?", a: "Popular choices include whale watching, glacier experiences, bear and wildlife viewing, hiking, kayaking and Indigenous cultural experiences." },
        { q: "Is a balcony worth it on a Seabourn Alaska cruise?", a: "For many travelers, yes. A balcony provides a private location for watching glaciers, wildlife and coastal scenery." },
        { q: "What should I pack for a Seabourn Alaska cruise?", a: "Pack waterproof outerwear, warm and lightweight layers, comfortable walking shoes, gloves, a hat, sunglasses, sunscreen and binoculars." },
        { q: "Is Seabourn Alaska good for first-time Alaska cruisers?", a: "Yes. Seabourn can be an excellent choice for first-time Alaska travelers who prefer luxury, personalized service and a smaller-ship environment." },
        { q: "Is Seabourn Alaska good for couples?", a: "Yes. The combination of spectacular scenery, wildlife, fine dining and an intimate onboard atmosphere makes Alaska particularly appealing to couples." },
        { q: "Is Seabourn Alaska good for families?", a: "It can work well for multigenerational families, especially those interested in wildlife and outdoor experiences. Families should check excursion age and activity requirements." },
        { q: "Is Seabourn Alaska physically demanding?", a: "The cruise itself is not necessarily demanding, but some shore excursions involve hiking, kayaking or other active pursuits. There are usually less-active alternatives." },
        { q: "Does Seabourn offer whale-watching excursions in Alaska?", a: "Wildlife and whale-watching excursions can be available depending on the port and sailing. Specific offerings vary by itinerary." },
        { q: "Is Seabourn Alaska all-inclusive?", a: "Seabourn is known for an inclusive luxury cruise experience, with many onboard amenities, dining, selected beverages, Wi-Fi and gratuities generally included. Individual sailing terms should be checked before booking." },
        { q: "Is Seabourn Alaska worth the money?", a: "For travelers who prioritize personalized service, luxury accommodations, fine dining and a more intimate Alaska experience, Seabourn can justify its premium pricing." },
        { q: "Is Seabourn better than a large Alaska cruise ship?", a: "It depends on your priorities. Seabourn is better suited to travelers who value intimacy and luxury, while large ships may be better for travelers seeking extensive entertainment and family facilities." },
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
    { label: "Destination", value: "Alaska, USA" },
    { label: "Main region", value: "Southeast Alaska / Inside Passage" },
    { label: "Cruise style", value: "Luxury small-ship cruising" },
    { label: "Highlights", value: "Glaciers, wildlife, mountains and fjords" },
    { label: "Wildlife", value: "Whales, bears, eagles, seals and sea lions" },
    { label: "Activities", value: "Hiking, kayaking, wildlife viewing and cultural excursions" },
    { label: "Scenic highlights", value: "Glaciers, fjords, forests and coastal mountains" },
    { label: "Best season", value: "Alaska cruise season, generally late spring through early fall" },
    { label: "Best for", value: "Couples, luxury travelers, photographers and nature lovers" },
    { label: "Atmosphere", value: "Intimate and sophisticated" },
];

const whySeeList = ["Tidewater glaciers", "Snow-covered mountains", "Fjords", "Rainforests", "Remote islands", "Wildlife habitats", "Small coastal communities", "Indigenous cultural sites"];

const differentCards = [
    { icon: Users, title: "Fewer guests", text: "A smaller ship keeps public spaces from ever feeling crowded." },
    { icon: Heart, title: "A quieter onboard atmosphere", text: "Alaska's scenery is best enjoyed without the noise of a large resort ship." },
    { icon: Star, title: "More personalized service", text: "Fewer guests means the crew can focus on getting to know you." },
    { icon: MapPin, title: "Easier access to smaller destinations", text: "A smaller ship can reach ports and waterways larger vessels cannot." },
    { icon: Binoculars, title: "More focus on scenery and wildlife", text: "The experience is built around Alaska itself, not onboard distractions." },
];

const shipFactors = ["Suite selection", "Public spaces", "Dining venues", "Guest capacity", "Itinerary", "Departure dates"];
const insidePassageList = ["Forested islands", "Mountain ranges", "Glaciers", "Fjords", "Waterfalls", "Marine wildlife", "Remote coastal communities"];

const ports = [
    {
        icon: Landmark,
        title: "Juneau",
        subtitle: "Juneau, Alaska's Capital",
        desc: "Alaska's capital is surrounded by mountains, forests and waterways. One of Juneau's biggest attractions is its proximity to Mendenhall Glacier.",
        listLabel: "Juneau provides access to experiences such as:",
        listItems: ["Glacier viewing", "Wildlife excursions", "Whale watching", "Hiking", "Scenic tours", "Local cultural experiences"],
        best: "",
    },
    {
        icon: Camera,
        title: "Sitka",
        subtitle: "Sitka's Coastal Heritage",
        desc: "Sitka combines dramatic scenery with a rich cultural and historical heritage, and can be an excellent stop for travelers who want more than just scenery.",
        listLabel: "Travelers can explore:",
        listItems: ["Coastal scenery", "Forests", "Wildlife", "Russian-influenced history", "Tlingit cultural heritage", "Local museums and landmarks"],
        best: "",
    },
    {
        icon: Fish,
        title: "Ketchikan",
        subtitle: "Ketchikan's Indigenous & Fishing Heritage",
        desc: "Ketchikan is closely associated with Alaska's Indigenous heritage, fishing culture and dramatic coastal environment, and is a popular gateway for outdoor excursions.",
        listLabel: "Highlights can include:",
        listItems: ["Totem poles", "Cultural experiences", "Wildlife", "Fishing", "Rainforest scenery", "Local history"],
        best: "",
    },
    {
        icon: Mountain,
        title: "Skagway",
        subtitle: "Skagway's Gold Rush History",
        desc: "Skagway has strong connections to Alaska's Gold Rush history and is particularly appealing to travelers interested in Alaska's history.",
        listLabel: "A visit can combine:",
        listItems: ["Historic buildings", "Gold Rush history", "Scenic railway experiences", "Mountain scenery", "Hiking", "Outdoor excursions"],
        best: "",
    },
];

const glacierCompare = [
    {
        icon: Snowflake,
        heading: "Hubbard Glacier",
        sub: "Cruising near the glacier provides opportunities to see:",
        list: ["Icebergs", "Glacier ice", "Mountain landscapes", "Wildlife", "Dramatic changes in the glacier face"],
    },
    {
        icon: Mountain,
        heading: "Glacier Bay",
        sub: "The region is known for:",
        list: ["Tidewater glaciers", "Mountains", "Marine wildlife", "Coastal forests", "Fjords", "Exceptional scenery"],
    },
];

const wildlifeCards = [
    { icon: Waves, title: "Whale Watching", text: "Humpback whales are commonly associated with Southeast Alaska's productive waters, while orcas can also be encountered. Look for breaching, tail flukes, spouts and groups of whales feeding." },
    { icon: Compass, title: "Bears in Alaska", text: "Depending on the location and excursion, travelers may have opportunities to search for brown bears and black bears. Sightings are most likely during specialized wildlife excursions." },
    { icon: Binoculars, title: "Bald Eagles", text: "Alaska has one of the world's most recognizable populations of bald eagles. You may spot them along shorelines, in trees, near rivers and around fishing areas." },
];

const wildlifeList = ["Humpback whales", "Orcas", "Bald eagles", "Brown bears", "Black bears", "Sea lions", "Harbor seals", "Sea otters", "Mountain goats", "Other coastal wildlife"];

const excursionCategories = [
    { icon: Binoculars, title: "Wildlife Excursions", text: "Ideal for travelers hoping to see whales, bears, eagles, sea otters and seals in their natural habitat.", tags: ["Whales", "Bears", "Eagles", "Sea otters", "Seals"], footer: "Best for travelers whose top priority is wildlife encounters." },
    { icon: Snowflake, title: "Glacier Experiences", text: "These can include glacier viewing, scenic flights, helicopter experiences and glacier walks.", tags: ["Glacier viewing", "Scenic flights", "Helicopter tours", "Glacier walks"], footer: "Best for travelers who want an up-close view of Alaska's ice." },
    { icon: Landmark, title: "Cultural Experiences", text: "These can explore Indigenous heritage, local traditions, Alaska Native art and historical communities.", tags: ["Indigenous heritage", "Local traditions", "Alaska Native art", "Historical communities"], footer: "Best for travelers who want context alongside the scenery." },
    { icon: Tent, title: "Active Adventures", text: "Options may include hiking, kayaking, canoeing, ziplining and wilderness exploration.", tags: ["Hiking", "Kayaking", "Canoeing", "Ziplining", "Wilderness exploration"], footer: "Best for travelers who want to get moving in Alaska's wilderness." },
];

const firstTimeSteps = [
    { title: "Whale watching", desc: "A classic Alaska experience and a strong starting point for any first sailing." },
    { title: "Glacier exploration", desc: "Seeing a glacier from close range provides a completely different perspective." },
    { title: "Wildlife viewing", desc: "Particularly worthwhile for travelers interested in bears and marine life." },
    { title: "Cultural experiences", desc: "These add context to the landscapes and communities you're visiting." },
    { title: "Scenic exploration", desc: "Sometimes the most memorable excursion is simply getting into Alaska's wilderness." },
];

const bookingTips = [
    { title: "Decide what matters most", desc: "Is your priority glaciers, wildlife, ports, hiking, culture or scenery? Choose the itinerary accordingly." },
    { title: "Compare the ship", desc: "Different Seabourn ships offer different layouts and experiences." },
    { title: "Book the right suite", desc: "A balcony can be particularly useful for Alaska's scenery." },
    { title: "Research excursions early", desc: "Popular wildlife and adventure excursions can fill quickly." },
    { title: "Pack layers", desc: "Alaska weather can change throughout the day." },
    { title: "Bring binoculars", desc: "You will use them more than you expect." },
    { title: "Allow time for scenic cruising", desc: "Don't schedule every minute of your trip around shore excursions." },
    { title: "Consider shoulder-season travel", desc: "May and September can appeal to travelers who prefer fewer visitors and a different seasonal atmosphere." },
];

const seasonPhases = [
    {
        phase: "Early Season",
        months: "May & Early June",
        icon: Snowflake,
        tags: [
            "Fewer travelers on ships and in ports",
            "Beautiful spring scenery & snow-capped peaks",
            "Cooler temperature conditions",
            "Long daylight hours"
        ]
    },
    {
        phase: "Mid-Season",
        months: "Late June - August",
        icon: Sun,
        tags: [
            "Peak summer weather conditions",
            "Longest daylight of the year",
            "Active wildlife & salmon runs",
            "Extensive outdoor activities"
        ]
    },
    {
        phase: "Late Season",
        months: "September",
        icon: Mountain,
        tags: [
            "Fewer travelers & quieter ports",
            "Stunning autumn colors on foliage",
            "Cooler weather conditions",
            "Darker evenings with northern lights potential"
        ]
    }
];

const alaskaWorthItems = [
    "Alaska's wilderness",
    "Luxury accommodations",
    "Personalized service",
    "Scenic cruising",
    "High-quality dining",
    "Curated shore experiences"
];

const packingData = [
    { title: "Daytime Clothing", items: ["Waterproof jacket", "Lightweight layers", "Sweaters", "Comfortable trousers", "Hiking pants", "Moisture-wicking shirts"] },
    { title: "Outdoor Essentials", items: ["Waterproof walking shoes", "Comfortable walking shoes", "Warm hat", "Gloves", "Sunglasses", "Sunscreen", "Binoculars", "Small daypack"] },
    { title: "Evening Clothing", items: ["Smart-casual outfits", "Comfortable dress shoes", "Sweater or light jacket"] },
];

const balconyList = ["Watch scenery", "Look for wildlife", "Photograph glaciers", "Enjoy morning coffee", "Observe changing weather"];
const scenicList = ["Snow-capped mountains", "Forested islands", "Waterfalls", "Glaciers", "Whales", "Eagles", "Icebergs"];

const seabournList = ["Smaller guest capacity", "Intimate atmosphere", "Luxury-focused", "Personalized service", "Quiet public spaces", "Smaller-ship feel", "Focus on scenery and experience"];
const largeShipList = ["Thousands of guests possible", "Resort-style atmosphere", "Broader entertainment focus", "Larger-scale service", "More extensive entertainment", "Larger onboard facilities", "More onboard attractions"];

const oceanEmphasisList = ["Scenic cruising", "Ports", "Dining", "Traditional shore excursions", "Luxury onboard experience"];
const expeditionEmphasisList = ["Zodiacs", "Remote landing sites", "Expedition activities", "Wildlife exploration", "Expert-led discovery"];

const includesData = [
    { title: "Accommodations & Dining", items: ["Suite accommodation", "Dining"] },
    { title: "Beverages & Connectivity", items: ["Selected beverages", "Wi-Fi"] },
    { title: "Service & Entertainment", items: ["Entertainment", "Gratuities", "Many onboard amenities"] },
];

const onboardList = ["Fine dining", "Lounges", "Bars", "Spa treatments", "Fitness facilities", "Pools or outdoor spaces", "Live entertainment", "Comfortable suites"];

const alaskaDiningList = [
    "Fine dining",
    "Multiple dining options",
    "Casual meals",
    "Room service",
    "Premium beverages"
];

const bookFitList = [
    "Prefer luxury over mass-market cruising",
    "Enjoy nature and wildlife",
    "Want an intimate ship",
    "Appreciate personalized service",
    "Like scenic cruising",
    "Prefer sophisticated dining",
    "Enjoy cultural experiences",
    "Want Alaska without a resort-style mega-ship"
];

const notFitList = ["Extensive children's facilities", "Large waterparks", "Broadway-style entertainment", "Numerous restaurants", "Large shopping areas", "Huge onboard activity programs"];

const prosList = ["Intimate luxury experience", "Beautiful Alaska scenery", "Glacier viewing", "Excellent wildlife opportunities", "Smaller guest environment", "Personalized service", "Fine dining", "Scenic cruising", "Cultural experiences", "Variety of shore excursions", "Comfortable suites"];
const consList = ["Higher fares than many mainstream Alaska cruises", "Fewer large-ship entertainment facilities", "Weather can be unpredictable", "Wildlife sightings aren't guaranteed", "Some excursions can be expensive", "Itinerary choices are more limited than the largest Alaska cruise companies"];



/* ── Main Component ──────────────────────────────────────────────── */
const SeabournAlaskaCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activePortTab, setActivePortTab] = useState(0);
    const ActivePortIcon = ports[activePortTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Alaska Cruises: Ships, Glaciers & Best Time</title>
                <meta name="title" content="Seabourn Alaska Cruises: Ships, Itineraries & Excursions" />
                <meta
                    name="description"
                    content="Explore Seabourn Alaska cruises, including ships, glaciers, wildlife, shore excursions, itinerary options, Alaska's Inside Passage and the best time to travel."
                />
                <script type="application/ld+json">{JSON.stringify(seabournAlaskaSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Alaska Cruises <br /> Glaciers, Wildlife &amp; Luxury Exploration</h1>
                    <p>
                        A Seabourn Alaska cruise combines the scenery of one of North America's most spectacular wilderness regions with Seabourn's intimate, all-inclusive luxury cruise experience.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Alaska is known for its immense glaciers, forested coastlines, dramatic mountains, fjords, marine wildlife and Indigenous cultures. A cruise allows travelers to experience many of these landscapes without repeatedly unpacking or changing hotels.
                            </p>
                            <p>
                                Seabourn's Alaska itineraries can focus on the Inside Passage and Southeast Alaska, with opportunities for glacier viewing, wildlife encounters, cultural experiences and active shore excursions.
                            </p>
                            <p>
                                This guide explains which ships sail Alaska, what itineraries are available, the best time to travel, what you can see, which excursions are worth considering and who will enjoy a Seabourn Alaska cruise most.
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
                            Start Planning Your Alaska Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE (new Ala-glance table) ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ala-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Overview</span>
                        <h2 className="Sbc-h2">Seabourn Alaska Cruises at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ala-glance-wrap">
                        <div className="Ala-glance-row Ala-glance-head">
                            <span>Feature</span>
                            <span>Seabourn Alaska Cruises</span>
                        </div>
                        {glanceData.map((row, i) => (
                            <div className="Ala-glance-row" key={i}>
                                <div className="Ala-glance-label">{row.label}</div>
                                <div className="Ala-glance-value">{row.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY TAKE A SEABOURN ALASKA CRUISE ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Ala-why-take">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Appeal</span>
                        <h2 className="Sbc-h2">Why Take a Seabourn Alaska Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ala-why-grid">
                        {/* Left column - Content */}
                        <div className="Ala-why-content">
                            <p className="Sbc-p Ala-why-intro-p">
                                Alaska is one of the world's destinations where the scenery is often the main attraction. A Seabourn cruise can put you close to remarkable landscapes.
                            </p>

                            <div className="Ala-why-pills-container">
                                <span className="Ala-why-pills-label">A Seabourn cruise can put you close to:</span>
                                <div className="Ala-why-pills-grid">
                                    {whySeeList.map((item, idx) => (
                                        <div className="Ala-why-pill" key={idx}>
                                            <span className="Ala-why-pill-dot"></span>
                                            <span className="Ala-why-pill-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="Sbc-p Ala-why-body-p">
                                The benefit of a luxury cruise is that you can experience these environments while returning each evening to a comfortable suite, fine dining and Seabourn's onboard amenities.
                            </p>
                        </div>

                        {/* Right column - Image placeholder */}
                        <div className="Ala-why-image-wrapper">
                            <div className="Ala-why-image-placeholder">
                                <div className="Ala-why-viewfinder">
                                    <div className="Ala-why-bracket tl"></div>
                                    <div className="Ala-why-bracket tr"></div>
                                    <div className="Ala-why-bracket bl"></div>
                                    <div className="Ala-why-bracket br"></div>
                                </div>
                                <div className="Ala-why-placeholder-icon-wrapper">
                                    <Mountain size={40} className="Ala-why-placeholder-icon" />
                                </div>
                                <span className="Ala-why-placeholder-text">Alaska Wilderness Image Placeholder</span>
                            </div>

                            {/* Layered floating overlay card */}
                            <div className="Ala-why-floating-badge">
                                <div className="Ala-why-badge-num">8</div>
                                <div className="Ala-why-badge-text">
                                    <span>Scenic</span>
                                    <span>Highlights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES SEABOURN ALASKA DIFFERENT ──────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-why-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Small-Ship Alaska</span>
                        <h2 className="Sbc-h2">What Makes Seabourn Alaska Different?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Alaska has a wide range of cruise options, from
                            very large ships to small expedition vessels.
                            Seabourn offers a more intimate alternative.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {differentCards.map((card, i) => {
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

            {/* ── SHIPS & INSIDE PASSAGE ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ships &amp; Route</span>
                        <h2 className="Sbc-h2">Seabourn Alaska Cruise Ships <br />&amp; the Inside Passage</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's Alaska program has included its luxury
                            ocean ships, with itineraries and deployment
                            varying by season. Always compare the actual ship
                            and itinerary rather than assuming every Seabourn
                            Alaska sailing offers the same experience.
                        </p>
                    </div>

                    <div className="Sbc-fleet-columns">
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">The Ship Affects</div>
                            <ul>
                                {shipFactors.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">The Inside Passage</div>
                            <ul>
                                {insidePassageList.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ITINERARY / PORTS (destination tabs) ───────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where You'll Go</span>
                        <h2 className="Sbc-h2">Seabourn Alaska Itinerary Options</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Alaska itineraries vary by sailing. Some
                            itineraries emphasize ports and cultural
                            experiences, while others prioritize scenic
                            cruising and glacier viewing.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav" style={{ justifyContent: 'center' }}>
                            {ports.map((port, i) => {
                                const Icon = port.icon;
                                return (
                                    <button
                                        key={i}
                                        className={`Sbc-dest-tab-btn ${activePortTab === i ? "active" : ""}`}
                                        onClick={() => setActivePortTab(i)}
                                    >
                                        <Icon size={18} />
                                        <span>{port.title}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="Sbc-dest-tab-content">
                            <div className="Sbc-dest-image-placeholder">
                                <div className="Sbc-dest-placeholder-icon-wrapper">
                                    <ActivePortIcon size={36} className="Sbc-dest-placeholder-icon" />
                                </div>
                                <span className="Sbc-dest-placeholder-text">
                                    {ports[activePortTab].title} Travel Image
                                </span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Port</span>
                                <h3 className="Sbc-dest-tab-title">{ports[activePortTab].subtitle}</h3>
                                <p className="Sbc-dest-tab-desc">{ports[activePortTab].desc}</p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">{ports[activePortTab].listLabel}</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {ports[activePortTab].listItems.map((item, j) => (
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

            {/* ── CTA ITINERARY OPTIONS ─────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Inside Passage Routes</span>
                    <h3 className="Sbc-cta-title">Start Designing Your Alaska Route</h3>
                    <p className="Sbc-cta-text">
                        From Hubbard Glacier to the small native fishing villages, let's select the perfect Inside Passage itinerary for your priorities.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Route Options
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── GLACIER VIEWING (compare grid) ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-glaciers">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ice &amp; Scale</span>
                        <h2 className="Sbc-h2">Glacier Viewing on a Seabourn Alaska Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Glaciers are among the biggest reasons to visit
                            Alaska by ship. Watching a glacier calve into the
                            sea can be one of the most memorable moments of
                            an Alaska cruise.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        {glacierCompare.map((g, i) => {
                            const Icon = g.icon;
                            return (
                                <div className={`Sbc-compare-card ${i === 1 ? "Sbc-compare-alt" : ""}`} key={i}>
                                    <div className="Sbc-compare-placeholder">
                                        <Icon size={32} className="Sbc-compare-placeholder-icon" />
                                        <span className="Sbc-compare-placeholder-text">{g.heading} Image Placeholder</span>
                                    </div>
                                    <h3 className="Sbc-compare-heading">{g.heading}</h3>
                                    <p className="Sbc-compare-sub">{g.sub}</p>
                                    <ul className="Sbc-compare-list">
                                        {g.list.map((item, j) => (
                                            <li key={j}>
                                                <Check size={16} strokeWidth={2} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    <div className="Sbc-compare-key">
                        <p><strong>Note:</strong> Glacier conditions can affect how close a ship can approach, and whether a particular sailing visits Glacier Bay depends on the itinerary and operating schedule.</p>
                    </div>
                </div>
            </section>

            {/* ── ALASKA WILDLIFE ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-wildlife">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Nature &amp; Wildlife</span>
                        <h2 className="Sbc-h2">Alaska Wildlife</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Wildlife is one of the strongest reasons to choose
                            Alaska. Wildlife encounters are never guaranteed,
                            but Alaska provides numerous opportunities for
                            observation.
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">Possible sightings include:</h4>
                                <ul className="Sbc-highlights-list">
                                    {wildlifeList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                Keeping binoculars nearby is worthwhile even
                                while cruising — you will use them more than
                                you expect.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Binoculars size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Alaska Wildlife Image Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div className="Sbc-card-grid" style={{ marginTop: "56px" }}>
                        {wildlifeCards.map((card, i) => {
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

            {/* ── SHORE EXCURSIONS (4-up exp grid) ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-experiences">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard &amp; Ashore</span>
                        <h2 className="Sbc-h2">Seabourn Alaska Shore Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The best shore excursion depends on what you want
                            from Alaska.
                        </p>
                    </div>

                    <div className="Sbc-exp-grid" id="Sbc-exp-grids">
                        {excursionCategories.map((card, i) => {
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
                                        <span className="Sbc-exp-features-title">Popular options:</span>
                                        <div className="Sbc-exp-tags">
                                            {card.tags.map((tag, j) => (
                                                <span key={j} className="Sbc-exp-tag">{tag}</span>
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

            {/* ── BEST EXCURSIONS FOR FIRST-TIME VISITORS (steps) ───────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ala-first-time">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Started</span>
                        <h2 className="Sbc-h2">Best Seabourn Alaska Excursions for First-Time Visitors</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">If this is your first Alaska cruise, consider prioritizing:</p>
                    </div>

                    <div className="Ala-steps-list">
                        {firstTimeSteps.map((step, i) => (
                            <div className="Ala-step-item" key={i}>
                                <div className="Ala-step-number">{i + 1}</div>
                                <div className="Ala-step-content">
                                    <h4 className="Ala-step-title">{step.title}</h4>
                                    <p className="Ala-step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore and Discover</span>
                    <h3 className="Sbc-cta-title">Curate Your Alaska Shore Excursions</h3>
                    <p className="Sbc-cta-text">
                        From whale watching to glacier walks, let's design the right mix of scenery, wildlife and culture for your Alaska sailing.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Itinerary
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── IS IT GOOD FOR WILDLIFE ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-wildlife-fit">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Wildlife Travel</span>
                                <h2 className="Sbc-h2">Is a Seabourn Alaska Cruise Good for Wildlife?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">Yes.</p>
                            <p className="Sbc-p">
                                Alaska is one of the strongest cruise
                                destinations for travelers interested in
                                wildlife. The combination of protected
                                waterways, nutrient-rich marine environments
                                and extensive wilderness creates excellent
                                viewing opportunities.
                            </p>
                            <div className="Sbc-qa-warning-box">
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                    <span>Wildlife should always be treated as a bonus rather than a guarantee.</span>
                                </div>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Binoculars size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Alaska Wildlife Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT GOOD FOR COUPLES ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-couples">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Alaska Couples Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Couples Travel</span>
                                <h2 className="Sbc-h2">Is Seabourn Alaska Good for Couples?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">Yes.</p>
                            <p className="Sbc-p">
                                Alaska works particularly well for couples who
                                enjoy scenic travel. The relatively intimate
                                atmosphere of Seabourn can make the experience
                                feel more personal than a large Alaska cruise.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">A typical day can combine:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Morning wildlife viewing", "Afternoon glacier scenery", "Evening cocktails", "Fine dining", "Relaxation in your suite"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT GOOD FOR SOLO TRAVELERS ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-solo">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Solo Cruising</span>
                                <h2 className="Sbc-h2">Is Seabourn Alaska Good for Solo Travelers?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">Yes.</p>
                            <p className="Sbc-p">
                                The smaller-ship environment makes it
                                relatively easy to meet other guests. Solo
                                travelers who enjoy nature and cultural
                                experiences can find Alaska particularly
                                rewarding.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">It's relatively easy to meet other guests through:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Excursions", "Dining", "Lectures", "Lounges", "Scenic viewing"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Alaska Solo Cruising Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT GOOD FOR FAMILIES ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-families">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Alaska Families Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Family Travel</span>
                                <h2 className="Sbc-h2">Is Seabourn Alaska Good for Families?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                It can be, particularly for families with
                                older children or multigenerational groups.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Alaska offers experiences that appeal to multiple generations:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Wildlife", "Glaciers", "Hiking", "Cultural experiences", "Scenic cruising"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">However, families should compare excursion age requirements and activity levels before booking.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST TIME TO CRUISE (Ala-season pattern) ───────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Ala-best-time">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">When to Go</span>
                        <h2 className="Sbc-h2">Best Time for a <br /> Seabourn Alaska Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The Alaska cruise season generally runs from late spring through early fall, with the peak summer months offering long daylight hours and extensive cruise options. Each part of the season has advantages.
                        </p>
                    </div>

                    <div className="Ala-season-grid-container">
                        <div className="Ala-season-flex-grid">
                            {seasonPhases.map((phaseData, i) => {
                                const Icon = phaseData.icon;
                                return (
                                    <div className="Ala-season-month-card" key={i}>
                                        <div className="Ala-season-card-head">
                                            <div className="Ala-season-card-icon-wrapper">
                                                <Icon size={20} />
                                            </div>
                                            <span className="Ala-season-card-num">0{i + 1}</span>
                                        </div>
                                        <h3 className="Ala-season-card-title">{phaseData.phase}</h3>
                                        <span className="Ala-season-card-month-sub" style={{
                                            fontSize: "15px",
                                            fontWeight: "600",
                                            color: "var(--navy)",
                                            marginBottom: "12px",
                                            display: "block"
                                        }}>{phaseData.months}</span>
                                        <span className="Ala-season-card-tag-label">Expect:</span>
                                        <ul className="Ala-season-card-tags-list">
                                            {phaseData.tags.map((tag, idx) => (
                                                <li key={idx}>
                                                    <span className="Ala-season-dot"></span>
                                                    <span>{tag}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="Ala-season-advisories-grid">
                        <div className="Ala-season-advisory-card">
                            <div className="Ala-season-advisory-head">
                                <Binoculars size={22} className="Ala-season-advisory-icon" />
                                <h4 className="Ala-season-advisory-title">Wildlife Timing</h4>
                            </div>
                            <p className="Ala-season-advisory-text">
                                There is no single best month for every species — your ideal timing depends on whether you prioritize whales, bears, eagles, salmon, glaciers, hiking or photography.
                            </p>
                        </div>

                        <div className="Ala-season-advisory-card">
                            <div className="Ala-season-advisory-head">
                                <Snowflake size={22} className="Ala-season-advisory-icon" />
                                <h4 className="Ala-season-advisory-title">Glacier Timing</h4>
                            </div>
                            <p className="Ala-season-advisory-text">
                                Glaciers can be spectacular throughout the season. The key consideration is the specific itinerary and glacier destination, not simply the month.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA BEST TIME TO GO ────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Timing is Everything</span>
                    <h3 className="Sbc-cta-title">Ready to Plan the Perfect Season?</h3>
                    <p className="Sbc-cta-text">
                        Whether you prioritize active wildlife search in summer or quieter fjord photography in spring, we will help you pinpoint the best week.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Choose My Travel Date
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── ALASKA WEATHER ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ala-weather">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">What to Expect</span>
                        <h2 className="Sbc-h2">Alaska Weather</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Alaska's weather can be unpredictable, particularly
                            in Southeast Alaska. Expect conditions that may
                            include rain, cool temperatures, wind, sun and
                            changing conditions throughout the day. Layering
                            is the best approach.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PACKING LIST (includes grid, dark) ────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-includes">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Prepare for the Trip</span>
                        <h2 className="Sbc-h2">What to Pack for a Seabourn Alaska Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            You should pack for both luxury evenings and
                            outdoor exploration. Alaska's weather can change
                            quickly, so layers are more useful than packing a
                            large number of heavy items.
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
                            <strong>Do you need binoculars for Alaska?</strong> Absolutely.
                            Binoculars are one of the most useful accessories you can bring, helping you spot whales, eagles, bears, sea otters, mountain goats, seals and distant glaciers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SCENIC CRUISING & BALCONY SUITES ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-scenic">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Life Onboard</span>
                                <h2 className="Sbc-h2">Seabourn Alaska Scenic Cruising</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                One of the best things about an Alaska cruise
                                is that you don't always need to leave the
                                ship. The scenery can be spectacular
                                throughout the day.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">From your balcony or an outdoor viewing area, you may see:</h4>
                                <ul className="Sbc-highlights-list">
                                    {scenicList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">For this reason, choosing a good suite location can enhance the experience.</div>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Camera size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Alaska Scenic Cruising Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BALCONY SUITE Q&A ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-balcony">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Home size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Alaska Balcony Suite Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Accommodations</span>
                                <h2 className="Sbc-h2">Should You Book a Balcony Suite for Alaska?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                A balcony can be particularly valuable in
                                Alaska. However, Alaska's weather can be cool
                                and rainy, so don't rely entirely on your
                                balcony — public observation areas can provide
                                broader views.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">It gives you a private place to:</h4>
                                <ul className="Sbc-highlights-list">
                                    {balconyList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN ALASKA VS LARGE-SHIP CRUISES ─────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ocean-vs-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing Your Ship</span>
                        <h2 className="Sbc-h2">Seabourn Alaska vs. Large-Ship Alaska Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The better option depends on whether you value
                            intimacy and luxury or a large selection of
                            onboard entertainment and facilities.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn</h3>
                            <p className="Sbc-compare-sub">Ideal for travelers who want:</p>
                            <ul className="Sbc-compare-list">
                                {seabournList.map((item, i) => (
                                    <li key={i}>
                                        <Dot size={20} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Anchor size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Large-Ship Cruise Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Large-Ship Cruise</h3>
                            <p className="Sbc-compare-sub">Better suited to travelers who want:</p>
                            <ul className="Sbc-compare-list">
                                {largeShipList.map((item, i) => (
                                    <li key={i}>
                                        <Dot size={20} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA SEABOURN VS LARGE-SHIP ─────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Distinction</span>
                    <h3 className="Sbc-cta-title">Experience Alaska Without the Crowds</h3>
                    <p className="Sbc-cta-text">
                        Discover the difference of small-ship cruising where the focus remains entirely on personalized service and the destination scenery.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Onboard Experiences
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SEABOURN ALASKA VS SEABOURN EXPEDITION CRUISES ────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-vs-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Two Styles of Exploration</span>
                        <h2 className="Sbc-h2">Seabourn Alaska vs. Seabourn Expedition Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn also operates purpose-built expedition
                            ships such as Seabourn Venture and Seabourn
                            Pursuit. If adventure is your primary priority,
                            compare Alaska ocean itineraries with Seabourn's
                            expedition destinations.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Alaska Ocean Cruise Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Conventional Seabourn Luxury Ship</h3>
                            <p className="Sbc-compare-sub">Can emphasize:</p>
                            <ul className="Sbc-compare-list">
                                {oceanEmphasisList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Compass size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Expedition Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn Expedition Itinerary</h3>
                            <p className="Sbc-compare-sub">Emphasizes:</p>
                            <ul className="Sbc-compare-list">
                                {expeditionEmphasisList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT ALL-INCLUSIVE ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-all-inclusive">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Inclusive Model</span>
                        <h2 className="Sbc-h2">Is a Seabourn Alaska Cruise All-Inclusive?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn is known for an inclusive luxury cruise
                            model. Depending on the sailing, the fare can
                            include:
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
                            <strong>Important distinction:</strong> Shore
                            excursions, premium experiences and certain other
                            items can be additional. Always review the
                            inclusions for your specific sailing before
                            comparing fares.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ONBOARD EXPERIENCE (Ala-onboard pattern) ───────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ala-onboard-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Retreat</span>
                        <h2 className="Sbc-h2">What Is the Onboard <br /> Experience Like?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ala-onboard-split">
                        {/* Left column - Content */}
                        <div className="Ala-onboard-content">
                            <p className="Sbc-p Ala-onboard-intro-lead">
                                After a day exploring Alaska, the ship provides a sophisticated retreat.
                            </p>

                            <div className="Ala-onboard-highlights-box">
                                <h4 className="Ala-onboard-highlights-title">Guests can enjoy:</h4>
                                <ul className="Sbc-highlights-list">
                                    {onboardList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} className="Ala-onboard-check-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p Ala-onboard-conclusion">
                                The contrast between Alaska's wilderness and Seabourn's luxury environment is a major part of the appeal.
                            </p>
                        </div>

                        {/* Right column - Image placeholder */}
                        <div className="Ala-onboard-image-wrapper">
                            <div className="Ala-onboard-image-placeholder">
                                <div className="Ala-onboard-viewfinder">
                                    <div className="Ala-onboard-bracket tl"></div>
                                    <div className="Ala-onboard-bracket tr"></div>
                                    <div className="Ala-onboard-bracket bl"></div>
                                    <div className="Ala-onboard-bracket br"></div>
                                </div>
                                <div className="Ala-onboard-placeholder-icon-wrapper">
                                    <Wine size={40} className="Ala-onboard-placeholder-icon" />
                                </div>
                                <span className="Ala-onboard-placeholder-text">Onboard Experience Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING (Ala-dining pattern) ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Ala-dining-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Life at Sea</span>
                        <h2 className="Sbc-h2">Seabourn Alaska Dining</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ala-dining-split">
                        {/* Left column - Image placeholder */}
                        <div className="Ala-dining-image-wrapper">
                            <div className="Ala-dining-image-placeholder">
                                <div className="Ala-dining-viewfinder">
                                    <div className="Ala-dining-bracket tl"></div>
                                    <div className="Ala-dining-bracket tr"></div>
                                    <div className="Ala-dining-bracket bl"></div>
                                    <div className="Ala-dining-bracket br"></div>
                                </div>
                                <div className="Ala-dining-placeholder-icon-wrapper">
                                    <Utensils size={40} className="Ala-dining-placeholder-icon" />
                                </div>
                                <span className="Ala-dining-placeholder-text">Seabourn Alaska Dining Image Placeholder</span>
                            </div>
                        </div>

                        {/* Right column - Content */}
                        <div className="Ala-dining-content">
                            <p className="Sbc-p Ala-dining-intro-lead">
                                Dining is an important part of the Seabourn experience.
                            </p>

                            <div className="Ala-dining-highlights-box">
                                <h4 className="Ala-dining-highlights-title">After a day of sightseeing, guests can enjoy:</h4>
                                <ul className="Sbc-highlights-list">
                                    {alaskaDiningList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} className="Ala-dining-check-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p Ala-dining-conclusion">
                                The relaxed dining environment works well for couples and travelers who prefer flexibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT WORTH THE MONEY (Ala-worth pattern) ───────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ala-worth-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Value Proposition</span>
                        <h2 className="Sbc-h2">Is a Seabourn Alaska Cruise Worth the Money?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ala-worth-split">
                        {/* Left column - Content */}
                        <div className="Ala-worth-content">
                            <p className="Ala-worth-intro-lead">
                                For travelers who value small-ship luxury, personalized service, scenery and a more intimate Alaska experience, Seabourn can be worth the premium.
                            </p>

                            <div className="Ala-worth-highlights">
                                <h4 className="Ala-worth-highlights-title">The value comes from combining:</h4>
                                <div className="Ala-worth-items-grid">
                                    {alaskaWorthItems.map((item, idx) => (
                                        <div className="Ala-worth-item" key={idx}>
                                            <span className="Ala-worth-item-num">{String(idx + 1).padStart(2, '0')}</span>
                                            <span className="Ala-worth-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="Sbc-p Ala-worth-conclusion-p">
                                It is particularly compelling for travelers who don't need the huge entertainment complexes found on larger cruise ships.
                            </p>
                        </div>

                        {/* Right column - Image placeholder */}
                        <div className="Ala-worth-image-wrapper">
                            <div className="Ala-worth-image-placeholder">
                                <div className="Ala-worth-viewfinder">
                                    <div className="Ala-worth-bracket tl"></div>
                                    <div className="Ala-worth-bracket tr"></div>
                                    <div className="Ala-worth-bracket bl"></div>
                                    <div className="Ala-worth-bracket br"></div>
                                </div>
                                <div className="Ala-worth-placeholder-icon-wrapper">
                                    <Award size={40} className="Ala-worth-placeholder-icon" />
                                </div>
                                <span className="Ala-worth-placeholder-text">Seabourn Alaska Value Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Is Alaska Your Next Voyage?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare itinerary routes, suite categories and
                        excursion options to find the best fit for your
                        Seabourn Alaska cruise.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PROS AND CONS ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Alaska Pros and Cons</h2>
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

            {/* ── WHO SHOULD BOOK (Ala-fit pattern) ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ala-fit-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Should Book a Seabourn Alaska Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ala-fit-container">
                        <p className="Ala-fit-staggered-lead">A Seabourn Alaska cruise is especially well suited to travelers who:</p>
                        <div className="Ala-fit-staggered-grid">
                            {bookFitList.map((item, idx) => (
                                <div className="Ala-fit-staggered-card" key={idx}>
                                    <div className="Ala-fit-staggered-icon-wrap">
                                        <Check size={20} strokeWidth={2.5} className="Ala-fit-staggered-check" />
                                    </div>
                                    <span className="Ala-fit-staggered-text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO MAY PREFER ANOTHER LINE ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-not-fit">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <h2 className="Sbc-h2">Who May Prefer Another <br /> Alaska Cruise?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            A different cruise line may be a better fit if
                            your priorities include the following. Seabourn is
                            designed around a different definition of luxury.
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

            {/* ── TIPS FOR BOOKING (steps) ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ala-booking-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">Tips for Booking a <br /> Seabourn Alaska Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ala-tips-two-columns">
                        <div className="Ala-tips-column">
                            {bookingTips.slice(0, 4).map((tip, i) => (
                                <div className="Ala-step-item" key={i}>
                                    <div className="Ala-step-number">{i + 1}</div>
                                    <div className="Ala-step-content">
                                        <h4 className="Ala-step-title">{tip.title}</h4>
                                        <p className="Ala-step-desc">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="Ala-tips-column">
                            {bookingTips.slice(4).map((tip, i) => (
                                <div className="Ala-step-item" key={i + 4}>
                                    <div className="Ala-step-number">{i + 5}</div>
                                    <div className="Ala-step-content">
                                        <h4 className="Ala-step-title">{tip.title}</h4>
                                        <p className="Ala-step-desc">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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

            {/* ── FAQ ─────────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Alaska Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking
                            a Seabourn Alaska cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Seabourn Alaska Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Alaska Right for You?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Alaska cruises are best for travelers who
                            want to experience Alaska's wilderness through an
                            intimate and sophisticated luxury cruise. The
                            combination of glaciers, whales, bears, mountains,
                            fjords, forests and cultural experiences makes
                            Alaska one of the most rewarding cruise
                            destinations in North America.
                        </p>
                        <p className="Sbc-p">
                            Seabourn adds a quieter alternative to the
                            large-ship Alaska experience, with personalized
                            service, elegant accommodations and an emphasis on
                            the destination rather than onboard amusement.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If your
                                ideal Alaska vacation is watching a glacier
                                from your private balcony, searching for
                                whales during scenic cruising, exploring a
                                small coastal community and returning to an
                                excellent dinner rather than a crowded
                                mega-ship, Seabourn deserves a place on your
                                shortlist.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Alaska Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SeabournAlaskaCruisesGuide;