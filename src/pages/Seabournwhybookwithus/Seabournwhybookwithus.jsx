import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    Minus,
    Plus,
    ArrowRight,
    Ship,
    MessageCircle,
    HelpCircle,
    Users,
    Star,
    Heart,
    Snowflake,
    Gem,
    Compass,
    MapPin,
    Anchor,
    Award,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournWhyBookWithUs.css";
import "../Seabournships/Seabournships.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TravelAgency",
            "@id": "https://www.tripsandships.com/#travelagency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com/",
            description:
                "Luxury travel planning and cruise advisory services specializing in personalized Seabourn cruise planning, suite selection, itinerary planning, promotions and travel arrangements.",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/",
            name: "Why Book Seabourn With Trips & Ships?",
            headline: "Why Book Seabourn With Trips & Ships?",
            description:
                "Discover why travelers book Seabourn with Trips & Ships. Get expert cruise advice, personalized suite selection, promotion monitoring and added amenities.",
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            about: { "@id": "https://www.tripsandships.com/#travelagency" },
            breadcrumb: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#breadcrumb",
            },
            mainEntity: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#faq",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Seabourn Cruises",
                    item: "https://www.tripsandships.com/seabourn-cruises/",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Why Book Seabourn With Trips & Ships?",
                    item: "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Why should I book Seabourn with a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A luxury travel advisor can provide personalized guidance on ships, itineraries, suites, promotions, travel logistics and applicable amenities. This can be particularly valuable for complex or high-value trips.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can Trips & Ships help me choose a Seabourn suite?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Suite selection can be one of the most important parts of planning a Seabourn cruise. We can help compare suite categories, locations, verandas and available options based on your priorities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you help me find Seabourn promotions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We can monitor applicable Seabourn promotions and help determine whether an offer applies to your sailing and booking. Promotions are subject to availability and supplier terms.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I get additional amenities when booking Seabourn through Trips & Ships?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the sailing, suite category, booking program and current offers, additional amenities or benefits may be available. These vary and should be confirmed for the specific booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can Trips & Ships help with Seabourn flights?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. We can help coordinate air arrangements around your Seabourn itinerary and consider appropriate timing for embarkation and disembarkation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you arrange pre-cruise and post-cruise hotels?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A cruise can be combined with hotels and additional land travel to create a more complete vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you help plan Seabourn Antarctica cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Antarctica requires more detailed planning than a typical cruise. We can help evaluate expedition ships, itineraries, flights, hotels and the logistics surrounding the voyage.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Trips & Ships only for first-time Seabourn travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Experienced Seabourn travelers can also benefit from assistance with suite selection, itinerary planning, promotions, special requests and complex travel arrangements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you help compare Seabourn with Regent or Silversea?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Comparing luxury cruise lines based on your priorities can be useful before committing to a particular brand. We can help evaluate differences in suites, ships, service, dining, inclusions and itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you help with special occasions on Seabourn?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Let us know if you're planning a honeymoon, anniversary, birthday, retirement celebration or other milestone so we can consider it when planning your trip.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do I pay more when booking through Trips & Ships?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Travel advisor compensation is generally built into supplier pricing rather than being an additional fee charged to the traveler for a standard cruise booking. Specific planning or custom services may have their own terms, so those should be discussed before work begins.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What makes Trips & Ships different?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The focus is on personalized luxury travel planning rather than simply processing a cruise reservation. We help evaluate the details that can make a meaningful difference in your overall experience.",
                    },
                },
            ],
        },
    ],
};

