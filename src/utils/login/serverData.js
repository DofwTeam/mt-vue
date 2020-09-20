import md5 from 'md5'

export default function serverData() {
    const iphoneValue = document.getElementsByClassName('iphone')[0].value
    const passwrodValue = document.getElementsByClassName('password')[0].value
    const data = {}
    data.password = md5(passwrodValue)
    data.iphone = iphoneValue
    return data
}
