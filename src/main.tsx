import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Home from "./components/home/Home.tsx";
import History from "./components/history/History.tsx";
import WetherProvider from "./components/context/WeatherContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WetherProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/history" element={<History />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </WetherProvider>
  </StrictMode>
);
