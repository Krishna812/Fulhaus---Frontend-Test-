import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content_img">
                        {
                           <img src='/images/sofa.jpg' alt='LayoutImg'></img>
                        }
                    </div>
                      <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;