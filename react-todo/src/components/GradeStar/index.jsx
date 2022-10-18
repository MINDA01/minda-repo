import { StarContainer } from "./style";

export const GradeStar = ({hovered, setHovered, clicked, setClicked}) => {
  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((el) => (
        <i
          className={`fas fa-star ${
            (clicked >= el) | (hovered >= el) && "yellowStar"
          }`}
          key={el}
          onMouseEnter={() => setHovered(el)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setClicked(el)}
        />
      ))}
    </StarContainer>
  );
};
