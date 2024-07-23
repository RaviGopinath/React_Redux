import CreateCustomer from './CreateCustomer';
import './App.css';
import ListCustomer from './ListCustomer';
import { Provider } from 'react-redux';
import { Store } from './Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CreateCustomer />
        <ListCustomer />
      </div>
    </Provider>
  );
}

export default App;
