import React, { Component } from "react";
import styles from "../Photo/Post.module.scss";
import getDetailPhoto from "../../API/getDetailPhoto";
import Collection from '../Collection/Collection';
import Post from "../Photo/Post";

class DetailPhoto extends Component {
  state = {
    photo: {},
    isLoading:true
  };

  async componentDidMount() {
    this.setState({
      photo: await getDetailPhoto(this.props.match.params.id),
      isLoading:false
    });
  }

  render() {
    let item = { ...this.state.photo };
    let additionalStyle = {
      backgroundColor: `${item.color}`,
      paddingBottom: `${((item.height) / (item.width) * 100)}%`,
    };
    return ( this.state.isLoading ?<p>Loading...</p>:<div>
        {/*single post*/}
        <Post item={this.state.photo}/>
        {/*related collections*/}
        <div className={styles.related} >
          <h4>  Related Collections</h4>
          {item.related_collections&&item.related_collections.results.map((collection)=>{
            return <Collection history={this.props.history} {...collection}/>
          })}
        </div>
      </div>
    );
  }
}

export default DetailPhoto;
