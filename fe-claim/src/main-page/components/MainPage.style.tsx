import styled from 'styled-components';
import { media } from '../../root/common/styles/styleUtil';
import React from 'react';
import { Skeleton } from '../../root/common/styles/Loader.style';

export const DashboardWrapper = styled.div`
  max-width: 1288px;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TableWrapper = styled.div`
  margin: auto;
  margin-bottom: 100px;
  border-radius: 5px;
  box-shadow: 0px 0.1px 0.3px rgba(0, 0, 0, 0.1),
    -1px 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow-x: auto;
  ${media.md`
    max-width: 820px;
  `}
  ${media.sm`
    max-width: 675px;
  `}
  table {
    width: 1288px;
    background: var(--white);
    border-collapse: collapse;
    ${media.md`
      width: 820px;
    `}
    ${media.sm`
      width: 675px;
    `}
    thead {
      background-color: #555b6e;
      height: 68px;
      color: var(--white);

      th {
        font-weight: 400;
        white-space: nowrap;
        padding: 0px 8px;
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #eaebee;
        height: 76px;
        text-align: center;
        font-size: 14px;
        color: #555b6e;
        td::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 200px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  ${media.sm`
    margin-left: 10px;
  `}
`;

const RowSkeleton = () => (
  <tr>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
    <td>
      <Skeleton height="18px" width="50%" />
    </td>
  </tr>
);

export const RowsSkeleton = () => (
  <>
    <RowSkeleton />
    <RowSkeleton />
    <RowSkeleton />
    <RowSkeleton />
  </>
);
