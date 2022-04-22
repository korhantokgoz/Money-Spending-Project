

function BasketItem({ item, product }) {
    return (
        <>
        <li className="basket-item">
            {product.title} x {item.amount}
        </li>
        <style jsx>{`
        .basket-item {
        padding-bottom: 10px;
        fon-size: 17px;

        }
        .basket-item span {
            color: #999;

        }

        `}</style>
        </>
    );
}

export default BasketItem;