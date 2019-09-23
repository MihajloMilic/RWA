import React, { Component,propTypes } from 'react';
import { InputBox } from "./inputBox";
import  ResolveBoxMovie  from "./resolveBoxMovie";
import { ResolveBoxTvShow } from "./resolveBoxTvShow";
import WishListBox from './wishListBox';
import { connect } from 'react-redux';
import { MovieRequestName,MovieRequestGenery,MovieRequestAll,AddToWishListReq } from '../actions/movieActions';
import { TvShowRequestName,TvShowRequestGenery,TvShowRequestAll } from "../actions/tvShowActions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SearchBox extends Component
{
  
    constructor(props)
    {
        super(props);
        this.state = { nameInput :"",generyInput:"", movieState:true}
        this.onChangeInput = this.onChangeInput.bind(this);
        this.objects = [];
        this.onClickBtn = this.onClickBtn.bind(this);
        this.MovieOrTvShows = this.MovieOrTvShows.bind(this);
    }
   
    onChangeInput(e)
    {
        this.setState({[e.target.name]:e.target.value});
       
    }
    MovieOrTvShows(e)
    {
        if(e.target.value === "Movies")
        {
            this.setState({movieState:true});
        }
        else if(e.target.value === "TvShows")
        {
            this.setState({movieState:false});
        }
    }
    onClickBtn(e)
    {
        switch(e.target.name)
        {
            case "btnGetAllMovie":
            {
                this.props.allMovies();
                break;
            }
            case "btnNameMovie":
            {
                this.props.nameMovies(this.state.nameInput);
                break;
            }
            case "btnGeneryMovie":
            {
                this.props.typeMovies(this.state.generyInput);
                break;
            }
            case "btnGetAllShows":
            {
                this.props.allTvShows()
                break;
            }
            case "btnNameShows":
            {
                this.props.nameTvShows(this.state.nameInput);
                break;
            }
            case "btnGeneryShows":
            {
                this.props.typeTvShows(this.state.generyInput);
                break;
            }
        }
       
    }
    render()
    {  
       let whichInput;
        if (this.state.movieState) {
            whichInput = 
                <div>
                    <InputBox onChangeInput={this.onChangeInput}  onClickBtn={this.onClickBtn} name="Movie"/>
                    <ResolveBoxMovie mold={this.props.movieItems} AddToWishList={this.AddToWishList} />
                </div>
        } else {
            whichInput = 
                <div>
                    <InputBox onChangeInput={this.onChangeInput}  onClickBtn={this.onClickBtn} name="Shows"/>
                    <ResolveBoxTvShow mold={this.props.tvShowsItems} />
                </div>
        }
        return(
            
            <div className="SearchBox">
            <Link to="/wishList">Wish List</Link>
                <div>
                    <select ref={this.state.movieState} onChange={this.MovieOrTvShows} className="ui search dropdown">
                        <option value="Movies">Movies</option>
                        <option value="TvShows">Tv Shows</option>
                    </select>
                </div>
                <br/>
                <div>
                    <br/>
                    <br/>
                    {whichInput}
                </div>
                <br/>
                <br/>
            </div>
        );

    }
}





const mapStateToProps  = state =>({
    tvShowsItems: state.tvShowsRoot.tvShowsReducer,
    movieItems: state.moviesRoot.moviesReducer,
    wishList: state.moviesRoot.wishList,
    wishListOb: state.moviesRoot.wishListOB
});

const MapDispatchToProps = dispatch =>({
    
        allMovies: ()=> dispatch(MovieRequestAll()),
        nameMovies: (name)=> dispatch(MovieRequestName(name)),
        typeMovies: (genery)=> dispatch(MovieRequestGenery(genery)),

        ///---------ACTION AND REDUCER AND SAGA
        getByIdMovie:(some)=> dispatch(AddToWishListReq(some)),

        allTvShows: ()=> dispatch(TvShowRequestAll()),
        nameTvShows: (name)=> dispatch(TvShowRequestName(name)),
        typeTvShows: (genery)=> dispatch(TvShowRequestGenery(genery))
    
});


export default connect(mapStateToProps, MapDispatchToProps)(SearchBox);