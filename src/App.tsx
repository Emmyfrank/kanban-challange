



import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import RoadMap from "./components/RoadMap"
import NewBoard from "./components/NewBoard";
import MarketingPlan from "./components/MarketingPlan";
import PlatformLaunch from "./components/PlatformLaunch";



function App() {
  return (
    <div>
      <Routes>
        <Route  element = {<Homepage/>}>
          <Route index element={<PlatformLaunch/>}/>
          <Route path="/marketing" element = {<MarketingPlan/>}/>
          <Route path="/roadmap" element = {<RoadMap/>}/>
          <Route path="/new-board" element = {<NewBoard/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;








