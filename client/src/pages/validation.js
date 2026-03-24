
export const validateName = name => {
    const regexp = /([!-@])|([{-~])/;
    const regex = /[A-ZА-Яa-zа-я]{1,}/;

    return !regexp.test(name)
        ? (!regex.test(name) ? "Заполните поле" : "") : "Имя не должно содержать цифры и специальные символы";
}

export const validateEmail = email => {
    const regex = /[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
    return !regex.test(email) ? "Неверный адрес электронной почты" : "";
}

export const validatePhone = phone => {
    const exp = /.{16,}/;
    return exp.test(phone) ? "" : "Неверный номер"
}

export const validateDate = (date) => {
    let currentDateSeconds = Date.now();
    let dateSeconds = Date.parse(date);

    if (dateSeconds > (currentDateSeconds + 91 * 24 * 60 * 60 * 1000)) 
        return 'Бронирование не больше чем за 3 месяца'
    else if (dateSeconds > currentDateSeconds) return ''
    else return 'Этот день уже прошёл'
}