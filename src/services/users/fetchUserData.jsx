import instance from '../../utils/AxiosInstance';

export const fetchUserData = async (page = 1, searchTerm = "") => {
  try {
    const response = await instance.get(`accounts/users/`, {
      params: {
        page, 
        search: searchTerm, // Include search term as a query parameter
      },
    });

    return response.data; // Return the data structure { results, count, next, previous }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data.");
  }
};
