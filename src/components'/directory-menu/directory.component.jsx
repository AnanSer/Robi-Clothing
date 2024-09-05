import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.css";
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",

          id: 1,
        },

        {
          title: "Jackets",
          imageUrl:
            "C:/Users/user/Pictures/Screenshots/Screenshot 2024-08-04 010137.png",
          id: 2,
        },
        {
          title: "Snickers",
          imageUrl:
            "C:/Users/user/Pictures/Screenshots/Screenshot 2024-08-04 010137.png",
          id: 3,
        },
        {
          title: "mens",
          imageUrl:
            "C:/Users/user/Pictures/Screenshots/Screenshot 2024-08-04 010137.png",
          id: 4,
        },
        {
          title: "womens",
          imageUrl:
            "C:/Users/user/Pictures/Screenshots/Screenshot 2024-08-04 010137.png",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
