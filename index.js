const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    port: 993,
    secure: true,
    auth: {
        user: "shoxjahonniyatov@gmail.com",
        pass: "n l i k y u j f f c a a q h i i"
    }
});
const details = {
    from: "shoxjahonniyatov@gmail.com",
    to: "gulnorakomilava@gmail.com",
    subject: "salom",
    text: "salom hurmatli obunachilarimiz sizlarga shuni aytib o'tamanki bizda xozirda juda katta aksiya ketmoqda barcha kursalimizga 50% chegirma ketmoqda shoshiling aksiyalar cheklangan"
};
mailTransporter.sendMail(details, (err) => {
    if (err) {
        console.log(`Hatolik: ${err}`);
    } else {
        console.log("Hammasi Yaxshi");
    }
});
