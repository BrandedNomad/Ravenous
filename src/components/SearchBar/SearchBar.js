import React from 'react';
import './SearchBar.css';



var list;

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:"",
            location:"",
            sortBy:"best_match",

        };

        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)



    }
    //sets the state of sorBy to the option that is currently active
    handleSortByChange(sortByOption){
        this.setState({
            sortBy:sortByOption
        })
    }

    //Changes the class attribute based on its state
    getSortByClass(sortByOptions){
        if(this.state.sortBy === sortByOptions){
            return 'active';
        } else {
            return '';
        }
    }

    //creates and returns a list of sort by options to be displayed at the top of the search bar
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption =>{
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
        });

    }

    handleTermChange(e){
        this.setState({
            term:e.target.value

        })
    }

    handleLocationChange(e){
        this.setState({
            location:e.target.value

        })
    }

    handleSearch(e){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        e.preventDefault()
    }

    render(){

        let x = this.renderSortByOptions()
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {x}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="What would you like to eat?" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>

        )
    }

}

export default SearchBar;