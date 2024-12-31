import instance from "../utils/AxiosInstance";

const LoginService = async (loginData) => {

    const response = await instance.post("accounts/login/", loginData);
    return response.data;
};

export default LoginService;