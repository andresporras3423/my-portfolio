function Navigation() {
  const scroll = (y) => {
    let newy = y;
    if (window.innerWidth < 992) newy += 200;
    window.scrollBy(0, newy - window.scrollY);
  };
  return (
    <>
      <header className="header-styles">
        <button type="submit" className="a-button" onClick={scroll(625)}>Projects</button>
        <button type="submit" className="a-button" onClick={scroll(7500)}>Contact</button>
      </header>
    </>
  );
}

export default Navigation;
