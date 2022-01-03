import React from "react";
import profileImage from "../../assets/hero/new profile.png";

function Hero() {
    return (
        <section className="my-5" title="Big Bend National Park skyline at night.">
            <img src={profileImage} alt="Rick Martin" />
            <p>&lt; Developer/Problem_Solver &gt;<br></br>clean and intuitive digital products for<br></br>effective business results
            </p>
        </section>

    )
}

export default Hero;