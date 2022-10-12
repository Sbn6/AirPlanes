import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();


  return (
    <div className="home">
      <font size={48}>
        <h1 class="display-1" id="titleedu" style={{ userSelect: "none" }}>
          Air&#10;Planes
        </h1>
      </font>
      <button
        type="button"
        class="btn btn-primary position-absolute start-50 translate-middle btn-lg"
        style={{ position: "fixed", bottom: "80px" }}
        onClick={()=>history.push('/legends')}
      >
        x
      </button>
    </div>
  );
};

export default Home;
