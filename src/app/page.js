'use client'
import { useSort } from './hooks/useSort';
import data from './data/property.json'
import SearchBar from './components/SearchBar';
import List from './components/List';

const Home = () => {
  const { filteredSortedData, searchQuery, setSearchQuery, setSortOption,loading, hasMore, loadMoreItems } = useSort(data);

  return (
    <div className="container mx-auto p-4">
      <SearchBar 
        searchQuery={searchQuery} 
        onSearch={setSearchQuery} 
        onSort={setSortOption} 
      />
      
      <List 
        items={filteredSortedData} 
        loadMoreItems={loadMoreItems} 
        hasMore={hasMore} 
        loading={loading} 
      />
    </div>
  );
};

export default Home;
