  function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        const hash = args.join(','); // получаем правильный хэш
        let objectInCache = cache.find((item) => item === hash); // ищем элемент, хэш которого равен нашему хэшу
        let result = cache[objectInCache]
        if (!objectInCache) { // если элемент не найден
          let result = cache[hash] = func(...args); // в кэше результата нет - придётся считать
        cache.push(hash) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
        }
        else {
        console.log("Из кэша: " + result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + result;
        }    
    }
    return wrapper;
  }


  function debounceDecoratorNew(func, ms) {
    let timerId = null;
    function wrapper (...args){
      if (timerId === null) {
        func(...args);
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        return func(...args)
      }, ms)
    }
    return wrapper;
}

  
  function debounceDecorator2(func, ms) {
    let timerId = null;
    function wrapper(...args){
      if (timerId === null) {
        func(...args);
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        return func(...args)
      }, ms);
      wrapper.count++;
    }
    return wrapper;
}
