import { useContext } from "react"
import { trendmovie } from "../Stor"

export default function Pepole() {
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
 let {trendingPeople}=useContext(trendmovie)


  return (
    <div>
      <div className="row">
      <div className=" model d-none d-flex justify-content-center align-items-center">
<i className="fa-solid close fa-xmark"></i>
<img className="w-mob w-25" src="" alt="img"  ></img>
</div> 
 <div className="col-md-4 d-flex align-items-center mt-3">
 <div>
 
 <h3>trending people </h3>
 <p className="lead">Top trending people by week</p>
 <div className="brdr w-100 mt-4"></div>
 </div>
 </div>
 {trendingPeople.map((person,i)=><div key={i} className="col-md-2 mb-3 mt-3">

{person.profile_path===null?<img className="w-100 h-75" src='https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png' alt="logomovie"/>
 :<img className="w-100" src={"https://image.tmdb.org/t/p/w500"+person.profile_path} alt="logomovie"/>}
<h2 className="h6">{person.name}</h2> 
</div>)} 
  </div> 
    </div>
  )
}
