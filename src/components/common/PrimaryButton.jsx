import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const PrimaryButton = ({
    buttonLabel = "",
    btnClass = "",
    leftIcon = null,
    rightIcon = null,
    loading = false,
    disabled = false,
    navigateLink = "",
    onClick = () => { }
}) => {
    if (navigateLink) {
        return (
            <Link to={navigateLink}>
                <button
                    disabled={disabled || loading}
                    onClick={onClick}
                    className={`primary-button-gradient btn-inner-shadow btn-drop-shadow min-w-max font-extrabold text-black text-10 rounded-lg px-3 py-1 
                        flex gap-2 items-center justify-center ${loading || disabled ? 'opacity-80 cursor-not-allowed' : ''} ${btnClass}`}
                >
                    {loading ?
                        <CircularProgress size={20} color="" />
                        :
                        ""
                    }
                    {leftIcon ? leftIcon : ''}
                    {buttonLabel}
                    {rightIcon ? rightIcon : ''}
                </button>
            </Link>
        )
    } else {
        return (
            <button
                disabled={disabled || loading}
                onClick={onClick}
                className={`primary-button-gradient btn-inner-shadow btn-drop-shadow min-w-max font-extrabold text-black text-10 rounded-lg px-3 py-1 
                flex gap-2 items-center justify-center  ${loading || disabled ? 'opacity-80 cursor-not-allowed' : ''} ${btnClass}`}
            >
                {loading ?
                    <CircularProgress size={20} color="" />
                    :
                    ""
                }
                {leftIcon ? leftIcon : ''}
                {buttonLabel}
                {rightIcon ? rightIcon : ''}
            </button>
        )
    }
}

export default PrimaryButton;