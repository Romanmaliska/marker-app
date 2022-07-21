class Marker {
    constructor() {
        this.characters =
            "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._";
    }

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

    saveToCookies() {
        const currentTime = new Date().getTime();
        const expireTime = new Date(currentTime + 1000 * 60 * 60 * 24 * 365);

        if (this.getSavedCookies() === undefined) {
            document.cookie = `id=${this.generateUniqueId()}; expires=${expireTime}`;
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Marker();
        }

        return this.instance;
    }
}

Marker.getInstance().saveToCookies();
