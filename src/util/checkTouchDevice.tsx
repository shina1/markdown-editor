// export default function isTouchDevice() {
//     return (('ontouchstart' in window) ||
//        (navigator.maxTouchPoints > 0) ||
//        (navigator.msmaxTouchPoints > 0));
//   }

export default function isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
  }