class Marker {
    constructor() {
        this.characters =
            "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._";
    }

    /**
     * Get the characters value and iterate over its values and asign the random values to uniqueId
     * @function generateUniqueId
     * @return {string} uniqueId value
     */

    generateUniqueId() {
        let uniqueId = "";
        for (let i = 0; i < 50; i++) {
            uniqueId +=
                this.characters[
                    Math.floor(Math.random() * this.characters.length)
                ];
        }

        return uniqueId;
    }

    /**
     * Check if there is saved cookie in Cookies
     * @function getSavedCookies
     * @return {(string|undefined)} savedCookie value
     */

    getSavedCookies() {
        const cookieName = "id=";
        const decodedCokkies = decodeURIComponent(document.cookie);
        const decodedCokkiesArr = decodedCokkies.split("; ");
        let savedCookie;
        decodedCokkiesArr.forEach((cookie) => {
            if (cookie.startsWith(cookieName))
                savedCookie = cookie.substring(cookieName.length);
        });
        return savedCookie;
    }

    /**
     * Get the savedCookie value, uniqueId value and if savedCookie is undefined saves the uniqueId into Cookies
     * @function getSavedCookies
     */

    saveToCookies() {
        const currentTime = new Date().getTime();
        const expireTime = new Date(currentTime + 1000 * 60 * 60 * 24 * 365);

        if (this.getSavedCookies() === undefined) {
            document.cookie = `id=${this.generateUniqueId()}; expires=${expireTime}`;
        }
    }

    /**
     * Get instance of the class
     * @return {Marker} A Marker object
     */

    static getInstance() {
        if (!this.instance) {
            this.instance = new Marker();
        }

        return this.instance;
    }
}

Marker.getInstance().saveToCookies();
