import React from "react";

class Heading extends React.Component {
    constructor() {
        super();
        this.state = {
            variant: "h3",
        };
    }

    render() {
        if (this.state.variant === "h1") {
            return <h1 className="flexItem text">World of Warships: Statistics</h1>;
        }
        if (this.state.variant === "h2") {
            return <h2 className="flexItem text">World of Warships: Statistics</h2>;
        }
        if (this.state.variant === "h3") {
            return <h3 className="flexItem text">World of Warships: Statistics</h3>;
        }
    }
}

export default Heading;
