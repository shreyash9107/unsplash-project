import React, { Component } from "react";
import styles from "./DetailCollection.module.css";
import {getDetailCollection,getCollectionPhotos} from "../../API/apis";
import Collection from '../Collection/Collection';
import Post from '../Photo/Post';

class DetailCollection extends Component {
  state = {
    details: {},
    photos: []
  };

  async componentDidMount() {
    let details = await getDetailCollection(this.props.match.params.id),
        photos = await getCollectionPhotos(this.props.match.params.id)
    this.setState({
      details ,
      photos
    });
  }

  render() {
    let state = {...this.state}
    let headerStyle = (Object.keys(state.details).length>1) ?  {
      fontcolor:`red`,
      background:`linear-gradient(rgba(24, 26, 27, 0.4), rgba(24, 26, 27, 0.6) 50%, rgb(0,0,0,0.8)),url(${state.details.cover_photo.urls.small})`,
    }: []
    return (
      <div>
        {/*Header*/}
        {Object.keys(state.details).length>1 &&
          <div style={headerStyle} className={styles.header}>
            <h3 className={styles.title}>
              {state.details.title}
            </h3>
            {state.details.description && <p className={styles.description}>
              {state.details.description}
            </p>}
            <div className={styles.postHeader}>
              <div className={styles.profileImageContainer}>
                <img src ={state.details.user.profile_image.medium} className={styles.profileImage} alt="Profile Picture"/>
              </div>
              {state.details.user.name}
            </div>
            {state.details.total_photos} Photos
          </div>
        }
        {/*Posts*/}
        <div className={styles.posts}>
          {Object.keys(state.details).length > 1 && state.photos.length > 1 &&
          state.photos.map((post) => {
            return !post.sponsorship && <Post item={post}/>
          })}
        </div>
      </div>
    );
  }
}

export default DetailCollection;
