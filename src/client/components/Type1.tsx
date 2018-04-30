import { TYPE_SIZE } from '../styles/vars';
import makeTypeComponent from '../utils/makeTypeComponent';

const result = makeTypeComponent(TYPE_SIZE.t1);

export const Type1 = result.Type;
const StyleType1 = result.StyledType;
export default StyleType1;
