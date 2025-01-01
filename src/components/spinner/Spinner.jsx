import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from 'prop-types';
function Spinner({ color = "white" }) {
    const override = {
        borderWidth: "3px",
    };

    return (
        <div className="sweet-loading flex items-center justify-center ">
            <ClipLoader
                speedMultiplier={0.7}
                color={color}
                size={20}
                cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
    
}
Spinner.propTypes = {
    color: PropTypes.string,
};
export default Spinner;
