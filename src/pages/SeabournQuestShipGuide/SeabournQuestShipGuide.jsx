import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    ChevronRight,
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
    MessageCircle,
    Users,
    Award,
    Star,
    MapPin,
    Coffee,
    Dumbbell,
    Sparkles,
    Luggage,
    ClipboardList,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournQuest.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/",
            name: "Seabourn Quest: Ship Guide, Suites & World Cruises",
            headline: "Seabourn Quest Ship Guide: Suites, Dining & World Cruises",
            description:
                "Explore Seabourn Quest, including its intimate ship experience, suites, dining, amenities, itineraries, World Cruises and who this luxury ship is best suited for.",
            keywords: [
                "Seabourn Quest",
                "Seabourn Quest ship",
                "Seabourn Quest cruise",
                "Seabourn Quest review",
                "Seabourn Quest suites",
                "Seabourn Quest cabins",
                "Seabourn Quest dining",
                "Seabourn Quest restaurants",
                "Seabourn Quest amenities",
                "Seabourn Quest itineraries",
                "Seabourn Quest World Cruise",
                "Seabourn Quest World Cruise 2027",
                "Seabourn Quest World Cruise 2028",
                "Seabourn Quest destinations",
                "Seabourn Quest best suites",
                "Seabourn Quest worth it",
                "Seabourn Quest deck plan",
                "Seabourn Quest ship guide",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: { "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#breadcrumb" },
            mainEntity: { "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#ship" },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Ships", item: "https://www.tripsandships.com/seabourn-cruises/ships/" },
                { "@type": "ListItem", position: 4, name: "Seabourn Quest", item: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/" },
            ],
        },
        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#ship",
            name: "Seabourn Quest",
            description:
                "An intimate all-suite luxury ocean cruise ship designed for personalized service, fine dining, destination-focused travel and longer voyages including selected World Cruises.",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/",
            brand: { "@type": "Brand", name: "Seabourn" },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Ship Type", value: "Luxury ocean cruise ship" },
                { "@type": "PropertyValue", name: "Ship Style", value: "Intimate, all-suite luxury" },
                { "@type": "PropertyValue", name: "Passenger Capacity", value: "Approximately 458 guests" },
                { "@type": "PropertyValue", name: "Atmosphere", value: "Quiet, elegant and personalized" },
                { "@type": "PropertyValue", name: "Accommodation", value: "All-suite" },
                { "@type": "PropertyValue", name: "Private Verandas", value: "Available in selected suite categories" },
                { "@type": "PropertyValue", name: "Dining", value: "Multiple dining venues including The Restaurant, The Colonnade, The Patio and in-suite dining" },
                { "@type": "PropertyValue", name: "Pool", value: "Yes" },
                { "@type": "PropertyValue", name: "Spa", value: "Yes" },
                { "@type": "PropertyValue", name: "Fitness Center", value: "Yes" },
                { "@type": "PropertyValue", name: "Lounges", value: "Multiple" },
                { "@type": "PropertyValue", name: "Entertainment", value: "Live music, performances, guest speakers, cultural programming and destination enrichment" },
                { "@type": "PropertyValue", name: "Long Voyages", value: "Yes" },
                { "@type": "PropertyValue", name: "World Cruises", value: "Available on selected schedules" },
                { "@type": "PropertyValue", name: "Dining Style", value: "Flexible and open seating" },
                { "@type": "PropertyValue", name: "Primary Destinations", value: "Mediterranean, Northern Europe, Scandinavia, British Isles, Caribbean, South America, Asia, Australia and the Pacific" },
                { "@type": "PropertyValue", name: "Best For", value: "Couples, solo travelers, experienced cruisers and long-voyage travelers" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#faq",
            mainEntity: [
                { "@type": "Question", name: "What is Seabourn Quest?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Quest is an intimate all-suite luxury ocean cruise ship designed for personalized service, fine dining and destination-focused travel." } },
                { "@type": "Question", name: "How many guests are on Seabourn Quest?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Quest accommodates approximately 458 guests." } },
                { "@type": "Question", name: "Is Seabourn Quest an all-suite ship?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn Quest offers all-suite accommodations." } },
                { "@type": "Question", name: "Do Seabourn Quest suites have balconies?", acceptedAnswer: { "@type": "Answer", text: "Selected suite categories feature private verandas. The exact configuration depends on the suite category." } },
                { "@type": "Question", name: "What restaurants are on Seabourn Quest?", acceptedAnswer: { "@type": "Answer", text: "Dining options can include The Restaurant, The Colonnade, The Patio and in-suite dining, with offerings varying by sailing." } },
                { "@type": "Question", name: "Is dining included on Seabourn Quest?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dining is included as part of Seabourn's all-inclusive luxury cruise experience." } },
                { "@type": "Question", name: "Does Seabourn Quest offer open seating?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn emphasizes flexible dining rather than traditional fixed assigned seating." } },
                { "@type": "Question", name: "Does Seabourn Quest have a pool?", acceptedAnswer: { "@type": "Answer", text: "Yes. The ship has a pool area designed primarily for relaxation." } },
                { "@type": "Question", name: "Does Seabourn Quest have a spa?", acceptedAnswer: { "@type": "Answer", text: "Yes. Guests can access spa and wellness services onboard." } },
                { "@type": "Question", name: "Does Seabourn Quest have a fitness center?", acceptedAnswer: { "@type": "Answer", text: "Yes. The ship provides fitness facilities for guests." } },
                { "@type": "Question", name: "What destinations does Seabourn Quest visit?", acceptedAnswer: { "@type": "Answer", text: "Depending on the sailing, Quest can visit regions including the Mediterranean, Northern Europe, the Caribbean, South America, Asia, Australia, the Pacific and other international destinations." } },
                { "@type": "Question", name: "Does Seabourn Quest offer World Cruises?", acceptedAnswer: { "@type": "Answer", text: "Yes. Quest can operate long-duration World Cruise itineraries on selected schedules. The exact route and year should be confirmed for the specific voyage." } },
                { "@type": "Question", name: "Is Seabourn Quest good for a World Cruise?", acceptedAnswer: { "@type": "Answer", text: "Yes. Its intimate atmosphere, all-suite accommodations and personalized service can make it particularly appealing for extended voyages." } },
                { "@type": "Question", name: "Is Seabourn Quest good for couples?", acceptedAnswer: { "@type": "Answer", text: "Yes. The smaller ship, suites, dining and relaxed atmosphere make it an excellent option for couples." } },
                { "@type": "Question", name: "Is Seabourn Quest good for solo travelers?", acceptedAnswer: { "@type": "Answer", text: "Yes. Open dining and the intimate passenger environment can make it particularly comfortable for solo travelers." } },
                { "@type": "Question", name: "Is Seabourn Quest good for families?", acceptedAnswer: { "@type": "Answer", text: "It can suit adventurous multigenerational families, but it is not designed as a traditional family resort ship." } },
                { "@type": "Question", name: "What is the difference between Seabourn Quest and Seabourn Encore?", acceptedAnswer: { "@type": "Answer", text: "Quest accommodates fewer guests and offers a more intimate small-ship atmosphere. Encore is a larger Seabourn ocean ship with approximately 600 guests." } },
                { "@type": "Question", name: "Is Seabourn Quest worth the money?", acceptedAnswer: { "@type": "Answer", text: "For travelers who prioritize intimate luxury, personalized service, all-suite accommodations and longer international voyages, Seabourn Quest can be worth the premium." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reused Sbc-faq classes) ────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is Seabourn Quest?", a: "Seabourn Quest is an intimate all-suite luxury ocean cruise ship designed for personalized service, fine dining and destination-focused travel." },
        { q: "How many guests are on Seabourn Quest?", a: "Seabourn Quest accommodates approximately 458 guests." },
        { q: "Is Seabourn Quest an all-suite ship?", a: "Yes. Seabourn Quest offers all-suite accommodations." },
        { q: "Do Seabourn Quest suites have balconies?", a: "Selected suite categories feature private verandas. The exact configuration depends on the suite category." },
        { q: "What restaurants are on Seabourn Quest?", a: "Dining options can include The Restaurant, The Colonnade, The Patio and in-suite dining, with offerings varying by sailing." },
        { q: "Is dining included on Seabourn Quest?", a: "Yes. Dining is included as part of Seabourn's all-inclusive luxury cruise experience." },
        { q: "Does Seabourn Quest offer open seating?", a: "Yes. Seabourn emphasizes flexible dining rather than traditional fixed assigned seating." },
        { q: "Does Seabourn Quest have a pool?", a: "Yes. The ship has a pool area designed primarily for relaxation." },
        { q: "Does Seabourn Quest have a spa?", a: "Yes. Guests can access spa and wellness services onboard." },
        { q: "Does Seabourn Quest have a fitness center?", a: "Yes. The ship provides fitness facilities for guests." },
        { q: "What destinations does Seabourn Quest visit?", a: "Depending on the sailing, Quest can visit regions including the Mediterranean, Northern Europe, the Caribbean, South America, Asia, Australia, the Pacific and other international destinations." },
        { q: "Does Seabourn Quest offer World Cruises?", a: "Yes. Quest can operate long-duration World Cruise itineraries on selected schedules. The exact route and year should be confirmed for the specific voyage." },
        { q: "Is Seabourn Quest good for a World Cruise?", a: "Yes. Its intimate atmosphere, all-suite accommodations and personalized service can make it particularly appealing for extended voyages." },
        { q: "Is Seabourn Quest good for couples?", a: "Yes. The smaller ship, suites, dining and relaxed atmosphere make it an excellent option for couples." },
        { q: "Is Seabourn Quest good for solo travelers?", a: "Yes. Open dining and the intimate passenger environment can make it particularly comfortable for solo travelers." },
        { q: "Is Seabourn Quest good for families?", a: "It can suit adventurous multigenerational families, but it is not designed as a traditional family resort ship." },
        { q: "What is the difference between Seabourn Quest and Seabourn Encore?", a: "Quest accommodates fewer guests and offers a more intimate small-ship atmosphere. Encore is a larger Seabourn ocean ship with approximately 600 guests." },
        { q: "Is Seabourn Quest worth the money?", a: "For travelers who prioritize intimate luxury, personalized service, all-suite accommodations and longer international voyages, Seabourn Quest can be worth the premium." },
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
    { label: "Ship style", value: "Intimate, all-suite luxury" },
    { label: "Passenger capacity", value: "Approximately 458 guests" },
    { label: "Atmosphere", value: "Quiet, elegant and personalized" },
    { label: "Accommodation", value: "All-suite" },
    { label: "Dining", value: "Multiple dining venues" },
    { label: "Private verandas", value: "Available in selected suite categories" },
    { label: "Pool", value: "Yes" },
    { label: "Spa", value: "Yes" },
    { label: "Fitness", value: "Yes" },
    { label: "Lounges", value: "Multiple" },
    { label: "Entertainment", value: "Live music, performances and enrichment" },
    { label: "Long voyages", value: "Yes" },
    { label: "World Cruises", value: "Yes, on selected schedules" },
    { label: "Best for", value: "Couples, solo travelers, experienced cruisers and long-voyage travelers" },
];

