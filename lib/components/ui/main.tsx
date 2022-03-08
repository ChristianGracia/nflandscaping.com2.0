import Header from "./header";
import Footer from "./footer";
import { ElementType } from "react";

interface MainProps {
  children: JSX.Element | JSX.Element[];
  showFooter?: boolean;
}
const Main = ({ children, showFooter = true }: MainProps) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      {showFooter ? <Footer /> : null}
    </div>
  );
};

export default Main;
