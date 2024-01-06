import { Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Carousel from "../components/Carousel";

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Carousel />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    )
}