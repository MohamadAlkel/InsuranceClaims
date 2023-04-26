/**
 * @jest-environment jsdom
 */

import * as actions from '../../../main-page/redux/action';
import * as commonHelper from '../../../root/common/helper/commonHelper';
import {
  FETCH_CLAIMS,
  SUBMIT_CLAIM,
  FILTER_CLAIMS,
} from '../../../main-page/redux/constants';
import ClaimService from '../../../api/ClaimService';

describe('fetching all claims actions', () => {
  test('creates FETCH_CLAIMS action', () => {
    const sandbox = require('sinon').sandbox.create();
    const fetchApiDataInAction = sandbox.spy(
      commonHelper,
      'fetchApiDataInAction'
    );
    actions.fetchClaims();
    expect(
      fetchApiDataInAction.calledWith(FETCH_CLAIMS, ClaimService.getClaims())
    ).toBe(true);
    sandbox.restore();
  });

  test('creates SUBMIT_CLAIM action', () => {
    const sandbox = require('sinon').sandbox.create();
    const body = {};
    const fetchApiDataInAction = sandbox.spy(
      commonHelper,
      'fetchApiDataInAction'
    );
    actions.submitClaim(body);
    expect(
      fetchApiDataInAction.calledWith(
        SUBMIT_CLAIM,
        ClaimService.submitClaim(body)
      )
    ).toBe(true);
    sandbox.restore();
  });

  it('should create an action to filer the claim FILTER_CLAIMS', () => {
    const filter = {};
    const expectedAction = {
      type: FILTER_CLAIMS,
      payload: filter,
    };
    expect(actions.filterClaims(filter)).toEqual(expectedAction);
  });
});
