// App.jsx — routes updated April 2026
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AzamaraShipComparison from "./pages/AzamaraShipComparison/Azamarashipcomparison";
import AzamaravsRegentSevenSeas from "./pages/AzamaravsRegentSevenSeas/AzamaravsRegentSevenSeas";
import AzamaraVsSeabourn from "./pages/AzamaravsSeabourn/AzamaraVsSeabourn";
import AzamaraDiningGuide from "./pages/AzamaraDiningGuide/AzamaraDiningGuide";
import AzamaraAlaskCruises from "./pages/AzamaraAlaskCruises/AzamaraAlaskCruises";
import AzamaraNorwayFjordsCruises from "./pages/AzamaraNorwayFjordsCruises/AzamaraNorwayFjordsCruises";
import LuxuryExploraJourneysGuide from "./pages/LuxuryExploraJourneysGuide/LuxuryExploraJourneysGuide";
import ExploraJourneysWorth from "./pages/ExploraJourneysWorth/ExploraJourneysWorth";
import ExploraJourneysCruises from "./pages/ExploraJourneysCruises/ExploraJourneysCruises";
import ExploraCruiseCost from "./pages/ExploraCruiseCost/ExploraCruiseCost";
import ExploraJourneysvsSeabourn from "./pages/ExploraJourneysvsSeabourn/ExploraJourneysvsSeabourn";
import FacultyLedTravelPrograms from "./pages/FacultyLedTravelPrograms/FacultyLedTravelPrograms";
import EducationalTravelPrograms from "./pages/EducationalTravelPrograms/EducationalTravelPrograms";
import LuxuryAlumniTravel from "./pages/LuxuryAlumniTravel/LuxuryAlumniTravel";
import AlumniCruises from "./pages/AlumniCruises/AlumniCruises";
import UniversityGroupTravelPlanning from "./pages/UniversityGroupTravelPlanning/UniversityGroupTravelPlanning";
import WhyUniversitiesPartner from "./pages/WhyUniversitiesPartner/WhyUniversitiesPartner";
import LuxuryAlumniRiverCruises from "./pages/LuxuryAlumniRiverCruises/LuxuryAlumniRiverCruises";
import LuxuryAlumniExpeditionCruises from "./pages/LuxuryAlumniExpeditionCruises/LuxuryAlumniExpeditionCruises";
import SmallShipAlumniCruises from "./pages/SmallShipAlumniCruises/SmallShipAlumniCruises";
import DonorTravelPrograms from "./pages/DonorTravelPrograms/DonorTravelPrograms";
import MultiGenerationalAlumniTravel from "./pages/Multi-GenerationalAlumniTravel/MultiGenerationalAlumniTravel";
import WhyLuxuryTravelForUniversities from "./pages/WhyLuxuryTravelForUniversities/WhyLuxuryTravelForUniversities";
import DisneyCruisevsVikingOcean from "./pages/DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean";
import DisneyCruisesforGrandparents from "./pages/DisneyCruisesforGrandparents/DisneyCruisesforGrandparents";
import DisneyAlaskavsPrincessCruises from "./pages/DisneyAlaskavsPrincessCruises/DisneyAlaskavsPrincessCruises";
import DisneyAlaskavsHollandAmerica from "./pages/DisneyAlaskavsHollandAmerica/DisneyAlaskavsHollandAmerica";
import IsDisneyCruiseReallyForKids from "./pages/IsDisneyCruiseReallyForKids/IsDisneyCruiseReallyForKids";
import DisneyAlaskaCruises from "./pages/DisneyAlaskaCruises/DisneyAlaskaCruises";
import DisneyEuropeCruises from "./pages/DisneyEuropeCruises/DisneyEuropeCruises";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={<AzamaraShipComparison />}
          />

          <Route
            path="/azamara-ship-comparison"
            element={<AzamaraShipComparison />}
          />

          <Route
            path="/azamara-vs-regent-seven-seas"
            element={<AzamaravsRegentSevenSeas />}
          />

          <Route
            path="/azamara-vs-seabourn"
            element={<AzamaraVsSeabourn />}
          />

          <Route
            path="/azamara-dining-guide"
            element={<AzamaraDiningGuide />}
          />


          <Route
            path="/azamara-alaska-cruises"
            element={<AzamaraAlaskCruises />}
          />

          <Route
            path="/azamara-norway-fjords-cruises"
            element={<AzamaraNorwayFjordsCruises />}
          />

           <Route
            path="/luxury-explora-journeys-guide"
            element={<LuxuryExploraJourneysGuide />}
          />

           <Route
            path="/is-explora-journeys-worth-it"
            element={<ExploraJourneysWorth />}
          />

          <Route
            path="/explora-journeys-cruise-inclusions"
            element={<ExploraJourneysCruises />}
          />

          
          <Route
            path="/how-much-does-an-explora-cruise-cost-2026-2027"
            element={<ExploraCruiseCost />}
          />

           <Route
            path="/explora-journeys-vs-seabourn"
            element={<ExploraJourneysvsSeabourn />}
          />

            <Route
            path="/faculty-led-travel-programs"
            element={<FacultyLedTravelPrograms />}
          />

          
            <Route
            path="/educational-travel-programs"
            element={<EducationalTravelPrograms />}
          />

           <Route
            path="/luxury-alumni-travel"
            element={<LuxuryAlumniTravel />}
          />

          <Route
            path="/alumni-cruises"
            element={<AlumniCruises />}
          />

          
          <Route
            path="/university-group-travel-planning"
            element={<UniversityGroupTravelPlanning />}
          />

          
          <Route
            path="/why-universities-partner-with-travel-companies"
            element={<WhyUniversitiesPartner />}
          />

           <Route
            path="/alumni-river-cruises"
            element={<LuxuryAlumniRiverCruises />}
          />

          
           <Route
            path="/alumni-expedition-cruises"
            element={<LuxuryAlumniExpeditionCruises />}
          />

           <Route
            path="/small-ship-alumni-cruises"
            element={<SmallShipAlumniCruises />}
          />

           <Route
            path="/donor-travel-programs"
            element={<DonorTravelPrograms />}
          />

          <Route
            path="/multi-generational-alumni-travel"
            element={<MultiGenerationalAlumniTravel />}
          />

          
          <Route
            path="/why-trips-and-ships-luxury-travel-for-universities"
            element={<WhyLuxuryTravelForUniversities />}
          />

           
          <Route
            path="/disney-cruise-vs-viking-ocean-cruises"
            element={<DisneyCruisevsVikingOcean />}
          />

           <Route
            path="/disney-cruises-for-grandparents-and-multigenerational-families"
            element={<DisneyCruisesforGrandparents />}
          />

           <Route
            path="/disney-alaska-vs-princess-cruises"
            element={<DisneyAlaskavsPrincessCruises />}
          />

           <Route
            path="/disney-alaska-vs-holland-america"
            element={<DisneyAlaskavsHollandAmerica />}
          />

          <Route
            path="/is-disney-cruise-really-just-for-kids"
            element={<IsDisneyCruiseReallyForKids />}
          />

            <Route
            path="/disney-alaska-cruises"
            element={<DisneyAlaskaCruises />}
          />

           <Route
            path="/disney-europe-cruises"
            element={<DisneyEuropeCruises />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
