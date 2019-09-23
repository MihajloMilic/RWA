import React, { Component,propTypes } from 'react';
import { connect } from 'react-redux';
import { DeleteFromWish, AddToWishListReq } from '../actions/movieActions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class WishListBox extends Component
{

    constructor(props)
    {
        super(props);
       // this.objects = getByIdMovie(this.props.wishList)
       // console.log(this.objects)
        this.delete = this.delete.bind(this);
        this.props.getByIdMovie(this.props.wishList);
        console.log(this.props.wishList)
    }

    delete(e) 
    {
        console.log(e.target.name);
        console.log(this.props.wishList);
        var a = this.props.DeleteFromWish(e.target.name);
        console.log("OVO JE ODOGVOR", a)
        this.props.getByIdMovie(this.props.wishList);
       
    }

 
    render()
    {
        console.log(this.props.mold); 
        
        const merge3 = this.props.wishListOb.flat(1);
        console.log(merge3);
        const renderMovies =  merge3.map(item =>
            (
                <div className="column" key={item.id}>
                   
                     <div className="ui segment">
                        <p className="ui">Title : {item.name}</p>
                        <p className="ui">Year : {item.year}</p>
                        <p className="ui">Genery : {item.genery}</p> 
                        <img src={item.src} height="200px" width="200px"/>
                    </div>
                    <button className="ui red button" name={item.id} onClick={this.delete} >Delete from Wish List</button>
                   
                </div>
                ));
        return (
            <div className="resolveBox">
                <Link to="/">Home</Link>
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