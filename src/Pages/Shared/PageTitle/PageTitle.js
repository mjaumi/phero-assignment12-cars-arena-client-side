import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} | Cars Arena</title>
        </Helmet>
    );
};

export default PageTitle;