import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Logout_button = () => {
    const router = useRouter();

    return <button onClick={() => router.push("/login")}>Logout</button>
}

class Logout extends Component {
    render() {
        return (
            <div className="modal fade" id="logoutModal"  role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                          </button>
                      </div>
                      <div className="modal-body">Select Logout below if you are ready to end your current session.</div>
                   '   <div className="modal-footer">
                          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                          <Logout_button/>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Logout;
