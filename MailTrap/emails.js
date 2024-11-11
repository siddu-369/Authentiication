import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailTrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (e) {
    console.error("Email Sending Verificatiom", e);
    throw new Error("Error sending verification email", e);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipients = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipients,
      template_uuid: "fa61e88f-0e2b-46b8-86b2-2919dc71b73f",
      template_variables: {
        company_info_name: "MySoftware",
        name: name,
      },
    });
    console.log("Welcome sent successfully", response);
  } catch (error) {
    console.error("Email Sending Welcome Email", error);
    throw new Error(`Error sending welcome email, ${error}`);
  }
};

export const sendPasswordResetMail = async (email, resetToken) => {
  const recipients = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipients,
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetToken),
      subject: "Reset your password",
      category: "reset password",
    });
  } catch (error) {
    console.error("Error sending password reset email", error);
    throw new Error(`Error sending password reset email, ${error}`);
    s;
  }
};

export const sendResetSuccessfullEmail = async (email) => {
  const recipients = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "Password reset successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
  } catch (error) {
    console.error("Error sending password reset success email", error);
    throw new Error(`Error sending password reset success email, ${error}`);
  }
};
