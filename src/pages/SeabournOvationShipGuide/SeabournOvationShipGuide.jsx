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
    Home,
    Users,
    Award,
    AlertCircle,
    Star,
    MapPin,
    Sparkles,
    Music,
    BookOpen,
    Dumbbell,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournOvation.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournOvationSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/",
            name: "Seabourn Ovation: Ship Guide, Suites & Dining",
            headline: "Seabourn Ovation Ship Guide: Suites, Restaurants, Public Areas & Destinations",
            description:
                "Explore Seabourn Ovation, including suites, restaurants, public areas, onboard amenities, destinations and who this luxury ship is best suited for.",
            keywords: [
                "Seabourn Ovation",
                "Seabourn Ovation ship",
                "Seabourn Ovation cruise",
                "Seabourn Ovation review",
                "Seabourn Ovation suites",
                "Seabourn Ovation cabins",
                "Seabourn Ovation restaurants",
                "Seabourn Ovation dining",
                "Seabourn Ovation amenities",
                "Seabourn Ovation deck plan",
                "Seabourn Ovation destinations",
                "Seabourn Ovation itinerary",
                "Seabourn Ovation pool",
                "Seabourn Ovation spa",
                "Seabourn Ovation best suites",
                "Seabourn Ovation worth it",
                "Seabourn Ovation ship guide",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: { "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#breadcrumb" },
            mainEntity: { "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#ship" },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Ships", item: "https://www.tripsandships.com/seabourn-cruises/ships/" },
                { "@type": "ListItem", position: 4, name: "Seabourn Ovation", item: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/" },
            ],
        },
        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#ship",
            name: "Seabourn Ovation",
            description:
                "An all-suite luxury ocean cruise ship designed for travelers seeking personalized service, fine dining, elegant public spaces and destination-focused cruising in an intimate atmosphere.",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/",
            brand: { "@type": "Brand", name: "Seabourn" },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Ship Type", value: "Luxury ocean cruise ship" },
                { "@type": "PropertyValue", name: "Guest Capacity", value: "Approximately 600 guests" },
                { "@type": "PropertyValue", name: "Ship Style", value: "All-suite luxury" },
                { "@type": "PropertyValue", name: "Atmosphere", value: "Intimate, elegant and relaxed" },
                { "@type": "PropertyValue", name: "Accommodation", value: "All-suite" },
                { "@type": "PropertyValue", name: "Private Verandas", value: "Available in many suite categories" },
                { "@type": "PropertyValue", name: "Pool", value: "Yes" },
                { "@type": "PropertyValue", name: "Spa", value: "Yes" },
                { "@type": "PropertyValue", name: "Fitness Center", value: "Yes" },
                { "@type": "PropertyValue", name: "Bars & Lounges", value: "Multiple" },
                { "@type": "PropertyValue", name: "Entertainment", value: "Shows, live music and enrichment" },
                { "@type": "PropertyValue", name: "Dining", value: "Multiple restaurants and dining venues" },
                { "@type": "PropertyValue", name: "Sister Ship", value: "Seabourn Encore" },
                { "@type": "PropertyValue", name: "Primary Appeal", value: "Luxury ocean cruising" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#features",
            name: "Seabourn Ovation Features",
            description: "Key accommodations, dining, onboard amenities and destination features of Seabourn Ovation.",
            numberOfItems: 8,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "All-Suite Accommodations", description: "Seabourn Ovation provides an all-suite accommodation experience with multiple suite categories and spacious living areas." },
                { "@type": "ListItem", position: 2, name: "Private Verandas", description: "Many Seabourn Ovation suites feature private verandas for enjoying ocean views, sunsets, port arrivals and coastal scenery." },
                { "@type": "ListItem", position: 3, name: "Luxury Dining", description: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining." },
                { "@type": "ListItem", position: 4, name: "Seabourn Square", description: "Seabourn Square provides a central social and service area with a sophisticated lounge or living-room atmosphere." },
                { "@type": "ListItem", position: 5, name: "Pool", description: "The ship features a swimming pool area designed primarily for quiet relaxation rather than a large resort-style pool experience." },
                { "@type": "ListItem", position: 6, name: "Spa & Fitness", description: "Seabourn Ovation provides spa, wellness and fitness facilities for relaxation and maintaining an exercise routine during the cruise." },
                { "@type": "ListItem", position: 7, name: "Entertainment & Enrichment", description: "Onboard programming can include live music, performances, guest speakers, cultural presentations and destination-focused enrichment." },
                { "@type": "ListItem", position: 8, name: "Destination-Focused Cruising", description: "Seabourn Ovation can sail to destinations including the Mediterranean, Northern Europe, Scandinavia, British Isles, Caribbean and other seasonal regions." },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#faq",
            mainEntity: [
                { "@type": "Question", name: "What is Seabourn Ovation?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Ovation is an all-suite luxury ocean cruise ship designed for travelers seeking personalized service, fine dining and an intimate onboard atmosphere." } },
                { "@type": "Question", name: "How many guests does Seabourn Ovation accommodate?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Ovation accommodates approximately 600 guests." } },
                { "@type": "Question", name: "Is Seabourn Ovation an all-suite ship?", acceptedAnswer: { "@type": "Answer", text: "Yes. All accommodations on Seabourn Ovation are suites." } },
                { "@type": "Question", name: "Do Seabourn Ovation suites have balconies?", acceptedAnswer: { "@type": "Answer", text: "Many Seabourn Ovation suite categories include private verandas. The exact configuration depends on the suite." } },
                { "@type": "Question", name: "What restaurants are on Seabourn Ovation?", acceptedAnswer: { "@type": "Answer", text: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining." } },
                { "@type": "Question", name: "Is dining included on Seabourn Ovation?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dining is included as part of Seabourn's all-inclusive cruise experience." } },
                { "@type": "Question", name: "Is Seabourn Ovation dining open seating?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn's dining model provides flexible, open-seating options rather than requiring guests to remain at one assigned table throughout the cruise." } },
                { "@type": "Question", name: "Does Seabourn Ovation have a pool?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn Ovation has a pool area designed primarily for relaxation." } },
                { "@type": "Question", name: "Does Seabourn Ovation have a spa?", acceptedAnswer: { "@type": "Answer", text: "Yes. Guests can access spa and wellness services onboard." } },
                { "@type": "Question", name: "Does Seabourn Ovation have a fitness center?", acceptedAnswer: { "@type": "Answer", text: "Yes. The ship provides fitness facilities for guests who want to exercise during the cruise." } },
                { "@type": "Question", name: "What destinations does Seabourn Ovation visit?", acceptedAnswer: { "@type": "Answer", text: "Depending on the itinerary and season, Ovation can sail to destinations in the Mediterranean, Northern Europe, Scandinavia, the British Isles, the Caribbean and other regions." } },
                { "@type": "Question", name: "Is Seabourn Ovation good for couples?", acceptedAnswer: { "@type": "Answer", text: "Yes. Its intimate atmosphere, suites, verandas, dining and destination-focused itineraries make it particularly appealing to couples." } },
                { "@type": "Question", name: "Is Seabourn Ovation good for solo travelers?", acceptedAnswer: { "@type": "Answer", text: "Yes. Open dining and the relatively intimate passenger environment can make the ship comfortable for solo travelers." } },
                { "@type": "Question", name: "Is Seabourn Ovation good for families?", acceptedAnswer: { "@type": "Answer", text: "It can work for families, particularly multigenerational travelers, but it is not designed as a traditional family resort ship." } },
                { "@type": "Question", name: "Is Seabourn Ovation good for first-time luxury cruisers?", acceptedAnswer: { "@type": "Answer", text: "Yes. The combination of all-suite accommodations, personalized service, fine dining and a relaxed atmosphere makes it a strong introduction to luxury cruising." } },
                { "@type": "Question", name: "Is Seabourn Ovation formal?", acceptedAnswer: { "@type": "Answer", text: "The atmosphere is sophisticated but generally relaxed. Smart-casual clothing is appropriate for much of the onboard experience." } },
                { "@type": "Question", name: "What is the difference between Seabourn Ovation and Seabourn Encore?", acceptedAnswer: { "@type": "Answer", text: "They are sister ships with very similar luxury concepts, passenger capacity and onboard experiences. Itinerary and suite availability can be more important factors when choosing between them." } },
                { "@type": "Question", name: "Is Seabourn Ovation worth the money?", acceptedAnswer: { "@type": "Answer", text: "For travelers who value all-suite accommodations, personalized service, fine dining and a quieter luxury cruise atmosphere, Seabourn Ovation can be an excellent choice." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reused Sbc-faq classes) ────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is Seabourn Ovation?", a: "Seabourn Ovation is an all-suite luxury ocean cruise ship designed for travelers seeking personalized service, fine dining and an intimate onboard atmosphere." },
        { q: "How many guests does Seabourn Ovation accommodate?", a: "Seabourn Ovation accommodates approximately 600 guests." },
        { q: "Is Seabourn Ovation an all-suite ship?", a: "Yes. All accommodations are suites." },
        { q: "Do Seabourn Ovation suites have balconies?", a: "Many suite categories include private verandas. The exact configuration depends on the suite." },
        { q: "What restaurants are on Seabourn Ovation?", a: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining." },
        { q: "Is dining included on Seabourn Ovation?", a: "Yes. Dining is included as part of Seabourn's all-inclusive cruise experience." },
        { q: "Is Seabourn Ovation dining open seating?", a: "Yes. Seabourn's dining model provides flexible, open-seating options rather than requiring guests to remain at one assigned table throughout the cruise." },
        { q: "Does Seabourn Ovation have a pool?", a: "Yes. The ship has a pool area designed primarily for relaxation." },
        { q: "Does Seabourn Ovation have a spa?", a: "Yes. Guests can access spa and wellness services onboard." },
        { q: "Does Seabourn Ovation have a fitness center?", a: "Yes. The ship provides fitness facilities for guests who want to exercise during the cruise." },
        { q: "What destinations does Seabourn Ovation visit?", a: "Depending on the itinerary and season, Ovation can sail to destinations in the Mediterranean, Northern Europe, Scandinavia, the British Isles, the Caribbean and other regions." },
        { q: "Is Seabourn Ovation good for couples?", a: "Yes. Its intimate atmosphere, suites, verandas, dining and destination-focused itineraries make it particularly appealing to couples." },
        { q: "Is Seabourn Ovation good for solo travelers?", a: "Yes. Open dining and the relatively intimate passenger environment can make the ship comfortable for solo travelers." },
        { q: "Is Seabourn Ovation good for families?", a: "It can work for families, particularly multigenerational travelers, but it is not designed as a traditional family resort ship." },
        { q: "Is Seabourn Ovation good for first-time luxury cruisers?", a: "Yes. The combination of all-suite accommodations, personalized service, fine dining and a relaxed atmosphere makes it a strong introduction to luxury cruising." },
        { q: "Is Seabourn Ovation formal?", a: "The atmosphere is sophisticated but generally relaxed. Smart-casual clothing is appropriate for much of the onboard experience." },
        { q: "What is the difference between Seabourn Ovation and Seabourn Encore?", a: "They are sister ships with very similar luxury concepts, passenger capacity and onboard experiences. Itinerary and suite availability can be more important factors when choosing between them." },
        { q: "Is Seabourn Ovation worth the money?", a: "For travelers who value all-suite accommodations, personalized service, fine dining and a quieter luxury cruise atmosphere, Seabourn Ovation can be an excellent choice." },
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
    { label: "Ship type", value: "Luxury ocean cruise ship" },
    { label: "Guests", value: "Approximately 600" },
    { label: "Ship style", value: "All-suite luxury" },
    { label: "Atmosphere", value: "Intimate, elegant and relaxed" },
    { label: "Dining", value: "Multiple restaurants and dining venues" },
    { label: "Accommodation", value: "All-suite" },
    { label: "Private verandas", value: "Available in many suite categories" },
    { label: "Pool", value: "Yes" },
    { label: "Spa", value: "Yes" },
    { label: "Fitness center", value: "Yes" },
    { label: "Bars & lounges", value: "Multiple" },
    { label: "Entertainment", value: "Shows, live music and enrichment" },
    { label: "Best for", value: "Couples, luxury travelers and experienced cruisers" },
    { label: "Sister ship", value: "Seabourn Encore" },
];

const whatIsList = ["Personalized service", "Spacious suites", "Fine dining", "Destination experiences", "Relaxed public spaces", "Small-ship atmosphere"];

const whyChooseList = ["Approximately 600 guests", "All-suite accommodations", "Many suites with verandas", "Multiple dining venues", "Open-seating dining", "Elegant lounges", "Swimming pool", "Spa and wellness facilities", "Fitness center", "Destination-focused programming", "Personalized Seabourn service"];

const suiteIncludeList = ["Separate living space", "Bedroom area", "Private veranda", "Ocean views", "Sitting area", "In-suite bar", "Luxury bathroom", "Suite host service"];
const suiteCategoryList = ["Ocean View Suites", "Veranda Suites", "Penthouse Suites", "Premium Suites", "Larger specialty suites"];
const balconyUseList = ["Watch the ship arrive in port", "Enjoy morning coffee", "Read", "Watch the sunset", "Take in coastal scenery", "Relax between excursions"];

const bestSuiteCards = [
    { icon: Gem, title: "Best for Value", text: "A well-positioned Veranda Suite can provide an excellent combination of space, outdoor access and price." },
    { icon: Heart, title: "Best for Couples", text: "A veranda suite provides private outdoor space and a comfortable place to relax together." },
    { icon: Home, title: "Best for Additional Space", text: "A Penthouse Suite can be worth considering when living space is a priority." },
    { icon: Star, title: "Best for Maximum Luxury", text: "The ship's largest premium suites provide additional space and upgraded amenities." },
];

const diningVenuesList = ["The Restaurant", "The Colonnade", "Earth & Ocean", "The Patio", "In-suite dining"];

const diningCards = [
    { icon: Utensils, title: "The Restaurant", text: "The Restaurant is Seabourn Ovation's primary fine-dining venue. Guests can enjoy multi-course meals, changing menus, table service, regional dishes, wine, desserts and destination-inspired cuisine. The Restaurant is a good choice when you want a traditional luxury dining experience." },
    { icon: Sun, title: "The Colonnade", text: "The Colonnade provides a more casual alternative to The Restaurant. It can be particularly convenient for breakfast and lunch or when you don't want a traditional fine-dining experience. Depending on the meal period, guests can enjoy breakfast, lunch, dinner, regional cuisine, casual dishes and buffet selections." },
    { icon: Waves, title: "Earth & Ocean", text: "Earth & Ocean offers a more relaxed dining experience with globally inspired dishes. The venue is designed for travelers who want variety and a less formal atmosphere. It can be a particularly appealing choice after returning from a shore excursion." },
    { icon: Sparkles, title: "The Patio", text: "The Patio provides an outdoor dining environment. Depending on weather and operating schedules, it can be a pleasant option for a relaxed meal while enjoying the surrounding scenery. Outdoor dining is particularly attractive on warm-weather itineraries." },
    { icon: Home, title: "In-Suite Dining", text: "In-suite dining can be ideal when you want a quiet breakfast, prefer a private dinner, return late from an excursion, want to relax on your veranda, or simply don't feel like going to a restaurant." },
];

const publicAreaList = ["Dining", "Lounging", "Swimming", "Wellness", "Fitness", "Live entertainment", "Socializing", "Scenic viewing"];
const seabournSquareList = ["Relax", "Meet other travelers", "Get assistance", "Enjoy coffee", "Plan activities", "Socialize"];
const observationList = ["Ocean views", "Sunsets", "Port arrivals", "Coastal scenery", "Departures"];

const poolSpaFitnessCards = [
    { icon: Waves, title: "Seabourn Ovation Pool", text: "The ship features a swimming pool area designed for relaxation, more focused on quiet leisure than the large water-park-style pool decks found on mainstream cruise ships. Guests can swim, relax in the sun, read, enjoy a drink and spend time between excursions." },
    { icon: Sparkles, title: "Seabourn Ovation Spa", text: "The spa provides a place to relax during the voyage. Available wellness services can include treatments designed around relaxation, skincare, massage, beauty and wellness. For many guests, the spa is particularly useful after a busy day exploring a destination." },
    { icon: Dumbbell, title: "Seabourn Ovation Fitness Center", text: "Travelers who want to maintain their fitness routine can use the ship's fitness facilities. The gym can be useful for cardio workouts, strength training, stretching and general exercise. Fitness programming may also be offered depending on the voyage." },
];

const barsEntertainmentEnrichment = [
    {
        icon: Wine,
        title: "Seabourn Ovation Bars and Lounges",
        text: "Ovation provides several social spaces where guests can enjoy drinks, conversation and entertainment. This is different from cruise ships designed around loud nightlife and large crowds.",
        words: ["Sophisticated", "Quiet", "Social", "Relaxed"],
    },
    {
        icon: Music,
        title: "Seabourn Ovation Entertainment",
        text: "Entertainment on Ovation focuses on quality and intimacy rather than large-scale production. The ship is better suited to travelers who prefer an elegant evening with music or conversation than those seeking a large nightclub or Broadway-style entertainment complex.",
        listLabel: "Depending on the sailing, programming can include:",
        list: ["Live music", "Performances", "Guest speakers", "Cultural presentations", "Destination talks", "Evening entertainment"],
    },
    {
        icon: BookOpen,
        title: "Seabourn Ovation Enrichment",
        text: "Destination enrichment can be an important part of the onboard experience. These activities help guests understand the places they visit rather than simply passing through them.",
        listLabel: "Programs may cover:",
        list: ["Local history", "Culture", "Food", "Art", "Geography", "Travel", "Destination highlights"],
    },
];

const destinations = [
    {
        icon: Landmark,
        title: "Mediterranean",
        subtitle: "Seabourn Ovation Mediterranean Cruises",
        desc: "The Mediterranean is a natural fit for Ovation. The ship's smaller size allows it to provide a more intimate alternative to large cruise ships while visiting iconic destinations. The exact ports vary by itinerary.",
        listLabel: "Possible itinerary highlights can include:",
        listItems: ["Italy", "Greece", "Croatia", "France", "Spain", "Turkey"],
    },
    {
        icon: Waves,
        title: "Northern Europe",
        subtitle: "Seabourn Ovation Northern Europe Cruises",
        desc: "Northern European itineraries can offer a different style of luxury cruise. These cruises can appeal to travelers who want scenic cruising combined with cultural exploration.",
        listLabel: "Possible destinations include:",
        listItems: ["Scandinavia", "British Isles", "Northern European ports", "Fjords", "Baltic destinations"],
    },
    {
        icon: Anchor,
        title: "Caribbean",
        subtitle: "Seabourn Ovation Caribbean Cruises",
        desc: "Caribbean sailings offer warm-weather cruising and a more relaxed atmosphere. Ovation's smaller scale can provide a more intimate experience than large Caribbean cruise ships.",
        listLabel: "Depending on the itinerary, travelers may visit:",
        listItems: ["Caribbean islands", "Smaller ports", "Beach destinations", "Historic towns"],
    },
];

const bestForList = ["Luxury", "Personalized service", "All-suite accommodations", "Fine dining", "Smaller ships", "Relaxed public spaces", "Destination exploration", "Flexible dining", "Sophisticated atmosphere"];

const couplesList = ["Spacious suites", "Private verandas", "Romantic dining", "Quiet lounges", "Spa facilities", "Destination-focused itineraries", "An intimate atmosphere"];
const familiesList = ["Destination experiences", "Dining", "Culture", "Relaxation", "Multigenerational travel", "Luxury service"];
const firstTimeList = ["Smaller passenger capacity", "All-suite accommodations", "Personalized service", "Fine dining", "Included beverages", "Open seating", "Elegant public spaces", "Destination-focused experiences"];

const notFitList = ["Huge entertainment venues", "Water parks", "Dozens of restaurants", "Large casinos", "Nightclubs", "Constant onboard activities", "Thousands of passengers", "A resort-style atmosphere"];

const compareFeatures = [
    { label: "Ship type", value: "Luxury ocean ship" },
    { label: "Approx. guests", value: "600" },
    { label: "Accommodation", value: "All-suite" },
    { label: "Atmosphere", value: "Intimate & sophisticated" },
    { label: "Dining", value: "Multiple venues" },
    { label: "Public spaces", value: "Luxury lounges & outdoor areas" },
    { label: "Best for", value: "Luxury ocean cruising" },
];

const prosList = ["All-suite accommodations", "Many suites with private verandas", "Approximately 600 guests", "Multiple dining venues", "Open-seating dining", "Personalized service", "Elegant public spaces", "Spa and fitness facilities", "Relaxed pool area", "Destination-focused programming", "Intimate atmosphere", "Strong choice for couples"];
const consList = ["Less onboard entertainment than large ships", "Limited family-focused facilities", "Fewer restaurants than mega-ships", "Premium pricing", "Not designed for travelers seeking a high-energy resort atmosphere"];

const worthItList = ["Less crowding", "More personal service", "All-suite accommodations", "Flexible dining", "Refined public spaces", "Destination-focused travel"];

const suiteTips = [
    { title: "Decide whether a veranda matters", text: "For many travelers, private outdoor space is worth prioritizing." },
    { title: "Compare deck locations", text: "Look at the deck plan before booking." },
    { title: "Consider proximity to public areas", text: "Being near elevators, restaurants or lounges can be convenient, while travelers seeking maximum quiet may prefer a different location." },
    { title: "Don't automatically book the largest suite", text: "A well-located veranda suite can provide an excellent overall experience." },
    { title: "Match the suite to your itinerary", text: "If your itinerary includes scenic cruising, a veranda may be especially valuable." },
];

const planningTips = [
    { title: "Choose the destination first", text: "The itinerary should be the starting point." },
    { title: "Compare ports carefully", text: "Luxury cruises can differ substantially in the amount of time spent in each destination." },
    { title: "Look at sea days", text: "Some travelers love relaxing onboard; others want port-intensive itineraries." },
    { title: "Consider the season", text: "Weather can significantly affect the experience." },
    { title: "Compare suite categories", text: "Look at size, location, veranda and amenities before choosing." },
    { title: "Work with a luxury travel advisor", text: "An experienced advisor can help compare itineraries, suites and current offers." },
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournOvationGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeDestTab, setActiveDestTab] = useState(0);
    const [activePublicTab, setActivePublicTab] = useState("square");

    const ActiveIcon = destinations[activeDestTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Ovation: Ship Guide, Suites & Dining</title>
                <meta name="title" content="Seabourn Ovation Ship Guide: Suites, Dining & Destinations" />
                <meta
                    name="description"
                    content="Explore Seabourn Ovation, including suites, restaurants, public areas, onboard amenities, destinations and who this luxury ship is best suited for."
                />
                <script type="application/ld+json">{JSON.stringify(seabournOvationSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Ovation <br /> Ship Guide</h1>
                    <p>
                        Seabourn Ovation is a luxury ocean cruise ship designed for travelers who want an intimate, sophisticated cruise experience without the size and crowds of a conventional large ship.
                    </p>
                    {readMore && (
                        <>
                            <p>
                                As one of Seabourn's larger ocean-going vessels, Ovation combines all-suite accommodations, multiple dining venues, elegant public spaces, personalized service and destination-focused itineraries.
                            </p>
                            <p>
                                The ship is particularly appealing to travelers who want the atmosphere of a private yacht with the amenities and variety of a larger luxury vessel.
                            </p>
                            <p>
                                In this guide, we'll cover the Seabourn Ovation suites, restaurants, public areas, onboard experience, destinations and the type of traveler the ship suits best.
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
                            Start Planning Your Seabourn Ovation Voyage
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ovs-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Short Version</span>
                        <h2 className="Sbc-h2">Seabourn Ovation at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Ovation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceData.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row.label}</td>
                                        <td data-label="Seabourn Ovation">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="Ssf-table-caption">
                        Note: Specific restaurants, entertainment, itineraries and onboard services may vary
                        depending on the sailing and operational schedule.
                    </p>
                </div>
            </section>

            {/* ── WHAT IS SEABOURN OVATION ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Ship</span>
                                <h2 className="Sbc-h2">What Is Seabourn Ovation?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Seabourn Ovation is an all-suite luxury cruise ship built for travelers who value personalized service, refined dining and a relaxed onboard atmosphere. It offers considerably more space and amenities than a small yacht-style vessel while maintaining the intimate feeling associated with Seabourn.
                            </p>
                            
                            <div className="Sbc-brand-highlights" style={{marginTop: '20px', backgroundColor: 'var(--bg-white)'}}>
                                <h4 className="Sbc-highlights-title">Ovation focuses on:</h4>
                                <ul className="Sbc-highlights-list">
                                    {whatIsList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                The result is a cruise experience designed around quality rather than quantity.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Ovation Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE SEABOURN OVATION ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-why-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Appeal</span>
                        <h2 className="Sbc-h2">Why Choose Seabourn Ovation?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Ovation is particularly appealing if you want a luxury cruise where the ship itself is part of the vacation, but you don't want to spend your trip navigating crowds. Key advantages include:
                        </p>
                    </div>

                    <div className="Ovs-why-grid">
                        {[
                            { text: "Approximately 600 guests", icon: Users },
                            { text: "All-suite accommodations", icon: Home },
                            { text: "Many suites with verandas", icon: Compass },
                            { text: "Multiple dining venues", icon: Utensils },
                            { text: "Open-seating dining", icon: Gem },
                            { text: "Elegant lounges", icon: Star },
                            { text: "Swimming pool", icon: Waves },
                            { text: "Spa and wellness facilities", icon: Sparkles },
                            { text: "Fitness center", icon: Dumbbell },
                            { text: "Destination-focused programming", icon: MapPin },
                            { text: "Personalized Seabourn service", icon: Award }
                        ].map((item, i) => {
                            const IconComponent = item.icon;
                            return (
                                <div className="Ovs-why-card" key={i}>
                                    <div className="Ovs-why-card-icon-wrapper">
                                        <IconComponent size={22} className="Ovs-why-card-icon" />
                                    </div>
                                    <span className="Ovs-why-card-text">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SUITES ────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn Ovation Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the defining characteristics of Ovation is that every accommodation is a suite.
                            This immediately separates the ship from many mainstream cruise vessels. Suites provide
                            more residential-style space than a typical cruise cabin and are designed to give guests
                            a comfortable place to relax between excursions and activities.
                        </p>
                    </div>

                    <div className="Sbc-suite-grid">
                        <div className="Sbc-suite-card">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Home size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Suite Category Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Depending on the Category, Suites Can Include</h3>
                                <ul className="Sbc-suite-feature-list">
                                    {suiteIncludeList.map((f, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-suite-card Sbc-suite-card-dark">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Gem size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Seabourn Ovation Suite Categories Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Seabourn Ovation Suite Categories</h3>
                                <p className="Sbc-p" style={{ marginBottom: "18px" }}>
                                    Travelers can choose between more compact entry-level accommodations and larger
                                    premium suites. Categories can include:
                                </p>
                                <ul className="Sbc-wintergarden-list">
                                    {suiteCategoryList.map((item, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ marginTop: "18px" }}>
                                    The exact layout, size and amenities depend on the specific category.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BALCONIES ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-balconies">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Private Outdoor Space</span>
                                <h2 className="Sbc-h2">Do Seabourn Ovation Suites Have Balconies?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Many Seabourn Ovation suites feature private verandas. A veranda can be particularly valuable for travelers who enjoy spending time outdoors without leaving their accommodation. It's a private place to:
                            </p>
                            <div className="Sbc-qa-card">
                                <ul className="Sbc-highlights-list">
                                    {balconyUseList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p" style={{ marginTop: "16px" }}>
                                When choosing a suite, compare both location and layout, rather than simply choosing the largest available category.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Sun size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Ovation Veranda Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST SUITES ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-best-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing a Category</span>
                        <h2 className="Sbc-h2">Best Seabourn Ovation Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">There isn't one best suite for everyone.</p>
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

            {/* ── CTA 1 (Suites) ───────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Accommodations</span>
                    <h3 className="Sbc-cta-title">Find Your Perfect Ovation Suite</h3>
                    <p className="Sbc-cta-text">
                        Explore Seabourn Ovation's all-suite configurations. Let us help you select the ideal
                        category, from Ocean View Suites to the largest Premium Suites.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Suite Availability
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── RESTAURANTS ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Ovation Restaurants</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Dining is a major component of the Seabourn experience. Ovation offers several dining
                            environments, allowing guests to choose between formal fine dining, casual meals and
                            relaxed outdoor options.
                        </p>
                        <ul className="Sbc-dining-venues">
                            {diningVenuesList.map((v, i) => (
                                <li key={i}>{v}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-dining-grid">
                        {diningCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-dining-card" key={i}>
                                    <div className="Sbc-dining-image-placeholder">
                                        <div className="Sbc-dining-placeholder-icon-wrapper">
                                            <Icon size={24} className="Sbc-dining-placeholder-icon" />
                                        </div>
                                        <span className="Sbc-dining-placeholder-text">{card.title} Image Placeholder</span>
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="Sbc-qa-card" style={{ marginTop: "40px" }}>
                        <h4 className="Sbc-qa-card-title">Is Seabourn Ovation Dining Open Seating?</h4>
                        <p className="Sbc-p">
                            Yes. One of the attractions of Seabourn dining is the flexibility of open seating.
                            Rather than being tied to one table or dining time throughout the cruise, guests can
                            generally choose when and with whom they want to dine within the applicable
                            restaurant's operating schedule. This works particularly well for couples and
                            independent travelers.
                        </p>
                    </div>

                    <div className="Sbc-qa-card" style={{ marginTop: "20px" }}>
                        <h4 className="Sbc-qa-card-title">Is Food Included on Seabourn Ovation?</h4>
                        <p className="Sbc-p">
                            Yes. Dining is included as part of Seabourn's all-inclusive cruise experience. A broad
                            selection of beverages is also included. Certain optional products, services or special
                            experiences may have additional charges.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PUBLIC AREAS ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ovs-public-areas">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Spaces</span>
                        <h2 className="Sbc-h2">Seabourn Ovation Public Areas</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Ovation's public spaces are designed around relaxation and conversation rather than large-scale entertainment. The overall design emphasizes an elegant, residential atmosphere.
                        </p>
                        <div className="Sbc-brand-highlights" style={{ marginTop: "24px", maxWidth: "600px", margin: "24px auto 0" }}>
                            <h4 className="Sbc-highlights-title" style={{ textAlign: "center" }}>Guests can find areas for:</h4>
                            <div className="Ovs-public-tags">
                                {["Dining", "Lounging", "Swimming", "Wellness", "Fitness", "Live entertainment", "Socializing", "Scenic viewing"].map((tag, i) => (
                                    <span key={i} className="Ovs-public-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="Ovs-tabs-container">
                        {/* Tabs List */}
                        <div className="Ovs-tabs-list">
                            {[
                                { id: "square", label: "Seabourn Square", icon: Users },
                                { id: "observation", label: "Observation Areas", icon: Compass },
                                { id: "pool", label: "Swimming Pool", icon: Waves },
                                { id: "spa", label: "Luxury Spa", icon: Sparkles },
                                { id: "fitness", label: "Fitness Center", icon: Dumbbell },
                                { id: "bars", label: "Bars & Lounges", icon: Wine },
                                { id: "entertainment", label: "Entertainment", icon: Music },
                                { id: "enrichment", label: "Enrichment", icon: BookOpen }
                            ].map((tab) => {
                                const IconComp = tab.icon;
                                const isActive = activePublicTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        className={`Ovs-tab-btn ${isActive ? "active" : ""}`}
                                        onClick={() => setActivePublicTab(tab.id)}
                                    >
                                        <IconComp size={18} className="Ovs-tab-btn-icon" />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active Tab Panel */}
                        <div className="Ovs-tab-panel">
                            {activePublicTab === "square" && (
                                <div className="Ovs-tab-content">
                                    <div className="Ovs-tab-image-placeholder">
                                        <Users size={36} className="Ovs-tab-image-icon" />
                                        <span>Seabourn Square Social Hub</span>
                                    </div>
                                    <div className="Ovs-tab-body">
                                        <h3 className="Ovs-tab-title">Seabourn Square</h3>
                                        <p className="Ovs-tab-text">
                                            Seabourn Square functions as one of the ship's central social and service areas. It has more of a sophisticated lounge or living-room atmosphere than a conventional cruise-ship atrium.
                                        </p>
                                        <p className="Ovs-tab-text">
                                            It contributes significantly to the intimate feel of the ship, serving as the relaxed heartbeat of daily life onboard.
                                        </p>
                                        <div className="Ovs-tab-list-box">
                                            <h4 className="Ovs-tab-list-title">Guests can use the area to:</h4>
                                            <ul className="Ovs-tab-list-ul">
                                                {["Relax", "Meet other travelers", "Get assistance", "Enjoy coffee", "Plan activities", "Socialize"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Ovs-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "observation" && (
                                <div className="Ovs-tab-content">
                                    <div className="Ovs-tab-image-placeholder">
                                        <Compass size={36} className="Ovs-tab-image-icon" />
                                        <span>Observation & Scenic Viewing Areas</span>
                                    </div>
                                    <div className="Ovs-tab-body">
                                        <h3 className="Ovs-tab-title">Seabourn Ovation Observation Areas</h3>
                                        <p className="Ovs-tab-text">
                                            Scenic viewing is an important part of any luxury cruise. Ovation provides public spaces where guests can relax and take in the natural surroundings in comfort.
                                        </p>
                                        <p className="Ovs-tab-text">
                                            For destination-focused itineraries, these viewing decks and indoor lounges become some of the most popular and enjoyable areas onboard.
                                        </p>
                                        <div className="Ovs-tab-list-box">
                                            <h4 className="Ovs-tab-list-title">Ovation provides public spaces where guests can enjoy:</h4>
                                            <ul className="Ovs-tab-list-ul">
                                                {["Ocean views", "Sunsets", "Port arrivals", "Coastal scenery", "Departures"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Ovs-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "pool" && (
                                <div className="Ovs-tab-content">
                                    <div className="Ovs-tab-image-placeholder">
                                        <Waves size={36} className="Ovs-tab-image-icon" />
                                        <span>Resort Pool Deck & Quiet Leisure</span>
                                    </div>
                                    <div className="Ovs-tab-body">
                                        <h3 className="Ovs-tab-title">Seabourn Ovation Pool</h3>
                                        <p className="Ovs-tab-text">
                                            The ship features a swimming pool area designed for relaxation. It is more focused on quiet leisure than the large, crowded water-park-style pool decks found on mainstream cruise ships.
                                        </p>
                                        <div className="Ovs-tab-list-box">
                                            <h4 className="Ovs-tab-list-title">Guests can:</h4>
                                            <ul className="Ovs-tab-list-ul">
                                                {["Swim", "Relax in the sun", "Read", "Enjoy a drink", "Spend time between excursions"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Ovs-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "spa" && (
                                <div className="Ovs-tab-content">
                                    <div className="Ovs-tab-image-placeholder">
                                        <Sparkles size={36} className="Ovs-tab-image-icon" />
                                        <span>The Spa & Wellness Suite</span>
                                    </div>
                                    <div className="Ovs-tab-body">
                                        <h3 className="Ovs-tab-title">Seabourn Ovation Spa</h3>
                                        <p className="Ovs-tab-text">
                                            The spa provides a place to relax during the voyage. For many guests, the spa is particularly useful for unwinding after a busy day exploring a destination.
                                        </p>
                                        <div className="Ovs-tab-list-box">
                                            <h4 className="Ovs-tab-list-title">Available wellness services can include treatments designed around:</h4>
                                            <ul className="Ovs-tab-list-ul">
                                                {["Relaxation", "Skincare", "Massage", "Beauty", "Wellness"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Ovs-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "fitness" && (
                                <div className="Ovs-tab-content">
                                    <div className="Ovs-tab-image-placeholder">
                                        <Dumbbell size={36} className="Ovs-tab-image-icon" />
                                        <span>Fitness Center & Exercise Facilities</span>
                                    </div>
                                    <div className="Ovs-tab-body">
                                        <h3 className="Ovs-tab-title">Seabourn Ovation Fitness Center</h3>
                                        <p className="Ovs-tab-text">
                                            Travelers who want to maintain their fitness routine can use the ship's fitness facilities. Specialized programming may also be offered depending on the voyage.
                                        </p>
                                        <div className="Ovs-tab-list-box">
                                            <h4 className="Ovs-tab-list-title">The gym can be useful for:</h4>
                                            <ul className="Ovs-tab-list-ul">
                                                {["Cardio workouts", "Strength training", "Stretching", "General exercise"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Ovs-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "bars" && (
                                <div className="Ovs-tab-content">
                                    <div className="Ovs-tab-image-placeholder">
                                        <Wine size={36} className="Ovs-tab-image-icon" />
                                        <span>Elegant Lounges & Social Bars</span>
                                    </div>
                                    <div className="Ovs-tab-body">
                                        <h3 className="Ovs-tab-title">Seabourn Ovation Bars and Lounges</h3>
                                        <p className="Ovs-tab-text">
                                            Ovation provides several social spaces where guests can enjoy drinks, conversation and light entertainment. This is different from cruise ships designed around loud nightlife and large crowds.
                                        </p>
                                        <div className="Ovs-tab-list-box">
                                            <h4 className="Ovs-tab-list-title">The atmosphere tends to be:</h4>
                                            <ul className="Ovs-tab-list-ul">
                                                {["Sophisticated", "Quiet", "Social", "Relaxed"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Ovs-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "entertainment" && (
                                <div className="Ovs-tab-content">
                                    <div className="Ovs-tab-image-placeholder">
                                        <Music size={36} className="Ovs-tab-image-icon" />
                                        <span>Intimate Evening Entertainment</span>
                                    </div>
                                    <div className="Ovs-tab-body">
                                        <h3 className="Ovs-tab-title">Seabourn Ovation Entertainment</h3>
                                        <p className="Ovs-tab-text">
                                            Entertainment on Ovation focuses on quality and intimacy rather than large-scale production. The ship is better suited to travelers who prefer an elegant evening with music or conversation than those seeking a large nightclub or Broadway-style entertainment complex.
                                        </p>
                                        <div className="Ovs-tab-list-box">
                                            <h4 className="Ovs-tab-list-title">Depending on the sailing, programming can include:</h4>
                                            <ul className="Ovs-tab-list-ul">
                                                {["Live music", "Performances", "Guest speakers", "Cultural presentations", "Destination talks", "Evening entertainment"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Ovs-tab-dot"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePublicTab === "enrichment" && (
                                <div className="Ovs-tab-content">
                                    <div className="Ovs-tab-image-placeholder">
                                        <BookOpen size={36} className="Ovs-tab-image-icon" />
                                        <span>Destination Enrichment Programs</span>
                                    </div>
                                    <div className="Ovs-tab-body">
                                        <h3 className="Ovs-tab-title">Seabourn Ovation Enrichment</h3>
                                        <p className="Ovs-tab-text">
                                            Destination enrichment can be an important part of the onboard experience. These activities help guests understand the places they visit rather than simply passing through them.
                                        </p>
                                        <div className="Ovs-tab-list-box">
                                            <h4 className="Ovs-tab-list-title">Programs may cover:</h4>
                                            <ul className="Ovs-tab-list-ul">
                                                {["Local history", "Culture", "Food", "Art", "Geography", "Travel", "Destination highlights"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <span className="Ovs-tab-dot"></span>
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
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where Ovation Sails</span>
                        <h2 className="Sbc-h2">Seabourn Ovation Destinations</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Ovation is an ocean-going luxury ship designed for a wide variety of destinations.
                            Depending on the sailing schedule, itineraries can include the Mediterranean, Northern
                            Europe, Western Europe, Scandinavia, the British Isles, the Caribbean and other seasonal
                            destinations. Itinerary availability changes over time, so travelers should compare
                            current schedules when planning.
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
                                <span className="Sbc-dest-placeholder-text">
                                    {destinations[activeDestTab].title} Travel Image
                                </span>
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


            {/* ── WHO IS SEABOURN OVATION BEST FOR ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ovs-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Is Seabourn Ovation Best For?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Seabourn Ovation is particularly well suited to travelers who value:</p>
                    </div>

                    <div className="Ovs-bestfor-grid">
                        {[
                            { text: "Luxury", icon: Gem },
                            { text: "Personalized service", icon: Award },
                            { text: "All-suite accommodations", icon: Home },
                            { text: "Fine dining", icon: Utensils },
                            { text: "Smaller ships", icon: Ship },
                            { text: "Relaxed public spaces", icon: Waves },
                            { text: "Destination exploration", icon: Compass },
                            { text: "Flexible dining", icon: Wine },
                            { text: "Sophisticated atmosphere", icon: Star }
                        ].map((item, idx) => {
                            const IconComp = item.icon;
                            return (
                                <div key={idx} className="Ovs-bestfor-card">
                                    <div className="Ovs-bestfor-icon-wrapper">
                                        <IconComp size={20} className="Ovs-bestfor-icon" />
                                    </div>
                                    <span className="Ovs-bestfor-text">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

                        {/* ── CTA 2 (Dining) ───────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Culinary Experiences</span>
                    <h3 className="Sbc-cta-title">Reserve Your Table at Sea</h3>
                    <p className="Sbc-cta-text">
                        From The Restaurant's changing menus to a private veranda dinner, let's plan your onboard
                        dining around what matters most to you.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan My Dining Experience
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


            {/* ── TARGET FIT (COUPLES & FAMILIES) ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Ovs-target-fit">
                <div className="Sbc-container">
                    <div className="Ovs-fit-twocol-grid">
                        {/* Couples Card */}
                        <div className="Ovs-fit-col-card">
                            <div className="Ovs-fit-card-header">
                                <div className="Ovs-fit-header-icon-box Ovs-heart-icon">
                                    <Heart size={26} />
                                </div>
                                <h3 className="Ovs-fit-card-title">Is Seabourn Ovation Good for Couples?</h3>
                            </div>
                            <div className="Ovs-fit-card-body">
                                <p className="Ovs-fit-intro-p">
                                    <strong>Yes.</strong> Couples are one of the strongest fits for Ovation. The ship offers:
                                </p>
                                <div className="Ovs-fit-list-box">
                                    <ul className="Ovs-fit-list-ul">
                                        {[
                                            "Spacious suites",
                                            "Private verandas",
                                            "Romantic dining",
                                            "Quiet lounges",
                                            "Spa facilities",
                                            "Destination-focused itineraries",
                                            "An intimate atmosphere"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Ovs-fit-bullet-dot"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="Ovs-fit-footer-note">
                                    It can work particularly well for anniversaries, milestone trips and luxury escapes.
                                </p>
                            </div>
                        </div>

                        {/* Families Card */}
                        <div className="Ovs-fit-col-card">
                            <div className="Ovs-fit-card-header">
                                <div className="Ovs-fit-header-icon-box Ovs-users-icon">
                                    <Users size={26} />
                                </div>
                                <h3 className="Ovs-fit-card-title">Is Seabourn Ovation Good for Families?</h3>
                            </div>
                            <div className="Ovs-fit-card-body">
                                <p className="Ovs-fit-intro-p">
                                    Ovation can accommodate families, but it is not designed as a traditional family cruise ship. There are no extensive water parks or large children's entertainment complexes.
                                </p>
                                <div className="Ovs-fit-list-box">
                                    <h4 className="Ovs-fit-list-title">Families are more likely to enjoy the ship if they prioritize:</h4>
                                    <ul className="Ovs-fit-list-ul">
                                        {[
                                            "Destination experiences",
                                            "Dining",
                                            "Culture",
                                            "Relaxation",
                                            "Multigenerational travel",
                                            "Luxury service"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Ovs-fit-bullet-dot"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="Ovs-fit-warning-box">
                                    <AlertCircle size={18} className="Ovs-fit-warning-icon" />
                                    <p className="Ovs-fit-warning-text">
                                        Families traveling with children should check current policies and age requirements before booking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FIRST-TIME LUXURY CRUISERS ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-first-time">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">New to Luxury Cruising</span>
                                <h2 className="Sbc-h2">Is Seabourn Ovation Good for First-Time Luxury Cruisers?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Yes. Ovation can be an excellent introduction to luxury cruising. It provides many
                                of the features that distinguish luxury cruising from mainstream cruising:
                            </p>
                            <div className="Sbc-qa-card">
                                <ul className="Sbc-highlights-list">
                                    {firstTimeList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p" style={{ marginTop: "16px" }}>
                                The atmosphere is upscale without being excessively formal.
                            </p>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">First-Time Luxury Cruisers Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHO SHOULD NOT CHOOSE ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-not-fit">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <span className="Sbc-eyebrow">Is It Right for You?</span>
                            <h2 className="Sbc-h2">Who Should NOT Choose Seabourn Ovation?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            Ovation may not be the right choice if your ideal cruise includes:
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

                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "32px" }}>
                        Travelers seeking that experience may be happier on a larger mainstream cruise ship.
                    </p>
                </div>
            </section>

            {/* ── OVATION VS ENCORE ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-vs-encore">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Comparing Sister Ships</span>
                        <h2 className="Sbc-h2">Seabourn Ovation vs. Seabourn Encore</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Ovation and Encore are sister ships and share many characteristics. For travelers
                            choosing between the two, itinerary, sailing date and suite availability may matter more
                            than the ship itself.
                        </p>
                    </div>
                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Ovation</th>
                                    <th>Seabourn Encore</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareFeatures.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row.label}</td>
                                        <td data-label="Seabourn Ovation">{row.value}</td>
                                        <td data-label="Seabourn Encore">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

                        {/* ── CTA 3 (Destinations) ─────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore and Discover</span>
                    <h3 className="Sbc-cta-title">Plan Your Ovation Voyage</h3>
                    <p className="Sbc-cta-text">
                        From the Mediterranean to the Caribbean, let's compare itineraries and find the Seabourn
                        Ovation sailing that fits your travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Itinerary
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Ovation Pros and Cons</h2>
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


            {/* ── IS SEABOURN OVATION WORTH IT ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Value Proposition</span>
                                <h2 className="Sbc-h2">Is Seabourn Ovation Worth It?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-worth-intro">
                                For travelers who prioritize service, space, dining and a sophisticated small-ship
                                atmosphere, Seabourn Ovation can be an excellent value within the luxury cruise
                                market.
                            </p>
                            <p className="Sbc-worth-text">
                                The value is not primarily about the number of attractions. It comes from the
                                quality of the overall experience.
                            </p>
                            <div className="Ovs-worth-badge-grid">
                                {worthItList.map((item, i) => (
                                    <div key={i} className="Ovs-worth-badge-card">
                                        <Star size={16} className="Ovs-worth-star-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="Sbc-worth-value-desc">
                                If those qualities matter more to you than water parks, huge theaters and dozens of
                                restaurants, Ovation is likely to be a strong fit.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Ovation Value Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── TIPS FOR CHOOSING A SUITE ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Ovs-suite-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Booking Smart</span>
                        <h2 className="Sbc-h2">Tips for Choosing a Seabourn Ovation Suite</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ovs-tips-grid">
                        {suiteTips.map((tip, i) => (
                            <div className="Ovs-tips-card" key={i}>
                                <span className="Ovs-tips-num">{i + 1}</span>
                                <h3 className="Ovs-tips-title">{tip.title}</h3>
                                <p className="Ovs-tips-text">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TIPS FOR PLANNING A CRUISE ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Ovs-planning-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Started</span>
                        <h2 className="Sbc-h2">Tips for Planning a Seabourn Ovation Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ovs-tips-grid">
                        {planningTips.map((tip, i) => (
                            <div className="Ovs-tips-card" key={i}>
                                <span className="Ovs-tips-num">{i + 1}</span>
                                <h3 className="Ovs-tips-title">{tip.title}</h3>
                                <p className="Ovs-tips-text">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────── */}
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

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Ovation</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a Seabourn Ovation cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Ovation a Good Ship?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Ovation is a strong choice for travelers who want a sophisticated luxury cruise
                            without the crowds and scale of a large cruise ship. Its combination of all-suite
                            accommodations, multiple restaurants, elegant public spaces, flexible dining and
                            personalized service creates an experience centered on comfort and destination
                            exploration.
                        </p>
                        <p className="Sbc-p">
                            The ship is particularly well suited to couples, solo travelers, experienced cruisers
                            and first-time luxury travelers who value a quieter, more refined atmosphere.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If your ideal vacation is a combination of
                                beautiful destinations, excellent food, spacious accommodations and attentive
                                service, Seabourn Ovation deserves a place on your shortlist.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Ovation Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SeabournOvationGuide;