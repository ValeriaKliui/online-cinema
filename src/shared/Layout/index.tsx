import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";
import { OutlerWrapper } from "./styled";
import { ErrorModal } from "@shared/ErrorModal";
import ErrorBoundary from "@shared/ErrorBoundary";

export const Layout = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <OutlerWrapper>
          <Outlet />
        </OutlerWrapper>
      </ErrorBoundary>
      <Footer />
      <ErrorModal />
    </>
  );
};
