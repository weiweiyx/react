/**
 * Created by weitan on 2017/11/21.
 */
import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'

class Our extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h1>我们</h1>
        )
    }
}

export default Our;