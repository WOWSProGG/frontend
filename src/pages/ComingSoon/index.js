import React from "react";

// atoms
import { Image } from "./../../atoms/Image";
import { Heading } from "./../../atoms/Heading";

import "./../../styles/Global.css";
import "./../../styles/Mobile.css";
import "./ComingSoon.css";

export class ComingSoon extends React.Component {
    render() {
        return (
            <div className="flexContainer content csContent">
                <header className="flexItem header">
                    <div className="flexContainer csHeaderCont">
                        <Image
                            className="csItem logo"
                            src="/assets/img/brand/logo_wows_legends.png"
                            alt="Logo for World of Warships Stats"
                        />
                        <Heading type="h3">World of Warships: Statistics</Heading>
                    </div>
                </header>

                <section className="flexContainer csBannerCont">
                    <div className="flexItem csBanner">
                        <Image
                            className="bannerImage"
                            src="/assets/img/banners/WoWSL_Mass.jpg"
                            alt="Massachussettes from the December 2020 campaign, with a NYC and Libery in background."
                        />
                    </div>
                    <div className="flexItem csHeadingGroup">
                        <Heading type="h1" className="csHeading csHeading-1">
                            Coming Soon
                        </Heading>
                        <Heading type="h1" className="csHeading csHeading-2">
                            Just getting started. This will take a while!{" "}
                        </Heading>
                    </div>
                </section>
            </div>
        );
    }
}
