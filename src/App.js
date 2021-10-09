import GlobalStyles from './styles/global.js'
import Home from './pages/home'
import { Provider } from 'react-redux';
import store from './redux/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles/>
      <ToastContainer />
      <Home/>
    </Provider>
  );
}

export default App;
