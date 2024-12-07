
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5" >
  <div className="container">
    <Link className="navbar-brand" to="#">Trending Movies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item ">
          <Link className="nav-link " aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="movies">movies</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="tv">Tv</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="people">people</Link>
        </li>
      </ul>


      <ul className="navbar-nav d-flex">
      <li className="nav-item  order-lg-2">
          <Link className="nav-link " aria-current="page" >Login</Link>
        </li>
        <li className="nav-item order-lg-2">
          <Link className="nav-link " >Signin</Link>
        </li>
      
      <li className="nav-item order-lg-1 d-flex align-items-center">
         <i className="fab mx-3 fa-facebook"></i>
         <i className="fab mx-3 fa-twitter"></i>
         <i className="fab mx-3 fa-instagram"></i>
         <i className="fab mx-3 fa-spotify"></i>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}