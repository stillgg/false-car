import { PropsWithChildren } from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
