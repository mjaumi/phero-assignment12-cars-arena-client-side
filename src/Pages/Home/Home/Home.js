import React, { useEffect } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ContactUs from '../ContactUs/ContactUs';
import Featured from '../Featured/Featured';
import OurTeam from '../OurTeam/OurTeam';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
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
            <Featured />
            <AboutUs />
            <Services />
            <OurTeam />
            <ContactUs />
        </section>
    );
};

export default Home;