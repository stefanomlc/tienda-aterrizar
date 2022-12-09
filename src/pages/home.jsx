import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
export default function Home() {
    return (
      <div className="home-page__container" area="content">
        <ItemListContainer/>

      </div>
    );
  }