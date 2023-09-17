import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

function Landing() {
return (
<div>
<h1>MARVEL COMICS!</h1>
<Link to="/comics">
<button className='btnl'>Ver cómics</button>
</Link>
</div>
);
}

export default Landing;