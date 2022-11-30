import SectionFoodHeader from "./SectionFoodHeader";
import SectionFoodContent from "./SectionFoodContent";

function SectionFood(props) {
    const {category} = props;
    return (
        <div className="section-index-collection ">
            <div className="container">
                <SectionFoodHeader section_name={category.name}></SectionFoodHeader>
                <SectionFoodContent products={category.products}></SectionFoodContent>
            </div>
        </div>
    );
}
export default SectionFood;