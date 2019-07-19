import React from 'react';

const Pagination = () => {
    return ( 
        <ul className="pagination custom-pagination mb-0 mt-4">
            <li className="page-item">
                <a className="page-link text-light bg-dark" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link text-light bg-dark" href="#">1</a></li>
            <li className="page-item"><a className="page-link text-light bg-dark" href="#">2</a></li>
            <li className="page-item"><a className="page-link text-light bg-dark" href="#">3</a></li>
            <li className="page-item">
                <a className="page-link text-light bg-dark" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
     );
}
 
export default Pagination;