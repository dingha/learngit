import{emitter,throttle,partial } from '. /index. js '

const TRIGGER_OFFSET = 100

export const SCROLL_TO_END = Symbol('scroll-to-end')

export default (el,triggerOffset = TRIGGER_OFFSET) => {
    handleScroll = partial( handleScroll, null, triggerOffset)

    el.addEventListener( 'scroll',throttle( handleScroll))
}

function handleScroll(e,triggerOffset) {
    const {scrollTop,scrollHeight,clientHeight }=this

    if(scrollHeight - (scrollTop + clientHeight) < triggerOffset){
        emitter.emit(SCROLL_TO_END);
    }
}