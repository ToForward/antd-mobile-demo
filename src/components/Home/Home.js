/**
 * Created by admin on 2017/4/6.
 */
import React,{Component} from 'react'
import { Button} from 'antd-mobile';

import './Home.less'

class App extends Component{

    constructor(props){
        super(props);
        alert('home');
    }

    render() {
        return (
            <div>
                <div className="btn-container">
                    <div>
                        <Button className="btn" type="primary">primary 按钮</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;