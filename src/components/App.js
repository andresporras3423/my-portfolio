import '../App.css';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footsection from './Footsection';
import Navigation from './Navigation';
import Presentation from './Presentation';
import Project from './Project';
import Filter from './Filter';

function App(props) {
  const {
    projects, toolFilter,
  } = props;
  const filterProjects = () => projects.filter(
    (nProject) => (toolFilter === 'All' || nProject.tools.includes(toolFilter)),
  );
  return (
    <div id="app">
      <div className="app">
        <div>
          <Navigation />
          <main>
            <Presentation />
            <Filter />
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
  toolFilter: state.filterData.toolFilter,
});

App.propTypes = {
  projects: PropTypes.shape([{
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    tools: PropTypes.instanceOf(Array).isRequired,
  }]),
  toolFilter: PropTypes.string,
};

App.defaultProps = {
  projects: null,
  toolFilter: 'All',
};

export default connect(mapStateToProps)(App);
