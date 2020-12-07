import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import Spinner from '../components/Spinner';
import { useLocation } from 'react-router-dom';
import { profileInfor } from '../const/profile_infor';
import Header from './Header'
import Intro from "./Intro";
import About from "./About";
import TimeLine from './TimeLine';
import Skill from './Skill';
import Services from './Services';
import Portfolios from './Portfolios';
import Archievement from './Archievement';
import Interest from './Interest';
import Contact from './Contact';
import NotFound from "./NotFound";
import Education from './Education';
import {Helmet} from "react-helmet";

const MainPage = () => {
    let location = useLocation();
    console.log("location --- ", location)
    const [loading, setLoading] = useState(true);
    const contactRef = useRef(null);
    const introductionRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const skillRef = useRef(null);
    const educationRef = useRef(null);
    const serviceRef = useRef(null);
    const portfolioRef = useRef(null);
    const archivementRef = useRef(null);
    const interestRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })


    let url = location.pathname;
    let param = url.replace('/', '');
    let profile = profileInfor.find(profile => profile.key === param);

    if(!profile) {
        return (
            <NotFound />
        )
    }

    if(loading) {
        return <Spinner
            firstName={profile.firstName}
            lastName={profile.lastName}
        />
    }

    const scrollToRef = ref => {
        let offset = (window.innerHeight - ref.current.clientHeight) / 2;
        window.scrollTo({
            top: ref.current.offsetTop - offset,
            left: 0,
            behavior: 'smooth',
        });
    };

    const handleNavigate = (section) => {
        switch (section) {
            case 'introduction':
                scrollToRef(introductionRef);
                break;
            case 'about':
                scrollToRef(aboutRef);
                break;
            case 'experience':
                scrollToRef(experienceRef);
                break;
            case 'service':
                scrollToRef(serviceRef);
                break;
            case 'education':
                scrollToRef(educationRef);
                break;
            case 'skill':
                scrollToRef(skillRef);
                break;
            case 'portfolio':
                scrollToRef(portfolioRef);
                break;
            case 'archivement':
                scrollToRef(archivementRef);
                break;
            case 'interest':
                scrollToRef(interestRef);
                break;
            case 'contact':
                scrollToRef(contactRef);
                break;
            default:
                scrollToRef(contactRef);
                break;
        }
    }


    return (
        <div className="main-page-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${profile.firstName} ${profile.lastName}`} Introduction</title>
            </Helmet>
            <Header
                firstName={profile.firstName}
                lastName={profile.lastName}
                title={profile.title}
                profileUrl={profile.profileUrl}
                handleNavigate={handleNavigate}
            />
            <Intro
                firstName={profile.firstName}
                lastName={profile.lastName}
                title={profile.title}
                ref={introductionRef}
            />
            <About
                profileUrl={profile.profileUrl}
                contactOption={profile.contactOption}
                overview={profile.overview}
                handleNavigate={handleNavigate}
                ref={aboutRef}
            />
            <TimeLine
                sectionTitle={'EXPERIENCE'}
                history={profile.workHistory}
                ref={experienceRef}
            />
            <Skill
                skillOption={profile.skill}
                ref={skillRef}
            />
            <Education
                sectionTitle={'EDUCATION'}
                history={profile.education}
                ref={educationRef}
            />
            <Services
                services={profile.services}
                ref={serviceRef}
            />
            <Portfolios
                portfolios={profile.portfolios}
                ref={portfolioRef}
            />
            <Archievement
                certifications={profile.certifications}
                ref={archivementRef}
            />
            <Interest
                interest={profile.interests}
                ref={interestRef}
            />
            <Contact
                ref={contactRef}
                contactOption={profile.contactOption}
            />
        </div>
    )
}

export default MainPage