import axios from 'axios';

export const fetchUserData = async () => {
  const response = await axios.get('../../..//userData.json'); 
  return response.data;
};
