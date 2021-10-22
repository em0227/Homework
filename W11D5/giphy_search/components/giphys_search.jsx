import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <div>
                <h2>Search Giphy!</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </form>
                {/* <GiphysIndex /> */}
            </div>
        )
    }
}


export default GiphysSearch;