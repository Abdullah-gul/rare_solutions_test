import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';

const List = React.memo(({ items, loadMoreItems, hasMore, loading }) => (
  <div className="max-w-4xl mx-auto mt-8">
    <InfiniteScroll
      dataLength={items.length}
      next={loadMoreItems}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center items-center py-4">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid rounded-full border-t-transparent border-blue-600" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
      endMessage={<div className="text-center py-4 text-gray-500">No more items</div>}
    >
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.content}</p>
            <p className="text-xs text-gray-400 mt-1">{new Date(item.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  </div>
));

export default List;
