import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../App.css';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:10,
    category:"general"
  }
  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults:0
    }
  }
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
   async fetchData(pageNum) 
  {
    this.setState({loading:true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.Apikey}&page=${pageNum}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState(
      { articles: parsedData.articles, 
    page:pageNum,
    loading:false,
    totalResults:parsedData.totalResults
    
  });
  document.title=`${this.capitalizeFirstLetter(this.props.category)}-Top Headlines`
    
  }
  async componentDidMount() {
    this.fetchData(this.state.page);
  }
  handlePrevBtn= ()=>{
    console.log("prev");
    this.fetchData(this.state.page -1);
  
  }
  handleNextBtn=()=>{
    console.log("next");
    this.fetchData(this.state.page +1);

  }
  render() {
    return (
      <>
        <div className="container my-3">
      <h1 className='text-center'>Top  on {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
      {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return <div className="col-md-4 " key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0,100) : ""} description={element.description ? element.description.slice(0, 150) : ""} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} auther={element.source.name}/>
                </div>
              })
            }

          </div>
        </div>
        {!this.state.loading && <div className="container justify-content-center d-flex bottomFixed">
        <button type="button" disabled={this.state.page<=1} className="btn btn-success p-2 m-2" style={{width:"6rem"}} onClick={this.handlePrevBtn}>&larr; Previous</button>
        <button disabled={this.state.page +1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success  m-2" style={{width:"6rem"}} onClick={this.handleNextBtn}>Next &rarr;</button>

        </div>}
      </>
    )
  }
}

export default News
