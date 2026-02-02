import { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";

import Navbar from "../Components/NavBar";
import ScrollToTop from "../Components/ScrollToTop";

// ---- SEO CONFIG --------------------------------------------------
const SEO_CONFIG = {
  title: "Basic Template",
  description: "meta content",
  canonical: "https://www.url.com",
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Company Name",
    url: "https://www.url.com",
    telephone: "+1-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "ZIP",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
      "https://twitter.com/",
    ],
  },
};
// ----------------------------------------------------------------

const RootLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden transition-colors duration-300 ease-in-out bg-[#eff8e5]">
      <ScrollToTop />

      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{SEO_CONFIG.title}</title>
        <meta name="description" content={SEO_CONFIG.description} />

        <link rel="canonical" href={SEO_CONFIG.canonical} />
        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json">
          {JSON.stringify(SEO_CONFIG.schema)}
        </script>
      </Helmet>

      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer goes here */}
    </div>
  );
};

export default RootLayout;
