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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
