import React from "react";
import PropTypes from "prop-types";

const ShopGuidCard = ({ props }) => {
  const { logo, title, contents } = props;
  return (
    <div className="w-[325px] flex items-center justify-center p-2 rounded border border-darkBg/60 shadow-2xl shadow-darkBg/60 bg-lightFont">
      <div className="w-full h-full flex flex-col items-center justify-start gap-2">
        <div className="flex items-center justify-center w-[90%] h-[20%] overflow-hidden">
          <img src={logo} alt="" className="object-cover h-[30px] w-[30px]" />
        </div>
        <div className="w-full h-[20%] text-center flex items-center justify-center ">
          <h4 className="w-fit text-bodyLarge font-extrabold text-accent mb-4">
            {title}
          </h4>
        </div>
        <div className="w-full h-[60%] flex flex-col items-center justify-center">
          {contents.map((content, i) => (
            <div key={i} className="w-full h-full flex">
              <p className="w-full text-center text-bodyMd font-semibold py-2">
                {`${content.text}`}
                {content.onClick ? (
                  <a onClick={content.onClick} className="guid-link">
                    {content.linkText}
                  </a>
                ) : content.link ? (
                  <a href={content.link} className="guid-link">
                    {content.linkText}
                  </a>
                ) : (
                  ""
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
ShopGuidCard.propTypes = {
  props: PropTypes.object,
  logo: PropTypes.string,
  title: PropTypes.string,
  contents: PropTypes.array,
};
export default ShopGuidCard;
