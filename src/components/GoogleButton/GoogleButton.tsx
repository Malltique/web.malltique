import styles from "./GoogleButton.module.scss";

type GoogleButtonProps = {
    onClick: any;
};

export const GoogleButton = ({ onClick }: GoogleButtonProps) => {
    return (
        <button className={styles.googleButton} onClick={onClick}>
            <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                className={styles.googleButton__icon}
            />
            <span className={styles.googleButton__text}>Sign in with Google</span>
        </button>
    );
};
