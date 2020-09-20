import md5 from 'md5'

export default function serverData(data) {
    const password = md5(data.password)
    return {
        password,
        iphone: data.iphone
    }
}
