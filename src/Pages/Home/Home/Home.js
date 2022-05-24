import React, { useEffect } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ContactUs from '../ContactUs/ContactUs';
import Reviews from '../Reviews/Reviews';
import SpareParts from '../SpareParts/SpareParts';

const Home = () => {

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //rendering home component here
    return (
        <section>
            <PageTitle title={'Home'} />
            <Banner />
            <SpareParts />
            <BusinessSummary />
            <Reviews />
            <AboutUs />
            <ContactUs />
        </section>
    );
};

export default Home;