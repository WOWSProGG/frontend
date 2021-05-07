import React from "react";

import "./image.css";

export class Image extends React.Component {
    constructor(props) {
        super();

        const className = `img ${props.className}`;

        let src = props.src;
        let alt = props.alt;

        if (src === null || src === "") {
            src = "/assets/img/brand/logo_wows_legends.png";
            alt = "Logo for World of Warships Stats";
        }

        this.state = {
            className: className,
            src: src,
            alt: alt,
        };
    }

    render() {
        return <img className={this.state.className} src={this.state.src} alt={this.state.alt}></img>;
    }
}
