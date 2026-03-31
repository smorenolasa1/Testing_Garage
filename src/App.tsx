import { Navigate, Route, Routes } from "react-router-dom";
import { AnalyzingPage } from "./pages/AnalyzingPage";
import { HelpPage } from "./pages/HelpPage";
import { HistoryPage } from "./pages/HistoryPage";
import { HomePage } from "./pages/HomePage";
import { QuoteUploadPage } from "./pages/QuoteUploadPage";
import { ResultPage } from "./pages/ResultPage";
import { SymptomInputPage } from "./pages/SymptomInputPage";
import { WarningLightPage } from "./pages/WarningLightPage";

export default function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<SymptomInputPage />} path="/symptom" />
      <Route element={<WarningLightPage />} path="/warning-light" />
      <Route element={<QuoteUploadPage />} path="/quote" />
      <Route element={<AnalyzingPage />} path="/analyzing" />
      <Route element={<ResultPage />} path="/result" />
      <Route element={<HistoryPage />} path="/history" />
      <Route element={<HelpPage />} path="/help" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  );
}
