import React from "react";
import{ Link } from "react-router-dom";

export default () => (
    <header className="foto-header">
        <figure className="foto-usuario">
            <img src="https://t4.ftcdn.net/jpg/01/50/93/63/240_F_150936311_wOYTkpWun364fYCbKEJPP01LO9O7QgXD.jpg" alt="foto do usuario" />
            <figcaption className="foto-usuario">
                <Link>
                    alots
                  </Link>
            </figcaption>
        </figure>
        <time className="foto-data">03/10/2016 20:13</time>
    </header>
);