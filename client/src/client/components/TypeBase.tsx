import { TYPE_SIZE } from '../styles/vars';
import makeTypeComponent from '../utils/makeTypeComponent';

const result = makeTypeComponent(TYPE_SIZE.base);

export const TypeBase = result.Type;
const StyleBase = result.StyledType;
export default StyleBase;
