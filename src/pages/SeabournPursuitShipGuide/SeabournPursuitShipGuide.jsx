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
    Sun,
    Gem,
    Heart,
    Compass,
    Utensils,
    Mountain,
    Snowflake,
    Home,
    Users,
    Award,
    AlertCircle,
    Star,
    MapPin,
    Eye,
    Sailboat,
    Binoculars,
    GraduationCap,
    LifeBuoy,
    ClipboardList,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournPursuit.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournPursuitSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/",
            name: "Seabourn Pursuit: Ship Guide, Suites & Expeditions",
            headline: "Seabourn Pursuit Ship Guide: Suites, Expeditions, Activities & Itineraries",
            description:
                "Explore Seabourn Pursuit, a luxury expedition ship featuring spacious suites, Zodiacs, expedition activities, fine dining and itineraries in Antarctica, the Arctic and beyond.",
            keywords: [
                "Seabourn Pursuit",
                "Seabourn Pursuit ship",
                "Seabourn Pursuit cruise",
                "Seabourn Pursuit review",
                "Seabourn Pursuit suites",
                "Seabourn Pursuit cabins",
                "Seabourn Pursuit expedition ship",
                "Seabourn Pursuit Antarctica",
                "Seabourn Pursuit Arctic",
                "Seabourn Pursuit itineraries",
                "Seabourn Pursuit Zodiacs",
                "Seabourn Pursuit submarine",
                "Seabourn Pursuit dining",
                "Seabourn Pursuit deck plan",
                "Seabourn Pursuit amenities",
                "Seabourn Pursuit destinations",
                "Seabourn Pursuit expedition activities",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#breadcrumb",
            },
            mainEntity: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#ship",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Ships", item: "https://www.tripsandships.com/seabourn-cruises/ships/" },
                { "@type": "ListItem", position: 4, name: "Seabourn Pursuit", item: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/" },
            ],
        },
        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#ship",
            name: "Seabourn Pursuit",
            description:
                "A purpose-built luxury expedition ship designed for remote destinations including Antarctica and the Arctic, combining expedition capabilities with all-suite accommodations, fine dining and personalized Seabourn service.",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/",
            brand: { "@type": "Brand", name: "Seabourn" },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Ship Type", value: "Luxury expedition ship" },
                { "@type": "PropertyValue", name: "Guest Capacity", value: "Approximately 264 guests" },
                { "@type": "PropertyValue", name: "Entered Service", value: "2023" },
                { "@type": "PropertyValue", name: "Expedition Focus", value: "Polar and remote destinations" },
                { "@type": "PropertyValue", name: "Polar Capability", value: "PC6" },
                { "@type": "PropertyValue", name: "Zodiacs", value: "24" },
                { "@type": "PropertyValue", name: "Kayaks", value: "Available on applicable expeditions" },
                { "@type": "PropertyValue", name: "Expedition Team", value: "Dedicated expedition specialists" },
                { "@type": "PropertyValue", name: "Accommodation", value: "All-suite" },
                { "@type": "PropertyValue", name: "Private Verandas", value: "Available in many suite categories" },
                { "@type": "PropertyValue", name: "Dining", value: "Multiple restaurants, casual dining and in-suite dining" },
                { "@type": "PropertyValue", name: "Spa", value: "Yes" },
                { "@type": "PropertyValue", name: "Fitness Facilities", value: "Yes" },
                { "@type": "PropertyValue", name: "Expedition Activities", value: "Zodiac excursions, shore landings, kayaking, wildlife observation and scenic exploration" },
                { "@type": "PropertyValue", name: "Primary Destinations", value: "Antarctica, Arctic regions, Greenland, Iceland, Northern Europe and other remote expedition regions" },
                { "@type": "PropertyValue", name: "Atmosphere", value: "Intimate, sophisticated and adventurous" },
                { "@type": "PropertyValue", name: "Best For", value: "Luxury adventure travelers, couples, wildlife enthusiasts and first-time expedition travelers" },
                { "@type": "PropertyValue", name: "Sister Ship", value: "Seabourn Venture" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#features",
            name: "Seabourn Pursuit Features",
            description: "Key accommodations, expedition capabilities, dining, amenities and onboard features of Seabourn Pursuit.",
            numberOfItems: 8,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Luxury All-Suite Accommodations", description: "Seabourn Pursuit offers an all-suite luxury accommodation experience with multiple suite categories, including veranda and Penthouse options." },
                { "@type": "ListItem", position: 2, name: "Expedition Capabilities", description: "Pursuit is a purpose-built expedition ship designed for remote destinations, polar exploration, wildlife encounters and expedition-focused shore activities." },
                { "@type": "ListItem", position: 3, name: "24 Zodiacs", description: "The ship carries 24 Zodiacs for shore landings, wildlife viewing, scenic cruising, coastal exploration and access to remote expedition locations." },
                { "@type": "ListItem", position: 4, name: "Kayaking and Outdoor Exploration", description: "Kayaking is available on applicable voyages, providing opportunities to experience ice, islands, fjords, remote coastlines and sheltered bays from the water." },
                { "@type": "ListItem", position: 5, name: "Dedicated Expedition Team", description: "A dedicated expedition team provides destination expertise, leads activities and offers educational presentations covering wildlife, geography, geology, history, conservation and other subjects." },
                { "@type": "ListItem", position: 6, name: "Luxury Dining", description: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean and in-suite dining, combining refined cuisine with a relaxed luxury atmosphere." },
                { "@type": "ListItem", position: 7, name: "Wellness and Elegant Public Areas", description: "Guests can enjoy lounges, observation areas, spa facilities, fitness facilities, outdoor spaces and other elegant public areas between expedition activities." },
                { "@type": "ListItem", position: 8, name: "Remote Expedition Destinations", description: "Pursuit offers expedition-style itineraries that can include Antarctica, Arctic regions, Greenland, Iceland, Northern Europe and other remote coastal destinations." },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#faq",
            mainEntity: [
                { "@type": "Question", name: "What is Seabourn Pursuit?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Pursuit is a purpose-built luxury expedition ship designed for remote destinations, including Antarctica and Arctic regions." } },
                { "@type": "Question", name: "How many guests are on Seabourn Pursuit?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Pursuit accommodates approximately 264 guests." } },
                { "@type": "Question", name: "When did Seabourn Pursuit enter service?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Pursuit entered service in 2023." } },
                { "@type": "Question", name: "Is Seabourn Pursuit an expedition ship?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn Pursuit was specifically designed for expedition cruising and remote destinations." } },
                { "@type": "Question", name: "Does Seabourn Pursuit have Zodiacs?", acceptedAnswer: { "@type": "Answer", text: "Yes. Pursuit carries 24 Zodiacs for expedition landings and exploration." } },
                { "@type": "Question", name: "Does Seabourn Pursuit offer kayaking?", acceptedAnswer: { "@type": "Answer", text: "Yes. Kayaking is available on applicable expedition voyages, subject to weather, safety and participation requirements." } },
                { "@type": "Question", name: "Does Seabourn Pursuit go to Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Yes. Antarctica is one of Seabourn Pursuit's primary expedition destinations." } },
                { "@type": "Question", name: "Does Seabourn Pursuit go to the Arctic?", acceptedAnswer: { "@type": "Answer", text: "Yes. Selected voyages explore Arctic regions." } },
                { "@type": "Question", name: "Does Seabourn Pursuit visit Greenland?", acceptedAnswer: { "@type": "Answer", text: "Yes. Selected itineraries include Greenland and its remote coastal landscapes." } },
                { "@type": "Question", name: "Are Seabourn Pursuit suites all-suite accommodations?", acceptedAnswer: { "@type": "Answer", text: "Yes. Pursuit is an all-suite luxury expedition ship." } },
                { "@type": "Question", name: "Do Seabourn Pursuit suites have balconies?", acceptedAnswer: { "@type": "Answer", text: "Many Seabourn Pursuit suites have private verandas. Exact features depend on the suite category." } },
                { "@type": "Question", name: "What suite categories are available on Seabourn Pursuit?", acceptedAnswer: { "@type": "Answer", text: "Pursuit offers multiple suite categories that can include Veranda suites, Penthouse suites, Premium suites and larger top-tier accommodations." } },
                { "@type": "Question", name: "Is dining included on Seabourn Pursuit?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dining is included as part of the Seabourn all-inclusive cruise experience." } },
                { "@type": "Question", name: "What restaurants are on Seabourn Pursuit?", acceptedAnswer: { "@type": "Answer", text: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean and in-suite dining. Specific offerings can vary." } },
                { "@type": "Question", name: "Does Seabourn Pursuit have a spa?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn Pursuit provides spa and wellness facilities for relaxation after expedition activities." } },
                { "@type": "Question", name: "Is Seabourn Pursuit good for first-time expedition cruisers?", acceptedAnswer: { "@type": "Answer", text: "Yes. Pursuit can be an excellent introduction to expedition cruising for travelers who want to combine adventure with luxury accommodations and personalized service." } },
                { "@type": "Question", name: "Is Seabourn Pursuit good for couples?", acceptedAnswer: { "@type": "Answer", text: "Yes. The intimate ship, luxury suites, remote destinations and shared expedition experiences make Seabourn Pursuit well suited to couples." } },
                { "@type": "Question", name: "Is Seabourn Pursuit suitable for families?", acceptedAnswer: { "@type": "Answer", text: "It can work well for adventurous multigenerational families, although it is not a traditional family resort ship. Activity age requirements should be checked before booking." } },
                { "@type": "Question", name: "Are wildlife sightings guaranteed on Seabourn Pursuit?", acceptedAnswer: { "@type": "Answer", text: "No. Wildlife sightings depend on natural conditions and cannot be guaranteed." } },
                { "@type": "Question", name: "What destinations does Seabourn Pursuit visit?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Pursuit is designed for remote expedition destinations and can visit Antarctica, Arctic regions, Greenland, Iceland, Northern Europe and other remote coastal destinations depending on the itinerary." } },
                { "@type": "Question", name: "What is the difference between Seabourn Pursuit and Seabourn Venture?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Pursuit and Seabourn Venture are sister expedition ships with many similar characteristics, including approximately 264 guests, 24 Zodiacs, PC6 polar capability, all-suite accommodations and dedicated expedition teams. Itinerary and departure date are often more important than choosing between the two." } },
                { "@type": "Question", name: "Is Seabourn Pursuit worth the money?", acceptedAnswer: { "@type": "Answer", text: "For travelers who prioritize luxury expedition travel, remote destinations, wildlife and personalized service, Seabourn Pursuit can offer strong value. It is less appropriate for travelers seeking a traditional large-ship vacation." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reuses Sbc-faq-* classes) ───────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is Seabourn Pursuit?", a: "Seabourn Pursuit is a purpose-built luxury expedition ship designed for remote destinations, including Antarctica and Arctic regions." },
        { q: "How many guests are on Seabourn Pursuit?", a: "Seabourn Pursuit accommodates approximately 264 guests." },
        { q: "When did Seabourn Pursuit enter service?", a: "Seabourn Pursuit entered service in 2023." },
        { q: "Is Seabourn Pursuit an expedition ship?", a: "Yes. It was specifically designed for expedition cruising." },
        { q: "Does Seabourn Pursuit have Zodiacs?", a: "Yes. Pursuit carries 24 Zodiacs for expedition landings and exploration." },
        { q: "Does Seabourn Pursuit offer kayaking?", a: "Yes. Kayaking is available on applicable expedition voyages, subject to weather, safety and participation requirements." },
        { q: "Does Seabourn Pursuit go to Antarctica?", a: "Yes. Antarctica is one of the ship's primary expedition destinations." },
        { q: "Does Seabourn Pursuit go to the Arctic?", a: "Yes. Selected voyages explore Arctic regions." },
        { q: "Does Seabourn Pursuit visit Greenland?", a: "Yes. Selected itineraries include Greenland and its remote coastal landscapes." },
        { q: "Are Seabourn Pursuit suites all-suite accommodations?", a: "Yes. Pursuit is an all-suite ship." },
        { q: "Do Seabourn Pursuit suites have balconies?", a: "Many suites have private verandas. Exact features depend on the suite category." },
        { q: "Is dining included on Seabourn Pursuit?", a: "Yes. Dining is included as part of the Seabourn all-inclusive cruise experience." },
        { q: "What restaurants are on Seabourn Pursuit?", a: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean and in-suite dining. Specific offerings can vary." },
        { q: "Is Seabourn Pursuit good for first-time expedition cruisers?", a: "Yes. It can be an excellent introduction to expedition cruising for travelers who want to combine adventure with luxury accommodations and service." },
        { q: "Is Seabourn Pursuit good for couples?", a: "Yes. The intimate ship, luxury suites, remote destinations and shared expedition experiences make it well suited to couples." },
        { q: "Is Seabourn Pursuit suitable for families?", a: "It can work well for adventurous multigenerational families, although it is not a traditional family resort ship. Activity age requirements should be checked before booking." },
        { q: "Are wildlife sightings guaranteed on Seabourn Pursuit?", a: "No. Wildlife sightings depend on natural conditions and cannot be guaranteed." },
        { q: "Is Seabourn Pursuit worth the money?", a: "For travelers who prioritize luxury expedition travel, remote destinations, wildlife and personalized service, Pursuit can offer strong value. It is less appropriate for travelers seeking a traditional large-ship vacation." },
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
    ["Ship type", "Luxury expedition ship"],
    ["Guests", "Approximately 264"],
    ["Entered service", "2023"],
    ["Expedition focus", "Polar and remote destinations"],
    ["Polar capability", "PC6"],
    ["Zodiacs", "24"],
    ["Kayaks", "Available on applicable expeditions"],
    ["Expedition team", "Dedicated expedition specialists"],
    ["Suites", "All-suite accommodations"],
    ["Primary destinations", "Antarctica, Arctic and other remote regions"],
    ["Best for", "Luxury adventure and expedition travelers"],
    ["Atmosphere", "Intimate, sophisticated and adventurous"],
];

const vsTraditionalData = [
    ["Primary focus", "Expedition", "Luxury cruising"],
    ["Remote destinations", "Strong focus", "Less central"],
    ["Zodiacs", "Yes", "No"],
    ["Kayaks", "Yes on applicable voyages", "No core expedition program"],
    ["Expedition team", "Yes", "Standard enrichment"],
    ["Polar cruising", "Major focus", "Limited"],
    ["Shore landings", "Expedition-focused", "Traditional excursions"],
    ["All-suite accommodations", "Yes", "Yes"],
    ["Fine dining", "Yes", "Yes"],
    ["Small-ship atmosphere", "Yes", "Yes"],
];

const vsVentureData = [
    ["Ship type", "Luxury expedition", "Luxury expedition"],
    ["Approx. guests", "264", "264"],
    ["Service entry", "2023", "2022"],
    ["Zodiacs", "24", "24"],
    ["Kayaks", "Yes on applicable voyages", "Yes on applicable voyages"],
    ["Polar capability", "PC6", "PC6"],
    ["All-suite", "Yes", "Yes"],
    ["Expedition team", "Yes", "Yes"],
    ["Submarine capability", "Expedition capability", "Expedition capability"],
    ["Primary appeal", "Remote exploration + luxury", "Remote exploration + luxury"],
];

const dayList = [
    "Breakfast onboard",
    "Expedition briefing",
    "Zodiac landing or cruise",
    "Wildlife observation",
    "Return to the ship",
    "Lunch",
    "Afternoon expedition activity",
    "Educational presentation",
    "Dinner",
    "Evening scenic cruising or relaxation",
];

const zodiacUses = ["Shore landings", "Wildlife viewing", "Scenic cruising", "Coastal exploration", "Photography", "Visiting remote beaches", "Exploring around ice and glaciers"];
const zodiacCloseTo = ["Penguins", "Seals", "Whales", "Seabirds", "Icebergs", "Glaciers", "Remote coastlines"];
const kayakNear = ["Ice", "Islands", "Fjords", "Remote coastlines", "Sheltered bays", "Wildlife areas"];
const teamSpecialties = ["Marine biology", "Wildlife", "Geography", "History", "Geology", "Photography", "Polar environments", "Conservation"];
const lectureTopics = ["Polar exploration", "Wildlife", "Marine ecosystems", "Local history", "Geography", "Geology", "Conservation", "Photography", "Destination culture"];

const suiteFeatures = ["Separate living and sleeping areas in larger categories", "Private verandas", "Ocean views", "Luxury bathrooms", "In-suite bar", "Comfortable seating", "Suite host service", "Luxury amenities"];
const suiteCategories = ["Veranda suites", "Penthouse suites", "Premium suites", "Larger top-tier accommodations"];
const suiteConsiderations = ["Deck", "Location", "Veranda", "Proximity to elevators", "Public spaces", "Potential views", "Sleeping arrangements", "Living space"];

const bestSuiteCards = [
    { icon: Gem, title: "Best for Value", text: "A standard veranda suite may offer an excellent balance of space and price." },
    { icon: Eye, title: "Best for Balcony Viewing", text: "Prioritize a suite with a private veranda and a location that suits your viewing preferences." },
    { icon: Home, title: "Best for Additional Space", text: "Consider a Penthouse-level suite." },
    { icon: Star, title: "Best for Maximum Luxury", text: "Look at the largest premium suite categories." },
];

const diningCards = [
    { icon: Utensils, title: "The Restaurant", text: "A more traditional fine-dining environment with multi-course meals, table service, changing menus, wine, destination-inspired cuisine and desserts. It provides a sophisticated contrast to the adventurous activities taking place outside the ship." },
    { icon: Sun, title: "The Colonnade", text: "A more relaxed dining environment that can be particularly convenient after an active morning expedition, with breakfast, lunch, dinner, casual dishes, regional cuisine and buffet-style selections." },
    { icon: Waves, title: "Earth & Ocean", text: "A casual dining option with globally inspired dishes — a good choice when you want something different from the main restaurant without making dinner a formal occasion." },
    { icon: Home, title: "In-Suite Dining", text: "One of the advantages of an all-suite expedition ship. Especially appealing after Zodiac excursions, hiking, kayaking, wildlife viewing or shore landings — return to your suite, relax and enjoy a meal while watching the scenery outside." },
];

const onboardList = ["Lounges", "Observation areas", "Restaurants", "Bars", "Spa facilities", "Fitness facilities", "Outdoor spaces", "Expedition briefings", "Educational presentations"];
const observationList = ["Wildlife", "Icebergs", "Mountains", "Glaciers", "Remote settlements", "Birds", "Dramatic coastlines"];
const wellnessList = ["Spa treatments", "Fitness facilities", "Relaxation", "Wellness activities"];

const destinations = [
    {
        icon: Snowflake,
        title: "Antarctica",
        subtitle: "Seabourn Pursuit Antarctica Cruises",
        desc: "Antarctica is one of the ship's most important destinations. The combination of expedition equipment and luxury accommodation makes Pursuit particularly attractive for travelers who want an elevated Antarctic experience.",
        listLabel: "A typical Antarctic voyage can include:",
        listItems: ["Zodiac landings", "Penguin encounters", "Whale watching", "Iceberg viewing", "Glacier scenery", "Expedition lectures", "Photography", "Kayaking on applicable voyages"],
        best: "Wildlife and landing opportunities depend on conditions.",
    },
    {
        icon: Compass,
        title: "Arctic",
        subtitle: "Seabourn Pursuit Arctic Cruises",
        desc: "The Arctic provides a completely different expedition environment. The experience can appeal to travelers who have already visited Antarctica or want a different polar adventure.",
        listLabel: "Depending on the itinerary, guests may encounter:",
        listItems: ["Arctic wildlife", "Glaciers", "Fjords", "Sea ice", "Remote islands", "Historic exploration sites", "Indigenous communities", "Dramatic landscapes"],
        best: "",
    },
    {
        icon: Mountain,
        title: "Greenland",
        subtitle: "Seabourn Pursuit Greenland Cruises",
        desc: "Greenland offers a combination of spectacular scenery, remote communities and cultural experiences. An expedition itinerary allows guests to experience Greenland from both the water and the shore.",
        listLabel: "Possible highlights include:",
        listItems: ["Icebergs", "Glaciers", "Fjords", "Remote settlements", "Wildlife", "Local traditions"],
        best: "",
    },
];

const firstTimeExperience = ["Zodiacs", "Wildlife", "Remote landings", "Kayaking", "Expedition lectures"];
const firstTimeReturnTo = ["A private suite", "Fine dining", "Premium beverages", "Elegant lounges", "Personalized service"];

const vsOtherList = ["Small passenger capacity", "All-suite accommodation", "Fine dining", "Personalized service", "Zodiacs", "Kayaking", "Polar exploration", "Remote destinations"];

const packingData = [
    { title: "Expedition Clothing", items: ["Waterproof outer layer", "Warm base layers", "Insulating mid-layers", "Waterproof trousers", "Warm hat", "Gloves", "Neck protection", "Sunglasses"] },
    { title: "Footwear", items: ["Waterproof expedition footwear", "Comfortable onboard shoes"] },
    { title: "Other Essentials", items: ["Binoculars", "Camera", "Extra batteries", "Waterproof phone protection", "Sunscreen", "Small daypack"] },
];

const prosList = ["Purpose-built expedition ship", "Intimate passenger capacity", "All-suite accommodations", "Private verandas on many suites", "Zodiacs", "Kayaking", "Dedicated expedition team", "Polar capability", "Luxury dining", "Premium beverages", "Remote destinations", "Strong Antarctica and Arctic potential", "Sophisticated onboard environment"];
const consList = ["Premium expedition pricing", "Outdoor activities depend on weather", "Wildlife sightings aren't guaranteed", "Some activities have participation requirements", "Remote itineraries require additional travel planning", "Not ideal for travelers looking for a large resort-style ship"];

const whoShouldSailList = ["Luxury adventure travelers", "Antarctica travelers", "Arctic explorers", "Wildlife enthusiasts", "Photographers", "Couples", "Experienced luxury cruisers", "First-time expedition travelers", "Multigenerational adventure travelers", "Travelers who want comfort in remote destinations"];
const whoShouldChooseDifferentList = ["Mediterranean port-intensive cruising", "Large onboard entertainment", "Extensive restaurant variety", "A resort-style pool experience", "Traditional luxury cruising without expedition activities"];

const itinerarySteps = [
    { title: "Start with your destination", text: "Do you want Antarctica, Greenland, the Arctic, Iceland or Northern Europe?" },
    { title: "Consider the season", text: "Polar destinations have specific operating seasons." },
    { title: "Compare the number of expedition days", text: "More expedition time can mean more opportunities for landings and wildlife encounters." },
    { title: "Look at the ports and landing areas", text: "Two itineraries in the same region can provide very different experiences." },
    { title: "Consider your activity preferences", text: "If kayaking or Zodiac exploration is particularly important to you, examine the itinerary and activity offerings carefully." },
];

const bookingTips = [
    { icon: Compass, title: "Choose the Itinerary Before the Suite", text: "The destination is the primary reason to choose an expedition." },
    { icon: ClipboardList, title: "Book Early for Popular Polar Departures", text: "Antarctica and other expedition itineraries can be highly sought after." },
    { icon: Home, title: "Consider a Veranda", text: "A private outdoor space can be valuable for wildlife and scenery." },
    { icon: LifeBuoy, title: "Allow Extra Travel Time", text: "Remote expedition journeys can involve complicated flight connections." },
    { icon: Binoculars, title: "Don't Over-Plan the Expedition", text: "The best expedition experiences often happen unexpectedly." },
    { icon: Users, title: "Work with a Luxury Travel Advisor", text: "A specialist can help compare itineraries, suites, flights, hotels and applicable promotions." },
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournPursuitGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeDestTab, setActiveDestTab] = useState(0);

    const ActiveIcon = destinations[activeDestTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Pursuit: Ship Guide, Suites & Expeditions</title>
                <meta name="title" content="Seabourn Pursuit Ship Guide: Suites, Expeditions & Itineraries" />
                <meta
                    name="description"
                    content="Explore Seabourn Pursuit, a luxury expedition ship featuring spacious suites, Zodiacs, expedition activities, fine dining and itineraries in Antarctica, the Arctic and beyond."
                />
                <script type="application/ld+json">{JSON.stringify(seabournPursuitSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Pursuit <br /> Ship Guide</h1>
                    <p>
                        Seabourn Pursuit is a purpose-built luxury expedition ship created for travelers who want to explore some of the world's most remote destinations without giving up the comfort and sophistication of an ultra-luxury cruise.
                    </p>
                    {readMore && (
                        <>
                            <p>
                                The sister ship to Seabourn Venture, Pursuit combines expedition capabilities with Seabourn's all-suite accommodations, fine dining, personalized service and intimate atmosphere. Instead of choosing between an adventurous expedition and a luxurious vacation, travelers can experience both.
                            </p>
                            <p>
                                Pursuit is particularly well suited to Antarctica, the Arctic and other remote expedition destinations, where Zodiacs, kayaks, expedition specialists and specialized equipment help guests experience the destination beyond the ship.
                            </p>
                            <p>
                                This guide covers the Seabourn Pursuit ship experience, suites, dining, expedition activities, onboard amenities and primary itineraries to help you decide whether Pursuit is the right expedition ship for your trip.
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
                            Start Planning Your Seabourn Pursuit Voyage
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Overview</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Pursuit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceData.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row[0]}</td>
                                        <td data-label="Seabourn Pursuit">{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                   
                </div>
            </section>

            {/* ── WHAT IS SEABOURN PURSUIT ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Spu-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Short Version</span>
                                <h2 className="Sbc-h2">What Is Seabourn Pursuit?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Seabourn Pursuit is a purpose-built luxury expedition ship designed to take guests to destinations that require specialized equipment and expedition capabilities.
                            </p>
                            <p className="Sbc-p">
                                The ship entered service in 2023 and was designed as a sister ship to Seabourn Venture. Rather than focusing primarily on established ports and traditional sightseeing, Pursuit is designed around exploration, wildlife, nature and remote destinations.
                            </p>
                            <p className="Sbc-p Sbc-what-conclusion">
                                Guests can spend part of the day exploring by Zodiac or kayak and return to the ship for a luxury suite, fine dining and Seabourn's personalized service.
                            </p>
                        </div>
                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Pursuit Ship Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY IS PURSUIT DIFFERENT ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-why-different">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Appeal</span>
                        <h2 className="Sbc-h2">Why Is Seabourn Pursuit Different?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The biggest difference is its combination of expedition capability and ultra-luxury cruising.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Compass size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Expedition Activities Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Expedition Access</h3>
                            <p className="Sbc-compare-sub">Pursuit provides access to experiences such as:</p>
                            <ul className="Sbc-compare-list">
                                {["Zodiac excursions", "Expedition landings", "Kayaking", "Wildlife observation", "Scenic exploration", "Expert-led expedition activities", "Educational presentations", "Remote destination exploration"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Gem size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Luxury Amenities Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Ultra-Luxury Comfort</h3>
                            <p className="Sbc-compare-sub">At the same time, guests have access to:</p>
                            <ul className="Sbc-compare-list">
                                {["All-suite accommodations", "Fine dining", "Premium beverages", "Multiple lounges", "Wellness facilities", "Personalized service", "Elegant public spaces"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>This makes Pursuit particularly attractive to travelers who want adventure without giving up comfort.</p>
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Ready for Adventure?</span>
                    <h3 className="Sbc-cta-title">See If Seabourn Pursuit Is Right for You</h3>
                    <p className="Sbc-cta-text">
                        Let's compare Pursuit against other Seabourn ships and expedition itineraries to find the right fit for your travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── VS TRADITIONAL SEABOURN SHIPS ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Spu-vs-traditional">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Two Styles of Luxury</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit vs. Traditional Seabourn Ships</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Pursuit belongs to the Seabourn fleet, but its experience is distinctly different from the brand's traditional ocean ships.
                        </p>
                    </div>
                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Pursuit</th>
                                    <th>Traditional Seabourn Ocean Ship</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vsTraditionalData.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row[0]}</td>
                                        <td data-label="Seabourn Pursuit">{row[1]}</td>
                                        <td data-label="Traditional Seabourn Ocean Ship">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="Sbc-compare-key" style={{ marginTop: "32px" }}>
                        <p>If you are interested primarily in Mediterranean or Caribbean cruising, a traditional Seabourn ship may make more sense.</p>
                        <p>If you want Antarctica, the Arctic and remote expedition experiences, Pursuit deserves serious consideration.</p>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION EXPERIENCE ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-expedition-experience">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">A Day in the Field</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit Expedition Experience</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The expedition experience is the heart of the ship. Instead of simply looking at dramatic scenery from the deck, guests can often get much closer to the environment through expedition activities. A typical expedition day can include:
                        </p>
                    </div>
                    <ul className="Spu-day-list">
                        {dayList.map((item, i) => (
                            <li className="Spu-day-item" key={i}>
                                <span className="Spu-day-marker">{i + 1}</span>
                                <span className="Spu-day-text">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="Ssf-table-caption" style={{ textAlign: "center" }}>The exact schedule depends on the destination and conditions.</p>
                </div>
            </section>

            {/* ── ZODIACS ──────────────────────────────────────────────── */}
            <section className="Sbc-section Spu-zodiac-section Sbc-bg-soft" id="Spu-zodiacs">
                <div className="Sbc-container">
                    <div className="Spu-zodiac-grid">
                        {/* Left Column: Intro and Uses */}
                        <div className="Spu-zodiac-left">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Expedition Access</span>
                                <h2 className="Sbc-h2">Seabourn Pursuit Zodiacs</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Spu-zodiac-intro-text">
                                Zodiacs are one of the most important pieces of expedition equipment aboard Pursuit. The ship carries 24 Zodiacs, allowing expedition teams to transport guests between the ship and remote landing locations.
                            </p>
                            <div className="Spu-zodiac-uses-box">
                                <h4 className="Spu-zodiac-uses-title">Depending on the itinerary, Zodiacs can be used for:</h4>
                                <ul className="Spu-zodiac-uses-list">
                                    {zodiacUses.map((item, i) => (
                                        <li key={i} className="Spu-zodiac-use-item">
                                            <span className="Spu-zodiac-use-bullet"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Experience Card */}
                        <div className="Spu-zodiac-right">
                            <div className="Spu-zodiac-experience-card">
                                <div className="Spu-zodiac-card-badge">The Experience</div>
                                <h3 className="Spu-zodiac-card-title">What Is a Zodiac Excursion Like?</h3>
                                <p className="Spu-zodiac-card-p">
                                    A Zodiac excursion is very different from a traditional bus or walking tour. You board the inflatable boat from the ship and travel across the water toward the destination.
                                </p>
                                <div className="Spu-zodiac-closer-box">
                                    <span className="Spu-zodiac-closer-label">This can put you closer to:</span>
                                    <div className="Spu-zodiac-closer-tags">
                                        {zodiacCloseTo.map((item, i) => (
                                            <span key={i} className="Spu-zodiac-closer-tag">{item}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="Spu-zodiac-card-footer">
                                    The experience can be particularly memorable for photographers and wildlife enthusiasts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── KAYAKING ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-kayaking">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Sailboat size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Pursuit Kayaking Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">On the Water</span>
                                <h2 className="Sbc-h2">Seabourn Pursuit Kayaking</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Kayaking offers another way to experience the destination. Instead of traveling in a Zodiac with other guests, kayaking can provide a quieter and more personal connection with the surrounding environment.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Depending on the voyage, guests may have opportunities to kayak near:</h4>
                                <ul className="Sbc-wellness-list">
                                    {kayakNear.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">Kayaking is subject to weather, sea conditions, safety requirements and applicable participation criteria.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION TEAM & LECTURES ───────────────────────────── */}
            <section className="Sbc-section Spu-team-section Sbc-bg-soft" id="Spu-team">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Destination Expertise</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit Expedition Team & Enrichment</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Spu-team-grid">
                        {/* Left Card: The Expedition Team (Light Theme Luxury Card) */}
                        <div className="Spu-team-card Spu-team-card-light">
                            <div className="Spu-team-card-header">
                                <div className="Spu-team-icon-wrap">
                                    <GraduationCap size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="Spu-team-card-title">The Expedition Team</h3>
                            </div>
                            <p className="Spu-team-card-p">
                                A dedicated expedition team helps interpret the destinations visited by Pursuit.
                            </p>

                            <div className="Spu-team-specialties-box">
                                <span className="Spu-team-box-label">Specialist Backgrounds Include:</span>
                                <ul className="Spu-team-list">
                                    {teamSpecialties.map((item, i) => (
                                        <li key={i} className="Spu-team-list-item">
                                            <span className="Spu-team-list-bullet"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Spu-team-card-footer">
                                Their role isn't limited to leading shore activities. They can also provide presentations and help guests understand the landscapes and wildlife encountered throughout the voyage.
                            </p>
                        </div>

                        {/* Right Card: Lectures & Enrichment (Dark Theme Luxury Card) */}
                        <div className="Spu-team-card Spu-team-card-dark">
                            <div className="Spu-team-card-header">
                                <div className="Spu-team-icon-wrap">
                                    <Binoculars size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="Spu-team-card-title">Lectures & Enrichment</h3>
                            </div>
                            <p className="Spu-team-card-p">
                                Expedition cruising isn't only about going ashore. The educational program can be an important part of the experience.
                            </p>

                            <div className="Spu-team-specialties-box">
                                <span className="Spu-team-box-label">Presentations May Cover:</span>
                                <ul className="Spu-team-list">
                                    {lectureTopics.map((item, i) => (
                                        <li key={i} className="Spu-team-list-item">
                                            <span className="Spu-team-list-bullet"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Spu-team-card-footer">
                                This makes Pursuit particularly appealing to travelers who want to return home with a deeper understanding of the places they visited.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore the Expedition Program</span>
                    <h3 className="Sbc-cta-title">Design Your Zodiac & Kayak Adventure</h3>
                    <p className="Sbc-cta-text">
                        From wildlife-rich Zodiac cruises to quiet kayak excursions, let's build an itinerary that matches how you want to explore.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan My Expedition
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="Sbc-section Spu-suites-section Sbc-bg-white" id="Spu-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit Suites</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Spu-suites-cards-grid">
                        {/* Card 1: Suites Overview */}
                        <div className="Spu-suites-card">
                            <div className="Spu-suites-card-image">
                                <Award size={32} />
                                <span>Luxury Accommodations</span>
                            </div>
                            <div className="Spu-suites-card-body">
                                <p className="Spu-suites-card-intro">
                                    Pursuit is an all-suite luxury expedition ship. That means guests don't have to sacrifice accommodation quality simply because they're traveling to remote destinations.
                                </p>
                                <div className="Spu-suites-list-box">
                                    <h4 className="Spu-suites-list-title">Suites can provide:</h4>
                                    <ul className="Spu-suites-list-ul">
                                        {suiteFeatures.map((item, i) => (
                                            <li key={i} className="Spu-suites-list-li">
                                                <Check size={16} strokeWidth={2.5} className="Spu-suites-list-check" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="Spu-suites-card-footer-note">
                                    The exact configuration depends on the suite category.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Balconies & Verandas */}
                        <div className="Spu-suites-card">
                            <div className="Spu-suites-card-image">
                                <Binoculars size={32} />
                                <span>Veranda & Balcony Views</span>
                            </div>
                            <div className="Spu-suites-card-body">
                                <h3 className="Spu-suites-card-subtitle">Do Seabourn Pursuit Suites Have Balconies?</h3>
                                <p className="Spu-suites-card-intro">
                                    Many Pursuit suites include private verandas. A veranda can be particularly valuable on an expedition voyage.
                                </p>
                                <div className="Spu-suites-list-box">
                                    <h4 className="Spu-suites-list-title">You may want to step outside to watch:</h4>
                                    <ul className="Spu-suites-list-ul">
                                        {["A whale", "A pod of dolphins", "An iceberg", "A glacier", "Seabirds", "Mountains", "A dramatic coastline"].map((item, i) => (
                                            <li key={i} className="Spu-suites-list-li">
                                                <Check size={16} strokeWidth={2.5} className="Spu-suites-list-check" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="Spu-suites-card-footer-note">
                                    Instead of having to go to a public observation area, you can enjoy the scenery directly from your suite.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITE CATEGORIES ──────────────────────────────────────── */}
            <section className="Sbc-section Spu-categories-section Sbc-bg-soft" id="Spu-suite-categories">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Luxury Options</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit Suite Categories</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Spu-categories-grid">
                        {/* Card 1: Options */}
                        <div className="Spu-categories-card">
                            <div className="Spu-categories-card-header">
                                <h3 className="Spu-categories-card-subtitle">Suite Accommodations</h3>
                                <p className="Spu-categories-card-intro">
                                    Pursuit offers multiple suite categories designed for different levels of space and luxury.
                                </p>
                            </div>
                            <div className="Spu-categories-card-body">
                                <h4 className="Spu-categories-list-title">Options can include:</h4>
                                <ul className="Spu-categories-list-ul">
                                    {suiteCategories.map((item, i) => (
                                        <li key={i} className="Spu-categories-list-li">
                                            <Compass size={16} strokeWidth={2.5} className="Spu-categories-list-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Card 2: Considerations */}
                        <div className="Spu-categories-card">
                            <div className="Spu-categories-card-header">
                                <h3 className="Spu-categories-card-subtitle">Comparing Categories</h3>
                                <p className="Spu-categories-card-intro">
                                    When comparing suites, consider more than square footage.
                                </p>
                            </div>
                            <div className="Spu-categories-card-body">
                                <h4 className="Spu-categories-list-title">Look at:</h4>
                                <ul className="Spu-categories-list-ul Spu-categories-cols-2">
                                    {suiteConsiderations.map((item, i) => (
                                        <li key={i} className="Spu-categories-list-li">
                                            <Compass size={16} strokeWidth={2.5} className="Spu-categories-list-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST SUITE ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-best-suite">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing a Category</span>
                        <h2 className="Sbc-h2">What Is the Best Suite on Seabourn Pursuit?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">There isn't one best suite for every traveler. Your travel style and budget should determine the choice.</p>
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
                </div>
            </section>

            {/* ── DINING ───────────────────────────────────────────────── */}
            <section className="Sbc-section Spu-dining-section Sbc-bg-soft" id="Spu-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Luxury dining remains central to the Pursuit experience. After a morning exploring a remote coastline or wildlife area, returning to a refined dining environment is part of what differentiates Seabourn from more rugged expedition operators.
                        </p>
                    </div>

                    <div className="Spu-dining-intro-block">
                        <div className="Spu-dining-intro-content">
                            <span className="Spu-dining-intro-label">Dining options can include:</span>
                            <div className="Spu-dining-intro-tags">
                                {["The Restaurant", "The Colonnade", "Earth & Ocean", "In-suite dining", "Casual dining"].map((item, i) => (
                                    <span key={i} className="Spu-dining-intro-tag">{item}</span>
                                ))}
                            </div>
                            <p className="Spu-dining-intro-note">Exact venues and offerings can vary.</p>
                        </div>
                    </div>

                    <div className="Spu-dining-cards-grid">
                        {/* Card 1: The Restaurant */}
                        <div className="Spu-dining-card">
                            <div className="Spu-dining-card-image">
                                <Utensils size={32} />
                                <span>The Restaurant</span>
                            </div>
                            <div className="Spu-dining-card-body">
                                <h3 className="Spu-dining-card-title">The Restaurant</h3>
                                <p className="Spu-dining-card-p">
                                    The Restaurant offers a more traditional fine-dining environment.
                                </p>
                                <div className="Spu-dining-list-box">
                                    <span className="Spu-dining-list-label">Guests can enjoy:</span>
                                    <ul className="Spu-dining-list-ul">
                                        {["Multi-course meals", "Table service", "Changing menus", "Wine", "Destination-inspired cuisine", "Desserts"].map((item, i) => (
                                            <li key={i} className="Spu-dining-list-li">
                                                <Check size={16} strokeWidth={2.5} className="Spu-dining-list-check" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="Spu-dining-card-footer">
                                    It provides a sophisticated contrast to the adventurous activities taking place outside the ship.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: The Colonnade */}
                        <div className="Spu-dining-card">
                            <div className="Spu-dining-card-image">
                                <Utensils size={32} />
                                <span>The Colonnade</span>
                            </div>
                            <div className="Spu-dining-card-body">
                                <h3 className="Spu-dining-card-title">The Colonnade</h3>
                                <p className="Spu-dining-card-p">
                                    The Colonnade provides a more relaxed dining environment. It can be particularly convenient after an active morning expedition.
                                </p>
                                <div className="Spu-dining-list-box">
                                    <span className="Spu-dining-list-label">Depending on the meal period, guests may find:</span>
                                    <ul className="Spu-dining-list-ul">
                                        {["Breakfast", "Lunch", "Dinner", "Casual dishes", "Regional cuisine", "Buffet-style selections"].map((item, i) => (
                                            <li key={i} className="Spu-dining-list-li">
                                                <Check size={16} strokeWidth={2.5} className="Spu-dining-list-check" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: In-Suite Dining */}
                        <div className="Spu-dining-card">
                            <div className="Spu-dining-card-image">
                                <Utensils size={32} />
                                <span>In-Suite Dining</span>
                            </div>
                            <div className="Spu-dining-card-body">
                                <h3 className="Spu-dining-card-title">In-Suite Dining</h3>
                                <p className="Spu-dining-card-p">
                                    One of the advantages of an all-suite expedition ship is the ability to enjoy meals in your own space.
                                </p>
                                <div className="Spu-dining-list-box">
                                    <span className="Spu-dining-list-label">In-suite dining can be especially appealing after a long day of:</span>
                                    <ul className="Spu-dining-list-ul">
                                        {["Zodiac excursions", "Hiking", "Kayaking", "Wildlife viewing", "Shore landings"].map((item, i) => (
                                            <li key={i} className="Spu-dining-list-li">
                                                <Check size={16} strokeWidth={2.5} className="Spu-dining-list-check" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="Spu-dining-card-footer">
                                    You can return to your suite, relax and enjoy a meal while watching the scenery outside.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 3 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Suites & Dining</span>
                    <h3 className="Sbc-cta-title">Find Your Suite Aboard Seabourn Pursuit</h3>
                    <p className="Sbc-cta-text">
                        Let us help you compare suite categories, verandas and dining venues so your expedition feels as luxurious as it is adventurous.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Suite Availability
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── ONBOARD EXPERIENCE & OBSERVATION ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Spu-onboard">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Between Excursions</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit Onboard Experience</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Although Pursuit is designed for adventure, the ship itself remains sophisticated and comfortable. The result is an environment that feels more like a luxury yacht than a traditional expedition vessel.
                        </p>
                    </div>

                    <div className="Sbc-atmos-words">
                        {onboardList.map((w, i) => (
                            <span key={i}>{w}</span>
                        ))}
                    </div>

                    <div className="Sbc-what-grid" style={{ marginTop: "48px" }}>
                        <div className="Sbc-what-content">
                            <h3 className="Sbc-h3">Observation Spaces</h3>
                            <p className="Sbc-p" style={{ marginBottom: "18px" }}>
                                Observation areas are particularly important on an expedition ship, since the destination can change continuously throughout the day. Guests may want to watch for:
                            </p>
                            <div className="Sbc-brand-highlights" style={{ margin: 0, backgroundColor: 'var(--bg-white)' }}>
                                <ul className="Sbc-highlights-list">
                                    {observationList.map((item, i) => (
                                        <li key={i}>
                                            <Eye size={16} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                For many travelers, simply watching the landscape from the ship is an important part of the experience.
                            </p>
                        </div>
                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Eye size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Pursuit Observation Deck Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SPA & WELLNESS ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-wellness">
                <div className="Sbc-container">
                    <div className="Sbc-wellness-layout">
                        <div className="Sbc-wellness-content">
                            <div className="Sbc-section-header" style={{ textAlign: "left", marginBottom: "24px" }}>
                                <span className="Sbc-eyebrow">Health & Wellbeing</span>
                                <h2 className="Sbc-h2" style={{ textAlign: "left", margin: "0 0 16px" }}>Seabourn Pursuit Spa and Wellness</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 20px" }}></div>
                            </div>
                            <p className="Sbc-wellness-intro">
                                After an active expedition day, wellness facilities provide an opportunity to relax.
                            </p>
                            <div className="Sbc-wellness-features-card">
                                <h4 className="Sbc-wellness-features-title">Depending on the available services, guests can enjoy:</h4>
                                <ul className="Sbc-wellness-list">
                                    {wellnessList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-wellness-takeaway">
                                <p className="Sbc-p">This is another area where Pursuit differs from expedition ships that focus almost exclusively on exploration.</p>
                            </div>
                        </div>
                        <div className="Sbc-wellness-image-container">
                            <div className="Sbc-wellness-image-placeholder">
                                <div className="Sbc-wellness-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-wellness-placeholder-icon" />
                                </div>
                                <span className="Sbc-wellness-placeholder-text">Seabourn Pursuit Wellness Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Spu-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where Pursuit Sails</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit Destinations</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Pursuit is designed for remote destinations and expedition-style itineraries, including Antarctica, Arctic regions, Greenland, Iceland, Northern Europe and other remote coastal destinations. Itineraries vary by season and year.
                        </p>
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
                                    <ActiveIcon size={36} className="Sbc-dest-placeholder-icon" />
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



            {/* ── WHO IS PURSUIT FOR ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-couples">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Couples Travel</span>
                                <h2 className="Sbc-h2">Seabourn Pursuit for Couples</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">Pursuit can be an excellent choice for adventurous couples. It combines:</p>
                            <div className="Sbc-qa-card">
                                <ul className="Sbc-wellness-list">
                                    {["Remote destinations", "Luxury suites", "Fine dining", "Private verandas", "Wildlife experiences", "Expedition activities", "Intimate shipboard atmosphere"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p">For an anniversary or milestone celebration, a polar expedition can be an especially memorable alternative to a conventional luxury cruise.</p>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Pursuit for Couples Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── CTA 4 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore and Discover</span>
                    <h3 className="Sbc-cta-title">Choose Your Polar Adventure</h3>
                    <p className="Sbc-cta-text">
                        Whether it's Antarctica, the Arctic or Greenland, let's find the Seabourn Pursuit itinerary that fits your travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Itineraries
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="Sbc-section Sbc-bg-soft" id="Spu-solo">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Pursuit for Solo Travelers Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Solo Travel</span>
                                <h2 className="Sbc-h2">Seabourn Pursuit for Solo Travelers</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Solo travelers can benefit from the social nature of expedition travel. Shared Zodiac excursions, lectures and expedition activities naturally create opportunities to meet fellow travelers.
                            </p>
                            <p className="Sbc-p">
                                The relatively small ship also makes it easier to become familiar with other guests and members of the expedition team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Sbc-section Sbc-bg-white" id="Spu-families">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Family Travel</span>
                                <h2 className="Sbc-h2">Seabourn Pursuit for Families</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Pursuit is not a traditional family resort ship. There are no large water parks or extensive children's entertainment areas.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">However, adventurous multigenerational families may find it appealing if everyone enjoys:</h4>
                                <ul className="Sbc-wellness-list">
                                    {["Wildlife", "Nature", "Photography", "Education", "Outdoor activities", "Remote destinations"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-qa-warning-box">
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                    <span>Check age and participation requirements for specific activities before booking.</span>
                                </div>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Pursuit for Families Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FIRST-TIME EXPEDITION TRAVELERS ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Spu-first-time">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making the Transition</span>
                        <h2 className="Sbc-h2">Is Seabourn Pursuit Good for First-Time Expedition Travelers?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Yes. Pursuit can be an attractive introduction to expedition cruising for travelers who might otherwise be hesitant about giving up luxury.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Snowflake size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Expedition Activities Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">You Can Experience</h3>
                            <ul className="Sbc-compare-list">
                                {firstTimeExperience.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Gem size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Luxury Return Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">While Still Returning To</h3>
                            <ul className="Sbc-compare-list">
                                {firstTimeReturnTo.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>This makes the transition from conventional luxury cruising to expedition travel considerably easier.</p>
                    </div>
                </div>
            </section>

            {/* ── VS SEABOURN VENTURE ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-vs-venture">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Sister Ships</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit vs. Seabourn Venture</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Because Pursuit and Venture are sister expedition ships, they share many characteristics.</p>
                    </div>
                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Pursuit</th>
                                    <th>Seabourn Venture</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vsVentureData.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row[0]}</td>
                                        <td data-label="Seabourn Pursuit">{row[1]}</td>
                                        <td data-label="Seabourn Venture">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="Sbc-compare-key" style={{ marginTop: "32px" }}>
                        <p>For most travelers, itinerary and departure date will be more important than choosing between the two sister ships.</p>
                    </div>
                </div>
            </section>

            {/* ── CTA 4B (Venture Comparison) ──────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Compare With Confidence</span>
                    <h3 className="Sbc-cta-title">Pursuit or Venture? Let's Decide Together</h3>
                    <p className="Sbc-cta-text">
                        We'll compare sailing dates, suite categories and current promotions across Seabourn's sister expedition ships to find your best fit.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Suites & Save
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── VS OTHER EXPEDITION SHIPS ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Spu-vs-others">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn Pursuit vs. Other Luxury Expedition Ships</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Pursuit's biggest differentiator is its combination of expedition capability and Seabourn's luxury service model. It is a strong choice if you want:</p>
                    </div>

                    <div className="Sbc-brand-highlights" style={{ maxWidth: "820px", margin: "0 auto", backgroundColor: 'var(--bg-white)' }}>
                        <ul className="Sbc-highlights-list">
                            {vsOtherList.map((item, idx) => (
                                <li key={idx}>
                                    <Check size={22} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-compare-key" style={{ maxWidth: "820px", margin: "32px auto 0" }}>
                        <p>Travelers who want a more rugged or highly specialized expedition experience may prefer a different operator, while those who want more traditional luxury cruising may prefer a Seabourn ocean ship.</p>
                    </div>
                </div>
            </section>

            {/* ── PACKING ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Spu-packing">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Ready</span>
                        <h2 className="Sbc-h2">What Should You Pack <br /> for Seabourn Pursuit?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Your packing list should reflect the destination. For polar expeditions, consider:</p>
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
                        <p><strong>The specific packing requirements provided for your voyage should take priority.</strong></p>
                        <p>
                            <strong>Dress code:</strong> During expedition activities, practical clothing is far more important than formal clothing. Onboard, Seabourn maintains a relaxed luxury atmosphere — smart-casual clothing is generally appropriate for restaurants and public areas. The goal is to look polished without needing an extensive formal wardrobe.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Pros and Cons of Seabourn Pursuit</h2>
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

            {/* ── IS PURSUIT WORTH IT ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Spu-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Value Proposition</span>
                                <h2 className="Sbc-h2">Is Seabourn Pursuit Worth It?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-worth-intro">For the right traveler, yes.</p>
                            <p className="Sbc-worth-text">
                                Pursuit makes the most sense when the destination and expedition experience are the priority. You're paying not simply for transportation to Antarctica or the Arctic.
                            </p>
                            <div className="Spu-worth-grid-box">
                                <h4 className="Spu-worth-grid-title">You're paying for the combination of:</h4>
                                <div className="Spu-worth-badge-grid">
                                    {[
                                        "Remote destinations",
                                        "Expedition equipment",
                                        "Luxury suites",
                                        "Refined dining",
                                        "Personalized service",
                                        "Small-ship atmosphere"
                                    ].map((item, i) => (
                                        <div key={i} className="Spu-worth-badge-card">
                                            <Star size={16} strokeWidth={2.5} className="Spu-worth-badge-icon" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                           
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Pursuit Value Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 4C (Value Proposition) ──────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Is Seabourn Pursuit Your Next Adventure?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare itineraries, fares and exclusive amenities to find the best value for your Seabourn Pursuit expedition.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan Your Expedition
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHO SHOULD SAIL / CHOOSE DIFFERENT ───────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-who-should-sail">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Should Sail Seabourn Pursuit?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Spu-fit-grid">
                        {[
                            { text: "Luxury adventure travelers", icon: Compass },
                            { text: "Antarctica travelers", icon: Snowflake },
                            { text: "Arctic explorers", icon: Mountain },
                            { text: "Wildlife enthusiasts", icon: Binoculars },
                            { text: "Photographers", icon: Eye },
                            { text: "Couples", icon: Heart },
                            { text: "Experienced luxury cruisers", icon: Ship },
                            { text: "First-time expedition travelers", icon: Anchor },
                            { text: "Multigenerational adventure travelers", icon: Users },
                            { text: "Travelers who want comfort in remote destinations", icon: Gem }
                        ].map((item, i) => {
                            const IconComponent = item.icon;
                            return (
                                <div className="Spu-fit-card" key={i}>
                                    <div className="Spu-fit-card-icon-wrapper">
                                        <IconComponent size={24} className="Spu-fit-card-icon" />
                                    </div>
                                    <h3 className="Spu-fit-card-title">{item.text}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="Sbc-section Sbc-bg-soft" id="Spu-who-should-choose-different">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <h2 className="Sbc-h2">Who Should Choose a Different Seabourn Ship?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            Pursuit may not be the best fit if you primarily want the experiences below. For those travelers, Seabourn's ocean-going ships may be a better choice.
                        </p>
                    </div>
                    <div className="Sbc-notfit-grid">
                        {whoShouldChooseDifferentList.map((item, i) => (
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

            {/* ── HOW TO CHOOSE ITINERARY ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Spu-choose-itinerary">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Planning Your Voyage</span>
                        <h2 className="Sbc-h2">How to Choose the Right Seabourn Pursuit Itinerary</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Choosing the itinerary is arguably more important than choosing the ship.</p>
                    </div>
                    <div className="Spu-steps-list">
                        {itinerarySteps.map((step, i) => (
                            <div className="Spu-step-card" key={i}>
                                <div className="Spu-step-number">{i + 1}</div>
                                <div>
                                    <h4 className="Spu-step-title">{step.title}</h4>
                                    <p className="Spu-step-text">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BOOKING TIPS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Spu-booking-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">Tips for Booking Seabourn Pursuit</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Sbc-card-grid">
                        {bookingTips.map((tip, i) => {
                            const Icon = tip.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{tip.title}</h3>
                                    <p className="Sbc-card-text">{tip.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────── */}
            <section className="Sbc-expert-section" id="Spu-expert-insight">
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
            <section className="Sbc-section Sbc-bg-white" id="Spu-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Pursuit</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">Everything travelers need to know before booking a Seabourn Pursuit expedition.</p>
                    </div>
                    <FAQ />
                </div>
            </section>



            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Spu-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Pursuit a Good Expedition Ship?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Pursuit offers a compelling combination of genuine expedition capability and ultra-luxury cruising. Its purpose-built design, Zodiacs, expedition team, kayaking opportunities and polar capability make it capable of exploring remote environments.
                        </p>
                        <p className="Sbc-p">
                            But the ship's real appeal is what happens after the expedition activity. You return from a Zodiac landing to a private luxury suite. You finish a day of wildlife viewing with fine dining. You can spend the evening listening to an expedition presentation or relaxing in an elegant lounge. That balance is what makes Seabourn Pursuit different — it brings the comforts of luxury cruising to destinations where adventure is the main attraction.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Choose Seabourn Pursuit if you want genuine expedition capability, all-suite luxury, fine dining and access to Antarctica, the Arctic and other remote destinations — without giving up the comforts of an ultra-luxury cruise.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Pursuit Voyage
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournPursuitGuide;