"use client";
import { AnimatePresence } from "framer-motion";
import { PageWrapper } from "./page-wrapper";
export const AnimatePresenceWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence mode="wait">
      <PageWrapper>{children}</PageWrapper>
    </AnimatePresence>
  );
};
