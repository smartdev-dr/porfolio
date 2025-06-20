// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { fullname, email, phone, message } = await req.json();
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465, // Usa 587 si prefieres TLS
    secure: true, // true para 465, false para 587
    auth: {
      user: process.env.ZOHO_EMAIL, // tu correo de Zoho
      pass: process.env.ZOHO_PASS,  // tu contraseña o app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"SmartControl" <${process.env.ZOHO_EMAIL}>`,
      to:'smartdev.dr@gmail.com',
      subject: "Solicitud de demo smartcrol",
      text:

        `Nombre Completo: ${fullname} 
        Correo de contacto: ${email}
      Contacto: ${phone}
        Mensaje: ${message}
        `,
      
    });

    return NextResponse.json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}
 