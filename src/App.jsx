import "./App.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  return (
    <div className="container">
      <Description></Description>
      <Options></Options>
      <Feedback></Feedback>
    </div>
  );
};

export default App;
