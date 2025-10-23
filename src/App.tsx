import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Import Halaman Baru (Gunakan nama PascalCase yang jelas)
import Programs from "./pages/ProgramPage";
import JobFields from "./pages/JobFieldsPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rute Halaman Utama */}
          <Route path="/" element={<Index />} />
          
          {/* Tambahkan Rute untuk Program dan Bidang Kerja */}
          <Route path="/program" element={<Programs />} />
          <Route path="/bidang-kerja" element={<JobFields />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;