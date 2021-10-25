import "tailwindcss/tailwind.css";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "tailwindcss/screens.css";
import "../styles/app.css";
import Head from "next/head";

function Dashboard({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Noah Taheij</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        </Head>
        <div className="bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100 text-gray-800 dark:text-gray-200 min-h-screen" id="App">
          <Component {...pageProps} />
        </div>
    </>
  );
}

export default Dashboard;
