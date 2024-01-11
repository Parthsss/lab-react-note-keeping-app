import React, {Component} from "react";
import "./Editor.css"

export default class Editor extends Component{
    

    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);

        this.state = {value: "" };

    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }



    render() {
        return(
            <div className="container">
                <div className="input">
                    <h3>Your Notes</h3>
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
        )
    }

}