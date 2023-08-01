import useStroe from "@/hooks/useStroe";
import useForm from "@/hooks/useForm";
import {isProduction} from './env.js'
const {isLoginShow}=useForm()
export function requests(opt) {
    const {getStorageSync,clearStorageSync}=useStroe()
  
    const {url,method,message,forbidClick,loadingType,duration,data}=opt
    return new Promise((resolve, reject) => {
        uni.showLoading({
            title: message||'加载中...',
            mask: true
            
        })
        const _token=getStorageSync('token')
        uni.request({
            url: isProduction+url,
            data,
            method: method||'GET',
            header: {
                'content-type': 'application/json',
                Authorization: `Bearer ${_token}`
            },
            success(response) {
                uni.hideLoading()
                const {code,data,msg} = response.data
                if(response.data.detail?.code==401){
                    clearStorageSync()
                    // 获取当前页面的路由信息
                    const currentPage = getCurrentPages()[getCurrentPages().length - 1];
                    const currentRoute = currentPage.route;

// 使用 redirectTo 刷新当前页面
                    uni.redirectTo({
                        url: '/' + currentRoute,
                        success: () => {
                            console.log('success')
                            
                        },
                        fail: () => {
                            console.log('fail')
                        },
                        complete: () => {
                            console.log('complete')
                            isLoginShow.value=true
                        }
                    });
                    
                    
                }if (code === 200) {
                    uni.showToast({
                        title: msg,
                        icon: 'none',
                    })
                    resolve(response.data);
                    
                } else{
                    // uni.showToast({
                    //     title: msg,
                    //     icon: 'none',
                    // })
                    reject(response.data);
                   
                }
            },
            fail(err) {
                uni.showToast({
                    title: '请求失败',
                    icon: 'none',
                })
                uni.hideLoading()
                reject(err);
              
            }
        });
    });
}
export function uploadFile(opt) {
    const {url,file}=opt
    const {getStorageSync}=useStroe()
    const token = getStorageSync('token')
    if (!token) {
        isLoginShow.value=true
        return
    }
    const promise = new Promise((resolve, reject) => {
        const uploadTask = uni.uploadFile({
            url: isProduction+url,
            filePath: file.content,
            name: 'file',
            header: {
                Authorization: `Bearer ${token}`
            },
            success: (res) => {
                const data = JSON.parse(res.data)
                if (data.code === 200) {
                    resolve(data)
                } else {
                    reject(data)
                }
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
    return promise
}