/* ── FAQ accordion data (custom Sbc-faq classes, reused) ──────────── */
const faqData = [
    { q: "Why should I book Seabourn with a travel advisor?", a: "A luxury travel advisor can provide personalized guidance on ships, itineraries, suites, promotions, travel logistics and applicable amenities. This can be particularly valuable for complex or high-value trips." },
    { q: "Can Trips & Ships help me choose a Seabourn suite?", a: "Yes. Suite selection can be one of the most important parts of planning a Seabourn cruise. We can help compare suite categories, locations, verandas and available options based on your priorities." },
    { q: "Can you help me find Seabourn promotions?", a: "We can monitor applicable Seabourn promotions and help determine whether an offer applies to your sailing and booking. Promotions are subject to availability and supplier terms." },
    { q: "Can I get additional amenities when booking Seabourn through Trips & Ships?", a: "Depending on the sailing, suite category, booking program and current offers, additional amenities or benefits may be available. These vary and should be confirmed for the specific booking." },
    { q: "Can Trips & Ships help with Seabourn flights?", a: "Yes. We can help coordinate air arrangements around your Seabourn itinerary and consider appropriate timing for embarkation and disembarkation." },
    { q: "Can you arrange pre-cruise and post-cruise hotels?", a: "Yes. A cruise can be combined with hotels and additional land travel to create a more complete vacation." },
    { q: "Can you help plan Seabourn Antarctica cruises?", a: "Yes. Antarctica requires more detailed planning than a typical cruise. We can help evaluate expedition ships, itineraries, flights, hotels and the logistics surrounding the voyage." },
    { q: "Is Trips & Ships only for first-time Seabourn travelers?", a: "No. Experienced Seabourn travelers can also benefit from assistance with suite selection, itinerary planning, promotions, special requests and complex travel arrangements." },
    { q: "Can you help compare Seabourn with Regent or Silversea?", a: "Yes. Comparing luxury cruise lines based on your priorities can be useful before committing to a particular brand. We can help evaluate differences in suites, ships, service, dining, inclusions and itineraries." },
    { q: "Can you help with special occasions on Seabourn?", a: "Yes. Let us know if you're planning a honeymoon, anniversary, birthday, retirement celebration or other milestone so we can consider it when planning your trip." },
    { q: "Do I pay more when booking through Trips & Ships?", a: "Travel advisor compensation is generally built into supplier pricing rather than being an additional fee charged to the traveler for a standard cruise booking. Specific planning or custom services may have their own terms, so those should be discussed before work begins." },
    { q: "What makes Trips & Ships different?", a: "The focus is on personalized luxury travel planning rather than simply processing a cruise reservation. We help evaluate the details that can make a meaningful difference in your overall experience." },
];

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
const advisorQuestions = [
    "Where do you want to go?",
    "What type of experience do you want?",
    "Which ship fits your travel style?",
    "How important is your suite location?",
    "Do you prefer a larger veranda?",
    "Are you traveling as a couple, family or group?",
    "Do you want expedition experiences?",
    "Which excursions matter most?",
    "Are you celebrating something special?",
    "What additional amenities would make the trip better?",
];

