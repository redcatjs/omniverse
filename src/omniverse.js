export container from 'di-ninja'

export {

  instanceOf,
  Interface,

  InterfacePrototype,
  InterfaceClass,

} from 'di-ninja/dist/interface-prototype'

export mixin from './mixin'

export {

  mix,
  Mixin,

} from 'mixwith'



export {
  //For Properties and Methods
  readonly,
  nonconfigurable,
  decorate,
  extendDescriptor,

  //For Properties
  nonenumerable,
  lazyInitialize,

  //For Classes and Methods
  autobind,

  //For Methods
  deprecate,
  suppressWarnings,
  enumerable,
  override,
  time,
  profile,


  //Helpers
  applyDecorators,

} from 'core-decorators'

export debug from 'decorator-debug'

export memoize from './memoize'

export  { conditional } from 'conditional-decorator'
export condition from './condition'



import {
  InterfacePrototype
} from 'di-ninja/dist/interface-prototype'
import container from 'di-ninja'
container.setInterfacePrototypeDefault(InterfacePrototype);

export compose from './compose'
