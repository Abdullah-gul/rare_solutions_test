const SearchBar = ({ searchQuery, onSearch, onSort }) => (
    <div className="flex justify-center items-center  px-4 py-4">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg">
        <input
          type="text"
          placeholder="Search by title or content"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          onChange={(e) => onSort(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="date">Sort by creation date</option>
        </select>
      </div>
    </div>
  );
  
  export default SearchBar;
  