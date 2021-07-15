import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import styles from './BottomBar.module.scss';
class BottomBar extends Component {

  render() {
    let style = {
      height: `${navigator.userAgent.match('CriOS')&&`82px`}`
    }
    return (
        <div  className={styles.BottomBarParent}>
          <div style={style} className={styles.BottomBar}>
            <Link className={`${styles.bottomAction} ${styles.active}`} to='/'>
              <i className="material-icons">
                view_headline
              </i>
                Feed
            </Link>
            <Link className={`${styles.bottomAction} ${styles.active}`} to="/collections">
              <i className="material-icons">
                graphic_eq
              </i>
                Collections
            </Link>
            <Link className={`${styles.bottomAction} ${styles.active}`} to="/search">
              <i className="material-icons">
                search
              </i>
                Search
            </Link>
            <Link className={`${styles.bottomAction} ${styles.active}`} to="/profile">
              <i className="material-icons">
                perm_identity
              </i>
                Account
            </Link>

          </div>
        </div>
    );
  }
}

export default BottomBar;