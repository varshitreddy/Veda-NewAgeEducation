import React from "react";
import{Header,Sidebar,Main,Watch, PreviewChannel,Login} from "./components";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";



function App() {
  return (
    
      <BrowserRouter>
        
        <Routes>
              
            <Route path='/login'  element={<Login/>}>
            
            </Route>
            </Routes>
          <div className="home">
          <Routes>
              <Route path="/" element={<><Header/><Sidebar /><Main /></>}></Route>
              <Route  path="/watch" element={<><Header/><Watch/></>}></Route>
              <Route  path="/PreviewChannel" element={<><Header/><Watch/><Sidebar changeWidth className='app'  /><PreviewChannel className='app'  /></>} ></Route>
          </Routes>
          </div>
          
          
        
      </BrowserRouter>
  );
}

export default App;
