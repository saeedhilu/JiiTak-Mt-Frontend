import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ color = "white" }) {
    const override = {
        borderWidth: "3px",
    };

    return (
        <div className="sweet-loading flex items-center justify-center min-h-screen">
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

export default Spinner;
