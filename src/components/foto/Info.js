import React from "react";
import { Link } from "react-router-dom"

export default () => (
    <div className="foto-in fo">
        <div className="foto-info-likes">

            <Link >
                alots_ssa
             </Link>
            ,
                <Link >
                rafael_rollo
                </Link>&nbsp;
            curtiram
        </div>

        <p className="foto-info-legenda">
            <Link className="foto-info-autor">autor </Link>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
              </p>

        <ul className="foto-info-comentarios">
            <li className="comentario">
                <Link className="foto-info-autor">seguidor </Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                </li>
            <li className="comentario">
                <Link className="foto-info-autor">seguidor </Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos temporLinkexpedita, laborum ex solutLinkhic maiores veritatis deserunt.
                </li>
            <li className="comentario">
                <Link className="foto-info-autor">seguidor </Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fugLinkodio delectus maiores voluptatibus sit commodi quidem.
                </li>
        </ul>
    </div>
);