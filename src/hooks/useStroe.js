//缓存相关
export default ()=>{
    const setStorageSync=(key,data={})=>{
        uni.setStorageSync(key,  data);
    }
    const getStorageSync=(key)=>{
        if(key){
            return uni.getStorageSync(key)
        }
        return {}
    }
    const removeStorageSync=(key)=>{
        uni.removeStorageSync(key);
    }
    const clearStorageSync=()=>{
        uni.clearStorageSync();
    }
    return {
        setStorageSync,
        getStorageSync,
        removeStorageSync,
        clearStorageSync
    }
}
