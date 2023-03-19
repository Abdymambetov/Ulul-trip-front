import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Main'
import { store } from './store'

function App() {
   
    return (
        <div style={{"minWidth": '1350px'}} className="App">
            <div className="container">
                <BrowserRouter>
                    <Provider store={store}>
                        <Main />
                    </Provider>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default App
