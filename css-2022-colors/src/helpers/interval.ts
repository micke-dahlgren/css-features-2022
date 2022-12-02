import { ref } from 'vue';
const progressSpeedMs = 60;
const clearAllTimeouts = ():void => {
  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearInterval(i);
    }
  }, 0);
}

const progressTimer = (iterator:number, limit:number, stop?:boolean) => {
  if(stop){
    clearAllTimeouts();
    return iterator;
  }
  if (iterator < limit) {
    setTimeout(() => {
      iterator += 1;
      progressTimer(iterator, limit);
    }, progressSpeedMs)
  } else {
    iterator = 0;
    progressTimer(iterator, limit);
  }
  return iterator;
}

export default progressTimer;