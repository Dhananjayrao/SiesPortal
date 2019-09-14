import React,{Component} from 'react';
import Body from './Body/Body'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Main/Main'
import Office from './Office/Office'
import Profile from './Profile/Profile'
import Railway from './Railway/Railway'
import Courses from './Courses/Courses'
import Examcell from './Examcell/Examcell'
import Form from './Form/Form'
import Railwayapply from './Railway/Railwayapply'
import Signin from './Form/Signin'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Route path="/Signin" render={()=>(<div><Signin/></div>)}/>
        <Route exact path="/Form" render={()=>(<div><Form/></div>)}/>        
        <Route exact path="/" render={()=>(<div><Body/></div>)}/>
        <Route exact path="/Home" render={()=>(<div><Main/></div>)}/>
        <Route path="/Railway" render={()=>(<div><Railway/></div>)}/>
        <Route path="/Profile" render={()=>(<div><Profile/></div>)}/>        
        <Route path="/Office" render={()=>(<div><Office/></div>)}/>
        <Route path="/Courses" render={()=>(<div><Courses/></div>)}/>         
        <Route path="/Examcell" render={()=>(<div><Examcell/></div>)}/>
        <Route path="/RAILWAYCONCESSION" render={()=>(<div><Railwayapply/></div>)}/>      
      </div> 

      
      );
  }
}
 
export default App;