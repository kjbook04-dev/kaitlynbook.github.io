"use client";

import { useMemo, useState } from "react";

type ExpandableResponsibilitiesProps = {
  bullets: readonly string[];
  previewCount?: number;
  maxCount?: number;
};

export function ExpandableResponsibilities({
  bullets,
  previewCount = 3,
  maxCount = 11
}: ExpandableResponsibilitiesProps) {
  const [expanded, setExpanded] = useState(false);
  const limitedBullets = useMemo(() => bullets.slice(0, maxCount), [bullets, maxCount]);
  const hasMore = limitedBullets.length > previewCount;
  const visibleBullets = expanded ? limitedBullets : limitedBullets.slice(0, previewCount);

  return (
    <div className="mt-4">
      <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
        {visibleBullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {hasMore ? (
        <p className="mt-2 pl-1 text-sm text-muted-foreground">
          {expanded ? null : <span className="mr-1">...</span>}
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="font-semibold text-primary transition-colors hover:text-foreground"
          >
            {expanded ? "less" : "more"}
          </button>
        </p>
      ) : null}
    </div>
  );
}
