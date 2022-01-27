import React,{useState, useEffect} from "react"
import validate from "./validate"
export default function useSquidGame() {
  const [isLoading, setIsLoading] = useState(false);
  const [gameStatus , setGameStatus]=useState("IN_PROGRESS")
  useEffect(() => {
    setIsLoading(true)
    setGameStatus("IN_PROGRESS")
    fetch(isLoading).then(response =>response.json()).then(response=>response.json()).then(json=>setIsLoading(json)).finally(()=>setIsLoading(false))
  }, []);
  return {
    isLoading,
    gameStatus
  };
}
//Didnt figureout a way for gamestatus
