class Captcha extends HTMLElement {

    constructor() {
        super()
    }


    connectedCallback() {
        this.getModel()
    }

    disconnectedCallback() {

    }


    getModel() {

        return new Promise((res, rej) => {
            fetch('https://localhost:44391/umbraco/api/captcha/getcaptchaimage', { mode: 'cors' })
                .then((response) => response.json())
                .then((data) => {
                    this.renderHtml(data)
                    res()
                })
                .catch((error) => rej(error))
        })
    }

    renderHtml(captcha) {
        this.attachShadow({ mode: 'open'})
   
       
            this.wrapper = document.createElement('div')
            this.capcthaImage = document.createElement('img')
            this.capcthaImage.setAttribute('src', captcha.image)
            this.wrapper.appendChild(this.capcthaImage)
            this.shadowRoot.append(this.wrapper)

       

    }


    getCaptcha() {
        let result;


                 
    }


}