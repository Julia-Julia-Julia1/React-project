 // JSX

import TaskList from "./TaskList";
import TopMenu from "./TopMenu";


function App() {

const name = 'Counter Application';
const version = 'v 0.2.5';

  return (
    <div>
      <TopMenu />
      <TaskList siteName = {name} version = {version}/>
      
     App component

    


    </div>
  );
}

export default App;
