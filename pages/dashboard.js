import styles from "../styles/pages/dashboard.module.scss";
import Layout from "../components/Layout";
import FAB from "../components/FAB";
import Content from "../modules/Dashboard";
import { Icon } from "@iconify/react";

export default function Dashboard() {
  return (
    <Layout title="Dashboard - Sapling">
      <Content />
      <FAB>
        <Icon icon="mdi-light:plus" width={36} />
      </FAB>
    </Layout>
  );
}