const whatFocusList = [
    "Personalized service",
    "Spacious suites",
    "Fine dining",
    "Relaxed public areas",
    "Destination exploration",
    "Flexible onboard experiences",
    "A strong sense of community",
];

const whyChooseList = [
    "Approximately 458 guests",
    "All-suite accommodations",
    "Personalized service",
    "Fine dining",
    "Multiple dining venues",
    "Relaxed public spaces",
    "Swimming pool",
    "Spa",
    "Fitness facilities",
    "Destination enrichment",
    "Longer voyages and World Cruise opportunities",
];

const suiteFeatures = ["Separate living and sleeping areas", "Sitting area", "Ocean views", "Private veranda", "In-suite bar", "Luxury bathroom", "Suite host service", "Additional living space in larger categories"];
const suiteCategories = ["Ocean View Suites", "Veranda Suites", "Penthouse Suites", "Larger premium suites"];
const suiteCompareList = ["Deck", "Location", "Square footage", "Veranda", "Living space", "Sleeping configuration", "Bathroom layout", "Proximity to public areas"];

const verandaUses = ["Enjoy morning coffee", "Read", "Watch the ocean", "Watch port arrivals", "Enjoy sunsets", "Relax between excursions"];

const bestSuiteCards = [
    { icon: Gem, title: "Best for Value", text: "A well-positioned suite offering the features you actually use can provide better value than simply selecting the largest category." },
    { icon: Waves, title: "Best for Scenic Cruising", text: "A veranda suite can be particularly appealing when the itinerary includes long stretches of scenic coastline." },
    { icon: Compass, title: "Best for Longer Voyages", text: "Consider a larger suite if you will be onboard for several weeks or months." },
    { icon: Home, title: "Best for Maximum Space", text: "The ship's premium suite categories provide additional living space and upgraded features." },
];

