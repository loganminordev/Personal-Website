<?php

function send_message( $from, $to, $subject, $message_content )
{
    //Include the phpmailer files
    require_once( '/var/www/html/PHPMailerAutoload.php' );

    //Initiate the mailer class
    $mail = new PHPMailer();
  
  	$mail->isSMTP();
	$mail->Host = 'mail.ruppertcompanies.com;10.42.70.232';
	$mail->Username = 'LMinor@ruppertcompanies.com';
	$mail->Password = 'QazWexExort5';
	$mail->SMTPSecure = 'tls';
	$mail->Port = 25;

	$mail->setFrom('LicenseManager@ruppertcompanies.com', 'License Manager');
	$mail->addAddress('LMinor@ruppertcompanies.com');

	$mail->isHTML(true);
  	$mail->AddEmbeddedImage('/var/www/html/EmailTest/RLLOGOsmall.jpg', 'logotag');
    
    
    $mail->Subject = $subject;
	
	
    $message = file_get_contents( 'email-header.php' );
    
    
    $message .= file_get_contents( 'email-body.html' );
    
    
    $message .= file_get_contents( 'email-footer.php' );

    
    $replacements = array( 
        "{message_subject}" => $subject, 
        "{message_body}" => nl2br( stripslashes( $message_content ) )
    );
    $message = preg_replace( array_keys( $replacements ), array_values( $replacements ), $message );
    
    
    $plaintext = $message_content;
    $plaintext = strip_tags( stripslashes( $plaintext ), '<p><br><h2><h3><h1><h4>' );
    $plaintext = str_replace( array( '<p>', '<br />', '<br>', '<h1>', '<h2>', '<h3>', '<h4>' ), PHP_EOL, $plaintext );
    $plaintext = str_replace( array( '</p>', '</h1>', '</h2>', '</h3>', '</h4>' ), '', $plaintext );
    $plaintext = html_entity_decode( stripslashes( $plaintext ) );

    
    $mail->MsgHTML( stripslashes( $message ) ); 
    
    $mail->AltBody = $plaintext;

    //Display success or error messages
    if( !$mail->Send() )
    {
        return 'Message send failure: ' . $mail->ErrorInfo;
    }
    else
    {
        
        return true;
    }

}

