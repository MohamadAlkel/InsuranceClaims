import React from 'react';
import { DashboardWrapper } from './MainPage.style';
import TableFilter from './TableFilter';
import DashboardTable from './DashboardTable';

export const Claims = () => {
  return (
    <DashboardWrapper>
      <TableFilter />
      <DashboardTable />
    </DashboardWrapper>
  );
};
