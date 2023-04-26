/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import MainPage from '../../main-page/components/MainPage';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<MainPage />', () => {
  const props = {
    submitClaim: true,
  };

  const mockStoreBase = {
    claimState: {
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
          description:
            'Optio voluptatem in voluptas minus consequatur doloribus nemo voluptas vero est ipsam aut dolores nesciunt.',
          processingFee: '86.00',
          status: 'Submittted',
        },
      ],
    },
  };

  const component = (props, mockStore) => {
    const store = createMockStore(mockStore ? mockStore : mockStoreBase);
    return render(
      <Provider store={store}>
        <Router>
          <MainPage {...props} />
        </Router>
      </Provider>
    );
  };

  beforeEach(() => {
    component(props);
  });

  it('renders the form fields with the correct labels', () => {
    expect(screen.getByLabelText('Policy Number:')).toBeInTheDocument();
    expect(screen.getByLabelText('Holder Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Insured Item:')).toBeInTheDocument();
    expect(screen.getByLabelText('Claim Amount:')).toBeInTheDocument();
    expect(screen.getByLabelText('Processing Fee:')).toBeInTheDocument();
    expect(screen.getByLabelText('Incident date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Description:')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('allows the user to input data in the form fields', () => {
    const policyNumberInput = screen.getByLabelText('Policy Number:');
    fireEvent.change(policyNumberInput, { target: { value: '123456' } });
    expect(policyNumberInput.value).toBe('123456');

    const holderNameInput = screen.getByLabelText('Holder Name:');
    fireEvent.change(holderNameInput, { target: { value: 'John Chan' } });
    expect(holderNameInput.value).toBe('John Chan');

    const insuredItemInput = screen.getByLabelText('Insured Item:');
    fireEvent.change(insuredItemInput, { target: { value: 'Car' } });
    expect(insuredItemInput.value).toBe('Car');

    const claimAmountInput = screen.getByLabelText('Claim Amount:');
    fireEvent.change(claimAmountInput, { target: { value: '5000' } });
    expect(claimAmountInput.value).toBe('5000');

    const processingFeeInput = screen.getByLabelText('Processing Fee:');
    fireEvent.change(processingFeeInput, { target: { value: '50' } });
    expect(processingFeeInput.value).toBe('50');

    const incidentDateInput = screen.getByLabelText('Incident date:');
    fireEvent.change(incidentDateInput, { target: { value: '04/26/2023' } });
    expect(incidentDateInput.value).toBe('04/26/2023');

    const descriptionInput = screen.getByLabelText('Description:');
    fireEvent.change(descriptionInput, { target: { value: 'test text...' } });
    expect(descriptionInput.value).toBe('test text...');
  });
});
