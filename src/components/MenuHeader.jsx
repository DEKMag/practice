import { NavLink } from 'react-router-dom';
import styles from './MenuHeader.module.scss';
import Calendar from './Calendar/Calendar';
import Clock from './Clock/Clock';

const MenuHeader = () => {
  return (
    <nav>
      <div className={styles.menuContent}>
        <div className={styles.left}>
          <div className={styles.leftIconUser}>
            <NavLink></NavLink>
          </div>
          <div className={styles.leftIconDate}>
            <Calendar />
          </div>
          <div className={styles.leftIconYouTube}>
            <div className={styles.iconYouTube}>
              <NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  />
                  <path fill="#FFF" d="M20 31L20 17 32 24z" />
                </svg>
              </NavLink>
            </div>
          </div>
          <div className={styles.leftIconTelegram}>
            <div className={styles.iconTelegram}>
              <NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="#29b6f6"
                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                  />
                  <path
                    fill="#fff"
                    d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                  />
                  <path
                    fill="#b0bec5"
                    d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                  />
                  <path
                    fill="#cfd8dc"
                    d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
          <div className={styles.leftIconVK}>
            <div className={styles.iconVK}>
              <NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="#1976d2"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
                  />
                  <path
                    fill="#fff"
                    d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.centerInfo}>
            <NavLink>
              <p>['Houdini!!']</p>
            </NavLink>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rightIconTime}>
            <Clock />
          </div>
          <div className={styles.rightIconMusic}>
            <NavLink></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuHeader;
