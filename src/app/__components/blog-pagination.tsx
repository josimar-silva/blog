import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/app/__components/ui/button";

export function BlogPagination() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button variant="outline" disabled>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="default" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <span className="text-muted-foreground">...</span>
        <Button variant="outline" size="sm">
          10
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline">
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
