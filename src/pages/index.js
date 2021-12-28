import React from "react"
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo";

export default function Home() {

    return (
        <Layout>
            <Seo title={"home"}/>
            <h2>
                Hello from Kaniel's starter!
            </h2>
        </Layout>
    )
}
