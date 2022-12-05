import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./cmps/app-header"
import { AppView } from "./views/app-view";
import { ProjectDetails } from "./views/project-details";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className='main-container'>
        <Routes>
          <Route path='/' element={<AppView />} >
          <Route path='/:projectName' element={<ProjectDetails />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
