import ProductInfo from "./ProductInfo";

function SectionContent(props){
    const {products} = props;
    return (
        <div className="wraplist-products">
            <div className="listProduct-row listProduct-resize-1">
                {
                    products.map((item, index) => <ProductInfo product={item}></ProductInfo>)
                }
            </div>
        </div>
    );
}
export default SectionContent;