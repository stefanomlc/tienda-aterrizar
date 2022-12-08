import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    return (
      <div className="home-page__container" area="content">
        <div className="my-image" />
        <div className="header">
          <span className="welcome">Tienda Aterrizar</span>
          <p className="welcome__detail">
            Conoce todos nuestros productos con envío a todo el país
          </p>
        </div>
      </div>
    );
  }