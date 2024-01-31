document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form elements
    var loginForm = document.getElementById("loginForm");
    var resetPasswordForm = document.getElementById("resetPasswordForm");
    var signupForm = document.getElementById("signupForm");

    // Get references to the clickable elements
    var frontSide = document.getElementById("frontSide");
    var leftSide = document.getElementById("leftSide");
    var rightSide = document.getElementById("rightSide");

    var front = document.getElementById("front");
    var right = document.getElementById("right");
    var left = document.getElementById("left");

    // Show the login form by default
    hideAllForms();
    loginForm.style.display = "block";
    frontSide.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    // document.title = "Login";

    // Show the login form
    frontSide.addEventListener("click", function () {
        hideAllForms()
        front.style.display = "block";
        left.style.display = "none";
        right.style.display = "none";
        loginForm.style.display = "block";
        frontSide.style.display = "none";
        leftSide.style.display = "inline-block";
        rightSide.style.display = "inline-block";
        document.title = "Login";
    });

    // Show the "Sign Up" form
    rightSide.addEventListener("click", function () {
        hideAllForms()
        right.style.display = "block";
        left.style.display = "none";
        front.style.display = "none";
        signupForm.style.display = "block";
        frontSide.style.display = "inline-block";
        leftSide.style.display = "inline-block";
        rightSide.style.display = "none";
        document.title = "Sign Up";
    });

    // Show the "Forgot Password" form
    leftSide.addEventListener("click", function () {
        hideAllForms()
        left.style.display = "block";
        front.style.display = "none";
        right.style.display = "none";
        resetPasswordForm.style.display = "block";
        frontSide.style.display = "inline-block";
        leftSide.style.display = "none";
        rightSide.style.display = "inline-block";
        document.title = "Forgot Password";
    });

    // Function to hide all forms
    function hideAllForms() {
        loginForm.style.display = "none";
        resetPasswordForm.style.display = "none";
        signupForm.style.display = "none";
    }
});

