import styled from "@emotion/styled";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { Text } from "global/packages/src";
import { CInput } from "global/packages/src/components/atoms/Input";
import { truncateNumber } from "global/utils/utils";
import { BaseToken } from "pages/bridging/config/interfaces";
import { useState } from "react";
interface Props {
  tokenBalance: BigNumber;
  selectedToken: BaseToken;
}
const AmountBox = ({ tokenBalance, selectedToken }: Props) => {
  const [amount, setAmount] = useState("0.00");
  return (
    <Styled>
      <CInput
        style={{
          backgroundColor: "transparent",
          width: "100%",
          height: "54px",
        }}
        placeholder={`amount :  ${truncateNumber(
          formatUnits(tokenBalance, selectedToken.decimals),
          6
        )} `}
        value={amount}
        onChange={(val) => {
          setAmount(val.target.value);
        }}
      />
      <button
        className="maxBtn"
        onClick={() => {
          setAmount(
            truncateNumber(formatUnits(tokenBalance, selectedToken.decimals), 6)
          );
        }}
      >
        <Text>max</Text>
      </button>
    </Styled>
  );
};

const Styled = styled.div`
  height: 58px;
  background: #060606;
  border: 1px solid #2e2d2d;
  border-radius: 4px;
  display: flex;
  align-items: center;
  min-width: 18rem;
  width: 100%;

  .maxBtn {
    height: 100%;
    width: 7rem;
    margin-left: 3px;
    background-color: #252525;

    border: none;
    &:hover {
      background-color: #333;
      cursor: pointer;
      p {
        color: white;
      }
    }

    p {
      color: #999;
    }
  }
`;

export default AmountBox;
