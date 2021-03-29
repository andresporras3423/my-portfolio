import { useEffect } from 'react';
import useState from 'react-usestateref';

function Presentation() {
  const colorClass = ['', 'disappear'];
  const [colorOpt, setColorOpt, getColorOpt] = useState(0);
  const updateColor = () => {
    setTimeout(() => {
      const nVal = (getColorOpt.current + 1) % 2;
      setColorOpt(nVal);
      updateColor();
    }, 1000);
  };

  useEffect(() => {
    updateColor();
  }, []);

  const linkCV = (url) => {
    window.open(url, '_blank');
  };
  return (
    <section>
      <div className="photo-div">
        <img alt="" src="./src/assets/oscar.jpg" className="photo-style" />
        <article>
          <h1 className="text-title">
            {'>'}
            {' '}
            Andrés Porras
            <span className={colorClass[getColorOpt.current]}>|</span>
          </h1>
          <p>
            Welcome to my site. I am a software developer,
            check out below my projects and contact info.
          </p>
        </article>
      </div>
      <div className="row info-section">
        <div className="about-section col-xl-100 col-lg-95">
          <h3 className="top-shadows about-title">
            <div className="red-point point" />
            <div className="yellow-point point" />
            <div className="green-point point" />
            <div className="title-style">About me</div>
          </h3>
          <div className="bottom-shadows about">
            <p>
              <strong>Languages:</strong>
              {' '}
              Ruby, JavaScript, C#, Typescript
            </p>
            <p>
              <strong>Other tools:</strong>
              {' '}
              Ruby On Rails, ASP.NET, Angular, SQL, GitHub, Linux
            </p>
            <p>
              <strong>Education:</strong>
              {' '}
              Systems engineer (UNAD, Colombia)
            </p>
            <p>
              <strong>English level:</strong>
              {' '}
              C1 (Cambridge University Press)
            </p>
          </div>
        </div>
        <div className=" col-xl-20 col-lg-25 resume-section">
          <div className="resume">
            <div className="">
              <h5 className="">Check out</h5>
              <h5 className="">My resume</h5>
            </div>
            <svg onClick={() => linkCV('https://drive.google.com/file/d/1gnfJDzWo0FrZdmcf-movLqhSnyRppEZw/view')} aria-hidden="true" focusable="false" data-prefix="far" data-icon="file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="resume-icon svg-inline--fa fa-file fa-w-12"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z" className="" /></svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
