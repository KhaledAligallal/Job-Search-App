
// Function to generate OTP
function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000); 
    return otp.toString(); 
}

export { generateOTP };
