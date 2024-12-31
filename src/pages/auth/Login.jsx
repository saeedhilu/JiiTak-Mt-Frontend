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
    const [error , setError ] = useState('')
    const [loading, isLoading ] = useState(false)
    console.log("State is :", error);
    
  const onSubmit = async (data) => {
    console.log('====================================');
    console.log('R :', data);
    console.log('====================================');
    try {
        isLoading(true)
      const response = await LoginService(data);
      showToast("Login successful", "success");
      dispatch(login(response));
      navigate("/user/home");
    } catch (error) {
        console.log('Error from page is :',error);
        setError(error)
      showToast(error,"error");
    }finally{
        isLoading(false)
    }
  };

  return (
    <FormComponent
    loading={isLoading}
      title="Login"
      fields={[
        { name: "email", type: "email", label: "Email", placeholder: "Enter your email" },
        { name: "password", type: "password", label: "Password", placeholder: "Enter your password" },
      ]}
      schema={LoginSchema}
      onSubmit={onSubmit}
      submitText="Login"
      error = {error}
      text="Forgot your password?"
      link="/reset-password"
    />
  );
}
