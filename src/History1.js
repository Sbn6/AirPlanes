import { useHistory } from "react-router-dom";
const History1 = () => {
    const history = useHistory();
    return (
    
        
        <div className="history1">
            <h1 font={24} style={{marginTop:"-15rem", userSelect:"none"}}>Istoria aviației</h1>
            <div className="position-absolute  start-50 translate-middle" style={{marginTop:"30rem",textAlign:"justify", fontFamily:"", color:"white"}} >
                <h6>In Europa Medievala, in secolul al IX-lea:</h6>
                <p>&emsp;&emsp;Un savant arab  construiește un planor cu care survolează un dealul celebru. Încercând să revină la locul de plecare, se prăbușește rănindu-se. De aici ajunge la concluzia că aparatul de zbor trebuia să fie prevăzut și cu coadă, ce ar fi avut rol în menținerea echilibrului și stabilizarea direcției.</p>
                <h6>In perioada Renasterii:</h6>
                <p>&emsp;&emsp;Un mare pas, l-a facut, in 1488, Leonardo da Vinci care desenează un fel de planor la care partea interioară a aripilor era fixată, iar la vârfurile lor era prevăzut cu niște părți reglabile. Abia în secolul al XX-lea s-a construit un prototip după acest proiect.</p>
                <p>&emsp;&emsp;În 1647, inventatorul italian Burattini, invitat la curtea regelui polon Vladislav, construiește un aparat de zbor cu patru aripi cu care, în anul următor, reușește să facă o pisică să se înalțe deasupra solului, dar nu și pe el însuși. Aceasta este considerat cel mai elaborat planor care să fie construit până în secolul al XIX-lea. Dragonul său zburător a fost unul dintre cele mai sofisticate aparate de zbor construite până în secolul al XIX-lea.</p>
                <p>&emsp;&emsp;Toate proiectele de mașini de zbor ale lui Leonardo aveau ca parte principală sisteme de aripi prin a căror mișcare se asigura portanța. Mai mult, Robert Hooke a dovedit în 1655 imposibilitatea zborului uman fără aparat propulsat de motor.</p>
                <h6>In secolul al XVIII-lea:</h6>
                <p>&emsp;&emsp;Bartolomeu reușește să construiască un balon cu aer cald cu care zboară la 8 august 1709.</p>
                <p>&emsp;&emsp;La 21 noiembrie 1783, 2 savanti francezi părăsesc Parisul la bordul unui balon, fiind primul zbor cu echipaj uman și înregistrat de documente.</p>
                <p>&emsp;&emsp;Prima femeie în zbor este considerată contesa de Montalembert, care a survolat Parisul în balon pe data de 20 mai 1784.</p>
                <p>&emsp;&emsp;Din punctul de fata, aeroplanele incep sa ia contur si sa semene din ce in ce mai mult cu exemplarele pe care le vedem cu totii deasupra capetelor noastre, pe cerul senin.</p>
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
    export default History1;