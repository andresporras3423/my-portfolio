import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Project(props) {
  const { project, index } = props;
  const photo = 'photo';
  const row1 = 'row1';
  const info = 'info';
  const row2 = 'row2';
  const direction = ['g-column1', 'g-column2'];
  const giveUrl = () => {
    const style = { backgroundImage: `url('${project.url}')` };
    return style;
  };
  const linkCV = (url) => {
    window.open(url, '_blank');
  };
  return (
    <section className="project-properties shadow-style">
      <div className={[direction[index % 2], photo, row1].join(' ')} style={giveUrl()} />
      <div className={[direction[(index + 1) % 2], info, row2].join(' ')}>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <p className="grid-projects">
          {
                    project.tools.map((tool) => (
                      <span className="tools-style" key={nanoid()}>{tool}</span>
                    ))
                  }
        </p>
        <div>
          <button type="submit" className="btn btn-primary button-link-style" onClick={() => linkCV(project.github)}>GitHub</button>
          <button type="submit" className="btn btn-primary button-link-style" onClick={() => linkCV(project.live)}>Live</button>
        </div>
      </div>
    </section>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    github: PropTypes.string,
    live: PropTypes.string,
    url: PropTypes.string,
    tools: PropTypes.instanceOf(Array),
  }),
  index: PropTypes.number,
};

Project.defaultProps = {
  project: null,
  index: 0,
};

export default Project;
