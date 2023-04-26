import React, { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { RowsSkeleton, TableWrapper } from './MainPage.style';
import { fetchClaims } from '../redux/action';
import ReadMore from '../../ui/read-more/ReadMore';
import { DashboardTableProps } from '../helper/typeHelper';
import { getTotalAmount } from '../helper/utils';

const tableHeaderElement = [
  'Claim id',
  'Status',
  'Claim amount',
  'Holder name',
  'Policy number',
  'Insured item',
  'Description',
  'Incident date',
  'Processing fee',
  'Total amount',
  'Created at',
];

const DashboardTable: FC<DashboardTableProps> = ({
  fetchClaims,
  isFetchingClaims,
  claims,
}: DashboardTableProps): ReactElement<void> => {
  useEffect(() => {
    fetchClaims();
  }, []);

  return (
    <TableWrapper>
      <table data-testid="dashboard-table">
        <thead>
          <tr>
            {tableHeaderElement.map((headerItem, i) => (
              <th className={headerItem} key={i}>
                {headerItem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isFetchingClaims && <RowsSkeleton />}
          {!isFetchingClaims && isFetchingClaims != null && !claims?.length && (
            <tr>
              <td colSpan={5}>Opss! Sorry, no results found.</td>
            </tr>
          )}
          {claims?.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.status}</td>
              <td>{item.amount}</td>
              <td>{item.holder}</td>
              <td>{item.policyNumber}</td>
              <td>{item.insuredItem}</td>
              <td>
                <ReadMore length={50} text={item.description} />
              </td>
              <td>{item.incidentDate}</td>
              <td>{item.processingFee}</td>
              <td>{getTotalAmount(item)}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

const mapStateToProps = (state) => ({
  claims: state.claimState.filteredClaims,
  isFetchingClaims: state.claimState.isFetchingClaims,
});

const mapDispatchToProps = {
  fetchClaims,
};

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(DashboardTable);
