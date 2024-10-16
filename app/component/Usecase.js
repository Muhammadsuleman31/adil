import styles from "./Usecase.module.css"


export default function Usecase(){
    return(
        <>
        <div className={styles.usecase}>
            <div className={styles.usecaseTitle}>
                <h2>Use Cases Of Our Business Plans</h2>
            </div>
            <div className={styles.usecaseGrid}>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📷</div>
                    <div>SBA Loans</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📄</div>
                    <div>Investor Memo</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>💰</div>
                    <div>Venture Capital Funding</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>⚙️</div>
                    <div>Internal Planning & Management</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📊</div>
                    <div>Angel Investor Funding</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>🔀</div>
                    <div>Mergers & Acquisition</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>🏢</div>
                    <div>Franchise Applications</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>🏦</div>
                    <div>Bank Loans</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>🙋</div>
                    <div>Crowd Funding Campaign</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📜</div>
                    <div>Grant Applications</div>
                </div>
            </div>
        </div>
        </>
    )
}