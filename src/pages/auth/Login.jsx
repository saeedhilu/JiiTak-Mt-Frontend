import { useDispatch } from "react-redux";
import { login } from "@/redux/slice/AuthSlice";
import LoginService from "@/services/users/LoginServices";
import useToast from "@/hooks/UseToast";
import { useNavigate } from "react-router-dom";
import FormComponent from "@/components/form/Form";
import { LoginSchema } from "@/components/form/validationSchema";
import { useState } from "react";



export default function LoginPage() {
  const showToast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('')
  const [loading, isLoading] = useState(false)
  console.log("State is :", error);

  const onSubmit = async (data) => {

    try {
      isLoading(true)
      const response = await LoginService(data);
      showToast("Login successful", "success");
      dispatch(login(response));
      navigate("/user/home");
    } catch (error) {
    console.log('====================================');
    console.log('1111111111111111111111111111111111',error);
    console.log('====================================');
      setError(error)
      showToast(error.response.data.email ? error.response.data.email[0] : error.response.data.password[0], "error");
    } finally {
      isLoading(false)
    }
  };

  return (
    <FormComponent
      loading={isLoading}
      title="ログイン"
      fields={[
        { name: "email", type: "email", label: "メールアドレス", placeholder: "" },
        { name: "password", type: "password", label: "パスワード", placeholder: "" },
      ]}
      schema={LoginSchema}
      onSubmit={onSubmit}
      submitText="ログイン"
      error={error}
      text="パスワードをお忘れの場合"
      link="/reset-password"
    />
  );
}
