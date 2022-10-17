// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size:number) => `${size / 16}rem`; 

// font size를 객체로 반환.
const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

const colors = {
  black: "#000000",
  grey: "#999999",
  green: "#3cb46e",
  blue: "#000080",
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
} 

export default theme;
  