const benefits = [
    {
        num: "01",
        title: "Expert Seabourn Cruise Guidance",
        paragraphs: [
            "Seabourn offers a relatively small fleet, but each ship and itinerary can create a different experience.",
            "Our role is to help you understand those differences before you commit.",
        ],
        listLabel: "We can help evaluate:",
        list: ["Seabourn ships", "Ocean vs. expedition voyages", "Suite categories", "Deck plans", "Suite locations", "Itinerary length", "Ports of call", "Seasonal considerations", "Excursion opportunities", "Expedition activities", "Pre- and post-cruise options"],
        afterParagraphs: ["This is particularly valuable if you are new to luxury cruising."],
    },
    {
        num: "02",
        title: "Personalized Seabourn Suite Selection",
        paragraphs: [
            "Your suite is one of the most important decisions you'll make when booking Seabourn.",
            "A lower-priced suite is not automatically the best value.",
        ],
        listLabel: "Depending on your priorities, you may care more about:",
        list: ["Veranda size", "Location", "Deck", "Forward vs. aft position", "Proximity to elevators", "Distance from public spaces", "Accessibility", "Sleeping arrangements", "Additional living space", "Premium suite amenities"],
        afterParagraphs: ["We can help compare available options rather than simply selecting the first available suite."],
       
    },
    {
        num: "03",
        title: "Help Choosing the Right Seabourn Ship",
        paragraphs: [
            "Not every Seabourn ship is designed for the same type of traveler.",
            "The traditional Seabourn ocean ships offer intimate luxury cruising, while Seabourn Venture and Seabourn Pursuit provide dedicated expedition experiences.",
            "If you're considering Antarctica, the Arctic or another remote destination, ship selection becomes particularly important.",
        ],
        listLabel: "We can help you determine whether your priorities are better matched to:",
        list: ["Traditional Seabourn cruising", "Expedition cruising", "Relaxed European itineraries", "Tropical destinations", "Longer voyages", "Adventure-focused travel"],
    },
    {
        num: "04",
        title: "Itinerary Planning Beyond the Cruise",
        paragraphs: [
            "The cruise itself is only part of the journey.",
            "Depending on your itinerary, we can help you think through the entire trip:",
        ],
        phases: [
            { title: "Before the Cruise", items: ["Flights", "Hotels", "Airport transfers", "Pre-cruise stays", "Private transportation", "Travel timing"] },
            { title: "During the Cruise", items: ["Suite selection", "Excursion strategy", "Special occasions", "Dining considerations", "Onboard preferences"] },
            { title: "After the Cruise", items: ["Post-cruise hotels", "Transfers", "Additional sightseeing", "Private guides", "Extensions"] },
        ],
        afterParagraphs: ["The goal is to create a seamless luxury travel experience rather than a disconnected collection of reservations."],
    },
    {
        num: "05",
        title: "Seabourn Promotion Monitoring",
        paragraphs: [
            "Luxury cruise pricing and promotions can change.",
            "Rather than booking and forgetting about your reservation, we can monitor applicable Seabourn offers and promotions.",
        ],
        listLabel: "Depending on the promotion and booking terms, opportunities may include:",
        list: ["Fare promotions", "Shipboard credits", "Added-value offers", "Suite promotions", "Seasonal incentives", "Special booking offers"],
        note: "Important: Promotions are subject to availability, eligibility and Seabourn's current terms.",
        afterParagraphs: ["Our role is to help you understand which offers may apply to your booking rather than assuming every advertised promotion is available for every sailing."],
    },
    {
        num: "06",
        title: "Finding the Right Value — Not Just the Lowest Fare",
        paragraphs: [
            "The cheapest Seabourn fare isn't necessarily the best deal.",
            "For example, a slightly different sailing could provide:",
        ],
        list: ["A better suite", "A better itinerary", "More convenient dates", "Better air connections", "A more desirable cabin location", "Better overall travel logistics"],
        afterParagraphs: ["We look at the total travel experience, not simply the lowest advertised cruise price."],
    },
    {
        num: "07",
        title: "Help Comparing Seabourn With Other Luxury Cruise Lines",
        hasCompareCards: true,
        paragraphs: [
            "Still deciding between Seabourn and another luxury brand?",
            "We can help compare options based on what matters to you.",
        ],
        compareRows: [
            { name: "Seabourn vs. Regent Seven Seas", items: ["Suites", "Included excursions", "Ships", "Dining", "Service", "Atmosphere", "Overall value"] },
            { name: "Seabourn vs. Silversea", items: ["Ship size", "Suites", "Butler service", "Dining", "Expeditions", "Destinations", "Luxury experience"] },
            { name: "Seabourn vs. Scenic", items: ["Ocean vs. river cruising", "Ship design", "Suites", "Dining", "Inclusions", "Destination experiences"] },
        ],
        afterParagraphs: [
            "The goal isn't to tell every traveler that Seabourn is the best.",
            "It's to determine whether Seabourn is the best fit for you.",
        ],
    },
    {
        num: "08",
        title: "Advice From a Luxury Travel Perspective",
        paragraphs: [
            "Trips & Ships Luxury Travel specializes in luxury travel planning.",
            "That perspective matters when you're booking a high-value vacation.",
        ],
        listLabel: "We consider the details that can easily be overlooked when booking online, including:",
        list: ["Suite positioning", "Connecting travel", "Hotel selection", "Transfer timing", "Itinerary flow", "Special occasions", "Excursion priorities", "Travel preferences"],
        afterParagraphs: ["A luxury vacation should feel thoughtfully planned from beginning to end."],
    },
    {
        num: "09",
        title: "Additional Amenities and Added Value",
        paragraphs: [
            "Depending on your booking and applicable supplier programs, working with a luxury travel advisor may provide access to additional amenities or benefits.",
        ],
        listLabel: "These can vary by:",
        list: ["Sailing", "Suite category", "Promotion", "Availability", "Supplier program", "Booking terms"],
        listLabel2: "Potential benefits may include applicable:",
        list2: ["Shipboard credits", "Welcome amenities", "Special occasion recognition", "Preferred arrangements", "Additional planning assistance"],
        afterParagraphs: ["Because these benefits can change, we recommend confirming the specific amenities available for your sailing at the time of booking."],
    },
    {
        num: "10",
        title: "Help With Special Occasions",
        paragraphs: [
            "Seabourn can be an exceptional choice for milestone travel.",
        ],
        listLabel: "If you're celebrating:",
        list: ["An anniversary", "Honeymoon", "Birthday", "Retirement", "Family milestone", "Graduation", "Major achievement", "Reunion"],
        afterParagraphs: [
            "Tell us before booking.",
            "We'll help you think through the itinerary, suite and travel arrangements with the occasion in mind.",
        ],
    },
    {
        num: "11",
        title: "Support Before You Travel",
        paragraphs: ["Luxury travel planning doesn't end when the reservation is made."],
        listLabel: "Before departure, we can help you review:",
        list: ["Travel documents", "Flight schedules", "Hotel arrangements", "Transfers", "Cruise embarkation", "Excursions", "Packing considerations", "Special requests", "Important itinerary details"],
        afterParagraphs: ["The objective is to reduce uncertainty before you leave home."],
    },
    {
        num: "12",
        title: "Support When Travel Plans Change",
        paragraphs: [
            "Travel doesn't always go according to plan.",
            "Flights can change.",
            "Connections can be delayed.",
            "Hotels can have unexpected issues.",
            "Itineraries can be adjusted.",
            "Having a travel advisor means you have someone familiar with your trip and its moving parts who can help you navigate changes.",
            "That's particularly valuable when a trip involves multiple reservations across several destinations.",
        ],
    },
];

