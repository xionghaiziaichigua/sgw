import Vue from 'vue';

Vue.directive('reset',{
    bind(el, binding, vnode){

        let eventype = binding.arg || 'click'
        el.addEventListener(eventype,e=>{
            window.scrollTo(0,0)
        })
    },
    bind(el,binding,vnode){
        let eventType = binding.arg || "click"
        el.addEventListener(eventType,e=>{
            window.scrollTo(0,0)
        })
    }
})