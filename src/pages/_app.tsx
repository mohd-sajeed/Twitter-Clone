import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google"
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }: AppProps) {
  return <GoogleOAuthProvider clientId="830281858949-jdefd89jtnl7tbbsia1rh28ibdd8uaht.apps.googleusercontent.com">
    <Component {...pageProps} />;
    <Toaster />
  </GoogleOAuthProvider>
}
