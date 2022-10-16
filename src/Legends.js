import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Legend = () => {
    const history = useHistory();
return (
    <div className="legend">
        <h1 font={24} style={{marginTop:"-7rem", userSelect:"none"}}>Legenda începutului zborului</h1>
        <div className="position-absolute  start-50 translate-middle" style={{marginTop:"30rem",textAlign:"justify", fontFamily:"", color:"white"}} >
            <p>&emsp;&emsp;Icar este fiul lui Dedal, prezentat în mitologia greacă drept arhitect și sculptor, cel care a contribuit la ridicarea celebrului labirint din Knossos. În acest labirint regele Cretei, Minos, îl închisese pe Minotaur.</p>
            <p>&emsp;&emsp;Pentru a-i potoli pofta de carne umană, Minos îi trimitea lui Minotaur flăcăi și fecioare. După o vreme, Dedal, sătul de sacrificiile făcute pentru Minotaur, complotează cu Tezeu pentru uciderea monstrului. Drept pedeapsă, Minos îi închide pe arhitect și pe fiul acestuia, Icar, în labirint și zidește ieșirea. Însa ingeniosul Dedal reușește să confecționeze două perechi de aripi de ceară și din pene, pentru el și fiul său, care ar fi trebuit să îi salveze. Icar, fascinat de frumusețea zborului și a înălțimilor, se apropie prea mult de Soare. Zeul Helios, mânios pe faptul că oamenii au descoperit secretul zborului, topește cu căldura sa aripile lui Icar, care se prabușește în apele marii Egee. Icar se lovește de niște stânci și moare. De atunci acea parte a mării și insula îi poarta numele, Icaria, la sud vest de Samos.</p>
            <p>&emsp;&emsp;Aceasta legenda subliniaza interesul omenirii asupra zborului, inca din timpurile antice. Oamenii reusind insa sa cucereasca complet aceasta fascinatie, pe care o au de secole, in anul 1901, datorita fratilor Wright si ambitia acestora. </p>
            <p>&emsp;&emsp;Dar pana acolo mai sunt multe etape de dezvoltare a acestei arte a zborului, precum in Extremul Orient inainte de Hristos apăreau un fel de vehicule zburătoare cu elice.</p>
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
export default Legend;