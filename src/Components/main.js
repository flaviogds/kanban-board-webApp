export const order = target => {
    target.sort((a,b) => {
      if(a.position > b.position){
        return 1;
      }
      if(a.position < b.position){
        return -1;
      }
      else {
        return 0;
      }
    })
  }