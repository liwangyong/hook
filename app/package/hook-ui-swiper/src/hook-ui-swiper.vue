<template>
  <div
    class="hook-swiper-box"
    :style="{ width: `${width}px`, height: `${(width * 9) / 16}px` }"
  >
    <ul class="swiper-box">
      <li class="swiper-image" v-for="item in images" :key="item.id">
        <a :href="'http://'+item.link" target='blank' v-if="item.link">
          <img
            :src="item.src"
            :title="item.title"
            :style="{ width: `${width}px`, height: `${(width * 9) / 16}px` }"
          />
        </a>
        <img
          :src="item.src"
          :title="item.title"
          :style="{ width: `${width}px`, height: `${(width * 9) / 16}px` }"
          v-else
        />
      </li>
    </ul>
    <p class="toLeft" v-if="showArrow" @click="move('left')"></p>
    <p class="toRight" v-if="showArrow" @click="move('right')"></p>
    <div class="circle-wrap" v-if="showCircle">
      <p v-for="(item, current) in images" :key="current">
        <span
          :class="['circle', index === current && 'activited']"
          @click="choose(current)"
        >
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  props: {
    images: {
      type: Array,
      required: true,
    },
    delay: {
      type: Number,
      default: 3000,
    },
    width: {
      type: Number,
      default: 800,
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
    showCircle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      index: 0,
    };
  },
  mounted() {
    this.autoRun();
  },
  beforUnmount() {
    this.stopMoving();
  },
  methods: {
    stopMoving() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    startRun({ delay, len, moveDistance, swiperBox }) {
      this.timer = setInterval(() => {
        this.index += 1;
        if (this.index === len) {
          this.index = 0;
        }
        swiperBox.style.transform = `translateX(${
          -moveDistance * this.index
        }px)`;
      }, delay);
    },
    autoRun() {
      const [{ delay, images }, swiperBox, swiperItem] = [
        this,
        document.getElementsByClassName("swiper-box")[0],
        document.getElementsByClassName("swiper-image")[0],
      ];
      console.log(images)
      const [len, moveDistance] = [images.length, swiperItem.clientWidth];
      this.startRun({ delay, len, moveDistance, swiperBox });
    },
    move(direction) {
      this.stopMoving();
      const [{ delay, images }, swiperBox, swiperItem] = [
        this,
        document.getElementsByClassName("swiper-box")[0],
        document.getElementsByClassName("swiper-image")[0],
      ];
      const [len, moveDistance] = [images.length, swiperItem.clientWidth];

      if (direction === "right") {
        (this.index === len - 1 && (this.index = 0)) || (this.index += 1);
      }
      if (direction === "left") {
        (this.index === 0 && (this.index = len - 1)) || (this.index -= 1);
      }

      swiperBox.style.transform = `translateX(${-moveDistance * this.index}px)`;
      this.startRun({ delay, len, moveDistance, swiperBox });
    },
    choose(idx) {
      this.stopMoving();
      const [{ delay, images }, swiperBox, swiperItem] = [
        this,
        document.getElementsByClassName("swiper-box")[0],
        document.getElementsByClassName("swiper-image")[0],
      ];
      const [len, moveDistance] = [images.length, swiperItem.clientWidth];

      this.index = idx;

      swiperBox.style.transform = `translateX(${-moveDistance * this.index}px)`;
      this.startRun({ delay, len, moveDistance, swiperBox });
    },
  },
};
</script>
<style lang="scss" scoped>
.hook-swiper-box {
  position: relative;
  overflow: hidden;
  .toLeft,
  .toRight {
    width: 30px;
    height: 30px;
    font-size: 36px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #fff;
    background: url("./assets/left.png");
    background-size: cover;
  }
  .toLeft {
    left: 10px;
  }
  .toRight {
    right: 10px;
    transform: rotateY(180deg);
  }
  .circle-wrap {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    p {
      margin: 0;
    }
    .circle {
      margin: 0 10px;
      width: 10px;
      height: 10px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 50%;
      cursor: pointer;
    }
    .activited {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .swiper-box {
    display: flex;
    // scroll-behavior: smooth;
    // scroll-snap-type: x mandatory;
    // overflow: hidden;
    margin: 0;
    padding: 0;
    transition: all 0.5s linear;
    .swiper-image {
      list-style: none;
      width: 100%;
      height: 100%;
      scroll-snap-align: start;
      flex: 0 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>