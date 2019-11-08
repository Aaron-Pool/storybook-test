import Vuex from 'vuex'
import { storiesOf } from '@storybook/vue'
import Test from '../../components/Test'
import * as storetest from '../../store/storetest'

storiesOf(`Test`, module)
  .add(
    `Test`,
    () => ({
      store: new Vuex.Store({ modules: { storetest } }),
      components: {
        Test
      },
      template: `<Test/>`
    })
  )
