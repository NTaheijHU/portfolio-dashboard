import "tailwindcss/tailwind.css";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "tailwindcss/screens.css";
import "../styles/app.css";
import "../styles/arrow.css";

function Dashboard({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Dashboard;
