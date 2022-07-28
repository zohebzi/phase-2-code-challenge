import React from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";
import Planeteer from "./Planeteer";


function App() {
  const [allPlaneteers, setAllPlaneteers] = useState([])
  const [filteredPlaneteers, setFilteredPlaneteers] = useState(allPlaneteers)

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
      .then(response => response.json())
      .then(data => setAllPlaneteers(data))


  }, [])

  useEffect(() => {
    setFilteredPlaneteers(allPlaneteers)
  }, [allPlaneteers])



  function handleSearch(e) {
    const filteredPlaneteers = allPlaneteers.filter(planeteer => { return planeteer.name.includes(e.target.value) || planeteer.bio.includes(e.target.value) })

    setFilteredPlaneteers(filteredPlaneteers)
  }

  return (
    < div >
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <RandomButton />
      <PlaneteersContainer planeteers={filteredPlaneteers} />
    </div >
  );
}


export default App;
