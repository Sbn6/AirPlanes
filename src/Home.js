import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  return (
    <div className="home">
      <font size={48}>
        <h1 className="display-1" id="titleedu" style={{ userSelect: "none" }}>
          Domeniul&#10;Aerospațial
        </h1>
      </font>
      <button
        type="button"
        class="btn btn-primary position-absolute start-50 translate-middle btn-lg"
        style={{ position: "fixed", bottom: "80px", marginLeft:"-10rem" }}
        onClick={()=>history.push('/legend')}
      >
        Legendă
      </button>
      <button
        type="button"
        class="btn btn-primary position-absolute start-50 translate-middle btn-lg"
        style={{ position: "fixed", bottom: "80px" }}
        onClick={()=>history.push('/history')}
      >
        Istoria aviației
      </button>
      <button
        type="button"
        class="btn btn-primary position-absolute start-50 translate-middle btn-lg"
        style={{ position: "fixed", bottom: "80px", marginLeft:"10rem" }}
        onClick={()=>history.push('/helicopter')}
      >
        Elicoptere
      </button>
    </div>
  );
};

export default Home;
