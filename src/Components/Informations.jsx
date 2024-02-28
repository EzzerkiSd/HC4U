import React from 'react';
import '../Styles/Informations.css';
import { Title } from './Title';
import * as FaIcons from 'react-icons/fa';
import { Card } from './Card';

const Infomations = () => {
    return (
        <>
            <div className="infos">
                <div className="container" id='Services'>
                    <Title content={'What We Do'} />
                    <p className='description'>
                        We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services tailored to your needs. Our platform allows you to connect with experienced online doctors who provide expert medical advice, issue online prescriptions, and offer quick refills whenever you require them.
                    </p>
                    <div className="cards__container">
                        <Card icon={<FaIcons.FaHandHoldingMedical />} title={'Emergency Care'} p={"Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care."} />
                        <Card icon={<FaIcons.FaHeartbeat />} title={'Heart Disease'} p={"Our team of experienced cardiologists and medical experts use state-o f-the-art technology to assess your cardiovascular health  and design personalized treatment plans. From comprehensive screening to advanced intervention, we are committed to helping you maintain a healthy heart and lead a fulfilling life."} />
                        <Card icon={<FaIcons.FaTooth />} title={'Dental Care'} p={"Smile with confidence as our Dental Care services cater to all your oral health needs. Our skilled dentists provide a wide range of treatment, from routine check-ups and cleanings to cosmetic procedures and restrorative treatments."} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Infomations;