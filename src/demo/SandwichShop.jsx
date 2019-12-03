// I can also dispatch a thunk async action from a component
// any time its props change to load the missing data.

import { connect } from "react-redux";
import { Component } from "react";

class SandwichShop extends Component {
    componentDidMount() {
        this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.forPerson !== this.props.forPerson) {
            this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson));
        }
    }

    render() {
        return <p>{this.props.sandwiches.join("mustard")}</p>;
    }
}

export default connect((state) => ({
    sandwiches: state.sandwiches
}))(SandwichShop);
