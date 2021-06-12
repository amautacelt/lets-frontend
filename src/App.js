import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

function App() {
  return (
    <div className="App">
      <Header />
      <ActivityForm />
      <ActivityList />
    </div>
  );
}

export default App;
