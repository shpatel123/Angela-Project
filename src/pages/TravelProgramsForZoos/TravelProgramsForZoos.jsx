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
  Users,
  Compass,
  Anchor,
  Ship,
  Waves,
  GraduationCap,
  Globe,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import BucketGalapagos from "../../assets/PrivateJetConciergeTravel/galapagos-expedition-wildlife.jpg";
import BucketAfrica from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-group.webp";
import BucketAlaska from "../../assets/AlaskaCruisesExploraJourneys/alaska-glacier-mountain-lake-scenic-wilderness-vacation.jpeg";

import HeroImage1 from "../../assets/TravelProgramsForZoos/zoo-travel-program-safari-expedition-hero.png";
import HeroImage2 from "../../assets/TravelProgramsForZoos/conservation-travel-wildlife-group-hero.png";
import HeroImage3 from "../../assets/TravelProgramsForZoos/luxury-educational-travel-zoo-member-hero.jpg";

import RainforestDest from "../../assets/TravelProgramsForZoos/rainforest-exploration-costa-rica-amazon-borneo.jpg";

import ZooSupportersWildlife from "../../assets/TravelProgramsForZoos/zoo-supporters-firsthand-wildlife-experience.png";
import ZooConservationExpeditionPrimary from "../../assets/TravelProgramsForZoos/zoo-conservation-wildlife-expedition-primary.webp";
import ExpertLeadershipConservationAccent from "../../assets/TravelProgramsForZoos/expert-leadership-conservation-travel-accent.jpg";

import ConservationTravelPlanningLogistics from "../../assets/TravelProgramsForZoos/conservation-travel-planning-logistics-strategy.png";

import ConservationTravelersExploring from "../../assets/TravelProgramsForZoos/conservation-travelers-exploring-wildlife-destinations.jpg";
import ZooConservationCtaBackground from "../../assets/TravelProgramsForZoos/zoo-conservation-travel-program-cta-background.jpg";

import { Helmet } from "react-helmet-async";

