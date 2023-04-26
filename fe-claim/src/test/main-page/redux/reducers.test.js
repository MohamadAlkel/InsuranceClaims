/**
 * @jest-environment jsdom
 */

import reducer from '../../../main-page/redux/reducer';
import {
  FETCH_CLAIMS,
  SUBMIT_CLAIM,
  FILTER_CLAIMS,
} from '../../../main-page/redux/constants';

const claimState = {
  claims: [
    {
      id: 1,
      number: 'CL-52026',
      incidentDate: '2022-05-25',
      createdAt: '2022-06-12',
      amount: '1641.00',
      holder: 'Loren Harber DVM',
      policyNumber: 'TL-25580',
      insuredItem: 'Small Cotton Fish',
      processingFee: '86.00',
      status: 'Submitted',
    },
    {
      id: 5,
      number: 'CL-78027',
      incidentDate: '2022-07-27',
      createdAt: '2022-08-06',
      amount: '1549.00',
      holder: 'Gordon Quitzon',
      policyNumber: 'TL-37437',
      insuredItem: 'Licensed Steel Hat',
      processingFee: '40.00',
      status: 'Completed',
    },
  ],
  filteredClaims: [
    {
      id: 1,
      number: 'CL-52026',
      incidentDate: '2022-05-25',
      createdAt: '2022-06-12',
      amount: '1641.00',
      holder: 'Loren Harber DVM',
      policyNumber: 'TL-25580',
      insuredItem: 'Small Cotton Fish',
      processingFee: '86.00',
      status: 'Submitted',
    },
    {
      id: 5,
      number: 'CL-78027',
      incidentDate: '2022-07-27',
      createdAt: '2022-08-06',
      amount: '1549.00',
      holder: 'Gordon Quitzon',
      policyNumber: 'TL-37437',
      insuredItem: 'Licensed Steel Hat',
      processingFee: '40.00',
      status: 'Completed',
    },
  ],
  isFetchingClaims: false,
  isSubmittingClaim: false,
};

describe('main-page reducer', () => {
  const initalState = {
    claims: [],
    filteredClaims: [],
    isFetchingClaims: false,
    isSubmittingClaim: false,
  };

  test('should return passed state by default', () => {
    const action = {
      type: '',
      payload: {},
    };
    expect(reducer(initalState, action)).toEqual(initalState);
  });

  test('should return initial state ', () => {
    const action = {
      type: '',
      payload: {},
    };
    expect(reducer(undefined, action)).toEqual({
      claims: [],
      filteredClaims: [],
      isFetchingClaims: false,
      isSubmittingClaim: false,
    });
  });

  test('should handle FILTER_CLAIMS for default value', () => {
    const action = {
      type: FILTER_CLAIMS,
      payload: {
        search: '',
        status: 'All',
        sort: '',
      },
    };
    expect(reducer(claimState, action)).toEqual({
      ...claimState,
    });
  });

  test('should handle FILTER_CLAIMS for filtering state', () => {
    const action = {
      type: FILTER_CLAIMS,
      payload: {
        search: '',
        status: 'Submitted',
        sort: '',
      },
    };
    expect(reducer(claimState, action)).toEqual({
      ...claimState,
      filteredClaims: [claimState.filteredClaims[0]],
    });
  });

  test('should handle FILTER_CLAIMS for sorting', () => {
    const action = {
      type: FILTER_CLAIMS,
      payload: {
        search: '',
        status: 'All',
        sort: 'smallest claim amount',
      },
    };
    expect(reducer(claimState, action)).toEqual({
      ...claimState,
      filteredClaims: [
        claimState.filteredClaims[1],
        claimState.filteredClaims[0],
      ],
    });
  });

  test('should handle FILTER_CLAIMS for search input', () => {
    const action = {
      type: FILTER_CLAIMS,
      payload: {
        search: 'Loren Harber DVM',
        status: 'All',
        sort: 'smallest claim amount',
      },
    };
    expect(reducer(claimState, action)).toEqual({
      ...claimState,
      filteredClaims: [claimState.filteredClaims[0]],
    });
  });

  test('should handle FETCH_CLAIMS_START', () => {
    const action = {
      type: `${FETCH_CLAIMS}_START`,
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingClaims: true,
    });
  });

  test('should handle FETCH_CLAIMS_SUCCESS', () => {
    const action = {
      type: `${FETCH_CLAIMS}_SUCCESS`,
      payload: [],
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingClaims: false,
    });
  });

  it('should handle FETCH_CLAIMS_ERROR', () => {
    const action = {
      type: `${FETCH_CLAIMS}_ERROR`,
      payload: [],
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingClaims: false,
    });
  });

  test('should handle SUBMIT_CLAIM_START', () => {
    const action = {
      type: `${SUBMIT_CLAIM}_START`,
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isSubmittingClaim: true,
    });
  });

  test('should handle SUBMIT_CLAIM_SUCCESS', () => {
    const action = {
      type: `${SUBMIT_CLAIM}_SUCCESS`,
      payload: {
        value: 'changed',
      },
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isSubmittingClaim: false,
    });
  });

  it('should handle SUBMIT_CLAIM_ERROR', () => {
    const action = {
      type: `${SUBMIT_CLAIM}_ERROR`,
      payload: {
        value: 'error',
      },
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isSubmittingClaim: false,
    });
  });
});
