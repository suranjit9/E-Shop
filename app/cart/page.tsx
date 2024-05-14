import React from 'react';
import Container from '../components/Container';
import CartClient from '../components/product/CartClient';

const page = () => {
    return (
        <div className="p-8">
            <Container>
                <CartClient/>
            </Container>
        </div>
    );
};

export default page;