import styles from "./App.module.scss";
import Provider from "./app/provider/Provider";
import Footer from "./widgets/footer/Footer";
import Header from "./widgets/header/Header";
import Cart from "./pages/cart/Cart";
function App() {
   return (
      <div className={styles.app}>
         <div className={styles.wrapper}>
            <Header />
            <Provider />
         </div>
         <Footer />
      </div>
   );
}

export default App;
