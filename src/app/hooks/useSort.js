'use client';
import { useMemo, useState, useCallback } from 'react';
import { useDebounce } from './useDebounce'; 

export const useSort = (initialData) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('alphabetical');
  const [items, setItems] = useState(initialData.slice(0, 10)); 
  const [loadedItemsCount, setLoadedItemsCount] = useState(10); 
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true);
  const debouncedSearchQuery = useDebounce(searchQuery, 500); 

  const filteredSortedData = useMemo(() => {
    let filteredData = items;

    
    if (debouncedSearchQuery) {
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }

    // Sorting
    const sortedData = [...filteredData];

    if (sortOption === 'alphabetical') {
      sortedData.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    } else if (sortOption === 'date') {
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return sortedData;
  }, [items, debouncedSearchQuery, sortOption]);

  const loadMoreItems = useCallback(() => {

    if (loading || loadedItemsCount >= initialData.length) {
      setHasMore(false);  
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const nextItems = initialData.slice(loadedItemsCount, loadedItemsCount + 10); 
      
     
      const uniqueNewItems = nextItems.filter(newItem =>
        !items.some(existingItem => existingItem.id === newItem.id)
      );
      
      setItems(prevItems => [...prevItems, ...uniqueNewItems]);
      setLoadedItemsCount(prevCount => prevCount + uniqueNewItems.length); 
      setLoading(false);
    }, 1000); 
  }, [items, initialData, loadedItemsCount, loading]);

  return { filteredSortedData, searchQuery, setSearchQuery, setSortOption, loading, hasMore, loadMoreItems };
};
