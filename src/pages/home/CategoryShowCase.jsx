import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";

const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg',
        cate: 'Shoes',
        title: 'Addidas Premier X',
        author: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg',
        brand: 'Addidas',
        price: '$420.00',
        id: '124e13b9-2d54-4b2f-a74d-a77b362d6ead',
    },
    {
        imgUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2aaf5e8a7924f1d9277ac9f005b5f37_9366/Santiago_Lunch_Bag_Black_EX6532_01_standard.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2aaf5e8a7924f1d9277ac9f005b5f37_9366/Santiago_Lunch_Bag_Black_EX6532_01_standard.jpg',
        brand: 'Addidas',
        price: '$63.00',
        id: '1770549a-571b-4baf-bc58-7bae7a228dcb',
    },
    {
        imgUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e6e7967b3b24ef298f5adcc00f983ec_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5115_41_detail.jpg',
        cate: 'Earphones',
        title: 'adidas 01 True Wireless Earbuds',
        author: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e6e7967b3b24ef298f5adcc00f983ec_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5115_41_detail.jpg',
        brand: 'Addidas',
        price: '$110.00',
        id: 'd1116075-10f2-49c4-985e-0d41e19ce1b3',
    },
    {
        imgUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ac09bb56249b43158485aca1007cc1ef_9366/Excel_Backpack_Black_EX6933_01_standard.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ac09bb56249b43158485aca1007cc1ef_9366/Excel_Backpack_Black_EX6933_01_standard.jpg',
        brand: 'Addidas',
        price: '$62.00',
        id: '35ac57f9-870a-4299-aac8-e5d8d2716b31',
    },
    {
        imgUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg',
        brand: 'Addidas',
        price: '$229.00',
        id: '4bf9798f-63bc-4a83-b0c6-6a3b816fe922',
    },
    {
        imgUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c45df020e3ae4e9199a4ac7d0001cfb7_9366/Steel_Metal_Bottle_1L_White_EX7301_01_standard.jpg',
        cate: 'Bottle',
        title: 'Steel Metal Bottle 1L',
        author: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c45df020e3ae4e9199a4ac7d0001cfb7_9366/Steel_Metal_Bottle_1L_White_EX7301_01_standard.jpg',
        brand: 'Addidas',
        price: '$40.00',
        id: 'eaff8921-f7eb-446f-b072-d96559685de0',
    },
    {
        imgUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1c87c940836e4628852bad130101e5c6_9366/R.Y.V._Toploader_Backpack_Black_H32458_01_standard.jpg',
        cate: 'Bags',
        title: 'R.Y.V. Toploader Backpack',
        author: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1c87c940836e4628852bad130101e5c6_9366/R.Y.V._Toploader_Backpack_Black_H32458_01_standard.jpg',
        brand: 'Addidas',
        price: '$199.00',
        id:'ff5bf372-7ed1-4904-aac5-7a2ce98e70ef',
    },
    {
        imgUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg',
        brand: 'Addidas',
        price: '$245.00',
        id: '307f166f-1d04-4573-bc37-2f461ea9d4f7',
    },
]

const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData)
    const filterItem = (categItem) => {
        const updateItems = ProductData.filter((curEl) => {
            return curEl.cate === categItem
        })

        setItems(updateItems)
    }
    return (
        <div className="course-section style-3 padding-tb">
            {/* shapes */}
            <div className="course-shape one">
                <img src="/images/shape-img/icon/01.png" className="" />
            </div>
            <div className="course-shape two">
                <img src="/images/shape-img/02.png" className="" />
            </div>
            {/* main section */}
            <div className="container">
                {/* header section */}
                <div className="section-header">
                    <h2 className="title">{title}</h2>
                    <div className="course-filter-group">
                        <ul className="lab-ul">
                            <li onClick={() => setItems(ProductData)}>All</li>
                            <li onClick={() => filterItem('Shoes')}>Shoes</li>
                            <li onClick={() => filterItem('Bags')}>Bags</li>
                            <li onClick={() => filterItem('Earphones')}>Earphones</li>
                            <li onClick={() => filterItem('Bottle')}>Bottle</li>
                        </ul>
                    </div>
                </div>
                
                {/* body section */}
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                        {
                            items.map((product) => {
                                return <div className="course-item style-4" key={product.id}>
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img src={product.imgUrl} alt="img" />
                                            <div className="course-category">
                                                <div className="course-cate">
                                                    <a href="#">{product.cate}</a>
                                                </div>
                                                <div className="course-reiew">
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>

                                        {/* content */}
                                        <div className="course-content">
                                            <Link to={`/shop/${product.id}`}>
                                                <strong>
                                                    {product.title}
                                                </strong>
                                                
                                            </Link>
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    <Link to='/' className="ca-name">{product.brand}</Link>
                                                </div>
                                                <div className="course-price">
                                                    {product.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryShowCase
