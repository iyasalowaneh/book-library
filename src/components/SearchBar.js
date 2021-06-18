const SearchBar = (props) => {
  return (
    <div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          🔎
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search For a Book Name"
          aria-label="Search For a Book Name"
          aria-describedby="addon-wrapping"
          onChange={(event) => props.setQuery(event.target.value)}
        />
      </div>
    </div>
  );
};
export default SearchBar;
