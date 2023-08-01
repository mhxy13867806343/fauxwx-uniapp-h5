// Throttle function
export function toolThrottle(func, delay=2000) {
    let lastCall = 0;
    
    return function (...args) {
        const now = new Date().getTime();
        
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Debounce function
export function toolDebounce(func, delay=2000) {
    let timeout;
    
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
