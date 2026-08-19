import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Wine,
    Waves,
    Snowflake,
    Landmark,
    Heart,
    Utensils,
    Compass,
    Star,
    MapPin,
    Award,
    Users,
    Ship,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "../Seabournships/Seabournships.css";
import "./SeabournSignatureExperiences.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/signature-experiences/",
            name: "Seabourn Signature Experiences: Caviar, Marina Day & More",
            headline: "Seabourn Signature Experiences: The Luxury Moments That Set Seabourn Apart",
            description:
                "Discover Seabourn signature experiences including Caviar in the Surf, Marina Day, Caviar on the Ice and Evening at Ephesus.",
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#breadcrumb",
            },
            mainEntity: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#experiences",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Signature Experiences", item: "https://www.tripsandships.com/seabourn-cruises/signature-experiences/" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#experiences",
            name: "Seabourn Signature Experiences",
            description:
                "Distinctive Seabourn experiences including Caviar in the Surf, Marina Day, Caviar on the Ice and Evening at Ephesus.",
            numberOfItems: 4,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Caviar in the Surf", description: "A Seabourn signature experience combining caviar and Champagne with a relaxed beach setting on applicable itineraries." },
                { "@type": "ListItem", position: 2, name: "Marina Day", description: "A water-focused Seabourn experience using the ship's marina platform for activities such as swimming, kayaking and paddleboarding when conditions permit." },
                { "@type": "ListItem", position: 3, name: "Caviar on the Ice", description: "A Seabourn caviar experience associated with expedition and polar environments, combining luxury hospitality with icy surroundings." },
                { "@type": "ListItem", position: 4, name: "Evening at Ephesus", description: "A special Seabourn destination experience centered on the ancient archaeological site of Ephesus in an evening setting." },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#faq",
            mainEntity: [
                { "@type": "Question", name: "What are Seabourn signature experiences?", acceptedAnswer: { "@type": "Answer", text: "Seabourn signature experiences are distinctive activities and events associated with the Seabourn luxury cruise experience. Examples include Caviar in the Surf, Marina Day, Caviar on the Ice and Evening at Ephesus." } },
                { "@type": "Question", name: "What is Caviar in the Surf on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Caviar in the Surf is a Seabourn signature experience that combines caviar and Champagne with a relaxed beach setting on applicable itineraries." } },
                { "@type": "Question", name: "Is Caviar in the Surf included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Availability and inclusion depend on the specific itinerary and operating conditions. Travelers should confirm the details for their sailing before assuming the experience is available." } },
                { "@type": "Question", name: "What is Seabourn Marina Day?", acceptedAnswer: { "@type": "Answer", text: "Marina Day is a water-focused experience that uses the ship's marina platform to give guests opportunities to interact more directly with the surrounding water." } },
                { "@type": "Question", name: "What activities are available during Marina Day?", acceptedAnswer: { "@type": "Answer", text: "Activities can vary by ship, itinerary and conditions, but may include swimming, kayaking, paddleboarding and other water-based recreation." } },
                { "@type": "Question", name: "What is Caviar on the Ice?", acceptedAnswer: { "@type": "Answer", text: "Caviar on the Ice combines Seabourn's caviar tradition with an expedition environment, particularly associated with cold-weather and polar cruising." } },
                { "@type": "Question", name: "Is Caviar on the Ice offered on Antarctica cruises?", acceptedAnswer: { "@type": "Answer", text: "Caviar on the Ice is associated with Seabourn's expedition experience, including polar voyages. Availability should be confirmed for the specific sailing." } },
                { "@type": "Question", name: "What is Evening at Ephesus?", acceptedAnswer: { "@type": "Answer", text: "Evening at Ephesus is a special destination experience centered on the ancient archaeological site of Ephesus, providing an opportunity to experience the destination in an evening setting." } },
                { "@type": "Question", name: "Are Seabourn signature experiences excursions?", acceptedAnswer: { "@type": "Answer", text: "Some are destination-based experiences, while others are onboard or ship-based experiences. They differ from standard shore excursions because they are designed around distinctive moments and settings." } },
                { "@type": "Question", name: "Are Seabourn signature experiences guaranteed?", acceptedAnswer: { "@type": "Answer", text: "No. Outdoor, destination and expedition experiences can be affected by weather, local conditions, safety considerations and operational requirements." } },
                { "@type": "Question", name: "Which Seabourn signature experience is best for foodies?", acceptedAnswer: { "@type": "Answer", text: "Caviar in the Surf and Caviar on the Ice are particularly appealing to food-focused travelers because they combine Seabourn's culinary traditions with unusual settings." } },
                { "@type": "Question", name: "Which Seabourn signature experience is best for history lovers?", acceptedAnswer: { "@type": "Answer", text: "Evening at Ephesus is the natural choice for travelers interested in ancient history, archaeology and Mediterranean culture." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reuses Sbc-faq-* classes) ─────────────────────── */
function SseFAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What are Seabourn signature experiences?", a: "Seabourn signature experiences are distinctive activities and events associated with the Seabourn luxury cruise experience. Examples include Caviar in the Surf, Marina Day, Caviar on the Ice and Evening at Ephesus." },
        { q: "What is Caviar in the Surf on Seabourn?", a: "Caviar in the Surf is a Seabourn signature experience that combines caviar and Champagne with a relaxed beach setting on applicable itineraries." },
        { q: "Is Caviar in the Surf included on Seabourn?", a: "Availability and inclusion depend on the specific itinerary and operating conditions. Confirm the details for your sailing before assuming the experience is available." },
        { q: "What is Seabourn Marina Day?", a: "Marina Day is a water-focused experience that uses the ship's marina platform to give guests opportunities to interact more directly with the surrounding water." },
        { q: "What activities are available during Marina Day?", a: "Activities can vary by ship, itinerary and conditions, but may include swimming, kayaking, paddleboarding and other water-based recreation." },
        { q: "What is Caviar on the Ice?", a: "Caviar on the Ice combines Seabourn's caviar tradition with an expedition environment, particularly associated with cold-weather and polar cruising." },
        { q: "Is Caviar on the Ice offered on Antarctica cruises?", a: "Caviar on the Ice is associated with Seabourn's expedition experience, including polar voyages. Availability should be confirmed for the specific sailing." },
        { q: "What is Evening at Ephesus?", a: "Evening at Ephesus is a special destination experience centered on the ancient archaeological site of Ephesus, providing an opportunity to experience the destination in an evening setting." },
        { q: "Are Seabourn signature experiences excursions?", a: "Some are destination-based experiences, while others are onboard or ship-based experiences. They differ from standard shore excursions because they are designed around distinctive moments and settings." },
        { q: "Are Seabourn signature experiences guaranteed?", a: "No. Outdoor, destination and expedition experiences can be affected by weather, local conditions, safety considerations and operational requirements." },
        { q: "Which Seabourn signature experience is best for foodies?", a: "Caviar in the Surf and Caviar on the Ice are particularly appealing to food-focused travelers because they combine Seabourn's culinary traditions with unusual settings." },
        { q: "Which Seabourn signature experience is best for history lovers?", a: "Evening at Ephesus is the natural choice for travelers interested in ancient history, archaeology and Mediterranean culture." },
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
const glanceRows = [
    { exp: "Caviar in the Surf", special: "Caviar served in a beach setting", best: "Foodies, couples, beach lovers" },
    { exp: "Marina Day", special: "Water-focused experience using the ship's marina", best: "Active travelers, families, water lovers" },
    { exp: "Caviar on the Ice", special: "Caviar experience in an icy expedition setting", best: "Expedition travelers, Antarctica guests" },
    { exp: "Evening at Ephesus", special: "Special evening experience at the ancient site", best: "History lovers, culture travelers, couples" },
];

const compareRows = [
    { trad: "Primarily sightseeing", sig: "Experience-focused" },
    { trad: "Often daytime", sig: "Can occur at unique times" },
    { trad: "Destination tour", sig: "Destination + atmosphere" },
    { trad: "Guide-led", sig: "Event-oriented" },
    { trad: "Educational", sig: "Emotional and experiential" },
    { trad: "Many destinations", sig: "Select signature occasions" },
];

const bestForCards = [
    { icon: Utensils, title: "Best for Foodies", exp: "Caviar in the Surf", text: "A relaxed combination of beach, caviar and Champagne." },
    { icon: Waves, title: "Best for Active Travelers", exp: "Marina Day", text: "A water-focused experience that lets you get closer to the sea." },
    { icon: Snowflake, title: "Best for Expedition Travelers", exp: "Caviar on the Ice", text: "A memorable combination of luxury and polar surroundings." },
    { icon: Landmark, title: "Best for History Lovers", exp: "Evening at Ephesus", text: "A special way to experience one of the Mediterranean's most important archaeological sites." },
];

const personaCards = [
    {
        icon: Heart,
        title: "Signature Experiences for Couples",
        text: "These experiences can be particularly memorable for couples.",
        list: ["Enjoying Champagne beside the ocean", "Sharing caviar on a beach", "Exploring icy landscapes together", "Walking through an ancient archaeological site in the evening"],
        note: "For anniversaries, honeymoons and milestone trips, these experiences can become part of the story you remember long after the cruise ends.",
    },
    {
        icon: Landmark,
        title: "Signature Experiences for History Lovers",
        text: "If history is your priority, Evening at Ephesus is the obvious standout. However, Seabourn's destination-focused approach extends beyond one experience.",
        list: ["Ancient civilizations", "Archaeological sites", "Historic cities", "Cultural landmarks", "Museums", "Local traditions"],
        note: "The best itinerary depends on which historical destinations interest you most.",
    },
    {
        icon: Compass,
        title: "Signature Experiences for Adventure Travelers",
        text: "Adventure travelers may be particularly interested in:",
        list: ["Marina Day", "Caviar on the Ice", "Expedition itineraries", "Zodiac experiences", "Remote destinations", "Wildlife encounters"],
        note: "These experiences demonstrate that luxury cruising doesn't necessarily mean remaining indoors or following a traditional sightseeing itinerary.",
    },

];

const planSteps = [
    { title: "Identify the experience", text: "Decide whether you're most interested in: Caviar in the Surf, Marina Day, Caviar on the Ice or Evening at Ephesus." },
    { title: "Find the relevant itinerary", text: "Not every Seabourn voyage will offer every experience." },
    { title: "Check the ship", text: "Some experiences are associated with specific ships or types of voyages." },
    { title: "Consider the season", text: "Weather can significantly influence outdoor experiences." },
    { title: "Plan your suite around the trip", text: "If you are spending more time outdoors and on excursions, your suite priorities may differ from someone planning a relaxing sea-day vacation." },
];

const tips = [
    { title: "Don't treat them as your only reason for booking", text: "The experience is important, but the itinerary should still be the primary consideration." },
    { title: "Consider the destination", text: "An experience is most meaningful when it complements the place you're visiting." },
    { title: "Keep weather in mind", text: "Outdoor experiences are naturally dependent on conditions." },
    { title: "Bring the right gear", text: "For marina or expedition activities, appropriate clothing and footwear are important." },
    { title: "Ask your travel advisor", text: "A Seabourn specialist can help determine which itineraries are most likely to match your preferred experiences." },
];

const philosophyLines = [
    { name: "Caviar in the Surf", text: "Turns a beach visit into a culinary occasion." },
    { name: "Marina Day", text: "Turns the ship's relationship with the sea into an activity." },
    { name: "Caviar on the Ice", text: "Connects fine dining with polar exploration." },
    { name: "Evening at Ephesus", text: "Combines history and atmosphere." },
];

const advantagesList = ["Distinctive experiences", "Strong connection to destinations", "Memorable culinary moments", "Small-ship atmosphere", "Blend of luxury and adventure", "Excellent opportunities for couples", "Unique photography opportunities", "Particularly appealing for repeat luxury cruisers"];
const considerationsList = ["Not every experience is available on every sailing", "Weather can affect outdoor events", "Expedition activities depend on local conditions", "Some experiences may have specific participation requirements", "Exact formats can change", "Travelers should verify availability for their sailing"];



const signatureExperiencesData = [
    {
        id: "caviar-surf",
        tabTitle: "Caviar in the Surf",
        icon: Wine,
        title: "1. Caviar in the Surf",
        lead: "Caviar in the Surf is one of Seabourn's most recognizable signature experiences. The concept combines one of Seabourn's best-known culinary traditions—caviar—with a relaxed beach setting. Instead of enjoying caviar only in a restaurant or lounge, guests can experience it beside the water, creating a distinctly Seabourn moment.",
        sections: [
            {
                title: "What Is Caviar in the Surf?",
                type: "formula",
                formula: "Beach + ocean + Champagne + caviar + Seabourn's relaxed luxury atmosphere.",
                text: "Guests can enjoy the experience while spending time on a beautiful beach during an appropriate itinerary. The result is deliberately different from traditional formal dining. You may be dressed for the beach rather than an elegant restaurant, yet still enjoying one of luxury cruising's most iconic foods."
            },
            {
                title: "Why Caviar in the Surf Is Memorable",
                type: "list",
                listIntro: "The appeal comes from the contrast. Caviar is traditionally associated with elegant restaurants, formal events and sophisticated dining. Seabourn places it in a much more relaxed environment. The experience can include:",
                listItems: ["Beach time", "Caviar", "Champagne", "Ocean views", "Casual socializing", "Seabourn service"],
                listOutro: "It's an excellent example of how Seabourn blends luxury with informality."
            },
            {
                title: "Who Will Love Caviar in the Surf?",
                type: "simple-list",
                listIntro: "This experience is particularly appealing to:",
                listItems: [
                    "Couples",
                    "Foodies",
                    "Beach lovers",
                    "Luxury travelers",
                    "First-time Seabourn guests",
                    "Travelers looking for memorable vacation photographs",
                    "Guests who enjoy unusual culinary experiences"
                ]
            }
        ],
        placeholderText: "Caviar in the Surf Beach Event"
    },
    {
        id: "marina-day",
        tabTitle: "Marina Day",
        icon: Waves,
        title: "2. Marina Day",
        lead: "Marina Day highlights another side of Seabourn: the ability to turn the ship itself into part of the destination experience. On applicable itineraries and weather conditions, the ship's marina platform can provide access to the water for recreational activities. Instead of simply looking at the sea from the ship, guests can get closer to it.",
        sections: [
            {
                title: "What Happens During Marina Day?",
                type: "list",
                listIntro: "The exact activities can vary based on the ship, itinerary, local conditions and safety requirements. Possible water-based activities may include:",
                listItems: ["Swimming", "Kayaking", "Paddleboarding", "Water activities", "Relaxing beside the water", "Enjoying the ship's marina environment"],
                listOutro: "The marina is designed to create a more direct connection between guests and the surrounding water."
            },
            {
                title: "Why Marina Day Is Different",
                type: "crossed-list",
                listIntro: "Traditional cruise ships often treat the ocean as scenery. Marina Day makes the water part of the experience. For travelers who enjoy active vacations, this can provide a welcome change from:",
                listItems: ["Poolside relaxation", "Restaurant dining", "Traditional shore excursions", "Guided sightseeing"],
                listOutro: "It offers an opportunity to experience the cruise environment from a different perspective."
            },
            {
                title: "Who Is Marina Day Best For?",
                type: "simple-list",
                listIntro: "Marina Day can be particularly appealing to:",
                listItems: [
                    "Active travelers",
                    "Couples",
                    "Families",
                    "Water-sports enthusiasts",
                    "Adventure travelers",
                    "Travelers who enjoy swimming",
                    "Guests who prefer experiential travel"
                ]
            }
        ],
        placeholderText: "Marina Platform Water Activities"
    },
    {
        id: "caviar-ice",
        tabTitle: "Caviar on the Ice",
        icon: Snowflake,
        title: "3. Caviar on the Ice",
        lead: "Caviar on the Ice brings Seabourn's caviar tradition into an entirely different environment. Rather than a warm-weather beach setting, this experience is associated with cold-weather and expedition cruising. The contrast between luxury cuisine and an icy destination is part of the appeal.",
        sections: [
            {
                title: "What Is Caviar on the Ice?",
                type: "list",
                listIntro: "Caviar on the Ice combines:",
                listItems: ["Caviar", "An expedition environment", "Ice and dramatic scenery", "Seabourn hospitality", "A distinctly remote setting"],
                listOutro: "For travelers exploring polar regions, it creates a memorable connection between the destination and the onboard culinary experience."
            },
            {
                title: "Why Caviar on the Ice Is Special",
                type: "formula",
                formula: "remote wilderness + ultra-luxury hospitality.",
                text: "An expedition cruise is fundamentally about reaching places that are difficult to access. Caviar on the Ice reinforces that idea. Instead of simply enjoying a luxury meal in a restaurant, you're experiencing a refined culinary tradition in an extraordinary environment. The juxtaposition is what makes the experience memorable:"
            },
            {
                title: "Caviar on the Ice and Antarctica",
                type: "list",
                listIntro: "For travelers considering a Seabourn Antarctica voyage, experiences such as Caviar on the Ice demonstrate how the line combines expedition travel with luxury. An Antarctica journey can involve:",
                listItems: [
                    "Zodiac exploration",
                    "Wildlife viewing",
                    "Ice landscapes",
                    "Expedition activities",
                    "Remote landings",
                    "Educational programming",
                    "Luxury dining"
                ],
                listOutro: "Caviar on the Ice adds another dimension to that experience."
            },
            {
                title: "Who Will Love Caviar on the Ice?",
                type: "simple-list",
                listIntro: "This experience is particularly suited to:",
                listItems: [
                    "Antarctica travelers",
                    "Expedition cruisers",
                    "Photographers",
                    "Luxury adventure travelers",
                    "Foodies",
                    "Couples",
                    "Travelers seeking unusual experiences"
                ]
            }
        ],
        placeholderText: "Polar Expedition Caviar Experience"
    },
    {
        id: "ephesus",
        tabTitle: "Evening at Ephesus",
        icon: Landmark,
        title: "4. Evening at Ephesus",
        lead: "Evening at Ephesus represents the destination-focused side of Seabourn's signature experiences. Rather than simply visiting a historic site during a daytime excursion, the experience creates an opportunity to experience Ephesus in an evening setting. The atmosphere can be dramatically different from a conventional sightseeing visit.",
        sections: [
            {
                title: "Why Ephesus Is Significant",
                type: "list",
                listIntro: "Ephesus is one of the most important archaeological sites in the Mediterranean. The ancient city is associated with:",
                listItems: [
                    "Classical history",
                    "Roman civilization",
                    "Ancient architecture",
                    "Archaeology",
                    "The Library of Celsus",
                    "The Great Theater",
                    "Ancient Greek and Roman culture"
                ],
                listOutro: "For history-focused travelers, it is already a remarkable destination. An evening experience can add another layer to the visit."
            },
            {
                title: "What Makes Evening at Ephesus Different?",
                type: "formula",
                formula: "destination + atmosphere + culture + hospitality.",
                text: "The appeal is not simply seeing the archaeological site. It is experiencing an important historical destination in a special setting. Seabourn's approach is to combine:"
            },
            {
                title: "Who Will Love Evening at Ephesus?",
                type: "simple-list",
                listIntro: "This experience is especially attractive to:",
                listItems: [
                    "History enthusiasts",
                    "Couples",
                    "Culture travelers",
                    "Photographers",
                    "Architecture enthusiasts",
                    "Mediterranean travelers",
                    "First-time visitors to Ephesus"
                ]
            }
        ],
        placeholderText: "Classical Evening Concert at Ephesus"
    }
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournSignatureExperiences = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeTabIdx, setActiveTabIdx] = useState(0);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Signature Experiences: Caviar, Marina Day & More</title>
                <meta name="title" content="Seabourn Signature Experiences: Caviar in the Surf & More" />
                <meta
                    name="description"
                    content="Discover Seabourn signature experiences including Caviar in the Surf, Marina Day, Caviar on the Ice and Evening at Ephesus."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO (custom Sbc-hero classes) ──────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Signature Experiences <br /> The Luxury Moments That Set Seabourn Apart</h1>

                    <p>
                        A luxury cruise isn't defined only by its suite, restaurant or itinerary.
                    </p>
                    <p>
                        Sometimes, the most memorable moments are the experiences that could happen only because you're sailing with Seabourn.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Seabourn is known for creating distinctive experiences that combine its small-ship atmosphere, culinary traditions, destination expertise and relaxed approach to luxury.
                            </p>
                            <p>
                                Among the most recognizable are Caviar in the Surf, Marina Day, Caviar on the Ice and Evening at Ephesus.
                            </p>
                            <p>
                                These experiences aren't simply additional activities on a cruise schedule. They are designed to turn a day in a destination—or an afternoon at sea—into a memorable occasion.
                            </p>
                            <p>
                                This guide explores what makes Seabourn's signature experiences special, what travelers can expect and which experiences may be most appealing to different types of cruisers.
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

            {/* ── AT A GLANCE TABLE (reusing Ssf-table classes) ────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Four Unforgettable Moments</span>
                        <h2 className="Sbc-h2">Seabourn Signature Experiences <br /> at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn is known for creating distinctive experiences that combine its small-ship
                            atmosphere, culinary traditions, destination expertise and relaxed approach to luxury.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Experience</th>
                                    <th>What Makes It Special</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceRows.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Experience">{row.exp}</td>
                                        <td data-label="What Makes It Special">{row.special}</td>
                                        <td data-label="Best For">{row.best}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>



            {/* ── SIGNATURE EXPERIENCES TABS (new custom Sse-tabs classes) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-detail-tabs">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Explore the Details</span>
                        <h2 className="Sbc-h2">Signature Experiences in Detail</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Select one of the experiences below to explore what makes it special,
                            what travelers can expect, and who will love it most.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="Sse-tab-nav">
                        {signatureExperiencesData.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    className={`Sse-tab-btn ${activeTabIdx === idx ? "active" : ""}`}
                                    onClick={() => setActiveTabIdx(idx)}
                                >
                                    <IconComponent size={18} />
                                    <span>{item.tabTitle}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content Display */}
                    {(() => {
                        const currentExp = signatureExperiencesData[activeTabIdx];
                        const ExpIcon = currentExp.icon;
                        return (
                            <div className="Sse-tab-content-wrapper">
                                <div className="Sse-tab-left">
                                    <div className="Sse-tab-image-placeholder">
                                        <div className="Sse-tab-placeholder-icon">
                                            <ExpIcon size={48} strokeWidth={1.5} />
                                        </div>
                                        <span className="Sse-tab-placeholder-caption">{currentExp.placeholderText}</span>
                                    </div>
                                </div>
                                <div className="Sse-tab-right">
                                    <h3 className="Sse-tab-title">{currentExp.title}</h3>
                                    <div className="Sse-tab-title-line"></div>
                                    <p className="Sse-tab-lead">{currentExp.lead}</p>

                                    {/* Render subsections dynamically */}
                                    <div className="Sse-tab-subsections">
                                        {currentExp.sections.map((sec, sIdx) => (
                                            <div key={sIdx} className="Sse-tab-sec">
                                                <h4 className="Sse-tab-sec-title">{sec.title}</h4>

                                                {sec.type === "formula" && (
                                                    <div className="Sse-tab-formula-block">
                                                        {sec.text && <p className="Sse-tab-sec-text">{sec.text}</p>}
                                                        <div className="Sse-tab-formula">{sec.formula}</div>
                                                    </div>
                                                )}

                                                {sec.type === "list" && (
                                                    <div className="Sse-tab-list-block">
                                                        {sec.listIntro && <p className="Sse-tab-sec-text">{sec.listIntro}</p>}
                                                        <ul className="Sse-tab-bullet-list">
                                                            {sec.listItems.map((li, lIdx) => (
                                                                <li key={lIdx}>
                                                                    <span>{li}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        {sec.listOutro && <p className="Sse-tab-sec-text" style={{ marginTop: "12px" }}>{sec.listOutro}</p>}
                                                    </div>
                                                )}

                                                {sec.type === "crossed-list" && (
                                                    <div className="Sse-tab-list-block">
                                                        {sec.listIntro && <p className="Sse-tab-sec-text">{sec.listIntro}</p>}
                                                        <ul className="Sse-tab-bullet-list">
                                                            {sec.listItems.map((li, lIdx) => (
                                                                <li key={lIdx}>
                                                                    <X size={16} strokeWidth={2.5} className="Sse-tab-x-icon" />
                                                                    <span>{li}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        {sec.listOutro && <p className="Sse-tab-sec-text" style={{ marginTop: "12px" }}>{sec.listOutro}</p>}
                                                    </div>
                                                )}

                                                {sec.type === "simple-list" && (
                                                    <div className="Sse-tab-list-block">
                                                        {sec.listIntro && <p className="Sse-tab-sec-text">{sec.listIntro}</p>}
                                                        <ul className="Sse-tab-bullet-list simple">
                                                            {sec.listItems.map((li, lIdx) => (
                                                                <li key={lIdx}>
                                                                    <span>{li}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>




            {/* ── SIGNATURE VS TRADITIONAL EXCURSIONS (reusing Ssf-table classes) ─────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-vs-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Know the Difference</span>
                        <h2 className="Sbc-h2">Seabourn Signature Experiences <br /> vs. Traditional Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            It's important to distinguish a signature experience from a standard shore excursion.
                            A traditional excursion may focus on sightseeing, museums, historical landmarks, local tours,
                            food and wine, shopping and transportation. A signature experience is often designed around
                            a specific memorable moment.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Traditional Excursion</th>
                                    <th>Signature Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareRows.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Traditional Excursion">{row.trad}</td>
                                        <td data-label="Signature Experience">{row.sig}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "28px" }}>
                        Both can have value. The best trips often combine conventional sightseeing with special experiences.
                    </p>
                </div>
            </section>

            {/* ── WHICH SIGNATURE EXPERIENCE IS BEST (reuses Sbc-card classes) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-which-best">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Match It To Your Travel Style</span>
                        <h2 className="Sbc-h2">Which Seabourn Signature Experience Is Best?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">There isn't one universal answer. It depends on your travel style.</p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {bestForCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon"><Icon size={22} strokeWidth={1.5} /></div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text"><strong>{card.exp}.</strong> {card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            
            {/* ── CTA after Travel Style ───────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Tailored to Your Travel Style</span>
                    <h3 className="Sbc-cta-title">Build a Voyage Around Your Favorite Experience</h3>
                    <p className="Sbc-cta-text">
                        Whether you're a couple seeking romance, a history enthusiast or an adventure traveler,
                        the right Seabourn itinerary can be built around the experience that matters most to you.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak With a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── FOR COUPLES / FOODIES / ADVENTURE / HISTORY (reuses Sbc-fit classes) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-personas">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Who Gets the Most Out of Them</span>
                        <h2 className="Sbc-h2">Seabourn Signature Experiences <br /> by Travel Style</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-fit-grid">
                        {personaCards.map((card, i) => {
                            const Icon = card.icon;
                            const titleClean = card.title.replace("Signature Experiences for ", "");
                            return (
                                <div className="Sbc-fit-card" key={i}>
                                    <div className="Sse-fit-card-placeholder">
                                        <div className="Sse-fit-placeholder-icon-wrapper">
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <span className="Sse-fit-placeholder-text">{titleClean}</span>
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                    {card.list.length > 0 && (
                                        <ul className="Sse-fit-list">
                                            {card.list.map((item, j) => (
                                                <li key={j} className="Sse-fit-list-item">
                                                    <Check size={15} strokeWidth={2.5} className="Sse-fit-check-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <p className="Sbc-card-text" style={{ marginTop: "14px" }}>{card.note}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ── INCLUDED & GUARANTEED (new custom Sse-info classes) ─────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-info-included-guaranteed">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Good to Know Before You Book</span>
                        <h2 className="Sbc-h2">Are Seabourn Signature Experiences <br /> Included and Guaranteed?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sse-info-grid">
                        {/* Included Card */}
                        <div className="Sse-info-card">
                            <h3 className="Sse-info-title">Are Seabourn Signature Experiences Included?</h3>
                            <p className="Sse-info-text">
                                The availability and inclusion of individual signature experiences can depend on:
                            </p>
                            <ul className="Sse-info-list">
                                {["Ship", "Itinerary", "Destination", "Voyage", "Weather", "Operational conditions"].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} className="Sse-info-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sse-info-text muted">
                                Some experiences may be part of the cruise experience, while other destination experiences or excursions can involve additional charges.
                            </p>
                            <p className="Sse-info-text strong-note">
                                Always confirm the details for your specific sailing.
                            </p>
                        </div>

                        {/* Guaranteed Card */}
                        <div className="Sse-info-card">
                            <h3 className="Sse-info-title">Are Seabourn Signature Experiences Guaranteed?</h3>
                            <div className="Sse-info-alert">
                                No experience involving weather, local conditions or operational requirements should be assumed to be guaranteed.
                            </div>
                            <p className="Sse-info-text">
                                For example:
                            </p>
                            <ul className="Sse-info-list">
                                {[
                                    "Beach events depend on conditions.",
                                    "Marina activities depend on weather and safety.",
                                    "Expedition activities depend on ice and sea conditions.",
                                    "Destination events depend on local operational circumstances."
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} className="Sse-info-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sse-info-text muted">
                                Seabourn may modify or cancel activities when necessary.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── HOW TO PLAN (new Sse-step classes) ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-how-to-plan">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Get the Timing Right</span>
                        <h2 className="Sbc-h2">How to Plan Around Seabourn Signature Experiences</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">If a particular experience is important to you, consider it when choosing your itinerary.</p>
                    </div>

                    <div className="Sse-steps-list">
                        {planSteps.map((step, i) => (
                            <div className="Sse-step-item" key={i}>
                                <div className="Sse-step-number">{i + 1}</div>
                                <div>
                                    <h4 className="Sse-step-title">Step {i + 1}: {step.title}</h4>
                                    <p className="Sse-step-text">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TIPS (reuses new Sse-step classes) ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Make It Count</span>
                        <h2 className="Sbc-h2">Tips for Getting the Most From <br /> Seabourn Signature Experiences</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sse-steps-list">
                        {tips.map((tip, i) => (
                            <div className="Sse-step-item" key={i}>
                                <div className="Sse-step-number">{i + 1}</div>
                                <div>
                                    <h4 className="Sse-step-title">{tip.title}</h4>
                                    <p className="Sse-step-text">{tip.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Design Your Story</span>
                    <h3 className="Sbc-cta-title">Turn Your Next Sailing Into a Signature Occasion</h3>
                    <p className="Sbc-cta-text">
                        From Caviar in the Surf to an evening among the ruins of Ephesus, let's find the itinerary
                        that brings these moments within reach.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak With a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── OVERALL LUXURY PHILOSOPHY (reuses Sbc-vs-list classes) ───────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-philosophy">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Bigger Picture</span>
                        <h2 className="Sbc-h2">Signature Experiences and the <br /> Overall Luxury Experience</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            What makes these experiences interesting is the way they fit into Seabourn's broader philosophy.
                            Luxury isn't only about large suites, fine restaurants, premium beverages and personalized service.
                            It's also about how you experience a destination.
                        </p>
                    </div>

                    <div className="Sbc-vs-list">
                        {philosophyLines.map((line, i) => (
                            <div className="Sbc-vs-row" key={i}>
                                <div className="Sbc-vs-name">{line.name}</div>
                                <p className="Sbc-vs-desc">{line.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "32px" }}>
                        Each experience tells a slightly different story about Seabourn.
                    </p>
                </div>
            </section>

            {/* ── PROS AND CONSIDERATIONS (reuses Sbc-proscons classes) ────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-pros-considerations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Signature Experiences: <br /> Pros and Considerations</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Advantages</h3>
                            <ul>
                                {advantagesList.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">Considerations</h3>
                            <ul>
                                {considerationsList.map((item, i) => (
                                    <li key={i}><X size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────── */}
            <section className="Sbc-expert-section" id="Sse-expert-insight">
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

            {/* ── FAQ (reuses Sbc-faq classes) ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About <br /> Seabourn Signature Experiences</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <SseFAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT (reuses Sbc-verdict classes) ───────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sse-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">The Destination—and the Journey—Is the Experience</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn's signature experiences are part of what makes the brand distinctive.
                            A luxury cruise can be beautiful on its own, but memorable travel often comes from
                            moments that feel difficult to replicate elsewhere.
                        </p>
                        <p className="Sbc-p">
                            Whether you're enjoying Caviar in the Surf, spending time on the water during Marina Day,
                            experiencing Caviar on the Ice in a polar environment or visiting Ephesus in the evening,
                            the common theme is the same: Seabourn tries to make the destination—and the journey to it—the experience.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>For travelers who value:</strong> unique moments, destination immersion and
                                relaxed luxury, these experiences can become some of the highlights of a Seabourn voyage.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default SeabournSignatureExperiences;