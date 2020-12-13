<?php 
use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['name']) && isset($_POST['email'] ) && isset($_POST['subject'] ) && isset($_POST['body'] )){
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];
    
    //echo $name.$email.$subject.$body;
    //echo 'asdfasdf';

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    //smtp settings
    // $mail->isSMTP();
    // $mail->Host = "mail.orbititech.com";
    // $mail->SMTPAuth = true;
    // $mail->Username = "client@orbititech.com";
    // $mail->Password = 'orbit123';
    // $mail->Port = 465;
    // $mail->SMTPSecure = "ssl";

    //email settings
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress("roktimsazib92@gmail.com");
    $mail->Subject = ("$email ($name)");
    $mail->Body = $body;

    if($mail->send()){
        $status = "success";
        $response = "Email is sent!";
    }
    else
    {
        $status = "failed";
        $response = "Something is wrong: <br>" . $mail->ErrorInfo;
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
}else {
    echo 'no data';
}

?>