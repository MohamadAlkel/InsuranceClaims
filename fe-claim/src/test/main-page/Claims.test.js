/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import MainPage from '../../main-page/components/MainPage';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<MainPage />', () => {
  const props = {
    showHome: true,
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

  test('renders a table with correct header text', () => {
    const table = screen.getByTestId('dashboard-table');
    expect(table).toBeTruthy();

    expect(screen.getByText('Claim id')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Claim amount')).toBeInTheDocument();
    expect(screen.getByText('Holder name')).toBeInTheDocument();
    expect(screen.getByText('Policy number')).toBeInTheDocument();
    expect(screen.getByText('Insured item')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Incident date')).toBeInTheDocument();
    expect(screen.getByText('Processing fee')).toBeInTheDocument();
    expect(screen.getByText('Total amount')).toBeInTheDocument();
    expect(screen.getByText('Created at')).toBeInTheDocument();
  });

  test('renders a table with correct row data', () => {
    const claimIdCell = screen.getByRole('cell', { name: '1' });
    expect(claimIdCell).toBeInTheDocument();
    expect(screen.getByText('Submittted')).toBeInTheDocument();
    expect(screen.getByText('1641.00')).toBeInTheDocument();
    expect(screen.getByText('Loren Harber DVM')).toBeInTheDocument();
    expect(screen.getByText('TL-25580')).toBeInTheDocument();
    expect(screen.getByText('Small Cotton Fish')).toBeInTheDocument();
    expect(screen.getByText(/Optio voluptatem/)).toBeInTheDocument();
    expect(screen.getByText('2022-05-25')).toBeInTheDocument();
    expect(screen.getByText('86.00')).toBeInTheDocument();
    expect(screen.getByText('1727')).toBeInTheDocument();
    expect(screen.getByText('2022-06-12')).toBeInTheDocument();
  });

  test('renders a table with friendly error message', () => {
    component(props, {
      claimState: { filteredClaims: [], isFetchingClaims: false },
    });
    expect(
      screen.getByText('Opss! Sorry, no results found.')
    ).toBeInTheDocument();
  });

  test('allows user to search for a claim', async () => {
    const searchInput = screen.getByPlaceholderText('Search here!');
    fireEvent.change(searchInput, { target: { value: 'claim123' } });
    expect(searchInput.value).toBe('claim123');
  });

  test('updates select value for sort status when option is selected', () => {
    const selectElement = screen.getByTestId('status-select');
    fireEvent.change(selectElement, { target: { value: 'Rejected' } });
    expect(selectElement.value).toBe('Rejected');
    fireEvent.change(selectElement, { target: { value: 'Completed' } });
    expect(selectElement.value).toBe('Completed');
  });

  test('updates select value for sort dropdown when option is selected', () => {
    const selectElement = screen.getByTestId('sort-select');
    fireEvent.change(selectElement, {
      target: { value: 'smallest claim amount' },
    });
    expect(selectElement.value).toBe('smallest claim amount');
    fireEvent.change(selectElement, {
      target: { value: 'smallest processing fee' },
    });
    expect(selectElement.value).toBe('smallest processing fee');
  });
});
