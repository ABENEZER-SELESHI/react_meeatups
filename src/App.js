import { Route, Switch } from 'react-router-dom';
import Allmeetups from './pages/Allmeetups';
import Favs from './pages/Favs';
import Newmeetups from './pages/Newmeetups';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <Allmeetups/>
        </Route>
        <Route path='/new'>
          <Newmeetups/>
        </Route>
        <Route path='/fav'>
          <Favs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
