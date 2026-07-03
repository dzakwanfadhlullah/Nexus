import Image from "next/image";
import type { ShowcaseItem } from "@/types/content";

export function ShowcaseVisual({
  item,
  priority = false,
}: {
  item: ShowcaseItem;
  priority?: boolean;
}) {
  return (
    <div className={`showcase-visual ${item.visualTone}`}>
      {item.image ? (
        <Image
          src={item.image}
          alt={`Preview ${item.title}, ${item.type} untuk ${item.industry.join(", ")}.`}
          fill
          sizes="(max-width: 768px) 86vw, (max-width: 1100px) 45vw, 350px"
          priority={priority}
        />
      ) : (
        <div className="placeholder-ui" aria-label={`Placeholder visual untuk ${item.title}`}>
          <div className="placeholder-grid">
            <div className="placeholder-block" />
            <div className="placeholder-list">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
