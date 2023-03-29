import './App.css';
import AddTach from './component/addTache';
import ListTache from './component/listeTache';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TachHeader from './component/header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
       <TachHeader/>
       <footer>
          <AddTach/>
        </footer>
     <div className="container-fluid d-flex justify-content-center" id="conte">
        <article>
        <ListTache />
      </article>
    </div>
    </Provider>
  );
}

export default App;