const worldCruiseSuitePriorities = ["Comfortable seating", "Storage", "Outdoor space", "Convenient location", "Natural light", "A layout that works for extended stays"];

const diningVenues = [
    "The Restaurant",
    "The Colonnade",
    "The Patio",
    "In-suite dining",
    "Other onboard dining experiences depending on the sailing"
];

const diningCards = [
    {
        icon: Utensils,
        title: "The Restaurant",
        desc: "The Restaurant provides the ship's primary fine-dining experience.",
        listLabel: "Guests can enjoy:",
        list: [
            "Multi-course meals",
            "Table service",
            "Changing menus",
            "Regional dishes",
            "Wine",
            "Desserts",
            "Destination-inspired cuisine"
        ],
        note: "It provides an elegant environment without requiring the formal atmosphere associated with traditional luxury cruising."
    },
    {
        icon: Sun,
        title: "The Colonnade",
        desc: "The Colonnade provides a more casual dining environment.",
        listLabel: "It can be particularly useful for:",
        list: [
            "Breakfast",
            "Lunch",
            "Casual dinners",
            "Relaxed meals between excursions"
        ],
        note: "Depending on the meal period, offerings may include a selection of regional and international dishes."
    },
    {
        icon: Home,
        title: "In-Suite Dining",
        desc: "In-suite dining is particularly useful on longer voyages.",
        listLabel: "There may be days when you simply want to:",
        list: [
            "Have breakfast privately",
            "Eat on your veranda",
            "Relax after a long excursion",
            "Enjoy a quiet dinner",
            "Take a break from public areas"
        ],
        note: "Having this flexibility can make an extended voyage feel more comfortable."
    },
    {
        icon: MessageCircle,
        title: "Is Seabourn Quest Dining Open Seating?",
        desc: "Seabourn's dining philosophy emphasizes flexibility and open seating.",
        listLabel: "Guests generally have flexibility over:",
        list: [
            "When you choose to dine",
            "With whom you dine",
            "Table sizing and locations",
            "No fixed assigned schedules"
        ],
        note: "This is particularly convenient on longer voyages because it allows travelers to structure their evenings differently from day to day."
    }
];

const publicAreaCardsA = [
    { icon: Users, title: "Seabourn Square", text: "Seabourn Square serves as an important social and service area. It provides a comfortable place to relax, meet fellow guests, enjoy coffee, get assistance, discuss travel plans and socialize.", list: ["Relax", "Meet fellow guests", "Enjoy coffee", "Get assistance", "Discuss travel plans", "Socialize"], note: "On a long voyage, spaces like this become particularly important because guests gradually develop familiar routines." },
    { icon: Waves, title: "Seabourn Quest Pool", text: "Quest has a pool area designed around relaxation rather than large-scale water attractions.", list: ["Swim", "Sunbathe", "Read", "Relax", "Enjoy a drink", "Spend time between excursions"], note: "The pool is more aligned with the ship's overall quiet-luxury philosophy." },
    { icon: Heart, title: "Spa and Wellness", text: "The onboard spa provides an opportunity to relax during the voyage. Depending on the services available, guests can enjoy treatments focused on:", list: ["Massage", "Skincare", "Beauty", "Relaxation", "Wellness"], note: "For longer cruises, having access to wellness facilities can be particularly valuable." },
];

const publicAreaCardsB = [
    { icon: Dumbbell, title: "Fitness Center", text: "Guests can maintain their exercise routine using the ship's fitness facilities. The fitness center can support:", list: ["Cardio", "Strength training", "Stretching", "General exercise"], note: "For World Cruise guests, maintaining a regular fitness routine can be an important part of life onboard." },
    { icon: Wine, title: "Bars and Lounges", text: "Quest provides intimate social spaces where guests can enjoy drinks, conversation and entertainment. The atmosphere tends to be:", list: ["Relaxed", "Elegant", "Social", "Quiet"], note: "This is a ship for travelers who enjoy conversation and connection rather than a high-energy nightlife scene." },
    { icon: MessageCircle, title: "Entertainment", text: "Entertainment is designed around the ship's intimate character. Depending on the sailing, programming can include:", list: ["Live music", "Performances", "Guest speakers", "Destination presentations", "Cultural programming", "Evening entertainment"], note: "The focus is on quality and atmosphere rather than large-scale production." },
];

const itineraryRegions = ["Mediterranean", "Northern Europe", "Scandinavia", "British Isles", "Caribbean", "South America", "Asia", "Australia and the Pacific", "Other long-haul destinations"];

const worldCruiseAppealList = ["Have significant travel time available", "Prefer slow travel", "Enjoy life onboard", "Want to unpack once", "Want to see multiple continents", "Prefer luxury over fast-paced independent travel"];

const worldCruiseFamiliarityList = ["Recognize fellow guests", "Develop relationships with crew", "Establish routines", "Become familiar with onboard spaces", "Feel part of a community"];

const worldCruiseDestinations = ["Asia", "Australia", "South Pacific", "Southeast Asia", "Indian Ocean", "Middle East", "Mediterranean", "Africa", "Europe", "South America"];

const worldCruiseFitYes = ["Prefer slow travel", "Have flexible schedules", "Enjoy long periods at sea", "Want to visit multiple continents", "Value luxury", "Prefer unpacking once", "Enjoy building relationships onboard", "Want an immersive travel experience"];
const worldCruiseFitNo = [
    "Need frequent changes of environment",
    "Prefer short, highly active vacations",
    "Dislike spending extended time at sea",
    "Require flexibility to change plans frequently",
    "Prefer independent travel over a structured itinerary",
    "Are uncomfortable with a single ship for months at a time",
    "Prefer fast-paced destination hopping over slow travel"
];


