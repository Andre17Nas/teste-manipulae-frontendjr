import GlobalStyles from './styles/global.js'
import Home from './pages/home'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles/>
      <Home/>
    </Provider>
  );
}

export default App;
