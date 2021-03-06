import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeleteFromWish, AddToWishListReq } from '../actions/movieActions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class WishListBox extends Component
{

    constructor(props)
    {
        super(props);
        this.delete = this.delete.bind(this);
        this.props.getByIdMovie(this.props.wishList);    
    }

    delete(e) 
    {
       this.deleteAsync(e).then( () => this.props.getByIdMovie(this.props.wishList))
    }

    async deleteAsync(e)
    {
        await this.props.DeleteFromWish(e.target.name);
    }

    render()
    {
        const merge3 = this.props.wishListOb.flat(1);
        const renderMovies =  merge3.map(item =>
            (
                <div className="column" key={item.id}>
                   
                     <div className="ui segment">
                        <p className="ui">Title : {item.name}</p>
                        <p className="ui">Year : {item.year}</p>
                        <p className="ui">Genery : {item.genery}</p> 
                        <img src={item.src} alt={item.src} height="200px" width="200px"/>
                    </div>
                    <button className="ui red button" name={item.id} onClick={this.delete} >Delete from Wish List</button>
                   
                </div>
                ));
        return (
            <div className="resolveBox">
                <Link to="/">            
                    <button className="ui button red" >Home</button>
                </Link>
                <div className="ui three column grid">
                    {renderMovies}
                </div>
            </div>
        );
    }
}

const mapStateToProps  = state =>({
    wishList: state.moviesRoot.wishList,
    wishListOb: state.moviesRoot.wishListOB
});

const MapDispatchToProps = dispatch =>({
    DeleteFromWish: (name)=> dispatch(DeleteFromWish(name)),
    getByIdMovie:(some)=> dispatch(AddToWishListReq(some))
});


export default connect(mapStateToProps, MapDispatchToProps)(WishListBox);