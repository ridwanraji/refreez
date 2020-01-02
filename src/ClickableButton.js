import React from "react"

class ClickableButton extends React.Component {
    render(){
        return (
            <div>
                <button className={"btn-default"}> {this.props.name} </button>
            </div>
        )
    }
}

export default ClickableButton