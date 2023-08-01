export default ()=>{
    const instance = getCurrentInstance();
    const globalProperties=instance.appContext.config.globalProperties
    console.log(globalProperties.$gday().format('YYYY-MM-DD'));
    return {
    
    }
}
