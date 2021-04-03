import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeToolFilter } from '../actions';

function Filter(props) {
  const {
    tools,
    toolFilter,
    handleToolFilter,
  } = props;

  const changeToolFilter = (event) => {
    handleToolFilter(event.target.value);
  };

  return (
    <div className="filter-container">
      <form className="select-filter">
        <div className="two-columns">
          <h4>Filter by tool:</h4>
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
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleToolFilter: (toolFilter) => {
    dispatch(changeToolFilter(toolFilter));
  },
});

const mapStateToProps = (state) => ({
  tools: state.projectData.tools,
  toolFilter: state.filterData.toolFilter,
});

Filter.propTypes = {
  tools: PropTypes.instanceOf(Array),
  toolFilter: PropTypes.string,
  handleToolFilter: PropTypes.func,
};

Filter.defaultProps = {
  tools: null,
  toolFilter: 'All',
  handleToolFilter: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
