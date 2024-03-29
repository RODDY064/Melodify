import { Poppins } from "next/font/google";
import "@styles/globals.css";
import MusicContextProvider from "./libs/context/musicContext";
import Provider from "./ui/Provider";
import ToastProvider from "./ui/ToastProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Melodify",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <Provider>
        <ToastProvider/>
       <MusicContextProvider>{children}</MusicContextProvider>
       </Provider>
      </body>
    </html>
  );
}
