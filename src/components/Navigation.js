function Navigation() {
  const scroll = (y) => {
    let newy = y;
    if (window.innerWidth < 992) newy += 200;
    window.scrollBy(0, newy - window.scrollY);
  };
  return (
    <>
      <header className="header-styles">
        <a className="a-button" onClick={() => scroll(625)}>Projects</a>
        <a className="a-button" onClick={() => scroll(7500)}>Contact</a>
      </header>
    </>
  );
}

export default Navigation;
