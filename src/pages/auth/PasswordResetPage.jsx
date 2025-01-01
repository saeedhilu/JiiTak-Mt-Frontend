
import useToast from "@/hooks/UseToast";
import FormComponent from "@/components/form/Form";
import { ResetSchema } from "@/components/form/validationSchema";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResetEmailLinkVerifyServices from "@/services/users/ResetEmailVerifyServices";

const PasswordResetPage = () => {

    const navigate = useNavigate();
    const { uid } = useParams();
    const showToast = useToast();
    const [error, setError] = useState('')
    const [loading, isLoading] = useState(false)


    const onSubmit = async (data) => {
        console.log('====================================');
        console.log('sssssss :', data);
        console.log('====================================');
        if (data.password != data.confirmPassword) {
            console.log('====================================');
            console.log('not match');
            console.log('====================================');
            showToast('password is not match', 'error')
        } else {
            try {
                isLoading(true)
                const response = await ResetEmailLinkVerifyServices(uid, data.password);
                showToast("パスワード再設定用URLを送信しました", "success");
                navigate('user/login')

            } catch (error) {
                console.log('Error from page is :', error);
                setError(error)
                showToast(error?.response?.data?.error, "error");
            } finally {
                isLoading(false)
            }
        }

    };
    const [showPassword, isShowPassword] = useState(false)

    return (
        <FormComponent
            loading={isLoading}
            title="パスワード再設定"
            // notes="現在使っているメールアドレスを入力してください。パスワード再設定用のURLをメールで送信いたします。"
            fields={[
                { name: "password", type: showPassword ? 'text' : "password", label: "新しいパスワード", placeholder: "", helperText: "半角大文字・小文字・数字を含めた8文字以上20文字以内" },
                { name: "confirmPassword", type: showPassword ? 'text' : "password", label: "新しいパスワード確認用", placeholder: "" },
            ]}
            schema={ResetSchema}
            onSubmit={onSubmit}
            submitText="設定"
            error={error}

        />
    )
}
export default PasswordResetPage;