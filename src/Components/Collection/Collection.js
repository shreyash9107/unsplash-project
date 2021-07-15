import React, {Component} from 'react';
import styles from './Collection.module.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Collection extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    collection: {},
  };

  render() {

    let collection = {...this.props};
    const coverPhotoContainer = {
      backgroundColor: `${collection.cover_photo.color}`,
    };

    return (
        <Link to={`/collection/${collection.id}`} className={styles.Collection}>
          <div style={coverPhotoContainer}
               className={styles.coverPhotoContainer}>
            <img className={styles.coverPhoto}
                 src={collection.cover_photo.urls.regular}
                 alt={collection.cover_photo.description}/>
            {collection.preview_photos[1] && <img className={styles.coverPhoto2}
                 src={collection.preview_photos[1].urls.small}
                 alt={collection.cover_photo.description}/> }
            {collection.preview_photos[2] && <img className={styles.coverPhoto3}
                 src={collection.preview_photos[2].urls.small}
                 alt={collection.cover_photo.description}/>}
          </div>
          <div className={styles.header}>
            <h3 className={styles.title}>{collection.title}</h3>
            <div className={styles.details}>
              <span>{collection.user.name}</span><span>{collection.total_photos} Photos</span>
            </div>
            <div className={styles.chipsWrapper}>
              {collection.tags.map((tag, index) => {
                 return (index<3 && <span className={styles.chips}>
              {tag.title}
            </span>);
              })}
            </div>
          </div>

        </Link>
    );
  }
}

export default Collection;