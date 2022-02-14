import React, {useState, useEffect} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetServicesQuery, useSetUserMutation } from '../services/pieceJobAPI';
import { useGetUserMutation, useSetUserQuery } from '../services/authenticate';
import { Loader } from './Loader';

const authenticateBody = {
    loginName: 'amohelangt@chaperone.co.ls',
    password: '1'
}

const Services = ({simplified}) => {
    const count = simplified ? 5 : 100;
    const {data: serviceList, isFetching } = useGetServicesQuery(count);
    useGetUserMutation(authenticateBody);
    const {data: list } = useSetUserQuery();
    
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    console.log(list);

    useEffect(() => {   
        const filteredData = serviceList?.filter((service) => service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()));
        setServices(filteredData);
    }, [serviceList, searchTerm]);
    

    if(isFetching) return <Loader />;

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <input placeholder="search service" onChange={(e) => setSearchTerm(e.target.value)}></input>
                </div>
            )}

            <Row gutter={[32,32]} className="crypto-card-container" justify="space-around">
                {services?.map((service) => (
                    <Col xs={24} sm={12} lg={24} className='crypto-card'>
                        <Link to={`/services`}>
                            <Card
                                title ={`${service.serviceName} . ${service.serviceType}`}
                                hoverable
                                >
                                <p>Service Name: {service.serviceName}</p>    
                            </Card>
                        </Link>
                    </Col>
                ))}

            </Row>
        </>
    )
}

export default Services
