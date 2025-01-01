import nodemailer from "nodemailer";

const sendResetPasswordEmail = async (email, resetLink) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: "your-email@example.com",  // Your email address
        pass: "your-email-password",      // Your email password or API key
      },
    });

    let mailOptions = {
      from: "no-reply@example.com",  // Sender address
      to: email,                    // Receiver email
      subject: "Password Reset Request",
      text: `Click on this link to reset your password: ${resetLink}`,  // Reset link
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Password reset email sent successfully.");
  } catch (error) {
    throw new Error("Failed to send reset password email: " + error.message);
  }
};

export default sendResetPasswordEmail;
