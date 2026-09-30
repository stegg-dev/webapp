import Link from 'next/link';
import { useId } from 'react';
import { ANDROID_PUBLIC, APP_STORE_URL, PLAY_STORE_URL } from '../site-config';

export default function StoreButtons({ compact = false }: { compact?: boolean }) {
  const sizing = compact ? 'px-5 py-3 text-sm' : 'px-6 py-4 text-base';
  const playClipId = useId();

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`store-button store-button-primary ${sizing}`}
      >
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        Download for iPhone
      </a>

      {ANDROID_PUBLIC ? (
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`store-button store-button-secondary ${sizing}`}
        >
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <defs>
              <clipPath id={playClipId}>
                <path d="M3 5.2C3 3.1 3.8 2.9 5.5 3.75L19.5 10.75C21.2 11.6 21.2 12.4 19.5 13.25L5.5 20.25C3.8 21.1 3 20.9 3 18.8Z" />
              </clipPath>
            </defs>
            <g clipPath={`url(#${playClipId})`}>
              <path fill="#4285f4" d="M3 2.5V21.5L12.5 12Z" />
              <path fill="#34a853" d="M3 2.5L16.5 9.25L12.5 12Z" />
              <path fill="#ea4335" d="M3 21.5L12.5 12L16.5 14.75Z" />
              <path fill="#fbbc04" d="M12.5 12L16.5 9.25L22 12L16.5 14.75Z" />
            </g>
          </svg>
          Get it on Google Play
        </a>
      ) : (
        <Link href="/download" className={`store-button store-button-secondary ${sizing}`}>
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.6 9.5 19 7.1a.5.5 0 0 0-.9-.5L16.7 9a8.2 8.2 0 0 0-9.4 0L5.9 6.6a.5.5 0 0 0-.9.5l1.4 2.4A7.3 7.3 0 0 0 3 15.6h18a7.3 7.3 0 0 0-3.4-6.1ZM8 13.1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
          Android — coming soon
        </Link>
      )}
    </div>
  );
}
