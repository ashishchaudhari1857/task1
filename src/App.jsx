import "./App.css";
import Asidebar from "./components/contentBody/Asidebar/Asidebar";
import ContentBody from "./components/contentBody/ContentBody";
function App() {
  return (
    <div className="container">
      <div className="AsideBar">
        <Asidebar></Asidebar>
      </div>
      <div className="Content">
        <ContentBody></ContentBody>
      </div>
    </div>
  );
}

export default App;
