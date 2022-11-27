import ProductInfo from "./ProductInfo";

function SectionContent(){
    return (
        <div className="wraplist-products">
            <div className="listProduct-row listProduct-resize-1">
                <ProductInfo></ProductInfo>
                <ProductInfo></ProductInfo>
                <ProductInfo></ProductInfo>
                <ProductInfo></ProductInfo>
            </div>
        </div>
    );
}
export default SectionContent;