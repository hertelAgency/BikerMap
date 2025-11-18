import shop from '../../assets/images/shop.svg';

function Shop({size=30}) {
    return(
        <div>
            <img height={size} width={size} src={shop} />
        </div>
    )
}

export default Shop;