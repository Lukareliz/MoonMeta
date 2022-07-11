import Logo from "../../assets/img/logo.svg"
import "./styles.css"

function Header() {
    return (
        <header>
        <div className="moonmeta-logo-container">
            <img src={Logo} alt="MoonMeta" />
            <h1>MoonMeta</h1>
            <p>
              Desenvolvido por
            <a href="https://github.com/Lukareliz"> @Lukareliz</a>
            </p>
        </div>
    </header>
    )
  }
  
  export default Header