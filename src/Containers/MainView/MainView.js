import React, {Component} from 'react';
import getPhotos from '../../API/getPhotos';
import Post from '../../Components/Photo/Post';
import {getTopicPhotos, getTopicsList} from "../../API/apis";
import style from './MainView.module.scss'
class MainView extends Component {
  state={
    feed:[],
    page:1,
    topic:'editorial',
    topicList:[{
      slug : 'editorial',
      title : 'Editorial',
      id: 'editorial'
    }],
    isLoading:false
  };

  async componentDidMount() {
    this.setState({
      isLoading:true
    })
    let topicList= await getTopicsList()
    let editorial = {
      slug : 'editorial',
      title : 'Editorial',
      id: 'editorial'
    }
    topicList.unshift(editorial)
    this.setState({
      feed: await getPhotos(this.state.page),
      topicList,
      page:this.state.page+1,
      isLoading:false
    })
  }

  fetchTopicPhotos= async (topic)=>{
    this.setState({
      topic,
      isLoading:true
    })
    let data = topic==='editorial'? await getPhotos(this.state.page): await getTopicPhotos(topic)
    this.setState({
      feed:data,
      isLoading:false
    })
  }


  render() {
    let state = {...this.state};
    return (
        <div className={style.mainViewContainer}>
          <div className={style.topicContainer}>
            {state.topicList.map(topic=>{
              return <p id={topic.id} className={`${style.topic} ${state.topic===topic.slug && style.active}`} onClick={()=>this.fetchTopicPhotos(topic.slug)}>{topic.title}</p>
            })}
          </div>
          {state.isLoading ? <p>Loading...</p>:state.feed.map(item=>{
            return !item.sponsorship && <Post key={item.id} item={item}/>
          })}
        </div>
    );
  }
}

export default MainView;

export const Loading = ()=>{

}