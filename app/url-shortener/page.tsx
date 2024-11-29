'use-client'

import React from "react";
import UrlShortener from "../../components/urlshortener/UrlShortener";

const Url: React.FC = () => { 
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto w-full px-4 flex-grow">
        <div className="mt-[10rem] flex justify-center items-center">
          <UrlShortener />
        </div>
      </div>

      <div className="text-center mb-4 text-gray-600">
        <p className="text-sm">Made with ❤️ by Techunter</p>
      </div>
    </div>
  );
};

export default Url;
