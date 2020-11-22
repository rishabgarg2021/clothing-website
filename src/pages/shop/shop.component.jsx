import React from "react"
import SHOP_DATA from "./shop.data";
import CollectionsPreview from "../../components/collections-preview/collections-preview.components"
class ShopPage extends React.Component{

    constructor(props){
        super();
        this.state ={
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div className = "shop-page">
                {
                    collections.map(({id,...otherCollectionProps})  => {
                        return(
                        <CollectionsPreview key={id} {...otherCollectionProps}></CollectionsPreview>
                    )  
                })
                }
            </div>
        )
    }
}

export default ShopPage;