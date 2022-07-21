import "../styles/globals.css";
import { useState } from "react";
import { StoreProvider } from "../utils/Store";
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      {" "}
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
