import { Card } from "@/components/ui/card";
import { Wrench, Clock } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* Construction Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Wrench className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Under Construction
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-12">
          <p className="text-xl text-muted-foreground mb-6 text-pretty">
            We're working hard to bring you something amazing. Our website is
            currently under construction, but we'll be back soon with a brand
            new experience.
          </p>

          <Card className="p-6 bg-muted/50 border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Expected Launch</span>
            </div>
            <p className="text-lg font-semibold text-foreground">Coming Soon</p>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-muted-foreground">
          <p>Questions? Contact us at</p>
          <a
            href="mailto:faroos.mpm@gmail.com"
            className="text-primary hover:underline"
          >
            faroos.mpm@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
