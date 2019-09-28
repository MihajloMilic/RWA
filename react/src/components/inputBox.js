import React, { Component } from 'react';



export class InputBox extends Component
{
    render()
    {
        return(
            <div className="InputBox">
                <div className="ui left icon input">
                    <input  name="nameInput" type="text" placeholder="Name" onChange={this.props.onChangeInput} />
                    <i className="inverted circular search link icon "></i>
                </div>

                <button name={"btnName"+this.props.name} className="ui button red" onClick={this.props.onClickBtn}>Find by name</button>
                <div className="ui left icon input">
                    <input className="ui left icon input" name="generyInput" type="text" placeholder="Genres" onChange={this.props.onChangeInput} />
                    <i className="inverted circular search link icon "></i>
                </div>

                <button className="ui button red" name={"btnGenery"+this.props.name} onClick={this.props.onClickBtn}>Find by genres</button>
                <br/>
                <br/>
            </div>
        );

    }
}