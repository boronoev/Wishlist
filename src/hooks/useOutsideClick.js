import { useEffect } from "react";

export default function useOutsideClick (ref, areaRef, onOutsideClick) {

  useEffect(() => {
    
    const check = (e) => {
      const {current: target} = ref;
      const {current: area} = areaRef;
      // console.log(target, area, e.target)
      if(!target ||  target.contains(e.target) || !area.contains(e.target)) return;
      onOutsideClick(e);
    }
    document.addEventListener('click', check);
    return () => document.removeEventListener('click', check);
  },[])
}
