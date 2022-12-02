import React from "react";
import Navbar from "../components/Navigation/Navbar";
import "./Home.css";

function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Home</h1>
                <div className="container">
                    <div className="box">
                        <div className="imgBx">
                            <img
                                src={require("../components/imgs/fab1.jpg")}
                                alt="img1"
                            />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Silk</h2>
                                <p>
                                a delicate, soft type of cloth made from a thread produced by silkworms, or the thread itself
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img
                                src={require("../components/imgs/fab2.jpg")}
                                alt="img2"
                            />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Faux Silk</h2>
                                <p>
                                made from polyester, giving the material fantastic longevity, durability and fade-resistance after washing
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img
                                src={require("../components/imgs/fab5.jpg")}
                                alt="img3"
                            />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Damask</h2>
                                <p>
                                a reversible patterned fabric of silk, wool, linen, cotton or synthetic fibers, with a pattern formed by weaving
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*<div className="box">
                        <div className="imgBx">
                            <img src={require("../components/imgs/fab4.jpg")} />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Image Title</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi accusamus
                                    molestias quidem iusto.
                                </p>
                            </div>
                        </div>
                    </div>
    */}
                </div>
            </div>
        </div>
    );
}

export default Home;
