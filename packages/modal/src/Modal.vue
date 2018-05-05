<template>
<div>
    <div class="weiDialog">
        <div class="weiDialog-wrapper">
            <header class="weiDialog-header">
                <slot name="header"></slot>
            </header>
            <main class="weiDialog-main"><slot></slot></main>
            <footer class="weiDialog-footer">
                <button @click="$emit('confirm');$emit('close')">确定</button>
                <button @click="$emit('close')">取消</button>
            </footer>                
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "JModal",
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "../../common.scss";
.modal {
    font-size: 13px;
    color: #969696;
    cursor: pointer;
}
.modal:hover {
    color: #333;
}
.weiDialog {
    background-color: hsla(0,0%,100%,.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes fade-in {
        0% { 
            margin-top: -30px;
            opacity: 0.3;
        }
        100% { 
            margin-top: 0px;
            opacity: 1;
        }
    }
    @keyframes fade-out {
        0% { 
            margin-top: 0px;
            opacity: 1;
        }
        100% { 
            margin-top: -30px;
            opacity: 0.3;
        }
    }
    .weiDialog-wrapper.fade-in {
        animation: 0.2s fade-in ease-in;
    }
    .weiDialog-wrapper.fade-out {
        animation: 0.1s fade-out ease-in;
        animation-fill-mode: forwards;
    }    
    .weiDialog-wrapper {
        box-shadow: 0 5px 25px rgba(0,0,0,.1);
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 6px;
        background: white;
        min-width: 200px;
        max-width: 400px;
        .weiDialog-header {
            padding: 20px;
            border-bottom: 1px solid #e5e5e5;
            font-size: 17px;
            font-weight: 700;
            color: #333;
        }
        .weiDialog-main {
            padding: 20px;
            padding-bottom: 10px;
            font-size: 15px;
            color: #333;
        }
        .weiDialog-footer {
            padding: 20px;
            text-align: right;
            button {
                margin-left: 10px;
                padding: 6px 12px;
                border-radius: 20px;
                border: 1px solid transparent;
                background-color: white;
                color: $theme;
                font-size: 15px;
                cursor: pointer;
                outline: 0;     
            }
            button:hover {
                border: 1px solid $theme;
            }
        }
    }    
}
</style>
