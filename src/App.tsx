import Navbar from "./components/ui/Navbar/Navbar";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import styles from "./App.module.css";
import HomepageLayout from "./homepage/Layout/Layout";

function App() {
  return (
    <div className={styles.homepageContainer}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <Navbar
          path={["Provisioning", "Relational Databases", "Oracle Server"]}
          credits="$365"
        />

        <HomepageLayout />
      </div>
    </div>
  );
}

export default App;
