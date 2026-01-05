const FilterForm = ({ filterText, onFilterChange }) => (
  <input
    type="text"
    placeholder="Search by title..."
    value={filterText}
    onChange={(e) => onFilterChange(e.target.value)}
    style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
  />
);
export default FilterForm;