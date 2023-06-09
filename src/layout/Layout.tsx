import Head from "next/head";
import { Header } from "@/components/Header";
import React from "react";
import Slider from "@/components/Slider";
import { List } from "@/components/Product/List";
import { ButtonCategotyes } from "@/ui/ButtonCategotyes";
import { RenderImgCategory } from "@/components/Categories/RenderImgCategory";

type LayoutProps = {
  title: string;
};
export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <Header />
        <Slider />
        <RenderImgCategory />
        <ButtonCategotyes />
        <List>{children}</List>
      </>
    </>
  );
};
