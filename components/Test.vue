<template>
  <div>{{ test }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Test',
    computed: {
        ...mapState({
            test: state => state.storetest.test
        })
    }
}
</script>
