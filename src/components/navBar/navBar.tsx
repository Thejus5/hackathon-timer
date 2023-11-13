import { appConfigs } from "../../Core/config";
import Button from "../button/button";
import { NavWrapper } from "./navBar.style";

function NavBar(){
    return(
        <NavWrapper>
            <div className="centeredDiv">
                <p className="titleText">{appConfigs.appTitle}</p>
                <div className="navLinks">
                    <p className="links linkText">Rules</p>
                    <p className="links linkText">Leaderboards</p>
                    <div className="links">
                        <Button className="subscribeBtn" variant="secondary" label="subscribe"/>
                        <Button variant="primary" label="subscribe"/>
                    </div>
                </div>
            </div>
        </NavWrapper>
    )
}

export default NavBar