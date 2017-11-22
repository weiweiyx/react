import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Header from '../components/header/header'
import Official from '../containers/OfficialIndex/index';
import Our from '../containers/our/index'
import Product from '../containers/product/index'
import Recycle from '../containers/recycle/index'
import Repairs from '../containers/repairs/index'
import Service from '../containers/service/index'
import NotFound from '../containers/404';
class App extends Component{
    constructor(props, context){
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }
    render(){
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Official}/>
                        <Route path='/product' component={Product} />
                        <Route path='/recycle' component={Recycle} />
                        <Route path='/repairs' component={Repairs} />
                        <Route path='/service' component={Service} />
                        <Route path='/our' component={Our} />
                        <Route component={NotFound}/>
                    </Switch>
                    {/*尾部footer*/}
                </div>
            </Router>
        );
    }
}
export default App;