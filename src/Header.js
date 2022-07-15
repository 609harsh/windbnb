import React from "react";

class Header extends React.Component{
    render(){
        const {length}=this.props;
        
        return(
            <div className="header">
                <div className="heading">
                    <h2>Stays in Finland</h2>
                </div>
                <div className="output-info">
                    <h4>{length}+Stays</h4>
                </div>
            </div>
            
        )
    }
}

export default Header;