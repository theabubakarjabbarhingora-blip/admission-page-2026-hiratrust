import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white p-4">
      <div className="max-w-md w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl backdrop-blur-sm">
        <div className="mb-6 flex justify-center">
          <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
        </div>
        
        <h1 className="text-3xl font-serif font-bold mb-4">Thank You!</h1>
        <p className="text-slate-300 mb-8">
          Your inquiry has been successfully submitted. Our admissions team will review your information and contact you shortly with the next steps.
        </p>
        
        <Button asChild className="w-full bg-sky-500 hover:bg-sky-400">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
