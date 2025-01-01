import { z } from "zod";

// For Password Reset  
// ---------------------

export const ResetSchema = z.object({
  password: z.string()
    .min(8, "パスワードは 8 文字以上にすることはできません。")
    .max(20, "パスワードの確認は20文字を超えてはなりません.")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "パスワードには、少なくとも 1 つの小文字、1 つの大文字、および 1 つの数字を含める必要があります。"),
  
  confirmPassword: z.string()
    .min(8, "パスワードの確認は 8 文字以上にする必要があります。")
    .max(20, "パスワードの確認は20文字を超えてはなりません.")
    
});



// For Logging 
// ---------------------

export const LoginSchema = z.object({
  email: z.string().email("無効なメールアドレス").nonempty("Email is required"), // Adds required validation
  password: z.string().nonempty("パスワードが必要です"), // Adds required validation
});

// For email (password reseting time )
// ---------------------

export const PasswordResetEmailSchema = z.object({
  email: z.string().email("無効なメールアドレス"),
});