import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();

  const backClick = () => {
    history.push("/");
  };

  return (
    <div className="contact">
      <button
        type="button"
        className="btn btn-danger position-absolute start-50 translate-middle btn-lg"
        style={{ position: "fixed", bottom: "80px" }}
        onClick={backClick}
      >
        Back
      </button>
      <font size={24}>
        <h1
          class="display-1 position-absolute top-50 start-50"
          style={{ userSelect: "none", marginTop: "-20rem" }}
        >
          CONTACT
        </h1>
      </font>
      <card>
        
      </card>
    </div>
  );
};
{
  /*
    sbn
*/
}
export default Contact;
