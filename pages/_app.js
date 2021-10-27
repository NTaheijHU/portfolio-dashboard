import "tailwindcss/tailwind.css";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "tailwindcss/screens.css";
import "../styles/app.css";
import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "next-auth/client"

function Dashboard({ Component, pageProps }) {
  useEffect(() => {
    if(!('theme' in localStorage)) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        switchDarkClasses();
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    } else {
      if(localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
        switchDarkClasses();
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });

  return (
    <Provider session={pageProps.session}>
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
    </Provider>
  );
}

function goDark() {
  if (localStorage.theme === 'light') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }

  switchDarkClasses();
}

function switchDarkClasses() {
  var root = document.querySelector(':root');
  var rootLight = getComputedStyle(root).getPropertyValue('--light');
  var rootDark = getComputedStyle(root).getPropertyValue('--dark');

  root.style.setProperty('--light', rootDark);
  root.style.setProperty('--dark', rootLight);
}

export default Dashboard;
