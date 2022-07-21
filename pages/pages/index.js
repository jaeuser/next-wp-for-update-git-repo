import { NextSeo } from "next-seo";
import { PageGridItem, withGrid } from "../../components/grid";
import Layout from "../../components/layout";
import PageHeader from "../../components/page-header.js";
import { getFooterMenu } from "../../lib/Menus";
import { getLatestPages } from "../../lib/Pages";

export default function PageListTemplate({ menuItems, pages }) {
  const PagesGrid = withGrid(PageGridItem);

  return (
    <Layout footerMenu={menuItems}>
      <NextSeo
        title="Decoupled Next WordPress Demo"
        description="Generated by create next app."
      />
      <PageHeader title="Pages" />
      <section>
        <PagesGrid contentType="pages" data={pages} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const menuItems = await getFooterMenu();
  const pages = await getLatestPages();

  return {
    props: {
      menuItems,
      pages,
    },
  };
}