const zooTravelDestinations = [
  {
    id: "african-safaris",
    title: "African Safaris",
    badge: "African Safaris",
    image: HeroImage1,
    icon: Compass,
    desc: "African safaris remain among the most popular conservation travel experiences for zoo and conservation organization audiences — offering unparalleled opportunities to observe the Big Five and iconic African wildlife in their natural habitats.",
    columns: [
      {
        label: "Wildlife Highlights:",
        items: [
          "Lions, Leopards & Cheetahs",
          "Elephants & Rhinos",
          "Giraffes & Zebras",
          "Wildebeest Migrations",
          "Endangered Species",
        ],
      },
      {
        label: "Popular Destinations:",
        items: [
          "Kenya & Tanzania",
          "Botswana",
          "South Africa",
          "Namibia & Zambia",
        ],
      },
    ],
    themeLabel: "The Premier Conservation Travel Experience",
    themeText:
      "Safaris offer unparalleled opportunities to observe wildlife in natural habitats — and often inspire a deeper, lasting commitment to the conservation efforts supporters have helped fund.",
  },
  {
    id: "galapagos",
    title: "Galápagos Expeditions",
    badge: "Galápagos",
    image: BucketGalapagos,
    icon: Anchor,
    desc: "The Galápagos Islands provide extraordinary educational experiences for conservation audiences — serving as a living laboratory for conservation and evolution, with fearless wildlife populations found nowhere else on Earth.",
    columns: [
      {
        label: "Wildlife Highlights:",
        items: [
          "Giant Tortoises",
          "Marine Iguanas",
          "Blue-Footed Boobies",
          "Sea Lions & Fur Seals",
          "Unique Biodiversity",
        ],
      },
    ],
    themeLabel: "A Living Conservation Classroom",
    themeText:
      "Educational travel programs here maximize impact by including expert naturalist guides — the Galápagos Islands serve as one of the world's most compelling examples of conservation success.",
  },
  {
    id: "polar-expeditions",
    title: "Polar Wildlife Expeditions",
    badge: "Polar Expeditions",
    image: ExpertLeadershipConservationAccent,
    icon: Ship,
    desc: "Arctic and Antarctic voyages appeal strongly to conservation-minded travelers seeking transformational experiences — offering valuable perspectives on climate, biodiversity, and environmental change while encountering iconic polar wildlife.",
    columns: [
      {
        label: "Wildlife & Highlights:",
        items: [
          "Polar Bears",
          "Penguins",
          "Whales & Seals",
          "Ice Ecosystems",
          "Scientific Research Stations",
        ],
      },
    ],
    themeLabel: "Conservation at the Ends of the Earth",
    themeText:
      "These expeditions offer a deeper understanding of the world's most fragile environments — and often become the most transformational travel experiences in a guest's lifetime.",
  },
  {
    id: "rainforest",
    title: "Rainforest Exploration Programs",
    badge: "Rainforests",
    image: RainforestDest,
    icon: MapPin,
    desc: "Rainforests contain some of the world's greatest biodiversity — and travel programs focused on these ecosystems provide extraordinary opportunities for conservation education, wildlife observation, and environmental awareness.",
    columns: [
      {
        label: "Popular Regions:",
        items: [
          "Costa Rica",
          "Amazon Basin (Brazil & Peru)",
          "Ecuador",
          "Panama",
          "Borneo",
        ],
      },
    ],
    themeLabel: "Biodiversity Immersion",
    themeText:
      "Travelers experience extraordinary ecosystems while learning about conservation challenges and success stories — bringing the organization's educational mission to life in remarkable ways.",
  },
  {
    id: "alaska-wildlife",
    title: "Alaska Wildlife Cruises",
    badge: "Alaska Wildlife",
    image: BucketAlaska,
    icon: Waves,
    desc: "Alaska provides exceptional wildlife viewing opportunities for conservation audiences — with small ship cruises offering intimate access to remote natural environments and extraordinary wildlife encounters unavailable through standard tourism.",
    columns: [
      {
        label: "Wildlife Highlights:",
        items: [
          "Humpback Whales & Orcas",
          "Brown & Black Bears",
          "Bald Eagles",
          "Sea Otters & Puffins",
          "Coastal Ecosystems",
        ],
      },
    ],
    themeLabel: "Intimate Access to the Wild",
    themeText:
      "Small ship cruises through Alaska's Inside Passage provide close wildlife access that larger ships simply cannot reach — making these programs especially compelling for zoo and conservation audiences.",
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
        "Luxury travel agency specializing in zoo travel programs, conservation organization travel, wildlife group travel, expedition cruises, African safaris, and premium educational group travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping zoos, conservation organizations, and wildlife institutions create exceptional group travel programs for members, donors, and supporters.",
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
      "@id":
        "https://www.tripsandships.com/travel-programs-for-zoos-conservation-organizations",
      url: "https://www.tripsandships.com/travel-programs-for-zoos-conservation-organizations",
      name: "Travel Programs for Zoos & Conservation Organizations | Wildlife & Conservation Travel",
      description:
        "Discover how zoos and conservation organizations use travel programs to engage members, donors, and supporters through wildlife safaris, conservation expeditions, educational travel, and immersive nature experiences.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/travel-programs-for-zoos-conservation-organizations#breadcrumb",
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
          name: "Travel Programs for Zoos & Conservation Organizations",
          item: "https://www.tripsandships.com/travel-programs-for-zoos-conservation-organizations",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/travel-programs-for-zoos-conservation-organizations#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are travel programs for zoos and conservation organizations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These are educational group travel experiences designed for members, donors, supporters, and wildlife enthusiasts of zoos and conservation organizations.",
          },
        },
        {
          "@type": "Question",
          name: "Why do zoos offer travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel programs extend educational missions, engage supporters, strengthen donor relationships, inspire conservation awareness, and create additional revenue opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations are popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "African safaris, the Galápagos Islands, Antarctica, Alaska, Costa Rica, and the Amazon are among the most popular destinations for zoo and conservation travel programs.",
          },
        },
        {
          "@type": "Question",
          name: "Are conservation travel programs educational?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most programs feature zoologists, wildlife biologists, conservation scientists, naturalists, and researchers who add educational depth to every wildlife encounter.",
          },
        },
        {
          "@type": "Question",
          name: "Who can participate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Programs may be open to members, donors, supporters, and the public depending on the organization's structure. Some exclusive departures may be reserved for donor groups.",
          },
        },
        {
          "@type": "Question",
          name: "Why are safaris so popular with zoo audiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safaris provide extraordinary wildlife encounters and meaningful opportunities to observe the animals that zoo supporters care most about in their natural habitats — inspiring deeper conservation commitment.",
          },
        },
        {
          "@type": "Question",
          name: "Can scientists lead conservation travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many programs include zoologists, wildlife biologists, conservation researchers, and naturalists as hosts and expert guides.",
          },
        },
        {
          "@type": "Question",
          name: "Do travel programs support zoo fundraising efforts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can strengthen donor engagement, support membership growth, create additional revenue streams, and deepen long-term philanthropic support for conservation efforts.",
          },
        },
        {
          "@type": "Question",
          name: "Are these trips suitable for wildlife photographers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Wildlife photography programs are among the fastest-growing segments of conservation travel — and many zoo audiences include passionate nature photographers.",
          },
        },
        {
          "@type": "Question",
          name: "How do organizations manage zoo travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many partner with specialized travel companies that handle planning, logistics, and operations — allowing organization staff to focus on educational content and participant engagement.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a successful zoo conservation travel program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most effective programs combine mission alignment, educational depth, authentic wildlife encounters, expert leadership, high-quality travel experiences, and exceptional service.",
          },
        },
        {
          "@type": "Question",
          name: "How can conservation travel programs strengthen member retention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel programs can serve as compelling membership benefits — offering priority registration, member-only departures, exclusive wildlife experiences, and access to conservation experts that increase member loyalty.",
          },
        },
        {
          "@type": "Question",
          name: "Who typically participates in zoo conservation travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical participants include zoo members, donors, wildlife enthusiasts, nature photographers, conservation supporters, retirees, and lifelong learners.",
          },
        },
        {
          "@type": "Question",
          name: "Why partner with a professional travel company for zoo conservation programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional travel partners handle itinerary development, safari and cruise selection, travel logistics, guest registration, marketing support, risk management, and onsite coordination.",
          },
        },
        {
          "@type": "Question",
          name: "What is affinity travel for conservation organizations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Affinity travel refers to group travel organized around shared interests — such as wildlife, conservation, and environmental education — the natural audience for zoo and conservation organization travel programs.",
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
      q: "What are travel programs for zoos and conservation organizations?",
      a: "These are educational group travel experiences designed for members, donors, supporters, and wildlife enthusiasts of zoos and conservation organizations.",
    },
    {
      q: "Why do zoos offer travel programs?",
      a: "Travel programs extend educational missions, engage supporters, strengthen donor relationships, inspire conservation awareness, and create additional revenue opportunities.",
    },
    {
      q: "What destinations are popular?",
      a: "African safaris, the Galápagos Islands, Antarctica, Alaska, Costa Rica, and the Amazon are among the most popular destinations for zoo and conservation travel programs.",
    },
    {
      q: "Are conservation travel programs educational?",
      a: "Yes. Most programs feature zoologists, wildlife biologists, conservation scientists, naturalists, and researchers who add educational depth to every wildlife encounter.",
    },
    {
      q: "Who can participate?",
      a: "Programs may be open to members, donors, supporters, and the public depending on the organization's structure. Some exclusive departures may be reserved for donor groups.",
    },
    {
      q: "Why are safaris so popular with zoo audiences?",
      a: "Safaris provide extraordinary wildlife encounters and meaningful opportunities to observe the animals that zoo supporters care most about in their natural habitats — inspiring deeper conservation commitment.",
    },
    {
      q: "Can scientists lead conservation travel programs?",
      a: "Yes. Many programs include zoologists, wildlife biologists, conservation researchers, and naturalists as hosts and expert guides.",
    },
    {
      q: "Do travel programs support zoo fundraising efforts?",
      a: "They can strengthen donor engagement, support membership growth, create additional revenue streams, and deepen long-term philanthropic support for conservation efforts.",
    },
    {
      q: "Are these trips suitable for wildlife photographers?",
      a: "Absolutely. Wildlife photography programs are among the fastest-growing segments of conservation travel — and many zoo audiences include passionate nature photographers.",
    },
    {
      q: "How do organizations manage zoo travel programs?",
      a: "Many partner with specialized travel companies that handle planning, logistics, and operations — allowing organization staff to focus on educational content and participant engagement.",
    },
    {
      q: "What makes a successful zoo conservation travel program?",
      a: "The most effective programs combine mission alignment, educational depth, authentic wildlife encounters, expert leadership, high-quality travel experiences, and exceptional service.",
    },
    {
      q: "How can conservation travel programs strengthen member retention?",
      a: "Travel programs can serve as compelling membership benefits — offering priority registration, member-only departures, exclusive wildlife experiences, and access to conservation experts that increase member loyalty.",
    },
    {
      q: "Who typically participates in zoo conservation travel programs?",
      a: "Typical participants include zoo members, donors, wildlife enthusiasts, nature photographers, conservation supporters, retirees, and lifelong learners.",
    },
    {
      q: "Why partner with a professional travel company for zoo conservation programs?",
      a: "Professional travel partners handle itinerary development, safari and cruise selection, travel logistics, guest registration, marketing support, risk management, and onsite coordination.",
    },
    {
      q: "What is affinity travel for conservation organizations?",
      a: "Affinity travel refers to group travel organized around shared interests — such as wildlife, conservation, and environmental education — the natural audience for zoo and conservation organization travel programs.",
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

const TravelProgramsForZoosConservationOrganizations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreSuccessfulProgram, setReadMoreSuccessfulProgram] = useState(false);
  const [hovered, setHovered] = useState(null);
  const images = [BucketAfrica, HeroImage2, HeroImage3];
  const [activeDest, setActiveDest] = useState("african-safaris");

  const currentDest =
    zooTravelDestinations.find((d) => d.id === activeDest) ||
    zooTravelDestinations[0];
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
          Travel Programs for Zoos &amp; Conservation Organizations | Wildlife
          &amp; Conservation Travel
        </title>
        <meta
          name="title"
          content="Travel Programs for Zoos & Conservation Organizations"
        />
        <meta
          name="description"
          content="Discover how zoos and conservation organizations use travel programs to engage members, donors, and supporters through wildlife safaris, conservation expeditions, educational travel, and immersive nature experiences."
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
            Travel Programs for Zoos &amp; Conservation Organizations: Inspiring
            Conservation Through Travel
          </h1>
          <p>
            Zoos and conservation organizations play a critical role in
            educating the public about wildlife, biodiversity, and environmental
            stewardship. But today's supporters increasingly want more than
            educational exhibits and conservation presentations.
          </p>
          {readMore && (
            <>
              <p>
                They want to experience wildlife and conservation firsthand.
                Travel programs provide an extraordinary opportunity to connect
                members, donors, patrons, and supporters directly with the
                animals, ecosystems, and conservation efforts they care about
                most.
              </p>
              <p>
                From African safaris and polar expeditions to rainforest
                explorations and wildlife cruises, these journeys transform
                conservation awareness into meaningful personal experiences.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help zoos and
                conservation organizations design exceptional travel experiences
                that align with conservation objectives while delivering
                meaningful journeys. Led by <strong>Angela Hughes</strong>, one
                of the travel industry's most respected luxury travel experts,
                our team specializes in creating programs that inspire
                engagement and advance organizational goals.
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
      {/* ══ WHY TRAVEL PROGRAMS MATTER ═══════════════════════════════════════ */}
      <section
        className="adg-c-section adg-c-bg-dark"
        id="adg-why-conservation"
      >
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Conservation Travel Program Benefits
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Travel Programs Matter for Conservation Organizations
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Travel is one of the most powerful tools for environmental
                education.
              </p>
              <p className="adg-c-body adg-c-body-light">
                When supporters experience wildlife in its natural habitat, they
                often develop a deeper appreciation for conservation efforts and
                a stronger commitment to protecting the natural world. Zoo and
                conservation organization audiences are often
                conservation-minded lifelong learners who want firsthand
                engagement with the ecosystems and species they care about most.
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
                <p className="adg-c-body adg-c-body-light">
                  Conservation travel programs are uniquely positioned to meet
                  these expectations — offering zoologist-led experiences,
                  expert conservation talks, and exclusive wildlife access that
                  transform passive supporters into passionate advocates for the
                  organization's mission. Travel extends educational impact
                  while supporting both organizational and financial goals.
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
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Travel Programs Help Organizations:
                </span>
                <div className="adg-c-pill-grid">
                  {[
                    "Strengthen Member Engagement",
                    "Deepen Donor Relationships",
                    "Support Conservation Education",
                    "Generate Additional Revenue",
                    "Build Stronger Supporter Communities",
                    "Expand Mission Awareness",
                    "Inspire Environmental Stewardship",
                    "Create Lifelong Conservation Ambassadors",
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
      {/* ══ THE CONNECTION BETWEEN TRAVEL AND CONSERVATION ═══════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              Connecting Supporters <br /> Directly to Wildlife
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ZooSupportersWildlife}
                    alt="Zoo and conservation organization supporters experiencing wildlife in natural habitat firsthand"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Observing wildlife in its natural environment provides a
                  perspective that cannot be replicated in a classroom, exhibit,
                  or conservation presentation.
                </p>
                <p className="ugt-component-text">
                  Zoo and conservation organization supporters are often
                  conservation-minded travelers who appreciate meaningful
                  experiences over standard tourism. They want scientific
                  context, expert insight, and direct engagement with the
                  ecosystems and species they care about — meaning conservation
                  travel programs are uniquely positioned to deliver
                  transformational experiences.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Participants Gain Firsthand Exposure To:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Animal Behavior in Natural Habitats",
                      "Ecosystem Interactions",
                      "Conservation Challenges & Solutions",
                      "Biodiversity & Habitat Preservation",
                      "Wildlife Research Programs",
                      "Scientific Conservation Efforts",
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
      {/* ══ TYPES OF CONSERVATION TRAVEL PROGRAMS — 4-CARD GRID ══════════════ */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="adg-conservation-programs"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Popular Types of Conservation Travel Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Zoos and conservation organizations can offer a wide variety of
              travel experiences based on their mission, species focus, and
              audience. Successful programs are designed with specific
              conservation goals and participant interests in mind.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Small Ship & Expedition Cruises",
                name: "Small Ship Cruises & Wildlife Expeditions",
                highlight:
                  "Small ship and expedition cruising aligns perfectly with conservation missions — combining wildlife encounters, expert naturalist leadership, and conservation education in a highly immersive travel experience.",
                items: [
                  "Access to Remote Wildlife Habitats",
                  "Zodiac & Small Boat Wildlife Excursions",
                  "Expert Naturalists & Zoologist Guides",
                  "Wildlife Photography Opportunities",
                  "Conservation Education Programming",
                ],
                callout:
                  "Smaller vessels offer deeper physical access to pristine ecosystems alongside robust educational programming — turning curious travelers into passionate conservation advocates.",
              },
              {
                id: 2,
                eyebrow: "Donor Engagement",
                name: "Donor Cultivation & Conservation Travel",
                highlight:
                  "Travel is a highly effective donor engagement tool for conservation organizations — deepening institutional relationships while demonstrating the direct impact of philanthropic support.",
                items: [
                  "Major Donor Stewardship Journeys",
                  "Leadership Circle Custom Itineraries",
                  "Board Member & Patron Expeditions",
                  "Exclusive Conservation Project Visits",
                  "Direct Wildlife Research Access",
                ],
                callout:
                  "These high-touch experiences strengthen donor ties and create lifelong conservation ambassadors by showing exactly where philanthropic impact meets the natural world.",
              },
              {
                id: 3,
                eyebrow: "Member Perks",
                name: "Educational Travel as a Member Benefit",
                highlight:
                  "High-quality travel programs elevate the entire membership value proposition — creating a visible and compelling incentive that drives both membership acquisition and long-term community retention.",
                items: [
                  "Priority Trip Registration Windows",
                  "Exclusive Member-Only Departures",
                  "Special Member Pricing Tiers",
                  "Access to Conservation Experts",
                  "Curated Wildlife & Educational Experiences",
                ],
                callout:
                  "Offering travel benefits transforms standard memberships into interactive gateways for global conservation community building and lifelong learning.",
              },
              {
                id: 4,
                eyebrow: "Expert-Led Conservation",
                name: "Expert-Led Wildlife & Conservation Experiences",
                highlight:
                  "Conservation audiences crave educational rigor and authenticity. Programs featuring field scientists, zoologists, and wildlife biologists transform travel into substantive lifelong learning.",
                items: [
                  "Zoologist & Wildlife Biologist Guides",
                  "Visits to Protected Conservation Areas",
                  "Hands-On Wildlife Research Projects",
                  "Conservation Organization Collaboration",
                  "Organizational Leadership Access",
                ],
                callout:
                  "Learning directly from conservation leaders and wildlife specialists provides an insider perspective on global conservation initiatives that cannot be replicated elsewhere.",
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
      {/* ══ BEST DESTINATIONS ════════════════════════════════════════════════ */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Best Destinations for Zoo &amp; <br /> Conservation Travel
              Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              From African safaris and Galápagos expeditions to polar wildlife
              voyages, rainforest explorations, and Alaska wildlife cruises —
              these destinations provide exceptional opportunities for zoo and
              conservation organization member engagement, wildlife education,
              and meaningful community building.
            </p>
          </div>

          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {zooTravelDestinations.map((item) => {
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
                  style={{ objectFit: "cover", objectPosition: "center" }}
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

      {/* ══ BENEFITS OF WILDLIFE TRAVEL PROGRAMS ═══════════════ */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">Benefits of Wildlife Travel Programs</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Leg-subtitle">
              Travel programs offer significant value to both participants and
              organizations through education, conservation engagement, and
              community building.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "blue",
                icon: GraduationCap,
                title: "Educational Enrichment",
                description:
                  "Wildlife travel creates opportunities for immersive learning. Participants gain valuable insights into endangered species, conservation initiatives, wildlife management, ecological systems, and sustainable tourism.",
                pills: [
                  "Endangered Species",
                  "Conservation Initiatives",
                  "Wildlife Management",
                  "Ecological Systems",
                  "Sustainable Tourism",
                ],
                highlight:
                  "Travel transforms education into a meaningful lived experience.",
              },
              {
                id: 2,
                accent: "gold",
                icon: Globe,
                title: "Stronger Conservation Awareness",
                description:
                  "Seeing wildlife firsthand often inspires a deeper commitment to conservation and environmental stewardship while increasing understanding of today's most pressing ecological challenges.",
                pills: [
                  "Habitat Loss",
                  "Climate Change",
                  "Species Protection",
                  "Conservation Success Stories",
                  "Community-Based Conservation",
                ],
                highlight:
                  "These experiences help strengthen long-term support for conservation efforts.",
              },
              {
                id: 3,
                accent: "green",
                icon: Users,
                title: "Community Building",
                description:
                  "Travel programs bring together individuals who share passions for wildlife, nature, conservation, photography, and environmental education.",
                pills: [
                  "Wildlife",
                  "Nature",
                  "Conservation",
                  "Photography",
                  "Environmental Education",
                ],
                highlight:
                  "Participants form meaningful connections while strengthening their ties to the organization.",
              },
            ].map((card) => {
              const Icon = card.icon;
              const isHovered = hovered === card.id;

              return (
                <div
                  key={card.id}
                  className={`Leg-card Leg-card--${card.accent} ${
                    isHovered ? "Leg-card--hovered" : ""
                  }`}
                  onMouseEnter={() => setHovered(card.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`Leg-card-top-bar Leg-bar--${card.accent}`}
                  ></div>

                  <div
                    className={`Leg-card-icon-wrap Leg-icon--${card.accent}`}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="Leg-card-title">{card.title}</h3>

                  <p className="Leg-card-desc">{card.description}</p>

                  <div className="Leg-divider"></div>

                  <div className="Leg-pill-list">
                    {card.pills.map((pill) => (
                      <span
                        key={pill}
                        className={`Leg-pill Leg-pill--${card.accent}`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`Leg-highlight Leg-highlight--${card.accent}`}
                  >
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      className="Leg-check-icon"
                    />
                    <span>{card.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "25px" }}>
            <p
              className="Asc-card-subtext"
              style={{ color: "var(--navy)", textAlign: "center" }}
            >
              By combining immersive learning, conservation awareness, and
              meaningful social connections, wildlife travel programs create
              lasting impact for participants while strengthening support for
              conservation-focused organizations.
            </p>
          </div>
        </div>
      </section>
      {/* ══ WHAT MAKES A SUCCESSFUL PROGRAM ══════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                src={ZooConservationExpeditionPrimary}
                alt="Zoo and conservation group travel high-quality wildlife expedition experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap">
              <img
                src={ExpertLeadershipConservationAccent}
                alt="Premium conservation travel wildlife experience with expert leadership"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">6</span>
                <span className="luc-why-badge-text">Key Benefits</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              What Makes a Successful Conservation Travel Program?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Conservation audiences expect expert leadership and authentic
              wildlife experiences.
            </p>
            <p className="luc-why-subintro">
              The most successful zoo and conservation organization travel
              programs share several characteristics:
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Mission Alignment",
                  desc: "Travel experiences should directly support conservation and educational goals — bringing species protection, habitat preservation, and institutional values to life in the field.",
                },
                {
                  num: "02",
                  title: "Expert Leadership",
                  desc: "Participants value access to knowledgeable zoologists, wildlife biologists, naturalists, and conservation scientists who deepen the educational dimension of every wildlife encounter.",
                },
                {
                  num: "03",
                  title: "Authentic Wildlife Encounters",
                  desc: "Travel should go beyond sightseeing to provide genuine and ethical wildlife experiences — safari drives, Zodiac excursions, and expert-led encounters unavailable through standard tourism.",
                },
                {
                  num: "04",
                  title: "High-Quality Travel Partners",
                  desc: "Experienced travel providers ensure seamless logistics and exceptional guest experiences — allowing organization staff to focus on mission-driven conservation programming and participant engagement.",
                },
                {
                  num: "05",
                  title: "Donor Development & Stewardship",
                  desc: "Itineraries are crafted to offer unique donor cultivation environments, strengthening donor loyalty and fostering future philanthropic support for the organization.",
                },
                {
                  num: "06",
                  title: "Conservation Impact Funding",
                  desc: "A portion of travel proceeds or dedicated fundraising excursions directly support local wildlife protection projects, showing travelers the immediate impact of their journey.",
                },
              ]
                .slice(0, readMoreSuccessfulProgram ? 6 : 3)
                .map((feat, i) => (
                  <div key={i} className="luc-why-feature">
                    <div className="luc-why-feature-num">{feat.num}</div>
                    <div className="luc-why-feature-body">
                      <h3 className="luc-why-feature-title">{feat.title}</h3>
                      <p className="luc-why-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div
              className="Scenic_readmore_wrapper"
              style={{ marginTop: "25px", textAlign: "left" }}
            >
              <button
                className="Scenic_readmore_btn"
                onClick={() => setReadMoreSuccessfulProgram(!readMoreSuccessfulProgram)}
              >
                {readMoreSuccessfulProgram ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY ORGANIZATIONS PARTNER WITH PROFESSIONAL TRAVEL COMPANIES ═════ */}
      <section
        className="wnf-section wnf-bg-white"
        id="wnf-conservation-partnerships"
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              Why Organizations Partner with <br /> Professional Travel
              Companies
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column */}
            <div className="la-image-column">
              <div className="la-image-wrap">
                <img
                  src={ConservationTravelPlanningLogistics}
                  alt="Conservation travel planning and expedition logistics strategy"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Managing conservation travel programs requires specialized
                  expertise. Professional travel partners handle:
                </p>
                <ul className="wnf-feature-list">
                  {[
                    "Itinerary Development",
                    "Safari & Cruise Selection",
                    "Travel Logistics",
                    "Guest Registration",
                    "Marketing Support",
                    "Risk Management",
                    "Onsite Coordination",
                    "Customer Service",
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
                  This allows organization staff to focus on educational
                  content, conservation programming, and participant engagement
                  while ensuring a high-quality travel experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ WHO ARE THESE PROGRAMS BEST FOR? ═════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Are Zoo &amp; Conservation Travel Programs Best For?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>
              <ul className="Asc-who-list">
                {[
                  "Zoo Members & Conservation Supporters",
                  "Donors & Conservation Patrons",
                  "Leadership Circles & Organization Boards",
                  "Wildlife Enthusiasts & Nature Photographers",
                  "Retirees with Interest in Wildlife & Conservation",
                  "Educational Institutions with Zoo Partnerships",
                  "Conservation Foundations & Development Teams",
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
                  "Institutions seeking purely transactional programs",
                  "Budget-focused travel without conservation or educational components",
                  "Programs without community or mission-building objectives",
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
              Revenue &amp; Engagement Benefits <br /> for Conservation
              Organizations
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Benefits List */}
            <div className="adg-c-overview-icons">
              {[
                "Firsthand Wildlife Experiences",
                "Global Conservation Perspectives",
                "Deeper Environmental Understanding",
                "Personal Enrichment",
                "Lifelong Conservation Memories",
                "Increased Donor Engagement",
                "Expanded Community Outreach",
                "Long-Term Member Loyalty",
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
                    Travel has become one of the most powerful conservation
                    education tools available — allowing participants to connect
                    directly with wildlife, ecosystems, and conservation efforts
                    in meaningful and memorable ways that strengthen long-term
                    organizational support.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ConservationTravelersExploring}
                  alt="Conservation travelers exploring wildlife destinations with expert guides"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Wildlife & Conservation Discovery
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
              Conservation Travel Program Leadership
            </span>
            <h2 className="Adg-expert-title">
              Angela Hughes: A Trusted Advisor for Zoo &amp; Conservation Travel
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
                  alt="Angela Hughes - Zoo & Conservation Travel Program Expert"
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
                  Zoos and conservation organizations benefit from Angela
                  Hughes' decades of global travel expertise and deep knowledge
                  of educational, wildlife, and conservation group travel.
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
                  Her leadership helps zoos and conservation organizations
                  confidently develop travel programs that reflect institutional
                  excellence, extend their conservation mission, and create
                  lasting value for members, donors, and supporters.
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
              Everything you need to know about zoo and conservation
              organization travel programs.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ZooConservationCtaBackground}
            alt="Zoo and conservation organization travel program wildlife expedition experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Zoo &amp; Conservation Travel Programs
                </span>
                <h2 className="Asc-help-h2">
                  Inspire Conservation Through <br />
                  Transformative Wildlife Travel
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Travel programs allow zoos and conservation organizations to
                    bring their missions to life in powerful and unforgettable
                    ways.
                  </p>
                  <p className="Asc-help-intro">
                    By connecting supporters directly with wildlife, ecosystems,
                    and conservation efforts around the world, these journeys
                    inspire deeper understanding, stronger engagement, and
                    lasting commitment to environmental stewardship.
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
                      Whether tracking wildlife across the African savannah,
                      exploring the biodiversity of the Galápagos, or witnessing
                      polar ecosystems firsthand, participants return with more
                      than memories.
                      <br />
                      <br />
                      They return with a greater appreciation for the natural
                      world and a stronger desire to protect it.
                      <br />
                      <br />
                      With Angela Hughes' global expertise and Trips &amp; Ships
                      Luxury Travel's proven planning process, your organization
                      can create travel programs that inspire engagement,
                      strengthen community, and support long-term conservation
                      success.
                      <br />
                      <br />
                      <strong>
                        Because the most powerful lessons about the natural
                        world aren't always found in an exhibit. Sometimes
                        they're discovered standing face to face with wildlife
                        in its natural habitat.
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
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Conservation Travel Program
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Conservation Travel Programs:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Increased member engagement and retention",
                      "Stronger donor and conservation patron relationships",
                      "Conservation mission extended beyond the organization",
                      "Exclusive wildlife experiences for members and supporters",
                      "Community building among conservation participants",
                      "New revenue and membership growth opportunities",
                      "Long-term institutional loyalty and conservation affinity",
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
                    designing your custom zoo and conservation travel program.
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

export default TravelProgramsForZoosConservationOrganizations;
