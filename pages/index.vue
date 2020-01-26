<template>
  <div>
    <home />
    <news />
    <photo-banner
      :title="'МИ працюємо 7 днів на тиждень'"
      :src="require(`~/assets/time.jpg`)"
      :alt="'годинник'"
      :show-btns="false"
    />
    <care-pillars />

    <photo-banner
      :title="'Індивідуаільний підхід до кожного пацієнта'"
      :src="require(`~/assets/doctor.webp`)"
      :alt="'лікар професіонал'"
      :show-btns="false"
    />
    <photo />
  </div>
</template>

<script>
import Home from '../components/Home';
import News from '../components/News';
import CarePillars from '../components/CarePillars';
import Photo from '../components/Photo';
import PhotoBanner from "../components/elements/PhotoBanner";

export default {
  components: {
    PhotoBanner,
    Home,
    News,
    CarePillars,
    Photo,
  }
}
</script>