const encoreCompare = [
    { label: "Approx. guests", quest: "458", other: "600" },
    { label: "Ship type", quest: "Luxury ocean ship", other: "Luxury ocean ship" },
    { label: "Accommodation", quest: "All-suite", other: "All-suite" },
    { label: "Atmosphere", quest: "More intimate", other: "Intimate" },
    { label: "Dining", quest: "Multiple venues", other: "Multiple venues" },
    { label: "Best for", quest: "Smaller-ship enthusiasts & long voyages", other: "Luxury ocean cruising" },
    { label: "World Cruise appeal", quest: "Strong", other: "Depends on itinerary" },
];

const ovationCompare = [
    { label: "Approx. guests", quest: "458", other: "600" },
    { label: "Accommodation", quest: "All-suite", other: "All-suite" },
    { label: "Atmosphere", quest: "Very intimate", other: "Intimate" },
    { label: "Dining", quest: "Multiple venues", other: "Multiple venues" },
    { label: "Best for", quest: "Small-ship experience & long voyages", other: "Broader luxury ocean experience" },
    { label: "World Cruise suitability", quest: "Strong", other: "Depends on itinerary" },
];

const prosList = ["Smaller passenger capacity", "All-suite accommodations", "Intimate atmosphere", "Personalized service", "Fine dining", "Flexible dining", "Multiple public spaces", "Spa and fitness facilities", "Destination enrichment", "Strong option for longer voyages", "World Cruise potential", "Excellent choice for couples and solo travelers"];
const consList = ["Fewer onboard facilities than larger ships", "Less large-scale entertainment", "Smaller dining selection than mega-ships", "Limited family-focused amenities", "Premium pricing", "Long voyages require a greater time commitment"];

const worthFormula = ["A small luxury ship", "An all-suite accommodation", "Personalized service", "Fine dining", "Interesting destinations", "A comfortable home for longer voyages"];

const bookingTips = [
    { title: "Choose the Itinerary Carefully", text: "The itinerary is one of the most important parts of the experience." },
    { title: "Consider a Veranda", text: "A private outdoor space can be valuable on scenic routes and longer voyages." },
    { title: "Think About the Length of the Cruise", text: "Quest is particularly appealing for extended travel, but make sure the voyage length fits your lifestyle." },
    { title: "Review the Deck Plan", text: "Consider noise, traffic, elevators and proximity to public spaces." },
    { title: "Plan for Sea Days", text: "Long voyages can include substantial time onboard." },
    { title: "Consider Your Suite as Your Home", text: "For extended voyages, prioritize livability and storage rather than simply price." },
    { title: "Work with a Luxury Travel Advisor", text: "An experienced advisor can help compare World Cruise itineraries, suites, flights, pre- and post-cruise arrangements and current offers." },
];

const packingData = [
    { title: "Clothing", items: ["Smart-casual evening clothing", "Comfortable daytime clothing", "Destination-appropriate outfits", "Walking shoes", "Swimwear", "Lightweight layers", "Weather-specific clothing"] },
    { title: "Travel Essentials", items: ["Prescription and personal essentials", "Chargers", "Travel adapters", "Comfortable day bag", "Sunglasses", "Sunscreen", "Camera"] },
    { title: "For Long Voyages", items: ["Consider bringing enough variety to avoid feeling repetitive while still keeping luggage manageable", "Laundry services can also make extended travel easier"] },
];


