import { FETCH_CLAIMS, SUBMIT_CLAIM, FILTER_CLAIMS } from './constants';
import { InitialStateModule } from '../helper/typeHelper';
import { getTotalAmount } from '../helper/utils';

const filteringClaims = (filter, claims) => {
  // filter status
  const filterStatus = (item) =>
    filter.status === 'All' || filter.status.includes(item.status.toString());

  // filter search
  const searchInput = filter.search.toLowerCase().replace(/\s/g, '');
  const filterSearch = (item) =>
    item.holder.toLowerCase().replace(/\s/g, '').includes(searchInput) ||
    item.policyNumber.toLowerCase().replace(/\s/g, '').includes(searchInput) ||
    item.id.toString().toLowerCase().replace(/\s/g, '').includes(searchInput);

  const filterClaims = claims?.filter(
    (item) => filterSearch(item) && filterStatus(item)
  );

  const sortedClaims = filterClaims?.sort((a, b) => {
    switch (filter?.sort) {
      case 'newly created':
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'latest created':
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case 'smallest claim amount':
        return a.amount - b.amount;
      case 'largest claim amount':
        return b.amount - a.amount;
      case 'smallest processing fee':
        return a.processingFee - b.processingFee;
      case 'largest processing fee':
        return a.processingFee - b.processingFee;
      case 'smallest total amount':
        return getTotalAmount(a) - getTotalAmount(b);
      case 'largest total amount':
        return getTotalAmount(b) - getTotalAmount(a);
      default:
        return;
    }
  });
  return sortedClaims;
};

export const initialState: InitialStateModule = {
  claims: [],
  filteredClaims: [],
  isFetchingClaims: false,
  isSubmittingClaim: false,
};

export default function claimStateReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FILTER_CLAIMS:
      return {
        ...state,
        filteredClaims: filteringClaims(payload, state.claims),
      };
    case `${FETCH_CLAIMS}_START`:
      return {
        ...state,
        isFetchingClaims: true,
      };
    case `${FETCH_CLAIMS}_SUCCESS`:
      return {
        ...state,
        claims: payload,
        filteredClaims: payload,
        isFetchingClaims: false,
      };
    case `${FETCH_CLAIMS}_ERROR`:
      return {
        ...state,
        isFetchingClaims: false,
      };
    case `${SUBMIT_CLAIM}_START`:
      return {
        ...state,
        isSubmittingClaim: true,
      };
    case `${SUBMIT_CLAIM}_SUCCESS`:
      return {
        ...state,
        isSubmittingClaim: false,
      };
    case `${SUBMIT_CLAIM}_ERROR`:
      return {
        ...state,
        isSubmittingClaim: false,
      };
  }
  return state;
}
