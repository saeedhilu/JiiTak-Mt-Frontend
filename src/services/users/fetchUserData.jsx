import instance from '../../utils/AxiosInstance';
import PropTypes from 'prop-types';

export const fetchUserData = async (page = 1, searchTerm = "") => {
  try {
    const response = await instance.get(`accounts/users/`, {
      params: {
        page,
        search: searchTerm, 
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data.");
  }
};
fetchUserData.propTypes = {
  page: PropTypes.number,
  searchTerm: PropTypes.string,
};
