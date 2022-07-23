import {Footer} from 'flowbite-react';
import React, { Component } from 'react';

class SiteFooter extends Component{
    render(){
        return(
            <div>
                 <Footer container={true}>
                    <div className="w-full text-center bg-maroon-100">
                        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between text-white">
                        <Footer.Brand
                            href="https://flowbite.com"
                            src="img/homepage/uchicago.svg"
                            alt="Flowbite Logo"
                            name="E = MC^2"
                        />
                        <Footer.LinkGroup>
                            <Footer.Link href="#">
                            About
                            </Footer.Link>
                            <Footer.Link href="#">
                            Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                            Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                            Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <Footer.Divider />
                        <Footer.Copyright
                        href="#"
                        by="The Tiwari Brothers"
                        year={2022}
                        />
                    </div>
                </Footer>
            </div>
        );
    }
}

export default SiteFooter;