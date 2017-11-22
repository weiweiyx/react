/**
 * Created by weitan on 2017/11/21.
 */
import React from 'react'
import './header.scss'
// import PureRenderMixin from 'react-addons-pure-render-mixin'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="header">
                <img src="" alt="logo"/>
                <ul className="headerList">
                    <li>首页</li>
                    <li>产品</li>
                    <li>维修</li>
                    <li>回收</li>
                    <li>我们</li>
                    <li>服务</li>
                </ul>
            </div>
        )
    }
}

export default Header;