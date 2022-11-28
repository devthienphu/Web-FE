import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';

const Contact = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col gap-y-12 justify-center pt-48 items-center ">
                <p className="text-5xl font-extrabold">Contact us</p>
                <p className="text-center">We’d love to hear from you – please use the form to send us your message or ideas. Or simply pop <br/> in for a cup of fresh tea and a cookie:</p>
                <div className="flex flex-row flex-wrap divide-x-2 gap-x-8">
                    <div className="flex flex-col pl-4">
                        <p>PetMania, 1000S 8th</p>
                        <p>Avenue, NY, NY  10019</p>
                    </div>
                    <div className="flex flex-col pl-6">
                        <p><b>Call us:</b> 1-800-356-8933</p>
                        <p><b>Email:</b> info@petmania.com</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