const mistakes = [
    "Choosing the wrong suite may mean living with an undesirable location for an entire voyage.",
    "Choosing the wrong itinerary may mean missing the destinations you most wanted to see.",
    "Booking flights without enough buffer can create unnecessary stress before embarkation.",
    "Missing a promotion or applicable amenity can affect the value of your trip.",
];

const planningTable = [
    { area: "Ship selection", help: "Compare ships and experiences" },
    { area: "Itinerary", help: "Match destinations to your interests" },
    { area: "Suite selection", help: "Review categories, locations and availability" },
    { area: "Promotions", help: "Monitor applicable offers" },
    { area: "Excursions", help: "Help prioritize experiences" },
    { area: "Flights", help: "Coordinate pre/post-cruise travel" },
    { area: "Hotels", help: "Plan extensions and overnight stays" },
    { area: "Transfers", help: "Coordinate transportation" },
    { area: "Special occasions", help: "Plan around celebrations" },
    { area: "Additional amenities", help: "Identify applicable benefits" },
    { area: "Travel logistics", help: "Connect the pieces of your trip" },
    { area: "Pre-trip planning", help: "Review important details before departure" },
];

const priceQuestions = [
    "Would you rather save $500 on the cruise fare or have the suite location you actually want?",
    "Would you rather choose the cheapest itinerary or the itinerary that visits the destinations you care about most?",
    "Would you rather book flights independently or have the entire trip coordinated around your cruise departure?",
    "Would you rather discover a promotion after booking or have someone monitoring applicable offers?",
];

const bookingSteps = [
    { title: "Step 1", heading: "Understand your travel goals", text: "We learn what matters most to you." },
    { title: "Step 2", heading: "Identify the right Seabourn experience", text: "We compare ships, destinations and itineraries." },
    { title: "Step 3", heading: "Select the right suite", text: "We review suite categories and locations based on your priorities." },
    { title: "Step 4", heading: "Evaluate the value", text: "We consider the fare, inclusions, promotions and potential amenities." },
    { title: "Step 5", heading: "Coordinate the trip", text: "We help connect flights, hotels, transfers and other travel arrangements." },
    { title: "Step 6", heading: "Prepare you for departure", text: "We review the details so you know what to expect." },
    { title: "Step 7", heading: "Enjoy your Seabourn journey", text: "You travel with the confidence that the important details have been considered." },
];

