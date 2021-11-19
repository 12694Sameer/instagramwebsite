import React, { useState, useEffect } from 'react';


const Home = () => {
    // OpenModal = (e) => {
    //     //$('myModal').modal('show');
    // }
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Welcome</h5>
            </div>
            {/* <!-- Trigger the modal with a button --> */}
            <button type="button" class="btn btn-info btn-lg" onClick={this.OpenModal}>Open Modal</button>

            {/* <!-- Modal --> */}
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;