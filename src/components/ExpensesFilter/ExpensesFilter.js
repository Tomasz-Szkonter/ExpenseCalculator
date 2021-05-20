import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const selectHandler = (event) => {
    const data = {
      year: event.target.value,
    }
    console.log('From child ' + data.year);
    props.onYearPicker(data);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.orginSelect} onChange={selectHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;