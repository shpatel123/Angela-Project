import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Quote,
  Compass,
  Anchor,
  Ship,
  Waves,
  GraduationCap,
  Globe,
  Landmark,
  Mic,
  Presentation,
  FlaskConical,
  Binoculars,
  Info,
  HandHeart,
  Target,
  Users,
  BookOpen,
  HeartHandshake,
  Microscope,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

// Existing Expedition & Antarctica images
import ExpeditionShip1 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica.jpg";
import ExpeditionShip2 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica2.jpg";
import ExpeditionShip3 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica3.jpg";
import ExpeditionShip4 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica4.jpg";
import ExpeditionShip5 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica5.jpg";
import ExpeditionShip6 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica6.jpg";
import GuestsAntarctica1 from "../../assets/VikingExpeditionCruises/Guests-in-Antarctica.jpg";
import GuestsAntarctica2 from "../../assets/VikingExpeditionCruises/Guests-in-Antarctica2.jpg";
import GuestsAntarctica3 from "../../assets/VikingExpeditionCruises/Guests-in-Antarctica3.jpg";

// University / Museum / Aquarium images
import UniversityImage from "../../assets/WhyUniversitiesPartner/Alumni_Travel_Benefits.jpg";
import MuseumImage from "../../assets/WhyUniversitiesPartner/Educational_Travelimage.jpg";
import AquariumImage from "../../assets/WhyUniversitiesPartner/FacultyLedTravel.jpg";

import { Helmet } from "react-helmet-async";

const donorExpeditionDestinations = [
  {
    id: "antarctica",
    title: "Antarctica Expedition Cruises",
    badge: "Antarctica",
    icon: Ship,
    image: ExpeditionShip1,
    desc: "Antarctica remains one of the most sought-after expedition destinations for donor travel — offering powerful opportunities for conservation, science, and education-focused programming amid some of the most dramatic landscapes on Earth.",
    columns: [
      {
        label: "Highlights:",
        items: [
          "Penguin Colonies",
          "Whale Sightings",
          "Massive Icebergs",
          "Scientific Research Stations",
          "Polar Landscapes",
        ],
      },
    ],
    themeLabel: "A Premier Stage for Mission-Driven Programming",
    themeText:
      "For conservation, science, and educational organizations, Antarctica provides powerful opportunities to bring donor engagement and institutional mission together in one unforgettable voyage.",
  },
  {
    id: "arctic",
    title: "Arctic Expedition Cruises",
    badge: "Arctic",
    icon: Compass,
    image: ExpeditionShip5,
    desc: "The Arctic offers a compelling combination of wildlife and environmental education, often resonating strongly with environmentally conscious donors who care deeply about climate and conservation.",
    columns: [
      {
        label: "Highlights:",
        items: [
          "Polar Bears",
          "Arctic Wildlife",
          "Remote Communities",
          "Climate Research",
          "Unique Ecosystems",
        ],
      },
    ],
    themeLabel: "Where Climate Education Comes to Life",
    themeText:
      "Arctic voyages give donors a firsthand view of the environments their philanthropy helps protect — turning abstract conservation goals into lived experience.",
  },
  {
    id: "galapagos",
    title: "Galápagos Islands Expeditions",
    badge: "Galápagos",
    icon: Anchor,
    image: ExpeditionShip6,
    desc: "The Galápagos Islands are a natural fit for educational and conservation organizations, combining adventure with exceptional educational value and a living case study in evolutionary biology.",
    columns: [
      {
        label: "Highlights:",
        items: [
          "Giant Tortoises",
          "Marine Iguanas",
          "Unique Biodiversity",
          "Evolutionary History",
          "Conservation Success Stories",
        ],
      },
    ],
    themeLabel: "A Living Conservation Classroom",
    themeText:
      "These voyages combine adventure with exceptional educational value, making the Galápagos one of the most compelling donor expedition destinations available today.",
  },
  {
    id: "alaska",
    title: "Alaska Expedition Cruises",
    badge: "Alaska",
    icon: Waves,
    image: GuestsAntarctica3,
    desc: "Alaska offers a more accessible expedition experience that appeals to a wide range of donor audiences and often serves as an ideal first expedition cruise for first-time donor travelers.",
    columns: [
      {
        label: "Highlights:",
        items: [
          "Glaciers",
          "Whales",
          "Sea Otters",
          "Bears",
          "Coastal Ecosystems",
        ],
      },
    ],
    themeLabel: "An Accessible Entry Point to Donor Travel",
    themeText:
      "Alaska's combination of dramatic scenery and approachable logistics makes it a popular gateway destination for organizations launching their first donor expedition program.",
  },
  {
    id: "wildlife-conservation",
    title: "Wildlife & Conservation Expeditions",
    badge: "Wildlife & Conservation",
    icon: MapPin,
    image: GuestsAntarctica2,
    desc: "Destinations such as South Georgia, the Falkland Islands, Costa Rica, Baja California, Norway, Iceland, and Greenland often align particularly well with conservation-focused missions.",
    columns: [
      {
        label: "Popular Destinations:",
        items: [
          "South Georgia",
          "Falkland Islands",
          "Costa Rica",
          "Baja California",
          "Norway, Iceland & Greenland",
        ],
      },
    ],
    themeLabel: "Mission-Aligned Wildlife Encounters",
    themeText:
      "These voyages give conservation-minded donors direct access to the species, habitats, and field research their support makes possible.",
  },
];

