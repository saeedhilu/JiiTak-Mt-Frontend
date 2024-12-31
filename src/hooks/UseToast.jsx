import { Toaster, toast } from 'sonner';
import PropTypes from 'prop-types';

const useToast = () => {
    const showToast = (message, variant = "success", duration = 2000) => {
        console.log('Message adn variant is :', message, variant);


        const toastOptions = {
            default: {
                title: "Notification",
                description: message,
                duration,
            },
            success: {
                title: "Success",
                description: message,
                duration,
                variant: "success",
            },
            error: {
                title: "Error",
                description: message,
                duration,
                variant: "error",
            },
            info: {
                title: "Information",
                description: message,
                duration,
                variant: "info",
            },
        };

        const options = toastOptions[variant] || toastOptions.default;
        const { title, description, ...restOptions } = options;

        toast[variant](`${title}: ${description}`);
    };

    showToast.propTypes = {
        message: PropTypes.string.isRequired,
        variant: PropTypes.oneOf(["default", "success", "error", "info"]),
        duration: PropTypes.number,
    };

    return showToast;
};

export default useToast;

export const ToastNotificationProvider = () => (
    <Toaster  richColors position="top-right" />
);