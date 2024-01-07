import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import NotFound from "./NotFound";

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path='/404' element={<NotFound />} />
                <Route path='*' element={<Navigate to="/404" replace />} />
            </Routes>
        </div>
    )
}