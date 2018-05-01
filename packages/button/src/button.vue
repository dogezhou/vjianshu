<template>
  <a
    class="button"
    :disabled="disabled"
    :class="type"
  >
    <slot></slot>
  </a>
</template>
<script>
  export default{
    name: 'JButton',
    props: {
      type: {
        type: String,
        default: ''
      },
      disabled: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../common.scss';

.button {
    display: inline-block;  // 可能使用在 a 标签或者 button, span 上
    padding: 6px 12px;
    border: 1px solid $theme;
    border-radius: 20px;
    color: $theme;
    font-size: 15px;
    text-decoration: none;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
}

.button.color-invert {
    background-color: $theme;
    color: #fff;
}

.button.color-grey {
    color: #fff;
    background-color: #a5a5a5;
    border-color: #a5a5a5;
}

.button.color-green {
    color: #fff;
    background-color: #8bc453;
    border-color: #8bc453; 
}

.button.color-blue {
    color: #fff;
    background-color: #6facf4;
    border-color: #6facf4; 
}

.button.button-wide {
    display: block;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    color: #787878;
    background-color: #f7f7f7;
}
</style>
