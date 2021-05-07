import React from "react";

import "./heading.css";

export class Heading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,
            children: this.props.children,
            className: this.props.className,
        };
    }
    render() {
        if (this.state.type === "h1") {
            return <h1 className={this.state.className}>{this.state.children}</h1>;
        }
        if (this.state.type === "h2") {
            return <h2 className="flexItem text">{this.state.children}</h2>;
        }
        if (this.state.type === "h3") {
            return <h3 className="flexItem text">{this.state.children}</h3>;
        }
    }
}
