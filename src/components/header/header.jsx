import React, { Component } from 'react';

class Header extends Component {
    render() { 
        const { sidebarOpen } = this.props;
        return (
            <div className="main-header bg-dark border-bottom position-fixed w-100">
            <div className="container-fluid py-4 d-flex justify-content-between">
               <a href="#" className="display-4 text-light">Dashboard</a>
               <div className={`menu border border-light align-self-center ${sidebarOpen ? `close` : ''}`} 
               onClick={(e) => this.props.sidebarToggle(e)}>
                   <span className='bar bg-light'></span>
                   <span className='bar bg-light'></span>
                   <span className='bar bg-light mb-0'></span>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Header;