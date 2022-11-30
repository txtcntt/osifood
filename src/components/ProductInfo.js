import BtnAddToCard from "./BtnAddToCard";


function ProductInfo(props) {
    const { product } = props;
    return (
        <div className="col-md-2 col-sm-4 col-xs-4 product-loop" data-id="1088089427">
            <div className="product-inner product-resize fixheight" style={{ height: 358 }}>
                <div className="proloop-image">
                    <div className="gift product_gift_label hidden" data-id="1040451405">
                        <img className="lazyload" src="https://file.hstatic.net/1000308580/file/icon-gifbox_21127e78739a40a28f058e5e123d41b1.png" alt="icon quà tặng" />
                    </div>
                    <div className="product--image image-resize" style={{ height: 182, maxWidth: 182 }}>
                        <div className="product--image__inner">
                            <div className="prod-img">
                                <img className="img-loop lazyloaded" src={product.img} alt={product.name} />
                            </div>
                        </div>
                    </div>
                    <a href="#" className="proloop-link  quickview-product" title={product.name}></a>
                </div>
                <div className="proloop-detail">
                    <p className="proloop--vendor"><a href="#">OsiFood</a></p>
                    <h3><a href="#" className=" quickview-product">{product.name}</a></h3>
                    <p className="proloop--price">
                        <span className="price">{product.price}</span>
                    </p>
                    <div className="proloop--review">
                        <div className="haravan-product-reviews-badge" data-id="1040451405">  </div>
                    </div>
                    <div className="proloop--action " data-vrid="1088089427">
                        <div className="proloop--action__inner">
                            <div className="action-item action-addcart">
                                <BtnAddToCard></BtnAddToCard>
                            </div>
                            <div className="action-item action-boxqty">
                                <div className="proloop-boxqty">
                                    <button type="button" className="btnqty proloop-minus" aria-label="Minus">
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect height="1" width="18" y="9" x="1"></rect></svg>
                                    </button>
                                    <input type="text" name="quantity-proloop" defaultValue={1} min="1" className="proloop-qtyvalue" />
                                    <button type="button" className="btnqty proloop-plus" aria-label="Plus">
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="9" y="1" width="1" height="17"></rect> <rect x="1" y="9" width="17" height="1"></rect></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductInfo;