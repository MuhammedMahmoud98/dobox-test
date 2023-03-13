import {createActionGroup, props} from "@ngrx/store";


export const testActions = createActionGroup({
  source: 'TEST',
  events: {
    'Increment': props<{value?: number}>(),
    'Decrement': props<{value?: number}>()
  }
})
