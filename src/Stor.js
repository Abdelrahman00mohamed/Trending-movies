import { createContext } from "react";
import   Axios  from "axios";
import { useEffect } from "react";
import { useState } from "react";
export let trendmovie=createContext()


export default function Moviesprovider(props){
  let[trendingMovies,setTrendingMovies]=useState([])
  let[trendingTv,setTrendingTv]=useState([])
  let[trendingPeople,setTrendingPeople]=useState([])
  let lis=document.querySelectorAll('.page-item ')
  function activpg(e){
        
    lis.forEach((li)=>{
      li.classList.remove('active')
    })
    e.target.classList.add('active')
    
    
    
  }
    async function getMovies( pram,callback,pgnum){
      let {data}=await Axios.get(`https://api.themoviedb.org/3/discover/${pram}?api_key=76ac71c6117eb0c48863eba693d0728d&page=${pgnum}`)
        callback(data.results)
    }  
  useEffect(()=>{  
  getMovies("movie",setTrendingMovies,1)
  getMovies("tv",setTrendingTv,1)
  getMovies("person",setTrendingPeople,1)
  
  },[])
  
  return<trendmovie.Provider value={{trendingMovies,trendingTv,trendingPeople,setTrendingMovies,getMovies,setTrendingTv,activpg}}>
    {props.children}
  </trendmovie.Provider> 
}
