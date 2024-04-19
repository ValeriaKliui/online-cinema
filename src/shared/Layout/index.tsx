import { Footer } from "@/components/Footer";
import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";
import { OutlerWrapper } from "./styled";

export const Layout = () => (
  <>
    <Header />
    <OutlerWrapper>
      <Outlet />
    </OutlerWrapper>
    <Footer />
  </>
);
