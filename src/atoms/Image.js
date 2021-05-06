import React from "react";

class Image extends React.Component {
    constructor(props) {
        super();

        let src = props.src;
        let alt = props.alt;
        let className = "flexItem";

        if (src === null || src === "") {
            src = "/assets/img/brand/logo_wows_legends.png";
            alt = "Logo for World of Warships Stats";
        }

        this.state = {
            className: className + " " + props.className,
            src: src,
            alt: alt,
        };
    }

    render() {
        return <img className={this.state.className} src={this.state.src} alt={this.state.alt}></img>;
    }
}

export default Image;
