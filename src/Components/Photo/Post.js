import React, {Component, useEffect, useRef, useState} from 'react';
import styles from './Post.module.scss';
import {Link} from 'react-router-dom';
import {BlurhashCanvas} from "react-blurhash";


const Post = ({item,style})=>{
    var postImageContainer = {
      paddingBottom: `${((item.height) / (item.width) * 100)}%`,
    };
    return (
        <div style={style} className={styles.PostContainer}>
            <Link to={`/user/${item.user.username}`} >
                <div className={styles.postHeader}>
                    <div className={styles.profileImageContainer}>
                        <img src={item.user.profile_image.small}
                             className={styles.profileImage} alt="Profile Picture"/>
                    </div>
                    {item.user.name}
                </div>
            </Link>
            <Link to={`/photo/${item.id}`} >
                <div className={styles.postImageContainer}>
                    <div style={{backgroundColor: `${item.color}`}} className={styles.bgColor}/>
                    {item.blur_hash && <BlurhashCanvas className={styles.canvas} hash={item.blur_hash} punch={2} />}
                    <img className={styles.postImage} src={item.urls.regular} alt={item.description}/>
                    <div style={postImageContainer}/>
                </div>
            </Link>
            <div className={styles.postFooter}>
                <div className={styles.postFooterButton}>
                    {item.likes} Likes
                </div>
            </div>
        </div>
    );
}

export default Post;