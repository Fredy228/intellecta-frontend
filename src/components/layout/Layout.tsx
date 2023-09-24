import { FC, PropsWithChildren } from "react";
import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