const travelerTypeData = [
  {
    key: "universities",
    image: UniversityImage,
    imageAlt: "University alumni and educational expedition travel",
    eyebrow: "Universities",
    icon: <GraduationCap size={18} />,
    title: "University Travel Programs May Focus On:",
    items: [
      "Research",
      "Science",
      "Global Education",
      "Alumni Engagement",
      "Lifelong Learning",
    ],
  },
  {
    key: "museums",
    image: MuseumImage,
    imageAlt: "Museum members exploring historical and cultural destinations",
    eyebrow: "Museums",
    icon: <Landmark size={18} />,
    title: "Museum Travel Programs May Emphasize:",
    items: [
      "Natural History",
      "Archaeology",
      "Exploration",
      "Cultural Heritage",
      "Expert Learning",
    ],
  },
  {
    key: "aquariums",
    image: AquariumImage,
    imageAlt: "Marine wildlife expedition and ocean conservation experience",
    eyebrow: "Aquariums",
    icon: <Waves size={18} />,
    title: "Aquarium Travel Programs Often Highlight:",
    items: [
      "Marine Ecosystems",
      "Ocean Conservation",
      "Wildlife Education",
      "Scientific Discovery",
      "Marine Research",
    ],
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
      description:
        "Luxury travel agency specializing in donor expedition cruises, nonprofit donor travel programs, foundation donor cruises, conservation expedition cruises, and educational donor travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping nonprofits, universities, museums, zoos, aquariums, and foundations create exceptional donor expedition cruise programs for major donors and supporters.",
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#angelahughes",
      name: "Angela Hughes",
      jobTitle: "CEO",
      worksFor: { "@id": "https://www.tripsandships.com/#organization" },
      description:
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board member, global luxury travel speaker and trainer, weekly industry columnist, and travel expert with over 40 years of experience and travel to more than 121 countries.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/donor-expedition-cruises",
      url: "https://www.tripsandships.com/donor-expedition-cruises",
      name: "Donor Expedition Cruises | Exclusive Adventure Travel for Nonprofit Supporters",
      description:
        "Discover how donor expedition cruises help nonprofits, universities, museums, zoos, aquariums, and foundations strengthen donor relationships through immersive travel, expert-led exploration, and unforgettable experiences.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/donor-expedition-cruises#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Group Travel",
          item: "https://www.tripsandships.com/group-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Donor Expedition Cruises",
          item: "https://www.tripsandships.com/donor-expedition-cruises",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/donor-expedition-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a donor expedition cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A donor expedition cruise is a travel program designed to engage donors, patrons, board members, and supporters through educational and adventure-focused cruise experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Why are expedition cruises effective for donor engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They create meaningful shared experiences, encourage relationship building, and align with the interests of many philanthropic supporters.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations are most popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Antarctica, the Arctic, Alaska, the Galápagos Islands, Iceland, Greenland, and wildlife-focused destinations are among the most popular.",
          },
        },
        {
          "@type": "Question",
          name: "Are donor expedition cruises educational?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most voyages include lectures, naturalists, scientists, conservation experts, and educational programming.",
          },
        },
        {
          "@type": "Question",
          name: "Which organizations benefit from donor expedition cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities, museums, aquariums, zoos, foundations, conservation groups, and nonprofits frequently use expedition travel for engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Do expedition cruises help with donor retention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many organizations find that shared travel experiences strengthen relationships and increase long-term donor loyalty.",
          },
        },
        {
          "@type": "Question",
          name: "Why are small ships preferred?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small ships create more interaction, stronger group connections, and access to remote destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Can organizations include their own speakers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many programs feature organizational leaders, researchers, curators, scientists, or guest experts.",
          },
        },
        {
          "@type": "Question",
          name: "Are expedition cruises suitable for older donors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many expedition cruise operators provide comfortable accommodations and varying activity levels to accommodate different traveler needs.",
          },
        },
        {
          "@type": "Question",
          name: "Do donor expedition cruises generate revenue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can support fundraising efforts through donor retention, stewardship, engagement, and travel-related revenue opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should we plan a donor expedition cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally, planning should begin 12 to 18 months in advance. This allows sufficient time for ship selection, itinerary customization, marketing to supporters, and managing guest registrations.",
          },
        },
        {
          "@type": "Question",
          name: "Who handles the logistics and travel bookings for the donors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel manages all the complex logistics, including cabin assignments, registration, pre/post-cruise hotel stays, flights, and coordination with the cruise line, so your organization can focus entirely on donor relations.",
          },
        },
        {
          "@type": "Question",
          name: "Can we customize the cruise itinerary to align with our specific mission?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on the size of your group, we can arrange private shore excursions, behind-the-scenes research station visits, and custom onboard presentations that highlight your organization's specific conservation or educational projects.",
          },
        },
        {
          "@type": "Question",
          name: "What is the typical group size for a donor cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Group sizes can vary from a small block of 10-20 cabins (20-40 guests) to a full ship charter of 100+ guests, depending on your donor base size and fundraising objectives.",
          },
        },
        {
          "@type": "Question",
          name: "Are there fitness or physical requirements for donors on these cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While expedition cruises visit remote areas, most excursions (like Zodiac tours and guided walks) offer varying levels of activity. We help select ships and itineraries that accommodate different mobility levels so all your donors feel comfortable.",
          },
        },
      ],
    },
  ],
};

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is a donor expedition cruise?",
      a: "A donor expedition cruise is a travel program designed to engage donors, patrons, board members, and supporters through educational and adventure-focused cruise experiences.",
    },
    {
      q: "Why are expedition cruises effective for donor engagement?",
      a: "They create meaningful shared experiences, encourage relationship building, and align with the interests of many philanthropic supporters.",
    },
    {
      q: "What destinations are most popular?",
      a: "Antarctica, the Arctic, Alaska, the Galápagos Islands, Iceland, Greenland, and wildlife-focused destinations are among the most popular.",
    },
    {
      q: "Are donor expedition cruises educational?",
      a: "Yes. Most voyages include lectures, naturalists, scientists, conservation experts, and educational programming.",
    },
    {
      q: "Which organizations benefit from donor expedition cruises?",
      a: "Universities, museums, aquariums, zoos, foundations, conservation groups, and nonprofits frequently use expedition travel for engagement.",
    },
    {
      q: "Do expedition cruises help with donor retention?",
      a: "Many organizations find that shared travel experiences strengthen relationships and increase long-term donor loyalty.",
    },
    {
      q: "Why are small ships preferred?",
      a: "Small ships create more interaction, stronger group connections, and access to remote destinations.",
    },
    {
      q: "Can organizations include their own speakers?",
      a: "Yes. Many programs feature organizational leaders, researchers, curators, scientists, or guest experts.",
    },
    {
      q: "Are expedition cruises suitable for older donors?",
      a: "Many expedition cruise operators provide comfortable accommodations and varying activity levels to accommodate different traveler needs.",
    },
    {
      q: "Do donor expedition cruises generate revenue?",
      a: "They can support fundraising efforts through donor retention, stewardship, engagement, and travel-related revenue opportunities.",
    },
    {
      q: "How far in advance should we plan a donor expedition cruise?",
      a: "Ideally, planning should begin 12 to 18 months in advance. This allows sufficient time for ship selection, itinerary customization, marketing to supporters, and managing guest registrations.",
    },
    {
      q: "Who handles the logistics and travel bookings for the donors?",
      a: "Trips & Ships Luxury Travel manages all the complex logistics, including cabin assignments, registration, pre/post-cruise hotel stays, flights, and coordination with the cruise line, so your organization can focus entirely on donor relations.",
    },
    {
      q: "Can we customize the cruise itinerary to align with our specific mission?",
      a: "Yes. Depending on the size of your group, we can arrange private shore excursions, behind-the-scenes research station visits, and custom onboard presentations that highlight your organization's specific conservation or educational projects.",
    },
    {
      q: "What is the typical group size for a donor cruise?",
      a: "Group sizes can vary from a small block of 10-20 cabins (20-40 guests) to a full ship charter of 100+ guests, depending on your donor base size and fundraising objectives.",
    },
    {
      q: "Are there fitness or physical requirements for donors on these cruises?",
      a: "While expedition cruises visit remote areas, most excursions (like Zodiac tours and guided walks) offer varying levels of activity. We help select ships and itineraries that accommodate different mobility levels so all your donors feel comfortable.",
    },
  ];

  return (
    <div className="Asc-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`Asc-faq-item${open === i ? " Asc-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="Asc-faq-q">
            <span>{item.q}</span>
            <span className="Asc-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="Asc-faq-a">
              <div className="Asc-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const DonorExpeditionCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [ExpeditionShip1, ExpeditionShip2, ExpeditionShip3];
  const [activeDest, setActiveDest] = useState("antarctica");

  const currentDest =
    donorExpeditionDestinations.find((d) => d.id === activeDest) ||
    donorExpeditionDestinations[0];
  const ActiveIcon = currentDest.icon;

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Donor Expedition Cruises | Exclusive Adventure Travel for Nonprofit
          Supporters
        </title>
        <meta name="title" content="Donor Expedition Cruises" />
        <meta
          name="description"
          content="Discover how donor expedition cruises help nonprofits, universities, museums, zoos, aquariums, and foundations strengthen donor relationships through immersive travel, expert-led exploration, and unforgettable experiences."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="Scenic_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Scenic_hero_bg ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="Scenic_hero_overlay"></div>
        <div className="Scenic_hero_content">
          <h1>
            Donor Expedition Cruises: Transforming Supporters Into Lifelong
            Ambassadors
          </h1>
          <p>
            For many organizations, donor relationships are built through
            events, meetings, newsletters, and annual campaigns. While these
            engagement strategies remain important, few opportunities create
            stronger connections than shared travel experiences.
          </p>
          {readMore && (
            <>
              <p>
                Donor expedition cruises combine adventure, education,
                exploration, and mission engagement in ways that traditional
                donor programs simply cannot match. Whether exploring
                Antarctica, the Arctic, Alaska, the Galápagos Islands, or remote
                wildlife destinations, expedition cruises provide extraordinary
                opportunities for nonprofits, universities, museums, aquariums,
                zoos, and foundations to deepen relationships with their most
                dedicated supporters.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help mission-driven
                organizations design exceptional donor expedition programs that
                align with institutional goals while delivering unforgettable
                journeys. Led by <strong>Angela Hughes</strong>, one of the
                travel industry's most respected luxury travel experts, our team
                specializes in creating experiences that inspire lasting
                philanthropic loyalty.
              </p>
            </>
          )}
          <div className="Scenic_readmore_wrapper">
            <button
              className="Scenic_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>
      {/* ══ WHY EXPEDITION CRUISES ARE IDEAL FOR DONOR ENGAGEMENT ════════════ */}
      <section
        className="adg-c-section adg-c-bg-dark"
        id="adg-why-conservation"
      >
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Donor Engagement Through Travel
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Expedition Cruises Are Ideal for Donor Engagement
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Expedition travel naturally attracts individuals who value
                lifelong learning, exploration, and philanthropy.
              </p>
              <p className="adg-c-body adg-c-body-light">
                One of the greatest benefits of expedition travel is the amount
                of quality interaction it creates. During an expedition cruise,
                donors may spend several days together participating in
                excursions, attending educational lectures, sharing meals, and
                engaging in meaningful conversations.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Donors Are Drawn to Expedition Travel For:
                </span>
                <div className="adg-c-pill-grid">
                  {[
                    "Lifelong Learning",
                    "Exploration",
                    "Conservation",
                    "Education",
                    "Philanthropy",
                    "Meaningful Experiences",
                    "Personal Growth",
                    "Global Awareness",
                  ].map((item, i) => (
                    <div key={i} className="adg-c-pill">
                      <span className="adg-c-pill-check">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ WHAT IS A DONOR EXPEDITION CRUISE? ═══════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">What Is a Donor Expedition Cruise?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={GuestsAntarctica1}
                    alt="Donors and supporters participating in an educational expedition cruise experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  A donor expedition cruise is a specially organized voyage
                  designed for an organization's most engaged supporters and
                  stakeholders.
                </p>

                <p className="ugt-component-text">
                  Unlike traditional cruises, expedition cruises focus on
                  exploration, education, wildlife, science, and cultural
                  discovery, creating immersive experiences that connect
                  participants with destinations in meaningful ways.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Typical Participants Include:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Major Donors",
                      "Leadership Donors",
                      "Patrons",
                      "Board Members",
                      "Legacy Society Members",
                      "Foundation Supporters",
                      "Alumni Donors",
                      "Conservation Advocates",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
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
      {/* ════════════════════════════════════════
     SMALL SHIP ADVANTAGES
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Small Ship Advantages</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Most expedition cruises operate on small ships, creating a more
              immersive, educational, and relationship-focused experience than
              traditional large-vessel cruising.
            </p>
          </div>

          <div className="adg-c-venues-grid">
            {[
              {
                id: 1,
                eyebrow: "Small Ship Benefits",
                name: "Why Small Ships Matter",
                highlight:
                  "The intimate nature of expedition vessels creates ideal conditions for meaningful donor engagement and shared experiences.",
                items: [
                  "Intimate group atmosphere",
                  "Greater interaction among participants",
                  "Access to remote destinations",
                  "Expert-led experiences",
                  "Enhanced educational opportunities",
                  "Strong community building",
                ],
                callout:
                  "These qualities make expedition cruising especially effective for donor engagement.",
              },

              {
                id: 2,
                eyebrow: "Premium Experiences",
                name: "Exclusive Experiences for Donors",
                highlight:
                  "Organizations can elevate voyages through carefully curated experiences that deepen supporter relationships.",
                items: [
                  "Private receptions",
                  "Leadership discussions",
                  "Special lectures",
                  "Behind-the-scenes access",
                  "Hosted excursions",
                  "Recognition events",
                ],
                callout:
                  "Exclusive programming creates a premium experience while strengthening donor connections.",
              },

              {
                id: 3,
                eyebrow: "Donor Stewardship",
                name: "Expedition Cruises as Stewardship Tools",
                highlight:
                  "Many organizations incorporate travel into long-term stewardship strategies to build stronger and more lasting donor relationships.",
                items: [
                  "Increased donor retention",
                  "Higher engagement levels",
                  "Stronger personal relationships",
                  "Enhanced organizational loyalty",
                  "Increased planned giving interest",
                  "Greater philanthropic participation",
                ],
                callout:
                  "Travel often becomes one of the most effective relationship-building tools available.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${i + 1}`}
              >
                <div className="adg-c-venue-top">
                  <span className="adg-c-venue-eyebrow">{venue.eyebrow}</span>

                  <h3 className="adg-c-venue-name">{venue.name}</h3>

                  <p className="adg-c-venue-highlight">{venue.highlight}</p>
                </div>

                <ul className="adg-c-venue-list">
                  {venue.items.map((item, j) => (
                    <li key={j}>
                      <span className="adg-c-venue-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="adg-c-venue-callout">
                  <span className="adg-c-venue-callout-bar"></span>

                  <p>{venue.callout}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="Ejv-verdict-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejv-verdict-container">
          {/* Header */}
          <div className="Ejv-verdict-header">
            <span className="Ejv-verdict-eyebrow">
              Donor Engagement Benefits
            </span>

            <h2 className="Ejv-verdict-title">
              Building Stronger Donor Relationships
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* Main card */}
          <div className="Ejv-verdict-card">
            {/* Left — Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={ExpeditionShip4}
                alt="Donors participating in educational expedition travel experiences"
                className="Ejv-verdict-img"
              />

              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">
                  Shared Experiences
                </span>

                <span className="Ejv-verdict-badge-sub">
                  Meaningful Connections
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                One of the greatest benefits of expedition travel is the amount
                of quality interaction it creates. Unlike traditional
                fundraising events, expedition cruises provide extended
                opportunities for donors and organizational leaders to connect
                in meaningful ways.
              </p>

              <ul className="Ejv-verdict-list">
                {[
                  "Several Days Together",
                  "Participating in Excursions",
                  "Attending Educational Lectures",
                  "Sharing Meals",
                  "Engaging in Meaningful Conversations",
                ].map((item) => (
                  <li key={item} className="Ejv-verdict-list-item">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="Ejv-verdict-check"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejv-verdict-outcome">
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="Ejv-verdict-outcome-icon"
                />

                <p className="Ejv-verdict-outcome-text">
                  These shared experiences create authentic opportunities for
                  relationship building that extend far beyond a typical donor
                  event.
                </p>
              </div>

              <div className="Ejv-verdict-divider"></div>

              <div className="Ejv-verdict-note">
                <Info
                  size={15}
                  strokeWidth={1.8}
                  className="Ejv-verdict-note-icon"
                />

                <p className="Ejv-verdict-note-text">
                  The combination of exploration, learning, and personal
                  interaction often fosters deeper relationships than
                  traditional fundraising activities alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY DONORS VALUE EXPERIENTIAL ENGAGEMENT */}
      <section
        className="adg-section"
        id="why-donors-value-experiential-engagement"
      >
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Why Donors Value Experiential Engagement</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                src={GuestsAntarctica2}
                alt="Donors participating in an expedition cruise and educational travel experience"
                className="adg-side-image"
                style={{ height: "30vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <HandHeart size={28} />
                  <span className="adg-meta-label">
                    Experiential Donor Engagement
                  </span>
                </div>

                <p className="adg-card-lead">
                  Modern donors increasingly seek experiences rather than
                  traditional benefits.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Today's supporters value opportunities that provide meaningful
                  connections, personal enrichment, and a deeper understanding
                  of the causes they care about.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  Expedition cruises bring these elements together while
                  reinforcing organizational missions and creating memorable
                  shared experiences.
                </p>
              </div>
            </div>

            {/* Right Benefits Grid */}
            <div className="adg-list-side">
              {[
                {
                  title: "Experiences Over Material Benefits",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Purpose-Driven Opportunities",
                  icon: <Target size={20} />,
                },
                {
                  title: "Meaningful Connections",
                  icon: <Users size={20} />,
                },
                {
                  title: "Educational Experiences",
                  icon: <BookOpen size={20} />,
                },
                {
                  title: "Community",
                  icon: <HeartHandshake size={20} />,
                },
                {
                  title: "Access to Experts",
                  icon: <Microscope size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">{item.icon}</div>

                  <h4 className="adg-list-item-label">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ══ POPULAR DONOR EXPEDITION CRUISE DESTINATIONS ═════════════════════ */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Popular Donor Expedition <br /> Cruise Destinations
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              The best donor travel programs often feature destinations that
              inspire curiosity and discovery — from Antarctica and the Arctic
              to the Galápagos Islands, Alaska, and remote wildlife and
              conservation destinations around the world.
            </p>
          </div>

          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {donorExpeditionDestinations.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeDest === item.id;
                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveDest(item.id)}
                  >
                    <div className="luc-dest-nav-icon-wrap">
                      <NavIcon size={16} strokeWidth={1.8} />
                    </div>
                    <span className="luc-dest-nav-label">{item.badge}</span>
                    {isActive && <div className="luc-dest-nav-pip"></div>}
                  </button>
                );
              })}
            </nav>

            {/* Detail panel */}
            <div className="luc-dest-panel" key={activeDest}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDest.image}
                  alt={currentDest.title}
                  className="luc-dest-img"
                />
                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>
                  <span className="luc-dest-img-title">
                    {currentDest.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">{currentDest.desc}</p>

              <div className="luc-dest-columns">
                {currentDest.columns.map((col, cIdx) => (
                  <div key={cIdx} className="luc-dest-info-col">
                    <span className="luc-dest-info-label">{col.label}</span>
                    <div className="luc-dest-items-grid">
                      {col.items.map((item) => (
                        <div key={item} className="luc-dest-item">
                          <div className="luc-dest-item-dot"></div>
                          <span className="luc-dest-item-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>
                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    {currentDest.themeLabel}
                  </span>
                  <p className="luc-dest-theme-note-text">
                    {currentDest.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ MISSION ALIGNMENT OPPORTUNITIES ═══════════════════════════════ */}{" "}
      <section
        className="adg-section"
        id="mission-alignment-opportunities"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        {" "}
        <div className="adg-container">
          {" "}
          {/* Header */}{" "}
          <div className="adg-header">
            {" "}
            <h2 className="adg-h2">
              {" "}
              Mission Alignment <br /> Opportunities{" "}
            </h2>{" "}
            <div className="adg-accent-line"></div>{" "}
            <p className="adg-intro">
              {" "}
              Many organizations use expedition travel to reinforce their
              mission, creating educational experiences that connect supporters
              more deeply with the organization's goals and areas of focus.{" "}
            </p>{" "}
          </div>{" "}
          {/* Cards */}{" "}
          <div className="adgs-grid">
            {" "}
            {travelerTypeData.map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                {" "}
                <div className="adg-card-image-wrap">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="adg-card-img"
                  />{" "}
                  <div className="adg-card-image-overlay"></div>{" "}
                  <div className="adg-card-eyebrow-wrap">
                    {" "}
                    <span className="adg-card-eyebrow-icon">
                      {" "}
                      {item.icon}{" "}
                    </span>{" "}
                    <span className="adg-card-eyebrow-label">
                      {" "}
                      {item.eyebrow}{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="adg-card-body">
                  {" "}
                  <h3 className="adg-card-title">{item.title}</h3>{" "}
                  <ul className="adg-card-list">
                    {" "}
                    {item.items.map((point, idx) => (
                      <li key={idx} className="adg-card-list-item">
                        {" "}
                        <span className="adg-card-list-dot"></span>{" "}
                        <span className="adg-card-list-text">{point}</span>{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                  <p
                    className="adg-card-description"
                    style={{ color: "var(--navy)", fontSize: "16px" }}
                  >
                    {" "}
                    {item.description}{" "}
                  </p>{" "}
                </div>{" "}
                <div className="adg-card-bar"></div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* ══ EDUCATIONAL VALUE OF DONOR EXPEDITION CRUISES ═══════════════════ */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Expedition Cruise Education
            </span>

            <h2 className="ugt-advantage-title">
              Educational Value of Donor Expedition Cruises
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Education is a core component of nearly every expedition voyage,
              creating engaging learning experiences that enrich the journey
              while supporting organizational missions.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            {[
              {
                icon: Mic,
                title: "Expert Lectures",
                desc: "Guests learn from experienced specialists who provide valuable insights into destinations, history, science, and exploration.",
              },
              {
                icon: Presentation,
                title: "Naturalist Presentations",
                desc: "Naturalists help travelers better understand local ecosystems, wildlife behavior, environmental challenges, and biodiversity.",
              },
              {
                icon: FlaskConical,
                title: "Scientific Insights",
                desc: "Participants gain a deeper appreciation for ongoing research, discovery, and scientific efforts occurring in remote regions.",
              },
              {
                icon: Globe,
                title: "Conservation Discussions",
                desc: "Educational sessions often explore conservation initiatives, environmental stewardship, and global sustainability challenges.",
              },
              {
                icon: Landmark,
                title: "Cultural Programs",
                desc: "Destination-focused programming introduces travelers to local traditions, history, communities, and cultural heritage.",
              },
              {
                icon: Binoculars,
                title: "Wildlife Interpretation",
                desc: "Experts provide context and interpretation that enhance wildlife encounters and create more meaningful experiences.",
              },
            ].map((card, i) => {
              const Icon = card.icon;

              return (
                <div key={i} className="ugt-advantage-card">
                  <div className="ugt-icon-box">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <h4 className="ugt-card-title">{card.title}</h4>

                  <p className="ugt-card-desc">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ══ WHAT MAKES A SUCCESSFUL DONOR EXPEDITION CRUISE ══════════════════ */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                src={GuestsAntarctica1}
                alt="Donors enjoying a high-quality expedition cruise excursion"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap">
              <img
                src={ExpeditionShip2}
                alt="Premium donor expedition cruise experience with expert leadership"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">Key Pillars</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              What Makes a Successful Donor Expedition Cruise?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              The most successful programs combine mission alignment,
              educational excellence, expert leadership, and thoughtful
              stewardship.
            </p>
            <p className="luc-why-subintro">
              Four pillars consistently define the strongest donor expedition
              programs:
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Mission Alignment</h3>
                  <p className="luc-why-feature-desc">
                    The destination and programming should directly reinforce
                    the organization's purpose — bringing research, education,
                    or conservation goals to life in the field.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Educational Excellence
                  </h3>
                  <p className="luc-why-feature-desc">
                    Expert lectures, naturalist presentations, and scientific
                    insight transform the voyage into substantive lifelong
                    learning, not simply a vacation.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Expert Leadership</h3>
                  <p className="luc-why-feature-desc">
                    Donors value access to knowledgeable scientists,
                    researchers, curators, and organizational leaders who deepen
                    every excursion and discussion.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Thoughtful Stewardship
                  </h3>
                  <p className="luc-why-feature-desc">
                    High-quality service, meaningful donor interaction, and
                    intentional recognition turn the voyage into a lasting
                    stewardship milestone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ WHY ORGANIZATIONS PARTNER WITH TRAVEL EXPERTS ════════════════════ */}
      <section
        className="wnf-section wnf-bg-white"
        id="wnf-conservation-partnerships"
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              Why Organizations Partner with <br /> Travel Experts
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column */}
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={ExpeditionShip3}
                    alt="Donor expedition cruise planning and logistics strategy"
                    className="wnf-photo"
                  />
                </div>
                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={GuestsAntarctica2}
                    alt="Major donors enjoying a high-quality expedition cruise experience"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Expedition travel involves complex logistics and specialized
                  expertise. Professional travel partners provide:
                </p>
                <ul className="wnf-feature-list">
                  {[
                    "Cruise Selection",
                    "Itinerary Development",
                    "Supplier Relationships",
                    "Guest Registration",
                    "Risk Management",
                    "Marketing Support",
                    "Onsite Coordination",
                    "Donor Experience Management",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Check size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  This allows organizations to focus on engagement while
                  ensuring a seamless travel experience for every donor on
                  board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ WHO PARTICIPATES ═════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Participates in Donor Expedition Cruises?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>
              <ul className="Asc-who-list">
                {[
                  "Major Donors & Leadership Donors",
                  "Board Members & Patrons",
                  "Legacy Society Members",
                  "Alumni Supporters",
                  "Conservation Advocates",
                  "Museum Patrons & Foundation Benefactors",
                  "Lifelong Learners",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Best For</h3>
              <ul className="Asc-who-list">
                {[
                  "Organizations seeking purely transactional fundraising tools",
                  "Donor programs without dedicated logistics or stewardship support",
                  "Audiences with little interest in education, exploration, or travel",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ══ REVENUE & ENGAGEMENT BENEFITS ════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-revenue">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Revenue &amp; Engagement Benefits <br /> for Your Organization
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Benefits List */}
            <div className="adg-c-overview-icons">
              {[
                "Increased Donor Loyalty",
                "Greater Mission Awareness",
                "Enhanced Fundraising Opportunities",
                "Board Engagement",
                "Membership Growth",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — Callout Card + Image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Travel creates emotional connections that often translate
                    into long-term support — making donor expedition cruises one
                    of the most effective relationship-building tools available
                    to mission-driven organizations.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExpeditionShip6}
                  alt="Donors exploring expedition destinations with expert guides"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Donor Discovery & Engagement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ ANGELA HUGHES AUTHORITY BOX ══════════════════════════════════════ */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Donor Expedition Cruise Leadership
            </span>
            <h2 className="Adg-expert-title">
              Angela Hughes: A Trusted Advisor for Donor Expedition Cruise
              Programs
            </h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - Donor Expedition Cruise Travel Expert"
                  className="Adg-expert-portrait"
                />
                <div className="Adg-expert-portrait-badge">
                  <Star size={14} />
                  <span>40+ Years Experience</span>
                </div>
              </div>
              <div className="Adg-expert-name-card">
                <h3 className="Adg-expert-name">Angela Hughes</h3>
                <p className="Adg-expert-role">
                  CEO · Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  121+ Countries Visited
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="Adg-expert-content-col">
              <div className="Adg-expert-quote-box">
                <div className="Adg-expert-quote-icon">
                  <Quote size={36} />
                </div>
                <blockquote className="Adg-expert-quote-text">
                  Nonprofits, universities, museums, aquariums, zoos, and
                  foundations benefit from Angela Hughes' decades of global
                  travel expertise and deep knowledge of expedition cruising and
                  donor engagement.
                </blockquote>
              </div>

              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Her Credentials Include
                </h4>
                <div className="Adg-expert-credentials-grid">
                  {[
                    "More than 40 years in travel",
                    "Travel to over 121 countries",
                    "Founder of Luxury Travel University",
                    "Travel Leaders Network Advisory Board Member",
                    "Luxury Travel Influencer of the Year",
                    "International travel educator and speaker",
                    "Weekly travel columnist",
                    "Recognized among the travel industry's most influential professionals",
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">
                        <Star size={16} />
                      </span>
                      <span className="Adg-expert-list-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="Adg-expert-quote-box"
                style={{ marginTop: "24px" }}
              >
                <blockquote className="Adg-expert-quote-text">
                  Her leadership helps organizations confidently develop donor
                  expedition cruise programs that reflect institutional
                  excellence, extend their mission, and create lasting value for
                  donors and supporters.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about donor expedition cruise
              programs.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExpeditionShip5}
            alt="Donor expedition cruise wildlife and exploration experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Donor Expedition Cruises
                </span>
                <h2 className="Asc-help-h2">
                  Strengthen Donor Relationships Through <br />
                  Shared Exploration &amp; Discovery
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Donor expedition cruises offer foundations, nonprofits,
                    universities, museums, aquariums, and conservation
                    organizations a unique opportunity to strengthen
                    relationships through shared exploration and discovery.
                  </p>
                  <p className="Asc-help-intro">
                    By combining education, adventure, mission engagement, and
                    extraordinary destinations, these journeys create
                    experiences that inspire loyalty, deepen connections, and
                    reinforce organizational impact.
                    {!readMore && (
                      <button
                        onClick={() => setReadMore(true)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--bg-white)",
                          cursor: "pointer",
                          marginLeft: "8px",
                          fontWeight: "600",
                          padding: 0,
                        }}
                      >
                        Read More
                      </button>
                    )}
                  </p>
                  <br />
                  {readMore && (
                    <p className="Asc-help-intro">
                      Whether exploring Antarctica's icy landscapes, the
                      biodiversity of the Galápagos, or the wildlife-rich
                      coastlines of Alaska, participants return with more than
                      memories.
                      <br />
                      <br />
                      They return with a stronger personal connection to the
                      organization's mission and a deeper commitment to its
                      future.
                      <br />
                      <br />
                      With Angela Hughes' global expertise and Trips &amp; Ships
                      Luxury Travel's proven planning process, your organization
                      can create donor expedition programs that inspire
                      engagement, strengthen community, and support long-term
                      philanthropic success.
                      <br />
                      <br />
                      <strong>
                        The most successful donor relationships aren't built
                        through transactions. They're built through meaningful
                        experiences that people remember for a lifetime.
                      </strong>
                      <button
                        onClick={() => setReadMore(false)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--bg-white)",
                          cursor: "pointer",
                          marginLeft: "8px",
                          fontWeight: "600",
                          padding: 0,
                        }}
                      >
                        Read Less
                      </button>
                    </p>
                  )}
                  <div className="Asc-help-btn-container">
                    <Link to="/contact" className="Asc-help-cta-btn" style={{ textDecoration: "none" }}>
                      Start Planning Your Donor Expedition Cruise
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Donor Expedition Cruise Programs:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Increased donor loyalty and retention",
                      "Stronger personal donor relationships",
                      "Mission engagement extended beyond the organization",
                      "Exclusive, expert-led wildlife and cultural experiences",
                      "Community building among major donors",
                      "New revenue and planned giving opportunities",
                      "Long-term institutional loyalty and advocacy",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="Asc-help-intro" style={{ marginTop: "20px" }}>
                    Contact Trips &amp; Ships Luxury Travel today to begin
                    designing your custom donor expedition cruise program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonorExpeditionCruises;
