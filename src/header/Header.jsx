import "./Header.css";


function Header() {
    return <h1 className="header">
        <img src="/Bookmark.svg" alt="header-logo" className="header-logo" />
        <div className="links">
            <a href="">Поиск фильмов</a>
            <a href="">Мои фильмы</a>
            <a href="">Войти <img src="/Login.svg" alt="login" /></a>
        </div>
    </h1>
}

export default Header;