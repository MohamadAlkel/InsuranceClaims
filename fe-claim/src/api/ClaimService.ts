import axios from 'axios';

let endpointEnv = 'prod';
if (process.env.NODE_ENV === 'development') {
  endpointEnv = 'dev';
}

export default class ClaimService {
  static endpoint = {
    dev: 'http://localhost:8001/api/v1/claims',
    prod: 'NEED TO BE ADD it',
  };

  static getClaims = async () => {
    try {
      const url = this.endpoint[endpointEnv];
      const res = await axios.get(url);
      return res?.data;
    } catch (error) {
      // we can log error cloudwatch but for now we'll just log it here
      console.log('Error', error);
    }
  };

  static submitClaim = async (body: any) => {
    try {
      const url = this.endpoint[endpointEnv];
      const res = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res?.data;
    } catch (error) {
      // we can log error cloudwatch but for now we'll just log it here
      alert(error.response.data.error);
      console.error('Error', error);
    }
  };
}
