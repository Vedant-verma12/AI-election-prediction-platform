import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import { Layout } from "@/components/Layout";
import { AIChatbox } from "@/components/AIChatbox";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const News = lazy(() => import("./pages/News"));
const Prediction = lazy(() => import("./pages/Prediction"));
const MapPage = lazy(() => import("./pages/MapPage"));
const Alliances = lazy(() => import("./pages/Alliances"));
const Leaders = lazy(() => import("./pages/Leaders"));
const Simulator = lazy(() => import("./pages/Simulator"));
const AuthModule = import("./pages/Auth");
const Login = lazy(() => AuthModule.then((m) => ({ default: m.Login })));
const Signup = lazy(() => AuthModule.then((m) => ({ default: m.Signup })));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-6 h-6 border-2 border-muted border-t-accent rounded-full animate-spin" />
    </div>
  );
}

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/prediction" element={<Prediction />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/alliances" element={<Alliances />} />
                <Route path="/leaders" element={<Leaders />} />
                <Route path="/simulator" element={<Simulator />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AIChatbox />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
