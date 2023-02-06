import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import Main from './Main';
import { store } from './store';

import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Main/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
