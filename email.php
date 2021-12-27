<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/vendor/phpmailer/src/Exception.php';
require_once __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/vendor/phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$message=$_POST["data"];
try {
    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; // for detailed debug output
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->SMTPDebug = 2;
    $mail->Username = 'prodajaikona123@gmail.com'; // YOUR gmail email 
    $mail->Password = 'xxxxxxxx'; // YOUR gmail password

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    // Sender and recipient settings
    $mail->setFrom('prodajaikona123@gmail.com', 'Pitanje');
    $mail->addAddress('prodajaikona123@gmail.com', 'Receiver Name');
    $mail->addReplyTo('prodajaikona123@gmail.com', 'Sender Name'); // to set the reply to

    // Setting the email content
    $mail->IsHTML(true);
    $mail->Subject = "Upit sa sajta";
    $mail->Body = $message;
    $mail->AltBody = '';
    sleep(5);
    $mail->send();
    echo "Email message sent.";
    header("Location: index.php?UspesnoPoslato"); 
} catch (Exception $e) {
    echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
    header("Location: index.php?UspesnoPoslato");
}
?>
