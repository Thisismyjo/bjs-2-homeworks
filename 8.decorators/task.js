//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
    function wrapper(...args) {
        const hash = md5(args);
        let objectInCache = cache.find((item) => item.hash == hash);
        console.log(objectInCache);
        if (objectInCache) {
            console.log("Из кэша: " + objectInCache.result);
            return "Из кэша: " + objectInCache.result;
        }

        const result = func(...args);

        cache.push({hash, result});

        if (cache.length > 5) {
            cache.shift();
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let first = true;
    function wrapper(...args) {
        if (first) {
            first = false;
            func.apply(this, args);
            wrapper.count++;
            wrapper.allCount++;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                wrapper.count++;
            }, delay);
            wrapper.allCount++;
        }
    };
    wrapper.count = 0;
    wrapper.allCount = 0;
    
    return wrapper;
}