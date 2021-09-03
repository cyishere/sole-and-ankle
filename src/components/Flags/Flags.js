import styled from "styled-components/macro";
import { COLORS } from "../../constants";

const Flags = ({ variant, children }) => {
  return <Wrapper variant={variant}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  padding: 7px 10px;
  border-radius: 2px;
  font-size: 14px;
  color: ${COLORS.white};
  background-color: ${(p) =>
    p.variant === "on-sale"
      ? COLORS.primary
      : p.variant === "new-release"
      ? COLORS.secondary
      : "none"};
`;

export default Flags;
