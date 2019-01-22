INDEX PHP FOR PHP MAILER

<?php

//If the form was submitted, process the email
if( isset( $_POST ) && !empty( $_POST ) )
{
    //Handle some basic validation
    $errors = array();
    
    
    if( !isset( $_POST['email'] ) || empty( $_POST['email'] ) || !filter_var( trim( $_POST['email'] ), FILTER_VALIDATE_EMAIL ) )
    {
        $errors[] = 'Please enter a valid email address';
    }
    
    if( !isset( $_POST['sender'] ) || empty( $_POST['sender'] ) || !filter_var( trim( $_POST['sender'] ), FILTER_VALIDATE_EMAIL ) )
    {
        $errors[] = 'Please enter a valid sender email address';
    }
    
    //Validate a subject line
    if( !isset( $_POST['subject'] ) || empty( $_POST['subject'] ) )
    {
        $errors[] = 'Please enter a subject for your email';
    }
    
    
    //If we have no errors
    if( empty( $errors ) )
    {
        
        require_once( 'phpmailer-config.php' );
        
        
        $logo = "/var/www/html/EmailTest/RLLOGOsmall.jpg";
        
        
        $status = send_message( $_POST['sender'], $_POST['email'], $_POST['subject'], $_POST['message'], $logo );
    }
    //Otherwise return the errors below in the body
}
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
    </head>
    <body>
        
        <?php
        if( isset( $errors ) && !empty( $errors ) )
        {
            foreach( $errors as $e )
            {
                echo '<strong>'. $e .'</strong><br />';
            }
        }
        ?>
        <form action="" method="post">
        
            <p>
                <label for="email">Recipient Email Address</label><br />
                
                <input type="text" name="email" value="<?php if( isset( $_POST['email'] ) ) echo $_POST['email']; ?>" />
            </p>
            <p>
                <label for="sender">YOUR Email Address</label><br />
                
                <input type="text" name="sender" value="<?php if( isset( $_POST['sender'] ) ) echo $_POST['sender']; ?>" />
            </p>
            <p>
                <label for="subject">Message Subject</label><br />
                
                <input type="text" name="subject" value="<?php if( isset( $_POST['subject'] ) ) echo $_POST['subject']; ?>" />
            </p>
             <p>
                <label for="message">Message</label><br />
                
                <textarea name="message" rows="10" cols="50"><?php if( isset( $_POST['message'] ) ) echo stripslashes( $_POST['message'] ); ?></textarea>

            </p>
            <p>
                <input type="submit" name="send" value="Send Message" />
            </p>
        </form>
        
        <?php
        if( isset( $status ) )
        {
            echo $status;
        }
        ?>

    </body>
</html>