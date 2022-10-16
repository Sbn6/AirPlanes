import { useHistory } from "react-router-dom";
    const About = () => {
    const history = useHistory();

    const backClick = () => {
      history.push("/");
    };
  
    return (  
        <div className="about">
            <font size={24}>
                <h1 class="display-1 position-absolute top-0 start-50" style={{marginTop:"5rem", userSelect:"none"}}>About</h1>
            </font>
            <div className="position-absolute  start-50 translate-middle" style={{marginTop:"30rem",textAlign:"justify", fontFamily:"", color:"white"}} >
                <p>Proiect realizat în cadrul concursului național ”AvGeek - Aerospace Challenge”</p>
                <p>Proiectul a fost realizat de către elevii Liceului Teoretic ”Tudor Vladimirescu” București</p>
                <p>Profesor coordonator: <b>Prof. Mareș Mădălina</b></p>
            </div>
            <button
        type="button"
        className="btn btn-danger position-absolute start-50 translate-middle btn-lg"
        style={{ position: "fixed", bottom: "80px" }}
        onClick={backClick}
      >
        Back
      </button>
        </div>
    );
}
 
export default About;