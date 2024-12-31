import { z } from "zod";

// For Password Reset  
// ---------------------

export const ResetSchema = z.object({
  password: z.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(20, "Password cannot exceed 20 characters.")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Password must include at least one lowercase letter, one uppercase letter, and one number."),
  
  confirmPassword: z.string()
    .min(8, "Confirm password must be at least 8 characters long.")
    .max(20, "Confirm password cannot exceed 20 characters.")
    
});



// For Logging 
// ---------------------

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address").nonempty("Email is required"), // Adds required validation
  password: z.string().min(8, "Password must be at least 8 characters long.").nonempty("Password is required"), // Adds required validation
});

// For email (password reseting time )
// ---------------------

export const PasswordResetEmailSchema = z.object({
  email: z.string().email("Invalid email address"),
});