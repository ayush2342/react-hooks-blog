import { Route } from 'react-router-dom';
import { Navbar, Home ,PostDetail,CreatePost} from './';

function App() {
  return (
    <div className="container">
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/post/:postId" component={PostDetail} />
      <Route exact path="/create-post" component={CreatePost} />
    </div>
  );
}

export default App;
