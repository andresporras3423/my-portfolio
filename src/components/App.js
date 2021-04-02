import '../App.css';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footsection from './Footsection';
import Navigation from './Navigation';
import Presentation from './Presentation';
import Project from './Project';

function App(props) {
  const { projects } = props;
  const filterProjects = () => projects;
  return (
    <div id="app">
      <div className="app">
        <div>
          <Navigation />
          <main>
            <Presentation />
            {
      filterProjects().map((cProject, index) => (
        <Project project={cProject} index={index} key={nanoid()} />
      ))
  }
          </main>
          <Footsection />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  projects: state.projectData.projects,
});

App.propTypes = {
  projects: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    tools: PropTypes.instanceOf(Array).isRequired,
  }),
};

App.defaultProps = {
  projects: null,
};

export default connect(mapStateToProps)(App);
