<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "JTabPane",
  props: {
    name: {required: true},
    selected: {default: false}
  },
  data() {
    return {
        isActive: this.selected
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "../../common.scss";
.tabs {
  ol.tabs-bar {
    list-style: none;
    padding-left: 0;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 20px;
    li {
      position: relative;
      float: left;
      padding: 8px 0;
      border-bottom: 1px solid transparent;
      a {
        padding: 13px 20px;
        font-size: 15px;
        font-weight: 700;
        line-height: 25px;
        text-decoration: none;
        color: #969696;
        i {
          margin-right: 6px;
        }
      }
      a::after {
        content: "";
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 50%;
        width: 100%;
        height: 2x;
        transform: translate(-50%);
      }
      a:hover {
        color: #2f2f2f;
      }
      @keyframes bottom_border {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
      a:hover::after {
        height: 2px;
        background: #2f2f2f;
        animation: bottom_border 0.2s linear forwards;
      }
    }
    li.active a {
      color: #2f2f2f;
    }
    li.active a::after {
      height: 2px;
      background: #2f2f2f;
    }
  }
  ol.tabs-bar::after {
    content: "";
    display: block;
    clear: both;
  }
  ol.tabs-content {
    padding-left: 0;
    li {
      display: none;
    }
    li.active {
      display: block;
    }
  }
}
</style>
