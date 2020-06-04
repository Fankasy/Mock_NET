const initState = {
    data: []
  }
  
  const list = (state=initState, action) => {
    switch (action.type) {
      case "CHANGE":
        return state.data.filter(obj=>obj.id===action.id)[0]['category']==='mylist'?
        {data:[...state.data.filter(obj=>obj.id!==action.id),{...state.data.filter(obj=>obj.id===action.id)[0],'category':'recommendation'}]}:
        {data:[...state.data.filter(obj=>obj.id!==action.id),{...state.data.filter(obj=>obj.id===action.id)[0],'category':'mylist'}]}
      case "UPDATEUSERS":
        return {data:action.data};
      default:
        return state;
  
    }
  };
  
  export default list;
  