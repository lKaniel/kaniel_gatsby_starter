import React, {useLayoutEffect} from 'react';

import * as classes from "./Layout.module.scss"
import "normalize.css"
import "../../assets/css/main.scss"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {useDispatch} from "react-redux";
import {startInnitEvents} from "../../store/actions/appSideActions";


const Layout = ({children}) => {

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(startInnitEvents(window))
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
