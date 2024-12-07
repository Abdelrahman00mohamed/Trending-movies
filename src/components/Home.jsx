import { useContext } from "react"
import { trendmovie } from "../Stor"


export default function Home() {
  let disimg=document.querySelectorAll(".row .col-md-2 img")
  let close=document.querySelector('.close') 
  let model=document.querySelector('.model') 
  let imgmodel=document.querySelector('.model img') 
  
  disimg.forEach((img)=>{
  img.addEventListener("click",(e)=>{
    model.classList.remove('d-none')
    const surimg=e.target.getAttribute('src')
    imgmodel.src=surimg 
   
  })
    close.addEventListener("click",()=>{
      model.classList.add('d-none') 
    })     
  })  
 let {trendingMovies,trendingTv,trendingPeople}= useContext(trendmovie)
  return (  
<> 
  <div className="row ">
  <div className=" model d-none d-flex justify-content-center align-items-center headin">
  <i className="fa-solid close fa-xmark"></i>
<img className="w-mob w-25" src="" alt="img"  ></img>
</div> 
 <div className="col-md-4 d-flex align-items-center mt-3">
 <div>
 
 <h2>trending <br/> movies <br/> to wacth right now </h2>
 <p className="">Top trending movies by week</p>
 <div className="brdr mt-3 mb-2"></div>
 </div>

 </div>
{trendingMovies.slice(0,10).map((movie,i)=> <div key={i} className="col-md-2 mb-3  mt-3">
<img className="w-100" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="logomovie"/>
<h2 className="h6 my-2">{movie.title}</h2>
</div> )}


  </div>

  <div className="row py-4">
 <div className="col-md-4 d-flex align-items-center ">
 <div>
 
 <h3>trending  tv <br/> TO wacth right now </h3>
 <p className="lead">Top trending tv by week</p>
 <div className="brdr w-100 mt-4"></div>
 </div>

 </div>
{trendingTv.slice(0,10).map((tv,i)=> <div key={i} className="col-md-2  mt-3">
<img className="w-100" src={"https://image.tmdb.org/t/p/w500"+tv.poster_path} alt="logomovie"/>
<h2 className="h6 my-2">{tv.name}</h2>

</div>)}

  </div>

  <div className="row">
 <div className="col-md-4 d-flex align-items-center ">
 <div>

 <h3>trending people </h3>
 <p className="lead">Top trending people by week</p>
 <div className="brdr mt-4"></div>
 </div>
 </div>
{trendingPeople.slice(0,10).map((person,i)=> <div key={i} className="col-md-2  mt-3">
{person.profile_path===null?<img className="w-100 h-75" src='https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png' alt="logomovie"/>
:<img className="w-100" src={"https://image.tmdb.org/t/p/w500"+person.profile_path} alt="logomovie"/>
}
<h2 className="h6 my-2">{person.name}</h2>
</div>)}
  </div> 
</>
  );

}
