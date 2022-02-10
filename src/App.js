import {BrowserRouter as Router, Route, Switch}
from 'react-router-dom';
import{
  Home, 
  About, 
  Error,  
  PrivateRoute,
  Authpage
} 
from './pages';

import {
  Fotter,
  NavBar,
  SideBar,
  ReactPage,
  Compiler,
  SIngleTemplate
  }
from './components'


function App() {
  return (
  <Router>
  <NavBar/>
  <SideBar/>
    <Switch>
    <Route exact path ="/">
{/*home*/}
      <Home/>
      </Route>
{/*about*/}
      <Route exact path ="/about">
      <About/>
      </Route>
{/* ReactPage */}
<Route exact path ="/react">
      <ReactPage/>
      </Route>
{/* compiler */}
<PrivateRoute exact path ="/compiler">
      <Compiler/>
      </PrivateRoute>
      {/* datastructure */}
{/* <Route exact path ="/datastructure">
      <Datastructure/>
      </Route>
<Route exact path ="/singlequestion/:id">
      <SingleQuestion/>
      </Route> */}
<Route exact path ="/accessdenied">
      <Authpage/>
      </Route>
<Route exact path ="/template/:id">
      <SIngleTemplate/>
      </Route>
     

{/*error page*/}
<Route exact path ="/*">
      <Error/>
      </Route>
    </Switch>
  <Fotter/>
  </Router>
  );
}

export default App;
