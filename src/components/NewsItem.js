import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,date,auther}=this.props;
    return (
      <div className='container d-flex justify-content-around p-2'>
        <div className="card mt-2" style={{maxWidth:"23rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%" , cursor:"default"}} >{auther}</span>
        <img  src={imgUrl?imgUrl:"https://picsum.photos/seed/picsum/200/120"} className="card-img-top max-height" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">{new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">More Details</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
