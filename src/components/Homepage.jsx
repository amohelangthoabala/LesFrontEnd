import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { useGetServicesQuery } from '../services/pieceJobAPI';
import { Services, Members } from '.';
import { Loader } from './Loader';
import { useGetUserQuery } from '../services/LoginAPI';

const {Title} = Typography;



const Homepage = () => {
    const { data, isFetching } = useGetServicesQuery(5);
   // const {userData, isFetchingData} = useGetUserQuery();
    const globalStats = data?.data?.serviceName;
    
    if(isFetching) return <Loader />;

    return (
        <>
        <Services simplified />
        <div className="home-heading-container"> 
             <Title level={2} className="hme-title">Latest Services</Title>
             <Title level={3} className="show-more"><Link to="/services">show more</Link></Title>
        </div>
        <Members simplified />
        </>
    )
}

export default Homepage
