import { fetchApiDataInAction } from '../../root/common/helper/commonHelper';
import { FETCH_CLAIMS, SUBMIT_CLAIM, FILTER_CLAIMS } from './constants';
import ClaimService from '../../api/ClaimService';

export function fetchClaims() {
  return fetchApiDataInAction(FETCH_CLAIMS, ClaimService.getClaims());
}

export function submitClaim(body) {
  return fetchApiDataInAction(SUBMIT_CLAIM, ClaimService.submitClaim(body));
}

export function filterClaims(filter) {
  return {
    type: FILTER_CLAIMS,
    payload: filter,
  };
}
