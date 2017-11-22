/**
 * Created by weitan on 2017/11/21.
 */
import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'

class Official extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h1>首页</h1>
        )
    }
}

export default Official;