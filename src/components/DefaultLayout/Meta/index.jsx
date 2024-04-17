import Head from "next/head";

const Meta = ({ seoData }) => {
  return (
    <Head>
      <title>{seoData?.title || "نگین کوثر آریا"}</title>
      <meta charSet="UTF-8" key="charset" />
      <meta name="theme-color" content="#1c703b" />

      <meta name="twitter:title" content={seoData?.title || "نگین کوثر آریا"} />
      <meta name="twitter:image" content={seoData?.image || ""} />
      <meta
        name="twitter:description"
        content={seoData?.description || "نگین کوثر آریا"}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@id_twitter" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData?.canonical} />
      <meta property="og:title" content={seoData?.title || "نگین کوثر آریا"} />
      <meta property="og:image" content={seoData?.image || ""} />
      <meta
        property="og:description"
        content={seoData?.description || "نگین کوثر آریا"}
      />
      <meta property="og:site_name" content="نگین کوثر آریا " />
      <meta property="og:locale" content="fa-IR" />

      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1"
        key="viewport"
      />
      <meta name="description" content={seoData?.description || "نگین کوثر آریا"} />
      {seoData?.script?.length > 0 &&
        seoData?.script?.map((script, index) => (
          <script
            key={`script-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: script }}
          ></script>
        ))}
      <meta name="robots" content={seoData?.robots || "index, follow"} />
      <link rel="canonical" href={seoData?.canonical} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-32x32.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-16x16.png`}
        key="icon16"
      />
      <link rel="icon" href={`./favicon.ico`} key="favicon" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MC7W65ZD');
            `,
        }}
      />
      {seoData?.schema}
    </Head>
  );
};

export default Meta;
