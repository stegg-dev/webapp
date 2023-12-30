import Image from 'next/image';
import AppStoreDownloadButtons from './components/home/app-store-download-buttons';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Image
          src="/stegg_app_logo.svg"
          alt="Stegg App Icon"
          width={175} 
          height={175} 
          priority
          className="rounded-lg fade-in app-icon shadow-lg transition-transform duration-300 hover:scale-110"
        />
        <h1 className="font-tilt-neon mt-4 text-6xl fade-in">Stegg</h1>
        <p className="text-xl mt-2 fade-in">Hide Any Message in Any Image</p> 
        <AppStoreDownloadButtons/>
      </main>
    </>
  );
}
