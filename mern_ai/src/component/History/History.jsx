import React from 'react'
import styles from './History.module.css';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';

const History = () => {
    return (
        <div className={styles.History}>
            <div className={styles.HistoryCardBlock}>
                <Skeleton
                    variant="rectangular" sx={{ borderRadius: "20px" }} width={266} height={200} />


                <div className={styles.HistoryCard}>
                    <div className={styles.cardPercentage}>80%</div>
                    <h2 className={styles.HistoryCardTitle}>
                        Frontend Developer
                    </h2>

                    <p>Resume Name : Resume.pdf</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia unde omnis atque, eaque pariatur vitae illo quam voluptatum placeat delectus ullam vel ducimus voluptatem accusantium. Voluptatibus itaque beatae quod.</p>
                    <p>Dated : 2025-11-18</p>

                </div>
                <div className={styles.HistoryCard}>
                    <div className={styles.cardPercentage}>80%</div>
                    <h2 className={styles.HistoryCardTitle}>
                        Frontend Developer
                    </h2>

                    <p>Resume Name : Resume.pdf</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia unde omnis atque, eaque pariatur vitae illo quam voluptatum placeat delectus ullam vel ducimus voluptatem accusantium. Voluptatibus itaque beatae quod.</p>
                    <p>Dated : 2025-11-18</p>

                </div>
                <div className={styles.HistoryCard}>
                    <div className={styles.cardPercentage}>80%</div>
                    <h2 className={styles.HistoryCardTitle}>
                        Frontend Developer
                    </h2>

                    <p>Resume Name : Resume.pdf</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia unde omnis atque, eaque pariatur vitae illo quam voluptatum placeat delectus ullam vel ducimus voluptatem accusantium. Voluptatibus itaque beatae quod.</p>
                    <p>Dated : 2025-11-18</p>

                </div>
                <div className={styles.HistoryCard}>
                    <div className={styles.cardPercentage}>80%</div>
                    <h2 className={styles.HistoryCardTitle}>
                        Frontend Developer
                    </h2>

                    <p>Resume Name : Resume.pdf</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia unde omnis atque, eaque pariatur vitae illo quam voluptatum placeat delectus ullam vel ducimus voluptatem accusantium. Voluptatibus itaque beatae quod.</p>
                    <p>Dated : 2025-11-18</p>

                </div>

                <div className={styles.HistoryCard}>
                    <div className={styles.cardPercentage}>80%</div>
                    <h2 className={styles.HistoryCardTitle}>
                        Frontend Developer
                    </h2>

                    <p>Resume Name : Resume.pdf</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia unde omnis atque, eaque pariatur vitae illo quam voluptatum placeat delectus ullam vel ducimus voluptatem accusantium. Voluptatibus itaque beatae quod.</p>
                    <p>Dated : 2025-11-18</p>

                </div>
                <div className={styles.HistoryCard}>
                    <div className={styles.cardPercentage}>80%</div>
                    <h2 className={styles.HistoryCardTitle}>
                        Frontend Developer
                    </h2>

                    <p>Resume Name : Resume.pdf</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia unde omnis atque, eaque pariatur vitae illo quam voluptatum placeat delectus ullam vel ducimus voluptatem accusantium. Voluptatibus itaque beatae quod.</p>
                    <p>Dated : 2025-11-18</p>

                </div>











            </div>
        </div >



    )
}

export default WithAuthHOC(History)
