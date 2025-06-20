// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function OPTIONS() {
  // Manejo de preflight
  return NextResponse.json({}, {
    status: 200,
    headers: corsHeaders,
  });
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // o el dominio exacto
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function POST(req) {
  const { fullname, email, phone, message } = await req.json();
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASS,
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

  return new NextResponse(JSON.stringify({ message: 'Recibido' }), {
    status: 200,
    headers: corsHeaders,
  });
  } catch (error) {
    console.error(error);
   return new NextResponse(JSON.stringify({ message: 'Recibido' }), {
    status: 500,
    headers: corsHeaders,
  });
  }
}
 