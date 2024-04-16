import { useState } from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({ toDo, onItemFilter, onItemsDelete }) => {

  const [selectedFilter, setSelectedFilter] = useState('All');

  const onFilter = (e) => {
    onItemFilter(e.target.innerText);
    setSelectedFilter(e.target.innerText);
  }

  return (
    <div className="filters-panel">
      <p>{toDo} items left</p>
      <div className="filters-buttons">
        <button
          className={selectedFilter === 'All' ? 'selected' : ''}
          onClick={onFilter}>All</button>
        <button
          className={selectedFilter === 'Active' ? 'selected' : ''}
          onClick={onFilter}>Active</button>
        <button
          className={selectedFilter === 'Completed' ? 'selected' : ''}
          onClick={onFilter}>Completed</button>
      </div>
      <div>
        <button onClick={onItemsDelete}>Clear Completed</button>
      </div>
    </div>
  );
}



export default ItemStatusFilter;
