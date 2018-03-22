import { TYPE_SIZE } from '../styles/vars';
import makeTypeComponent from '../utils/makeTypeComponent';

const result = makeTypeComponent(TYPE_SIZE.jumbo);

export const TypeJumbo = result.Type;
const StyleTypeJumbo = result.StyledType;
export default StyleTypeJumbo;
