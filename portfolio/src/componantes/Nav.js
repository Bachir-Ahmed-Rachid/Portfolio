import React from 'react'

const Nav = () => {
  return (
    <nav id="navigation" class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="index.html">BACHIR AHMED RACHID</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#about">About
                    <span class="sr-only">(current)</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#resume">Resume</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#stats">Stats</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
        </ul>
    </div>

</nav>
  )
}

export default Nav