import React from "react";
import { useDispatch } from "react-redux";
import { listColor } from "../../const/help";
import { changeTheme } from "../../store/changeThemeSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const changeColor = (newColor) => {
    dispatch(changeTheme(newColor))
    document
      .documentElement
      .style
      .setProperty("--main-color", newColor);
  }

  return (
    <>
      <div className="footer">
        <div className="vertical-center">
          {listColor
            ? listColor.map((item, idx) => {
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`dot ${item.title}`}
                    onClick={() => changeColor(item.color)}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Footer;
