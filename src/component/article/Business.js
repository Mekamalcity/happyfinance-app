import React, { Component } from "react";

class BusinessPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    const app_key = "edf43ce229ff453ab817d796fb9e302c";
    const business_url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${app_key}`;
    fetch(business_url)
      .then((response) => response.json())
      .then((myJson) => {
        this.setState({
          articles: myJson.articles,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="blank-article"></div>
        <div className="article-container mt-5">
          {this.state.articles.map((item) => {
            return (
              <div className="article-card">
                <div className="article-card-image">
                  <img src={item.urlToImage} alt="not available" />
                </div>
                <div className="article-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    ..Read more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BusinessPage;
