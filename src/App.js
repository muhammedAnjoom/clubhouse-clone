import './App.css';
import PlanLayout from './pages/Layout/PlanLayout';
import Welcome from './pages/Welcome';
import {BrowserRouter, Route} from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';

//plan layout
function App() {
  return (
    <BrowserRouter>
    <PlanLayout>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/invite" component={PhoneConfirmation}/>
      <Route exact path="/code_confirm" component={CodeConfirm}/>
    </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
