import styled from 'styled-components';



const RainbowBorder = styled.div`
  --angle: 0deg;
  width: auto;
  height: auto;
  border: 1vmin solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  animation: 1s rotate linear infinite;

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
    from {
      --angle: 0deg;
    }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;
const RainbowInput = styled.input`
  --angle: 0deg;
  border: 1vmin solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  animation: 1s rotate linear infinite;

  @keyframes rotate {
    to {
      --angle: 0deg;
    }
    from {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;
const RainbowButton = styled.button`
  --angle: 0deg;
  border: 1vmin solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  animation: 10s rotate linear infinite;

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;
export { RainbowBorder, RainbowInput, RainbowButton };