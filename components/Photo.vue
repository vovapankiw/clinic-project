<template>
  <div
   class="photo__container"
  >
    <section id="discoveries">
      <div class="photo__container__title">
        <h2>
          Наша амбулаторія
        </h2>
      </div>
      <ul class="discovery">
        <li
          v-for="(photo, i) in photos"
          :key="photo.id"
        >
          <figure class="myPhoto">
            <img
              :src="`https://picsum.photos/400/400?image=${ i + 10}`"
            >
          </figure>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Photo",
    data() {
      return {
        photos: [
          {
            id: 1,
            src:'',
            alt: '',
          } ,
          {
            id: 2,
            src:'',
            alt: '',
          },
          {
            id: 3,
            src:'',
            alt: '',
          },
          {
            id: 4,
            src:'',
            alt: '',
          },
          {
            id: 5,
            src:'',
            alt: '',
          },
          {
            id: 6,
            src:'',
            alt: '',
          },
          {
            id: 7,
            src:'',
            alt: '',
          },
          {
            id: 8,
            src:'',
            alt: '',
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .photo__container {
    padding: 25px 0 0 0;

    &__title {
      color: #4496d4;
      font-size: 30pt;
      font-family: open_sanslight;
      line-height: 130%;
      text-align: center;
      padding: 15px;
    }
  }

  .discovery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style-type: none;
    padding: 15px 0 0 0;
  }

  .myPhoto{
    width: 100%;
    margin:0;
    overflow: hidden;
    background-color: #000;
  }

  .myPhoto img{
    opacity: 0.7;
    width: 100%;
    height: auto;
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
    -webkit-transition: -webkit-transform 0.5s;
    transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
  }

  .myPhoto img:hover{
    opacity: 1;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
</style>
