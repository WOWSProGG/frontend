import "./styles/Global.css";
import "./styles/Mobile.css";
import "./styles/App.css";

function App() {
    return (
        <div className="flexContainer content csContent">
            <header className="flexItem header">
                <div className="flexContainer csHeaderCont">
                    <img
                        className="flexItem csItem logo"
                        src="/assets/img/brand/logo_wows_legends.png"
                        alt="Logo for World of Warships Stats"
                    ></img>
                    <p className="flexItem text">World of Warships: Statistics</p>
                </div>
            </header>

            <section className="flexContainer csBannerCont">
                <div className="flexItem csBanner">
                    <img
                        className="bannerImage"
                        src="./assets/img/banners/WoWSL_Mass.jpg"
                        alt="Massachussettes from the December 2020 campaign, with a NYC and Libery in background."
                    />
                </div>
                <div className="flexItem csHeadingGroup">
                    <h1 className="csHeading csHeading-1">Coming Soon</h1>
                    <h2 className="csHeading csHeading-2">Just getting started, it will take a while!</h2>
                </div>
            </section>
        </div>
    );
}

export default App;