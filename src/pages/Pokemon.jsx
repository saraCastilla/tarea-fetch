import React from 'react'
import{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';



function Pokemon() {

    const[personajes, setPersonajes]= useState([]);
   
    


    useEffect(()=>{

        let controller = new AbortController()
        let options ={
            method: 'GET',
            headers: {
                'content_type':'application/json'
            },
            signal: controller.signal
        }
        fetch('https://pokeapi.co/api/v2/pokemon/',options)
        .then(response=>response.json()
        ).then(data =>{
            console.log(data.results
                );
            setPersonajes(data.results)
        })
        .catch(err =>console.log(err))
    .finally(()=>controller.abort())

    },[])
  return (
    <>
    <ul className='lista'>
    {personajes.map((personaje,index)=>{
        return<> <li className='elemento__lista' key={index}><Link className='enlace__lista' to={'/pokemon/' + (index+1)}>{personaje.name}</Link></li>
        </>
    })}
    
     
    
   
    

    
    </ul>
    </>
  )
}

export default Pokemon