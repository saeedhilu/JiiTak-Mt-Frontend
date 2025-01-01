
import useToast from "@/hooks/UseToast";
import FormComponent from "@/components/form/Form";
import { PasswordResetEmailSchema } from "@/components/form/validationSchema";
import { useState } from "react";
import ResetEmailLinkServices from "@/services/users/PasswordResetEmail";


const PasswordReset = () => {
    const showToast = useToast();
    const [error, setError] = useState('')
    const [loading, isLoading] = useState(false)


    const onSubmit = async (data) => {
    
        try {
            isLoading(true)
            const response = await ResetEmailLinkServices(data);
            console.log('====================================');
            console.log('Response darta for fething is :', response);
            console.log('====================================');
            showToast("パスワード再設定用URLを送信しました", "success");


        } catch (error) {
            console.log('Error from page is :', error);
            setError(error)
            showToast(error?.response?.data?.error || 'Invalid Email ', "error");
        } finally {
            isLoading(false)
        }
    };

    return (
        <FormComponent
            loading={isLoading}
            title="パスワード再設定"
            notes="現在使っているメールアドレスを入力してください。パスワード再設定用のURLをメールで送信いたします。"
            fields={[
                { name: "email", type: "email", label: "メールアドレス", placeholder: "メールアドレスを入力してください" },
            ]}
            schema={PasswordResetEmailSchema}
            onSubmit={onSubmit}
            submitText="パスワード再設定用URLを送信する"
            error={error}
            text="ログイン画面にもどる"
            link="/login"
        />
    )
}
export default PasswordReset;