const worthItList = [
    "You're booking a premium suite", "You're traveling internationally", "You're planning an expedition",
    "You're traveling with a family", "You're celebrating a milestone", "You're combining cruise and land travel",
    "You're unfamiliar with Seabourn", "You want help comparing luxury cruise lines",
    "You want someone monitoring applicable promotions", "You value personalized recommendations",
];

const whoBenefits = [
    { icon: Compass, title: "First-Time Seabourn Travelers", text: "If you have never sailed Seabourn, we can explain the differences between ships, suites, itineraries and inclusions." },
    { icon: Star, title: "Experienced Luxury Travelers", text: "If you already know luxury cruising, we can focus on the details that matter most to you." },
    { icon: Heart, title: "Couples", text: "We can help match your itinerary and suite to a romantic getaway." },
    { icon: Users, title: "Multigenerational Families", text: "We can help coordinate multiple suites, travel arrangements and experiences." },
    { icon: Snowflake, title: "Expedition Travelers", text: "For Antarctica and other remote destinations, planning the entire journey is particularly important." },
    { icon: Gem, title: "Travelers Celebrating Something Special", text: "We can help incorporate milestone travel into the planning process." },
];

const decisionsList = ["Where you go.", "When you go.", "Which ship you sail.", "Which suite you choose.", "How you get there.", "What you do once you're there."];

const effortlessList = [
    "Your flights connect comfortably.", "Your hotel complements your cruise.", "Your transfer arrives when you need it.",
    "Your suite fits your preferences.", "Your itinerary matches your interests.", "Your excursions make sense.",
    "Your special requests have been considered.", "And when something changes, you know who to contact.",
];



