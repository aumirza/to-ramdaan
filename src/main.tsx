import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import { LocationProvider } from "./hooks/useLocation.tsx";
import { RamadanDateProvider } from "./hooks/useRamdanDate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocationProvider>
      <RamadanDateProvider>
        <App />
      </RamadanDateProvider>
    </LocationProvider>
  </StrictMode>
);
