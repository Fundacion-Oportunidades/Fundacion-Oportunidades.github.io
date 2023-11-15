import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

function enviarCorreo(destinatario, remitente, asunto, contenido) {
  const msg = {
    to: destinatario,
    from: remitente,
    subject: asunto,
    text: contenido,
  };

  return sgMail.send(msg);
}

export default enviarCorreo;