const renderBenefit = (b, isTopRow = false) => {
    const renderContent = () => (
        <>
            {b.paragraphs.map((p, i) => (
                <p className="Sbc-p SbcWhy-benefit-text" key={i}>{p}</p>
            ))}

            {b.listLabel && (
                <>
                    <h4 className="Sbc-highlights-title SbcWhy-benefit-list-label">{b.listLabel}</h4>
                    <ul className="SbcWhy-benefit-checklist">
                        {b.list.map((item, i) => (
                            <li key={i}>
                                <Check size={20} strokeWidth={3} className="SbcWhy-benefit-check-icon" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {b.listLabel2 && (
                <>
                    <h4 className="Sbc-highlights-title SbcWhy-benefit-list-label">{b.listLabel2}</h4>
                    <ul className="SbcWhy-benefit-checklist">
                        {b.list2.map((item, i) => (
                            <li key={i}>
                                <Check size={20} strokeWidth={3} className="SbcWhy-benefit-check-icon" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {b.phases && (
                <div className="SbcWhy-phase-grid">
                    {b.phases.map((phase, i) => (
                        <div className="SbcWhy-phase-card" key={i}>
                            <h4 className="SbcWhy-phase-title">{phase.title}</h4>
                            <ul className="SbcWhy-phase-list">
                                {phase.items.map((item, j) => (
                                    <li key={j}>
                                        <Check size={14} strokeWidth={3} className="SbcWhy-benefit-check-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {b.compareRows && (
                b.hasCompareCards ? (
                    <div className="SbcWhy-compare-grid">
                        {b.compareRows.map((row, i) => {
                            const icons = [Ship, Anchor, Compass];
                            const Icon = icons[i % icons.length];
                            return (
                                <div className="SbcWhy-compare-card" key={i}>
                                    <div className="SbcWhy-compare-image-placeholder">
                                        <div className="SbcWhy-compare-icon-wrapper">
                                            <Icon size={28} className="SbcWhy-compare-placeholder-icon" />
                                        </div>
                                        <span className="SbcWhy-compare-placeholder-text">{row.name}</span>
                                    </div>
                                    <div className="SbcWhy-compare-info">
                                        <h4 className="SbcWhy-compare-title">{row.name}</h4>
                                        <p className="SbcWhy-compare-desc">
                                            <strong>Compare:</strong> {row.items.join(", ")}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="Sbc-vs-list" style={{ marginTop: "18px" }}>
                        {b.compareRows.map((row, i) => (
                            <div className="Sbc-vs-row" key={i}>
                                <div className="Sbc-vs-name">{row.name}</div>
                                <p className="Sbc-vs-desc">Compare: {row.items.join(", ")}</p>
                            </div>
                        ))}
                    </div>
                )
            )}

            {b.note && (
                <div className="SbcWhy-benefit-note">
                    <p>{b.note}</p>
                </div>
            )}

            {b.callout && (
                <div className="SbcWhy-benefit-callout">
                    <p>{b.callout}</p>
                </div>
            )}

            {b.afterParagraphs && b.afterParagraphs.map((p, i) => (
                <p className="Sbc-p SbcWhy-benefit-text" key={`after-${i}`} style={{ marginTop: "16px" }}>{p}</p>
            ))}
        </>
    );

    return (
        <div className={`SbcWhy-benefit ${isTopRow ? 'SbcWhy-benefit-card' : ''}`} key={b.num}>
            {isTopRow ? (
                <>
                    <div className="SbcWhy-benefit-header">
                        <div className="SbcWhy-benefit-num">{b.num}</div>
                        <h3 className="Sbc-h3">{b.title}</h3>
                    </div>
                    <div className="SbcWhy-benefit-body">
                        {renderContent()}
                    </div>
                </>
            ) : (
                <>
                    <div className="SbcWhy-benefit-num">{b.num}</div>
                    <div className="SbcWhy-benefit-body">
                        <h3 className="Sbc-h3">{b.title}</h3>
                        {renderContent()}
                    </div>
                </>
            )}
        </div>
    );
};

const SeabournWhyBookWithUs = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Why Book Seabourn With Trips & Ships?</title>
                <meta name="title" content="Book Seabourn With Trips & Ships | Luxury Cruise Advisors" />
                <meta
                    name="description"
                    content="Discover why travelers book Seabourn with Trips & Ships. Get expert cruise advice, personalized suite selection, promotion monitoring and added amenities."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO (custom Sbc-hero classes) ──────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>

                <div className="Sbc-hero-content">
                    <h1>Why Book Seabourn <br /> With Trips &amp; Ships?</h1>

                    <p>
                        Booking a Seabourn cruise is more than choosing a ship, itinerary and suite. With an ultra-luxury cruise, the details matter.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                The right suite can change your experience. The right itinerary can make a significant difference. The right promotion can affect the overall value of your trip. And thoughtful planning before departure can make the entire journey feel easier.
                            </p>
                            <p>
                                That's where Trips &amp; Ships Luxury Travel can help.
                            </p>
                            <p>
                                Our goal is not simply to book your Seabourn cruise. We help you choose the right Seabourn experience for the way you travel, from selecting the right ship and suite to monitoring promotions and coordinating the details around your journey.
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
                            Start Planning Your Seabourn Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ── ADVANTAGE OF A LUXURY TRAVEL ADVISOR ───────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="SbcWhy-advantage">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Advisor Advantage</span>
                        <h2 className="Sbc-h2">The Advantage of Booking Seabourn With a Luxury Travel Advisor</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            You can book a Seabourn cruise directly. But a luxury
                            travel advisor can provide something a booking engine
                            cannot: personalized advice based on your priorities.
                        </p>
                    </div>

                    <div className="SbcWhy-advisor-grid" style={{ alignItems: "stretch" }}>
                        <div className="Sbc-what-image-placeholder" style={{ minHeight: "100%", height: "100%" }}>
                            <div className="Sbc-what-placeholder-icon-wrapper">
                                <Ship size={40} className="Sbc-what-placeholder-icon" />
                            </div>
                            <span className="Sbc-what-placeholder-text">Why Book Seabourn Cruises Image Placeholder</span>
                        </div>

                        <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-white)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 0, boxSizing: 'border-box' }}>
                            <h4 className="Sbc-highlights-title">We start with questions such as:</h4>
                            <ul className="Sbc-highlights-list">
                                {advisorQuestions.map((q, idx) => (
                                    <li key={idx}>
                                        <HelpCircle size={16} strokeWidth={2.5} />
                                        <span>{q}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                    <p className="Sbc-p SbcWhy-advisor-closing" style={{ textAlign: "center", maxWidth: "760px", margin: "28px auto 0" }}>
                        The objective is to match the right Seabourn sailing to the right traveler.
                    </p>
                </div>
            </section>

            {/* ── 12 NUMBERED BENEFITS ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="SbcWhy-benefits">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">What We Handle For You</span>
                        <h2 className="Sbc-h2">12 Ways Trips &amp; Ships Helps You Book Seabourn</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="SbcWhy-benefits-top-row">
                        {benefits.slice(0, 2).map((b) => renderBenefit(b, true))}
                    </div>

                    <div className="SbcWhy-benefits-list">
                        {benefits.slice(2, 9).map((b) => renderBenefit(b, false))}
                    </div>

                    <div className="SbcWhy-benefits-top-row" style={{ marginTop: "40px" }}>
                        {benefits.slice(9, 11).map((b) => renderBenefit(b, true))}
                    </div>

                    <div className="SbcWhy-benefits-list" style={{ marginTop: "40px" }}>
                        {benefits.slice(11).map((b) => renderBenefit(b, false))}
                    </div>
                </div>
            </section>

            {/* ── WHY THIS MATTERS MORE (dark) ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="SbcWhy-matters">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Stakes Are Higher</span>
                        <h2 className="Sbc-h2">Why This Matters More With Luxury Travel</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            When you're spending significantly more on a vacation,
                            small mistakes can become expensive mistakes.
                        </p>
                    </div>

                    <div className="SbcWhy-mistakes-list">
                        {mistakes.map((m, i) => (
                            <p className="Sbc-p" key={i}>{m}</p>
                        ))}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "24px auto 0", fontWeight: 500 }}>
                        Luxury travel planning is about getting the details right before they become problems.
                    </p>
                </div>
            </section>

            {/* ── PLANNING TABLE ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="SbcWhy-table">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">At a Glance</span>
                        <h2 className="Sbc-h2">Seabourn Booking: What We Can Help With</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Planning Area</th>
                                    <th>How Trips &amp; Ships Can Help</th>
                                </tr>
                            </thead>
                            <tbody>
                                {planningTable.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Planning Area">{row.area}</td>
                                        <td data-label="How Trips & Ships Can Help">{row.help}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── PRICE ALONE ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="SbcWhy-price">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Value Over Price</span>
                        <h2 className="Sbc-h2">Why Travelers Shouldn't Choose a Seabourn Cruise Based on Price Alone</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            A luxury cruise is an experience, not simply a hotel
                            room that moves between ports. Consider these
                            questions:
                        </p>
                    </div>

                    <div className="SbcWhy-choice-list">
                        {priceQuestions.map((q, i) => (
                            <div className="SbcWhy-choice-row" key={i}>
                                <HelpCircle size={18} strokeWidth={2} />
                                <p>{q}</p>
                            </div>
                        ))}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "24px auto 0", fontWeight: 500 }}>
                        The cheapest option isn't always the best option.
                    </p>
                </div>
            </section>

            {/* ── 7 STEPS (dark) ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="SbcWhy-steps">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Process</span>
                        <h2 className="Sbc-h2">A Better Way to Book Seabourn</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Our approach is simple:</p>
                    </div>

                    <div className="SbcWhy-steps-grid">
                        {bookingSteps.map((s, i) => (
                            <div className="SbcWhy-step-card" key={i}>
                                <div className="SbcWhy-step-num">{i + 1}</div>
                                <h4 className="SbcWhy-step-title">{s.title}</h4>
                                <h5 className="SbcWhy-step-heading">{s.heading}</h5>
                                <p className="SbcWhy-step-text">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WORTH IT ─────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="SbcWhy-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Is Booking Seabourn With a Travel Advisor Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For a straightforward cruise booking, some travelers
                            may prefer to book directly. But for a high-value
                            luxury journey, professional planning can provide
                            meaningful advantages.
                        </p>
                    </div>

                    <div className="SbcWhy-worth-grid">
                        <div className="SbcWhy-worth-content">
                            <h4 className="Sbc-highlights-title">
                                A travel advisor can be particularly valuable when:
                            </h4>
                            <ul className="Sbc-highlights-list">
                                {worthItList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={22} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="SbcWhy-worth-image-placeholder">
                            <div className="SbcWhy-worth-icon-wrapper">
                                <Star size={40} className="SbcWhy-worth-placeholder-icon" />
                            </div>
                            <span className="SbcWhy-worth-placeholder-text">Trips &amp; Ships Luxury Cruise Advisory</span>
                        </div>
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "28px auto 0" }}>
                        The objective isn't simply to make a reservation. It's to make a better-informed reservation.
                    </p>
                </div>
            </section>

            {/* ── WHO BENEFITS MOST ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="SbcWhy-who">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Is This For You?</span>
                        <h2 className="Sbc-h2">Who Benefits Most From Booking Seabourn With Trips &amp; Ships?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid">
                        {whoBenefits.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon"><Icon size={24} strokeWidth={1.75} /></div>
                                    <h3 className="Sbc-card-title">{c.title}</h3>
                                    <p className="Sbc-card-text">{c.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WHY TRIPS & SHIPS ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="SbcWhy-why-us">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Difference</span>
                        <h2 className="Sbc-h2">Why Trips &amp; Ships for Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="SbcWhy-why-grid">
                        <div className="SbcWhy-why-image-placeholder">
                            <div className="SbcWhy-why-icon-wrapper">
                                <Compass size={40} className="SbcWhy-why-placeholder-icon" />
                            </div>
                            <span className="SbcWhy-why-placeholder-text">Trips &amp; Ships Luxury Travel Planning</span>
                        </div>

                        <div className="SbcWhy-why-content">
                            <p className="SbcWhy-why-lead">
                                Expertise. Personalized planning. Attention to detail.
                                That's the difference between simply purchasing a
                                cruise and working with a luxury travel advisor. At
                                Trips &amp; Ships Luxury Travel, our goal is to help
                                you make informed decisions about:
                            </p>
                            <ul className="Sbc-highlights-list">
                                {decisionsList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={22} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Sbc-p SbcWhy-why-footer" style={{ marginTop: "24px", fontWeight: 500 }}>
                                And ultimately: how the entire journey feels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EFFORTLESS (dark) ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="SbcWhy-effortless">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The End Result</span>
                        <h2 className="Sbc-h2">Your Seabourn Vacation <br /> Should Feel Effortless</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The best luxury vacations aren't necessarily the ones
                            with the most components. They're the ones where the
                            components work together.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid" style={{ gridTemplateColumns: "1fr", maxWidth: "700px", margin: "0 auto" }}>
                        <div className="Sbc-includes-card">
                            <ul>
                                {effortlessList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "700px", margin: "28px auto 0", fontWeight: 500 }}>
                        That's the value of thoughtful luxury travel planning.
                    </p>
                </div>
            </section>



            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────── */}
            <section className="Sbc-expert-section" id="SbcWhy-expert-insight">
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
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking Seabourn with a luxury travel advisor.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="SbcWhy-cta">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ready When You Are</span>
                        <h2 className="Sbc-h2">Ready to Plan Your <br /> Seabourn Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="SbcWhy-cta-copy">
                        <p className="Sbc-p">
                            Whether you're considering your first Seabourn voyage
                            or you're already an experienced Seabourn traveler,
                            Trips &amp; Ships Luxury Travel can help you evaluate
                            the options and plan the journey around your
                            priorities.
                        </p>
                        <p className="Sbc-p">
                            From suite selection and itinerary planning to
                            promotion monitoring and additional amenities, our
                            goal is to make your Seabourn vacation as seamless as
                            possible.
                        </p>
                        <p className="Sbc-p" style={{ fontWeight: 500 }}>
                            Start planning your Seabourn journey with Trips &amp; Ships Luxury Travel.
                        </p>

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

export default SeabournWhyBookWithUs;