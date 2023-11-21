import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import Products from './Products';
import CartItem from './CartItem';
import ProductsCart from './ProductsCart';
import Cart from './Cart';
function ElementorSection() {

    const [cart, setCart] = useState([]);

    const sampleProduct = {
      id: 1,
      name: "Yojoa Sesame Salt Dark Chocolate 70%",
      price: "11.00",
      image: "https://thechocolatehousedc.com/wp-content/uploads/2023/11/original-9-300x300.jpeg"
    };

    const emptyCart = () => {
        setCart([])
    }

    return (
        <div>
            <section>
                <div className='elementor_section'>
                <div className='elementor_container'>
                    <h3>Located in the Dupont Circle neighborhood of Washington, DC, The Chocolate House is a tasting room and boutique store where you can experience over 400 unique chocolate bars and confections from artisan chocolate makers and chocolatiers from all corners of the world.</h3>
                </div>
                </div>
                <div className='search'>
                        <div className='search-icon'>
                            <FaSearch />
                        </div>
                        <div className='search_input'>
                            <input type='text' placeholder='What products are you looking for?'></input>
                        </div>
                    </div>

                    <div className='elementor-element'>
                    <div className='elementor-widget'>
                        <div className='elementor_motion'>
                            <a href='#'><img src='https://thechocolatehousedc.com/wp-content/uploads/2021/03/Chocolat-Moderne_Greek-Easter-Eggs.jpg'></img></a>
                        </div>
                        <div className='elementor_widget_wrap'>
                        <div className='elementor_txt'>
                            <a href='#'><h3>Easter Collection</h3></a>
                            <a href='#'><button>SHOP NOW</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='elementor-widget'>
                    <div className='elementor_widget_wrap'>
                            <div className='right'>
                            <div className='elementor_txt'>
                            <a href='#'><h3>Easter Collection</h3></a>
                            <a href='#'><button>SHOP NOW</button></a>
                            </div>
                            </div>
                        </div>
                        <div className='elementor_motion'>
                           <a href='#'> <img src='https://thechocolatehousedc.com/wp-content/uploads/2021/11/Drinking-Chocolate.jpg'></img></a>
                        </div>
                    </div>
                    <div className='elementor-widget'>
                        <div className='elementor_motion'>
                           <a href='#'> <img src='https://thechocolatehousedc.com/wp-content/uploads/2020/10/truffle-boxes.jpg'></img></a>
                        </div>
                        <div className='elementor_widget_wrap'>
                        <div className='elementor_txt'>
                            <a href='#'><h3>Easter Collection</h3></a>
                            <a href='#'><button>SHOP NOW</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='elementor-widget'>
                    <div className='elementor_widget_wrap'>
                    <div className='right'>
                            <div className='elementor_txt'>
                            <a href='#'><h3>Easter Collection</h3></a>
                            <a href='#'><button>SHOP NOW</button></a>
                            </div>
                            </div>
                        </div>
                        <div className='elementor_motion'>
                           <a href='#'> <img src='https://thechocolatehousedc.com/wp-content/uploads/2020/10/bar-collections.jpg'></img></a>
                        </div>
                    </div>
                    <div className='elementor-widget'>
                        <div className='elementor_motion'>
                           <a href='#'> <img src='https://thechocolatehousedc.com/wp-content/uploads/2021/08/original.jpeg'></img></a>
                        </div>
                        <div className='elementor_widget_wrap'>
                            <div className='elementor_txt'>
                            <a href='#'><h3>Easter Collection</h3></a>
                            <a href='#'><button>SHOP NOW</button></a>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            <Cart cart={cart} emptyCart={emptyCart} />
            <Products products={[sampleProduct]} />
            <CartItem cart={cart} />
            <ProductsCart product={sampleProduct} cart={cart} setCart={setCart} />
        </div>
    )
}

export default ElementorSection