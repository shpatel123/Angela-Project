// App.jsx — routes updated April 2026
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AzamaraShipComparison from "./pages/AzamaraShipComparison/Azamarashipcomparison";
import AzamaravsRegentSevenSeas from "./pages/AzamaravsRegentSevenSeas/AzamaravsRegentSevenSeas";
import AzamaraVsSeabourn from "./pages/AzamaravsSeabourn/AzamaraVsSeabourn";

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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
