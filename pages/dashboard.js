import styles from "../styles/pages/dashboard.module.scss";
import Layout from "../components/Layout";
import FAB from "../components/FAB";
import Content from "../modules/Dashboard";

export default function Dashboard() {
  return (
    <Layout title="Dashboard - Sapling">
      <Content />
      <FAB>+</FAB>
    </Layout>
  );
}
