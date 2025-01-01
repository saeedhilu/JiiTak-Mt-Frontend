import instance from "../../utils/AxiosInstance";


const ResetEmailLinkServices =async (email) =>{
    try {
        const response = await instance.post('accounts/password-reset/',email);
        console.log('====================================');
        console.log('Response is : for email is :', response.data);
        console.log('====================================');
        return response.data
    } catch (error) {
        console.log('Error is1313131311111111111111111111111111111 :',error);
        
        throw error
    }
    
}
export default ResetEmailLinkServices;