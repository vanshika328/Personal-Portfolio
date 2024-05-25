<?php
if(isset($_SERVER['save'])) {
    $to = "";
    $subject = "Form"; 
    $email = $_SERVER['email']; 
    $message = $_SERVER['message']; 
    
   
    $info = "From: $name <$email>\r\n";
    $info .= "Reply-To: $email\r\n";
    
    
    mail($to, $subject, $message, $info);
    
    
    info("Location: call.php");
    exit();
}
echo "<pre>";
/*print_r($_SERVER);
echo "</pre>";
echo $_SERVER['PHP_SELF'];*/

echo "Thankyou for Your Form has been submitted !We will connect with you soon.... ";

?>

