import { TYPE_SIZE } from '../styles/vars';
import makeTypeComponent from '../utils/makeTypeComponent';

const result = makeTypeComponent(TYPE_SIZE.small);

export const TypeSmall = result.Type;
const StyleTypeSmall = result.StyledType;
export default StyleTypeSmall;
