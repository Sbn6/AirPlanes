import { useHistory } from "react-router-dom";
const Helicopter = () => {
    const history = useHistory();
    return(
        <div className="helicopter">
            <h1 font={24} style={{marginTop:"-15rem", userSelect:"none"}}>Elicopterele</h1>
            <div className="position-absolute  start-50 translate-middle" style={{marginTop:"13rem",textAlign:"center", fontFamily:"", color:"white"}} >
                <h2 style={{marginTop:"25rem"}}>De unde a venit ideea de elicopter?</h2>
                    <p>Se spune ca libelula este cea care ne-a inspirat să creăm una dintre cele mai ingenioase
                    mașinării de zbor, elicopterul.</p>
                    <p>Aparent, inspirația nu a venit de la libelule ci de la semințele de paltin care atunci când se
                    îndreaptă către pământ se învârt grațios.</p>
                    <p>Se pare că prima informație a generării unei greutăți maxime pe care o poate suporta un
                    teren sau un sistem tehnic cu ajutorul unei aripi rotative apare în China, în secolul al IV-lea,
                    în cartea Baopuzi scrisă de Ge Hong, în care apare ideea unui vehicul zburător cu aripă
                    rotativă: „Cineva l-a întrebat pe maestru despre principiile urcării la înălțimi periculoase și
                    călătoria în vastitatea văzduhului. Maestrul a răspuns: unii au făcut mașini zburătoare din
                    miezul trunchiului de jujubă, folosind curele din piele de bou pentru a învârti elicele și a pune
                    mașina în mișcare.”</p>
                    <p>Cu toate acestea și desenul lui Leonardo da Vinci este considerată o idee.
                    Într-unul dintre desenele făcute de Leonardo da Vinci în 1475, numit și „șurub aerian” există
                    o aeronavă cu o elice imensă. El a sugerat că un astfel de mecanism ar trebui să decoleze vertical.</p>
                <h2>Inventatorul elicopterului</h2>
                    <p>La 14 septembrie 1939, și-a luat zborul primul elicopter practic din lume, la Stratford, Connecticut.</p>
                    <p>Pilotat de Sikorsky, zborul din 14 septembrie a durat cateva secunde.</p>
                    <p>Elicopterul a avut un rotor cu trei lame cu diametrul de 853 cm și a permis un pas variabil al lamelor cu o viteza a unei lame de la 250 la 300 mph.</p>
                    <p>Igor Sikorsky este considerat “tatăl” elicopterelor, deoarece a inventat primul elicpopter cu succes pe care s-au bazat mai multe proiecte.</p>
                    <p>Sikorsky R-4, proiectat de Igor, are rotor principal cu trei lame și un singur motor, iar acesta a fost îmbunătățit față de predecesorul său VS-300.</p>
            </div>
            <div className="button-group">
                <button
                    type="button"
                    class="btn btn-primary position-absolute start-0 translate-middle btn-lg"
                    style={{ bottom: "10px", marginLeft:"10rem",marginBottom:"20rem" }}
                    onClick={()=>history.push('/helicopter')}
                >
                    Elicoptere
                </button>
                <button
                    type="button"
                    class="btn btn-primary position-absolute start-0 translate-middle btn-lg"
                    style={{ position: "fixed", bottom: "10px",marginLeft:"10rem",marginBottom:"24rem" }}
                    onClick={()=>history.push('/history')}
                >
                    Istoria aviației
                </button>
                <button
                    type="button"
                    class="btn btn-primary position-absolute start-0 translate-middle btn-lg"
                    style={{ bottom: "10px", marginLeft:"10rem",marginBottom:"28rem" }}
                    onClick={()=>history.push('/legend')}
                >
                    Legendă
                </button>
                <button
                    type="button"
                    class="btn btn-danger position-absolute start-0 translate-middle btn-lg"
                    style={{ bottom: "10px", marginLeft:"10rem",marginBottom:"32rem" }}
                    onClick={()=>history.push('/')}
                >
                    Home
                </button>
            </div>
        </div>
    );
}
export default Helicopter;

