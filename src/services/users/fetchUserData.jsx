import instance from '../utils/AxiosInstance';

export const fetchUserData = async () => {
  const response = await instance.get('../../..//userData.json'); 
  console.log('response dat ai s:',response.data);
  
  return response.data;
};
