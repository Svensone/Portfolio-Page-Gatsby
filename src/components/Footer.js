import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/ErtelSven" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/Svensone?tab=repositories" className="icon fa-github"><span className="label">Github</span></a></li>
                        {/* <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li> */}
                        <li><a href="mailto:svenson.ertel@gmail.com" target="_blank" className="icon fa-envelope-o"><span className="label" >Email</span></a></li>
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default Footer
