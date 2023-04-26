export type MainPageProps = {
  showHome: boolean;
  submitClaim: boolean;
};

type filterData = {
  search: string;
  status: string;
  sort: string;
};

export type TableFilterProps = {
  filterClaims: (data: filterData) => Promise<void>;
};

export type DashboardTableProps = {
  fetchClaims: () => Promise<void>;
  isFetchingClaims: boolean;
  claims: ClaimsModule[];
};

type SubmitClaimBody = {
  amount: string;
  holder: string;
  policyNumber: string;
  insuredName: string;
  description: string;
  processingFee: string;
  incidentDate: string;
};

export type SubmitClaimProps = {
  isSubmittingClaim: boolean;
  submitClaim: (body: SubmitClaimBody) => Promise<void>;
};

export type InitialStateModule = {
  claims: ClaimsModule[];
  filteredClaims: ClaimsModule[];
  isFetchingClaims: boolean;
  isSubmittingClaim: boolean;
};

export type ClaimsModule = {
  id: number;
  number: string;
  incidentDate: string;
  createdAt: string;
  amount: string;
  holder: string;
  policyNumber: string;
  insuredItem: string;
  description: string;
  processingFee: string;
  status: string;
};
