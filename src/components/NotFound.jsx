import { NavLink } from "react-router-dom"

const NotFound = () => {

    return(
        <div style={{height: "100vh"}}>
        <div className="text-center text-white my-5 bg-primary w-50 mx-auto rounded-pill">
            <h3 className="display-5 fst-italic text-light pt-3">404 - Pagina non Trovata</h3>
            <NavLink to="/" style={{color: "rgba(13,110,253,1)"}} className="btn btn-light fw-bold my-3 rounded-pill">Torna alla Home</NavLink>
        </div>
        </div>
    )
}

export default NotFound