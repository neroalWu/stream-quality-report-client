export default class Util {
    private static instance: Util | null = null
    static get Instance() {
        if (!Util.instance) {
            Util.instance = new Util()
        }
        return Util.instance
    }

    private constructor() {}

    public FormatDate(timestamp: number): string {
        const date = new Date(timestamp)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')

        return `${year}-${month}-${day} ${hours}:${minutes}`
    }
}
