import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";

function Cooperatives() {


  return (
    <div className="container my-4">

        <h1 className="text-center fs-3 my-5">Cooperatives</h1>
        <nav>
            <form className="d-flex">
                <input className="border rounded-2 px-2 me-2"  placeholder="Search"/>
                <button className="btn bg-light-sky-blue text-light fw-bold me-2" type="submit">Search</button>
                <button className="btn bg-light-sky-blue text-light fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Advenced research
                </button>
            </form>
        </nav>

        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Advenced research</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            smtg
        </div>
        </div>

        <div className="my-4 row">
            <div className="row col-md-6">
                <div className="col-md-6">
                    <div className="card w-100 shadow-sm">
                        <img src="logo512.png" className="card-img-top bg-light" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card w-100 shadow-sm">
                        <img src="logo512.png" className="card-img-top bg-light" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card w-100 shadow-sm">
                        <img src="logo512.png" className="card-img-top bg-light" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card w-100 shadow-sm">
                        <img src="logo512.png" className="card-img-top bg-light" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card w-100 shadow-sm">
                        <img src="logo512.png" className="card-img-top bg-light" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card w-100 shadow-sm">
                    <img src="logo512.png" className="card-img-top bg-light" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}


export default Cooperatives;
