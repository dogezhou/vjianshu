import Button from './button/index.js';
import {Tabs, TabPane} from './tabs/index.js';
import Modal from './modal/index.js';


const components = [
  Button,
  Tabs,
  TabPane,
  Modal
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}