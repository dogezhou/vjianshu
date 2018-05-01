import JButton from './button/index.js';
import JTabs from './tabs/index.js';

const components = [
  JButton,
  JTabs
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}