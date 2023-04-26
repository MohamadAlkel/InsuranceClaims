import React, { useState, useEffect, FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { filterClaims } from '../redux/action';
import TextBox from '../../ui/textbox/TextBox';
import Dropdown from '../../ui/dropdown/Dropdown';
import { FilterWrapper } from './MainPage.style';
import { TableFilterProps } from '../helper/typeHelper';

const sortOptions = [
  'Sort by',
  'newly created',
  'latest created',
  'smallest claim amount',
  'largest claim amount',
  'smallest processing fee',
  'largest processing fee',
  'smallest total amount',
  'largest total amount',
];

const statusOptions = [
  'All',
  'Submitted',
  'Approved',
  'Processed',
  'Completed',
  'Rejected',
];

const TableFilter: FC<TableFilterProps> = ({
  filterClaims,
}: TableFilterProps): ReactElement<void> => {
  const [filterData, setFilterData] = useState({
    search: '',
    status: statusOptions[0],
    sort: sortOptions[0],
  });

  const onChangeFilter = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    filterClaims(filterData);
  }, [filterData]);

  return (
    <FilterWrapper>
      <TextBox
        name="search"
        value={filterData.search}
        placeholder="Search here!"
        onChange={onChangeFilter}
      />
      <Dropdown
        testId="status-select"
        options={statusOptions}
        name="status"
        value={filterData.status}
        onChange={onChangeFilter}
      />
      <Dropdown
        testId="sort-select"
        options={sortOptions}
        name="sort"
        value={filterData.sort}
        onChange={onChangeFilter}
      />
    </FilterWrapper>
  );
};

const mapDispatchToProps = {
  filterClaims,
};

export default connect<any, any, any>(null, mapDispatchToProps)(TableFilter);
