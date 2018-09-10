import wepy from 'wepy'
import { bemHelper } from '../utils/helper'
/**
 * bem mixin
 *
 */
export default class BemMixin extends wepy.mixin {
  bem(...val){
    return bemHelper.methods.b.apply(this, val)
  }
}
