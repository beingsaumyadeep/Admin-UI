import React from 'react'

export default function Sidebar(props) {
    return (
        <>
        <div className={`col sidemenu ${props.isOpen ? `mobile_menu` : ``}`}>
            <div className="blocks logo">
                <img alt="" src="./assets/images/W.png"/>
            </div>
            <div className="mt-3"></div>
            <div className="blocks">
                <a href="#">
                    <img alt="" src="assets/images/home.png"/>
                    Home
                </a>
            </div>
            <div className="blocks">
                <a href="#">
                    <img alt="" src="assets/images/bar-chart.png"/>
                    Stactics
                </a>
            </div>
            <div className="blocks">
                <a href="#">
                    <img alt="" src="assets/images/user-1.png"/>
                    Users
                </a>
            </div>
            <div className="blocks">
                <a href="#">
                    <img alt="" src="assets/images/settings.png"/>
                    Settings
                </a>
            </div>
            <div className="blocks">
                <a href="#">
                    <img alt="" src="assets/images/information.png"/>
                    Quires
                </a>
            </div>
            <div className="flex-grow-1"></div>
            <div className="blocks b0">
                <a href="#">
                    <img alt="" src="assets/images/power-button.png"/>
                </a>
            </div>
        </div>
        <div className={`overlay ${props.isOpen ? `` : `d-none`}`} onClick={props.onClose}/>
        </>
    )
}
