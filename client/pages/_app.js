import "../styles/globals.css";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  return <Component {...pageProps} />;
}

export default MyApp;
