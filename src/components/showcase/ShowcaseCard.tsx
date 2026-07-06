import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { formatShowcaseStatus, formatType } from "@/lib/content";
import type { ShowcaseItem } from "@/types/content";
import { ShowcaseVisual } from "@/components/showcase/ShowcaseVisual";

export function ShowcaseCard({
  item,
  priority = false,
}: {
  item: ShowcaseItem;
  priority?: boolean;
}) {
  return (
    <article className="showcase-card">
      <Link href={`/showcase/${item.slug}`} aria-label={`Lihat detail ${item.title}`}>
        <ShowcaseVisual item={item} priority={priority} />
      </Link>
      <div className="showcase-body">
        <div className="showcase-topline">
          <span className={`status status-${item.status}`}>
            {formatShowcaseStatus(item.status)}
          </span>
          <span className="mini-label">{formatType(item.type)}</span>
        </div>
        <h3>
          <Link href={`/showcase/${item.slug}`}>{item.title}</Link>
        </h3>
        <p className="showcase-meta">
          {formatType(item.type)} · {item.industry[0]} · {item.goal[0]}
        </p>
        <div className="chip-list">
          {item.features.slice(0, 3).map((feature) => (
            <span className="tag" key={feature}>
              {feature}
            </span>
          ))}
        </div>
        <p className="showcase-description">{item.shortDescription}</p>
        <div className="showcase-actions">
          <Link
            className="button button-dark button-small"
            href={`/brief?reference=${item.slug}&source=showcase-card`}
          >
            Buat seperti ini <ArrowRight size={15} />
          </Link>
          <Link className="button button-light button-small" href={`/showcase/${item.slug}`}>
            Detail
          </Link>
          {item.liveUrl ? (
            <a
              className="button button-light button-small button-icon"
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kunjungi website ${item.title}`}
              title={`Kunjungi website ${item.title}`}
            >
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
