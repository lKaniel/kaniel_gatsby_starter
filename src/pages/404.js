import React from 'react';
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo";

const error = () => {
    return (
        <Layout>
            <Seo title={"Error"}/>
            <h2>
                ERROR 404
            </h2>
        </Layout>
    );
};

export default error;