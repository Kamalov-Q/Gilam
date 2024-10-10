import ImageComparisonSlider from "react-image-comparison-slider";
import beforeImage from "../../assets/Image/imhg.png"; // Make sure the path is correct
import afterImage from "../../assets/Image/imhg2.png"; // Correct double slashes
import './CleanM.css';
import { t } from "i18next";
function CleanM() {
  return (
    <div className="cleanM__main">
      <h2 className="cleanM__header" style={{ marginBottom: "30px" }}>{t("cleanM")}</h2>
      <ImageComparisonSlider
        image1={afterImage}
        image2={beforeImage}
        sliderLineColor="#2196F3"
      />
    </div>
  );
}

export default CleanM;
