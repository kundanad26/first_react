import { lazy,Suspense } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes'
const Login=lazy(()=>import('./pages/login'));
function App() {
  return (
     <Router>
      <Suspense fallback={<p>Loading...</p>}>
       <switch>
         <Route path={ROUTES.LOGIN} component={Login}/>
       </switch>
      </Suspense>
     </Router>
  );
}

export default App;
 