// Another Login Page Sample
{/* <style>
// Custom styling for form inputs 
        .form-floating input,
        .form-floating select {
            height: 45px;
            border: 1px solid #ced4da;
            border-radius: 5px;
            padding: 10px;
            font-size: 16px;
        }

        .form-floating label {
            padding: 10px;
            font-size: 14px;
        }
</style>
<body>    
        <div class="row" id="User"
            style="display: none; width: 35vw; height: inherit; padding-top: 8rem; padding-bottom: 8rem;">
            <div class="col-md-12" id="front">
                Login Form
                <div class="card" id="loginForm2" style="background-color: #f8f9fa; border: 1px solid #dee2e6;">
                    <div class="card-header">
                        <h2 class="text-left" style="font-size: calc(1.325rem + .5vw); color: #495057;">Account Login
                        </h2>
                        <img src="/public/Images/BG.jpg" alt="BEUMER"
                            style="height:45px; width:150px; float:right; margin-top: -45px;">
                    </div>
                    <div class="card-body text-center">
                        <form action="/templates/views/dashboard.html">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="username" name="FirstName"
                                    placeholder="Username" required>
                                <label for="username">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email1" name="email" placeholder="Email"
                                    required>
                                <label for="email">Email Address</label>
                            </div>
                            <div class="input-group mb-3 mx-auto">
                                <div class="form-floating">
                                    <input type="password" class="form-control password-toggle" id="password1"
                                        name="password" minlength="6" maxlength="12" placeholder="Password" required>
                                    <label for="password">Password</label>
                                </div>
                                <button type="button" class="btn btn-outline-secondary bi-eye"></button>
                            </div>
                            <div id="errorMessage" style="color: red;"></div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-12" id="right">
                Sign-up Form
                <div class="card" id="signupForm2" style="background-color: #f8f9fa; border: 1px solid #dee2e6;">
                    <div class="card-header">
                        <h2 class="text-left" style="font-size: calc(1.325rem + .5vw); color: #495057;">Create an
                            Account</h2>
                        <img src="/public/Images/BG.jpg" alt="BEUMER"
                            style="height:45px; width:115px; float:right; margin-top: -45px;">
                    </div>
                    <div class="card-body text-center" style="height: 38vh;">
                        <form id="mySignupForm2" action="/signup" method="post" style="overflow: auto; height: 30vh;">
                            <div class="row justify-content-between">
                                <div class="form-floating pe-1 mb-3 col-md-6">
                                    <input type="text" class="form-control" id="FirstName" name="FirstName"
                                        placeholder="FirstName" required>
                                    <label for="FirstName">First Name</label>
                                </div>
                                <div class="form-floating ps-1 mb-3 col-md-6">
                                    <input type="text" class="form-control" id="LastName" name="LastName"
                                        placeholder="LastName" required>
                                    <label for="LastName">Last Name</label>
                                </div>
                            </div>
                            <div class="row justify-content-between">
                                <div class="form-floating pe-1 mb-3 col-md-6">
                                    <input type="email" class="form-control" id="email2" name="email"
                                        placeholder="Email" required>
                                    <label for="email">Email Address</label>
                                </div>
                                <div class="form-floating ps-1 mb-3 col-md-6">
                                    <input type="tel" class="form-control" name="contactNumber" id="contactNumber"
                                        pattern="[0-9]{10}" placeholder="xxxxxxxxxx" minlength="10" maxlength="10"
                                        required>
                                    <label for="contactNumber">Contact Number</label>
                                </div>
                            </div>
                            <div class="row justify-content-between">
                                <div class="col-md-6 pe-1">
                                    <div class="input-group mb-3 mx-auto">
                                        <div class="form-floating">
                                            <input type="password" class="form-control password-toggle" id="password2"
                                                name="password" minlength="6" maxlength="12" placeholder="Password"
                                                required>
                                            <label for="password">Create Password</label>
                                        </div>
                                        <button type="button" class="btn btn-outline-secondary bi-eye"></button>
                                    </div>
                                </div>
                                <div class="col-md-6 ps-1">
                                    <div class="input-group mb-3 mx-auto">
                                        <div class="form-floating">
                                            <input type="password" class="form-control password-toggle" id="password3"
                                                name="confirmPassword" minlength="6" maxlength="12"
                                                placeholder="Confirm Password" required>
                                            <label for="confirmPassword">Confirm Password</label>
                                        </div>
                                        <button type="button" class="btn btn-outline-secondary bi-eye"></button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <label for="gender">Gender</label><br>
                                <div class="form-check form-check-inline m-auto">
                                    <input type="radio" class="form-check-input my-1 h-auto" id="male" name="gender"
                                        value="Male" required>
                                    <label class="form-check-label py-1" for="male">Male</label>
                                </div>
                                <div class="form-check form-check-inline m-auto">
                                    <input type="radio" class="form-check-input my-1 h-auto" id="female" name="gender"
                                        value="Female" required>
                                    <label class="form-check-label py-1" for="female">Female</label>
                                </div>
                                <div class="form-check form-check-inline m-auto">
                                    <input type="radio" class="form-check-input my-1 h-auto" id="preferNotToSay"
                                        name="gender" value="PreferNotToSay" required>
                                    <label class="form-check-label py-1" for="preferNotToSay">Prefer not to say</label>
                                </div>
                            </div>
                            <div class="form-floating" style="position: absolute; top: 39.5vh; left: 15vw;">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-12" id="left">
                Reset Password Form
                <div class="card" id="resetPasswordForm2" style="background-color: #f8f9fa; border: 1px solid #dee2e6;">
                    <div class="card-header">
                        <h2 class="text-left" style="font-size: calc(1.325rem + .5vw); color: #495057;">Reset Password
                        </h2>
                        <img src="/public/Images/BG.jpg" alt="BEUMER"
                            style="height:45px; width:119px; float:right; margin-top: -45px;">
                    </div>
                    <div class="card-body text-center">
                        <form action="/reset" method="post">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="resetEmail2" name="email"
                                    placeholder="Email" required>
                                <label for="resetEmail2">Email Address</label>
                            </div>
                            <div id="otpSection1" style="display: none;">
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="otp" name="otp" min="00001"
                                        max="999999" required>
                                    <label for="otp">Enter OTP:</label>
                                </div>
                            </div>
                            <div id="passwordFields" style="display: none;">
                                <div class="input-group mb-3 mx-auto">
                                    <div class="form-floating">
                                        <input type="password" class="form-control password-toggle" id="password4"
                                            name="password" minlength="6" maxlength="12" placeholder="Password"
                                            required>
                                        <label for="password">New Password</label>
                                    </div>
                                    <button type="button" class="btn btn-outline-secondary bi-eye"></button>
                                </div>
                                <div class="input-group mb-3 mx-auto">
                                    <div class="form-floating">
                                        <input type="password" class="form-control password-toggle" id="password5"
                                            name="confirmPassword" minlength="6" maxlength="12"
                                            placeholder="Confirm Password" required>
                                        <label for="confirmPassword">Confirm Password</label>
                                    </div>
                                    <button type="button" class="btn btn-outline-secondary bi-eye"></button>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary" id="sendOtpBtn" onclick="sendOtp()">Send
                                OTP</button>
                            <button type="button" class="btn btn-primary mx-auto" id="validateEmailBtn"
                                onclick="validateEmail()" style="display: none;">Validate Email</button>
                            <button type="submit" class="btn btn-primary mx-auto" id="resetBtn2"
                                style="display: none;">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
                <button id="leftSide" type="button" class="btn btn-outline-primary">Forgot Password</button>
                <button id="frontSide" type="button" class="btn btn-outline-primary">Login</button>
                <button id="rightSide" type="button" class="btn btn-outline-primary">Sign Up</button>
            </div>
        </div>
</body> */}