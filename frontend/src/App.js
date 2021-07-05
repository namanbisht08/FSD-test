import React from 'react';
import { Switch,Route} from 'react-router-dom';
import NavbarM from './components/NavbarM';
import Home from './components/Home';
import Posts from './components/Posts';
import PostsIdComments from './components/PostIdComments';

const App = () => {
    return ( 
        <React.Fragment>
            <NavbarM />
            <div>            
            <Switch>
                <Route path="/posts/id/comments" exact component={PostsIdComments} />
                <Route path="/posts" exact component={Posts} />
                <Route path="/" exact component={Home} />
            </Switch>
            </div>
        </React.Fragment>
     );
}
 
export default App;
