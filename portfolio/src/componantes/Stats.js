import React from 'react'

const Stats = () => {
  return (
    <div id="stats" className="statsSection section">

    <div className="container">

        <div className="row">


            <div className="col-md-3 col-sm-6">
                <div className="squareItem">
                    <div className="squareInnerContainer">
                        <div className="squareIcon">
                            <i className="fa fa-clock"></i>
                        </div>
                        <div className="squareContent">
                            <h2 className="counter">2</h2>
                            <h3>Years Experience</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="squareItem">
                    <div className="squareInnerContainer">
                        <div className="squareIcon">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="squareContent">
                            <h2 className="counter">3</h2>
                            <h3>Clients</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="squareItem">
                    <div className="squareInnerContainer">
                        <div className="squareIcon">
                            <i className="fa fa-bolt"></i>
                        </div>
                        <div className="squareContent">
                            <h2 className="counter">6</h2>
                            <h3>Optimization Algorithms</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="squareItem">
                    <div className="squareInnerContainer">
                        <div className="squareIcon">
                            <i className="fa fa-code"></i>
                        </div>
                        <div className="squareContent">
                            <h2 className="counter">3</h2>
                            <h3>Websites Made</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
  )
}

export default Stats