import './Header.css'

function Header(props){
    const {title, handleClick} = props;
    return (<>
        <header className='header'>
            <h1 className='header-title'>{title || "Titre par défaut"}</h1>
        </header>
        <button onClick={handleClick}>{`Clic ${title}`}</button>
    </>);

}

export default Header;