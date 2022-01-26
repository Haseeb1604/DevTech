let $ = selector => {
    const self = {
        element: document.querySelectorAll(selector),
        html: (val)=>{
            if(val !== undefined){
                self.each(e => e.innerHTML = val);
                return self;
            }

            if(self.element.length <= 1) return self.element[0]
            return self.element;
        },
        text: str => {
            if (str) 
                return self.element.each(e => e.innerText = str);
            
            return this.length && this[0].innerText;
          },
        append: html => self.each(e => {
            e.innerHTML += html;
            return self;
        }),
        addClass: classes => self.each(el =>{ 
            el.classList.add(classes);
            return self;
        }),
        removeClass: className => self.each(e =>{
            e.classList.remove(className);
            return self;
        }),
        on: (event, callback) => self.each(el => {
            el.addEventListener(event, callback);
            return self;
        }),
        off: (event, callback) => self.each(el => {
            el.removeEventListener(event, callback)
            return self;
        }),
        hide: () => self.element.each(el => {
            el.style.display = 'none';
            return self;
        }),
        show: () => self.element.each(el =>{
            el.style.display = 'block';
            return self;
        }),
        attr: (name, value) =>{
            if(value == null) return self.element.getAttribute(name)
            else self.element.setAttribute(name, value)
            return self;
        },
        each: callback => {
            for(let i = 0; i < self.element.length; i++) {
                callback(self.element[i]);
            }
            return self;
          }
    }

    // if(self.element.length <= 1) return self.element[0]
    return self;
}