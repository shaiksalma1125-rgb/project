
import React from 'react';
import styles from './SideBar.module.css';
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div className={styles.SideBar}>
            <div className={styles.SidebarIcon}>
                <ArticleIcon sx={{ fontSize: 54, marginBottom: 2 }} />
                <div className={styles.SideBarTopContent}>Resume Screening</div>
            </div>

            <div className={styles.SideBarOptionBlock}>
                <Link
                    to="/dashboard"
                    className={[
                        styles.SideBarOption,
                        location.pathname === '/dashboard'
                            ? styles.selectedOption
                            : null
                    ].join(' ')}
                >
                    <DashboardIcon sx={{ fontSize: 22 }} />
                    <div>Dashboard</div>
                </Link>

                <Link to="/history" className={[
                    styles.SideBarOption,
                    location.pathname === '/history'
                        ? styles.selectedOption
                        : null
                ].join(' ')}>
                    <RestoreRoundedIcon sx={{ fontSize: 22 }} />
                    <div>History</div>
                </Link>

                <Link to="/admin" className={[
                    styles.SideBarOption,
                    location.pathname === '/admin'
                        ? styles.selectedOption
                        : null
                ].join(' ')}>
                    <AdminPanelSettingsRoundedIcon sx={{ fontSize: 22 }} />
                    <div>Admin</div>
                </Link>

                <div className={styles.SideBarOption}>

                    <LogoutRoundedIcon sx={{ fontSize: 22 }} />
                    <div>LogOut</div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
