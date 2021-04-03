import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNameFilter, changeNameTypeFilter, changeToolFilter } from '../actions';

function Filter(props) {
  const {
    tools,
    nameFilter,
    nameTypeFilter,
    toolFilter,
    handleNameFilter,
    handleNameTypeFilter,
    handleToolFilter,
  } = props;

  const changeToolFilter = (event) => {
    handleToolFilter(event.target.value);
  };

  const changeNameTypeFilter = (event) => {
    handleNameTypeFilter(event.target.value);
  };

  const changeNameFilter = (event) => {
    handleNameFilter(event.target.value);
  };

  const clearForm = (event) => {
    event.preventDefault();
    handleToolFilter('All');
    handleNameFilter('');
    handleNameTypeFilter('0');
  };
  return (
    <div className="filter-container">
      <form className="select-filter">
        <h3>Filters</h3>
        <div className="two-columns">
          <span>Tool:</span>
          <select
            className="form-control"
            value={toolFilter}
            onChange={changeToolFilter}
          >
            {
        [...tools].map((tool) => (
          <option value={tool} key={nanoid()}>{tool}</option>
        ))
      }
          </select>
        </div>
        <div className="two-columns">
          <select value={nameTypeFilter} className="form-control name-select" onChange={changeNameTypeFilter}>
            <option value="0">Title contains:</option>
            <option value="1">Title starts with:</option>
            <option value="2">Title ends with:</option>
            <option value="3">Title is exactly:</option>
          </select>
          <input type="text" placeholder="empty to ignore" className="form-control" onChange={changeNameFilter} value={nameFilter} />
        </div>
        <button type="submit" className="clear-form" onClick={clearForm}>Clear form</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleNameFilter: (nameFilter) => {
    dispatch(changeNameFilter(nameFilter));
  },
  handleNameTypeFilter: (nameTypeFilter) => {
    dispatch(changeNameTypeFilter(nameTypeFilter));
  },
  handleToolFilter: (toolFilter) => {
    dispatch(changeToolFilter(toolFilter));
  },
});

const mapStateToProps = (state) => ({
  tools: state.projectData.tools,
  nameFilter: state.filterData.nameFilter,
  nameTypeFilter: state.filterData.nameTypeFilter,
  toolFilter: state.filterData.toolFilter,
});

Filter.propTypes = {
  tools: PropTypes.instanceOf(Array),
  nameFilter: PropTypes.string,
  nameTypeFilter: PropTypes.string,
  toolFilter: PropTypes.string,
  handleNameFilter: PropTypes.func,
  handleNameTypeFilter: PropTypes.func,
  handleToolFilter: PropTypes.func,
};

Filter.defaultProps = {
  tools: null,
  nameFilter: '',
  nameTypeFilter: '0',
  toolFilter: 'All',
  handleNameFilter: null,
  handleNameTypeFilter: null,
  handleToolFilter: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
