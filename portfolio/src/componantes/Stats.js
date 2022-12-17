import React from 'react'

const Stats = () => {
  return (
    <div id="stats" class="statsSection section">

    <div class="container">

        <div class="row">


            <div class="col-md-3 col-sm-6">
                <div class="squareItem">
                    <div class="squareInnerContainer">
                        <div class="squareIcon">
                            <i class="fa fa-clock"></i>
                        </div>
                        <div class="squareContent">
                            <h2 class="counter">1</h2>
                            <h3>Years Experience</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="squareItem">
                    <div class="squareInnerContainer">
                        <div class="squareIcon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <div class="squareContent">
                            <h2 class="counter">1</h2>
                            <h3>Clients</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="squareItem">
                    <div class="squareInnerContainer">
                        <div class="squareIcon">
                            <i class="fa fa-bolt"></i>
                        </div>
                        <div class="squareContent">
                            <h2 class="counter">6</h2>
                            <h3>Optimization Algorithmes</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="squareItem">
                    <div class="squareInnerContainer">
                        <div class="squareIcon">
                            <i class="fa fa-cloud"></i>
                        </div>
                        <div class="squareContent">
                            <h2 class="counter">3</h2>
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