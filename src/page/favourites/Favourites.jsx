import React, { useContext } from 'react'
import { CartContext } from '../../components/contexts/CartContext';
import PageTransition from '../../components/PageTransition';
import Product from '../../components/slideProducts/Product';


function Favourites() {
    const {favourites, removeFromFavourites} = useContext(CartContext);

  return (
    <PageTransition>
        <div className="categoryProducts favouritesPage">
            <div className="container">
                <div className="topSlide">
                    <h2>Your Favourites: </h2>
                </div>
                
                {favourites.length == 0 ? (
                    <p>No Favourite Products yet.</p>
                ): (
                    <div className="products">
                        {favourites.map(item => (
                            <Product item={item} key={item.id}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </PageTransition>
  )
}

export default Favourites