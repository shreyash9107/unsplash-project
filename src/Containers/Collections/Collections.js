import React, {Component} from 'react';
import {getCollections} from '../../API/apis'
import Collection from '../../Components/Collection/Collection'
import styles from './Collections.module.scss'

class Collections extends Component {
  state={
    collections:[],
    isLoading:true,
  };
  async componentDidMount() {
    this.setState({
      collections: await getCollections(),
      isLoading:false
    })
  }

  render() {
    let state = {...this.state};
    return (
        <div className={styles.CollectionsContainer}>
          <h3 className={styles.title}>Collections</h3>
          {state.isLoading?<p>Loading...</p> : state.collections.map((collection)=>{
            return <Collection history={this.props.history} {...collection}/>
          })}
        </div>
    );
  }
}



export default Collections;