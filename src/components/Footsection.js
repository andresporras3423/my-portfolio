function Footsection() {
  const linkCV = (url) => {
    window.open(url, '_blank');
  };
  return (
    <footer className="footer-styles">
      <div><span className="contact title-style">Contact me</span></div>
      <div>
        <span className="social-links">
          <label><i className="fa fa-github" onClick={() => linkCV('https://github.com/andresporras3423')} /></label>
          <label><i className="fa fa-twitter" onClick={() => linkCV('https://twitter.com/oscarrussi1')} /></label>
          <label><i className="fa fa-linkedin" onClick={() => linkCV('https://www.linkedin.com/in/oscar-andres-russi-porras/')} /></label>
        </span>
      </div>
    </footer>
  );
}

export default Footsection;
