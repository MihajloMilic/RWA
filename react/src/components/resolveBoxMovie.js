import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddToWishList } from '../actions/movieActions';
class ResolveBoxMovie extends Component
{

    constructor(props)
    {
        super(props);
        this.state = { btnNum: []}
        this.add = this.add.bind(this);
    }

    add(e) {
        if(!this.props.wishList.includes(e.target.name))
        {

            this.props.AddIdMovie(e.target.name);
        }
       
    }

 
    render()
    {

        const renderMovies = this.props.mold.map(item =>
            
            (
                <div className="column" key={item.id}>
                   
                     <div className="ui segment">
                        <p className="ui">Title : {item.name}</p>
                        <p className="ui">Year : {item.year}</p>
                        <p className="ui">Genery : {item.genery}</p> 
                        <img src={item.src} alt={item.src} height="200px" width="200px"/>
                    </div>
                    <button className="ui red button"  name={item.id} onClick={this.add} >Add To Wish List</button>
                   
                </div>
                ));
        return (
            <div className="resolveBox">
                <div className="ui three column grid">
                    {renderMovies}
                </div>
            </div>
        );
    }
}

const mapStateToProps  = state =>({
    wishList: state.moviesRoot.wishList
});

const MapDispatchToProps = dispatch =>({

    AddIdMovie: (name)=> dispatch(AddToWishList(name)),

});


export default connect(mapStateToProps, MapDispatchToProps)(ResolveBoxMovie);