/* ── Main Component ──────────────────────────────────────────────── */
const SeabournQuestGuide = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Quest: Ship Guide, Suites & World Cruises</title>
                <meta name="title" content="Seabourn Quest Ship Guide: Suites, Dining & World Cruises" />
                <meta
                    name="description"
                    content="Explore Seabourn Quest, including its intimate ship experience, suites, dining, amenities, itineraries, World Cruises and who this luxury ship is best suited for."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Quest <br /> Ship Guide</h1>

                    <p>
                        Seabourn Quest is one of Seabourn's intimate luxury ocean ships, offering a more personal cruising experience than the large vessels operated by mainstream cruise lines.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                With its relatively small guest capacity, all-suite accommodations, fine dining and personalized service, Quest is designed for travelers who prefer intimacy, relaxed luxury and destination-focused travel.
                            </p>
                            <p>
                                The ship is particularly interesting for travelers considering longer voyages and World Cruises, where the comfort of the ship becomes especially important because it serves as your home for an extended period.
                            </p>
                            <p>
                                This guide covers the Seabourn Quest ship experience, suites, restaurants, amenities, itineraries, World Cruises, pros and cons and who the ship is best suited for.
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

            {/* ── AT A GLANCE (NEW: Sbq-glance) ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbq-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Overview</span>
                        <h2 className="Sbc-h2">Seabourn Quest at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Quest</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceData.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row.label}</td>
                                        <td data-label="Seabourn Quest">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="Ssf-table-caption">
                        Note: Exact itineraries, World Cruise schedules, dining operations and
                        onboard offerings can change by sailing.
                    </p>
                </div>
            </section>

            {/* ── WHAT IS SEABOURN QUEST? ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Short Version</span>
                                <h2 className="Sbc-h2">What Is Seabourn Quest?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Seabourn Quest is an intimate luxury ocean cruise ship built around the
                                idea that luxury cruising doesn't need to mean a huge ship.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "12px" }}>
                                With approximately 458 guests, Quest provides a considerably smaller
                                environment than mainstream cruise ships.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ marginTop: "20px", backgroundColor: "var(--bg-white)" }}>
                                <h4 className="Sbc-highlights-title">The experience focuses on:</h4>
                                <ul className="Sbc-highlights-list">
                                    {whatFocusList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion" style={{ marginTop: "20px" }}>
                                For travelers who find large cruise ships overwhelming, Quest offers a
                                different approach.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Quest Ship Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE / WHAT MAKES IT DIFFERENT ──────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-why-choose">
                <div className="Sbc-container">
                    <div className="Sbq-why-grid">
                        <div className="Sbq-why-content-col">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Appeal</span>
                                <h2 className="Sbc-h2">Why Choose Seabourn Quest?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbq-why-intro-p">
                                The strongest reason to choose Quest is its smaller-ship atmosphere. You
                                don't have to navigate thousands of passengers to get to dinner, the pool
                                or a shore excursion. Instead, the experience is designed to feel more
                                personal.
                            </p>
                            <div className="Sbq-why-quote-box">
                                <h3 className="Sbq-why-quote-title">What Makes Quest Different?</h3>
                                <p className="Sbq-why-quote-text">
                                    Quest's relatively small size is one of its greatest advantages, providing a different rhythm to the vacation. It feels less like staying at a large floating resort and more like being part of a private luxury yacht community.
                                </p>
                            </div>
                        </div>

                        <div className="Sbq-why-features-col">
                            <h4 className="Sbq-why-features-title">Key Advantages Include:</h4>
                            <div className="Sbq-why-features-grid">
                                {[
                                    { icon: Users, text: "Approximately 458 guests" },
                                    { icon: Home, text: "All-suite accommodations" },
                                    { icon: Award, text: "Personalized service" },
                                    { icon: Utensils, text: "Fine dining & multiple venues" },
                                    { icon: Sparkles, text: "Spa & fitness facilities" },
                                    { icon: Ship, text: "World Cruise opportunities" }
                                ].map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="Sbq-why-feature-card">
                                            <div className="Sbq-why-feature-icon-wrapper">
                                                <Icon size={20} />
                                            </div>
                                            <span className="Sbq-why-feature-text">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN QUEST SUITES ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn Quest Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Quest offers all-suite accommodations, meaning guests don't book a traditional interior or standard cruise cabin. Suites provide a more comfortable home base during the voyage.
                        </p>
                    </div>

                    <div className="Sbc-suite-grid">
                        {/* Card 1: Suites */}
                        <div className="Sbc-suite-card">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Home size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Seabourn Quest Suites Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Seabourn Quest Suites</h3>
                                <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                    Depending on the category, features can include:
                                </p>
                                <ul className="Sbc-suite-feature-list">
                                    {suiteFeatures.map((f, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ marginTop: "22px" }}>
                                    For a long voyage, the difference between a standard cabin and a comfortable suite becomes especially important.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Balconies */}
                        <div className="Sbc-suite-card Sbc-suite-card-dark">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Waves size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Seabourn Quest Balcony Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Do Seabourn Quest Suites Have Balconies?</h3>
                                <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                    Selected Seabourn Quest suites feature private verandas. A private outdoor space can be especially useful on scenic itineraries and longer voyages.
                                </p>
                                <p className="Sbc-p" style={{ marginBottom: "12px", fontWeight: "600" }}>
                                    You can use the veranda to:
                                </p>
                                <ul className="Sbc-wintergarden-list">
                                    {verandaUses.map((item, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ marginTop: "22px" }}>
                                    For a World Cruise, having private outdoor space can become an even more meaningful upgrade because you're spending significantly more time onboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ── CTA 2 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Culinary Program</span>
                    <h3 className="Sbc-cta-title">Reserve Your Table on Seabourn Quest</h3>
                    <p className="Sbc-cta-text">
                        From The Restaurant to in-suite dining, let's plan your ideal onboard dining
                        experience.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan My Dining Experience
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SEABOURN QUEST SUITE CATEGORIES ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbq-suite-categories">
                <div className="Sbc-container">
                    <div className="Sbq-cats-grid">
                        
                        {/* Left Col: Categories */}
                        <div className="Sbq-cats-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Suite Choices</span>
                                <h2 className="Sbc-h2">Seabourn Quest <br /> Suite Categories</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbq-cats-intro">
                                The ship offers multiple suite categories, ranging from more compact accommodations to larger premium suites. Depending on the specific category, options can include:
                            </p>
                            
                            <div className="Sbq-cats-list-pills">
                                {["Ocean View Suites", "Veranda Suites", "Penthouse Suites", "Larger premium suites"].map((item, i) => (
                                    <div className="Sbq-cat-pill" key={i}>
                                        <Gem size={16} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="Sbq-cats-conclusion">
                                The best choice depends on your itinerary, budget and travel style.
                            </p>
                        </div>

                        {/* Right Col: Factors to compare */}
                        <div className="Sbq-cats-compare-box">
                            <h3 className="Sbq-cats-compare-title">When Comparing Suites, Pay Attention To:</h3>
                            <ul className="Sbq-cats-compare-ul">
                                {[
                                    "Deck",
                                    "Location",
                                    "Square footage",
                                    "Veranda",
                                    "Living space",
                                    "Sleeping configuration",
                                    "Bathroom layout",
                                    "Proximity to public areas"
                                ].map((item, i) => (
                                    <li key={i} className="Sbq-cats-compare-li">
                                        <ChevronRight size={16} strokeWidth={3} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST SUITE ON SEABOURN QUEST ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-best-suite">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing a Category</span>
                        <h2 className="Sbc-h2">What Is the Best Suite <br /> on Seabourn Quest?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The "best" suite depends on what you value most.
                        </p>
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

            {/* ── SUITE CHOICE ON A WORLD CRUISE ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-worldcruise-suite">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Home size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Suite as Your Home Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Long Voyage Comfort</span>
                                <h2 className="Sbc-h2">Why Suite Choice Matters on a World Cruise</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                A World Cruise changes how you think about accommodation. On a
                                seven-night cruise, you may spend relatively little time in your
                                suite. On a lengthy voyage, your suite becomes your home.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Consider prioritizing:</h4>
                                <ul className="Sbc-highlights-list">
                                    {worldCruiseSuitePriorities.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p" style={{ marginTop: "18px" }}>
                                For a long voyage, livability can be more important than simply
                                choosing the cheapest available suite.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── SEABOURN QUEST DINING ─────────────────────────────────── */}
            <section className="Sbc-section Sbq-dining-section" id="Sbq-dining">
                <div className="Sbc-container">

                    {/* Header */}
                    <div className="Sbq-dining-header">
                        <div className="Sbq-dining-header-left">
                            <span className="Sbc-eyebrow">Culinary Program</span>
                            <h2 className="Sbc-h2">Seabourn Quest Dining</h2>
                            <div className="Sbc-accent-line" style={{margin: '18px'}}></div>
                        </div>
                        <div className="Sbq-dining-header-right">
                            <p className="Sbq-dining-lead">
                                Dining is central to the Quest experience. The ship offers multiple dining environments, allowing guests to choose between refined meals and more relaxed options.
                            </p>
                            <div className="Sbq-dining-venue-tags">
                                {diningVenues.map((v, i) => (
                                    <span key={i} className="Sbq-dining-venue-tag">{v}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Dining Strips */}
                    <div className="Sbq-dining-strips">
                        {diningCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbq-dining-strip" key={i}>
                                    {/* Left: Number + Label + Description */}
                                    <div className="Sbq-dining-strip-left">
                                        <div className="Sbq-dining-strip-badge">
                                            <span className="Sbq-dining-strip-num">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <div className="Sbq-dining-strip-icon">
                                                <Icon size={20} />
                                            </div>
                                        </div>
                                        <div className="Sbq-dining-strip-info">
                                            <h3 className="Sbq-dining-strip-title">{card.title}</h3>
                                            <p className="Sbq-dining-strip-desc">{card.desc}</p>
                                            <p className="Sbq-dining-strip-note">{card.note}</p>
                                        </div>
                                    </div>
                                    {/* Right: Feature list box */}
                                    <div className="Sbq-dining-strip-right">
                                        <span className="Sbq-dining-strip-list-label">{card.listLabel}</span>
                                        <ul className="Sbq-dining-strip-list">
                                            {card.list.map((item, idx) => (
                                                <li key={idx}>
                                                    <ChevronRight size={14} strokeWidth={3} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            
            {/* ── CTA 3 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore and Discover</span>
                    <h3 className="Sbc-cta-title">Where Will Seabourn Quest Take You?</h3>
                    <p className="Sbc-cta-text">
                        From the Mediterranean to Asia and the Pacific, let's design your ideal
                        Seabourn Quest itinerary.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Itinerary
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PUBLIC AREAS ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbq-pub-section" id="Sbc-public-areas">
                <div className="Sbc-container">

                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard & Ashore</span>
                        <h2 className="Sbc-h2">Seabourn Quest Public Areas</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Quest's public spaces are designed to feel comfortable and intimate. Rather than enormous
                            atriums and large entertainment complexes, the ship provides areas centered around
                            conversation, relaxation, dining, scenic viewing, wellness and entertainment.
                        </p>
                    </div>

                    {/* Group A: Seabourn Square, Pool, Spa */}
                    <div className="Sbq-pub-grid">
                        {publicAreaCardsA.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbq-pub-card" key={i}>
                                    <div className="Sbq-pub-card-img">
                                        <div className="Sbq-pub-card-icon-wrap">
                                            <Icon size={28} />
                                        </div>
                                    </div>
                                    <div className="Sbq-pub-card-body">
                                        <h3 className="Sbq-pub-card-title">{card.title}</h3>
                                        <p className="Sbq-pub-card-text">{card.text}</p>
                                        <div className="Sbq-pub-card-list-box">
                                            <span className="Sbq-pub-card-list-label">Guests can:</span>
                                            <ul className="Sbq-pub-card-list">
                                                {card.list.map((item, idx) => (
                                                    <li key={idx}>
                                                        <ChevronRight size={13} strokeWidth={3} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="Sbq-pub-card-note">{card.note}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Group B: Fitness, Bars, Entertainment, Enrichment */}
                    <div className="Sbq-pub-grid Sbq-pub-grid-b">
                        {publicAreaCardsB.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbq-pub-card" key={i}>
                                    <div className="Sbq-pub-card-img Sbq-pub-card-img--alt">
                                        <div className="Sbq-pub-card-icon-wrap">
                                            <Icon size={28} />
                                        </div>
                                    </div>
                                    <div className="Sbq-pub-card-body">
                                        <h3 className="Sbq-pub-card-title">{card.title}</h3>
                                        <p className="Sbq-pub-card-text">{card.text}</p>
                                        <div className="Sbq-pub-card-list-box">
                                            <ul className="Sbq-pub-card-list">
                                                {card.list.map((item, idx) => (
                                                    <li key={idx}>
                                                        <ChevronRight size={13} strokeWidth={3} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="Sbq-pub-card-note">{card.note}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>


            {/* ── ITINERARIES ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbq-itin-section" id="Sbc-itineraries">
                <div className="Sbc-container">
                    
                    {/* Centered Header */}
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where Quest Sails</span>
                        <h2 className="Sbc-h2">Seabourn Quest Itineraries</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro" style={{ maxWidth: "800px", margin: "0 auto 40px" }}>
                            Quest's intimate design makes it suitable for a variety of international itineraries.
                            The ship's smaller size allows it to access boutique ports that larger vessels cannot reach.
                        </p>
                    </div>

                    {/* Full-width Grid */}
                    <div className="Sbq-itin-full-grid">
                        {itineraryRegions.map((r, i) => (
                            <div className="Sbq-itin-region-card" key={i}>
                                <div className="Sbq-itin-region-icon">
                                    <MapPin size={16} />
                                </div>
                                <span>{r}</span>
                            </div>
                        ))}
                    </div>

                    {/* Centered Footnote Callout */}
                    <div className="Sbq-itin-footer-callout">
                        <Compass size={20} />
                        <span>Depending on the season and current schedule, itineraries can include these regions. Because schedules change annually, travelers should verify active routes when planning.</span>
                    </div>

                </div>
            </section>



            {/* ── WORLD CRUISES OVERVIEW ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-world-cruises">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">

                        {/* Left: Content */}
                        <div className="Sbc-what-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Long Voyages</span>
                                <h2 className="Sbc-h2">Seabourn Quest World Cruises</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                One of the most interesting reasons to consider Quest is its suitability for long voyages and World Cruises. A World Cruise allows travelers to visit multiple regions without repeatedly flying between destinations. Instead, the ship becomes your home while you travel across oceans and continents.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ marginTop: "24px", backgroundColor: "var(--bg-soft)" }}>
                                <h4 className="Sbc-highlights-title">This can be particularly appealing to travelers who:</h4>
                                <ul className="Sbc-highlights-list">
                                    {worldCruiseAppealList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: Image placeholder */}
                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Quest World Cruise Image Placeholder</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WORLD CRUISE DESTINATIONS ─────────────────────────────── */}
            <section className="Sbc-section Sbq-itin-section" id="Sbc-worldcruise-destinations">
                <div className="Sbc-container">
                    
                    {/* Centered Header */}
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Global Routing</span>
                        <h2 className="Sbc-h2">What Destinations Can a World Cruise Visit?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro" style={{ maxWidth: "800px", margin: "0 auto 40px" }}>
                            World Cruise itineraries connect multiple continents and regions in a single extended voyage, allowing travelers to see the world without repeatedly flying between destinations.
                        </p>
                    </div>

                    {/* Full-width Grid */}
                    <div className="Sbq-itin-full-grid">
                        {worldCruiseDestinations.map((r, i) => (
                            <div className="Sbq-itin-region-card" key={i}>
                                <div className="Sbq-itin-region-icon">
                                    <MapPin size={16} />
                                </div>
                                <span>{r}</span>
                            </div>
                        ))}
                    </div>

                    {/* Centered Footnote Callout */}
                    <div className="Sbq-itin-footer-callout">
                        <Compass size={20} />
                        <span>World Cruise itineraries vary annually. The actual routing, ports and length should always be confirmed against active schedules for the specific sailing year.</span>
                    </div>

                </div>
            </section>

            {/* ── CTA FOR ITINERARIES ─────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore and Discover</span>
                    <h3 className="Sbc-cta-title">Where Will Seabourn Quest Take You?</h3>
                    <p className="Sbc-cta-text">
                        From the Mediterranean to Asia and the Pacific, let's design your ideal Seabourn Quest itinerary.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Itinerary
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHY CHOOSE QUEST FOR A WORLD CRUISE ───────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-worldcruise-why">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">

                        {/* Left: Image */}
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">World Cruise Community Image Placeholder</span>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">A Familiar Community</span>
                                <h2 className="Sbc-h2">Why Choose Seabourn Quest for a World Cruise?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                The smaller ship can be a major advantage on an extended journey. A
                                smaller passenger environment can make the voyage feel more personal.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">You are more likely to:</h4>
                                <ul className="Sbc-highlights-list">
                                    {worldCruiseFamiliarityList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

 

            {/* ── WHO IS A WORLD CRUISE BEST FOR ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-worldcruise-fit">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Is a Seabourn Quest World Cruise Best For?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card Sbc-atmos-card--yes">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--yes">
                                    <Check size={20} strokeWidth={2.5} />
                                </div>
                                <div className="Sbc-atmos-card-title">A World Cruise Can Be an Excellent Fit for Travelers Who</div>
                            </div>
                            <ul>
                                {worldCruiseFitYes.map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--yes"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-atmos-card Sbc-atmos-card--no">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--no">
                                    <X size={20} strokeWidth={2.5} />
                                </div>
                                <div className="Sbc-atmos-card-title">It Is Less Suitable for Travelers Who</div>
                            </div>
                            <ul>
                                {worldCruiseFitNo.map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--no"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRAVELER PROFILES ──────────────────────────────────────── */}
            <section className="Sbc-section Sbq-prof-section" id="Sbq-traveler-profiles">
                <div className="Sbc-container">

                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Traveler Profiles</span>
                        <h2 className="Sbc-h2">Who Is Seabourn Quest Best For?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Quest suits a specific type of traveler. Whether you're planning a romantic voyage, a multigenerational adventure, or your first step into luxury cruising, here's how the ship fits different profiles.
                        </p>
                    </div>

                    <div className="Sbq-prof-rows">

                        {/* Row 1: Couples — panel left */}
                        <div className="Sbq-prof-row">
                            <div className="Sbq-prof-panel Sbq-prof-panel--1">
                                <span className="Sbq-prof-num">01</span>
                                <div className="Sbq-prof-panel-icon"><Heart size={36} /></div>
                                <span className="Sbq-prof-panel-label">Couples</span>
                            </div>
                            <div className="Sbq-prof-content">
                                <h3 className="Sbq-prof-title">Seabourn Quest for Couples</h3>
                                <p className="Sbq-prof-text">
                                    Quest is particularly well suited to couples. Its intimate size, suites, dining and destination-focused itineraries create a natural environment for romantic travel.
                                </p>
                                <div className="Sbq-prof-tag-group">
                                    <span className="Sbq-prof-tag-label">Especially appealing for:</span>
                                    <div className="Sbq-prof-tags">
                                        {["Anniversaries", "Retirement celebrations", "Milestone birthdays", "Extended vacations", "World Cruises"].map((t, i) => (
                                            <span key={i} className="Sbq-prof-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="Sbq-prof-note">
                                    For couples considering a long voyage, the ship's suite and onboard atmosphere become especially important.
                                </p>
                            </div>
                        </div>

                        {/* Row 2: Families — panel right */}
                        <div className="Sbq-prof-row Sbq-prof-row--reverse">
                            <div className="Sbq-prof-content">
                                <h3 className="Sbq-prof-title">Seabourn Quest for Families</h3>
                                <p className="Sbq-prof-text">
                                    Quest is not primarily designed as a family resort ship. However, adventurous multigenerational families may enjoy the ship if everyone values the right things.
                                </p>
                                <div className="Sbq-prof-tag-group">
                                    <span className="Sbq-prof-tag-label">Best when the family values:</span>
                                    <div className="Sbq-prof-tags">
                                        {["Cultural travel", "Dining", "Destination exploration", "Relaxation", "Longer journeys"].map((t, i) => (
                                            <span key={i} className="Sbq-prof-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="Sbq-prof-note">
                                    Families should review current age requirements and onboard policies before booking.
                                </p>
                            </div>
                            <div className="Sbq-prof-panel Sbq-prof-panel--2">
                                <span className="Sbq-prof-num">02</span>
                                <div className="Sbq-prof-panel-icon"><Home size={36} /></div>
                                <span className="Sbq-prof-panel-label">Families</span>
                            </div>
                        </div>

                        {/* Row 3: First-Time Luxury Cruisers — panel left */}
                        <div className="Sbq-prof-row">
                            <div className="Sbq-prof-panel Sbq-prof-panel--3">
                                <span className="Sbq-prof-num">03</span>
                                <div className="Sbq-prof-panel-icon"><Star size={36} /></div>
                                <span className="Sbq-prof-panel-label">First-Time Luxury Cruisers</span>
                            </div>
                            <div className="Sbq-prof-content">
                                <h3 className="Sbq-prof-title">Is Seabourn Quest Good for First-Time Luxury Cruisers?</h3>
                                <p className="Sbq-prof-text">
                                    Yes. Quest can be an excellent introduction to luxury cruising for travelers who value an intimate environment. The experience includes:
                                </p>
                                <div className="Sbq-prof-tag-group">
                                    <span className="Sbq-prof-tag-label">What's included:</span>
                                    <div className="Sbq-prof-tags">
                                        {["All-suite accommodation", "Personalized service", "Fine dining", "Flexible dining", "Elegant public areas", "Destination enrichment"].map((t, i) => (
                                            <span key={i} className="Sbq-prof-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="Sbq-prof-note">
                                    Travelers should understand that Seabourn's concept is quiet luxury, not a large resort experience.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── QUEST VS ENCORE COMPARISON ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbq-vs-encore">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ship Comparison</span>
                        <h2 className="Sbc-h2">Seabourn Quest vs. <br /> Seabourn Encore</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Quest is smaller than Encore and offers an even more intimate experience.
                            Compare the features of each ship below.
                        </p>
                    </div>

                    <div className="Sbq-compare-block">
                        <div className="Ssf-table-wrap">
                            <table className="Ssf-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Seabourn Quest</th>
                                        <th>Seabourn Encore</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {encoreCompare.map((row, i) => (
                                        <tr key={i}>
                                            <td data-label="Feature">{row.label}</td>
                                            <td data-label="Seabourn Quest">{row.quest}</td>
                                            <td data-label="Seabourn Encore">{row.other}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                      
                    </div>
                </div>
            </section>

            {/* ── QUEST VS OVATION COMPARISON ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbq-vs-ovation">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ship Comparison</span>
                        <h2 className="Sbc-h2">Seabourn Quest vs. <br /> Seabourn Ovation</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Quest and Ovation both offer all-suite luxury, but Quest provides the smaller passenger environment.
                            Compare their key specifications.
                        </p>
                    </div>

                    <div className="Sbq-compare-block">
                        <div className="Ssf-table-wrap">
                            <table className="Ssf-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Seabourn Quest</th>
                                        <th>Seabourn Ovation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ovationCompare.map((row, i) => (
                                        <tr key={i}>
                                            <td data-label="Feature">{row.label}</td>
                                            <td data-label="Seabourn Quest">{row.quest}</td>
                                            <td data-label="Seabourn Ovation">{row.other}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
            </section>

            {/* ── CTA FOR COMPARISON ──────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Find Your Perfect Ship</span>
                    <h3 className="Sbc-cta-title">Compare Seabourn Suites and Sailings</h3>
                    <p className="Sbc-cta-text">
                        Need help choosing between Seabourn Quest, Encore, or Ovation? Let's discuss which ship best fits your travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get Expert Advice
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PROS AND CONS ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Quest Pros and Cons</h2>
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

    
            {/* ── IS SEABOURN QUEST WORTH IT ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        
                        {/* Left Side: Content */}
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Value Proposition</span>
                                <h2 className="Sbc-h2">Is Seabourn Quest Worth It?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            
                            <p className="Sbc-p">
                                For travelers who value intimacy, personalized service and slow travel, Seabourn Quest can be an excellent choice.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "12px" }}>
                                Its strongest value comes from the overall environment. You're not paying for hundreds of attractions.
                            </p>
                            
                            <div className="Sbc-brand-highlights" style={{ marginTop: "20px", backgroundColor: "var(--bg-white)" }}>
                                <h4 className="Sbc-highlights-title">You're paying for:</h4>
                                <ul className="Sbc-highlights-list">
                                    {[
                                        "A small luxury ship.",
                                        "An all-suite accommodation.",
                                        "Personalized service.",
                                        "Fine dining.",
                                        "Interesting destinations.",
                                        "A comfortable home for longer voyages."
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <p className="Sbc-p Sbc-what-conclusion" style={{ marginTop: "20px" }}>
                                That makes Quest particularly compelling for travelers who want to travel extensively without constantly changing hotels and flights.
                            </p>
                        </div>

                        {/* Right Side: Image Placeholder */}
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Quest Value Image Placeholder</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* ── BOOKING TIPS (NEW: Sbq-tips) ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbq-booking-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Get It Right</span>
                        <h2 className="Sbc-h2">Tips for Booking Seabourn Quest</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbq-tips-grid">
                        {bookingTips.map((tip, i) => (
                            <div className="Sbq-tip-card" key={i}>
                                <div className="Sbq-tip-number">{String(i + 1).padStart(2, "0")}</div>
                                <div>
                                    <h3 className="Sbq-tip-title">{tip.title}</h3>
                                    <p className="Sbq-tip-text">{tip.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PACKING LIST ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-packing">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">World Cruise Prep</span>
                        <h2 className="Sbc-h2">What to Pack for a Seabourn Quest World Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            A World Cruise requires a different packing strategy from a short
                            vacation. Consider:
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
                            <strong>Laundry services</strong> can also make extended travel easier.
                        </p>
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
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Quest</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking Seabourn Quest.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>


            {/* ── FINAL VERDICT ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Quest a Good Ship?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Quest is an excellent choice for travelers who value a truly
                            intimate luxury cruise experience. Its approximately 458-guest
                            environment creates a more personal atmosphere than many larger luxury
                            ships.
                        </p>
                        <p className="Sbc-p">
                            The combination of all-suite accommodations, fine dining, personalized
                            service, destination enrichment and longer-voyage potential makes Quest
                            particularly attractive to experienced travelers. Its appeal becomes even
                            stronger for travelers considering a World Cruise, where the ship
                            effectively becomes a temporary home.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If you prefer small ships, slow
                                travel, excellent service and meaningful destinations over
                                large-scale entertainment, Seabourn Quest deserves serious
                                consideration.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Quest Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournQuestGuide;