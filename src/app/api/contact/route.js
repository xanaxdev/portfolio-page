import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        // Parsowanie danych z formularza
        const { name, email, message } = await req.json();

        // Walidacja danych
        if (!name || !email || !message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        // Konfiguracja transportera nodemailer z Twoim serwerem SMTP
        const transporter = nodemailer.createTransport({
            host: 'mail-serwer201905.lh.pl',
            port: 465, // Port SMTP (SSL)
            secure: true, // Użycie SSL
            auth: {
                user: process.env.SMTP_USER, // Użytkownik
                pass: process.env.SMTP_PASS, // Hasło do konta e-mail
            },
        });

        // Treść wiadomości e-mail
        const mailOptions = {
            from: email, // Nadawca
            to: 'kacper.placzek@coalcom.pl', // Odbiorca
            subject: `Kontakt Portfolio - Formularz | ${name}`,
            text: `Otrzymałeś nową wiadomość z Portfolio od: ${name} (${email}): \n\n${message}`,
        };

        // Wysłanie wiadomości e-mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending message', error: error.message }, { status: 500 });
    }
}
