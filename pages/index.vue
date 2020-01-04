<template>
  <div>
    <home />
    <news />
    <care-pillars />
  </div>
</template>

<script>
import Home from '../components/Home';
import News from '../components/News';
import CarePillars from '../components/CarePillars';

export default {
  components: {
    Home,
    News,
    CarePillars,
  }
}
</script>
