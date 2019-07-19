import React, { Component } from 'react';

class LeftSideBar extends Component {
    state = {  }
    render() { 
        const { sidebarOpen } = this.props
        return ( 
            <div className={`left-sidebar bg-dark border-right border-light position-fixed h-100 ${sidebarOpen ? `show` : '' }`}  >
                <ul className="list-group list-group-flush">
                    <li>
                        <a href="#" className='list-group-item bg-dark text-light'>Movies</a>
                    </li>
                    <li>
                        <a href="#" className='list-group-item bg-dark text-light'>Customers</a>
                    </li>
                    <li>
                        <a href="#" className='list-group-item bg-dark text-light'>Rentals</a>
                    </li>
                    <li>
                        <a href="#" className='list-group-item bg-dark text-light'>Login</a>
                    </li>
                    <li>
                        <a href="#" className='list-group-item bg-dark text-light'>Register</a>
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default LeftSideBar;