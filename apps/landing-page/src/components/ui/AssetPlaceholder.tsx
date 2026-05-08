import clsx from "clsx";

interface AssetPlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Placeholder for images/videos not yet available.
 * Replace the <AssetPlaceholder> with <Image> when assets are ready.
 */
export default function AssetPlaceholder({
  label = "Image Placeholder",
  aspectRatio = "16/9",
  className,
  children,
}: AssetPlaceholderProps) {
  return (
    <div
      className={clsx(
        "relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-naija-green-dark/30 via-surface-card to-naija-gold-dark/15 border border-white/5",
        className
      )}
      style={{ aspectRatio }}
    >
      {children || (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-white/5 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M6.75 7.5h.008v.008H6.75V7.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <p className="text-xs text-text-muted">{label}</p>
          </div>
        </div>
      )}
    </div>
  );
}
