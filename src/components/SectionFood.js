import SectionFoodHeader from "./SectionFoodHeader";
import SectionFoodContent from "./SectionFoodContent";

function SectionFood() {
    return (
        <div className="section-index-collection ">
            <div className="container">
                <SectionFoodHeader></SectionFoodHeader>
                <SectionFoodContent></SectionFoodContent>
            </div>
        </div>
    );
}
export default SectionFood;