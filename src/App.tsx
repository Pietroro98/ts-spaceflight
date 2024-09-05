import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from '../src/components/ArticleList';
import ArticleDetail from '../src/components/ArticleDetail';

function App() {
  return (
    <div className="App">

      <ArticleList />
      <ArticleDetail />
    </div>
  );
}

export default App;
