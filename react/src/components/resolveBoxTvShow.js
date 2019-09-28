import React, { Component } from 'react';

export class ResolveBoxTvShow extends Component
{
    render()
    {
        
        const renderTvShows = this.props.mold.map(item =>
            (
                <div className="column" key={item.id}>
                     <div className="ui segment">
                        <p className="ui">Title : {item.name}</p>
                        <p className="ui">Year : {item.year}</p>
                        <p className="ui">Genery : {item.genery}</p>
                        <p className="ui">Sesion : {item.sesons}</p> 
                        <img src={item.src} alt={item.src} height="200px" width="200px"/>
                    </div>
                </div>
                ));
        return (
            <div className="resolveBox">
                <div className="ui three column grid">
                    {renderTvShows}
                </div>
            </div>
        );
    }
}