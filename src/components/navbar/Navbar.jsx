import "./navbar.scss"
 import PersonIcon from "@material-ui/icons/Person";
 import MailIcon from "@material-ui/icons/Mail";
 import LinkedInIcon from '@material-ui/icons/LinkedIn';
 import GitHubIcon from '@material-ui/icons/GitHub';
export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + ( menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Lakehal.</a>
                    <div className="itemContainer"> 
                    <PersonIcon className="icon"/>
                    <span>+1 407 910 3352</span>
                    </div>
                    <div className="itemContainer"> 
                    <MailIcon className="icon"/>
                    <span>contact@khaledlakehal.com</span>
                    </div>
                    <a href="https://www.linkedin.com/in/khaled-lakehal-7a6850169/" target="_blank">
                    <div className="itemContainer"> 
                    <LinkedInIcon className="icon"/>
                    <span>LinkedIn</span>
                    </div>
                    </a>
                    <a href="https://github.com/LAKEHALKhaled" target="_blank">
                    <div className="itemContainer"> 
                    <GitHubIcon className="icon"/>
                    <span>GitHub</span>
                    </div>
                    </a>
                    
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
