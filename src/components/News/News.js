import React, { Component } from 'react'
import NewSingle from './NewSingle'

class News extends Component {
    constructor(props) { // initialize with props
        super(props);
        this.state = {
            news: [],
        }
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=83d7fc3570c246f19d293cf3d350594bs';

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => { // whatever is returned, 'data' will be passed to it
                this.setState({
                    news: data.articles
                })
            })
            .catch((err) => console.log(err))
    }

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item} />
        ));
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

export default News

// 1. create News, a class-based component
// 2. create function to render item, called renderItem => iterate through data from the database
// 2b. get props called items
// 2c. map items; for each item run function
// 2d. return component NewSingle; pass key; also pass item
// 3. create state; initialize with news and empty array
// 4. lifecycle method: componentDidMount(); runs after component has been rendered
// 4b. to use renderItem function