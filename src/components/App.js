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
    projects, nameFilter, nameTypeFilter, toolFilter,
  } = props;
  const filterProjects = () => projects.filter(
    (nProject) => (toolFilter === 'All' || nProject.tools.includes(toolFilter))
    && (nameFilter === ''
    || (
      (nameTypeFilter === '0' && (new RegExp(`${nameFilter}`)).test(nProject.name))
      || (nameTypeFilter === '1' && (new RegExp(`^(${nameFilter})`)).test(nProject.name))
      || (nameTypeFilter === '2' && (new RegExp(`(${nameFilter})$`)).test(nProject.name))
      || (nameTypeFilter === '3' && (new RegExp(`^(${nameFilter}){1}$`)).test(nProject.name))
    )
    ),
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
  nameFilter: state.filterData.nameFilter,
  nameTypeFilter: state.filterData.nameTypeFilter,
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
  nameFilter: PropTypes.string,
  nameTypeFilter: PropTypes.string,
  toolFilter: PropTypes.string,
};

App.defaultProps = {
  projects: null,
  nameFilter: '',
  nameTypeFilter: '0',
  toolFilter: 'All',
};

export default connect(mapStateToProps)(App);
