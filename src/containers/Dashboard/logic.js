import { FEE, STAKING, TOKEN } from '../../constants/contract';

export const makeAllSmartContract = (library, staking, fee, token,
  onSetContractStaking, onSetContractFee, onSetContractToken) => {
  if (!!library && !staking && !fee && !token) {
    onSetContractStaking(new library.eth.Contract(STAKING.jsonInterface, STAKING.address));
    onSetContractFee(new library.eth.Contract(FEE.jsonInterface, FEE.address));
    onSetContractToken(new library.eth.Contract(TOKEN.jsonInterface, TOKEN.address));
  }
};

export default makeAllSmartContract;
