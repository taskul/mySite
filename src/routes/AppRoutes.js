import { Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    )
}