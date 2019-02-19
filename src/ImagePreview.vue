<template>
  <div :class="{'is-active': isActive}" class="preview-image" @click="remove">
    <img
      :src="img.src"
      :style="{width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`}"
    >
  </div>
</template>

<script>
import { hasScrollbar, extendStyle, getScrollbarWidth } from "./utils";

export default {
  name: "ImagePreview",
  props: {
    img: {
      type: HTMLImageElement,
      required: true
    }
  },
  data() {
    return {
      width: null,
      height: null,
      top: null,
      left: null,
      isActive: false
    };
  },
  created() {
    const { img } = this;
    this.initSize();
    const body = document.documentElement;
    const scrollbarWidth = getScrollbarWidth();
    extendStyle(document.body.style, {
      overflow: "hidden",
      paddingRight: hasScrollbar() ? `${scrollbarWidth}px` : null
    });
    const scale = img.offsetHeight / img.offsetWidth;
    const naturalWidth =
      img.naturalWidth > body.offsetWidth - 100
        ? body.offsetWidth - 100
        : img.naturalWidth;
    const naturalHeight = naturalWidth * scale;
    this.$nextTick(() => {
      this.isActive = true;
      this.width = naturalWidth;
      this.height = naturalHeight;
      let top = (body.clientHeight - naturalHeight) / 2;
      this.top = top > 0 ? top : 0;
      this.left = (body.offsetWidth - naturalWidth) / 2;
    });
  },
  methods: {
    initSize() {
      const { img } = this;
      const { top, left } = img.getBoundingClientRect();
      this.isActive = false;
      this.width = img.clientWidth;
      this.height = img.clientHeight;
      this.top = top;
      this.left = left;
    },
    remove() {
      this.initSize();
      setTimeout(() => {
        this.$destroy();
        this.$el.parentElement.removeChild(this.$el);
        extendStyle(document.body.style, {
          overflow: null,
          paddingRight: null
        });
      }, 300);
    }
  }
};
</script>

<style lang="less">
.preview-image {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  overflow: auto;
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0, 1) 0s;
  &.is-active {
    background-color: rgba(26, 26, 26, 0.65);
  }
  img {
    position: absolute;
    transition: 0.4s cubic-bezier(0.4, 0, 0, 1) 0s;
    cursor: zoom-out;
  }
}
</style>