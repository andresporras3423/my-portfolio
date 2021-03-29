function Navigation() {
    const scroll = (y)=>{
        if(window.innerWidth<992) y+=200;
        window.scrollBy(0, y-window.scrollY);
      };
    return (
      <>
      <header className="header-styles">
              <button className="a-button" onClick={scroll(625)}>Projects</button>
              <button className="a-button" onClick={scroll(7500)}>Contact</button>
        </header>
      </>
    );
  }
  
  export default Navigation;
  