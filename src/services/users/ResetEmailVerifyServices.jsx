import instance from "../utils/AxiosInstance";


const ResetEmailLinkVerifyServices = async (uid, password) => {
    console.log('====================================');
    console.log('Uid is :', uid);
    console.log('====================================');
    try {
        const response = await instance.post(`accounts/reset/${uid}/`, {
            password: password,
        });
        console.log('====================================');
        console.log('Response is : for email verify  is :', response.data);
        console.log('====================================');
        return response.data
    } catch (error) {
        console.log('Error is1313131311111111111111111111111111111  verify :', error);

        throw error
    }

}
export default ResetEmailLinkVerifyServices;