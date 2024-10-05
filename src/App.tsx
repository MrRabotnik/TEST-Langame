import React, { ReactNode } from "react";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./utils/routes";

interface RouteItem {
    path: string;
    element: ReactNode;
}

function App() {
    return (
        <div className="App">
            <Background />
            <Routes>
                {ROUTES.map((route: RouteItem) => {
                    return (
                        <Route
                            path={route.path}
                            element={route.element}
                        />
                    );
                })}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
