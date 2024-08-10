// Utility function for email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Utility function for password validation
function validatePassword(password) {
    // Example: at least 6 characters long
    return password.length >= 6;
}

// Utility function for role validation
function validateRole(role) {
    const validRoles = ['Admin', 'User'];
    return validRoles.includes(role);
}

module.exports = {
    validateEmail,
    validatePassword,
    validateRole,
};
