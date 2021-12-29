import React, {useEffect} from 'react';

import * as classes from "./Layout.module.scss"
import "normalize.css"
import "../../assets/css/main.scss"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {useDispatch} from "react-redux";
import {startCheckOnline} from "../../store/actions/appSideActions";


const Layout = ({children}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(startCheckOnline(window))
        }, 1000)
    }, [])

    return (
        <>
            <main className={classes.Wrapper}>
                <Navbar/>
                <section className={classes.Layout}>
                    {children}
                </section>
                <Footer/>
            </main>
        </>
    );
};

export default Layout;
