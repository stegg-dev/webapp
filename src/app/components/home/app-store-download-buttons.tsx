function AppStoreDownloadButtons() {
    return (
      <div className="download-buttons mt-8 space-x-4">
        <a href="https://www.apple.com/app-store/" className="app-store-button inline-block bg-black rounded-lg px-4 py-2 text-white hover:bg-gray-800 transition duration-300 fade-in">
          <img src="/apple_icon.svg" alt="Apple Icon" className="inline-block mr-2" width="20" height="20"/>
          Download on the App Store
        </a>
        <a href="https://play.google.com/store" className="google-play-button inline-block bg-green-600 rounded-lg px-4 py-2 text-white hover:bg-green-700 transition duration-300 fade-in">
          <img src="/google_play_icon.svg" alt="Google Play Icon" className="inline-block mr-2" width="20" height="20"/>
          Get it on Google Play
        </a>
      </div>
    );
  }

export default AppStoreDownloadButtons;
  