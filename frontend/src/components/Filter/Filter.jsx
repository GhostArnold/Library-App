import { useDispatch } from 'react-redux';
import { setTitleFilter } from '../../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          type="text"
          placeholder="Filter by title"
          onChange={handleTitleFilterChange}
        />
      </div>
    </div>
  );
};
export default Filter;
