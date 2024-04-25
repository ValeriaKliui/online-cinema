import { Footer } from "@/components/Footer";
import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";
import { OutlerWrapper } from "./styled";
import { ErrorModal } from "@shared/ErrorModal";

export const Layout = () => (
  <>
    <ErrorModal />
    <Header />
    <OutlerWrapper>
      <Outlet />
    </OutlerWrapper>
    <Footer />
  </>
);
