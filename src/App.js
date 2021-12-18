import './App.css';
import Video from './components/Video/Video';

const App = () => {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
