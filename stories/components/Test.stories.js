import Vuex from 'vuex'
import { storiesOf } from '@storybook/vue'
import Test from '../../components/Test'
import { state } from '../../store/storetest'

storiesOf(`Test`, module)
  .add(
    `Test`,
    () => ({
      store: new Vuex.Store({ state: state() }),
      components: {
        Test
      },
      template: `<Test/>`
    })
  )
