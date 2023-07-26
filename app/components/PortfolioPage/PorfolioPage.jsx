import React from "react";
import Head from "next/head";

const PortfolioPage = () => {
  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Charles ABJ",
                "url": "URL_du_portfolio",
                "sameAs": [
                  "https://www.linkedin.com/in/charlesabj-78753b182/",
                  "https://github.com/CharlesABJ"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lyon",
                  "addressRegion": "Auvergne-Rhône-Alpes"
                },
                "availability": "https://schema.org/Available24Hours"
              }
            `,
          }}
        />
      </Head>
    </div>
  );
};

export default PortfolioPage;
