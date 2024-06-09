import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // filter - название части состояния из store.js
  const titleFilter = useSelector(selectTitleFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          type="text"
          value={titleFilter}
          placeholder="Filter by title"
          onChange={handleTitleFilterChange}
        />
      </div>
    </div>
  );
};
export default Filter;
