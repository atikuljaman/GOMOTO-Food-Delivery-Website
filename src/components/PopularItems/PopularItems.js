import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import useLoading from '../../hooks/useLoading';
import AsianFood from './AsianFood/AsianFood';
import Burger from './Burger/Burger';
import Pizza from './Pizza/Pizza';
import './PopularItems.css'
import RawMeat from './RawMeat/RawMeat';

const PopularItems = () => {/* 
    const { isLoading } = useLoading();
    console.log(isLoading); */

    return (
        <div className="mt-5 pt-5 text-center">
            <div className="text-center feature-items">
                <p className="m-1 fw-bold"><small>Quick pick</small></p>
                <h1 className="m-0 fw-bold">Popular Goods</h1>
            </div>


            <Tabs defaultActiveKey="burger" id="uncontrolled-tab-example" className="my-3 border-0 nav-tabs">
                <Tab tabClassName className="border-0" eventKey="burger" title="Burger">
                    <Burger />
                </Tab>
                <Tab className="border-0" eventKey="pizza" title="Pizza">
                    <Pizza />
                </Tab>
                <Tab className="border-0" eventKey="asianFood" title="Asian Food">
                    <AsianFood />
                </Tab>
                <Tab className="border-0" eventKey="rawMeat" title="Raw Meat">
                    <RawMeat />
                </Tab>
            </Tabs>
        </div>
    );

};

export default PopularItems;