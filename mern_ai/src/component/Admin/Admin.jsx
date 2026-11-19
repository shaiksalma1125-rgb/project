import React from 'react'
import styles from './Admin.module.css';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
const Admin = () => {
    return (
        <div className={styles.Admin}>
            <div className={styles.AdminBlock}>
                <Skeleton
                    variant="rectangular" sx={{ borderRadius: "20px" }} width={266} height={400} />

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>shaiksalma1125@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatibus voluptatum earum, reiciendis, iste quisquam adipisci natus omnis dignissimos nisi distinctio voluptas maiores tenetur, corporis suscipit culpa magni voluptatem ratione.</p>

                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>shaiksalma1125@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatibus voluptatum earum, reiciendis, iste quisquam adipisci natus omnis dignissimos nisi distinctio voluptas maiores tenetur, corporis suscipit culpa magni voluptatem ratione.</p>

                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>shaiksalma1125@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatibus voluptatum earum, reiciendis, iste quisquam adipisci natus omnis dignissimos nisi distinctio voluptas maiores tenetur, corporis suscipit culpa magni voluptatem ratione.</p>

                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>shaiksalma1125@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatibus voluptatum earum, reiciendis, iste quisquam adipisci natus omnis dignissimos nisi distinctio voluptas maiores tenetur, corporis suscipit culpa magni voluptatem ratione.</p>

                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>shaiksalma1125@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatibus voluptatum earum, reiciendis, iste quisquam adipisci natus omnis dignissimos nisi distinctio voluptas maiores tenetur, corporis suscipit culpa magni voluptatem ratione.</p>

                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>shaiksalma1125@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatibus voluptatum earum, reiciendis, iste quisquam adipisci natus omnis dignissimos nisi distinctio voluptas maiores tenetur, corporis suscipit culpa magni voluptatem ratione.</p>

                </div>


            </div>
        </div>
    )
}

export default WithAuthHOC(Admin);
