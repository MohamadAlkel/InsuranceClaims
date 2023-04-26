import { connect } from 'react-redux';
import React, { useState, ReactElement, FC } from 'react';
import { DashboardWrapper, ErrorMessage } from './MainPage.style';
import PickerDate from '../../ui/date-picker/PickerDate';
import TextBox from '../../ui/textbox/TextBox';
import Button from '../../ui/button/Button';
import TextArea from '../../ui/text-area/TextArea';
import moment from 'moment';
import { submitClaim } from '../redux/action';
import Popup from '../../ui/popup/Popup';
import { SubmitClaimProps } from '../helper/typeHelper';

const SubmitClaim: FC<SubmitClaimProps> = ({
  isSubmittingClaim,
  submitClaim,
}: SubmitClaimProps): ReactElement<void> => {
  const [errorMessages, setErrorMessages] = useState('');
  const [showPopup, setShowPopup] = React.useState(false);
  const [form, setForm] = useState({
    claimAmount: '',
    processingFee: '',
    policyNumber: '',
    holderName: '',
    insuredItem: '',
    description: '',
    incidentDate: new Date(),
  });

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const onChangeForm = (e) => {
    if (moment(e, 'YYYY-MM-DD', true).isValid()) {
      setForm({
        ...form,
        incidentDate: e,
      });
      return;
    }
    const { value } = e.target;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmittingClaim) return;

    const {
      claimAmount,
      processingFee,
      incidentDate,
      policyNumber,
      holderName,
      insuredItem,
      description,
    } = form;

    const processingFeeNumber = parseFloat(processingFee);
    const claimAmountNumber = parseFloat(claimAmount);
    // validation the submission
    if (
      claimAmountNumber < 1 ||
      processingFeeNumber < 1 ||
      isNaN(processingFeeNumber) ||
      isNaN(claimAmountNumber)
    ) {
      setErrorMessages('Processing Fee & Claim Amount should be more than 1');
      return;
    }

    const sixMonthsAgo = moment().subtract(6, 'months');
    // choose today rather than tomorrow as the api doesn't work for future date
    const today = moment();
    const isValid = moment(incidentDate).isBetween(sixMonthsAgo, today);

    if (!isValid) {
      setErrorMessages(
        'Date must be more than 6 months and less than tomorrow'
      );
      return;
    }

    if (
      policyNumber.length < 4 ||
      holderName.length < 4 ||
      insuredItem.length < 4 ||
      description.length < 4
    ) {
      setErrorMessages(
        'Please enter valid text for all the input which at least 4 character'
      );
      return;
    }

    // handling the submission
    setErrorMessages('');

    const body = {
      amount: claimAmountNumber.toFixed(2),
      holder: holderName,
      policyNumber: policyNumber,
      insuredName: insuredItem,
      description: description,
      processingFee: processingFeeNumber.toFixed(2),
      incidentDate: moment(incidentDate).format('YYYY-MM-DD'),
    };

    submitClaim(body)
      .then(() => {
        setShowPopup(true);
      })
      .catch((error) => {
        error && setErrorMessages('something went wrong!');
      });
  };

  return (
    <DashboardWrapper>
      <Popup
        text="Thanks! Submitted"
        showPopup={showPopup}
        handleClosePopup={handleClosePopup}
      />
      <form onSubmit={handleSubmit}>
        <TextBox
          id="policyNumber"
          name="policyNumber"
          label="Policy Number:"
          value={form.policyNumber}
          onChange={onChangeForm}
        />
        <TextBox
          id="holderName"
          name="holderName"
          label="Holder Name:"
          value={form.holderName}
          onChange={onChangeForm}
        />
        <TextBox
          id="insuredItem"
          name="insuredItem"
          label="Insured Item:"
          value={form.insuredItem}
          onChange={onChangeForm}
        />
        <TextBox
          id="claimAmount"
          type="number"
          name="claimAmount"
          label="Claim Amount:"
          value={form.claimAmount}
          onChange={onChangeForm}
        />
        <TextBox
          id="processingFee"
          type="number"
          name="processingFee"
          label="Processing Fee:"
          value={form.processingFee}
          onChange={onChangeForm}
        />
        <PickerDate
          id="incidentDate"
          label="Incident date:"
          selected={form.incidentDate}
          onChange={onChangeForm}
        />
        <TextArea
          id="description"
          name="description"
          label="Description:"
          value={form.description}
          onChange={onChangeForm}
        />
        {errorMessages && <ErrorMessage>{errorMessages}</ErrorMessage>}
        <Button type="submit" text="Submit" />
      </form>
    </DashboardWrapper>
  );
};

const mapStateToProps = (state) => ({
  isSubmittingClaim: state.claimState.isSubmittingClaim,
});

const mapDispatchToProps = {
  submitClaim,
};

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(SubmitClaim);
