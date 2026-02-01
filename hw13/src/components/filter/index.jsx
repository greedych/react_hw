import { connect } from "react-redux";
import { setFilter } from "../../redux/actions";

function Filter({ filter, setFilter }) {
  return (
    <input
      placeholder="Filter"
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(Filter);
