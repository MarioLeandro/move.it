import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/MarioLeandro.png" alt="Mario Leandro"/>
            <div>
                <strong>Mario Leandro</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}