import { forwardRef, useEffect, MouseEvent } from "react";
import { Dialog, Form, Cross } from "./styled";
import { Nav } from "@components/Nav";

export const MobileMenu = forwardRef<HTMLDialogElement>((_, dialogRef) => {
  const dialogElement =
    typeof dialogRef !== "function" && dialogRef && dialogRef?.current;

  const onOutsideClose = (event: MouseEvent<HTMLElement>) => {
    if (typeof dialogRef !== "function") {
      const clickIsOutsideMenu =
        dialogRef && event.target === dialogRef.current;
      if (dialogRef && dialogRef.current && clickIsOutsideMenu) {
        dialogRef?.current.close();
      }
    }
  };

  const onClose = () => {
    if (dialogElement) {
      dialogElement.close();
    }
  };

  useEffect(() => {
    const closeOnLinkClick = (e: globalThis.MouseEvent) => {
      const target = e.target as Element;
      const clickIsOnLink = e.target && target.closest("a");
      if (clickIsOnLink && dialogElement) dialogElement.close();
    };

    if (dialogElement) {
      dialogElement.addEventListener("click", closeOnLinkClick);
    }
    return () => {
      if (dialogElement)
        dialogElement.removeEventListener("click", closeOnLinkClick);
    };
  }, [dialogElement]);

  return (
    <Dialog aria-label="mobile_menu" ref={dialogRef} onClick={onOutsideClose}>
      <Form className="wrapper" method="dialog">
        <Cross onClick={onClose} height="1.5em" width="1.5em" />
        <Nav isColumn={true} />
      </Form>
    </Dialog>
  );
});
