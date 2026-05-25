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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
