import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div>Ⓒ {new Date().getFullYear()} Liam Hemming</div>
                <div className="footerSpacer"></div>
                <div>
                    Find me on github:{" "}
                    <a
                        href="https://github.com/lmjh/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        lmjh
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
