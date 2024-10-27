import React from "react";
import { Header } from "@/components/header"; // Ensure this matches the actual file name

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default layout;
